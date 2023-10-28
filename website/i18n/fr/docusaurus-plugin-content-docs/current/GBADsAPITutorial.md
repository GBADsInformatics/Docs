---
title: "Accéder à l'API GBADs dans R"
author: "Kassy Raymond"
date: "19/09/2022"
output: html_document
---

<!-- ```{r setup, include=FALSE}
knitr::opts_chunk$set(echo = VRAI)
```

```{r, include=FALSE}
options(largeur = 60)
locale({
hook_output <- knitr::knit_hooks$get('output')
knitr::knit_hooks$set(output = fonction(x, options) {
if (!is.null(options$max.height)) options$attr.output <- c(
options$attr.output,
sprintf('style="hauteur-max : %s;"', options$max.hauteur)

hook_output(x, options)
})
})
``` -->

## Documentation

*Pour de la documentation sur l'API et les commandes utiles, vous pouvez visiter http://gbadske.org/api/dataportal/*

**Reportez-vous à la présentation de Deb pour plus de théorie sur les API et pourquoi vous devriez les utiliser.**

### Quelques concepts importants :

Une API signifie Application Programming Interface. Une API est une interface entre deux programmes qui vous permet de demander des données à un serveur et de les renvoyer à votre programme. L'API GBADs est une API basée sur le Web créée avec le protocole HTTP (HyperText Transfer Protocol) de W3 qui permet aux serveurs Web d'échanger des données.

Lorsque vous effectuez un appel d'API, vous créez une *requête* (nous l'appellerons une commande) composée d'une URL, d'un chemin d'accès au point de terminaison et d'une requête :

**URL de base** (alias URL de demande) : il s'agit de l'URL dont vous avez besoin pour accéder à l'API.

Par exemple : `http://gbadske.org/api/GBADsTables/` et `http://gbadske.org/api/GBADsLivestockPopulation/` sont des URL de base pour l'API GBADs.

**Point de terminaison** : c'est là que se trouvent les données souhaitées.

**Requête** : indiqué par un « ? », c'est ainsi que vous demandez les données spécifiques que vous souhaitez.

**Exemple**:

Cette commande fournit toutes les tables disponibles dans l'API GBADs : http://gbadske.org/api/GBADsTables/public?format=html

Décomposé en utilisant la terminologie ci-dessus :

* URL de base : http://gbadske.org/api/GBADsTables/
* Point final : public
* Requête : ?format=html

Une fois que vous avez votre URL, vous pouvez utiliser la méthode HTTP « GET » pour obtenir des données. Il existe d'autres méthodes HTTP, mais `GET` est la seule que vous aurez besoin de connaître pour obtenir des données de l'API GBADs.

## Packages requis

Vous pouvez utiliser le package `httr` pour `OBTENIR` les données de l'API. Comme nous devons parfois aussi gérer les chaînes, nous chargeons également le package `stringr` (c'est une préférence personnelle, vous pouvez également gérer les chaînes en base R mais j'aime stringr, et je ne l'utilise que dans la section fonctions).


```{r}
bibliothèque('httr')
bibliothèque('stringr')
```

## Utiliser la bibliothèque `httr` pour obtenir des données

Dans la section suivante, nous proposons des fonctions qui facilitent la création de l'URL de contenu pour la demande en automatisant la création de l'URL et la gestion de la réponse. Cette section fournit un aperçu de la façon de comprendre la bibliothèque `httr` dans R.

### Les bases de `httr` et obtenir une liste des tables disponibles

L’appel du point de terminaison GBADsTables/public fournit directement une liste de tables. Lorsque nous obtenons cette liste, nous pouvons savoir quelles tables sont disponibles et à quelles données nous pouvons accéder.

Tout d’abord, nous configurons l’URL du contenu. Notez que nous demandons que le format soit en « texte » afin que nous puissions gérer la réponse.

```{r}
url <- "http://gbadske.org/api/GBADsTables/public?format=text"
```

Ensuite, nous pouvons utiliser la méthode `GET` de `httr` en utilisant la fonction `GET()`. Nous appelons la variable « res » pour signifier « réponse ».
```{r}
res <- GET(url = url)
```

Voyons maintenant ce que nous obtenons :
```{r}
noms(res)
```
Les choses importantes :

* Le `status_code` nous fournit un code qui nous indique si notre requête à l'API a réussi.
Si nous obtenions un statut de 204, cela indiquerait qu'aucun contenu n'a été renvoyé. Pour une liste complète des codes de réponse, visitez : https://restfulapi.net/http-status-codes/

* `content` correspond aux données de l'API en code binaire brut

Regardons le `status_code` :
```{r}
res$statut_code
```
Un `status_code` de 200 signifie que la requête a réussi.

Maintenant le contenu :
```{r, max.height='100px'}
res$contenu
```
Le résultat est utile pour une machine, mais nous devons le traduire en humain, s'il vous plaît. La fonction `content` de la bibliothèque `httr` rend cela assez simple. Pour plus d'informations sur la fonction `content`, utilisez `?content()` pour récupérer les documents.
```{r}
tableaux <- contenu(res)
les tables
```
C'est bien, mais nous devrions probablement analyser cela dans une liste.
```{r, max.height='100px'}
as.list(strsplit(tables, ","))
```
Enfin!
**Notre résultat est une liste de tables disponibles à partir de l'API GBADs. Chaque fois qu'une nouvelle table est ajoutée ou que quelque chose est modifié, vous obtiendrez la liste de tables la plus à jour en utilisant ces 4 lignes de code que nous venons de passer en revue :**
```{r, eval = FAUX}
url <- "http://gbadske.org/api/GBADsTables/public?format=text"
res <- GET(url = url)
tableaux <- contenu(res)
as.list(strsplit(tables, ","))
```
### Obtenir des informations sur une table

Maintenant que nous avons une liste de tables, nous pouvons voir quelles colonnes sont disponibles dans chaque table. Disons que nous voulons des données du « Livestock_countries_population_unfccc » ou les chiffres de la population de la CCNUCC.

Tout d’abord, construisez l’URL. Nous pouvons accéder au contenu du tableau en utilisant :

* `http://gbadske.org/api/GBADsTable/public?`

et en spécifiant le nom et le format de la table :

* table_name=livestock_countries_population_unfccc&format=text

On se retrouve donc avec ceci :
```{r}
url_unfccc <- 'http://gbadske.org/api/GBADsTable/public?table_name=livestock_countries_population_unfccc&format=text'
```

Ensuite, nous utilisons `GET` et vérifions le `status_code` :
```{r}
res_unfccc <- GET(url = url_unfccc)
res_unfccc$status_code
```
Nous pouvons maintenant gérer le format de réponse :
```{r}
contenu (res_unfccc)
```
Ici, nous avons le pays, l'espèce, l'année, la population et le drapeau comme colonnes disponibles.

**Prochainement** : fonctionnalité pour les métadonnées/description dans l'API.

Maintenant que nous avons les champs, nous pouvons continuer et créer une requête pour demander les données réelles.

### Obtenir la table de données

**RAPPEL** TROUVEZ DES EXEMPLES DE COMMANDES SUR http://gbadske.org/api/dataportal

Tout d’abord, construisez l’URL :

*url = http://gbadske.org/api/GBADsPublicQuery/
* nom_table = bétail_pays_population_unfccc

La nouvelle partie concerne les champs et les parties de requête de l'URL :

* champs = pays, espèce, année, population
* requête = Dans ce cas, nous voulons toutes les données, nous pouvons donc simplement laisser la requête vide.

Ensuite, nous précisons le format :

*format = texte

En résumé, voici notre URL :

```{r}
url_unfccc_data <- 'http://gbadske.org/api/GBADsPublicQuery/livestock_countries_population_unfccc?fields=country,species,year,population&query=&format=text'
```

Maintenant, nous pouvons utiliser `GET` pour obtenir les données
```{r}
res_unfccc_data <- GET(url_unfccc_data)
unfccc_data <- contenu (res_unfccc_data)
```
```{r}
unfccc_data
```
Et voilà !

POUR RÉCAPITULER - ce n'était que 3 lignes de code :
```{r, eval = FAUX}
url_unfccc_data <- 'http://gbadske.org/api/GBADsPublicQuery/livestock_countries_population_unfccc?fields=country,species,year,population&query=&format=text'
res_unfccc_data <- GET(url_unfccc_data)
unfccc_data <- contenu (res_unfccc_data)
```

Vous pouvez maintenant visualiser les données ou en faire ce que vous voulez :
```{r}
bibliothèque (ggplot2)
bibliothèque (tidyverse)

unfccc_data %>%
filtre (espèce == 'Buffaloes') %>%
filtre (pays == 'Australie') %>%
ggplot(., aes(x = année, y = population)) +
geom_line() +
point_géo() +
ggtitle('Buffaloes en Australie', subtitle = sprintf('Données de : %s', str_wrap(url_unfccc_data))) +
thème(plot.subtitle=element_text(size=10, face="italic", color="black"))
```



Maintenant, la partie la plus délicate de tout cela était. créer les URL. Découvrez les fonctions ci-dessous pour vous faciliter la vie lors de la création de ces URL

## Utiliser des fonctions pour obtenir des données

Pour faciliter un peu l'obtention des données, nous avons créé certaines fonctions pour faciliter un peu le codage.

Pour obtenir une liste de toutes les tables de l'API, vous pouvez utiliser la fonction `get_tables`.

```{r}
get_tables <- function() {

# L'URL du contenu est l'endroit où se trouvent les tables
content_url <- "http://gbadske.org/api/GBADsTables/public?format=text"

# GET depuis le module httr nous permet de demander des données à l'API
res <- GET(content_url)

# Obtenez le contenu en passant la variable res à la commande content.
tables <- content(res, "text")

# Divisez le contenu dans un format plus utilisable
tables <- as.list(strsplit(tables, ","))

retour(tableaux)

```

En utilisant la fonction, vous pouvez simplement appeler `get_tables()` pour obtenir une liste des tables disponibles :
```{r, max.height='100px'}
get_tables()
```

Utilisez la fonction `get_table_fields` pour obtenir des informations sur une table qui vous intéresse. La fonction `get_table_fields` fonctionne comme ceci :

* Transmettez à la fonction le nom de la table sur laquelle vous souhaitez des informations
* Construit l'URL du contenu en utilisant le nom de la table
* Demande les données en utilisant GET à partir du package httr
* Vérifie que la demande était valide en utilisant le code d'état de la réponse
* Si le code d'état est valide, analysez le contenu reçu de la réponse et renvoyez les données
* Si le code d'état n'est pas valide, imprimez un message

```{r}
get_table_fields <- function(table_name) {
# Passez à la fonction le nom de la table sur laquelle vous souhaitez des informations

# Construire l'URL
content_url = coller('http://gbadske.org/api/GBADsTable/public?table_name=',table_name,'&format=text', sep = '')

# Demander les données
res = GET (content_url)

si (res$status_code == 200) {
res_content = contenu(res, 'texte')
res_list = as.list(strsplit(res_content, ","))

# Renvoie la réponse
retour (res_list)


autre {
print('Le statut de la réponse n'était pas 200. Impossible de traiter la demande.')



```

Essayer la fonction :
```{r}
get_table_fields('livestock_countries_population_unfccc')
```
Dans le tableau animal_countries_population_unfccc, il y a 5 colonnes : pays, espèce, année, population, drapeau.

À l'aide de la fonction get_data, vous pouvez spécifier le nom de la table, les champs et la requête pour obtenir les données de l'API :

* Passez la fonction le nom_table
* Facultatif : transmettre les champs de fonction et la requête
* La fonction effectue une série de vérifications pour voir quels paramètres ont été transmis
* L'URL du contenu est construite en fonction de ce qui est transmis
* Une demande de données est faite en fonction de l'url du contenu
* La réponse à la demande est renvoyée
```{r, max.height='100px'}
get_data <- function (nom_table, champs, requête) {

# Vérifiez si un nom de table a été fourni
if (c(missing(table_name))) {
stop('Fournissez un nom de table.')


base_url = 'http://gbadske.org/api/GBADsPublicQuery/'

# Créez un appel API dans les situations suivantes
# si aucune requête ou aucun champ n'a été fourni
if ((manquant(requête) & manquant(champs))) {
content_url = coller(base_url,table_name,'?fields=&query=&format=text', sep='')

# si des champs étaient fournis mais aucune requête
sinon if (manquant (requête)) {
content_url = coller (base_url, table_name,'?fields=',fields,'&query=&format=text', sep='')

# si une requête a été fournie mais qu'aucun champ n'a été spécifié
sinon si (manquant (champs)) {
stop('Vous ne pouvez pas fournir une requête sans champs spécifiés')

# si la requête et les champs étaient fournis
autre {
content_url = coller (base_url, table_name,'?fields=',fields,'&query=',query,'&format=text', sep='')


# Demander les données
imprimer (content_url)
res = GET (content_url)

si (res$status_code == 200) {
# Renvoie la réponse
retour(res)


autre {
print('Le statut de la réponse n'était pas 200. Impossible de traiter la demande.')


```

Test de la fonction pour obtenir les données d'élevage_countries_population_unfccc
```{r}
res_unfccc_all <- get_data('livestock_countries_population_unfccc', field='pays,espèce,année,population')
tab_unfccc_all <- content(res_unfccc_all)
```
Voir le tableau :
```{r}
tab_unfccc_all
```

Essayez une requête plus complexe :

* nom_table = bétail_pays_population_unfccc
* champs = pays, espèce, année, population
* requête de données en 2008

```{r}
res_unfccc_2008 <- get_data('livestock_countries_population_unfccc',fields = 'pays,espèce,année,population', query = 'année=2008')
unfccc_2008_tab <- contenu(res_unfccc_2008)
```
Voir le tableau :
```{r}
unfccc_2008_tab
```

Essayez une autre requête :

* Obtenez des données pour le Canada en 2008

Construire cette chaîne de requête est un peu plus délicat.

* Canada est une chaîne, elle doit donc être entourée de guillemets simples.
* En R, lors du passage d'une chaîne entre guillemets à une fonction, nous devons utiliser le caractère d'échappement '\\'. Par exemple, country=\\'Canada\\'
* Nous recherchons à la fois une année et un pays, nous pouvons utiliser AND dans la requête pour demander les deux. Avant et après AND, utilisez « %20 », qui est hexadémial pour un espace, pour désigner l'espace dans l'URL. Par exemple, country=\\'Canada\\'%20AND%20year=2008

En mettant cela ensemble, nous obtenons `query = 'country=\'Canada\'%20AND%20year=2008`

Vous pouvez maintenant appeler la fonction comme d'habitude, en utilisant la chaîne de requête que nous venons de créer :
```{r}
# Appeler la fonction
res_unfccc <- get_data('livestock_countries_population_unfccc', field = 'pays,espèce,année,population', query = 'country=\'Canada\'%20AND%20year=2008')
onglet <- content(res_unfccc)
```

Voir le résultat
```{r}
languette
```

Essayez une autre requête, en spécifiant une espèce d'intérêt

* Obtenez des données pour le Canada sur les moutons en 2008.

En utilisant les mêmes règles que précédemment, nous pouvons construire la chaîne de requête

`query = 'country=\'Canada\'%20AND%20 année=2008%20AND%20 espèce=\'Mouton\'`

```{r}
# Appeler la fonction
res_unfccc_sheep <- get_data('livestock_countries_population_unfccc', field = 'pays,espèce,année,population', query = 'country=\'Canada\'%20AND%20year=2008%20AND%20species=\'Sheep\'')
onglet <- content(res_unfccc_sheep)
```
Voir le résultat :
```{r}
languette
```

Avec `get_data` créant l'URL du contenu, envoyer une requête et obtenir une réponse est beaucoup plus facile ! Amusez-vous à jouer avec l'API !

### Les références
Le format et les explications de ce tutoriel ont été inspirés par https://www.r-bloggers.com/2015/11/accessing-apis-from-r-and-a-little-r-programming/

### Tutoriel construit avec :
```{r}
sessionInfo()
```



