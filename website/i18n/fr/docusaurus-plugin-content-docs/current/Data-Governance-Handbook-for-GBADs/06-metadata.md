---
sidebar_position: 6
---

# Métadonnées

Les métadonnées sont des « données sur les données ».

Les métadonnées sont utilisées pour stocker des informations sur les actifs de données stockées dans le moteur de connaissances GBADs. Nous nous efforçons que les métadonnées soient ÉQUITABLES (Trouvables, Accessibles, Interopérables et Réutilisables).

De plus, nous collectons des métadonnées sur les processus d'ingestion de données dans le moteur de connaissances pour garantir que tout le traçage des données est suivi.





<!-- Les normes de données techniques sont un élément important de la stratégie de gouvernance des données, car elles garantissent que les données sont trouvables.
et Interopérable et que des comparaisons et des mappages entre différentes sources de données peuvent être établis.

Les normes relatives aux données, y compris les termes des métadonnées, les attributs, la structure et les conventions de dénomination standardisées, permettent aux données de
être catalogués et des informations doivent être tirées sur les actifs de données. Par exemple, des conventions de dénomination standard et bien définies permettent
données à interroger. Nous sommes en mesure de suivre les types de données dont nous disposons et les domaines dans lesquels davantage de données sont nécessaires. Avec
des vocabulaires standard entre les sources de données, des mappages entre les sources peuvent être créés, nous permettant de comprendre la relation
entre les sources de données et fournir un aperçu de la qualité et de la fiabilité de ces sources de données.

Des normes de données techniques existent dans chacune des catégories suivantes : structure des (méta)données, contenu des (méta)données (vocabulaires).
et le format méta (données). -->

## Schéma de métadonnées

"Un schéma de métadonnées est un ensemble de règles sur les types de déclarations sujet-prédicat-objet que l'on est autorisé à faire et comment on est autorisé à les faire." - Jeffery Pomerantz

Une instruction sujet-prédicat-objet consiste en :
* Sujet = la chose décrite
* Objet = la chose décrivant le sujet
* Prédicat = relation entre le sujet et l'objet

Par exemple:
* Sujet = ensemble de données FAOSTAT QCL
* Objet = FAO
* Prédicat = créateur

Dans cette déclaration sujet-prédicat-objet, la FAO est le créateur de l'ensemble de données FAOSTAT QCL.

Sur la base de ce modèle, nous pouvons créer un schéma de métadonnées qui définit les prédicats (également appelés éléments) que nous aimerions utiliser pour décrire une ressource. Vocabulaires de métadonnées tels que [Dublin Core](https://www.dublincore.org/), [schema.org](https://schema.org/), [PROV-DM](https://www.w3 .org/TR/prov-dm/) et [DCAT](https://www.w3.org/TR/vocab-dcat-2/) , fournissent des éléments de métadonnées qui peuvent être utilisés pour décrire les données. Il n’existe pas de solution universelle en matière de métadonnées. Il existe plusieurs ensembles d'éléments de métadonnées standard, car ce que vous inclurez dans les métadonnées dépend de votre cas d'utilisation.

Nous avons sélectionné des éléments de métadonnées de schema.org et PROV-DM pour décrire les données et tracer le lignage des données dans le moteur de connaissances (voir la figure ci-dessous).

![Modèle de métadonnées](./images/metadata Model.drawio.png)

## Schéma d'encodage

Chaque élément de métadonnées doit avoir des instructions sur les valeurs attendues pour chaque élément. Par exemple, il existe de nombreuses façons différentes de spécifier une date : 04/01/23 peut signifier le 4 janvier 2023 ou le 1er avril 2023. Par conséquent, toutes les valeurs d'un élément spécifiant une date doivent utiliser [ISO-8601](https : //www.iso.org/iso-8601-date-and-time-format.html) pour garantir que toutes les dates sont formatées de manière standard.

Le schéma de codage de chaque élément de métadonnées utilisé dans le métadataModel se trouve ci-dessous :

| Élément | Schéma de codage | Type attendu |
| ------- | --------------- | --------------- |
| [nom](https://schema.org/name) | texte libre | str |
| [codeRepository](https://schema.org/codeRepository) | lien vers le dépôt GitHub | str |
| [runtimePlatform](https://schema.org/runtimePlatform) | nom du langage de programmation ou de la plate-forme utilisée lors de l'exécution (nécessite un vocabulaire contrôlé) | str |
| [dateCreated](https://schema.org/dateCreated) |[ISO-8601](https://www.iso.org/iso-8601-date-and-time-format.html) | dateheure |
| [startTime](https://schema.org/startTime) |[ISO-8601](https://www.iso.org/iso-8601-date-and-time-format.html)| dateheure |
| [endTime](https://schema.org/endTime) |[ISO-8601](https://www.iso.org/iso-8601-date-and-time-format.html)| dateheure |
| prov:type | Vocabulaire contrôlé à construire pour le cas d'utilisation (*c'est-à-dire* ingestionEvent, dataCleaning etc.) | str |
| [description](https://schema.org/description) | texte libre | str|
| [url](https://schema.org/url) | URL | str |
| [identifiant](https://schema.org/identifier) ​​| URL, doi ou uri | str |
| [licence](https://schema.org/license) | URL | str |
| [temporalCoverage](https://schema.org/temporalCoverage) |[ISO-8601](https://www.iso.org/iso-8601-date-and-time-format.html) | dateheure |
| [créateur](https://schema.org/creator) | texte libre | str |
| [inDefinedTermSet](https://schema.org/inDefinedTermSet) | URL | str |
| [termCode](https://schema.org/termCode) | code à partir d'un ensemble de termes définis | str |
| [Lieu](https://schema.org/Place) | [GéoNoms](https://www.geonames.org/)| str |
| [contentSize](https://schema.org/contentSize) | Taille du fichier en mégaoctets | flotter |
| [fileFormat](https://schema.org/fileFormat) | Format de fichier. L'un des : csv, json, dbtable etc. (vocabulaire contrôlé requis) | str |
| [contentUrl](https://schema.org/contentUrl) | URL | URL |
| [uploadDate](https://schema.org/uploadDate) | [ISO-8601](https://www.iso.org/iso-8601-date-and-time-format.html) | dateheure |

---

Décision nécessaire :

Actuellement, les mots-clés pour les métadonnées sont créés en extrayant des termes (comme les espèces) à partir d'ensembles de données.

Un vocabulaire contrôlé doit être créé pour lier les mots-clés. Nous avons commencé à le faire en collectant toutes les classifications et définitions d'espèces à partir de sources de données, mais les synonymes n'ont pas encore été identifiés.

---

<!-- Contenu des métadonnées


Pour annoter les termes des métadonnées, des vocabulaires standard sont utilisés (voir l'annexe D). Par exemple, toutes les dates indiquées dans les métadonnées sont...

Conditions des métadonnées


Les termes des métadonnées sont adaptés du
- [Profil d'application (AP) du Système international pour les sciences et technologies agricoles (AGRIS)](http://www.fao.org/3/ae909e/ae909e05.htm#P460_23819)
- [Dublin Core Metadata Initiative (DCMI)](https://dublincore.org/specifications/dublin-core)
- [Ensemble d'éléments de métadonnées agricoles (AgMES)](https://fairsharing.org/FAIRsharing.vd694s)
- Cette norme est obsolète bien que la FAO la cite toujours.

Un index des normes de métadonnées est disponible dans le [Catalogue des normes de métadonnées](https://rdamsc.bath.ac.uk/scheme-index).

Les GBAD étendront et affineront davantage les conditions pour répondre aux besoins spécifiques en matière de gouvernance et de provenance des données collectées par ou
gérées par le système de portail de données GBADs.
## Structure des métadonnées

Les schémas de métadonnées seront stockés au format [JSON-LD](https://json-ld.org/). JSON-LD est un format de données structuré qui prend en charge la mise en œuvre de données liées. L'[outil de métadonnées structurées](https://search.google.com/structured-data/testing-tool/) de Google est utilisé pour tester si les métadonnées de sortie sont valides.

Il existe 3 principaux types de métadonnées, chacune servant un objectif spécifique dans le cycle de vie des données (Riley, 2017) (Tableau 1).

Les métadonnées descriptives incluent des informations sur la source de données utilisée pour rechercher et comprendre une ressource. Cela inclut des informations sur le contexte des données, y compris des informations sur leur provenance, le cas échéant. Les métadonnées descriptives fournissent des informations qui permettront aux données d'être trouvables et interopérables.

Les métadonnées administratives comprennent deux sous-ensembles de métadonnées : les métadonnées techniques et les métadonnées de droits. Riley (2017) décrit les métadonnées administratives comme des métadonnées utilisées pour la gestion d'une ressource de données donnée. Les métadonnées de droits fournissent des informations sur les licences et les droits d'auteur d'une source donnée, tandis que les métadonnées techniques fournissent des informations sur le type de fichier et la taille des données. Les métadonnées structurelles décrivent les relations entre des parties de ressources et d'autres. Cela peut inclure des informations sur la façon dont les données sont organisées ou affichées, les relations hiérarchiques ou la séquence des objets de données. Pour les contextes des GBAD, les métadonnées structurelles sont également importantes pour stocker des informations sur l'accessibilité des sources de données privées.

Tableau 1 : Types de métadonnées et définitions. Tableau adapté de Riley, 2017.
| Type de métadonnées | Définition | Exemples de propriétés | Utilisations principales |
| --------------- | ---------- | ------------------ | ------------ |
| Métadonnées descriptives | Pour trouver et comprendre une ressource ; pour la qualité des données. | Titre, Auteur, Sujet, Genre, Date de publication | Trouvabilité, affichage, interopérabilité |
| - Métadonnées administratives - Métadonnées techniques - Métadonnées de droits | - Pour le décodage et le rendu des fichiers - Gestion à long terme des fichiers - Droits de propriété intellectuelle attachés aux contenus | Technique : type de fichier, taille du fichier, date/heure de création Droits : statut du droit d'auteur, termes de la licence, titulaire des droits | Interopérabilité, Gestion des objets numériques, Préservation |
| Métadonnées structurelles | Relations des parties de ressources entre elles. | Séquence, Place dans la hiérarchie | Navigation |

Les métadonnées peuvent inclure différents termes selon le contexte de la source. Le tableau 2 contient une liste de tous les termes possibles que les métadonnées
pourraient inclure ainsi que leurs URI. Lorsqu'un terme de métadonnées est utilisé, l'URI de ce terme doit être pris en compte dans la section `@context`
du script JSON-LD. Cela permet de faire remonter la définition du terme à une définition standardisée.

Chaque actif de données du système doit être au minimum décrit avec les termes suivants (le premier ensemble de termes avant la ligne vide dans le tableau 2) : URI,
accessRights, AccuralMethod, contributeur, couverture, date, dateSoumis, description, format, identifiant, langue, médiateur, provenance, spatial,
temporel, titre, type, sujet Thésaurus, sujet Classification.

Lorsque les données sont modifiées par les GBAD ou sont issues de la sortie d'un modèle, cela doit être accrédité dans les métadonnées. Dans ces cas, les éléments suivants
les termes peuvent être utilisés : modifié, alternatif, remplace, isPartof, isFormat, hasFormat, hasPart, isRequiredBy, isVersionOf, hasVersion, provenance,
a besoin. Par exemple, dans le cas où GBADs a acquis une ressource de données qui est passée d'un vocabulaire à un autre terme de métadonnées
isVersionOf, provenance, exigeants et modifiés seraient utilisés pour refléter les changements. -->

<!-- Tableau 2 : Tous les termes de métadonnées possibles et les URI respectifs.

```json

"@contexte": {
"URI": "",
"accessRights": "http://purl.org/dc/terms/accessRights",
"accrualMethod": "http://purl.org/dc/terms/accrualMethod",
"contributeur": "http://purl.org/dc/terms/contributor",
"coverage": "http://purl.org/dc/terms/coverage",
"date": "http://purl.org/dc/terms/date",
"dateSubmit": "http://purl.org/dc/terms/dateSubowned",
"description": "http://purl.org/dc/terms/description",
"format": "http://purl.org/dc/terms/format",
"identifiant": "http://purl.org/dc/terms/identifier",
"langue": "http://purl.org/dc/terms/langue",
"mediator": "http://purl.org/dc/terms/mediator",
"provenance": "http://purl.org/dc/terms/provenance",
"rights": "http://purl.org/dc/terms/rights",
"spatial": "http://purl.org/dc/terms/spatial",
"temporel": "http://purl.org/dc/terms/temporal",
"title": "http://purl.org/dc/terms/title",
"type": "http://purl.org/dc/terms/type",
"subjectThesaurus": "http://www.fao.org/3/ae909e/ae909e00.htm#TopOfPage#subjectThesaurus",
"subjectClassification": "http://www.fao.org/3/ae909e/ae909e00.htm#TopOfPage#subjectClassification",

"accrualPeriodicity": "http://purl.org/dc/terms/accrualPeriodicity",
"accrualPolicy": "http://purl.org/dc/terms/accrualPolicy",
"alternative": "http://purl.org/dc/terms/alternative",
"audience": "http://purl.org/dc/terms/audience",
"disponible": "http://purl.org/dc/terms/available",
"bibliographicCitation": "http://purl.org/dc/terms/bibliographicCitation",
"conformsTo": "http://purl.org/dc/terms/conformsTo",
"créé": "http://purl.org/dc/terms/created",
"creator": "http://purl.org/dc/terms/creator",
"dateAccepted": "http://purl.org/dc/terms/dateAccepted",
"dateCopyrighted": "http://purl.org/dc/terms/dateCopyrighted",
"extent": "http://purl.org/dc/terms/extent",
"hasFormat": "http://purl.org/dc/terms/hasFormat",
"isFormatOf": "http://purl.org/dc/terms/isFormatOf",
"hasPart": "http://purl.org/dc/terms/hasPart",
"isPartOf": "http://purl.org/dc/terms/isPartOf",
"hasVersion": "http://purl.org/dc/terms/hasVersion",
"isVersionOf": "http://purl.org/dc/terms/isVersionOf",
"isReferencedBy": "http://purl.org/dc/terms/isReferencedBy",
"replaces": "http://purl.org/dc/terms/replaces",
"isReplacedBy": "http://purl.org/dc/terms/isReplacedBy",
"requires": "http://purl.org/dc/terms/requires",
"isRequiredBy": "http://purl.org/dc/terms/isRequiredBy",
"licence": "http://purl.org/dc/terms/license",
"modifié": "http://purl.org/dc/terms/modified",
"references": "http://purl.org/dc/terms/references",
"rightsHolder": "http://purl.org/dc/terms/rightsHolder",
"source": "http://purl.org/dc/terms/source",
"sujet": "http://purl.org/dc/terms/subject",
"tableOfContents": "http://purl.org/dc/terms/tableOfContents"

``` -->

<!-- Des métadonnées riches avec des termes décrivant le processus par lequel les données originales ont été obtenues, enregistrées et collectées fournissent un contexte -->
<!-- sur la qualité des données et quelles sources de données peuvent être combinées avec d'autres. Le tableau 3 fournit les termes de métadonnées qui ont été adaptés
des directives GATHER. Lorsqu'un contributeur de données fournit une source de données, il devra remplir un formulaire pour fournir
contexte sur les données fournies. Les réponses sur le formulaire généreront les métadonnées descriptives pour cette source de données. Le
les termes utilisés pour décrire les actifs de données dépendront de la nature de la source de données ; par exemple, toutes les sources de données ne
contiendra des informations sur la maladie.

Au fur et à mesure que davantage de métadonnées seront créées, des vocabulaires contrôlés seront créés ou adaptés pour chaque terme. -->

<!-- Tableau 3 : Termes et définitions des métadonnées adaptés des lignes directrices GATHER

| Terme | Définition |
| :--- | --------- : |
| espèces | Classification des espèces d'organismes |
| maladie | Si cela est basé sur une maladie signalée, indiquez les maladies qui ont été incluses dans l'étude |
| Critères d'inclusion | Inclusion démographique, clinique ou géographique |
| Critères d'exclusion | Exclusion démographique, clinique ou géographique |
| méthode de collecte de données | Comment les données ont-elles été collectées ? Enquête? Domaine d'étude? |
| tranche d'âge | Âge des sujets d'étude. |
| sexe | Indiquez le(s) sexe(s) des espèces incluses. |
| taille de l'échantillon | Taille de l'échantillon |
| méthode de mesure | Comment le résultat d’intérêt a été mesuré. |
| critères de diagnostic | Comment la maladie a été diagnostiquée. |
| Biais défini | Identifiez et décrivez toutes les catégories de données d’entrée qui présentent des biais potentiellement importants. |
| format de fichier | Format du fichier de données (csv, json etc.) |
| méthode d'analyse | Comment le résultat qui vous intéresse a été analysé – devrait également fournir un lien vers GitHub, le cas échéant |
| étudeDesign | Informations sur la conception de la recherche. Des termes tels qu'étude de cohorte, essai randomisé, analyse coûts-avantages, étude descriptive, étude diagnostique, etc. sont attendus. |
| | | -->

## Vocabulaires et ontologies

Les vocabulaires et ontologies préexistants seront consultés, affinés, comparés et étendus pour créer un
vocabulaire contrôlé pour les GBAD. La sémantique sera accessible pour chaque source de données afin de garantir que les mots
utilisés pour décrire les données sont cohérents entre les sources de données.

- Des vocabulaires pour les sources de données qui ne citent pas de normes de vocabulaire seront obtenus et les mots seront
par rapport aux normes de données préexistantes telles qu’AGROVOC (vocabulaire contrôlé de la FAO)
- Les vocabulaires collectés seront comparés pour toutes les sources de données, pour voir comment la description des termes se compare les unes aux autres.
- L'objectif est de fournir une norme pour les GBAD, augmentant l'interopérabilité et la qualité des données, conduisant finalement à
modèles et estimations supérieurs
- Des vocabulaires contrôlés conduisent également à de meilleurs systèmes et permettent l'automatisation des tâches

Agroportal est un outil de cartographie d'ontologies qui permettra aux GBAD de déterminer les ontologies appropriées et la cartographie entre
vocabulaires standardisés liés au secteur agricole.
- Nous reconnaissons également que nous ne pouvons pas nous attendre à ce que les contributeurs de données modifient leur vocabulaire pour suivre celui des GBAD.
(et si nous le demandions, cela pourrait décourager les gens de fournir des données). Cela souligne l'importance du vocabulaire
cartographies.

## Stockage et gestion des métadonnées

> "Toute la connaissance est dans les connexions"

> -- [David Rumelhart](https://en.wikipedia.org/wiki/David_Rumelhart)

GBADs Informatics utilise [neo4j](https://neo4j.com/), un système de gestion de base de données graphique, pour gérer et stocker des métadonnées et des informations sur les individus et les groupes impliqués dans le projet. Comme vous l'apprendrez dans cette section, une base de données graphique est un type de base de données qui exploite l'idée de connexions entre entités comme méthode pour dériver des informations et de nouvelles connaissances à partir de données autrement déconnectées.

### Qu'est-ce qu'une base de données graphique ?

Une base de données graphique est un type de base de données qui stocke des données en utilisant des relations entre des idées ou des entités principales. Les relations entre les différentes entités montrent une connectivité, permettant de tirer plus d'informations qu'une base de données relationnelle traditionnelle. Les données étant très complexes et multidimensionnelles en termes de structure, de provenance, de gouvernance, de sécurité et de sémantique, GBADs utilise des bases de données graphiques pour la gestion des métadonnées principales et le catalogage des données. En tirant parti de la nature dynamique de la base de données graphique et en structurant notre **modèle graphique** de manière à permettre une meilleure compréhension des nombreuses dimensions des données, nous pouvons à la fois visualiser et comprendre comment les données circulent à l'extérieur et à l'intérieur de notre organisation. Les bases de données graphiques nous permettent également d'ajouter et de modifier la structure à mesure que la structure des informations sur les données change. Cela deviendra plus clair à mesure que nous présenterons le modèle de données graphique préliminaire GBADs.

---

Traditionnellement, les données sont organisées en une série de tableaux. Chacun des tableaux comporte des colonnes et certains tableaux comportent des colonnes communes. Avec ces colonnes communes, vous pouvez spécifier des jointures entre les tables, ce qui donne lieu à une nouvelle table.

Le plus grand avantage des bases de données relationnelles est la possibilité de joindre des tables communes pour en tirer des informations. D'un autre côté, les bases de données relationnelles nécessitent des schémas rigides qui obligent les ingénieurs de bases de données à structurer leurs données pour s'adapter au schéma. Cela suppose que nous savons déjà à quoi ressemblent toutes nos données, ce qui n'est pas toujours le cas pour la recherche.

---


### Parties d'une base de données graphique

Les bases de données graphiques sont constituées de **nœuds** (entités) et de **arêtes** (relations). Les nœuds peuvent avoir des propriétés et des étiquettes tandis que les arêtes servent de connexion ou de relation entre les nœuds.

Un modèle graphique est un modèle des types de nœuds que vous représentez et de la manière dont ils sont connectés (quelles relations vous aurez).

![Modèle graphique](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/20210719_GBADs_GraphModel.png)

<!---## Cas d'utilisation de la base de données graphique GBADs--->

<!---GBADs utilise des bases de données graphiques pour 2 objectifs principaux :
1. Maîtriser la gestion des métadonnées
2. Système d'information de gestion (SIG) --->

## Base de données graphique et API de métadonnées

**À mettre à jour au lancement de l'API**
