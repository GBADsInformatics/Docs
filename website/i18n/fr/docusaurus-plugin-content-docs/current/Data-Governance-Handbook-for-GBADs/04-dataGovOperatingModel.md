---
sidebar_position: 4
---

# Modèle opérationnel de gouvernance des données

Un modèle opérationnel de gouvernance des données est un modèle opérationnel qui définit les processus de données clés d'une organisation, les rôles et les tâches impliqués dans chacun de ces processus, ainsi que les personnes, les outils et la technologie nécessaires pour exécuter chacun des processus.

---

**Dans cette section:**

* Nous décrivons les objectifs en matière de données pour les GBAD
* Nous décrivons le modèle opérationnel de gouvernance des données pour les GBAD en utilisant la structure de gouvernance des GBAD (groupes de travail) pour comprendre les rôles et les responsabilités de chacune des tâches impliquées pour atteindre les objectifs en matière de données.

---

## Objectifs

Les principaux objectifs en matière de données pour les GBAD peuvent être répartis comme suit :

**Général**

Objectif de données 1.<a name="Data-Goal-1"></a>
Accès à une technologie et à des produits innovants et à la pointe de la technologie.


**Données**

Objectif de données 2.<a name="Data-Goal-2"></a>
Identifier les sources de données requises à des fins de modélisation GBAD

* Si nécessaire, créez des alliances de données avec des détenteurs de données privés et publics


Objectif de données 3.<a name="Data-Goal-3"></a>
Les données sont accessibles aux utilisateurs (humains et machines) et peuvent être utilisées en temps opportun pour la prise de décision [^1]

* Cela inclut les données que GBADs redirige depuis d'autres organisations et les données que GBADs stocke pour les projets et partenaires associés [^1].

Objectif de données 4.<a name="Data-Goal-4"></a>
La qualité des données a été analysée et ces mesures sont disponibles dans le cadre des métadonnées [^1]


Objectif de données 5.<a name="Data-Goal-5"></a>
Les données ne sont nettoyées qu'une seule fois - réduisez la réplication des sources de données et le nettoyage

Objectif de données 6.<a name="Data-Goal-6"></a>
Les données peuvent être trouvées par les utilisateurs de données [^1]

Objectif de données 7.<a name="Data-Goal-7"></a>
Un système qui permet la personnalisation des informations grâce à des mécanismes et des traitements qui ajustent la granularité des données aux besoins de l'utilisateur[^1]

Objectif de données 8.<a name="Data-Goal-8"></a>
Données interprétables : la sémantique à coder dans les métadonnées et autres systèmes sémantiques [^1]


**Modèles et visualisations de données**

Objectif de données 9.<a name="Data-Goal-9"></a>
Les procédures de modélisation sont reproductibles

Objectif de données 10.<a name="Data-Goal-10"></a>
Le lignage des données est tracé pour garantir que toutes les procédures de données sont réplicables, pour garantir que les données ne sont pas répliquées, pour contribuer à la qualité et aux mises à jour des données, et pour garder une trace des versions de données utilisées dans les publications.

Objectif de données 11.<a name="Data-Goal-11"></a>
Les visualisations de données et les tableaux de bord sont servis sur les serveurs GBADs, utilisent les données du moteur de connaissances GBADs (sources de données GBADs) et sont liés aux métadonnées et aux méthodes.


Les procédures et processus de gouvernance des données sont essentiels pour atteindre les objectifs, créer un système FAIR(S) et garantir que les processus, publications et modèles de données sont reproductibles. Chaque objectif a ses propres processus qui nécessitent des outils technologiques uniques et des responsabilités individuelles (humaines) du thème informatique, ainsi que d'autres utilisant et créant des modèles de données dans les GBAD. La structure de gouvernance des GBADs (groupes de travail) offre un point d’observation pour comprendre où se situe la responsabilité dans la structure opérationnelle de gouvernance des données.

<!--
De FOIRES en FOIRES
Des données qui peuvent être utilisées en temps opportun pour la prise de décision.
Données qui ont été analysées pour en vérifier la qualité et ces mesures sont disponibles dans le cadre des métadonnées.
Une collecte de données la plus complète possible pour toutes ses parties prenantes. Cela inclura les données que GBADs redirige depuis d'autres organisations et les données que GBADs stocke pour les projets et partenaires associés.
Données pertinentes pour la modélisation, l'aide à la décision et d'autres fins importantes pour les objectifs des GBAD et de ses utilisateurs.
Des données facilement accessibles aux utilisateurs appropriés (machines et humains).
Données interprétables : la sémantique à coder dans les métadonnées et autres systèmes sémantiques.
Accès à une technologie et à des produits innovants et à la pointe de la technologie.
Un système qui permet la personnalisation de l'information grâce à des mécanismes et des traitements qui ajustent la granularité des données aux besoins de l'utilisateur. -->


<!-- * Évaluer la qualité de toutes les données d'entrée selon les mesures de qualité établies par l'équipe informatique et communiquer la qualité via des rapports ou des tableaux de bord sur la qualité des données
* Les données peuvent être partagées avec des partenaires internes et externes via des interfaces de programmation d'application (API) et/ou des fichiers dans des compartiments S3.
* Réduisez la réplication des données et fournissez des processus afin que les mêmes versions de données puissent être utilisées par tous les utilisateurs de données dans les GBAD.
* Tracer la traçabilité et la provenance des données pour garantir que les modifications apportées aux données et aux résultats sont reproductibles et traçables, et pour garantir que
* S'assurer que les procédures de modélisation sont bien documentées,
* Fournir des infrastructures pour

Les objectifs ont été rédigés à partir du Document d’investissement 2023. -->

## Personnes et processus - Groupes de travail GBADs

Le GBADs est divisé en trois groupes de travail principaux, chacun avec des responsabilités uniques mais qui se chevauchent. Des groupes de travail sont organisés, chacun s'appuyant les uns sur les autres, où les données constituent la structure de base (Figure 1).

![GBADsWGStruct](./images/GBADsWGStruct.png)
Figure 1 : Groupes de travail GBADs

Chaque groupe de travail a un ensemble de responsabilités telles que définies par les GBAD pour atteindre l'objectif d'estimer le fardeau économique et sanitaire des maladies animales grâce à des efforts de modélisation. Les responsabilités décrites chevauchent les objectifs de données du GBAD à travers les interactions avec l'obtention, l'utilisation et la gestion des données. Le tableau ci-dessous présente la description des responsabilités de chaque groupe de travail et les objectifs se rapportant à chaque groupe de travail :

| Groupe de travail | Description des responsabilités[^2] | Chevauchement avec les objectifs |
| ------------- | ----------- | ----------- |
| Groupe de travail 1 (WG1) - Alliances de données, communication d'informations et adoption et adoption | <ul><li>Conduire une traduction efficace de la recherche et s'appuyer sur le travail sur le thème de la priorisation des maladies dans le contexte mondial, ainsi que sur le travail d'engagement avec les parties prenantes des études de cas indonésiennes et éthiopiennes dans un contexte local.</li><li>Traduire la recherche en produits précieux afin d'accéder à des ressources supplémentaires, qu'il s'agisse de données, de financements ou de contributions en nature d'autres programmes.</li><li>Responsable de la combinaison et de l'organisation des résultats analytiques pour assurer la cohérence et la compréhension par les utilisateurs et sera responsable de garantir que les commentaires des utilisateurs et des groupes de référence d'experts sont intégrés dans les tableaux de bord.</li></ul>| <ul><li>[Objectif de données 2](#Data-Goal-2)</li></ul>|
| Groupe de travail 2 (WG2) Méthodes et analyses | <ul><li>Responsable du perfectionnement des méthodes GBADs fournissant une analyse de données et une modélisation scientifique de haute qualité, en utilisant l'analyse de scénarios pour répondre aux contraintes de disponibilité des données et l'analyse de sensibilité pour intégrer les limitations de la qualité des données, une base essentielle pour le moteur de connaissances et la maladie valide. estimations de la charge.</li><li>Utiliser des sous-ensembles de données du sur-ensemble construit par le groupe de travail informatique (WG3) avec les transformations et les calculs requis pour une analyse spécifique.</li><li>Responsable de l'évaluation de la faisabilité technique des GBAD en testant la pertinence scientifique et la robustesse de ses méthodes.</li></ul> | <ul><li>[Objectif de données 2](#Data-Goal-2)</li><li>[Objectif de données 4](#Data-Goal-4)</li><li>[Objectif de données 9 ](#Data-Goal-9)</li><li>[Objectif de données 10](#Data-Goal-10)</li></ul>|
| Groupe de travail 3 (WG3) - Informatique | <ul><li>Responsable de la construction du prototype du moteur de connaissances, fournissant une base de données gouvernées : un sur-ensemble de données avec des règles de gouvernance et des processus de nettoyage standard.</li></ul> | <ul><li>[Objectif de données 1](#Data-Goal-1)</li><li>[Objectif de données 3](#Data-Goal-3)</li><li>[Objectif de données 4 ](#Data-Goal-4)</li><li>[Objectif de données 5](#Data-Goal-5)</li><li>[Objectif de données 6](#Data-Goal-6)</li><li>[Objectif de données 7](#Data-Goal-7)</li><li>[Objectif de données 8](#Data-Goal-8)</li><li>[Objectif de données 10 ](#Data-Goal-10)</li><li>[Objectif de données 11](#Data-Goal-11)</li></ul>|


---

Le modèle opérationnel de gouvernance des données utilise la structure du groupe de travail pour attribuer les rôles et les responsabilités liés aux objectifs en matière de données.

---




<!-- ## Modèle opérationnel de gouvernance des données non invasive des rôles et des responsabilités

Le modèle opérationnel de gouvernance des données non invasif des rôles et des responsabilités

![seinerTdanDGOperating](./images/seinerTdanDGOperating.gif) -->

## Les références:
[^1] https://acsess.onlinelibrary.wiley.com/doi/full/10.1002/agj2.21017?af=R
[^2] Groupes de travail et description des responsabilités tirées du document d'investissement GBADs Bill et Melinda Gates 2022
[^3] https://tdan.com/the-non-invasive-data-governanceo-operating-model/12210
