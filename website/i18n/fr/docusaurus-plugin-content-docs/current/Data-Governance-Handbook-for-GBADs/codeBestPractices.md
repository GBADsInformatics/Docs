---
sidebar_position: 10
---
# Meilleures pratiques pour le codage

Les membres des GBAD utilisent le plus souvent R et Python pour coder, nettoyer et organiser les données, et construire leurs modèles. Les meilleures pratiques pour les conventions de codage permettent au code d'être lisible et réutilisable. Ce sont les meilleures pratiques que GBADs Informatics et les modélisateurs suggèrent pour s'assurer que nous pouvons comprendre et utiliser le code.


<!---

James et Gemma - cette zone est commentée dans le fichier de démarquage. Quand vous voyez 'avertissement' dans le texte, cela signifie simplement qu'une petite case non apparaît !

· Commentaire avec nom du créateur, date (au format ISO 8601 ? Ex. 20210729), que contient le script (ex. analyse en composantes principales) ?

· Bibliothèques chargées dans le script R

· Définir le répertoire de travail ?

· Les données doivent être « rangées » à la fin du processus de nettoyage (voir le manuel de gouvernance des données ou R pour Data Science)

· Organiser les données de gauche à droite avec des variables catégorielles puis des variables continues. Les variables doivent être regroupées le cas échéant (par exemple, densité de peuplement à l'éclaircissage, poids à l'éclaircissage, date de l'éclaircissage, etc.) ?

· Supprimer les colonnes non pertinentes de l'ensemble de données (par exemple, longitude et latitude)

· Code bien documenté

· Utilisez la convention de dénomination standard des fichiers (par exemple, 20210617_FAO_ProductionPrices_Poultry_Ethiopia_metadata.csv, NOT FAO Production Prices - téléchargé par Kassy le 25 avril.csv)

· Serpent pour nommer des objets dans R (par exemple Majority_Parent_Flock_Old)

· Les objets doivent avoir un nom significatif


--->

## Bonnes pratiques de codage R

### 1. Conventions de dénomination

**Nom de fichier**

Les conventions de dénomination standard sont utilisées pour le nom de fichier et pour toutes les variables et fonctions définies dans votre code.

Les noms de fichiers doivent suivre le format `dateOfCreation_meaningfulCodeName.R`.

Par exemple, si mon code nettoie et reformate les données du bétail, je pourrais appeler mon script `20210703_faoLivestockProductionDataCleaning.R`

**Nom des variables**

Utilisez `snake_case` pour nommer les variables et les fonctions dans votre code. L'utilisation d'une convention de dénomination standardisée améliore la lisibilité et l'interprétabilité du code.

<!--Les conventions de dénomination doivent également être utilisées lors de la déclaration de variables ou de la création de fonctions. Bien qu'il existe plusieurs conventions de dénomination populaires, notamment camelCase, PascalCase et snake_case, par exemple, la convention convenue pour les GBAD est l'utilisation de snake_case. -->

Utilisez des noms significatifs lorsque vous nommez des variables et des fonctions. Le nom de l'objet doit refléter son utilité ou ses caractéristiques. Par exemple, si vous lisez dans une base de données de production animale :

```
bétail_df <- read_csv('chemin/vers/mon/important/fichier.csv')
```

```{admonition} Soyez prudent lors de la définition du répertoire de travail
N'oubliez pas que lorsque vous utilisez `setwd()` pour définir le répertoire de travail de votre projet ou script, le répertoire de travail est distinct de votre ordinateur et peut diminuer le niveau de reproductibilité de votre code.
```

### 2. Organisez le format de votre code

Commencez votre script avec le nom du créateur, la date à laquelle le script a été modifié pour la dernière fois (en ISO 8601) et une brève description de l'objectif du script.

```
#####################################
# Créateur : Kassy Raymond
# Courriel : kraymond@uoguelph.ca
# Date de la dernière modification : 20210803

# Ce programme contient du code qui effectue une analyse en composantes principales (PCA)
# sur les données de production animale en Éthiopie. Les données qui ont été utilisées dans ce
# programme provient de l'ensemble de données de production FAOSTAT et a été téléchargé sur
# 2021-08-03. Les données de sortie de ce script seront utilisées dans un modèle qui
# calcule la biomasse.

#####################################
```

Documentez votre code avec des commentaires afin que le lecteur de votre code (ou futur vous) puisse suivre chaque étape que vous avez suivie dans votre script.

Charger dans toutes les bibliothèques au début de votre programme. Dans R, cela pourrait ressembler à ceci :

```
## 0 - Charger dans toutes les bibliothèques

bibliothèque (tidyverse)
bibliothèque (ggplot2)
bibliothèque (knitr)
bibliothèque (lecteur)
bibliothèque (forcats)
bibliothèque (dplyr)
```

Lorsque cela est possible, segmentez votre code en sections. Cela aide à la reproductibilité et rend le code plus lisible.

```
## 0 - Charger dans toutes les bibliothèques

bibliothèque (tidyverse)
bibliothèque (ggplot2)
bibliothèque (knitr)
bibliothèque (lecteur)
bibliothèque (forcats)
bibliothèque (dplyr)

## 1 - Fichiers sources

chemin_données <- 'chemin/vers/mon/important/fichier.csv'
bétail_df <- read_csv(data_path)

## 2 - Nettoyage des données

# Supprimer les colonnes inutiles

# Vérifier les NA

# Explorer les données et vérifier les valeurs aberrantes ou les erreurs dans les données

## 3 - Modélisation

```

### 3. Nettoyage des données

#### 3.1 Supprimez les colonnes inutiles au début de votre code

Si vous n'utilisez pas une colonne dans une analyse plus approfondie, déposez-la dans la phase de nettoyage et d'exploration des données de votre script. Cela améliorera l'interprétabilité de votre code et augmentera la vitesse de traitement de votre programme.

#### 3.2 Mémoriser la provenance des données

Il est important que les estimations, les modèles, les graphiques et les ensembles de données de sortie créés par les modèles puissent être reproduits. Il est donc important d'inclure l'ensemble de données d'origine utilisé ou, lorsque des API sont utilisées, la possibilité de remonter à l'ensemble de données d'origine.

Si vous avez téléchargé vos données, assurez-vous d'enregistrer une copie de l'ensemble de données d'origine et **ne l'écrasez pas** dans votre flux de travail.

Si un appel d'API a été effectué pour obtenir les données, assurez-vous que l'horodatage de cet appel est fourni dans le nom de votre jeu de données de sortie, des modèles ou des graphiques qui sont créés. Vous pouvez également, à nouveau, choisir d'enregistrer une copie de l'ensemble de données d'origine.

#### 3.3 Assurez-vous que les données sont dans un format « rangé » à la fin de la phase de nettoyage des données

Voir également [Organizing Data in Spreadsheets](http://www.gbadske.org/Documentation/DataGovernanceHandbook/dataBestPractices.html) dans ce manuel et [R for Data Science](https://r4ds.had.co.nz/ ) de Hadley Wickham.

#### 3.4 Organiser les données

Organisez les données de gauche à droite avec des variables catégorielles puis des variables continues. Les variables doivent être regroupées le cas échéant (par exemple, densité de peuplement à l'éclaircissage, poids à l'éclaircissage, date de l'éclaircissage, etc.)

### 4. Autres recommandations

- Essayez RStudio pour votre IDE !


