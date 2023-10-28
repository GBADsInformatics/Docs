---
id: Deploying-Containers

title: "Implementación de contenedores en AWS ECS"
author: "William Fitzjohn"
date: "24/06/2023"
---
# Implementación de contenedores Docker en AWS ECS Fargate

Esta documentación proporciona una guía paso a paso sobre cómo crear una definición de tarea y un servicio, adjuntarlo a un balanceador de carga de aplicaciones (ALB) para publicarlo en Internet.

## Tabla de contenido
1. [Requisitos previos](#requisitos previos)
2. [Crear una definición de tarea](#crear-una-definición-de-tarea)
3. [Crear un servicio ECS](#create-an-ecs-service)
4. [Repara tus controles de salud](#health-checks)
4. [Revise su solicitud](#check-deployment)


## Descripción general
Aquí hay un diagrama que explica la arquitectura que seguiremos:
<div estilo={{ ancho: '100%' }}>
<iframe src="https://drive.google.com/file/d/18n2dxTfz5svM3HqqrfcEQ2qbEsvkI2oM/preview" width="100%" height="500px"></iframe>
</div>

Puede ver que nuestros contenedores acoplables se introducen en AWS a través de la definición de tarea y se convierten en un servicio. Para que los usuarios accedan a nuestros servicios, simplemente debemos agregar un nuevo grupo objetivo a nuestro balanceador de carga existente.

## Requisitos previos<a name="prerrequisitos"></a>
Antes de continuar con estos pasos, asegúrese de tener lo siguiente:

- Una cuenta de AWS con los permisos necesarios para crear recursos ECS, agregar grupos objetivo y modificar balanceadores de carga.
- Haber creado un contenedor acoplable a partir de nuestra guía anterior y publicarlo en DockerHub.

## Crear una definición de tarea<a name="create-a-task-definition"></a>
1. En AWS, navegue hasta Amazon Elastic Container Service > Definición de tarea > Crear nueva definición de tarea.
2. Nombre de la tarea: elija algo descriptivo como: `metadata-api-task` o `population-dash-task`
3. Contenedor: cree una definición de contenedor
1. Nombre del contenedor: ej. `contenedor-api-metadatos`
2. URI de imagen: su URI de imagen de DockerHub, por ejemplo. `gbadsinformatics/meta-api:último`
3. Mapeo de puertos: agregue aquí sus puertos expuestos, ej. TCP en el puerto 80 (http)\
Asegúrate de utilizar http; nuestro balanceador de carga agregará https más adelante por usted.
4. Variables de entorno: estas son las variables a las que se hace referencia en los contenedores acoplables. Para los paneles, usamos `DASH_BASE_URL` para establecer la ruta URL para el panel como `/dashboards/population`. Es necesario hacer referencia a estas variables en su código. No funcionará automáticamente. Otras aplicaciones que tenemos utilizan variables de entorno para pasar credenciales secretas.
4. Configurar el entorno: recursos
1. Cambie los recursos: normalmente cada contenedor lo configuramos en 1 vCPU y 2 GiB de memoria.
2. Rol de tarea: establecido en `ecsTaskExecutionRole`
3. Mantenga el almacenamiento y el registro como predeterminados
5. Finalmente revise y cree su definición de tarea.

## Crear un servicio ECS<a name="create-an-ecs-service"></a>
1. Regrese al clúster y haga clic en crear un nuevo servicio.
2. Configuración de implementación:
1. Asegúrese de tener un servicio seleccionado.
2. Seleccione Familia y elija su nueva definición de tarea.
3. Nombre del servicio: ex `metadata-api-service`
3. Redes:
1. Asegúrese de que esté seleccionada la VPC predeterminada y que las 3 subredes estén seleccionadas.
2. Elija el grupo de seguridad
- eliminar "predeterminado"
- agregue `GBADs-Dashboard-LB-SecurityGroup` (a pesar del nombre, esto se usa para todos los contenedores, no solo para los paneles)
4. Equilibrio de carga:
1. Seleccione "Usar un equilibrador de carga existente".
2. Elija `Dashboards-ALB` (Esto se usa para todos los contenedores, no solo para los paneles)
3. Seleccione "Usar un oyente existente".
4. Elija `443: HTTPS`: aquí es donde se agrega https.
5. Seleccione "Crear un nuevo grupo objetivo".
6. Nombre del grupo objetivo: algo así como `metadata-api-target-group`
7. Patrón de ruta: cambie esto a la URL base de su aplicación **pero agregue un '\*'**. \
Por ejemplo, `/dashboards/population*`, esto reenvía todo el tráfico con este patrón a nuestro nuevo contenedor.
8. Orden de evaluación: desplácese por las reglas existentes y seleccione el siguiente número en orden.\
A veces tenemos aplicaciones con patrones superpuestos como `/dashboards/population` y `/dashboards/population-v2`. Aquí es importante que la URL más larga tenga prioridad en el orden de evaluación (la URL más larga necesita un número menor). Es posible que tengas que cambiar algunas reglas para hacer espacio.
9. Ruta de verificación de estado: esta ruta se utiliza para verificar el estado de su solicitud. Esta suele ser la URL base de su aplicación o el sitio de documentos de una API. Como `/dashboards/population` o `/api/docs`
10. Haga clic en crear.

## Corrija sus controles de salud<a name="health-checks"></a>
Antes de verificar su servicio, debemos realizar un cambio en nuestro nuevo grupo objetivo para aceptar más códigos de retorno HTTP.
1. Vaya a EC2 > Grupos objetivo > su-nuevo-grupo-objetivo > Comprobaciones de estado > Editar
2. Abra la configuración avanzada de control de salud.
3. Cambie los códigos de éxito a `200-399`
4. Guardar cambios

## Verifique su aplicación<a name="check-deployment"></a>
Ahora puede ir a `www.gbadske.org/[su URL base aquí]` como `www.gbadske.org/dashboards/population` para verificar el estado de su solicitud.
