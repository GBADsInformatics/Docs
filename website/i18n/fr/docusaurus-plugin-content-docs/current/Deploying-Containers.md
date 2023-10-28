---
id: Deploying-Containers

title: "Déploiement de conteneurs dans AWS ECS"
author: "William Fitzjohn"
date: "24/06/2023"
---
# Déploiement de conteneurs Docker sur AWS ECS Fargate

Cette documentation fournit un guide étape par étape sur la façon de créer une définition de tâche, un service, de l'attacher à un Application Load Balancer (ALB) afin de le publier sur Internet.

## Table des matières
1. [Prérequis](#prérequis)
2. [Créer une définition de tâche](#create-a-task-definition)
3. [Créer un service ECS](#create-an-ecs-service)
4. [Réparez vos contrôles de santé](#health-checks)
4. [Vérifiez votre application](#check-deployment)


## Aperçu
Voici un schéma expliquant l'architecture que nous allons suivre :
<div style={{ largeur : '100%' }}>
<iframe src="https://drive.google.com/file/d/18n2dxTfz5svM3HqqrfcEQ2qbEsvkI2oM/preview" width="100%" height="500px"></iframe>
</div>

Vous pouvez voir que nos conteneurs Docker sont extraits dans AWS via la définition de tâche et transformés en service. Pour que les utilisateurs puissent accéder à nos services, nous devons simplement ajouter un nouveau groupe cible à notre équilibreur de charge existant.

## Prérequis<a name="prerequisites"></a>
Avant de procéder à ces étapes, assurez-vous d'avoir les éléments suivants :

- Un compte AWS avec les autorisations nécessaires pour créer des ressources ECS, ajouter des groupes cibles et modifier les équilibreurs de charge.
- Avoir créé un conteneur Docker à partir de notre guide précédent et le publier sur DockerHub.

## Créer une définition de tâche<a name="create-a-task-definition"></a>
1. Dans AWS, accédez à Amazon Elastic Container Service > Définition de tâche > Créer une nouvelle définition de tâche
2. Nom de la tâche : choisissez quelque chose de descriptif comme : `metadata-api-task` ou `population-dash-task`
3. Conteneur : créez une définition de conteneur
1. Nom du conteneur : ex. `conteneur-api-métadonnées`
2. URI de l'image : votre URI d'image DockerHub ex. `gbadsinformatics/meta-api :dernière`
3. Mappage des ports : ajoutez vos ports exposés ici, ex. TCP sur le port 80 (http)\
Assurez-vous d'utiliser http ; notre équilibreur de charge ajoutera https plus tard pour vous.
4. Variables d'environnement : ce sont les variables référencées dans les conteneurs Docker. Pour les tableaux de bord, nous utilisons `DASH_BASE_URL` pour définir le chemin URL du tableau de bord comme `/dashboards/population`. Ces variables doivent être référencées dans votre code. Cela ne fonctionnera pas automatiquement. D'autres applications que nous utilisons utilisent des variables d'environnement pour transmettre des informations d'identification secrètes.
4. Configurer l'environnement : ressources
1. Modifiez les ressources : généralement, chaque conteneur est défini sur 1 vCPU et 2 Gio de mémoire.
2. Rôle de tâche : défini sur `ecsTaskExecutionRole`
3. Conserver le stockage et la journalisation par défaut
5. Enfin, examinez et créez votre définition de tâche.

## Créer un service ECS<a name="create-an-ecs-service"></a>
1. Revenez au cluster et cliquez sur créer un nouveau service.
2. Configuration du déploiement :
1. Assurez-vous d'avoir sélectionné un service.
2. Sélectionnez Famille et choisissez votre nouvelle définition de tâche.
3. Nom du service : ex `metadata-api-service`
3. Réseautage :
1. Assurez-vous que le VPC par défaut est sélectionné et que les 3 sous-réseaux sont sélectionnés.
2. Choisissez le groupe de sécurité
- supprimer "par défaut"
- ajoutez `GBADs-Dashboard-LB-SecurityGroup` (Malgré son nom, ceci est utilisé pour tous les conteneurs, pas seulement pour les tableaux de bord)
4. Équilibrage de charge :
1. Sélectionnez « Utiliser un équilibreur de charge existant »
2. Choisissez « Dashboards-ALB » (ceci est utilisé pour tous les conteneurs, pas seulement pour les tableaux de bord)
3. Sélectionnez « Utiliser un écouteur existant »
4. Choisissez « 443 : HTTPS » – C'est ici que https est ajouté pour vous
5. Sélectionnez « Créer un nouveau groupe cible »
6. Nom du groupe cible : quelque chose comme « metadata-api-target-group »
7. Modèle de chemin : remplacez-le par l'URL de base de vos applications **mais ajoutez un '\*'**. \
Ex `/dashboards/population*`, cela transmet tout le trafic avec ce modèle vers notre nouveau conteneur.
8. Ordre d'évaluation : faites défiler les règles existantes et sélectionnez le numéro suivant dans l'ordre.\
Parfois, nous avons des applications avec des modèles qui se chevauchent comme `/dashboards/population` et `/dashboards/population-v2`. Il est important ici que l'URL la plus longue soit prioritaire dans l'ordre d'évaluation (une URL plus longue nécessite un numéro inférieur). Vous devrez peut-être modifier certaines règles pour libérer de l'espace.
9. Chemin de vérification de l'état de santé : ce chemin est utilisé pour vérifier l'état de votre candidature. Il s'agit généralement de l'URL de base de votre application ou du site de documentation d'une API. Comme `/dashboards/population` ou `/api/docs`
10. Cliquez sur créer.

## Corrigez vos contrôles d'état<a name="health-checks"></a>
Avant de vérifier votre service, nous devons modifier notre nouveau groupe cible afin d'accepter davantage de codes de retour HTTP.
1. Accédez à EC2 > Groupes cibles > votre nouveau groupe cible > Bilans de santé > Modifier
2. Ouvrez les paramètres avancés de vérification de l'état
3. Remplacez les codes de réussite par « 200-399 »
4. Enregistrez les modifications

## Vérifiez votre application<a name="check-deployment"></a>
Vous pouvez maintenant aller sur « www.gbadske.org/[votre URL de base ici] » comme « www.gbadske.org/dashboards/population » pour vérifier l'état de votre candidature.
