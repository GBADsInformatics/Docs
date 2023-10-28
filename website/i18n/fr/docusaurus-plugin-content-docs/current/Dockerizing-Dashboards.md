---
id: Dockerizing-Dashboards

title: Guide de dockerisation des tableaux de bord
author: "William Fitzjohn"
sidebar_position: 12
---

Auteur : [@WilliamFitzjohn](https://github.com/WilliamFitzjohn) - Contactez-moi pour obtenir de l'aide.<br/>
Il s'agit d'un guide décrivant les étapes suivies pour créer une image Docker à partir d'un tableau de bord plotly exécuté via Flask.

## Table des matières
1. [Prérequis](#prérequis)
1. [Préparation du code](#code-preparation)
1. [Le Dockerfile](#the-dockerfile)
1. [Fichiers confidentiels](#fichiers-confidentiels)
1. [Construire l'image](#building-the-image)
1. [Exécuter le tableau de bord](#running-the-dashboard)
1. [Publication du tableau de bord](#publishing-the-dashboard)

## Conditions préalables
Ce guide suppose que vous disposez déjà d'un tableau de bord de tracé.<br/>
Vous devriez également avoir Docker installé sur votre système.

## Préparation du code
1. Assurez-vous que votre «requirements.txt» contient tous les modules Python requis pour exécuter votre tableau de bord.
2. Lors du développement, vous avez peut-être utilisé quelque chose comme « python wsgi.py » ou « python Dashboard.py » pour exécuter votre tableau de bord. C'est correct pour l'exécuter temporairement, mais en production, nous souhaitons utiliser un serveur Flask de production pour exécuter l'application. Nous utiliserons Waitress pour notre serveur. Cela nécessite que vous ajoutiez une fonction au fichier qui démarre votre tableau de bord (wsgi.py ou example_dashboard.py) qui renvoie votre application Dash :
- Si vous créez une application **Dash** normale, cela devrait fonctionner :
```python
def returnApp() :
retourner l'application
```
- Si vous créez une application **DashProxy**, cela devrait fonctionner :
```python
def returnApp() :
retourner app.server
```

## Le fichier Docker
ajoutez un nouveau fichier au répertoire de votre projet nommé « Dockerfile ». Ce fichier sera utilisé par Docker pour créer votre image Docker. Ce fichier doit avoir quelques fonctionnalités clés :
1. L'image de base : Pour faciliter cela, nous utiliserons une image avec python pré-installé.
2. Les prérequis python : Nous installons tous les modules python dont votre tableau de bord a besoin.
3. Les fichiers du tableau de bord : nous copions ensuite les fichiers sur l'image Docker.
4. L'appel de l'application : nous indiquons à Docker comment démarrer le tableau de bord à l'intérieur du conteneur.

Voici un exemple de ce à quoi devrait ressembler le Dockerfile :
```Fichier Docker
# Image de base - j'en ai essayé quelques autres, celle-ci était la plus simple et la plus résistante
# vous pouvez changer la version de Python ici si vous rencontrez des problèmes. Tu peux trouver
# plus d'images de base en ligne.
DEPUIS python:3.10.0-slim-buster

# Créez un répertoire de base dans l'image à partir duquel travailler
TRAVAIL /app/dash

## Pour certains modules python (psycopg2 et autres), vous devez préinstaller les programmes
## via apt. Faites-le ici avec une commande comme :
# EXÉCUTER la mise à jour appropriée && \
# apt install -y INSÉRER LES PAQUETS ICI && \
# rm -rf /var/lib/apt/lists/*

# Copiez le fichier d'exigences dans l'image, puis installez les exigences Python
COPIER exigences.txt .
EXÉCUTER pip install -r exigences.txt

# Copiez le reste des fichiers du tableau de bord dans l'image
COPIE . /app/tiret

# Spécification de la commande du tableau de bord via la serveuse
# Gardez 80 identiques : il est juste exposé à l'intérieur du conteneur Docker. Plus tard
# vous pouvez mapper ceci sur n'importe quel port en dehors du conteneur. Remplacez "wsgi" par
# nom du fichier que vous avez modifié précédemment dans #code-preparation.2
CMD ["waitress-serve","--host=0.0.0.0","--port=80","--call","wsgi:returnApp"]
```

## Fichiers confidentiels
Certains fichiers tels que les fichiers « .env » ne doivent pas être publiés sur GitHub, vous ajoutez donc un .gitignore à votre dépôt. Le même concept s'applique à la publication d'images Docker à l'aide d'un .dockerignore.

Ajoutez un fichier « .dockerignore » à votre dépôt qui inclut le nom des fichiers sensibles que vous ne souhaitez pas inclure dans votre image Docker.

Nous avons toujours besoin de nos fichiers confidentiels (comme « .env ») dans le conteneur pour exécuter le serveur, mais nous laissons l'utilisateur ajouter ces fichiers sensibles plus tard lorsqu'il démarre le conteneur.

## Construire l'image
Maintenant que nous avons notre « Dockerfile » avec des instructions sur la création d'une image, nous pouvons exécuter une commande pour créer notre image.<br/>
`docker build -t gbadsinformatics/dashboardname-dash .`<br/>
Exécutez cette commande dans le même répertoire que votre « Dockerfile ». Cela indique à Docker de créer notre image et de lui donner un nom d'utilisateur/une balise : `gbadsinformatics/dashboardname-dash`. Cette étape peut être fastidieuse si vous obtenez des erreurs de build. Vous devrez peut-être jouer avec votre «requirements.txt» pour obtenir des modules Python compatibles, ou ajouter des dépendances de package apt à votre « Dockerfile ». Résolvez les problèmes au fur et à mesure, c’est généralement l’étape la plus difficile.

## Exécution du tableau de bord
Maintenant que vous disposez enfin d’une image sans erreur de construction, vous pouvez la tester. Vous devez créer une commande pour exécuter votre image qui ressemblera à :<br/>
`docker run -d -p 9090:80 gbadsinformatics/dashboardname-dash`
- `-d` indique à Docker d'exécuter le conteneur détaché
- `-p 9090:80` indique à Docker de transférer le port 80 à l'intérieur du conteneur vers 9090 sur la machine hôte.<br/>
Ici, vous pouvez remplacer 9090 par n'importe quel port sur lequel vous souhaitez exécuter le tableau de bord, ne modifiez pas 80.
- `gbadsinformatics/dashboardname-dash` devrait être le nom que vous avez donné à votre image Docker.

Vous souhaiterez peut-être autoriser l'utilisateur à ajouter des [fichiers confidentiels] (#confidential-files) comme « .env ». Vous pouvez le faire dans Docker avec la balise `-v` :<br/>
`docker run -d -p 9090:80 -v /local/path/to/.env:/app/.env gbadsinformatics/dashboardname-dash`
- L'utilisateur remplacera `/local/path/to/.env` par le chemin complet du fichier confidentiel sur sa machine.
- Vous remplacerez `/app/.env` par l'endroit où le fichier confidentiel doit être placé dans le conteneur.

Une fois votre conteneur opérationnel, vous devriez pouvoir accéder au port spécifié sur votre navigateur Web et voir le tableau de bord. Si vous rencontrez des problèmes, voici quelques commandes utiles :
- `docker ps --all`<br/>
Cela montre les conteneurs Docker arrêtés.
- `docker logs XXXX`<br/>
Cela affiche les journaux d'un conteneur avec l'ID XXXX. Vous utiliserez la sortie de docker ps pour obtenir un ID de conteneur.
- `docker exec -it XXXX /bin/bash`<br/>
Cela ouvre un shell à l'intérieur du conteneur afin que vous puissiez résoudre les problèmes dans le conteneur.<br/>
**Cependant**, les modifications apportées dans un conteneur en cours d'exécution sont temporaires et ne seront pas reflétées dans l'image.

## Publication du tableau de bord
Une fois que vous disposez d'une image de travail, vous pouvez la publier sur DockerHub via la ligne de commande.
1. Créez un dépôt DockerHub nommé « dashboardname-dash » avec le nom de votre tableau de bord sur le compte DockerHub GBADsInformatics.
2. Revenez à la ligne de commande et connectez-vous à DockerHub :<br/>
`connexion Docker`
3. Transférez l'image vers DockerHub :<br/>
`docker push gbadsinformatics/nom du tableau de bord-dash`

Vous devriez maintenant essayer d'exécuter un conteneur en utilisant l'image publique juste pour vérifier qu'il fonctionne correctement. Vous pouvez également essayer d'utiliser GitHub Actions pour créer automatiquement l'image lorsque vous accédez à votre dépôt GitHub. De cette façon, vous n’aurez plus jamais besoin de répéter ces étapes !
