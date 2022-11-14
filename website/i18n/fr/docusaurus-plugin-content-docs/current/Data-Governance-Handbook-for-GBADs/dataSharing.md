---
sidebar_position: 2
---
# Principes et gouvernance des données

## Gouvernance des données

** La gouvernance des données est la gestion, le stockage, la confidentialité, l'utilisation et la qualité des données et des métadonnées utilisées par une organisation. ** La gouvernance des données est une tâche multidimensionnelle qui exige que tous les individus d'une organisation se conforment aux normes documentées et aux meilleures pratiques pour tous les éléments d'utilisation des données.
La conformité à une stratégie de gouvernance des données bien documentée permet une meilleure utilisation des données grâce à la capacité d'exploiter pleinement les actifs de données.

### Fondements de la gouvernance des données

Si la gouvernance des données concerne les données, elle concerne également les personnes, les processus et la sécurité des données.

**Gouvernance des données et personnes**
Toutes les personnes qui créent, utilisent, diffusent ou gèrent des données font partie de la stratégie de gouvernance des données et doivent s'y conformer.

**Gouvernance et sécurité des données**

**Gouvernance et processus des données**

Termes de gouvernance des données que vous devez connaître :
- Intendant des données
- Intégration de données
- Provenance des données
- Science des données



#### Plus de lecture sur la gouvernance des données
**Articles de blog**
- https://towardsdatascience.com/what-we-got-wrong-about-data-governance-365555993048



## Principes des données

Pour fournir et créer des données qui peuvent être utilisées au maximum de leur potentiel, GBADs s'efforce de fournir des données et des métadonnées qui sont **F**indable, **A**ccessible, **I**nteroperable, **R**eusable et **S**sécurisé (FAIR(S)).

```{marge}
Les '[FAIR Guiding Principles for scientific data management and stewardship](https://www.nature.com/articles/sdata201618)' ont été publiés dans *Scientific Data* en 2016. Depuis sa publication, l'article a été cité plus de 4500 fois et des efforts ont été déployés pour mettre en œuvre et accepter les principes FAIR dans différents domaines. Cela inclut l'[Initiative GO FAIR](https://www.go-fair.org/go-fair-initiative/go-fair-offices/), qui fournit des ressources aux groupes qui tentent de rendre leurs données FAIR.
```

<!--GBADs s'efforce de fournir des (méta)données conformes aux principes FAIR(S) et CARE et adoptera une version modifiée de la déclaration et de la liste de contrôle GATHER pour créer des métadonnées plus granulaires, le cas échéant.

En utilisant et en s'appuyant sur des normes préexistantes, nous construirons un système interopérable que d'autres chercheurs pourront comprendre et développer. -->

### Principes FAIR et culture des données

L'idée de données « FAIR » a été créée en 2014/15 pour guider la réutilisation, l'utilisabilité, la découvrabilité et l'interopérabilité des données de recherche. L'acronyme « FAIR » signifie Findablity, Accessibility, Interoperability and Reusability of data assets, y compris les données elles-mêmes et les métadonnées utilisées pour les décrire (voir l'annexe A pour une ventilation de chaque principe FAIR). L'idée des données FAIR a depuis grandi et a été largement utilisée, adaptée et développée.
En 2020, GBADs informatics a proposé des données « FAIR(S) » pour ajouter un élément de sécurité aux principes directeurs de FAIR.

Bien qu'initialement créé pour la réutilisation des données de recherche, l'idée de FAIR a grandi et peut être appliquée aux sources de données ouvertes et privées. Les GBAD adapteront les données FAIR en tant que concept de système et créeront des objets de données FAIR. L'écosystème de données FAIR (Figure 1) sera utilisé comme structure squelettique de notre écosystème de données. Ce document agira comme un plan de gestion des données où chaque composant de l'écosystème de données FAIR sera abordé et discuté en termes de structuration des objets de données FAIR et de définition de l'utilisation des données circulant dans notre système.


```{chiffre} /images/fairDataObj.png
:name: fairDataObj

```

Une idée fausse répandue dans l'adoption des principes de partage FAIR est que FAIR suggère que les données doivent être « ouvertes » par défaut ; cependant, FAIR suggère en fait que les données doivent être « aussi ouvertes que possible, aussi fermées que nécessaire » [Jones et al, 2018]. Pour les GBAD, cela signifie compléter les principes FAIR par CARE, qui est abordé plus en détail plus loin dans ce document. Un élément clé à cet égard sera l'identification des différents types d'utilisateurs et de contributeurs de données.

S'assurer que les métadonnées sont sous une forme standard permettra aux GBAD de se conformer à FAIR et servira de colonne vertébrale à notre système, alimentant la capacité de rechercher et de trouver des ressources basées sur des termes standardisés. Par conséquent, l'accent sera mis sur des attributs et des définitions de métadonnées bien définis.

![cloudReg](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/cloudOfRegistries.png)

GBADs s'efforce non seulement d'adapter FAIR dans le système, mais également de créer une culture avec notre entreprise qui inspire l'utilisation de FAIR dans les données de recherche des universitaires impliqués dans le grand projet GBADs. Nous pensons que ce changement permettra une meilleure utilisation et réutilisation des données, permettant une collaboration et une meilleure allocation des ressources.

### Principes de CARE

Les principes de CARE comprennent : l'avantage collectif, l'autorité de contrôle, la responsabilité et l'éthique. Chaque principe se rapporte à l'utilisation et à la gouvernance des données détenues par ou liées aux peuples autochtones, à leurs terres, biens culturels et pratiques [réfs] et est divisé en catégories dans l'annexe B. Les principes de CARE seront pris en compte à chaque étape des données GBADs stratégie de gouvernance et conception du portail de données.

Nous reconnaissons que nos interprétations des principes de CARE peuvent ne pas refléter complètement les véritables intérêts des peuples et groupes autochtones, car l'équipe informatique GBADs n'a actuellement pas d'employés autochtones ni de partenariats avec des peuples autochtones. Lorsque des collaborations officielles avec les peuples et groupes autochtones auront été créées, des stratégies et des conceptions seront élaborées et affinées pour garantir que toutes les données autochtones sont régies, gérées et utilisées pour le bénéfice collectif des peuples autochtones.

### Lignes directrices pour le RASSEMBLEMENT

GATHER, ou Guidelines for Accurate and Transparent Health Estimates Reporting, définit les meilleures pratiques de notification pour les études qui calculent des estimations de santé. GATHER a trois documents principaux : la déclaration GATHER [réfs], la liste de contrôle GATHER et l'explication et l'élaboration GATHER [réf]. Alors que les GBAD généreront des estimations de la santé, puisque la santé est celle des animaux d'élevage et non celle des humains (pour laquelle GATHER a été conçu), nous utiliserons GATHER comme point de départ et non comme point final. Veuillez consulter l'annexe C pour voir la liste de contrôle GATHER et une critique préliminaire des éléments liés aux GBAD.



