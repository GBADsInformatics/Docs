---
sidebar_position: 3
---
Normes de données techniques
========================

Les normes de données techniques sont un élément important de la stratégie de gouvernance des données, car elles garantissent que les données sont trouvables
et interopérables et que des comparaisons et des mappages entre différentes sources de données peuvent être établis.

Les normes pour les données, y compris les termes de métadonnées, les attributs, la structure et les conventions de dénomination normalisées, permettent aux données de
être catalogués et des informations à tirer sur les actifs de données. Par exemple, des conventions de nommage standard et bien définies permettent
données à interroger. Nous sommes en mesure de suivre les types de données dont nous disposons et dans quels domaines davantage de données sont nécessaires. Avec
des vocabulaires standard entre les sources de données, des mappages entre les sources peuvent être créés, ce qui nous permet de comprendre la relation
entre les sources de données et donner un aperçu de la qualité et de la fiabilité de ces sources de données.

Des normes de données techniques existent dans chacune des catégories suivantes : structure des (méta)données, contenu des (méta)données (vocabulaires)
et format de méta(données).

Contenu des métadonnées
----------------

Pour annoter les termes des métadonnées, des vocabulaires standard sont utilisés (voir l'annexe D). Par exemple, toutes les dates rapportées dans les métadonnées sont...

Termes des métadonnées
--------------

Les termes des métadonnées sont adaptés du
- [Profil d'application (AP) du Système international pour les sciences et technologies agricoles (AGRIS)] (http://www.fao.org/3/ae909e/ae909e05.htm#P460_23819)
- [Dublin Core Metadata Initiative (DCMI)](https://dublincore.org/specifications/dublin-core)
- [Ensemble d'éléments de métadonnées agricoles (AgMES)](https://fairsharing.org/FAIRsharing.vd694s)
- Cette norme est obsolète bien que la FAO la cite toujours.

Un index des normes de métadonnées est disponible dans le [Metadata Standards Catalog](https://rdamsc.bath.ac.uk/scheme-index).

Les GBAD étendront et affineront davantage les termes pour répondre aux besoins spécifiques de gouvernance et de provenance des données collectées par ou
géré par le système de portail de données GBADs.

Structure des métadonnées
------------------

Les schémas de métadonnées seront stockés au format [JSON-LD](https://json-ld.org/). JSON-LD est un format de données structuré qui prend en charge le
mise en œuvre des données liées. L'[outil de métadonnées structurées](https://search.google.com/structured-data/testing-tool/) de Google sera
utilisées comme métadonnées sont créées, révisées et éditées tout au long de notre cycle de vie des données.

Il existe 3 principaux types de métadonnées, chacune servant un objectif spécifique dans le cycle de vie des données (Riley, 2017) (Tableau 1). Descriptif
les métadonnées incluent des informations sur la source de données utilisée pour trouver et comprendre une ressource. Cela inclut des informations sur les
contexte des données, y compris des informations sur la provenance, le cas échéant. Les métadonnées descriptives fournissent des informations qui permettront
pour que les données soient trouvables et interopérables. Les métadonnées administratives comprennent deux sous-ensembles de métadonnées : les métadonnées techniques et les métadonnées relatives aux droits.
Riley (2017) décrit les métadonnées administratives comme des métadonnées utilisées pour la gestion d'une ressource de données donnée. Métadonnées des droits
fournit des informations sur les informations de licence et de copyright d'une source donnée, tandis que les métadonnées techniques fournissent des informations sur
le type de fichier et la taille des données. Les métadonnées structurelles décrivent les relations entre des parties de ressources et d'autres. Cela pourrait
inclure des informations sur la manière dont les données sont organisées ou visualisées, les relations hiérarchiques ou la séquence des objets de données. Pour les contextes
des GBAD, les métadonnées structurelles sont également importantes pour stocker des informations sur l'accessibilité des sources de données privées. Cela se discute
dans la section [FIXME ADD SECTION] du manuel.

Tableau 1 : Types de métadonnées et définitions. Tableau adapté de Riley, 2017.
| Type de métadonnées | Définition | Exemples de propriétés | Utilisations principales |
| :--------------- | ---------- | ------------------ | ------------ |
| Métadonnées descriptives | Pour trouver et comprendre une ressource; pour la qualité des données. | Titre, Auteur, Sujet, Genre, Date de publication | Trouvabilité, affichage, interopérabilité |
| - Métadonnées administratives - Métadonnées techniques - Métadonnées des droits | - Pour le décodage et le rendu des fichiers - Gestion à long terme des fichiers - Droits de propriété intellectuelle attachés au contenu | Technique : type de fichier, taille de fichier, date/heure de création Droits : statut du droit d'auteur, termes de la licence, titulaire des droits | Interopérabilité, Gestion des objets numériques, Préservation |
| Métadonnées structurelles | Relations des parties de ressources entre elles. | Séquence, place dans la hiérarchie | Navigation |
| | | | |

Les métadonnées peuvent inclure différents termes selon le contexte de la source. Le tableau 2 contient une liste de tous les termes possibles que les métadonnées
pourraient inclure ainsi que leurs URI. Lorsqu'un terme de métadonnées est utilisé, l'URI de ce terme doit être pris en compte dans la section `@ context`
du script JSON-LD. Cela permet de faire remonter la définition du terme à une définition normalisée.

Chaque actif de données dans le système doit être au minimum décrit avec les termes suivants (le premier ensemble de termes avant la ligne vide dans le tableau 2) : URI,
accessRights, accrualMethod, contributeur, couverture, date, dateSubmitted, description, format, identifiant, langue, médiateur, provenance, spatial,
temporel, titre, type, sujetThesaurus, sujetClassification.

Lorsque les données sont modifiées par les GBAD ou sont issues de la sortie d'un modèle, cela doit être accrédité dans les métadonnées. Dans ces cas, les éléments suivants
les termes peuvent être utilisés : modifié, alternatif, remplace, isPartof, isFormat, hasFormat, hasPart, isRequiredBy, isVersionOf, hasVersion, provenance,
a besoin. Par exemple, dans le scénario où GBADs a acquis un actif de données qui a été modifié d'un vocabulaire à un autre, les termes de métadonnées
isVersionOf, provenance, requirements et modified seraient utilisés pour refléter les changements.

Tableau 2 : Tous les termes de métadonnées possibles et les URI respectifs.

```json

"@le contexte": {
"URI": "",
"accessRights": "http://purl.org/dc/terms/accessRights",
"accrualMethod": "http://purl.org/dc/terms/accrualMethod",
"contributeur": "http://purl.org/dc/terms/contributeur",
"couverture": "http://purl.org/dc/terms/couverture",
"date": "http://purl.org/dc/terms/date",
"dateSubmitted": "http://purl.org/dc/terms/dateSubmitted",
"description": "http://purl.org/dc/terms/description",
"format": "http://purl.org/dc/terms/format",
"identifiant": "http://purl.org/dc/terms/identifiant",
"langue": "http://purl.org/dc/terms/langue",
"médiateur": "http://purl.org/dc/terms/médiateur",
"provenance": "http://purl.org/dc/terms/provenance",
"rights": "http://purl.org/dc/terms/rights",
"spatial": "http://purl.org/dc/terms/spatial",
"temporel": "http://purl.org/dc/terms/temporel",
"title": "http://purl.org/dc/terms/title",
"type": "http://purl.org/dc/terms/type",
"subjectThesaurus": "http://www.fao.org/3/ae909e/ae909e00.htm#TopOfPage#subjectThesaurus",
"subjectClassification": "http://www.fao.org/3/ae909e/ae909e00.htm#TopOfPage#subjectClassification",

"accrualPeriodicity": "http://purl.org/dc/terms/accrualPeriodicity",
"accrualPolicy": "http://purl.org/dc/terms/accrualPolicy",
"alternative": "http://purl.org/dc/terms/alternative",
"audience": "http://purl.org/dc/terms/audience",
"disponible": "http://purl.org/dc/terms/disponible",
"bibliographicCitation": "http://purl.org/dc/terms/bibliographicCitation",
"conformsTo": "http://purl.org/dc/terms/conformsTo",
"created": "http://purl.org/dc/terms/created",
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
"replace": "http://purl.org/dc/terms/replaces",
"isReplacedBy": "http://purl.org/dc/terms/isReplacedBy",
"requires": "http://purl.org/dc/terms/requires",
"isRequiredBy": "http://purl.org/dc/terms/isRequiredBy",
"license": "http://purl.org/dc/terms/license",
"modifié": "http://purl.org/dc/terms/modifié",
"references": "http://purl.org/dc/terms/references",
"rightsHolder": "http://purl.org/dc/terms/rightsHolder",
"source": "http://purl.org/dc/terms/source",
"sujet": "http://purl.org/dc/terms/sujet",
"tableOfContents": "http://purl.org/dc/terms/tableOfContents"

```

Des métadonnées riches avec des termes décrivant le processus d'obtention, d'enregistrement et de collecte des données d'origine fournissent un contexte
sur la qualité des données et quelles sources de données peuvent être combinées avec d'autres. Le tableau 3 fournit des termes de métadonnées qui ont été adaptés
à partir des lignes directrices de GATHER. Lorsqu'un contributeur de données fournit une source de données, il devra remplir un formulaire pour fournir
contexte sur les données fournies. Les réponses sur le formulaire généreront les métadonnées descriptives pour cette source de données. La
les termes utilisés pour décrire les actifs de données dépendront de la nature de la source de données ; par exemple, toutes les sources de données
contiendra des informations sur la maladie.

Au fur et à mesure que de nouvelles métadonnées seront créées, des vocabulaires contrôlés seront créés ou adaptés pour chaque terme.

Tableau 3 : Termes et définitions des métadonnées adaptés des directives GATHER

| Terme | Définition |
| :--- | --------- : |
| espèce | Classification des espèces de l'organisme |
| maladie | Si basé sur la maladie déclarée, fournir les maladies qui ont été incluses dans l'étude |
| Critèresd'inclusion | Inclusion démographique, clinique ou géographique |
| critères d'exclusion | Exclusion démographique, clinique ou géographique |
| dataCollectionMethod | Comment les données ont-elles été collectées ? Enquête? Domaine d'étude? |
| Tranche d'âge | Âge des sujets d'étude. |
| sexe | Indiquez le(s) sexe(s) des espèces incluses. |
| tailleéchantillon | Taille de l'échantillon |
| méthode de mesure | Comment le résultat d'intérêt a été mesuré. |
| diagnosticCritères | Comment la maladie a été diagnostiquée. |
| biais défini | Identifiez et décrivez toutes les catégories de données d'entrée qui présentent des biais potentiellement importants. |
| format de fichier | Format du fichier de données (csv, json etc.) |
| méthode d'analyse | Comment le résultat d'intérêt a été analysé - doit également fournir un lien vers GitHub, le cas échéant |
| étudeConception | Informations sur la conception de la recherche. Des termes tels que étude de cohorte, essai randomisé, analyse coûts-avantages, étude descriptive, étude diagnostique, etc. sont attendus. |
| | |

