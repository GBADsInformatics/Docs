---
sidebar_position: 2
---

# Principes des données

En tant que programme, nous avons des principes de base en matière de données sur lesquels est basé notre [Modèle opérationnel de gouvernance des données](https://gbadskedoc.org/docs/Data-Governance-Handbook-for-GBADs/dataGovOperatingModel).

Nos principes fondamentaux comprennent :

1. Adhérer aux principes directeurs FAIR(S)[^1],[^2] au mieux de nos capacités.
2. Soyez un courtier de données « de confiance » et une source de données fédérée
3. Tenez compte des principes de CARE lors de l'utilisation de données provenant de groupes marginalisés et de données privées
4. Assurez-vous que tous les processus qui utilisent des données (y compris le nettoyage des données, la modélisation, le reformatage, etc.) sont réplicables et reproductibles.

---

Dans ce chapitre du manuel, nous décrivons les principes que nous avons l'intention de suivre dans notre cadre de gouvernance des données et un aperçu des processus impliqués dans chacun.

D'autres chapitres du manuel fourniront plus de détails sur les processus, les outils technologiques et les responsabilités humaines impliqués dans chacun des principes, et feront référence à ces principes lors de la description des processus impliqués dans chacun de nos objectifs en matière de données.

---

## 1. Principes FAIR et culture des données

Nous avons adopté les principes directeurs FAIR(S)[^1],[^2] pour garantir que les données, les métadonnées et les processus de modélisation sont **F**indable, **A**ccesibile, **I**nteroperabile. , **R**utilisable et **S**ecure.

<!-- Pour fournir et créer des données pouvant être utilisées au maximum de leur potentiel, GBADs s'efforce de fournir des données et des métadonnées **F**indables, **A**accessibles, **I**interopérables, ** Réutilisable et **S**écure (FAIR(S)). -->


---

**À propos de FAIR :**

Les « [Principes directeurs FAIR pour la gestion et la gestion des données scientifiques](https://www.nature.com/articles/sdata201618) » ont été publiés dans *Scientific Data* en 2016. Depuis sa publication, l'article a été cité plus de 4 500 fois. à plusieurs reprises et des efforts ont été déployés pour mettre en œuvre et accepter les principes FAIR dans différents domaines. Cela inclut l'[Initiative GO FAIR](https://www.go-fair.org/go-fair-initiative/go-fair-offices/), qui fournit des ressources aux groupes essayant de rendre leurs données ÉQUITABLES.

---

<!--GBADs s'efforce de fournir des (méta)données qui adhèrent aux principes FAIR(S) et CARE et adoptera une version modifiée de la déclaration et de la liste de contrôle GATHER pour créer des métadonnées plus granulaires, le cas échéant.

En utilisant et en nous appuyant sur des normes préexistantes, nous construirons un système interopérable que d’autres chercheurs pourront comprendre et sur lequel s’appuyer. -->



L’idée des données « FAIR » a été créée en 2014-2015 pour guider la réutilisation, l’utilisabilité, la découvrabilité et l’interopérabilité des données de recherche. L'acronyme « FAIR » signifie Findablity, Accessibility, Interoperability and Reusability of data assets, y compris les données elles-mêmes et les métadonnées utilisées pour les décrire (voir l'annexe A pour une description de chaque principe FAIR). L’idée des données FAIR s’est depuis développée et a été largement utilisée, adaptée et développée.
En 2020, GBADs informatique a proposé les données « FAIR(S) » pour ajouter un élément de sécurité aux principes directeurs FAIR.

Bien qu'initialement créée pour la réutilisation des données de recherche, l'idée de FAIR s'est développée et peut être appliquée aux sources de données ouvertes et privées. Les GBAD adapteront les données FAIR en tant que concept de système. L'écosystème de données FAIR (Figure 1) sera utilisé comme structure squelettique de notre écosystème de données. Ce document fera office de plan de gestion des données où chaque composant de l'écosystème de données FAIR sera abordé et discuté en termes de structuration des objets de données FAIR et de définition de l'utilisation des données circulant dans notre système.

![fairDataObj](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/fairDataObj.png)

Une idée fausse très répandue dans l’adoption des principes de partage FAIR est que FAIR suggère que les données devraient être « ouvertes » par défaut ; cependant, FAIR suggère en fait que les données devraient être « aussi ouvertes que possible, aussi fermées que nécessaire » [Jones et al, 2018]. Pour les GBAD, cela signifie compléter les principes FAIR par CARE, qui est discuté plus en profondeur plus loin dans ce document. Un élément clé à cet égard sera l’identification des différents types d’utilisateurs et de contributeurs de données.

Veiller à ce que les métadonnées soient sous une forme standard permettra aux GBAD de se conformer à FAIR et servira d'épine dorsale à notre système, alimentant la capacité de rechercher et de trouver des ressources basées sur des termes standardisés. Par conséquent, l’accent sera mis sur des attributs et des définitions de métadonnées bien définis.

![cloudReg](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/cloudOfRegistries.png)

GBADs s'efforce non seulement d'adapter FAIR dans le système, mais également de créer une culture au sein de notre entreprise qui inspire l'utilisation de FAIR dans les données de recherche des universitaires impliqués dans le grand projet GBADs. Nous pensons que ce changement permettra une meilleure utilisation et réutilisation des données, permettant une collaboration et une meilleure allocation des ressources.

## 2. Un courtier de données « de confiance »

Il existe de nombreuses façons de faciliter techniquement le partage de données, telles que le téléchargement de fichiers, les API, etc. Cette section explique les principes qui sous-tendent le fait d'être un courtier de données « de confiance » et une source de données fédérée.

### Mécanismes pour un partage responsable des données

**Les mécanismes technologiques du partage de données GBAD reposent sur la capacité de créer une architecture de visualisation des données adaptée aux droits de confidentialité et de sécurité des différents types d'utilisateurs.**
Plus précisément, cela repose sur la capacité de catégoriser les utilisateurs et de créer des *vues* système pour cet utilisateur où cet utilisateur ne peut voir que les données pour lesquelles il est autorisé. Nous utilisons le terme « vue » tel que décrit par la théorie des bases de données : *« Les vues sont généralement utilisées pour concentrer, simplifier et personnaliser la perception que chaque utilisateur a de la base de données. Les vues peuvent être utilisées comme mécanismes de sécurité en permettant aux utilisateurs d'accéder aux données via la vue, sans leur accorder l'autorisation d'accéder directement aux tables de base sous-jacentes de la vue. »*[^3] En d'autres termes, permettre aux contributeurs de données de sélectionner le type de données. les utilisateurs qu’ils souhaitent autoriser à accéder à leurs données créent une « vue » pour cet utilisateur de données (soit en masquant, soit en rendant disponibles des ressources de données spécifiques). Cela accorde aux contributeurs de données l'**autorité de contrôler** leurs ressources de données. Bien entendu, ce concept dépend de la capacité à catégoriser les utilisateurs de données.

Les données considérées comme « ouvertes par défaut » seront accessibles publiquement à tout utilisateur accédant au portail de données et pourront être téléchargées directement sans restriction.

![sysView](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/systemView.png)

#### Authentification d'utilisateur

Les utilisateurs souhaitant accéder à des sources de données privées devront se catégoriser à l’aide des identifications d’utilisateurs de données prédéfinies par GBAD. Cela consistera à créer un profil d'utilisateur, à identifier quel type d'utilisateur vous êtes et à saisir une méthode de vérification pour ce faire. La méthode de vérification peut consister en un ID ORCHID s’il s’agit d’un utilisateur académique. Cependant, les mécanismes derrière la vérification des utilisateurs sont encore en cours de stipulation (nous essayons toujours de comprendre comment vérifier l'identité des utilisateurs issus de groupes marginalisés, des parties prenantes privées, etc.). Ces autorisations, tant en termes d'informations sur l'utilisateur que de droits d'accès à un actif de données, seront incluses dans les métadonnées.

Une fois que l'identité d'un utilisateur peut être vérifiée, cet utilisateur se verra accorder une vue des données et une clé API qui lui permettra d'accéder aux données privées via un appel API. De même, selon eux, les données seront disponibles par téléchargement direct. Il convient de noter que même si les principes FAIR sont généralement utilisés dans le contexte des données ouvertes, les données peuvent être FAIRifiées dans différentes vues du système et en supposant que les données ne sont pas ouvertes par défaut. Nos métadonnées seront trouvables, accessibles, interopérables et réutilisables, comme le suggèrent les principes directeurs FAIR, mais au sein de notre système et protégées par différentes vues. Par exemple, les ressources de données ouvertes pourront être trouvées par tout le monde, mais les données qui ne sont disponibles que pour des utilisateurs de données spécifiques ne pourront être trouvées que par ce type d'utilisateur.

De manière générale, chaque ensemble de données négocié par GBADs sera doté d'un identifiant unique qui le lie à ses métadonnées. Lorsqu'un utilisateur accède aux données d'une manière ou d'une autre (par exemple via un appel API ou un téléchargement direct), l'identifiant unique et l'URL du portail de métadonnées seront renvoyés. L'utilisateur peut alors accéder facilement aux métadonnées. De même, les utilisateurs peuvent commencer leur recherche de données avec l'outil de recherche de métadonnées. L'appel d'API de données sera fourni quelque part sur le moteur de recherche de métadonnées (c'est-à-dire que si vous sélectionnez un ensemble de données qui vous intéresse, les métadonnées vous seront fournies).

### Défis liés aux mécanismes de partage de données

Un défi dans la conception de la vue système réside dans les difficultés de licence liées à la **R**utilisabilité d'une ressource de données.
Les préoccupations qui se posent concernent la publication et la communication de résultats inspirés de données privées. Si des données privées sont utilisées dans un modèle ou pour d'autres décisions basées sur les données, comment les données seront-elles citées ou correctement attribuées (ou peut-être vérifiées) sans accorder l'accès aux données ou publier les résultats de modèles qui ont utilisé des données privées comme entrée ? Il est important de comprendre les opinions des parties prenantes des données afin de comprendre leurs souhaits sur la manière dont les données sont utilisées.

Une autre difficulté ou limitation possible est que les utilisateurs ayant des vues spécifiques ignoreront même l’existence de certaines ressources de données.

## 3. Principes de CARE

Les principes de CARE comprennent : l’avantage collectif, l’autorité de contrôle, la responsabilité et l’éthique. Chaque principe concerne l'utilisation et la gouvernance des données appartenant ou liées aux peuples autochtones, à leurs terres, à leurs biens culturels et à leurs pratiques [réf.] et est divisé en catégories à l'annexe B. Les principes de CARE seront pris en compte à chaque étape des données GBAD. stratégie de gouvernance et conception de portails de données.

Nous reconnaissons que nos interprétations des principes de CARE peuvent ne pas refléter complètement les véritables intérêts des peuples et des groupes autochtones, car l'équipe informatique de GBADs n'a actuellement pas d'employés autochtones ni de partenariats avec des peuples autochtones. Lorsque des collaborations officielles avec les peuples et groupes autochtones auront été créées, des stratégies et des conceptions seront élaborées et affinées davantage pour garantir que toutes les données autochtones sont régies, gérées et utilisées pour le bénéfice collectif des peuples autochtones.

## 4. Reproductibilité

### Provenance des données

Comment les informations sur les données seront collectées ou accessibles auprès des donateurs et comment ces informations seront évaluées, stockées et fourniront la base pour générer des informations de provenance sur toutes les données négociées par les GBAD.

Les contributeurs de données devront fournir des informations sur la provenance.

Fournir des informations détaillées sur la provenance aux utilisateurs de données est un élément essentiel de la fourniture de données FAIR. Informations sur la provenance
devrait au minimum couvrir :

1. Qui ou quoi a créé les données ? Cela comprendrait des informations sur la méthodologie utilisée pour créer les données originales
(soit via une citation, soit en fournissant des informations dans les métadonnées). Informations indiquant si les données ont été
transformé d'une manière ou d'une autre (par exemple par un changement de vocabulaire/ontologie, des techniques d'imputation, des estimations, la suppression de lignes, etc.)
devraient également être fournis au moyen de références et de descriptions de programmes ou de techniques utilisés pour réaliser ces transformations.

2. Quand les données ont-elles été produites et quand les dernières modifications ont-elles été apportées aux données ?

3. Contexte de création des données. Pourquoi les données ont-elles été créées ou produites ? Cela fournit des informations aux utilisateurs potentiels de données sur
si l’utilisation des données répond à leurs besoins et est conforme à leurs pratiques, modèles ou autres techniques statistiques potentiels.

Les métriques conçues pour FAIR sont intéressantes pour cette discussion :
[FAIR Metric FM-R1.2](https://github.com/FAIRMetrics/Metrics/blob/master/Distributions/FM_R1.2.pdf)

L'accès aux données est en partie régi par la provenance des données. Par exemple, il est important de comprendre qui a créé et possède les données pour déterminer si les données sont réutilisables (principe FAIR 4). Il peut y avoir des restrictions spécifiques à l'accès aux données dans le cadre d'accords de licence qui pourraient déterminer comment les données peuvent être utilisées et par qui.

---

Les métadonnées doivent reconnaître la provenance et la finalité ainsi que toute limitation ou obligation en matière d'utilisation secondaire, y compris les questions de consentement.

---

Les informations sur la provenance de chaque ensemble de données seront stockées dans des métadonnées, qui seront mises à la disposition et consultables par tous les utilisateurs des GBAD. Une norme de provenance reconnue sera utilisée pour garantir que les informations de provenance sont trouvables et réutilisables.

### Instruction GATHER

La déclaration GATHER, ou les **lignes directrices**pour des **r**eports **précis et **transparents **H**ealth **E**stimates **R**eporting, définit les meilleures pratiques de reporting pour études qui calculent des estimations de santé [^4].

La liste de contrôle de collecte comprend des informations qui devraient être incluses dans les estimations de la santé mondiale :

| Numéro d'article | Élément de la liste de contrôle |
| ----------- | ---------- |
| Objectifs et financement | |
| 1 | Définissez le ou les indicateurs, les populations (y compris l'âge, le sexe et les entités géographiques) et la ou les périodes pour lesquelles des estimations ont été effectuées. |
| 2 | Énumérez les sources de financement des travaux. |
| Entrées de données | |
| Pour toutes les entrées de données provenant de sources multiples qui sont synthétisées dans le cadre de l'étude : | |
| 3 | Décrivez comment les données ont été identifiées et comment elles ont été consultées. |
| 4 | Précisez les critères d’inclusion et d’exclusion. Identifiez toutes les exclusions ponctuelles. |
| 5 | Fournissez des informations sur toutes les sources de données incluses et leurs principales caractéristiques. Pour chaque source de données utilisée, indiquez les informations de référence ou le nom/l'institution du contact, la population représentée, la méthode de collecte de données, l'année ou les années de collecte de données, le sexe et la tranche d'âge, les critères de diagnostic ou la méthode de mesure et la taille de l'échantillon, le cas échéant. |
| 6 | Identifiez et décrivez toutes les catégories de données d'entrée qui présentent des biais potentiellement importants (par exemple, sur la base des caractéristiques énumérées au point 5). |
| Pour les données d'entrée qui contribuent à l'analyse mais qui n'ont pas été synthétisées dans le cadre de l'étude :|
| 7 | Décrivez et indiquez les sources de toute autre entrée de données. |
| Pour toutes les entrées de données : | |
| 8 | Fournissez toutes les entrées de données dans un format de fichier à partir duquel les données peuvent être extraites efficacement (par exemple, une feuille de calcul plutôt qu'un PDF), y compris toutes les métadonnées pertinentes répertoriées au point 5. Pour toute entrée de données qui ne peut pas être partagée pour des raisons éthiques ou juridiques Pour des raisons telles que la propriété de tiers, indiquez le nom d'une personne à contacter ou le nom de l'institution qui détient le droit sur les données. |
| Analyse des données |
| 9 | Fournir un aperçu conceptuel de la méthode d’analyse des données. Un diagramme peut être utile. |
| 10 | Fournissez une description détaillée de toutes les étapes de l’analyse, y compris les formules mathématiques. Cette description doit couvrir, le cas échéant, le nettoyage des données, le prétraitement des données, les ajustements des données et la pondération des sources de données, ainsi que le(s) modèle(s) mathématique(s) ou statistique(s). |
| 11 | Décrivez comment les modèles candidats ont été évalués et comment le(s) modèle(s) final(s) ont été sélectionnés. |
| 12 | Fournir les résultats d’une évaluation des performances du modèle, le cas échéant, ainsi que les résultats de toute analyse de sensibilité pertinente. |
| 13 | Décrire les méthodes de calcul de l'incertitude des estimations. Indiquez quelles sources d’incertitude ont été ou non prises en compte dans l’analyse de l’incertitude. |
| 14 | Indiquez comment le code source analytique ou statistique utilisé pour générer des estimations est accessible. |
| Résultats et discussion |
| 15 | Fournissez des estimations publiées dans un format de fichier à partir duquel les données peuvent être extraites efficacement. |
| 16 | Indiquez une mesure quantitative de l'incertitude des estimations (par exemple, intervalles d'incertitude). |
| 17 | Interpréter les résultats à la lumière des preuves existantes. Si vous mettez à jour un ensemble d’estimations précédent, décrivez les raisons des changements apportés aux estimations. |
| 18 | Discutez des limites des estimations. Incluez une discussion sur toutes les hypothèses de modélisation ou limitations des données qui affectent l’interprétation des estimations. |
Tableau de [^4].


Bien que les GBAD génèrent des estimations de la santé, puisque la santé est celle des animaux d'élevage et non celle des humains (pour laquelle GATHER a été conçu), nous utiliserons GATHER comme point de départ et non comme point final.


<!-- # Principes et gouvernance des données

## Gouvernance des données

**La gouvernance des données désigne la gestion, le stockage, la confidentialité, l'utilisation et la qualité des données et métadonnées utilisées par une organisation.** La gouvernance des données est une tâche multidimensionnelle qui exige que tous les individus d'une organisation se conforment aux normes et aux meilleures pratiques documentées. pour tous les éléments d’utilisation des données.
La conformité à une stratégie de gouvernance des données bien documentée permet une meilleure utilisation des données grâce à la possibilité d'exploiter pleinement les actifs de données.

### Fondements de la gouvernance des données

Si la gouvernance des données concerne les données, elle concerne également les personnes, les processus et la sécurité des données.

**Gouvernance des données et personnes**
Toutes les personnes qui créent, utilisent, diffusent ou gèrent des données font partie et doivent se conformer à la stratégie de gouvernance des données.

**Gouvernance et sécurité des données**

**Gouvernance et processus des données**

Termes de gouvernance des données que vous devez connaître :
- Gestionnaire de données
- Intégration de données
- Provenance des données
- Science des données



#### Plus de lectures sur la gouvernance des données
**Articles de blog**
- https://towardsdatascience.com/what-we-got-wrong-about-data-governance-365555993048 -->

## Les références
[^1] : https://www.nature.com/articles/sdata201618
[^2] : https://acsess.onlinelibrary.wiley.com/doi/full/10.1002/agj2.21017?af=R
[^3] : https://learn.microsoft.com/en-us/sql/relational-databases/views/views?view=sql-server-ver16
[^4] : https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(16)30388-9/fulltext
