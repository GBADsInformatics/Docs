---
sidebar_position: 8
---

# Guide de l'utilisateur des données

Le [portail de données GBADs](http://gbadske.org:8050/dash/page-1/) est un prototype de tableau de bord qui permet aux utilisateurs d'accéder aux ensembles de données de [FAOSTAT](http://www.fao.org/faostat /fr/) et [OIE WAHIS](https://wahis.oie.int/). Le prototype vous permet de sélectionner les données d'intérêt, de les visualiser sur des graphiques à barres, de télécharger les données au format `.csv` et `.json` et de voir l'appel de l'interface de programmation d'application (API).

```{marge}
**Qu'est-ce que `.json` ?**

[JSON](https://en.wikipedia.org/wiki/JSON) signifie JavaScript Object Notation. JSON est un format de fichier qui stocke les données dans un format structuré standard, permettant aux données d'être lisibles à la fois par l'homme et la machine. Les données JSON peuvent être lues dans tous les langages de programmation et peuvent être analysées dans `excel`. Les données JSON sont lisibles et plus faciles à analyser que d'autres formats de fichiers tels que [XML](https://en.wikipedia.org/wiki/XML).

```

````{marge}
```{admonition} Nous voulons avoir de vos nouvelles !
:classe: conseil

Veuillez noter que cette page sera mise à jour au fur et à mesure que nous améliorerons notre portail de données et que nous aurons accès à davantage de sources de données. Nous apprécions vos commentaires sur ce que vous aimez dans le système, ce que vous aimeriez voir et tout ce qui, selon vous, pourrait être plus clair !
```
````

```{avertissement} Objectifs d'apprentissage
* Les lecteurs doivent comprendre ce qu'est une API, comment elle fonctionne et pourquoi GBADs utilise des API
* Les lecteurs doivent comprendre comment utiliser l'API GBADs pour obtenir les données FAOSTAT et OIE WAHIS
* Les lecteurs doivent comprendre comment utiliser l'API GBADs pour lire des données dans leurs programmes `R` et `python`
```

## Premiers pas avec notre API

### Qu'est-ce qu'une API ?

Une interface de programmation d'application (API) est un moyen de machine à machine de demander des données à un serveur, de faire en sorte que le serveur récupère et interprète les données et les renvoie à votre machine. Les API sont partout ; ils permettent aux applications de « parler » entre elles. Par exemple, lorsque vous consultez la météo sur une application météo, l'application utilise une API pour saisir les données et les présenter de manière utilisable et interprétable sur votre téléphone. Les API fournissent les données les plus récentes sans avoir à stocker les données sur votre propre machine.

Pour les besoins en données des GBAD, les API fonctionnent comme ceci :
1. Vous/votre programme demandez des données via l'appel API
2. Le serveur Web recherche dans sa base de données interne les données que vous avez demandées
3. La base de données donne au serveur les données que vous avez demandées
4. Les données vous sont retournées/votre programme

### Votre flux de travail et vos API

Pour expliquer le concept d'une API plus en profondeur, nous discuterons du flux de travail commun pour accéder aux données pour la modélisation et où les API entrent en jeu.

**Méthode d'accumulation manuelle des données**

Si vous n'utilisez pas d'API dans votre flux de travail actuel, l'accès aux données consiste probablement à naviguer vers un portail ou une source de données, à parcourir le catalogue de données ou à rechercher un ensemble de données qui vous intéresse, puis à télécharger les données. Chaque fois que les données sont mises à jour, vous devez répéter le processus, rechercher les données, les télécharger à nouveau, importer le fichier dans votre modèle et réexécuter avec les numéros mis à jour. Bien que ce flux de travail fonctionne, l'utilisation d'API peut éliminer le travail manuel consistant à accéder au site Web et à obtenir les données chaque fois que vous en avez besoin.

Lorsque vous interagissez avec le site Web pour obtenir les données souhaitées, vous interagissez probablement indirectement avec une API, qui fonctionne dans le backend pour obtenir les données que vous avez sélectionnées et les présenter à la page Web. Cependant, vous pouvez utiliser un **appel d'API** pour demander des données au serveur sur lequel résident les données d'intérêt {numref}`APIcall`.

```{marge}
Un **appel API** est la façon dont vous demandez des données à un serveur.
```

**Utiliser des API pour obtenir des données**

Au lieu de télécharger manuellement les données d'un site Web à chaque fois, vous pouvez incorporer des appels d'API dans votre flux de travail pour demander les données les plus récentes à la source. Cela vous permet de réexécuter le code sans avoir à modifier votre code.

```{chiffre} /images/API.png
:nom : appel API

Décomposition simple du fonctionnement d'une API.
```


<!--Si vous n'avez jamais utilisé d'interface de programmation d'applications (API), ne paniquez pas ! Vous êtes au bon endroit. Avant d'explorer comment utiliser notre API, nous expliquerons pourquoi nous pensons que les gens devraient adopter l'utilisation de l'API et ce qu'est même une API.

Vous avez peut-être déjà entendu parler d'une API et vous vous êtes demandé qu'est-ce qu'une API ? Souvent, lorsque "API" est recherché sur Google, vous êtes submergé de jargon technique et de mots à la mode - ou d'informations adaptées aux ingénieurs logiciels et aux départements techniques. Cependant, les API sont extrêmement précieuses pour quiconque se rend activement sur un site Web et télécharge des données à partir de celui-ci. L'utilisation d'une API vous permet de faire en sorte que votre ordinateur communique avec un serveur Web et demande les données, sans aller sur ce site Web et télécharger ces données vous-même. Par exemple, en ce moment, vous pouvez vous diriger vers le portail de données de la Banque mondiale en naviguant sur le site Web, en parcourant le catalogue de données ou en recherchant l'ensemble de données qui vous intéresse, puis en téléchargeant les données. Certes, cette méthode manuelle est un moyen valable d'interagir avec un serveur Web et vous permet d'obtenir les données que vous souhaitez. Mais, vous n'avez pas besoin d'interagir avec un site Web de cette manière manuelle pour obtenir les données souhaitées. Les API vous permettent d'appeler le site Web et de demander les données que vous souhaitez sans avoir à naviguer sur un site Web (ou même à ouvrir votre navigateur Web). Et, comme vous l'apprendrez, vous n'avez pas besoin d'avoir une connaissance approfondie de la programmation pour utiliser une API ! --->

<!--Les appels d'API sont effectués à l'aide de l'URI (Unique Resource Identifier) ​​de l'API. En termes simples, un URI est quelque chose qui distingue distinctement l'API des autres API. Vous pouvez considérer un URI comme tout ce qui identifie quelque chose parmi toutes les autres choses. Par exemple, votre numéro d'assurance sociale est votre URI qui permet au gouvernement de vous identifier parmi les autres citoyens. De même, vous remarquerez peut-être que personne d'autre n'a la même adresse e-mail que vous. Une adresse email est aussi une URI ! -->

Une fois que vous avez cet "appel API", vous pouvez simplement entrer dans le programme de votre choix et automatiser vos flux de travail et avoir accès aux données sans avoir à rechercher à chaque fois dans les catalogues de données. Les API sont construites sur des protocoles HTTP, offrant un autre avantage : vous pouvez utiliser des API avec pratiquement n'importe quel langage de programmation, y compris R et Python, qui sont les plus populaires parmi nos utilisateurs actuels. Cela signifie qu'au lieu de charger à chaque fois des fichiers de données dans votre programme R ou python, vous pouvez simplement accéder à l'API directement dans votre programme. Un avantage supplémentaire est que cela vous permet de réexécuter vos programmes sans avoir à télécharger les données de vos sources chaque fois que cette source est mise à jour ou modifiée.

Certaines sources de données utilisées par GBAD, telles que FAOSTAT et la Banque mondiale, ont des API qui peuvent être utilisées pour obtenir des données. Cependant, GBADs gère la gestion des API en développant une API qui peut demander des données à d'autres API ({numref}`GBADsAPI`).

```{chiffre} /images/GBADsAPI.png
:nom : GBADsAPI

Vue d'ensemble de l'infrastructure de l'API GBADs. L'API GBADs peut communiquer avec diverses autres API ouvertes pour accéder aux données d'autres magasins de données, tels que FAOSTAT. L'API GBADs permet également de demander des données à partir du magasin de données GBADs. Les utilisateurs peuvent accéder aux données de diverses sources via un appel API à l'API GBADs.
```

````{marge}
```{avertissement} Données d'accès spécial
:classe: conseil

_Veuillez noter que certaines données ne sont pas accessibles au public et ne sont donc pas disponibles pour tous les utilisateurs_. Voir [le chapitre sur les licences de données, la confidentialité et la sécurité](http://www.gbadske.org/Documentation/DataGovernanceHandbook/dataOwnership.html) pour plus d'informations sur la façon dont les GBAD traitent les données confidentielles et sensibles.
```
````


### Utilisation de l'API GBADs

Vous pouvez consulter notre documentation API plus complète [FIXME ici]. Cependant, cette section vous montrera les bases de l'utilisation de notre API pour récupérer certaines données.

Nous fournirons deux exemples d'appels d'API à l'API GBADs. Un en Python et un en R. Dans les deux exemples, nous utiliserons le même appel d'API qui vous donnera le prix des stocks de poulets en Éthiopie de 2005 et 2018 de la FAO. Notre appel API pour ce type de données est : [http://35.183.203.15:8000/gbads/LiveAnimals/?year_start=2005&year_end=2018&element=Stocks&item=Chickens](http://35.183.203.15:8000/gbads/LiveAnimals /?year_start=2005&year_end=2018&element=Stocks&item=Poulets)

```{marge}
Vous remarquerez que si vous mettez l'appel API directement dans votre navigateur, vous serez amené à une page avec les données au format JSON. Vous remarquerez également que l'appel API spécifie la catégorie (LiveAnimals), l'année de début et de fin, l'élément, qui sont les prix des actions et l'article, Chickens. Actuellement, notre portail ne prend en charge que la récupération des données éthiopiennes, car c'est l'objet de notre étude pilote.
```

```{remarque}
Nous développons toujours notre API de métadonnées.
```

Dans notre cas d'utilisation Python, vous aurez besoin de télécharger trois bibliothèques : `json`, `requests` et `pandas`.

```{code-cellule} ipython3
importer json
demandes d'importation
importer des pandas en tant que pd
importer seaborn en tant que sns
importer matplotlib.pyplot en tant que plt

# Créer un appel API
apiCall = "http://15.223.72.239:8000/gbads/LiveAnimals/?year_start=2005&year_end=2018&element=Stocks&item=Poulets"

réponse = demandes.get(apiCall).json()

# Imprimez la réponse pour que nous puissions voir ce que nous avons obtenu.
imprimer (réponse)
```

Dans certains cas, vous souhaiterez peut-être convertir votre réponse en une trame de données `pandas`, visualiser le résultat ou enregistrer le résultat dans un fichier csv. Ci-dessous, nous vous montrerons comment vous pouvez accomplir chacune des actions suivantes :

```{code-cellule} ipython3
# Créer une trame de données pandas à partir de la réponse api
réponse = pd.DataFrame (réponse)

# Quel est notre résultat ? Imprimez les 10 premières lignes du dataframe.
impression(response.head(10))
```

Avant d'aller de l'avant et de représenter graphiquement ces données, nous pouvons utiliser `pandas` pour obtenir un aperçu général des données que nous avons obtenues de l'appel api.

```{code-cellule} ipython3
# Quelles colonnes avons-nous ?
print(response.columns)
```

On peut aussi voir des résumés des colonnes :

```{code-cellule} ipython3
réponse.describe()
```

```{code-cellule} ipython3
# Temps de graphique !
response.plot.scatter(x='Année',
y='Valeur',
c='Bleu Foncé')
```
Et pour le plaisir, visualisons une relation linéaire grâce à la fonction de régression linéaire de `seaborn`. La fonction fournit une droite de régression sur un graphique avec un intervalle de confiance de 95 %.

```{code-cellule} ipython3

ax = sns.regplot(x="Année", y="Valeur", données=réponse)

# Définir les étiquettes des axes
ax.set(xlabel='Année', ylabel='Nombre d'animaux vivants (1000 têtes)')

# Ajouter un titre
plt.title("Nombre de poulets vivants en Éthiopie")

# Afficher le résultat
plt.show(hache)

```

Comme vous pouvez le voir, avec très peu de travail, nous avons rassemblé les données de l'API, converties en une base de données "pandas" et tracé une régression.

Nous pourrions également tracer les données et visualiser quels points correspondent aux données officielles et lesquels ont été imputés :

```{code-cellule} python3
# Différentes couleurs pour les descriptions des drapeaux
sns.scatterplot(x="Year", y="Value", hue="Flag Description", data=response)

# Définir les étiquettes des axes
ax.set(xlabel='Année', ylabel='Nombre d'animaux vivants (1000 têtes)')

# Ajouter un titre
plt.title("Nombre de poulets vivants en Éthiopie")

# Afficher le résultat
plt.show(hache)

```


Si vous souhaitez simplement collecter les données de l'API et les enregistrer au format csv, vous pouvez utiliser le code ci-dessous pour le faire.

```
importer json
demandes d'importation
importer des pandas en tant que pd

# Créer un appel API
apiCall = "http://15.223.72.239:8000/gbads/LiveAnimals/?year_start=2005&year_end=2018&element=Stocks&item=Poulets"

réponse = demandes.get(apiCall).json()

# Encodage/décodage de la trame de données pour l'obtenir au format csv
réponse = réponse.to_json(orient='split')
réponse = pd.read_json(response,orient='split')

# Nom du fichier de sortie. Remplacez-le par le chemin d'accès à l'endroit où vous souhaitez stocker le fichier et le nom du fichier.
outfile = 'chemin/vers/outfile/outfilename.csv'

# Enregistrer dans un fichier externe à l'aide de pandas
response.to_csv(outfile, index=False)
```

Voici notre implémentation R :

Vous devrez vous assurer que les packages R `httr` et `jsonlite` sont téléchargés.

```
# Décommentez la ligne ci-dessous si vous n'avez pas déjà les bibliothèques
# install.packages(c("httr", "jsonlite"))

# Charger dans les bibliothèques
bibliothèque (httr)
bibliothèque (jsonlite)

# Créer un appel API
apiCall = "http://15.223.72.239:8000/gbads/LiveAnimals/?year_start=2005&year_end=2018&element=Stocks&item=Poulets"

# Envoyer une demande
réponse = GET (appel API)

# Voir ce que la réponse nous donne
réponse

# Créer une dataframe à partir de la réponse de l'API
data = fromJSON(rawToChar(response$content))

# Vérifiez que cela a fonctionné
classe (données)

# Voir à quoi ressemblent les 5 premières lignes des données
tête (données)
```

## Création d'un profil utilisateur

Le guide ci-dessus vous permet d'accéder à l'API, qui permet d'accéder aux données ouvertes. À l'avenir, nous prévoyons des sources de données privées auxquelles vous n'aurez accès que si vous en avez reçu les autorisations. Notre système prendra en charge la possibilité de créer une connexion utilisateur vérifiée, qui vous donnera accès aux sources privées auxquelles vous avez accès via un portail personnalisé et une clé API.

