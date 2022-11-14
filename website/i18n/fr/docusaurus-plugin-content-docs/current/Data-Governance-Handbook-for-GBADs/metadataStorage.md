---
sidebar_position: 9
---

# Stockage des métadonnées : bases de données de graphes dans les GBAD

```{épigraphe}
"Tout le savoir est dans les connexions"

-- [David Rumelhart](https://en.wikipedia.org/wiki/David_Rumelhart)
```

GBADs Informatics utilise [neo4j](https://neo4j.com/), un système de gestion de base de données graphique, pour gérer et stocker les métadonnées et les informations sur les individus et les groupes impliqués dans le projet. Comme vous l'apprendrez dans cette section, une base de données de graphes est un type de base de données qui exploite l'idée de connexions entre les entités comme méthode pour extraire des informations et de nouvelles connaissances à partir de données autrement déconnectées.

***Dans cette section, nous vous expliquons ce qu'est une base de données de graphes, comment elle peut être utilisée, parlons de la recherche One Health en tant qu'entité connectée et décrivons les cas d'utilisation de la base de données de graphes GBADs.***

```{avertissement} Objectifs d'apprentissage
* Les lecteurs doivent comprendre ce qu'est une base de données de graphes et un modèle de graphe
* Les lecteurs doivent comprendre le cas d'utilisation des métadonnées pour les bases de données de graphes dans les GBAD
* Les lecteurs doivent comprendre l'idée de connectivité et de données
```



## Qu'est-ce qu'une base de données de graphes ?

```{margin} Que sont les bases de données relationnelles ?
Traditionnellement, les données sont organisées en une série de tableaux. Chacune des tables a des colonnes et certaines tables ont des colonnes communes. Avec ces colonnes communes, vous pouvez spécifier des jointures entre les tables, résultant en une nouvelle table.

Le plus grand avantage des bases de données relationnelles est la possibilité de joindre des tables communes pour en tirer des informations. D'autre part, les bases de données relationnelles nécessitent des schémas rigides qui obligent les ingénieurs de base de données à structurer leurs données pour s'adapter au schéma. Cela vient avec l'hypothèse que nous savons déjà à quoi ressemblent toutes nos données, ce qui n'est pas toujours le cas pour la recherche.

```

Une base de données de graphes est un type de base de données qui stocke des données en utilisant des relations entre des idées ou des entités principales. Les relations entre les différentes entités montrent la connectivité, permettant de tirer plus d'informations qu'une base de données relationnelle traditionnelle. Parce que les données sont très complexes et multidimensionnelles en termes de structure, de provenance, de gouvernance, de sécurité et de sémantique, les GBAD utilisent des bases de données de graphes pour la gestion des métadonnées principales et le catalogage des données. En tirant parti de la nature dynamique de la base de données de graphes et en structurant notre **modèle de graphe** de manière à permettre une meilleure compréhension des nombreuses dimensions des données, nous pouvons à la fois visualiser et comprendre comment les données circulent à l'extérieur et à l'intérieur de notre organisation. Les bases de données de graphes nous permettent également d'ajouter et de modifier la structure à mesure que la structure des informations sur les changements de données. Cela deviendra plus clair lorsque nous présenterons le modèle de données de graphe GBADs préliminaire.


### Parties d'une base de données de graphes

Les bases de données de graphes sont constituées de **nœuds** (entités) et de **arêtes** (relations). Les nœuds peuvent avoir des propriétés et des étiquettes tandis que les bords servent de connexion ou de relation entre les nœuds.

Un modèle de graphe est un modèle des types de nœuds que vous représentez et de la façon dont ils sont connectés (quelles relations vous aurez).

![Modèle graphique](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/20210719_GBADs_GraphModel.png)

**Recherche et connectivité**

La recherche et la modélisation s'appuient sur les données que nous recueillons pour donner un sens au monde qui nous entoure. Nous utilisons les données pour tirer des informations qui éclairent les décisions ou pour créer des modèles qui éclairent les décisions, pour prévoir, pour optimiser, pour comprendre, pour faire avancer la science, pour améliorer les affaires, pour comprendre quelles caractéristiques de quelque chose sont vraiment fondamentales pour la prise de décision ou qui ont un impact quoi que ce soit que nous étudions. Mais ce qui manque souvent dans nos collections de données (nos ensembles de données), c'est la connexité ou les relations entre les choses que nous étudions.

Les bases de données de graphes nous permettent de capturer ces relations et de les utiliser pour en tirer de nouvelles informations et visualiser les données de manière plus significative.

<!---## Cas d'utilisation de la base de données de graphes GBADs--->

<!---GBADs utilise des bases de données de graphes pour 2 objectifs principaux :
1. Maîtriser la gestion des métadonnées
2. Système d'information de gestion (SIG) --->

### Gestion des métadonnées principales

Pour en savoir plus sur les métadonnées, leur utilisation et leur importance, consultez la [section métadonnées](#techdatastds) de ce manuel.

Nous utilisons des bases de données de graphes pour comprendre le flux de

Les ensembles de données peuvent être liés de différentes manières. Deux ensembles de données différents, provenant de sources différentes, peuvent être connectés en termes de propriétés descriptives telles que le

- alors que différents ensembles de données peuvent avoir des contenus de métadonnées différents, il existe toujours des relations qui peuvent connecter des ensembles de données à d'autres.
- les bases de données de graphes tirent parti de cette idée en ..
