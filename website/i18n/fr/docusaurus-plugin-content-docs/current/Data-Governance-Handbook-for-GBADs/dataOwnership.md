---
sidebar_position: 4
---
# Licences de données, confidentialité et sécurité

## Données sur un spectre

Les GBAD diffusent et, dans certains cas, stockent des données soumises à diverses restrictions d'accès, d'utilisation et de réutilisation. Toutes les données ne peuvent pas être ouvertes, et la confidentialité des données n'est pas aussi simple que d'avoir des données ouvertes ou privées. Afin d'encourager le partage, il est important que les contributeurs de données aient la possibilité de choisir comment ils aimeraient que leurs données soient utilisées, à quoi ils veulent qu'elles soient utilisées et par qui ils aimeraient qu'elles soient utilisées. Les accords de licence de données garantissent que l'utilisation des données n'est pas confuse et informent notre système sur qui peut voir, télécharger ou utiliser les données.

```{marge}
**Même les données définies comme "ouvertes" nécessitent une licence !** Lorsque vous utilisez des données ouvertes, vous devez toujours déterminer comment attribuer (ou citer) correctement l'ensemble de données. De plus, les données peuvent être considérées comme ouvertes mais peuvent toujours avoir des restrictions sur leur utilisation. Par exemple, certaines licences de données ouvertes limitent l'utilisation des données à des fins commerciales.
```

L'[Open Data Institute](https://theodi.org/about-the-odi/) communique cette idée en plaçant les données sur un spectre allant des données fermées aux données ouvertes.

<!-- ![AgDataSpectrum](/images/20210723_AgDataSpectrum_ODI.png) -->

## Catégories sur le spectre des données

Nous avons utilisé le spectre pour proposer quatre catégories de licences de données discrètes :

**Données ouvertes** : "Ouvrir signifie que n'importe qui peut librement accéder, utiliser, modifier et partager à toutes fins (sous réserve, au maximum, d'exigences qui préservent la provenance et l'ouverture)."

**Données d'accès public** : les données sont protégées par un accord de licence qui limite l'utilisation et la diffusion des données et/ou des modèles pour lesquels les données peuvent être utilisées. Cela pourrait inclure la manière dont les données peuvent être utilisées et à quelles fins, les exigences d'attribution, etc.

**Données d'accès basées sur le groupe** : une authentification est requise pour accéder aux données. Comme les données d'accès public, les données sont également protégées par un accord de licence qui limite l'utilisation et la diffusion des données et/ou des modèles pour lesquels les données peuvent être utilisées.

**Données d'accès nominatives et données d'accès internes** : Un contrat spécifique sera nécessaire pour articuler l'utilisation, l'attribution et les restrictions d'accès des données. Cela sera explicitement attribué par un contrat et/ou une NDA, ce qui nécessitera un contact direct avec l'équipe juridique de GBAD. Nous avons regroupé ces deux, car les deux auront besoin d'un contrat de données et nécessiteront un accès nommé (et authentifié) à utiliser.

```{avertissement} Décision nécessaire
- Comment les utilisateurs seront-ils authentifiés ?
- Comment les groupes d'utilisateurs seront-ils authentifiés ?
- Quelle licence utiliserons-nous pour les modèles générés par les GBAD et les sorties de données générées par les modèles ?
```

### Informations personnelles identifiables (IPI)

Les informations personnelles identifiables (PII) sont toutes les informations qui peuvent être utilisées pour identifier une personne, une résidence ou une ferme. Cela peut inclure des noms, des adresses e-mail, la géolocalisation ou des dossiers vétérinaires, par exemple. Quel que soit le type de PII, les données contenant doivent être gérées avec soin.

Les IPI doivent être protégées et sécurisées, avec des exigences d'accès restreintes. Selon le cas d'utilisation, les données peuvent être transformées pour protéger les PII. Par exemple, les géolocalisations peuvent monter en granularité spatiale et les données peuvent être fournies par régions ou zones ou par pays. Les adresses e-mail, les numéros de téléphone et les noms des fermes peuvent être chiffrés lors de l'ingestion et supprimés des tables de données.

```{avertissement} Infrastructure de stockage de données sécurisée
:classe: conseil
Étant donné que le GBADs Knowledge Engine est un service cloud, toutes les données qui incluent des informations personnelles seront stockées dans un compartiment sécurisé, tel que le compartiment [Amazon S3](https://aws.amazon.com/s3/).
```

## Licence

Les licences indiquent qui peut accéder aux données, comment les données peuvent être utilisées, par qui et à quelles fins et comment attribuer correctement les données.

### Utilisations de la licence
Les licences ont 3 utilitaires pour les GBAD, chacun étant informé par les principes CARE :

```{tabbed} 1. Protéger les contributeurs de données
**Chaque fois que des données sont fournies aux GBAD, les détenteurs de données devront sélectionner une licence pour leurs données.**

Il s'agit d'un mécanisme de partage CARE car les licences permettent aux contributeurs de données d'avoir le pouvoir de contrôler leurs données tout au long de leur cycle de vie et avec des licences qui dictent les restrictions d'utilisation des données, les données peuvent être utilisées pour le bénéfice collectif du détenteur des données individuellement, ou le groupe que le détenteur de données représente.

Les licences accessibles au public seront liées dans les métadonnées, et les informations de citation/attribution seront diffusées avec l'ensemble de données.
```

```{tabbed} 2. Informer les utilisateurs de données
Chaque ensemble de données fera l'objet d'une licence et les informations sur les licences et les citations seront disponibles dans les métadonnées de l'ensemble de données. Par conséquent, les utilisateurs de données seront informés de la manière dont ils peuvent utiliser les données auxquelles ils accèdent et de l'attribution qu'ils doivent utiliser.
```

```{tabbed} 3. Informer la vue système
Les données ouvertes et publiques seront accessibles à tout utilisateur qui accède au site, mais les données d'accès de groupe ou nominatives nécessiteront une authentification et seront donc inaccessibles par défaut.

En d'autres termes, la vue de GBADs Knowledge Engine sera informée par l'accord de licence. Dans certains cas, cela peut signifier que même les métadonnées ne seront pas montrées aux utilisateurs non autorisés. Dans d'autres cas, les métadonnées descriptives peuvent être disponibles et les utilisateurs peuvent demander l'accès. Ce que le public ou certains utilisateurs et groupes peuvent voir sera régi par les choix de l'utilisateur des données.
```

### Sélection de licence

Les détenteurs de données qui fournissent des données en libre accès ou en accès public doivent choisir un accord de licence pour leurs données. Il existe une série d'accords de licence de données parmi lesquels les détenteurs de données peuvent choisir. Ceux-ci inclus:

- Licences Creative Commons. L'[outil de sélection de licence Creative Commons](https://creativecommons.org/choose/) permet aux individus de sélectionner les fonctionnalités d'utilisation, d'adaptation et de partage, et fournit une licence qui reflète ces préférences.
- [Licences Open Data Commons](https://opendatacommons.org/licenses/) y compris la [Licence Open Data Commons Open Database (ODbl)](https://opendatacommons.org/licenses/odbl/), la [Open Data Commons Attribution License](https://opendatacommons.org/licenses/by/) et [Open Data Commons Public Domain Dedication and License (PDDL)](https://opendatacommons.org/licenses/pddl/).


```{avertissement} Licences lisibles par machine
GBADs étudie comment rendre les licences lisibles par machine, afin que les données qui transitent par le moteur de connaissances et sont stockées dans les référentiels GBADs puissent être plus FAIR. En outre, nous utilisons des restrictions de confidentialité des données pour informer les vues du système pour différents utilisateurs afin de protéger les exigences d'utilisation définies par les contributeurs de données.
```

```{avertissement} Décision nécessaire
Les GBAD doivent déterminer si les contributeurs de données peuvent modifier la licence de leurs données après les avoir soumises et, le cas échéant, comment communiquer aux personnes susceptibles d'avoir téléchargé les données en question. De plus, les GBAD doivent décider comment la rétraction des données affecte les modèles préexistants.
```



<!---

Types de données
GBADs est un courtier de confiance pour

les types de données suivants : autochtones, universitaires, non corporatifs (par exemple, des ONG),
données corporatives et commerciales (tableau 1). Grâce à des collaborations avec des programmes de sensibilisation communautaires et
d'autres organisations, les GBAD peuvent également servir de référentiel unique de données particulières. Les données peuvent tomber dans
plusieurs catégories (par exemple, les données peuvent être d'entreprise et commerciales). On peut aussi classer les données
comme ouvert (accessible à tous) ou privé (accessible uniquement à un ensemble défini d'utilisateurs). Les définitions
de chaque type de données fournit une base pour comprendre les spécifications de propriété, d'accès et de licence
des données traitées par GBADs et ses utilisateurs.

Les données et les types d'utilisateurs sont encore affinés car ils seront utilisés pour déterminer la vue du portail de données
interface. Par exemple, un vocabulaire contrôlé est nécessaire pour bien définir les données autochtones. Dans le
Contexte canadien, marquer les données simplement comme « données autochtones » n'est pas suffisant pour définir correctement la provenance
et la gouvernance de ces actifs de données. Il existe de nombreux types de peuples autochtones au Canada (Métis, Premières Nations,
etc.), chacun de différentes régions du pays et avec des traditions et des coutumes différentes. Par conséquent, dans l'ordre
pour que les données soient d'un intérêt collectif, les données doivent être correctement étiquetées en fonction du type de données autochtones
est liée à.

De même, pour les petits acteurs, il peut y avoir des besoins ontologiques qui ne sont pas encore anticipés, surtout quand
considérer chaque partie prenante dans une perspective globale. Si nous souhaitons être un courtier de données "de confiance" pour les petites
parties prenantes, groupes privés et marginalisés, il est important que nous travaillions avec nos contributeurs de données, en particulier
ceux qui n'ont pas d'électricité, pour annoter nos données de manière à ce que ce soit pour le bénéfice collectif des petites parties prenantes
(et pas seulement grand). --->

<!---Table 1 : Définitions des types de données

| Type de données | Définition |
| --- | --- |
| Données autochtones | Toutes les données détenues par les peuples autochtones et leurs territoires, y compris, mais sans s'y limiter, les données liées au patrimoine culturel, aux connaissances, aux ressources naturelles, aux pratiques et aux langues. Cela inclut les données « recueillies par les gouvernements et les institutions sur les peuples autochtones et leurs territoires » (GIDA, 2019). |
|Données académiques | Données détenues ou collectées par des personnes appartenant à des institutions académiques telles que des universités. Cela comprend les données disponibles dans des articles de revues universitaires et les données recueillies par le biais de procédures expérimentales pour la recherche. |
| Référentiels de données GBAD | Données collectées grâce à des collaborations avec les GBAD telles que des partenariats avec des communautés, des chercheurs, des institutions universitaires et des ONG. Notez que les données hébergées par les GBAD peuvent appartenir à d'autres catégories (c'est-à-dire que les données hébergées par les GBAD peuvent également être des données académiques), mais les GBAD régiront la licence et le degré de disponibilité et d'ouverture de ces données. |
| Données commerciales | Données provenant d'organisations commerciales, généralement, mais sans s'y limiter, une méthode de régularisation payée. |
| Données d'entreprise | Données obtenues auprès d'une entreprise, d'une organisation ou d'un groupe. Cela inclut les données provenant du gouvernement et des Nations Unies, telles que la Banque mondiale et la FAO. |
| Données non corporatives | Données provenant d'entités non corporatives, d'organisations ou d'individus. |
```{note} Les données peuvent être commerciales et d'entreprise, ou non commerciales.
``` --->


<!---

Licence


Pour s'assurer que les données sont FAIR(S) et CARE, les informations de licence pour chaque source de données seront accessibles aux utilisateurs dans le
métadonnées. Les informations de licence doivent être accessibles pour garantir que les utilisateurs puissent évaluer la réutilisabilité des données et se conformer
avec des restrictions potentielles d'utilisation des données et des exigences d'attribution. Des informations claires et accessibles sur les restrictions d'utilisation des données
sont particulièrement importants pour le respect des principes de CARE ; en particulier, pour protéger la souveraineté des données autochtones et lever le
droits et intérêts de tous les GBAD contributeurs de données autochtones (CARE : A1 ; A2 ; A3).

```{avertissement} Décision nécessaire
GBADs doit établir s'il a l'intention d'avoir une licence préférentielle pour toutes les données hébergées dans ses référentiels de données et si
cette licence doit garantir que les données ne peuvent pas être utilisées à des fins commerciales.
```

Les métadonnées de chaque source de données doivent inclure une URL vers le contrat de licence des données et toute métadonnée associée (le cas échéant).

Une liste d'accords de licence de données communes a été collectée et est disponible à l'annexe F : Accords de licence communs. Dans
certains cas, comme pour les données provenant de sources non professionnelles, les informations sur les licences peuvent ne pas avoir été déterminées ou décidées
sur. Les contributeurs de données recevront notre liste d'accords de licence de données préférés ou seront encouragés à sélectionner une licence
à l'aide de [l'outil de sélection de licence Creative Commons] (https://creativecommons.org/choose/).

Pour s'assurer que les données sont utilisées pour le bénéfice collectif des peuples autochtones, les contributeurs de données autochtones peuvent choisir de gouverner
qui a accès à leurs données (CARE:A2). Le portail de données GBADs sera conçu pour tenir compte de cette distinction et pour assurer la
la sécurité et la confidentialité des parties concernées.

Traitement des données ouvertes et privées
------------------------------

Le portail de données GBADs est un courtier de données, ce qui signifie que nous traitons et fournissons des données fournies par d'autres sources. Par conséquent, ce n'est pas
à la discrétion des GBAD pour déterminer qui peut accéder aux données qui ne sont pas hébergées par les GBAD. Pour s'assurer que les droits des données
contributeurs sont respectés, le portail de données et le site web informatique assureront la sécurité des données et ne seront accessibles que
par les personnes identifiées par les contributeurs/propriétaires des données.

Comme suggéré par FAIR:A2, les métadonnées de toutes les sources de données (ouvertes et privées) seront disponibles via un portail de recherche de métadonnées et
resteront accessibles même dans le cas où les données ne sont plus disponibles via le portail GBADs. Cependant, toutes les données
correspondant aux métadonnées seront disponibles pour tous les utilisateurs. Étant donné que les informations de provenance sont incluses dans les métadonnées, cela
permettre aux utilisateurs de données de suivre les sources de données archivées jusqu'à leur propriétaire d'origine.

GBADs anticipe les types d'utilisateurs suivants :
- Utilisateurs académiques
- Utilisateurs corporatifs
- Utilisateurs non professionnels
- Utilisateurs commerciaux

Les (méta)données ouvertes seront accessibles publiquement à tous les utilisateurs des GBAD. Voir Mécanismes de partage de données pour plus d'informations sur
comment le système GBADs gérera les différents types d'utilisateurs et les restrictions de données, tout en gardant la confidentialité et la sécurité une priorité pour le système. --->

