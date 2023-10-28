---
sidebar_position: 9
---
# Licences de données, sécurité et confidentialité

Il existe trois cas principaux dans lesquels les licences, la confidentialité et la sécurité des données sont importantes :

1. S'assurer que nous utilisons, stockons et partageons les données conformément au contrat de licence et que nous citons correctement les données.
2. Stockage sécurisé des données privées pour protéger les informations personnelles
3. Attribuer une licence à toutes les données de sortie créées par les GBAD

Veiller à ce que les processus impliqués dans la sécurité et l’accès aux données dans les GBAD favorisent une communauté de confiance avec les contributeurs de données et les utilisateurs.

---

**Remarque sur les données privées :**

Nous n'utilisons actuellement que des données publiques pour les modèles dans les GBAD. En prévision des données privées, nous avons conceptualisé et créé l'infrastructure qui prendra en charge la sécurité des données privées.

---

**Le groupe de travail 1 doit être conscient des licences et de la confidentialité lors de la création de partenariats et d'alliances avec des contributeurs de données potentiels.**

## « Ouverture » ​​des données sur un spectre

GBADs diffuse et, dans certains cas, stocke des données soumises à diverses restrictions d'accès, d'utilisation et de réutilisation. Toutes les données ne peuvent pas être ouvertes, et la confidentialité des données n'est pas aussi simple que d'avoir des données ouvertes ou privées. Afin d’encourager le partage, il est important que les contributeurs de données aient la possibilité de choisir comment ils souhaitent que leurs données soient utilisées, à quoi ils souhaitent qu’elles soient utilisées et par qui ils souhaitent qu’elles soient utilisées. Les accords de licence de données garantissent que l'utilisation des données n'est pas confuse et informent notre système sur qui peut voir, télécharger ou utiliser les données.

```{marge}
**Même les données définies comme « Ouvertes » nécessitent une licence !** Lorsque vous utilisez des données ouvertes, vous devez toujours déterminer comment attribuer (ou citer) correctement l'ensemble de données. De plus, les données peuvent être considérées comme ouvertes, mais peuvent toujours être soumises à des restrictions quant à leur utilisation. Par exemple, certaines licences Open Data restreignent l’utilisation des données à des fins commerciales.
```

L'[Open Data Institute](https://theodi.org/about-the-odi/) communique cette idée en plaçant les données sur un spectre allant des données fermées aux données ouvertes.

![AgDataSpectrum](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/20210723_AgDataSpectrum_ODI.png)

## Catégories sur le spectre des données

Nous avons utilisé le spectre pour proposer quatre catégories distinctes de licences de données :

**Données ouvertes** : « Ouvert signifie que quiconque peut librement accéder, utiliser, modifier et partager à toutes fins (sous réserve, au maximum, des exigences qui préservent la provenance et l'ouverture).»

**Données d'accès public** : Les données sont protégées par un accord de licence qui limite l'utilisation et la diffusion des données et/ou les modèles pour lesquels les données peuvent être utilisées. Cela pourrait inclure la manière dont les données peuvent être utilisées et à quelles fins, les exigences d'attribution, etc.

**Données d'accès basées sur le groupe** : une authentification est requise pour accéder aux données. Comme les données accessibles au public, les données sont également protégées par un accord de licence qui limite l'utilisation et la diffusion des données et/ou les modèles pour lesquels les données peuvent être utilisées.

**Données d'accès nominatives et données d'accès internes** : Un contrat spécial sera nécessaire pour articuler l'utilisation, l'attribution et les restrictions d'accès aux données. Cela sera explicitement attribué par un contrat et/ou une NDA, qui nécessitera un contact direct avec l’équipe juridique du GBAD. Nous avons regroupé ces deux éléments, car tous deux nécessiteront un contrat de données et nécessiteront un accès nommé (et authentifié) pour être utilisés.

---

**Décisions nécessaires :**

* Comment les utilisateurs seront-ils authentifiés ?
* Comment les groupes d'utilisateurs seront-ils authentifiés ?
* Quelle licence utiliserons-nous pour les modèles générés par les GBAD et les sorties de données générées par les modèles ?

---

### Informations personnelles identifiables (PII)

Les informations personnelles identifiables (PII) sont toutes les informations qui peuvent être utilisées pour identifier une personne, une résidence ou une ferme. Cela peut inclure des noms, des adresses e-mail, la géolocalisation ou des dossiers vétérinaires par exemple. Quel que soit le type de données personnelles, les données qu'elles contiennent doivent être gérées avec soin.

Les informations personnelles doivent être protégées et sécurisées, avec des exigences d'accès restreintes. Selon le cas d'utilisation, les données peuvent être transformées pour protéger les informations personnelles. Par exemple, les géolocalisations peuvent progresser en granularité spatiale et les données peuvent être fournies par régions, zones ou pays. Les adresses e-mail, les numéros de téléphone et les noms des fermes peuvent être chiffrés lors de l'ingestion et supprimés des tables de données.

---

Infrastructure de stockage de données sécurisée

Étant donné que GBADs Knowledge Engine est un service cloud, toutes les données contenant des informations personnelles seront stockées dans un compartiment sécurisé, tel que le compartiment [Amazon S3](https://aws.amazon.com/s3/).

---

## Licences

Les licences indiquent qui peut accéder aux données, comment les données peuvent être utilisées, par qui et à quelles fins et comment attribuer correctement les données.

### Utilisations de la licence
Les licences disposent de 3 utilitaires pour les GBAD, chacun s'appuyant sur les principes CARE :

1. Protéger les contributeurs de données
**Chaque fois que des données sont ajoutées aux GBAD, les détenteurs de données devront sélectionner une licence pour leurs données.**

Il s'agit d'un mécanisme de partage CARE car les licences permettent aux contributeurs de données d'avoir le pouvoir de contrôler leurs données tout au long de leur cycle de vie et avec des licences qui dictent les restrictions d'utilisation des données, les données peuvent être utilisées pour le bénéfice collectif du détenteur des données individuellement, ou le groupe que représente le détenteur des données.

Les licences accessibles au public seront liées dans les métadonnées et les informations de citation/attribution seront diffusées avec l'ensemble de données.

2. Informer les utilisateurs de données
Chaque ensemble de données fera l'objet d'une licence et les informations de licence et de citation seront disponibles dans les métadonnées de l'ensemble de données. Par conséquent, les utilisateurs de données seront informés de la manière dont ils peuvent utiliser les données auxquelles ils accèdent et de l’attribution qu’ils doivent utiliser.

3. Informer la vue système
Les données ouvertes et publiques seront accessibles à tout utilisateur accédant au site, mais les données d'accès groupées ou nommées nécessiteront une authentification, et seront donc inaccessibles par défaut.

En d’autres termes, le point de vue du moteur de connaissances GBAD sera éclairé par l’accord de licence. Dans certains cas, cela peut signifier que même les métadonnées ne seront pas montrées aux utilisateurs non autorisés. Dans d'autres cas, les métadonnées descriptives peuvent être disponibles et les utilisateurs peuvent demander l'accès. Ce que le public, ou certains utilisateurs et groupes peuvent voir, sera régi par les choix de l'utilisateur des données.

### Sélection de licence

Les détenteurs de données contribuant à des données ouvertes ou d'accès public doivent choisir un accord de licence pour leurs données. Il existe une série d’accords de licence de données parmi lesquels les détenteurs de données peuvent choisir. Ceux-ci inclus:

* Licences Creative Commons. L'[outil de sélection de licence Creative Commons](https://creativecommons.org/choose/) permet aux individus de sélectionner les fonctionnalités d'utilisation, d'adaptation et de partage, et fournit une licence qui reflète ces préférences.
* [Licences Open Data Commons](https://opendatacommons.org/licenses/), y compris la [Licence Open Data Commons Open Database (ODbl)](https://opendatacommons.org/licenses/odbl/), la [Open Licence d'attribution Data Commons](https://opendatacommons.org/licenses/by/) et la [Dédicace et licence du domaine public Open Data Commons (PDDL)](https://opendatacommons.org/licenses/pddl/).

### Directions futures

Dans certains cas, des accords de données privées devront être conclus avec une équipe juridique pour garantir que les restrictions d'utilisation, la sécurité et les informations de licence sont correctement convenues entre le détenteur des données et les GBAD.

<!-- Licences lisibles par machine
GBADs étudie comment rendre les licences lisibles par machine, afin que les données qui circulent via le moteur de connaissances et sont stockées dans les référentiels GBADs puissent être plus ÉQUITABLES. De plus, nous utilisons des restrictions de confidentialité des données pour éclairer les vues du système pour différents utilisateurs afin de contribuer à protéger les exigences d'utilisation définies par les contributeurs de données. -->

<!--
```{avertissement} Décision nécessaire
Les GBAD doivent déterminer si les contributeurs de données peuvent modifier la licence de leurs données après les avoir soumises et, si oui, comment communiquer avec les personnes susceptibles d'avoir téléchargé les données en question. De plus, les GBAD doivent décider de la manière dont la rétraction des données affecte les modèles préexistants.
```
-->


<!---

Types de données
GBADs est un courtier de confiance pour

les types de données suivants : autochtones, universitaires, non corporatifs (par exemple ONG),
données d’entreprise et commerciales (tableau 1). Grâce à des collaborations avec des programmes de sensibilisation communautaire et
Pour d’autres organisations, les GBAD peuvent également servir de référentiel unique pour des données particulières. Les données peuvent tomber dans
plusieurs catégories (par exemple, les données peuvent être d’entreprise et commerciales). Nous pouvons également classer les données
comme ouvert (accessible à tous) ou privé (accessible uniquement à un ensemble défini d'utilisateurs). Les définitions
de chaque type de données fournit une base pour comprendre les spécifications de propriété, d'accès et de licence
des données traitées par GBADs et ses utilisateurs.

Les types de données et d'utilisateurs sont encore affinés car ils seront utilisés pour déterminer la vue du portail de données.
interface. Par exemple, un vocabulaire contrôlé est nécessaire pour définir correctement les données autochtones. Dans le
Dans le contexte canadien, marquer les données simplement comme « données autochtones » n'est pas adéquat pour définir correctement la provenance.
et la gouvernance de ces actifs de données. Il existe de nombreux types de peuples autochtones au Canada (Métis, Premières Nations,
etc.), chacun provenant de différentes régions du pays et avec des traditions et coutumes différentes. Par conséquent, afin
pour que les données soient d'un bénéfice collectif, elles doivent être correctement étiquetées selon le type de données autochtones auxquelles elles correspondent.
est liée à.

De même, pour les petits acteurs, il peut y avoir des besoins ontologiques qui ne sont pas encore anticipés, surtout lorsque
en considérant chaque partie prenante dans une perspective globale. Si nous souhaitons être un courtier de données « de confiance » pour les petites
parties prenantes, groupes privés et marginalisés, il est important que nous travaillions avec nos contributeurs de données, en particulier
ceux qui n'ont pas d'électricité, pour annoter nos données de manière à ce qu'elles soient pour le bénéfice collectif des petites parties prenantes
(et pas seulement grand). --->

<!---Tableau 1 : Définitions des types de données

| Type de données | Définition |
| --- | --- |
| Données autochtones | Toutes les données appartenant aux peuples autochtones et à leurs territoires, y compris, mais sans s'y limiter, les données liées au patrimoine culturel, aux connaissances, aux ressources naturelles, aux pratiques et aux langues. Cela inclut les données « collectées par les gouvernements et les institutions sur les peuples autochtones et leurs territoires » (GIDA, 2019). |
|Données académiques | Données détenues ou collectées par des personnes appartenant à des institutions académiques telles que des universités. Cela comprend les données disponibles dans des articles de revues universitaires et les données collectées via des procédures expérimentales pour la recherche. |
| Référentiels de données GBADs | Données collectées grâce à des collaborations avec les GBAD, tels que des partenariats avec des communautés, des chercheurs, des institutions universitaires et des ONG. Notez que les données hébergées par les GBAD peuvent appartenir à d'autres catégories (c'est-à-dire que les données hébergées par les GBAD peuvent également être des données académiques), mais les GBAD régiront la licence ainsi que le degré de disponibilité et d'ouverture de ces données. |
| Données commerciales | Données provenant d'organisations commerciales, généralement, mais sans s'y limiter, selon une méthode de comptabilité d'exercice payante. |
| Données d'entreprise | Données obtenues auprès d’une entreprise, d’une organisation ou d’un groupe. Cela inclut les données provenant des gouvernements et des Nations Unies, telles que la Banque mondiale et la FAO. |
| Données non-corporatives | Données provenant d'entités non morales, d'organisations ou de particuliers. |
```{note} Les données peuvent être commerciales et d'entreprise, ou non commerciales.
``` --->


<!---

Licence


Pour garantir que les données sont FAIR(S) et CARE, les informations de licence pour chaque source de données seront accessibles aux utilisateurs dans le
métadonnées. Les informations de licence doivent être accessibles pour garantir que les utilisateurs peuvent évaluer la réutilisation des données et se conformer
avec des restrictions potentielles d’utilisation des données et des exigences d’attribution. Des informations claires et accessibles sur les restrictions d’utilisation des données
sont particulièrement importants pour le respect des principes de CARE ; en particulier, pour protéger la souveraineté des données autochtones et lever la
droits et intérêts de tous les contributeurs de données autochtones du GBAD (CARE:A1;A2;A3).

```{avertissement} Décision nécessaire
GBADs doit déterminer s'il a l'intention d'avoir une licence privilégiée pour toutes les données hébergées dans ses référentiels de données et si
cette licence doit garantir que les données ne peuvent pas être utilisées à des fins commerciales.
```

Les métadonnées de chaque source de données doivent inclure une URL vers le contrat de licence des données et toutes les métadonnées associées (le cas échéant).

Une liste des accords de licence de données communs a été collectée et est disponible à l'Annexe F : Accords de licence communs. Dans
dans certains cas, comme pour les données provenant de sources non professionnelles, les informations sur les licences peuvent ne pas avoir été déterminées ou décidées
sur. Les contributeurs de données recevront notre liste d'accords de licence de données préférés ou seront encouragés à sélectionner une licence.
à l'aide de [l'outil de sélection de licence Creative Commons](https://creativecommons.org/choose/).

Pour garantir que les données sont utilisées pour le bénéfice collectif des peuples autochtones, les contributeurs de données autochtones peuvent choisir de gouverner
qui a accès à leurs données (CARE:A2). Le portail de données GBADs sera conçu pour tenir compte de cette distinction et garantir la
sécurité et confidentialité des parties impliquées.

Gestion des données ouvertes et privées
-------------------------------

Le portail de données GBADs est un courtier de données, ce qui signifie que nous traitons et fournissons des données provenant d'autres sources. Ce n’est donc pas
à la discrétion des GBADs pour déterminer qui peut accéder aux données qui ne sont pas hébergées par les GBADs. Pour garantir que les droits des données
les contributeurs sont respectés, le portail de données et le site informatique garantiront que les données sont sécurisées et accessibles uniquement
par les personnes identifiées par les contributeurs/propriétaires de données.

Comme suggéré par FAIR:A2, les métadonnées de toutes les sources de données (ouvertes et privées) seront disponibles via un portail de recherche de métadonnées et
resteront accessibles même dans le cas où les données ne seraient plus disponibles via le portail GBADs. Cependant, toutes les données
correspondant aux métadonnées seront disponibles pour tous les utilisateurs. Étant donné que les informations de provenance sont incluses dans les métadonnées, cela
permettre aux utilisateurs de données de suivre les sources de données archivées jusqu'à leur propriétaire d'origine.

GBADs anticipe les types d'utilisateurs suivants :
- Utilisateurs académiques
- Utilisateurs d'entreprise
- Utilisateurs non professionnels
- Utilisateurs commerciaux

Les (méta)données ouvertes seront accessibles publiquement à tous les utilisateurs des GBAD. Voir Mécanismes de partage de données pour plus d'informations sur
comment le système GBADs gérera différents types d'utilisateurs et restrictions de données, tout en gardant la confidentialité et la sécurité une priorité pour le système. --->

