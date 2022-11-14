---
sidebar_position: 5
---
Mécanismes de partage de données
===========================

Il existe de nombreuses façons de faciliter techniquement le partage de données, telles que les téléchargements de fichiers, les API, etc. Cette section explique les principes qui sous-tendent le fait d'être un courtier de données "de confiance" et une source de données fédérée.

![sysView](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/systemView.png)

Les mécanismes de partage de données GBAD reposent sur la capacité à créer une architecture de visualisation des données adaptée aux droits de confidentialité et de sécurité des différents types d'utilisateurs. Plus précisément, cela repose sur la possibilité de catégoriser les utilisateurs et de créer des vues système pour cet utilisateur où cet utilisateur ne peut voir que les données auxquelles il est autorisé. Nous utilisons le terme « vue » tel que décrit par la théorie des bases de données : « Les vues sont généralement utilisées pour focaliser, simplifier et personnaliser la perception que chaque utilisateur a de la base de données. Les vues peuvent être utilisées comme mécanismes de sécurité en permettant aux utilisateurs d'accéder aux données via la vue, sans accorder aux utilisateurs l'autorisation d'accéder directement aux tables de base sous-jacentes de la vue ». En d'autres termes, permettre aux contributeurs de données de sélectionner le type d'utilisateurs qu'ils souhaitent autoriser à accéder à leurs données crée une « vue » pour cet utilisateur de données (cache ou met à disposition des actifs de données spécifiques). Cela accorde aux contributeurs de données le pouvoir de contrôler leurs ressources de données. Bien sûr, ce concept dépend de la capacité à catégoriser les utilisateurs de données (voir la section Types de données pour une discussion plus détaillée de ce concept).

Les données considérées comme "ouvertes par défaut" seront accessibles publiquement à tout utilisateur qui accède au portail de données et seront disponibles sans restriction pour être téléchargées directement. Cependant, pour accéder même aux données ouvertes via une API, une inscription sera nécessaire pour obtenir une clé API personnalisée.

Les utilisateurs souhaitant accéder à des sources de données privées devront se catégoriser à l'aide des identifications d'utilisateurs de données prédéfinies GBAD. Cela consistera à créer un profil d'utilisateur, à identifier quel type d'utilisateur vous êtes et à saisir une méthode de vérification pour ce faire. La méthode de vérification peut consister en un ORCHID ID s'il s'agit d'un utilisateur académique. Cependant, les mécanismes derrière la vérification des utilisateurs sont toujours stipulés (nous essayons toujours de comprendre comment nous vérifions l'identité des utilisateurs des groupes marginalisés, des parties prenantes privées, etc.). Ces autorisations, tant en termes d'informations sur les utilisateurs que de droits d'accès à un actif de données, seront incluses dans les métadonnées.

Une fois que l'identité d'un utilisateur peut être vérifiée, cet utilisateur se verra accorder une vue des données et une clé API qui lui permettra d'accéder aux données privées via un appel API. De même, les données à leur avis seront disponibles par téléchargement direct. Il convient de noter que si les principes FAIR sont généralement utilisés dans le contexte des données ouvertes, les données peuvent être FAIRifiées dans différentes vues du système et sous l'hypothèse que les données ne sont pas ouvertes par défaut. Nos métadonnées seront trouvables, accessibles, interopérables et réutilisables, comme le suggèrent les principes directeurs de FAIR, mais au sein de notre système et protégées par différentes vues. Par exemple, les ressources de données ouvertes seront trouvables pour tout le monde, mais les données qui ne sont disponibles que pour des utilisateurs de données spécifiques ne seront trouvables que pour ce type d'utilisateur.

En général, chaque ensemble de données négocié par les GBAD sera doté d'un identifiant unique qui le liera à ses métadonnées. Lorsqu'un utilisateur accède aux données d'une manière ou d'une autre (par exemple via un appel d'API ou un téléchargement direct), l'identifiant unique et l'URL du portail de métadonnées seront renvoyés. L'utilisateur peut alors accéder facilement aux métadonnées. De même, les utilisateurs peuvent commencer leur recherche de données avec l'outil de recherche de métadonnées. L'appel de l'API de données sera fourni quelque part sur le moteur de recherche de métadonnées (c'est-à-dire que si vous sélectionnez un ensemble de données qui vous intéresse, les métadonnées vous seront fournies).


Défis des mécanismes de partage de données
-------------------------------------

Un défi dans la conception de la vue système réside dans les difficultés de licence pour traiter la **R**usabilité d'une ressource de données.
Les préoccupations qui se posent concernent la publication et la communication de résultats inspirés de données privées. Si des données privées sont
utilisé dans un modèle ou pour d'autres décisions basées sur les données comment les données seront-elles citées ou correctement attribuées (ou peut-être vérifiées)
sans accorder l'accès aux données ni publier les résultats de modèles utilisant des données privées en entrée ? Il est important de
comprendre les opinions des parties prenantes des données afin de comprendre leurs souhaits sur la manière dont les données sont utilisées.

Une autre difficulté ou limitation possible est que les utilisateurs ayant des vues spécifiques ne sauront même pas que certains actifs de données existent.

Vocabulaires et ontologies
---------------------------

Les vocabulaires et ontologies préexistants seront consultés, affinés, comparés et étendus pour créer un
vocabulaire contrôlé pour les GBAD. La sémantique sera accessible pour chaque source de données afin de s'assurer que les mots
utilisées pour décrire les données sont cohérentes entre les sources de données.

- Les vocabulaires des sources de données qui ne citent pas les normes de vocabulaire seront obtenus et les mots seront
par rapport aux normes de données préexistantes telles que AGROVOC (vocabulaire contrôlé de la FAO)
- Les vocabulaires collectés seront comparés pour toutes les sources de données, pour voir comment la description des termes se compare les unes aux autres.
- L'objectif est de fournir une norme pour les GBAD, en augmentant l'interopérabilité et la qualité des données, conduisant finalement à
modèles et estimations supérieurs
- Les vocabulaires contrôlés conduisent également à de meilleurs systèmes et permettent l'automatisation des tâches

Agroportal est un outil de cartographie d'ontologies qui permettra aux GBAD de déterminer les ontologies appropriées et la cartographie entre
vocabulaires normalisés liés au secteur agricole.
- Nous reconnaissons également que nous ne pouvons pas nous attendre à ce que les contributeurs de données modifient leur vocabulaire pour suivre celui des GBAD
(et si nous le demandions, cela pourrait décourager les gens de fournir des données). Cela souligne l'importance du vocabulaire
mappages.

```{avertissement} à ajouter
Discussion générale sur la façon dont nous les voyons se développer pour GBADS.
```

Provenance
----------

Comment les informations sur les données seront collectées ou consultées par les donateurs et comment ces informations seront évaluées, stockées,
et fournir la base pour générer des informations de provenance sur toutes les données négociées par les GBAD.

Les contributeurs de données seront tenus de fournir des informations sur la provenance.

Fournir des informations détaillées sur la provenance aux utilisateurs de données est un élément essentiel de la fourniture de données FAIR. Informations sur la provenance
doit couvrir au minimum :
1. Qui ou quoi a créé les données ? Cela comprendrait des informations sur la méthodologie utilisée pour créer les données d'origine
(soit par une citation, soit en fournissant des informations dans les métadonnées). Des informations indiquant si les données ont été
transformé d'une manière ou d'une autre (par exemple par un changement de vocabulaire/d'ontologie, de techniques d'imputation, d'estimations, de suppression de lignes, etc.)
doivent également être fournis par des références et des descriptions de programmes ou de techniques utilisés pour effectuer ces transformations.

2. Quand les données ont-elles été produites et quand les dernières modifications ont-elles été apportées aux données ?

3. Contexte de création des données. Pourquoi les données ont-elles été créées ou produites ? Cela fournit des informations aux utilisateurs potentiels de données sur
si l'utilisation des données répond à leurs besoins et est conforme à leurs pratiques, modèles ou autres techniques statistiques potentiels.

Les métriques conçues pour FAIR sont intéressantes pour cette discussion :
[FAIR Metric FM-R1.2](https://github.com/FAIRMetrics/Metrics/blob/master/Distributions/FM_R1.2.pdf)

L'accès aux données est en partie régi par la provenance des données. Par exemple, il est important de comprendre qui a créé et
est propriétaire des données pour déterminer si les données sont réutilisables (principe FAIR 4). Il peut y avoir des restrictions spécifiques aux données
accès en vertu d'accords de licence qui pourraient déterminer comment les données peuvent être utilisées et par qui.

```{remarque}
E3 Les métadonnées doivent reconnaître la provenance et le but et toute limitation ou obligation d'utilisation secondaire, y compris
des problèmes de consentement.
```

Les informations de provenance pour chaque ensemble de données seront stockées dans des métadonnées, qui seront mises à la disposition et consultables
par tous les utilisateurs de GBAD. Une norme de provenance reconnue sera utilisée pour s'assurer que les informations de provenance sont trouvables
et réutilisable.

Collecte d'informations
----------------------

Enquêtes/formulaires qui recueilleront des informations à utiliser pour la provenance et l'identification des utilisateurs.
- ID ORCIDE
- Informations de connexion

