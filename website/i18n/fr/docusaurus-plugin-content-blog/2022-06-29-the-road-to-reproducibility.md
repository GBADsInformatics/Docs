---
slug: the-roadmap-to-reproducibility
title: La feuille de route vers la reproductibilité
authors: Kassy
tags: [reproducibility, data, values]
---

![Image d'en-tête](https://i.imgur.com/2JEVnaV.png)
*Figure 1 : La feuille de route vers la reproductibilité*

> *« Tout l’intérêt de la science, la manière dont nous connaissons quelque chose, n’est pas que je fasse confiance à Isaac Newton parce que je pense que c’était un type formidable. Le fait est que je peux le faire moi-même… Montrez-moi les données, montrez-moi le processus, montrez-moi la méthode, et si je le souhaite, je peux les reproduire. »*

[Brian Nosek](https://www.washingtonpost.com/news/ Speaking-of-science/wp/2015/08/27/trouble-in-science-massive-effort-to-reproduce-100-experimental-results -réussit-seulement-36-fois/) - Washington Post[^1]

<br/>

Une science reproductible nécessite des méthodes, un code et la mise à disposition de données bien documentés. Cela signifie assurer la transparence de ce que vous faites tout au long du processus scientifique afin de favoriser la confiance dans le processus et les résultats et de permettre aux autres de tirer parti des travaux antérieurs. Il n’y a pas de place pour le scientifique sceptique lorsque vos recherches sont reproductibles.

<br/>

Les données utilisées par GBADs proviennent de nombreuses sources différentes et sont utilisées dans des modèles qui produisent ensuite davantage d'ensembles de données et qui servent d'entrées à d'autres modèles. Cette chaîne de données-modèle-données-modèle-données ne se limite pas au travail d’un seul scientifique ; nous avons des collaborateurs travaillant partout dans le monde. Il est essentiel que les données sous-jacentes soient disponibles et que toutes nos méthodes soient reproductibles afin que nous puissions nous appuyer sur les travaux de chacun et permettre à d’autres d’utiliser nos estimations en toute confiance.

<br/>

Dans le but de rendre tous nos processus reproductibles et transparents, GBADs s’engage dans la « Feuille de route vers la reproductibilité ». Dans cet article de blog, nous vous invitons à parcourir avec nous le chemin de la reproductibilité. Attachez vos ceintures pour éviter les flammes de la « crise de la reproductibilité » avant de nous diriger vers notre destination finale, la « Data Utopia » !

<br/>

## La « crise de la reproductibilité »

En 2016, une enquête menée auprès de 1 576 chercheurs de Nature révélait qu'il existe une « crise de reproductibilité » dans la communauté scientifique[^2]. Parmi les participants, "plus de 70 % des chercheurs ont essayé et échoué de reproduire l'expérience d'un autre scientifique et plus de la moitié n'ont pas réussi à reproduire leurs propres expériences". De nombreux facteurs contribuent à des recherches non reproductibles (Figure 2), où la pression en faveur de la publication et la présentation de rapports sélectifs figuraient parmi les plus appréciées. Cependant, les données brutes et les méthodes ou codes non disponibles ont également été considérés comme des contributeurs importants. Même si la pression pour publier nécessite un changement de culture dans la recherche, l’indisponibilité des données brutes, des méthodes ou du code est un problème que nous pouvons résoudre.

<br/>


![Figure 2](https://i.imgur.com/dcnJkJR.jpg)
Figure 2 : Facteurs qui contribuent à une recherche irréproductible. Chiffre obtenu de Baker, 2016[^2].

## S'engager sur la voie de la reproductibilité

### Arrêt 1 : Personnes et processus

La disponibilité du code et des données est importante pour la reproductibilité, mais il y a des personnes derrière le code et les données qui travaillent sur des processus pour les rendre reproductibles.

<br/>

À ce titre, nous avons établi des processus et des bonnes pratiques pour l'utilisation des données dans les GBAD, qui sont communiqués dans le [Data Governance Handbook](http://gbadskedoc.org/docs/Data-Governance-Handbook-for-GBADs/intro ), et sur notre [Site de documentation](http://gbadskedoc.org). Ces processus impliquent les éléments suivants :

<br/>

1. Documentation des modifications apportées aux données et aux pratiques de nettoyage des données
2. Documentation des normes de métadonnées utilisées pour fournir des informations sur les données
3. Où et comment les données et métadonnées sont stockées et comment elles sont diffusées
4. Meilleures pratiques pour documenter le code dans les référentiels GitHub

<br/>

Nous comptons également sur le respect des processus que nous avons établis. Étant donné que certaines des données utilisées par les GBAD ne comportent pas de métadonnées, nous comptons sur la mise en place d'un point de contact pour la source de données afin de garantir que nous pouvons obtenir un contexte sur la manière dont les données ont été collectées, comment elles peuvent être utilisées, par qui, et à quelles fins et quelles catégories représentent les données.

<br/>

### Stop 2 : Acquisition et ingestion de données

Pour acquérir des données, nous identifions les données pertinentes pour l'estimation des modèles. Par exemple, le cheptel par pays et par espèce ainsi que le poids vif sont des éléments d'entrée dans les calculs de biomasse.

<br/>

La manière dont nous acquérons les données dépend du format dans lequel elles sont disponibles. Il existe trois manières principales d’acquérir et d’ingérer les données :

<br/>

* Lorsque les données sont disponibles via des interfaces de programmation d'applications (API), les données sont acquises directement à partir de la source, transformées avant d'être mises à disposition via l'API des GBAD ;
* Lorsque les données sont disponibles par téléchargement direct, les données sont téléchargées et formatées dans des tables de base de données avant d'être mises à disposition via l'API des GBAD, et ;
* Lorsque les données sont disponibles dans des tableaux PDF, les scripts de web scraping récupèrent les données des tableaux et les rendent disponibles via des fichiers csv avant d'être formatées dans des tableaux de base de données et mises à disposition via l'API des GBAD.

<br/>

Chacun de ces processus est documenté. Le lignage des données est tracé dans une base de données graphique pour garantir que nous pouvons retracer toute modification apportée aux données et rendre nos processus transparents et reproductibles.

<br/>

### Arrêt 3 : Qualité des données

Nous vérifions la qualité de chaque source de données acquise par GBAD. Il y a parfois des erreurs internes dans l’agrégation des catégorisations où les sous-catégories ne totalisent pas une « super-catégorie ». Par exemple, si la volaille est divisée en volailles de basse-cour et commerciales, ces catégories devraient totaliser « volaille ». Dans d’autres cas, il peut y avoir une augmentation soudaine du nombre d’animaux dans un pays. Dans ce cas, nous devons enquêter en comparant la valeur à d’autres sources de données.

<br/>

Tous les contrôles de qualité et les modifications correspondantes sont enregistrés. Une fois les données « nettoyées », la version « nettoyée » est fournie via l’API et les tableaux de bord des GBAD. De cette façon, il y a une cohérence dans les évaluations de la qualité et chaque collaborateur ne le fait pas de manière indépendante. Cela garantit la cohérence des résultats et améliore collectivement la reproductibilité des estimations et des données des GBAD.

<br/>

### Arrêt 4 : Coder

Le code utilisé pour acquérir et ingérer des données, nettoyer les données et créer des modèles est disponible via les référentiels GitHub des GBAD. Le code est bien documenté et contient des informations sur la façon d'exécuter le code, les ensembles de données utilisés et les personnes impliquées dans le développement.

<br/>

### Destination finale : l'utopie des données

Dans Data Utopia, les données peuvent être harmonisées et réutilisées pour des modèles ou des objectifs ultérieurs. L’idée ici est que tous les membres des GBAD utilisent les mêmes données et ne dupliquent pas les efforts de nettoyage, d’ingestion ou d’acquisition des données. En rendant les données et la méthodologie de nettoyage reproductibles, les données sous-jacentes sont cohérentes et prêtes à l'emploi. Dans notre Utopie, les données sont visualisées et disponibles via des tableaux de bord et sont accessibles via l'API. Les tableaux de bord comportent également un onglet de métadonnées où les informations sur la méthodologie, le code et la provenance sont fournies pour garantir que tous les membres peuvent accéder au code et aux données brutes affichées et disponibles dans les tableaux de bord.

<br/>

*Remarque : Nous reconnaissons le fait que toutes les données ne peuvent pas être mises à disposition. Alors que nous travaillons actuellement avec des données gouvernementales ouvertes, nous prévoyons une gouvernance contrôlée des données privées et sensibles, qui ne seront pas ouvertement disponibles sous forme brute sans l'autorisation du détenteur des données, conformément aux accords et licences de données.*

<br/><br/>

Les références:

<!--Références-->
[^1] : Achenbach, J. (27 octobre 2021). De nombreuses études scientifiques ne peuvent pas être reproduites. c'est un problème. Le Washington Post. Consulté le 19 juin 2022 sur [https://www.washingtonpost.com/news/ Speaking-of-science/wp/2015/08/27/trouble-in-science-massive-effort-to-reproduce-100- résultats-expérimentaux-succeeds-only-36-times/](https://www.washingtonpost.com/news/ Speaking-of-science/wp/2015/08/27/trouble-in-science-massive-effort- reproduire-100-résultats-expérimentaux-réussit-seulement-36-fois/)

[^2] : Baker, M. (2016). 1 500 scientifiques lèvent le voile sur la reproductibilité. Nature, 533(7604).


