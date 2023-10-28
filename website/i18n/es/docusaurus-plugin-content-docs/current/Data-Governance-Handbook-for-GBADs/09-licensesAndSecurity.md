---
sidebar_position: 9
---
# Licencias de datos, seguridad y privacidad

Hay tres casos principales en los que las licencias de datos, la privacidad y la seguridad son importantes:

1. Garantizar que utilizamos, almacenamos y compartimos datos de acuerdo con el acuerdo de licencia y que citamos los datos correctamente
2. Almacenamiento seguro de datos privados para proteger la PII
3. Atribuir una licencia a cualquier dato de salida creado por GBAD

Garantizar que los procesos involucrados en la seguridad y el acceso a los datos en los GBAD fomenten una comunidad de confianza con los contribuyentes y usuarios de datos.

---

**Nota sobre datos privados:**

Actualmente solo utilizamos datos públicos para modelos en GBAD. Anticipándonos a los datos privados, hemos conceptualizado y creado la infraestructura que respaldará la seguridad de los datos privados.

---

**El Grupo de Trabajo 1 debe tener en cuenta las licencias y la privacidad al crear asociaciones y alianzas con posibles contribuyentes de datos.**

## 'Apertura' de datos en un espectro

GBADs difunde y en algunos casos almacena datos que tienen diversas restricciones de acceso, uso y reutilización. No todos los datos pueden ser abiertos y la privacidad de los datos no es tan simple como tener datos abiertos o privados. Para fomentar el intercambio, es importante que los contribuyentes de datos tengan la opción de seleccionar cómo les gustaría que se usaran sus datos, para qué quieren que se usen y quién les gustaría que los usen. Los acuerdos de licencia de datos garantizan que el uso de datos no se confunda e informan a nuestro sistema sobre quién puede ver, descargar o usar datos.

```{margen}
**¡Incluso los datos definidos como "Abiertos" necesitan una licencia!** Cuando utiliza datos abiertos, aún necesita determinar cómo atribuir (o citar) correctamente el conjunto de datos. Además, los datos pueden considerarse abiertos, pero aún pueden tener restricciones sobre el uso que se les puede dar. Por ejemplo, algunas licencias de datos abiertos restringen el uso de datos con fines comerciales.
```

El [Open Data Institute](https://theodi.org/about-the-odi/) comunica esta idea poniendo los datos en un espectro que va desde datos cerrados hasta datos abiertos.

![AgDataSpectrum](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/20210723_AgDataSpectrum_ODI.png)

## Categorías en el espectro de datos

Utilizamos el espectro para crear cuatro categorías de licencias de datos discretas:

**Datos abiertos**: "Abierto significa que cualquiera puede acceder, utilizar, modificar y compartir libremente para cualquier propósito (sujeto, como máximo, a requisitos que preserven la procedencia y la apertura)".

**Datos de acceso público**: Los datos están protegidos por un acuerdo de licencia que limita el uso y difusión de los datos y/o los modelos para los que se pueden utilizar los datos. Esto podría incluir la forma en que se pueden utilizar los datos y con qué fines, requisitos de atribución, etc.

**Datos de acceso basados ​​en grupos**: se requiere autenticación para acceder a los datos. Al igual que los datos de acceso público, los datos también están protegidos por un acuerdo de licencia que limita el uso y la difusión de los datos y/o los modelos para los que se pueden utilizar.

**Datos de acceso nombrados y datos de acceso interno**: Se requerirá un contrato especial para articular el uso, la atribución y las restricciones de acceso de los datos. Esto será asignado explícitamente mediante un contrato y/o NDA, lo que requerirá contacto directo con el equipo legal de GBAD. Agrupamos estos dos porque ambos necesitarán un contrato de datos y requerirán acceso con nombre (y autenticado) para su uso.

---

**Decisiones necesarias:**

* ¿Cómo se autenticarán los usuarios?
* ¿Cómo se autenticarán los grupos de usuarios?
* ¿Qué licencia usaremos para los modelos generados por GBAD y las salidas de datos generadas por los modelos?

---

### Información de identificación personal (PII)

La información de identificación personal (PII) es cualquier información que pueda usarse para identificar a una persona, residencia o granja. Esto podría incluir nombres, direcciones de correo electrónico, geolocalización o registros veterinarios, por ejemplo. Independientemente del tipo de PII, los datos que contiene deben gestionarse con cuidado.

La PII debe estar protegida y segura, con requisitos de acceso restringido. Dependiendo del caso de uso, los datos pueden transformarse para proteger la PII. Por ejemplo, las geolocalizaciones pueden aumentar en granularidad espacial y los datos pueden proporcionarse en regiones o zonas o por país. Las direcciones de correo electrónico, los números de teléfono y los nombres de las granjas se pueden cifrar durante la ingesta y eliminarse de las tablas de datos.

---

Infraestructura de almacenamiento de datos segura

Como GBADs Knowledge Engine es un servicio en la nube, cualquier dato que incluya PII se almacenará en un depósito seguro, como el depósito [Amazon S3](https://aws.amazon.com/s3/).

---

## Licencia

Las licencias informan quién puede acceder a los datos, cómo se pueden utilizar los datos, quién puede utilizarlos y con qué fines y cómo atribuir correctamente los datos.

### Usos de la licencia
Las licencias tienen 3 utilidades para GBAD, cada una de las cuales se basa en los principios CARE:

1. Proteger a los contribuyentes de datos
**Cada vez que se aportan datos a GBAD, los titulares de datos deberán seleccionar una licencia para sus datos.**

Este es un mecanismo de intercambio CARE porque las licencias permiten a los contribuyentes de datos tener la autoridad para controlar sus datos durante todo su ciclo de vida y con licencias que dictan las restricciones de uso de los datos, los datos se pueden utilizar para el beneficio colectivo del titular de los datos individualmente, o el grupo que representa el titular de los datos.

Las licencias disponibles públicamente estarán vinculadas en los metadatos y la información de citas/atribución se difundirá junto con el conjunto de datos.

2. Informar a los usuarios de datos
Cada conjunto de datos tendrá licencia y la información sobre licencias y citas estará disponible en los metadatos del conjunto de datos. Por tanto, los usuarios de los datos serán informados de cómo pueden utilizar los datos a los que acceden y la atribución que deben utilizar.

3. Informar a la vista del sistema
Los datos abiertos y públicos estarán disponibles para cualquier usuario que ingrese al sitio, pero los datos de acceso grupales o con nombre necesitarán autenticación y, por lo tanto, serán inaccesibles de forma predeterminada.

En otras palabras, la vista de GBADs Knowledge Engine estará informada por el acuerdo de licencia. En algunos casos, esto puede significar que ni siquiera los metadatos se mostrarán a usuarios no autorizados. En otros casos, los metadatos descriptivos pueden estar disponibles y los usuarios podrían solicitar acceso. Lo que el público, o ciertos usuarios y grupos puedan ver, se regirá por las elecciones del usuario de los datos.

### Selección de licencia

Los titulares de datos que aporten datos abiertos o de acceso público deben elegir un acuerdo de licencia para sus datos. Existe un conjunto de acuerdos de licencia de datos entre los que los titulares de datos pueden elegir. Éstas incluyen:

* Licencias Creative Commons. La [herramienta de selección de licencias Creative Commons](https://creativecommons.org/choose/) permite a las personas seleccionar las características de uso, adaptación y uso compartido, y proporciona una licencia que refleja estas preferencias.
* [Licencias Open Data Commons](https://opendatacommons.org/licenses/) incluida la [Licencia de base de datos abierta Open Data Commons (ODbl)](https://opendatacommons.org/licenses/odbl/), la [Licencia Open Data Commons](https://opendatacommons.org/licenses/odbl/), Licencia de atribución de Data Commons](https://opendatacommons.org/licenses/by/) y [Licencia y dedicación de dominio público de Open Data Commons (PDDL)](https://opendatacommons.org/licenses/pddl/).

### Direcciones futuras

En algunos casos, será necesario celebrar acuerdos de datos privados con un equipo legal para garantizar que las restricciones de uso, la seguridad y la información de licencia se acuerden adecuadamente entre el titular de los datos y los GBAD.

<!-- Licencias legibles por máquina
GBADs está explorando cómo hacer que las licencias sean legibles por máquina, de modo que los datos que fluyen a través del motor de conocimiento y se almacenan en los repositorios de GBADs puedan ser más JUSTOS. Además, utilizamos restricciones de privacidad de datos para informar las vistas del sistema para diferentes usuarios para ayudar a proteger los requisitos de uso establecidos por los contribuyentes de datos. -->

<!--
```{admonición} Se necesita una decisión
Los GBAD deben determinar si los contribuyentes de datos pueden cambiar la licencia de sus datos después de enviarlos y, de ser así, cómo comunicarse con las personas que puedan haber descargado los datos en cuestión. Además, los GBAD deben decidir cómo afecta la retractación de datos a los modelos preexistentes.
```
-->


<!---

Tipos de datos
GBADs es un corredor confiable para

los siguientes tipos de datos: indígenas, académicos, no corporativos (por ejemplo, ONG),
datos corporativos y comerciales (Tabla 1). A través de colaboraciones con programas de extensión comunitaria y
En otras organizaciones, los GBAD también pueden servir como único depósito de datos particulares. Los datos pueden caer en
múltiples categorías (por ejemplo, los datos pueden ser corporativos y comerciales). También podemos clasificar los datos.
como abierto (accesible a todos) o privado (accesible sólo a un conjunto definido de usuarios). Las definiciones
de cada tipo de datos proporciona una base para comprender las especificaciones de propiedad, acceso y licencia
de los datos tratados por GBADs y sus usuarios.

Los datos y los tipos de usuarios se están perfeccionando aún más, ya que se utilizarán para determinar la vista del portal de datos.
interfaz. Por ejemplo, se requiere un vocabulario controlado para definir adecuadamente los datos indígenas. En el
En el contexto canadiense, marcar los datos simplemente como “datos indígenas” no es adecuado para definir adecuadamente la procedencia.
y gobernanza de estos activos de datos. Hay muchos tipos de pueblos indígenas en Canadá (Metìs, Primeras Naciones,
etc.), cada uno de diferentes zonas del país y con diferentes tradiciones y costumbres. Por lo tanto, para
Para que los datos sean de beneficio colectivo, los datos deben estar etiquetados adecuadamente según el tipo de datos indígenas a los que pertenecen.
está relacionado con.

De manera similar, para los pequeños actores puede haber necesidades ontológicas que aún no se anticipan, especialmente cuando
considerando a cada actor desde la perspectiva global. Si deseamos ser un intermediario de datos "confiable" para las pequeñas
partes interesadas, grupos privados y marginados, es importante que trabajemos con nuestros contribuyentes de datos, especialmente
aquellos sin poder, para anotar nuestros datos de manera que sean para el beneficio colectivo de las pequeñas partes interesadas
(y no sólo grandes). --->

<!---Tabla 1: Definiciones de tipos de datos

| Tipo de datos | Definición |
| --- | --- |
| Datos indígenas | Todos los datos propiedad de los Pueblos Indígenas y sus territorios, incluidos, entre otros, datos relacionados con el patrimonio cultural, el conocimiento, los recursos naturales, las prácticas y los idiomas. Esto incluye datos “recopilados por gobiernos e instituciones sobre los pueblos indígenas y sus territorios” (GIDA, 2019). |
|Datos académicos | Datos que pertenecen o son recopilados por personas pertenecientes a instituciones académicas como universidades. Esto incluye datos disponibles a través de artículos de revistas académicas y datos recopilados mediante procedimientos experimentales para investigación. |
| Repositorios de datos GBAD | Datos que se recopilan a través de colaboraciones con GBAD, como asociaciones con comunidades, investigadores, instituciones académicas y ONG. Tenga en cuenta que los datos alojados en los GBAD pueden pertenecer a otras categorías (es decir, los datos alojados en los GBAD también pueden ser datos académicos), pero los GBAD regirán la concesión de licencias y el grado de disponibilidad y apertura de estos datos. |
| Datos comerciales | Datos de organizaciones comerciales, generalmente, entre otros, un método de acumulación paga. |
| Datos corporativos | Datos obtenidos de una empresa corporativa, organización o grupo. Esto incluye datos obtenidos por gobiernos y Naciones Unidas, como el Banco Mundial y la FAO. |
| Datos no corporativos | Datos de entidades, organizaciones o personas físicas no corporativas. |
```{nota} Los datos pueden ser comerciales y corporativos, o no comerciales.
``` --->


<!---

Licencia


Para garantizar que los datos sean FAIR(S) y CARE, la información de licencia para cada fuente de datos será accesible para los usuarios en el
metadatos. La información sobre licencias debe ser accesible para garantizar que los usuarios puedan evaluar la reutilización de los datos y cumplir
con posibles restricciones de uso de datos y requisitos de atribución. Información clara y accesible sobre restricciones de uso de datos
son especialmente importantes para el cumplimiento de los principios de CARE; en concreto, proteger la soberanía de los datos indígenas y levantar la
derechos e intereses de todos los contribuyentes de datos indígenas de GBAD (CARE:A1;A2;A3).

```{admonición} Se necesita una decisión
GBADs necesita establecer si tiene la intención de tener una licencia preferida para todos los datos alojados en sus repositorios de datos y si
esta licencia debe garantizar que los datos no puedan utilizarse con fines comerciales.
```

Los metadatos de cada fuente de datos deben incluir una URL al acuerdo de licencia de los datos y cualquier metadato relacionado (si corresponde).

Se ha recopilado una lista de acuerdos de licencia de datos comunes y está disponible en el Apéndice F: Acuerdos de licencia comunes. En
En algunos casos, como en el caso de datos provenientes de fuentes no corporativas, es posible que la información sobre la licencia no se haya determinado o decidido.
en. A los contribuyentes de datos se les proporcionará nuestra lista de acuerdos de licencia de datos preferidos o se les animará a seleccionar una licencia.
utilizando la [Herramienta de selección de licencias Creative Commons] (https://creativecommons.org/choose/).

Para garantizar que los datos se utilicen para el beneficio colectivo de los Pueblos Indígenas, los contribuyentes de datos Indígenas pueden optar por gobernar
quién tiene acceso a sus datos (ATENCIÓN:A2). El portal de datos GBADs se diseñará para dar cabida a esta distinción y garantizar la
seguridad y privacidad de las partes involucradas.

Manejo de datos abiertos y privados
------------------------------

El portal de datos GBADs es un intermediario de datos, lo que significa que manejamos y proporcionamos datos aportados por otras fuentes. Por lo tanto, no es
queda a discreción de los GBAD determinar quién puede acceder a los datos que no están alojados en los GBAD. Para garantizar que los derechos de los datos
Se respeta a los contribuyentes, el portal de datos y el sitio web de informática garantizarán que los datos estén seguros y solo se pueda acceder a ellos.
por las personas identificadas por los aportantes/propietarios de los datos.

Como sugiere FAIR:A2, los metadatos de todas las fuentes de datos (abiertas y privadas) estarán disponibles a través de un portal de búsqueda de metadatos y
permanecerá accesible incluso en el caso de que los datos ya no estén disponibles a través del portal GBADs. Sin embargo, no todos los datos
correspondientes a los metadatos estarán disponibles para todos los usuarios. Debido a que la información de procedencia está incluida en los metadatos, esto
Permitir a los usuarios de datos rastrear las fuentes de datos archivados hasta su propietario original.

GBADs anticipa los siguientes tipos de usuarios:
- Usuarios académicos
- Usuarios corporativos
- Usuarios no corporativos
- Usuarios comerciales

Los (meta)datos abiertos serán de acceso público para todos los usuarios de GBAD. Consulte Mecanismos para compartir datos para obtener más información sobre
cómo el sistema GBADs manejará los diferentes tipos de usuarios y restricciones de datos, manteniendo al mismo tiempo la privacidad y la seguridad como una prioridad para el sistema. --->

