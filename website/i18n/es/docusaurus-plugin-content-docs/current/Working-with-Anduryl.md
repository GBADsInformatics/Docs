---
id: Trabajando-con-Anduryl
title: Trabajando con Anduryl
sidebar_position: 10
---

## Requisitos previos
Puede instalar estos programas por separado o instalar Anaconda.
- *Opción 1*: Anaconda
- Instale la distribución [Anaconda](https://www.anaconda.com/products/distribution)
- *Opción 2*: Instalar por separado
- [Python3](https://www.python.org/downloads/) o superior
- [Cuaderno Jupyter](https://jupyter.org/install)
- Usarás Python para instalar Jupyter

## Instalación de andurilo
1. **Planifique** dónde desea instalar Anduryl.
- Le sugerimos que instale el módulo en un lugar de fácil acceso, como su carpeta de inicio.
- Terminología utilizada:
- *PARENT_FOLDER*: esta es la ruta a la carpeta en la que desea instalar Anduryl.
- Esto puede estar en cualquier parte de su sistema, se verá similar a esto (puede cambiar esto) <br/>
Windows: `C:/Usuarios/SU_NOMBRE` <br/>
Mac: `/casa/nombre`
2. **Descarga Anduryl**. Esto se puede hacer de 2 maneras, descargándolo desde su navegador o usando el comando git.
- *Opción 1*: Navegador
1. Navegue a https://github.com/GBADsInformatics/anduryl-plus
2. Haga clic en el botón verde "Código" y luego en "Descargar ZIP".
3. Mueva el ZIP descargado a *PARENT_FOLDER* en el que le gustaría instalar Anduryl.
4. Haga clic derecho en el ZIP y haga clic en "Extraer todo" o "Extraer aquí".
5. **Cambie el nombre** de la nueva carpeta `anduryl-plus-master` a `anduryl`
6. Abra el `Símbolo del sistema` o `Terminal` de su sistema operativo
7. Ejecute `cd INSERT_PARENT_FOLDER_HERE`
8. Ejecute `python -m anduryl`
- *Opción 2*: Comando Git (requiere que git esté instalado)
1. Abra su símbolo del sistema/terminal, luego navegue a su PARENT_FOLDER.
- Ejecute `cd INSERT_PARENT_FOLDER_HERE`
2. Ejecute `git clone https://github.com/GBADsInformatics/anduryl-plus.git`
3. Cambiar el nombre de `anduryl-plus` a `anduryl`
- Para hacerlo, ejecute `mv anduryl-plus anduryl`
4. Ejecute `python -m anduryl`

## Anduryl en Jupyter Notebook
**Andurilo importado**
- Para importar Anduryl, Jupyter necesita saber dónde encontrarlo. Agregue el bloque de código a continuación a la parte superior de su Jupyter Notebook para importar el módulo. <br/>
**Nota**: Cambie el código a su PARENT_FOLDER antes de ejecutarlo.
```pitón
#Mostrando el sistema donde encontrar Anduryl
sistema de importación
anduryl_path = 'INSERT_PARENT_FOLDER_HERE' # Ruta a la carpeta principal de anduryl
si anduryl_path no está en sys.path: sys.path.append(anduryl_path) # Agregar ruta a sys
importar anduril
```
**Ejemplos de uso**
- Para obtener más información sobre el uso de Anduryl en Jupyter Notebook, visite [Ejemplo de Anduryl con secuencias de comandos](https://htmlpreview.github.io/?https://github.com/grongen/anduryl/blob/master/notebooks/Example_Anduryl_with_scripting. html)

## Anduryl en R Studio
1. Instale la biblioteca reticulada para llamar a los módulos de python desde R.
- En R, escribe `install.packages("reticulate")`
- Siga el asistente para instalar reticulate
2. Importe reticulate y Anduryl ejecutando el siguiente código. <br/>
**Nota**: Cambie la primera línea a su PARENT_FOLDER
```R
anduryl_path = 'INSERTAR_PARENT_FOLDER_AQUÍ'
biblioteca("reticulada")
sistema <- importar("sistema")
if (!anduryl_path %in% sys$path)(sys$path <- append(sys$path, anduryl_path))
andurilo <- import("andurilo")
```
3. Cada vez que cargue R, deberá volver a ejecutar el paso 2.
4. Ejemplo de uso:
```r
proyecto <- anduryl$Proyecto()
proyecto
```
Este código debería generar
```r
Clase de proyecto principal.
Propiedades:
- evaluaciones
- expertos
- yo
- elementos
- resultados principales
- resultados
Métodos:
- add_results_from_settings
- calcular_tomador_de_decisiones
- calcular_expert_robustness
- calcular_item_robustness
- inicializar
- a_resultados
```
- Para obtener más información sobre la codificación con Anduryl, visite [Ejemplo de Anduryl con secuencias de comandos](https://htmlpreview.github.io/?https://github.com/grongen/anduryl/blob/master/notebooks/Example_Anduryl_with_scripting.html)
- **Nota**: debido a que codificará en R, hará referencia a los objetos usando `$` en lugar de `.`
- Ex. `anduryl$Project()` en lugar de `anduryl.Project()`
