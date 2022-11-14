---
sidebar_position: 11
---
# Organisation des données dans des feuilles de calcul

```{épigraphe}
« Garbage in, Garbage out »
```

Si vous lisez ceci, vous passez probablement beaucoup de temps à traiter des données. Vous pouvez le collecter, le nettoyer, le modéliser, le partager, tenter de l'interpréter, puis tout recommencer. Lorsque vous recevez des données d'un collègue, vous pouvez essayer de les nettoyer à nouveau (même si elles ont déjà été nettoyées), essayer de les interpréter et même devoir écrire plusieurs e-mails pour interpréter les données.

**Dans cette partie du manuel, nous vous expliquons comment vous pouvez mieux organiser vos données dans des feuilles de calcul pour créer des données de meilleure qualité, conduisant à des modèles de meilleure qualité. Nous définissons également certaines pratiques standard pour la saisie de données de types spécifiques, notamment des dates et des nombres longs.**

### Feuilles de calcul et ensembles de données

Les feuilles de calcul, telles que celles créées dans Microsoft Excel et Google Sheets, sont courantes pour stocker, saisir, partager et manipuler les données issues de la recherche. Les feuilles de calcul sont généralement partagées pour communiquer les résultats de la recherche et utilisées comme données d'entrée pour les modèles ou l'analyse statistique. Bien que les feuilles de calcul fassent partie intégrante du cycle de vie des données, elles doivent être correctement structurées pour garantir qu'aucune erreur n'est commise, ce qui empêcherait la réutilisation ou l'interprétation des données. De petites erreurs dans les feuilles de calcul peuvent nous laisser dans des situations où les données sont difficiles à comprendre, difficiles à analyser et longues à nettoyer.

```{avertissement} Contactez l'équipe informatique GBADs si...
Veuillez contacter l'équipe informatique du GBADs si vous êtes un membre du GBADs et que vous avez de nombreuses feuilles de calcul contenant des données "désordonnées" ! Nous pouvons consulter et réfléchir à la manière de créer un programme qui traitera et transformera vos données dans un format ordonné !
```

Structurer correctement les données dans des feuilles de calcul rend les données plus réutilisables et interopérables (FAIR), ce qui conduit à des données de meilleure qualité et, en fin de compte, à une meilleure recherche. En configurant dès le départ des feuilles de calcul à ingérer dans des logiciels statistiques ou des bibliothèques, nous pouvons minimiser la confusion et simplifier nos flux de travail.

```{avertissement} Objectifs d'apprentissage
* Les lecteurs doivent comprendre comment structurer un ensemble de données dans une feuille de calcul d'une manière qui respecte les principes de données FAIR
* Les lecteurs doivent comprendre comment structurer leur ensemble de données pour préserver la sémantique (sens sous-jacent) des données
* Les lecteurs doivent comprendre comment structurer les dates et les nombres longs dans les feuilles de calcul et pourquoi il est important que ces données soient lisibles par machine
* Les lecteurs doivent comprendre les erreurs courantes qui créent des ensembles de données désordonnés et comment les éviter
```

### Structure de données

```{épigraphe}
"Les ensembles de données ordonnés se ressemblent tous, mais chaque ensemble de données désordonné est désordonné à sa manière."

-- [Hadley Wickham](http://hadley.nz/)
```

En général, un ensemble de données ordonné ou propre est composé des éléments suivants ({numref}`tidyData`) {cite}`wickham_R4DS_2017` :

````{panneaux}
:colonne: col-4
:carte: bordure-2
Colonnes (Variables)
^^
Les colonnes sont un groupe de cellules alignées verticalement. Dans les ensembles de données, les colonnes sont des variables, où chaque cellule contient une information sur un attribut donné.
---
Lignes (Observations)
^^
Les lignes sont un groupe de cellules alignées horizontalement, où chaque ligne est une observation.
---
Cellules (Valeurs)
^^
Dans les ensembles de données, chaque ligne est une observation et chaque cellule de cette ligne contient la valeur de la colonne où elle se situe.
````

```{chiffre} /images/tidyDataWickham.png
:nom: tidyData

Règles qui font un ensemble de données bien rangé : les colonnes sont des variables, les observations sont des lignes et les valeurs sont des cellules. Image et légende de {cite}`wickham_R4DS_2017`.
```

S'en tenir à un format de données ordonné permet la réutilisation des données, garantit la cohérence (ce qui améliore la qualité des données) et aide à comprendre la signification sous-jacente (sémantique) de chacune des valeurs de la feuille de calcul. Avoir des colonnes comme variables et des lignes comme observations nous permet de savoir ce que signifie une valeur en fonction de sa relation avec les variables et les observations.

Les données FAIR sont des données ordonnées - les données ordonnées sont réutilisables et interopérables par nature. Les données ordonnées sont plus faciles à trouver, car les en-têtes sont bien définis, ce qui facilite la création de métadonnées. Fondamentalement, nous pouvons tirer plus d'informations de données ordonnées.

### Enregistrement des feuilles de calcul

Les ensembles de données dans les feuilles de calcul peuvent être enregistrés sous forme de fichier Excel ou au format `.csv` (valeurs séparées par des virgules) ou `.txt`. Les deux derniers sont préférés car ils sont plus faciles à lire dans les bibliothèques de programmation en R et python.

### Convention standard de date et d'heure

Sans convention standard, les dates peuvent présenter beaucoup d'ambiguïté. Par exemple, 01/11 pourrait être interprété comme janvier 2011, novembre 2001 ou 1er novembre. Pour cette raison, il est important d'utiliser une norme de date internationalement acceptée afin que nous puissions comprendre nos données de manière fiable.

Les GBAD utiliseront la norme [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) pour les dates. ISO 8601 est une norme internationalement acceptée qui utilise le [calendrier grégorien](https://en.wikipedia.org/wiki/Gregorian_calendar).

Les dates sont représentées comme suit :
- AAAA-MM-JJ ou AAAAMMJJ

La norme ISO 8601 utilise l'horloge de 24 heures. Les temps peuvent donc être entrés comme suit :

- T[hh:mm:ss]

ou si les secondes ne s'appliquent pas :

- T[hh:mm]

et si les procès-verbaux ne sont pas applicables :

- M[hh]

Étant donné que GBADs est une organisation mondiale, il est important de spécifier les fuseaux horaires en saisissant l'heure dans les feuilles de calcul. Les fuseaux horaires sont spécifiés après la date en spécifiant à quel point le fuseau horaire est en retard ou en avance par rapport à UTC.

Par exemple:
Le samedi 10 juillet 2021 à 13h48 EDT s'écrit 2021-07-10T13:48-4:00

```{admonition} Différents calendriers pour différents pays
:classe: conseil

Lorsque vous analysez des ensembles de données de différents pays, sachez que toutes les régions du monde n'utilisent pas le calendrier grégorien.

Par exemple, l'Éthiopie utilise le calendrier éthiopien, qui est différent du calendrier grégorien. Cela met l'Ethiopie 7 ans derrière le calendrier utilisé en Europe et en Amérique du Nord. [Ici](https://melaku.ml/) est un outil qui vous permet de convertir du calendrier grégorien au calendrier éthiopien.
```

### Conventions sur les grands nombres

Selon les pays, il existe différentes conventions pour les grands nombres.

Par exemple, le nombre 133333.450 peut être représenté de différentes manières :

Dans les pays anglophones, le nombre pourrait ressembler à ceci :
- 133 333,450

Dans les pays non anglophones, comme ceci :
- 133.333.450

Donc - le même nombre mais représenté de 3 manières différentes. Cela laisse beaucoup à l'interprétation, d'autant plus que la valeur par défaut lors de la lecture de la plupart des fichiers dans des langages de programmation statistiques suppose qu'une virgule spécifie une nouvelle colonne. Et parce qu'une grande partie du travail de GBAD repose sur des langages de programmation tels que R et Python, il est vraiment important de structurer nos chiffres afin qu'ils puissent être facilement lus, interprétés et lus par des machines également !

Pour que les choses restent claires, nous devons structurer nos grands nombres **sans** virgules et réserver des points pour spécifier une décimale.


```{admonition} Si vous voyez une virgule là où vous pensez qu'elle ne devrait pas être...
:classe: conseil

Si le formatage des grands nombres n'est pas clair pour vous, demandez des éclaircissements au propriétaire des données ! Si le propriétaire des données fait partie du programme GBADs, suggérez-lui gentiment d'utiliser les normes utilisées et énoncées par le programme (vous pouvez même lui envoyer ce chapitre).

```

### Convention de nommage des fichiers

Lorsque vous nommez des fichiers, vous devez être cohérent, être descriptif, éviter les caractères et les espaces et inclure la date (de préférence en utilisant une norme telle que [ISO 8601](https://www.iso.org/iso-8601-date-and- time-format.html) Pour les besoins de la convention de nommage des fichiers, nous omettons les tirets entre AAAA-MM-JJ.

**Exemples de bonnes conventions de nommage de fichiers :**

Lorsque vous traitez des données téléchargées à partir d'organisations :
* AAAAMMJJ_organization_topic_species_country
* 20210617_FAO_ProductionPrices_Poultry_Ethiopia.csv
* 20210617_WorldBank_LSMS_Ethiopia.csv

Où AAAAMMJJ est la date à laquelle vous avez téléchargé le fichier.

S'il s'agit d'un fichier de métadonnées, vous devez nommer le fichier avec « métadonnées » et le nom du fichier comme ci-dessus pour savoir quel fichier de métadonnées correspond à l'ensemble de données approprié. Par exemple:

* 20210617_FAO_ProductionPrices_Poultry_Ethiopia_metadata.csv
* 20210617_WorldBank_LSMS_Ethiopia_metadata.csv

**Exemples de fichiers mal nommés :**
* Prix de production FAO - téléchargés par Kassy le 25 avril.csv
* Prix à la production éthiopienne du site fao stat.csv
* ETHPRODPRICES_GOODCOPY.csv

```{avertissement} Les dates en premier
:classe: conseil

Placer la date en premier dans un fichier vous permet d'organiser facilement les fichiers d'un répertoire ou d'un dossier par date croissante ou décroissante.

```

### Erreurs courantes

Le formatage, le surlignage et les caractères gras doivent être évités. Voici pourquoi rendre les feuilles de calcul jolies cause des maux de tête dans le cycle de vie de l'analyse des données :

#### 7 erreurs courantes qui rendent les feuilles de calcul désordonnées

1. Plusieurs tableaux dans une seule feuille de calcul
2. Mauvaises valeurs nulles (un zéro ne signifie pas nul)
3. Les cellules sont fusionnées
4. Les unités de mesure sont incluses dans les valeurs au lieu des noms de colonne
5. Le formatage est utilisé pour représenter les informations
6. Les cellules contiennent plus d'une information
7. Le format de date standard n'est pas utilisé

***1. Plusieurs tableaux dans une seule feuille de calcul***

Avoir plusieurs tableaux dans une seule feuille de calcul entraîne souvent un nettoyage inutile des données pour tout traitement ultérieur des données. Plusieurs tableaux dans une feuille de calcul prêtent à confusion lorsque nous partageons la feuille de calcul ou y revenons ultérieurement. Si une ligne est une observation, la création de plusieurs tableaux va à l'encontre de cette notion, réduisant la qualité et la capacité à interpréter l'ensemble de données.

Dans l'exemple ci-dessous, composé de données fabriquées, il y a 4 tableaux dans une seule feuille de calcul. Dans chaque tableau, l'« élément » est l'observation et le nombre d'animaux vivants au cours d'une année donnée est ce qui est mesuré. Cependant, en raison de la façon dont la feuille de calcul est configurée, il est difficile de savoir si les deux tableaux du haut sont associés au Canada ou s'il manque un en-tête au tableau de droite.

![MultipleTablesBad](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/20210615_dataBestPractices_MultipleTablesBAD.png)

Une meilleure façon de configurer les données serait comme ceci:

![MultipleTablesGood](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/20210614_dataBestPractices_MultipleTablesGOOD.png)

Ici, nous voyons que toutes les informations sont toujours fournies, mais chaque ligne est une observation pour un pays, un élément et une année donnés. En plus d'améliorer l'interprétation des données, ces données peuvent désormais être saisies dans un logiciel statistique tel que R sans nettoyage approfondi des données.

***2. Mauvaises valeurs nulles ***

Les valeurs manquantes ou nulles doivent être notées d'une manière standard qui se distingue d'une valeur quantitative de 0. De cette façon, le lecteur de l'ensemble de données comprendra quelles données sont manquantes ou inconnues et lesquelles ont une valeur de 0. La chose la plus importante lors de l'enregistrement des données manquantes les valeurs sont la cohérence ; Si vous décidez d'utiliser "NA" pour indiquer les valeurs manquantes, assurez-vous de ne pas passer en minuscules ("na") ou "Non applicable" plus tard dans la feuille de calcul.

Selon le logiciel statistique, la signification de "NA" peut varier. Par exemple, dans R, 'NA' est un terme réservé pour une valeur manquante. La façon dont les valeurs `NA` sont représentées en python varie en fonction de la bibliothèque utilisée. Dans pandas (une bibliothèque python populaire pour l'analyse de données, le nettoyage et le wrangling), les valeurs `NA` sont représentées par `NaN` ou `None`. Cependant, tant que nous sommes cohérents dans la façon dont nous représentons les valeurs "NA" lors de la saisie et de l'analyse des données, nous pouvons rapidement changer de format en fonction du logiciel statistique ou de programmation que nous avons choisi.

***3. Les cellules sont fusionnées***

La fusion de cellules va à l'encontre de l'idée que les lignes sont des observations et que chaque colonne est une variable. Non seulement la fusion des cellules va à l'encontre de ces principes, mais elle rend impossible le tri des colonnes et des lignes, provoque des erreurs lors de la lecture des données dans les logiciels statistiques et introduit le risque de mauvaise interprétation des données ou de perte d'informations. Par exemple, l'utilisation de cellules fusionnées pour relier deux lignes crée de la confusion lorsque vous revenez consulter les données. Ou, si la mise en forme fusionnée est perdue, vous risquez de perdre une observation entière ou des variables dans une observation donnée.

***4. Les unités de mesure sont incluses dans les valeurs au lieu des noms de colonnes***

Comme chaque colonne représente une variable, les unités de mesure doivent être cohérentes dans toute cette colonne. Par conséquent, le cas échéant, vous devez inclure l'unité de mesure dans l'en-tête de colonne.

***5. Le formatage est utilisé pour représenter les informations***

La mise en surbrillance des cellules et les informations en gras ou en italique doivent être évitées comme moyen de représenter les informations dans un ensemble de données. Ceci est problématique car si la mise en forme est perdue, vous perdez des informations précieuses. Si vous souhaitez inclure les informations articulées par la mise en forme dans votre modèle ou analyse, vous seriez obligé de nettoyer la feuille dans excel avant de la lire dans votre logiciel.

Par exemple, lors du test d'échantillons pour la maladie, on peut utiliser la mise en surbrillance pour montrer quels échantillons sont revenus positifs. Si la mise en forme est perdue ou si quelqu'un ne connaît pas le contexte de la signification de la surbrillance, cette information est perdue.

***6. Les cellules contiennent plus d'une information***

Lorsque les cellules contiennent plus d'un élément d'information, cela limite la façon dont vous pouvez analyser un ensemble de données préexistant et conduit généralement à davantage de nettoyage des données. Par exemple, vous pouvez signaler les types et les nombres de races dans votre ensemble de données.

Dans ce cas, vous voudriez déclarer la race et compter dans des colonnes séparées comme celle-ci :

| Race | Compter | Ferme | Datecomptée |
| :---: | :---: | :---: | :---: |
| AberdeenAngus | 20 | Fermes d'élevage canadiennes | 2021-06-01 |
| Abergele | 60 | Fermes d'élevage canadiennes | 2021-06-01 |
| Limousine | 10| Fermes d'élevage canadiennes | 2021-06-01 |

Plutôt que de les signaler dans la même cellule, comme ceci :

| NombreDeRace | Ferme | Datecomptée |
| :---: | :---: | :---: |
| 20 Aberdeen Angus | Fermes d'élevage canadiennes | 2021-06-01 |
| 60 Abergele | Fermes d'élevage canadiennes | 2021-06-01 |
| 10 Limousin | Fermes d'élevage canadiennes | 2021-06-01 |


***sept. Le format de date standard n'est pas utilisé***

Lorsque vous saisissez des dates, utilisez une norme telle que [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) (YYYY-MM-DD). Cela vous permet de trier par date, d'améliorer l'interprétabilité et, si nécessaire, de convertir facilement dans d'autres formats de date. Reportez-vous à la section **Convention standard de date et d'heure** de cette section pour plus d'informations sur la façon dont les GBAD abordent la saisie des dates et des heures.

Aussi - lorsque vous utilisez des dates, assurez-vous de spécifier ce que la date signifie. Un en-tête de colonne simplement intitulé « date » ne fournit pas beaucoup de contexte. Par exemple, la date signifie-t-elle la date à laquelle les données ont été saisies dans la feuille de calcul ? La date à laquelle un échantillon a été prélevé ? La date à laquelle un échantillon a été analysé au laboratoire ? Assurez-vous que les autres chercheurs (et futur vous) savent de quoi vous parlez !

### Autres recommandations de lecture
[R pour Data Science par Hadley Wickham](https://r4ds.had.co.nz/)

Auteurs : Kassy Raymond et K. Marie McIntyre
