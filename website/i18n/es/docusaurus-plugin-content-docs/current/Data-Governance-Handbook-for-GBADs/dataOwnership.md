---
sidebar_position: 4
---
# Licencias de Datos, Privacidad y Seguridad

## Datos en un espectro

GBADs difunde y en algunos casos almacena datos que tienen diversas restricciones de acceso, uso y reutilización. No todos los datos pueden estar abiertos, y la privacidad de los datos no es tan simple como tener datos abiertos o privados. Para fomentar el intercambio, es importante que los contribuyentes de datos tengan la opción de seleccionar cómo les gustaría que se usaran sus datos, para qué quieren que se usen y quién les gustaría que los usaran. Los acuerdos de licencia de datos aseguran que el uso de datos no se confunda e informan a nuestro sistema sobre quién puede ver, descargar o usar datos.

```{margen}
**¡Incluso los datos que se definen como "Abiertos" necesitan una licencia!** Cuando usa datos abiertos, aún necesita determinar cómo atribuir (o citar) correctamente el conjunto de datos. Además, los datos se pueden considerar abiertos, pero aún pueden tener restricciones sobre para qué se pueden usar. Por ejemplo, algunas licencias de datos abiertos restringen el uso de datos con fines comerciales.
```

El [Instituto de Datos Abiertos](https://theodi.org/about-the-odi/) comunica esta idea colocando los datos en un espectro de datos cerrados a abiertos.

<!-- ![AgDataSpectrum](/images/20210723_AgDataSpectrum_ODI.png) -->

## Categorías en el espectro de datos

Usamos el espectro para generar cuatro categorías de licencias de datos discretos:

**Datos abiertos**: "Abierto significa que cualquiera puede acceder, usar, modificar y compartir libremente para cualquier propósito (sujeto, como máximo, a requisitos que preservan la procedencia y la apertura)".

**Datos de acceso público**: Los datos están protegidos por un acuerdo de licencia que limita el uso y la difusión de los datos y/o los modelos para los que se pueden utilizar los datos. Esto podría incluir la forma en que se pueden utilizar los datos y para qué fines, los requisitos de atribución, etc.

**Datos de acceso basados ​​en grupos**: se requiere autenticación para acceder a los datos. Al igual que los datos de acceso público, los datos también están protegidos por un acuerdo de licencia que limita el uso y la difusión de los datos y/o los modelos para los que se pueden utilizar.

**Datos de acceso nominal y datos de acceso interno**: Se requerirá un contrato especial para articular las restricciones de uso, atribución y acceso a los datos. Esto será asignado explícitamente por un contrato y/o NDA, que requerirá contacto directo con el equipo legal de GBAD. Agrupamos estos dos, porque ambos necesitarán un contrato de datos y requerirán acceso con nombre (y autenticado) para su uso.

```{advertencia} Decisión necesaria
- ¿Cómo se autenticarán los usuarios?
- ¿Cómo se autenticarán los grupos de usuarios?
- ¿Qué licencia usaremos para los modelos generados por GBAD y las salidas de datos generadas por los modelos?
```

### Información de identificación personal (PII)

La información de identificación personal (PII) es cualquier información que se puede utilizar para identificar a una persona, residencia o granja. Esto podría incluir nombres, direcciones de correo electrónico, geolocalización o registros veterinarios, por ejemplo. Independientemente del tipo de PII, los datos que contengan deben gestionarse con cuidado.

La PII debe estar protegida y segura, con requisitos de acceso restringido. Dependiendo del caso de uso, los datos pueden transformarse para proteger la PII. Por ejemplo, las geolocalizaciones pueden moverse hacia arriba en granularidad espacial y los datos pueden proporcionarse en regiones o zonas o por país. Las direcciones de correo electrónico, los números de teléfono y los nombres de las granjas pueden cifrarse en la ingesta y eliminarse de las tablas de datos.

```{admonición} Infraestructura de almacenamiento seguro de datos
:clase: consejo
Dado que GBADs Knowledge Engine es un servicio en la nube, todos los datos que incluyan PII se almacenarán en un depósito seguro, como el depósito [Amazon S3](https://aws.amazon.com/s3/).
```

## Licencia

Las licencias informan quién puede acceder a los datos, cómo se pueden utilizar los datos, quién puede utilizarlos y con qué fines y cómo atribuir correctamente los datos.

### Usos de la licencia
Las licencias tienen 3 utilidades para GBADs, cada una de las cuales está informada por los principios CARE:

```{tabbed} 1. Proteger a los contribuyentes de datos
**Cada vez que se aporten datos a GBAD, los titulares de datos deberán seleccionar una licencia para sus datos.**

Este es un mecanismo de intercambio de CARE porque las licencias permiten a los contribuyentes de datos tener la autoridad para controlar sus datos a lo largo de su ciclo de vida y con licencias que dictan las restricciones de uso de los datos, los datos se pueden usar para el beneficio colectivo del titular de los datos individualmente, o el grupo que representa el titular de los datos.

Las licencias disponibles públicamente se vincularán en los metadatos, y la información de citación/atribución se difundirá junto con el conjunto de datos.
```

```{tabbed} 2. Informar a los usuarios de datos
Cada conjunto de datos tendrá una licencia y la información de licencias y citas estará disponible en los metadatos del conjunto de datos. Por tanto, los usuarios de los datos serán informados de cómo pueden hacer uso de los datos a los que acceden y la atribución que deben hacer.
```

```{tabbed} 3. Informar vista del sistema
Los datos abiertos y públicos estarán disponibles para cualquier usuario que ingrese al sitio, pero los datos de acceso grupales o con nombre necesitarán autenticación y, por lo tanto, serán inaccesibles de manera predeterminada.

En otras palabras, la vista de GBADs Knowledge Engine será informada por el acuerdo de licencia. En algunos casos, esto puede significar que incluso los metadatos no se mostrarán a usuarios no autorizados. En otros casos, los metadatos descriptivos pueden estar disponibles y los usuarios pueden solicitar acceso. Lo que el público o ciertos usuarios y grupos pueden ver se regirá por las elecciones del usuario de datos.
```

### Selección de licencia

Los titulares de datos que contribuyen con datos abiertos o de acceso público deben elegir un acuerdo de licencia para sus datos. Hay un conjunto de acuerdos de licencia de datos entre los que pueden elegir los titulares de datos. Éstos incluyen:

- Licencias Creative Commons. La [herramienta de selección de licencias de Creative Commons](https://creativecommons.org/choose/) permite a las personas seleccionar las funciones de uso, adaptación y uso compartido, y proporciona una licencia que refleja estas preferencias.
- [Licencias Open Data Commons](https://opendatacommons.org/licenses/) incluida la [Open Data Commons Open Database License (ODbl)](https://opendatacommons.org/licenses/odbl/), la [Open Licencia de atribución de Data Commons](https://opendatacommons.org/licenses/by/) y [Licencia y dedicación de dominio público de Open Data Commons (PDDL)](https://opendatacommons.org/licenses/pddl/).


```{Advertencia} Licencias legibles por máquina
GBADs está explorando cómo hacer que las licencias sean legibles por máquina, de modo que los datos que fluyen a través del motor de conocimiento y se almacenan en los repositorios de GBADs puedan ser más JUSTOS. Además, usamos restricciones de privacidad de datos para informar las vistas del sistema para diferentes usuarios para ayudar a proteger los requisitos de uso establecidos por los contribuyentes de datos.
```

```{advertencia} Decisión necesaria
Los GBAD deben determinar si los contribuyentes de datos pueden cambiar la licencia de sus datos después de enviarlos y, de ser así, cómo comunicarse con las personas que pueden haber descargado los datos en cuestión. Además, los GBAD deben decidir cómo afecta la retracción de datos a los modelos preexistentes.
```



<!---

Tipos de datos
GBADs es un corredor de confianza para

los siguientes tipos de datos: indígenas, académicos, no corporativos (por ejemplo, ONG),
datos corporativos y comerciales (Tabla 1). A través de colaboraciones con programas de alcance comunitario y
otras organizaciones, los GBAD también pueden servir como el único depósito de datos particulares. Los datos pueden caer en
múltiples categorías (por ejemplo, los datos pueden ser corporativos y comerciales). También podemos clasificar los datos.
como abierto (accesible para todos) o privado (accesible solo para un conjunto definido de usuarios). Las definiciones
de cada tipo de datos proporciona una base para comprender las especificaciones de propiedad, acceso y licencia
de los datos manejados por GBADs y sus usuarios.

Los tipos de datos y usuarios se están refinando aún más, ya que se utilizarán para determinar la vista del portal de datos.
interfaz. Por ejemplo, se requiere un vocabulario controlado para definir correctamente los datos indígenas. En el
Contexto canadiense, marcar los datos simplemente como "datos indígenas" no es adecuado para definir correctamente la procedencia
y la gobernanza de estos activos de datos. Hay muchos tipos de pueblos indígenas en Canadá (Metis, Primeras Naciones,
etc.), cada uno de diferentes zonas del país y con diferentes tradiciones y costumbres. Por lo tanto, en orden
para que los datos sean de beneficio colectivo, los datos deben estar debidamente etiquetados para qué tipo de datos indígenas
está relacionado con.

De manera similar, para los pequeños interesados ​​puede haber necesidades ontológicas que aún no se anticipan, especialmente cuando
considerando a cada actor desde la perspectiva global. Si deseamos ser un corredor de datos 'confiable' para pequeñas
partes interesadas, grupos privados y marginados, es importante que trabajemos con nuestros contribuyentes de datos, especialmente
aquellos sin poder, para anotar nuestros datos de manera que sea para el beneficio colectivo de las pequeñas partes interesadas
(y no solo grande). --->

<!---Tabla 1: Definiciones de tipos de datos

| Tipo de datos | Definición |
| --- | --- |
| Datos indígenas | Todos los datos propiedad de los Pueblos Indígenas y sus territorios, incluidos, entre otros, los datos relacionados con el patrimonio cultural, el conocimiento, los recursos naturales, las prácticas y los idiomas. Esto incluye datos que son “recopilados por gobiernos e instituciones sobre los Pueblos Indígenas y sus territorios” (GIDA, 2019). |
|Datos académicos | Datos que son propiedad o recopilados por personas pertenecientes a instituciones académicas como Universidades. Esto incluye datos disponibles a través de artículos de revistas académicas y datos recopilados a través de procedimientos experimentales para la investigación. |
| Repositorios de datos GBADs | Datos que se recopilan a través de colaboraciones con GBAD, como asociaciones con comunidades, investigadores, instituciones académicas y ONG. Tenga en cuenta que los datos alojados por los GBAD pueden pertenecer a otras categorías (es decir, los datos alojados por los GBAD también pueden ser datos académicos), pero los GBAD regirán la concesión de licencias y el grado de disponibilidad y apertura de estos datos. |
| Datos comerciales | Datos de organizaciones comerciales, por lo general, entre otros, un método de acumulación pagado. |
| Datos corporativos | Datos obtenidos de una empresa corporativa, organización o grupo. Esto incluye datos de fuentes gubernamentales y de la ONU, como el Banco Mundial y la FAO. |
| Datos no corporativos | Datos de entidades no corporativas, organizaciones o individuos. |
```{nota} Los datos pueden ser comerciales y corporativos, o no comerciales.
``` --->


<!---

Licencia


Para garantizar que los datos sean FAIR(S) y CARE, la información de licencia para cada fuente de datos estará accesible para los usuarios en el
metadatos La información de licencia debe ser accesible para garantizar que los usuarios puedan evaluar la reutilización de los datos y cumplir
con posibles restricciones de uso de datos y requisitos de atribución. Información clara y accesible sobre restricciones de uso de datos
son especialmente importantes para el cumplimiento de los principios de CARE; en específico, para proteger la Soberanía de Datos Indígenas y levantar la
derechos e intereses de todos los contribuyentes de datos indígenas de GBAD (CARE: A1; A2; A3).

```{advertencia} Decisión necesaria
GBADs necesita establecer si tiene la intención de tener una licencia preferida para todos los datos alojados en sus repositorios de datos y si
esta licencia debe garantizar que los datos no se puedan utilizar con fines comerciales.
```

Los metadatos para cada fuente de datos deben incluir una URL al acuerdo de licencia de los datos y cualquier metadato relacionado (si corresponde).

Se ha recopilado una lista de acuerdos comunes de licencia de datos y está disponible en el Apéndice F: Acuerdos comunes de licencia. En
en algunos casos, como en el caso de datos provenientes de fuentes no corporativas, es posible que no se haya determinado o decidido la información sobre licencias
en. A los contribuyentes de datos se les proporcionará nuestra lista de acuerdos de licencia de datos preferidos o se les alentará a seleccionar una licencia
utilizando la [Herramienta de selección de licencias de Creative Commons] (https://creativecommons.org/choose/).

Para garantizar que los datos se utilicen para el beneficio colectivo de los Pueblos Indígenas, los contribuyentes de datos Indígenas pueden optar por gobernar
quién tiene acceso a sus datos (CARE:A2). El portal de datos GBADs se diseñará para dar cabida a esta distinción y garantizar la
seguridad y privacidad de las partes involucradas.

Manejo de datos abiertos y privados
------------------------------

El portal de datos de GBADs es un corredor de datos, lo que significa que manejamos y proporcionamos datos aportados por otras fuentes. Por lo tanto, no es
a discreción de los GBAD para determinar quién puede acceder a los datos que no están alojados en los GBAD. Para garantizar que los derechos de los datos
se respeta a los contribuyentes, el portal de datos y el sitio web de informática garantizarán que los datos estén seguros y solo se pueda acceder a ellos
por las personas identificadas por los contribuyentes/propietarios de los datos.

Como sugirió FAIR:A2, los metadatos para todas las fuentes de datos (abiertas y privadas) estarán disponibles a través de un portal de búsqueda de metadatos y
seguirá siendo accesible incluso en el caso de que los datos ya no estén disponibles a través del portal GBADs. Sin embargo, no todos los datos
correspondientes a los metadatos estarán disponibles para todos los usuarios. Debido a que la información de procedencia está incluida en los metadatos, esto
permitir a los usuarios de datos rastrear las fuentes de datos archivados hasta su propietario original.

GBADs prevé los siguientes tipos de usuarios:
- Usuarios académicos
- Usuarios corporativos
- Usuarios no corporativos
- Usuarios comerciales

Los (meta)datos abiertos serán de acceso público para todos los usuarios de GBAD. Consulte Mecanismos para compartir datos para obtener más información sobre
cómo el sistema GBADs manejará diferentes tipos de usuarios y restricciones de datos, manteniendo la privacidad y la seguridad como una prioridad para el sistema. --->

