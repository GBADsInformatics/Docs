---
slug: the-roadmap-to-reproducibility
title: La feuille de route vers la reproductibilité
authors: Kassy
tags: [reproducibility, data, values]
---

![Image d'en-tête](https://i.imgur.com/2JEVnaV.png)
*Figure 1 : Feuille de route vers la reproductibilité*

> *« L'intérêt de la science, la façon dont nous savons quelque chose, n'est pas que je fasse confiance à Isaac Newton parce que je pense qu'il était un type formidable. Le tout est que je peux le faire moi-même… Montrez-moi les données, montrez-moi le processus, montrez-moi la méthode, puis si je veux, je peux les reproduire. »*

[Brian Nosek](https://www.washingtonpost.com/news/speaking-of-science/wp/2015/08/27/trouble-in-science-massive-effort-to-reproduce-100-experimental-results-succeeds-only-36-times/) - Washington Post[^1]

<br/>

La science reproductible nécessite des méthodes bien documentées, un code et la mise à disposition de données. Cela signifie assurer la transparence de ce que vous faites tout au long du processus scientifique pour favoriser la confiance dans le processus et les résultats et permettre aux autres de tirer parti des travaux antérieurs. Il n'y a pas de place pour le sceptique scientifique lorsque votre recherche est reproductible.

<br/>

Les données utilisées par les GBAD proviennent de nombreuses sources différentes et sont utilisées dans des modèles qui produisent ensuite davantage d'ensembles de données et qui servent d'entrées à d'autres modèles. Cette guirlande de données-modèle-données-modèle-données ne se limite pas au travail d'un seul scientifique ; nous avons des collaborateurs travaillant partout dans le monde. Il est crucial que les données sous-jacentes soient disponibles et que toutes nos méthodes soient reproductibles afin que nous puissions nous appuyer sur le travail de chacun et permettre aux autres d'utiliser nos estimations en toute confiance.

<br/>

Dans le but de rendre tous nos processus reproductibles et transparents, GBADs s'engage dans la "Roadmap to Reproductibility". Dans cet article de blog, nous vous invitons à parcourir avec nous le chemin de la reproductibilité. Bouclez vos ceintures de sécurité pendant que nous évitons les flammes ardentes de la « crise de la reproductibilité » avant de nous diriger vers notre destination finale, la « Data Utopia » !

<br/>

## La « crise de la reproductibilité »

En 2016, une enquête auprès de 1 576 chercheurs de Nature a révélé qu'il y avait une "crise de reproductibilité" dans la communauté scientifique[^2]. Parmi les participants "plus de 70% des chercheurs ont essayé et échoué à reproduire l'expérience d'un autre scientifique et plus de la moitié n'ont pas réussi à reproduire leurs propres expériences". De nombreux facteurs contribuent à la recherche non reproductible (figure 2), où la pression à publier et les rapports sélectifs étaient parmi les plus appréciés. Cependant, les données brutes non disponibles et les méthodes ou codes non disponibles ont également été considérés comme des contributeurs élevés. Alors que la pression pour publier nécessite un changement de culture dans la recherche, les données brutes et les méthodes ou le code indisponibles sont des problèmes que nous pouvons résoudre.

<br/>


![Figure 2](https://i.imgur.com/dcnJkJR.jpg)
Figure 2 : Facteurs qui contribuent à une recherche non reproductible. Chiffre obtenu de Baker, 2016[^2].

## S'engager sur la voie de la reproductibilité

### Arrêt 1 : Personnes et processus

La disponibilité du code et des données est importante pour la reproductibilité, mais il y a des personnes derrière le code et les données qui travaillent sur des processus pour le rendre reproductible.

<br/>

À ce titre, nous avons établi des processus et des bonnes pratiques pour l'utilisation des données dans les GBAD, qui sont communiqués dans le [Manuel de gouvernance des données](http://gbadskedoc.org/docs/Data-Governance-Handbook-for-GBADs/intro ), et sur notre [Site de documentation](http://gbadskedoc.org). Ces processus impliquent ce qui suit :

<br/>

1. Documentation des modifications apportées aux données et aux pratiques de nettoyage des données
2. Documentation des normes de métadonnées utilisées pour fournir des informations sur les données
3. Où et comment les données et les métadonnées sont stockées et comment elles sont diffusées
4. Meilleures pratiques pour documenter le code dans les référentiels GitHub

<br/>

Nous comptons également sur les gens pour se conformer aux processus que nous avons établis. Étant donné que certaines des données utilisées par les GBAD ne contiennent pas de métadonnées, nous comptons sur la mise en place d'un point de contact pour la source de données afin de nous assurer que nous pouvons obtenir un contexte sur la manière dont les données ont été collectées, comment elles peuvent être utilisées, par qui, et à quelles fins et quelles catégories de données représentent.

<br/>

### Stop 2 : Acquisition et ingestion de données

Pour acquérir des données, nous identifions les données pertinentes pour l'estimation des modèles. Par exemple, la population de bétail par pays et par espèce et les poids vifs sont des données d'entrée pour les calculs de la biomasse.

<br/>

La façon dont nous acquérons les données dépend du format dans lequel elles sont disponibles. Les données ont été acquises et ingérées de 3 manières principales :

<br/>

* Lorsque les données sont disponibles via des interfaces de programmation d'applications (API), les données sont acquises directement à partir de la source, étant transformées avant d'être mises à disposition via l'API des GBAD ;
* Lorsque les données sont disponibles par téléchargement direct, les données sont téléchargées et formatées dans des tables de base de données avant d'être mises à disposition via l'API des GBAD, et ;
* Lorsque les données sont disponibles dans des tableaux PDF, les scripts de grattage Web récupèrent les données des tableaux et les rendent disponibles via des fichiers csv avant d'être formatés dans des tableaux de base de données et mis à disposition via l'API des GBAD.

<br/>

Chacun de ces processus est documenté. La lignée des données est tracée dans une base de données graphique pour nous assurer que nous pouvons retracer toute modification des données et rendre nos processus transparents et reproductibles.

<br/>

### Étape 3 : Qualité des données

Nous vérifions la qualité de chaque source de données acquise par les GBAD. Parfois, il y a des erreurs internes dans l'agrégation des catégorisations où les sous-catégories ne s'additionnent pas pour former une « super-catégorie ». Par exemple, si la volaille est divisée en volaille de basse-cour et volaille commerciale, ces catégories devraient s'additionner pour donner la « volaille ». Dans d'autres cas, il peut y avoir une augmentation soudaine du nombre d'animaux dans un pays. Dans ce cas, nous devons enquêter en comparant la valeur à d'autres sources de données.

<br/>

Tous les contrôles de qualité et les modifications correspondantes sont enregistrés. Une fois les données « nettoyées », la version « nettoyée » est fournie via l'API et les tableaux de bord des GBAD. De cette façon, il y a cohérence dans les évaluations de qualité et chaque collaborateur ne le fait pas de manière indépendante. Cela garantit la cohérence des résultats et améliore la reproductibilité des estimations et des données des GBAD collectivement.

<br/>

### Arrêt 4 : Coder

Le code utilisé pour acquérir et ingérer des données, nettoyer des données et créer des modèles est disponible via les référentiels GitHub des GBAD. Le code est bien documenté et il y a des informations sur la façon d'exécuter le code, quels jeux de données ont été utilisés et qui a été impliqué dans le développement.

<br/>

### Destination finale : l'utopie des données

Dans l'utopie des données, les données peuvent être harmonisées et réutilisées pour des modèles ou des objectifs ultérieurs. L'idée ici est que tous les membres des GBAD utilisent les mêmes données et ne dupliquent pas les efforts de nettoyage, d'ingestion ou d'acquisition des données. En rendant les données et la méthodologie de nettoyage reproductibles, les données sous-jacentes sont cohérentes et prêtes à l'emploi. Dans notre Utopia, les données sont visualisées et disponibles via des tableaux de bord et sont accessibles via l'API. Les tableaux de bord comportent également un onglet de métadonnées où la méthodologie, le code et les informations de provenance sont fournies pour garantir que tous les membres peuvent accéder au code et aux données brutes qui sont affichés et disponibles dans les tableaux de bord.

<br/>

*Remarque : Nous reconnaissons le fait que toutes les données ne peuvent pas être mises à disposition. Bien que nous travaillions actuellement avec des données gouvernementales ouvertes, nous prévoyons la gouvernance contrôlée des données privées et sensibles, qui ne seront pas disponibles ouvertement sous forme brute sans l'autorisation du détenteur des données conformément aux accords et licences de données.*

<br/><br/>

Références:

<!--Références-->
[^1] : Achenbach, J. (2021, 27 octobre). De nombreuses études scientifiques ne peuvent pas être reproduites. c'est un problème. Le Washington Post. Extrait le 19 juin 2022 de [https://www.washingtonpost.com/news/talking-of-science/wp/2015/08/27/trouble-in-science-massive-effort-to-reproduce-100- les résultats expérimentaux ne réussissent que 36 fois/](https://www.washingtonpost.com/news/talking-of-science/wp/2015/08/27/trouble-in-science-massive-effort- reproduire-100-résultats-expérimentaux-réussit-seulement-36-fois/)

[^2] : Baker, M. (2016). 1 500 scientifiques lèvent le voile sur la reproductibilité. Nature, 533(7604).


