---
id: Dockerizing-Dashboards

title: Guía para acoplar paneles de control
author: "William Fitzjohn"
sidebar_position: 12
---

Autor: [@WilliamFitzjohn](https://github.com/WilliamFitzjohn) - Contácteme para obtener ayuda.<br/>
Esta es una guía que describe los pasos a seguir para crear una imagen de Docker desde un panel de trazado que se ejecuta en Flask.

## Tabla de contenido
1. [Requisitos previos](#requisitos previos)
1. [Preparación de código] (#preparación de código)
1. [El Dockerfile](#el-dockerfile)
1. [Archivos confidenciales](#archivos-confidenciales)
1. [Construyendo la imagen](#construyendo-la-imagen)
1. [Ejecutar el panel](#ejecutar-el-panel)
1. [Publicación del panel](#publicación-del-panel)

## Requisitos previos
Esta guía asume que ya tienes un panel de control establecido.<br/>
También deberías tener Docker instalado en tu sistema.

## Preparación del código
1. Asegúrese de que su `requirements.txt` contenga todos los módulos de Python necesarios para ejecutar su panel.
2. En el desarrollo, es posible que haya utilizado algo como `python wsgi.py` o `python Dashboard.py` para ejecutar su panel. Esto está bien para ejecutarlo temporalmente, pero en producción queremos usar un servidor Flask de producción para ejecutar la aplicación. Usaremos Waitress para nuestro servidor. Esto requiere que agregue una función al archivo que inicia su panel (wsgi.py o example_dashboard.py) que devuelve su aplicación Dash:
- Si creas una aplicación **Dash** normal, esto debería funcionar:
```pitón
def returnApp():
aplicación de devolución
```
- Si creas una aplicación **DashProxy**, esto debería funcionar:
```pitón
def returnApp():
devolver el servidor de aplicaciones
```

## El archivo Docker
agregue un nuevo archivo al directorio de su proyecto llamado `Dockerfile`. Docker utilizará este archivo para crear su imagen de Docker. Este archivo debe tener algunas características clave:
1. La imagen base: Para facilitar esto, usaremos una imagen con Python preinstalado.
2. Los requisitos previos de Python: Instalamos todos los módulos de Python que su panel necesita.
3. Los archivos del panel: luego copiamos los archivos a la imagen de la ventana acoplable.
4. La llamada de la aplicación: le indicamos a Docker cómo iniciar el panel dentro del contenedor.

A continuación se muestra un ejemplo de cómo debería verse el Dockerfile:
```archivo Docker
# Imagen base: probé algunas otras, esta fue la más fácil y resistente
# Puedes cambiar la versión de Python aquí si tienes problemas. Puedes encontrar
# más imágenes base en línea.
DESDE Python: 3.10.0-slim-buster

# Crea un directorio base en la imagen para trabajar
DIRTRABAJO /aplicación/dash

## Para algunos módulos de Python (psycopg2 y otros), es necesario preinstalar programas
## a través de apto. Hazlo aquí con un comando como:
# EJECUTAR actualización adecuada && \
# apt install -y INSERTAR PAQUETES AQUÍ && \
# rm -rf /var/lib/apt/lists/*

# Copie el archivo de requisitos en la imagen, luego instale los requisitos de Python
COPIAR requisitos.txt.
EJECUTAR pip install -r requisitos.txt

# Copie el resto de los archivos del panel en la imagen.
COPIAR . /aplicación/tablero

# Especificando el comando del tablero a través de camarera
# Mantenga 80 igual: esto simplemente está expuesto dentro del contenedor acoplable. Más tarde
# puedes asignar esto a cualquier puerto fuera del contenedor. Cambie "wsgi" por el
# nombre del archivo que editaste anteriormente en #code-preparation.2
CMD ["camarera-servicio","--host=0.0.0.0","--port=80","--call","wsgi:returnApp"]
```

## Archivos confidenciales
Algunos archivos, como los archivos `.env`, no deben publicarse en GitHub, por lo que debe agregar un .gitignore a su repositorio. El mismo concepto se aplica a la publicación de imágenes de Docker utilizando .dockerignore.

Agregue un archivo `.dockerignore` a su repositorio que incluya el nombre de los archivos confidenciales que no desea incluir en su imagen de Docker.

Todavía necesitamos nuestros archivos confidenciales (como `.env`) en el contenedor para ejecutar el servidor, pero permitimos que el usuario agregue esos archivos confidenciales más tarde cuando inicia el contenedor.

## Construyendo la imagen
Ahora que tenemos nuestro `Dockerfile` con instrucciones sobre cómo crear una imagen, podemos ejecutar un comando para crear nuestra imagen.<br/>
`docker build -t gbadsinformatics/dashboardname-dash .`<br/>
Ejecute este comando en el mismo directorio que su `Dockerfile`. Esto le dice a Docker que cree nuestra imagen y le dé un nombre de usuario/etiqueta: `gbadsinformatics/dashboardname-dash`. Este paso puede resultar tedioso si recibe errores de compilación. Es posible que necesites jugar con tu `requirements.txt` para obtener módulos de Python compatibles, o agregar dependencias de paquetes apt a tu `Dockerfile`. Solucione los problemas sobre la marcha; este suele ser el paso más difícil.

## Ejecutando el panel
Ahora que finalmente tienes una imagen sin errores de compilación, puedes probarla. Necesita crear un comando para ejecutar su imagen que se verá así:<br/>
`docker run -d -p 9090:80 gbadsinformatics/dashboardname-dash`
- `-d` le dice a Docker que ejecute el contenedor separado
- `-p 9090:80` le dice a Docker que reenvíe el puerto 80 dentro del contenedor al 9090 en la máquina host.<br/>
Aquí puede cambiar 9090 a cualquier puerto en el que desee ejecutar el tablero, no cambie 80.
- `gbadsinformatics/dashboardname-dash` debe ser como hayas llamado la imagen de la ventana acoplable.

Es posible que desee permitir que el usuario agregue [Archivos confidenciales](#archivos-confidenciales) como `.env`. Puedes hacer esto en la ventana acoplable con la etiqueta `-v`:<br/>
`docker run -d -p 9090:80 -v /local/path/to/.env:/app/.env gbadsinformatics/dashboardname-dash`
- El usuario cambiará `/local/path/to/.env` por la ruta completa del archivo confidencial en su máquina.
- Cambiará `/app/.env` al lugar donde se debe colocar el archivo confidencial en el contenedor.

Una vez que su contenedor esté en funcionamiento, debería poder ir al puerto especificado en su navegador web y ver el panel. Si tiene problemas, aquí tiene algunos comandos útiles:
- `docker ps --todos`<br/>
Esto muestra contenedores acoplables detenidos.
- `registros de ventana acoplable XXXX`<br/>
Esto muestra los registros de un contenedor con ID XXXX. Utilizará el resultado de docker ps para obtener una ID de contenedor.
- `docker exec -it XXXX /bin/bash`<br/>
Esto abre un caparazón dentro del contenedor para que pueda solucionar problemas dentro del contenedor.<br/>
**Sin embargo**, los cambios realizados dentro de un contenedor en ejecución son temporales y no se reflejarán en la imagen.

## Publicación del panel
Una vez que tenga una imagen funcional, puede publicarla en DockerHub a través de la línea de comando.
1. Cree un repositorio de DockerHub llamado `dashboardname-dash` con el nombre de su panel en la cuenta de DockerHub de GBADsInformatics.
2. Regrese a la línea de comando e inicie sesión en DockerHub:<br/>
`iniciar sesión en la ventana acoplable`
3. Envía la imagen a DockerHub:<br/>
`docker push gbadsinformatics/dashboardname-dash`

Ahora deberías intentar ejecutar un contenedor usando la imagen pública solo para comprobar que funciona correctamente. También puedes intentar usar GitHub Actions para crear la imagen automáticamente cuando la envías a tu repositorio de GitHub. ¡De esa manera nunca más necesitarás seguir estos pasos!
