---
sidebar_position: 7
---
# Guide du contributeur de données

Le guide du contributeur de données fournit des informations sur la manière dont vous pouvez saisir des données dans notre système à l'aide de nos formulaires de données.

GBADs vise à rendre les données FAIR, et cela commence par s'assurer que nous avons une production de métadonnées rigoureuse et que la provenance des ressources de données est bien documentée. Ainsi, lorsque vous fournissez des données, il est important que nous collections des informations à ce sujet qui permettent la réutilisation et l'interopérabilité des ressources de données qui sont fournies.

## Pourquoi la production de métadonnées est-elle importante ?

La production de métadonnées est importante car elle permet la réutilisation des données. Les métadonnées peuvent être considérées comme le « guide de l'utilisateur » de vos données ; elles doivent vous dire tout ce que vous devez savoir pour déterminer si les données conviennent à votre analyse et comment elles ont été créées. Parfois, nous nous retrouvons dans des situations où nous rencontrons des données et n'avons aucune idée de l'origine des données, des méthodes expérimentales utilisées pour la collecte des données ou des modèles qui ont créé les données. Encore plus troublant, c'est lorsque les unités de mesure ne sont pas fournies ou que les en-têtes de colonne sont ambigus. Les métadonnées sont la solution à ce problème. Ainsi, lorsque vous saisissez vos données dans le système GBADs ou que vous fournissez des informations API à partir d'une autre source, nous vous demanderons de remplir un formulaire qui générera automatiquement des métadonnées afin que vous (et d'autres) puissiez réutiliser les données et créer des informations précises, des modèles et les décisions fondées sur les données. La production de métadonnées granulaires conduit finalement à des données de meilleure qualité.

## Questions sur vos données pour générer des métadonnées

Selon le type de données que vous saisissez, les questions peuvent varier légèrement. Par exemple, si vous saisissez des données à partir d'une sortie de modèle, nous aurons besoin de connaître des informations différentes que si vous saisissez des données à partir d'enquêtes auprès des ménages. Au fur et à mesure que nous en apprendrons davantage sur les sources de données que les GBAD vont négocier et les données que nos utilisateurs utilisent, notre production de métadonnées évoluera.

Nous adaptons les Lignes directrices pour la communication d'estimations précises et transparentes sur la santé (lignes directrices GATHER) pour la production préliminaire de métadonnées.

Voici les questions pour chaque ensemble de données qui entre dans le système GBADs :
Veuillez noter que ces questions ont été adaptées des directives GATHER et, dans certains cas, sont identiques à GATHER.

1. Définir le ou les indicateurs, les populations (entités géographiques, espèces animales) et la ou les périodes pour lesquelles les estimations ont été faites.
2. Énumérez les sources de financement du travail.
3. Décrivez comment les données ont été identifiées et consultées.
4. Spécifiez les critères d'inclusion/exclusion. Identifiez toutes les exclusions ad hoc.
5. Fournissez des informations sur toutes les sources de données incluses et leurs principales caractéristiques. Pour chaque source de données utilisée, indiquez les informations de référence ou le nom du contact/l'institution, la population représentée, la méthode de collecte des données, l'année ou les années de collecte des données, le sexe et la tranche d'âge, les critères de diagnostic ou la méthode de mesure et la taille de l'échantillon, selon le cas.
6. Identifiez et décrivez toutes les catégories de données d'entrée qui ont des biais potentiellement importants (par exemple, sur la base des caractéristiques énumérées à l'élément 5).
7. Décrivez et indiquez les sources de toute autre entrée de données.
8. Fournissez toutes les entrées de données dans un format de fichier à partir duquel les données peuvent être extraites efficacement (par exemple, une feuille de calcul plutôt qu'un appel PDF ou API qui a été utilisé pour extraire les données). Pour toutes les entrées de données qui ne peuvent pas être partagées pour des raisons éthiques ou légales, telles que la propriété d'un tiers, fournissez un nom de contact ou le nom de l'institution qui conserve le droit sur les données.

Si les données ont été organisées à l'aide d'un modèle, d'une analyse de données ou si les données ont été nettoyées, nous vous demandons également de répondre aux questions suivantes :

1. Fournissez une description détaillée de toutes les étapes de l'analyse, y compris les formules mathématiques. Cette description doit couvrir, selon le cas, le nettoyage des données, le prétraitement des données, les ajustements des données et la pondération des sources de données, et le(s) modèle(s) mathématique(s) ou statistique(s). Un référentiel GitHub avec le code approprié est également requis.
2. Fournir les résultats d'une évaluation des performances du modèle, le cas échéant, ainsi que les résultats de toute analyse de sensibilité pertinente.
3. Décrire les méthodes de calcul de l'incertitude des estimations. Indiquez quelles sources d'incertitude ont été, et n'ont pas été, prises en compte dans l'analyse de l'incertitude.

Chacune de ces questions sera présentée dans un formulaire sur le portail de données GBADs, où vous remplissez chacun des champs en fonction des questions.

Nous comprenons que certains contributeurs de données auront déjà produit leurs propres métadonnées. Dans ces cas, nous encourageons les individus à utiliser leurs métadonnées pour remplir les champs fournis.

