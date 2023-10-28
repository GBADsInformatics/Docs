---
sidebar_position: 5
---

# Qualité des données

La qualité des données utilisées par les GBAD est évaluée et communiquée conformément à [Data Goal 4] (#Data-Goal-4). Notre définition de la qualité des données est ancrée dans les 6 dimensions de la qualité des données.

La qualité des données est importante pour les GBAD car la qualité des données aura un impact direct sur la qualité des modèles et des résultats produits par les modèles. Par conséquent, la qualité des données d'entrée doit être évaluée et la qualité de ces données doit être signalée aux modélisateurs et aux utilisateurs des données et des modèles du GBAD. Bien que nous n'ayons pas d'influence directe sur la qualité des données d'entrée, nous pouvons faire état de notre confiance dans les données et des problèmes de qualité potentiels qui peuvent avoir une incidence sur la certitude des estimations.

De même, nous devons veiller à ce que les données de sortie produites par les modèles et les estimations soient de haute qualité afin de garantir qu'elles puissent être utilisées en toute confiance pour la prise de décision et que les utilisateurs puissent faire confiance aux résultats du GBAD.

---

La qualité des données relève de la responsabilité des groupes de travail 2 et 3 - voir le [Modèle opérationnel de gouvernance des données](https://gbadskedoc.org/docs/Data-Governance-Handbook-for-GBADs/dataGovOperatingModel) pour plus de détails sur les responsabilités en matière de données.

---

## Définir la qualité des données

Il n’existe pas de définition convenue de la qualité des données ; la définition de la qualité des données dépend du contexte dans lequel les données seront utilisées. De nombreuses dimensions de la qualité des données ont été proposées, cependant, les dimensions pertinentes pour le cas d'utilisation d'une organisation dépendent encore une fois du contexte d'utilisation.

*Dans cette section, nous décrivons les dimensions de la qualité des données qui sont pertinentes pour les GBAD ainsi que les processus, mesures et outils utilisés pour évaluer la qualité des données utilisées et produites.*

<!-- ### Dimensions de la qualité des données

*Précision*

*La cohérence interne*

La cohérence interne est définie comme

*Cohérence externe*

La cohérence externe est définie comme -->
## Analyse de la qualité des données

### Cohérence des données internes et externes

Déterminer si les données sont cohérentes entre et au sein des sources de données est un indicateur important de la qualité des données. Par exemple, les données provenant de différentes sources qui rapportent la « même » métrique s’alignent-elles numériquement ?

Ian McKechnie a créé une méthodologie pour analyser la cohérence interne et externe entre les sources de données afin de déterminer s'il existe une incertitude dans les données déclarées.

Chaque source de données (WOAH, FAOSTAT, recensement national et recensement des Nations Unies) a été analysée avec les éléments suivants :
* Valeurs aberrantes identifiées : tracé de toute la croissance annuelle sur une courbe normale pour déterminer s'il existe des points de données en dehors du troisième écart type
* Intervalle interquartile déterminé (IQR) pour la plage de croissance de chaque source
* Moyennes de population sur cinq ans pour toutes les sources de données et comparaison de ces moyennes pour déterminer s'il y avait des incohérences dans la tendance.

La méthodologie créée sera solidifiée et les résultats seront rapportés dans un manuscrit (actuellement en cours de révision). Les principales conclusions suggèrent qu'il existe des incohérences entre les sources de données pour la plupart des espèces et des pays ; les détails seront rapportés dans le manuscrit.

## Outils pour prendre en charge l'analyse de la qualité des données

### Tableau de bord de visualisation des données pour l'analyse de la qualité

Les données des organisations internationales, telles que FAOSTAT, agrémentent leurs données de valeurs prévues, imputées et non officielles lorsque les données officielles ne sont pas disponibles. Joshua Davidson a créé un tableau de bord qui prend en charge l'analyse des données longitudinales de FAOSTAT à travers les éléments suivants :

Étant donné une espèce et un pays :

* Visualisez les données potentiellement erronées en raison de données imputées ou non officielles
* Fournit le pourcentage de valeurs non officielles
* Visualiser les tendances longitudinales pour identifier les changements inattendus ou rapides dans la population d'une année à l'autre

L'outil est encore en cours de développement ; les idées de développement futur comprennent :
* Filtrage pour un « niveau de qualité ». Par exemple, fournissez des données qui dépassent un certain pourcentage, non officielles, ou qui prennent en compte la pente de la ligne de tendance dans le temps pour identifier automatiquement les erreurs possibles.


### Autres outils

GBADs Informatics travaille sur un certain nombre d'outils de qualité des données. Ces outils englobent les tâches suivantes :

* Des « histoires » de données qui visualisent et commentent les données des rapports sur l'élevage de l'Agence centrale statistique éthiopienne aux niveaux national et régional.

* Analyse de sources de données telles que FAOSTAT et WOAH en termes d'agrément interne et externe (visualisations, mesures et métriques)

* Ontologie et SHACL pour valider les données et évaluer la qualité des données relatives aux catégories d'espèces dans les données de population WOAH (démonstration logicielle de cette capacité disponible au 1er trimestre 2023)

Même s'il appartient à l'organisation ou au contributeur de données de corriger leurs données à la source, nous avons mis en place des procédures pour communiquer les résultats des évaluations de la qualité.


