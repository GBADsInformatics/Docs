---
slug: genomics-and-gbads-how-ncbi-metadata-can-be-a-new-source-of-data-on-livestock production-and-health
title: "Génomique & GBADs : Comment les métadonnées NCBI peuvent être une nouvelle source de données sur la production et la santé du bétail"
authors: Cassandre
tags: [metadata, genomics, NCBI]
css: custom.css 
---

## La recherche mondiale en génomique augmente les métadonnées sur la santé animale

Des organisations mondiales telles que l’Organisation mondiale de la santé animale (WOAH) et l’Organisation pour l’alimentation et l’agriculture (FAO) ont pris l’initiative de compiler des données relatives aux mesures des maladies animales. Cependant, à mesure que les données génomiques augmentent avec la diminution du coût du séquençage, les métadonnées liées à la santé et aux maladies animales peuvent être utilisées pour compléter les données existantes des GBAD. Certaines estimations prévoient que jusqu'à 40 milliards de gigaoctets de données génomiques seront générés chaque année et qu'au cours de la prochaine décennie, la recherche en génomique générera entre 2 et 40 exaoctets de données (Stephens et al. 2015). Le Centre national d'information sur la biotechnologie (NCBI) est un exemple d'un ensemble de bases de données contenant des informations pertinentes sur les GBAD. À mesure que de plus en plus de chercheurs mènent des travaux génomiques sur le bétail et d'autres espèces économiquement importantes, des données sur la race, la localisation, l'état individuel et la maladie sont enregistrées. En particulier, la base de données BioSamples du NCBI stocke les métadonnées associées aux séquences génétiques téléchargées sur le NCBI. À mesure que le séquençage devient plus rentable, les métadonnées animales pouvant être utilisées par les GBAD s’accumuleront. Il y a eu une augmentation remarquable du nombre d’entrées de métadonnées concernant l’élevage au cours des sept dernières années (Figure 1). Ces métadonnées accompagnent les études génomiques menées non seulement par des universités, mais également par des organisations du monde entier. NCBI a déjà été utilisé pour créer des bases de données que d’autres chercheurs peuvent utiliser (Hu et al. 2022). La base de données AnimalMetagenome (http://animalmetagenome.com) contient des données métagénomiques sur 4 espèces domestiques et une abondance d'espèces sauvages.

![](https://i.imgur.com/bgF3nCD.png)
<p align="center"><i>Figure 1. Entrées NCBI dans la base de données BioSample concernant les espèces couvertes par les GBAD (bovins, porcs, chèvres, moutons, poulets, lamas, équidés, chameaux). Cette figure montre la tendance du nombre d'entrées depuis 2005.</i></p>

## Répartition géographique des données génomiques
L'un des principaux objectifs du GBAD est de combler les lacunes mondiales en matière de données concernant la santé animale. Afin de normaliser les données de base sur la santé animale dans tous les pays, les données de localisation et de race sont extrêmement importantes. La classification de l'aire de répartition mondiale des animaux aidera à comprendre la propagation des maladies d'origine animale. Les utilisateurs peuvent saisir des données de localisation comme attribut de base dans la base de données BioSamples. En particulier, les entrées peuvent contenir l'emplacement de l'auteur de la soumission, le lieu d'échantillonnage et même des coordonnées d'échantillonnage spécifiques. Ces données peuvent indiquer où certaines espèces sont densément peuplées ou quels pays et emplacements manquent de données. Bien que le coût du séquençage de l’ADN ait diminué, il s’agit toujours d’un achat important ; par conséquent, ces données peuvent également indiquer s’il existe des biais inhérents à la présence d’échantillonnage génomique dans les pays. En utilisant rentrez, un package R pour accéder au NCBI (hiver 2017), nous avons pu extraire des entrées de métadonnées pour des études génomiques impliquant le bétail et d'autres espèces économiquement importantes. La figure 2 illustre la répartition géographique de ces données, où il est montré qu'il existe des groupes de données dans des zones hautement étudiées. À l’inverse, il existe des lacunes évidentes dans les données en Afrique et dans certaines parties de l’Asie (Figure 2).

![](https://i.imgur.com/skR7ffk.png)
<p align="center"><i>Figure 2. Instantané statique d'une figure interactive affichant les emplacements d'échantillonnage du bétail et d'autres espèces pertinentes pour les GBAD, sur la base des métadonnées NCBI BioSample.</i></p>

Désormais, ce ne sont que les données contenant des informations de localisation pour chaque entrée. Comme mentionné précédemment, ces données constituent des données de base importantes sur la présence mondiale d’espèces ; cependant, la base de données BioSamples contient également des données plus pertinentes sur les GBAD, comme les maladies. Nous avons exploré les métadonnées extraites du NCBI et avons constaté que chez les espèces étudiées, 98 % des entrées ne contenaient pas de données viables sur les maladies. Par « viable », nous entendons les informations liées à la maladie, car de nombreuses entrées comportaient des caractères aléatoires ou des informations non liées. Les 2 pour cent restants des données contenaient des maladies et des agents pathogènes qui chevauchaient la liste des agents pathogènes de WOAH (WOAH, communication personnelle d'un document interne). Par exemple, les bovins souffraient de 16 maladies qui chevauchaient la liste WOAH (Figure 3).

![](https://i.imgur.com/jlqJbUB.png)
<p align="center"><i>Figure 3. Instantané statique d'une figure interactive affichant les emplacements d'échantillonnage pour les bovins avec des informations sur la maladie présentes dans l'entrée NCBI. Les maladies répertoriées chevauchent celles que WOAH surveille. </i></p>


## Une saisie utilisateur incohérente entraîne des lacunes dans les données

NCBI héberge des données sur une gamme d'organismes allant des bactéries aux baleines ; cependant, lors de l'extraction de données sur le bétail et les espèces économiquement importantes, près de 350 000 entrées ont été renvoyées. La collecte de données sur les espèces GBAD (bovins, poulets, porcs, moutons, chèvres, etc.) a révélé des variations dans la quantité de données. La figure ci-dessous illustre cette variation, où les bovins, les poulets et les porcs ont renvoyé le plus grand nombre de données. L'exhaustivité des données pour ces entrées renvoyées variait ; cependant, ils représentaient la plus grande proportion de données liées aux GBAD. Les entrées de bovins, en particulier, représentaient 27 % du nombre total d'entrées. La combinaison de deux autres espèces, les lamas et les chameaux, représentait moins de 1 % du total des entrées renvoyées.

En plus des informations sur les espèces, NCBI permet également aux utilisateurs de saisir des données sur les races. Étant donné que les informations sur les races peuvent être utiles pour comprendre la prévalence et la propagation des maladies, il est important de savoir quelles races constituent la majorité des données. La figure 4 illustre la proportion de races spécifiques pour chaque espèce rassemblée pour les GBAD, où chaque barre de couleur différente indique une race différente. Comme le montre le graphique, la majorité des entrées ne contenaient pas d’informations sur la race. Il s’agit d’une découverte importante, dans la mesure où les informations sur la race devraient être l’un des principaux paramètres rapportés, en particulier pour les espèces économiquement importantes. Ce graphique montre également des lacunes potentielles dans les données hébergées dans NCBI, car certaines races ne sont pas aussi répandues dans les données. Cela peut permettre de savoir où les ressources, le temps et le financement doivent être alloués pour égaliser les données entre les races et les espèces.

![](https://i.imgur.com/dZKyLeW.png)
<p align="center"><i>Figure 4. Barplot illustrant la proportion de différentes races signalées pour chaque espèce étudiée dans la base de données NCBI BioSamples. Le rose indique le nombre d'entrées sans information sur la race. Toutes les autres couleurs indiquent la proportion de races différentes pour chaque espèce.
</i></p>


## Prochaines étapes d'utilisation de ces données

D'après notre premier examen des métadonnées disponibles sur NCBI, quelques tâches pourraient rationaliser le processus. De plus, les étapes suivantes augmenteraient les métadonnées pour des utilisations secondaires.

1. Standardisez les paramètres.
La normalisation des paramètres améliorerait le processus de nettoyage des données et contribuerait à égaliser les données entre les différentes institutions. Actuellement, la configuration en texte libre de la base de données BioSample rend très difficile la comparaison entre les entrées, car les fautes d'orthographe et les caractères supplémentaires peuvent empêcher les comparaisons. Comme indiqué ailleurs (Goncalves et Musen 2019), le renforcement de l'infrastructure sous-jacente de la base de données NCBI BioSamples contribuera à standardiser les données et à rendre ces données plus accessibles aux chercheurs pour des utilisations secondaires en dehors de la génomique.

2. Mettre davantage l'accent sur les métadonnées.
Il existe des lacunes majeures dans les données, allant de détails plus petits tels que la prévalence de la maladie à des paramètres importants tels que la race ou le lieu. À mesure que NCBI sera de plus en plus consulté pour les métadonnées, il sera impératif que les utilisateurs saisissent autant de données que possible. Les données de base telles que l’espèce, la race et l’emplacement devraient être obligatoires pour les utilisateurs.

3. Téléchargements de données pré-imprimées.
Actuellement, il existe un décalage entre l’échantillonnage et le séquençage de l’ADN et le moment où ces données sont téléchargées dans des bases de données publiques telles que NCBI. Ce décalage peut varier de quelques mois à plusieurs années. Ainsi, les données qui pourraient être utilisées dans des projets secondaires comme celui-ci pourraient être diffusées jusqu’à quelques années après l’échantillonnage. Par conséquent, je recommande de télécharger les données génomiques avec les métadonnées qui les accompagnent sur NCBI dès que possible ou lorsque les prépublications sont soumises.

NCBI et d’autres bases de données génomiques contiennent des données qui peuvent être utiles à bien plus que de simples projets génomiques. Pour les GBAD, ces données peuvent fournir des informations précieuses sur la présence de races locales dans des endroits normalement non échantillonnés ainsi que sur l'apparition de maladies chez les individus échantillonnés. En outre, il fournit un premier aperçu de la manière dont les projets génomiques peuvent compléter l'objectif du GBAD de recueillir des données et des mesures sur la santé animale.

Les références:

Goncalves R, Musen MA (2019) La qualité variable des métadonnées sur les échantillons biologiques utilisés dans les expériences biomédicales. Données scientifiques, 6, 190021.

Hu R, Yao R, Li L et al. (2022) Une base de données de métagénomes animaux. Données scientifiques, 9, 312.

Stephens ZD, Lee SY, Faghri, F et al. (2015) Big Data : astronomique ou génomique ? PLoS Biologie, 3, 1002195.

Winter, DJ (2017) rentrez : Un package R pour l'API NCBI eUtils. Le Journal R, 9, 520-526.

