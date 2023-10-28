---
sidebar_position: 10
---
# Guide du contributeur de données

Le guide du contributeur de données fournit des informations sur la manière dont vous pouvez saisir des données dans notre système à l'aide de nos formulaires de données.

GBADs vise à rendre les données ÉQUITABLES, et cela commence par garantir que nous disposons d'une production de métadonnées rigoureuse et que la provenance des ressources de données est bien documentée. Ainsi, lorsque vous fournissez des données, il est important que nous collections des informations à leur sujet qui permettent la réutilisation et l'interopérabilité des ressources de données fournies.

## Pourquoi la production de métadonnées est importante

La production de métadonnées est importante car elle permet la réutilisation des données. Les métadonnées peuvent être considérées comme un « guide d'utilisation » de vos données : elles doivent vous indiquer tout ce que vous devez savoir pour déterminer si les données conviennent à votre analyse et comment elles ont été créées. Parfois, nous nous retrouvons dans des situations où nous rencontrons certaines données et n’avons aucune idée de leur origine, des méthodes expérimentales utilisées pour la collecte des données ou des modèles qui ont créé les données. Ce qui est encore plus troublant, c'est lorsque les unités de mesure ne sont pas fournies ou que les en-têtes de colonnes sont ambigus. Les métadonnées sont la solution à ce problème. Ainsi, lorsque vous saisissez vos données dans le système GBADs ou fournissez des informations API provenant d'une autre source, nous vous demanderons de remplir un formulaire qui générera automatiquement des métadonnées afin que vous (et d'autres) puissiez réutiliser les données et créer des informations et des modèles précis. et des décisions basées sur les données. La production de métadonnées granulaires conduit finalement à des données de meilleure qualité.

## Questions sur vos données pour générer des métadonnées

Selon le type de données que vous saisissez, les questions peuvent varier légèrement. Par exemple, si vous saisissez des données à partir d’un résultat de modèle, nous aurons besoin de connaître des informations différentes de celles que vous saisissez si vous saisissez des données provenant d’enquêtes auprès des ménages. À mesure que nous en apprendrons davantage sur les sources de données que les GBADs négocient et sur les données utilisées par nos utilisateurs, notre production de métadonnées évoluera.

Nous adaptons les lignes directrices pour des rapports précis et transparents sur les estimations de la santé (lignes directrices GATHER) pour la production préliminaire de métadonnées.

Voici les questions pour chaque ensemble de données entrant dans le système GBADs :
Veuillez noter que ces questions ont été adaptées des lignes directrices de GATHER et, dans certains cas, sont identiques à GATHER.

1. Définir le ou les indicateurs, les populations (entités géographiques, espèces animales) et la ou les périodes pour lesquelles des estimations ont été effectuées.
2. Énumérez les sources de financement du travail.
3. Décrivez comment les données ont été identifiées et consultées.
4. Précisez les critères d'inclusion/exclusion. Identifiez toutes les exclusions ponctuelles.
5. Fournissez des informations sur toutes les sources de données incluses et leurs principales caractéristiques. Pour chaque source de données utilisée, indiquez les informations de référence ou le nom/l'institution du contact, la population représentée, la méthode de collecte de données, l'année ou les années de collecte de données, le sexe et la tranche d'âge, les critères de diagnostic ou la méthode de mesure et la taille de l'échantillon, le cas échéant.
6. Identifiez et décrivez toutes les catégories de données d'entrée qui présentent des biais potentiellement importants (par exemple, sur la base des caractéristiques énumérées au point 5).
7. Décrivez et indiquez les sources de toute autre entrée de données.
8. Fournissez toutes les entrées de données dans un format de fichier à partir duquel les données peuvent être extraites efficacement (par exemple, une feuille de calcul plutôt qu'un PDF ou un appel API utilisé pour extraire les données). Pour toute saisie de données qui ne peut pas être partagée pour des raisons éthiques ou juridiques, telles que la propriété d'un tiers, indiquez le nom d'une personne à contacter ou le nom de l'institution qui conserve le droit sur les données.

Si les données ont été conservées à l'aide d'un modèle ou d'une analyse de données ou si les données ont été nettoyées, nous vous demandons également de répondre aux questions suivantes :

1. Fournir une description détaillée de toutes les étapes de l’analyse, y compris les formules mathématiques. Cette description doit couvrir, le cas échéant, le nettoyage des données, le prétraitement des données, les ajustements des données et la pondération des sources de données, ainsi que le(s) modèle(s) mathématique(s) ou statistique(s). Un dépôt GitHub avec le code approprié est également requis.
2. Fournir les résultats d'une évaluation des performances du modèle, le cas échéant, ainsi que les résultats de toute analyse de sensibilité pertinente.
3. Décrire les méthodes de calcul de l'incertitude des estimations. Indiquez quelles sources d’incertitude ont été ou non prises en compte dans l’analyse de l’incertitude.

Chacune de ces questions sera présentée sous un formulaire sur le portail de données GBADs, où vous remplirez chacun des champs en fonction des questions.

Nous comprenons que certains contributeurs de données auront déjà produit leurs propres métadonnées. Dans ces cas, nous encourageons les individus à utiliser leurs métadonnées pour remplir les champs fournis.

