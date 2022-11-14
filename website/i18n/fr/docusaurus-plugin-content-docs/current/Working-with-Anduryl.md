---
id: Travailler-avec-Anduryl
title: Travailler avec Anduryl
sidebar_position: 10
---

## Conditions préalables
Vous pouvez soit installer ces programmes séparément, soit installer Anaconda.
- *Option 1* : Anaconda
- Installer la distribution [Anaconda](https://www.anaconda.com/products/distribution)
- *Option 2* : Installer séparément
- [Python3](https://www.python.org/downloads/) ou supérieur
- [Cahier Jupyter](https://jupyter.org/install)
- Vous utiliserez Python pour installer Jupyter

## Installation Anduryl
1. **Planifiez** l'endroit où vous voulez installer Anduryl.
- Nous vous suggérons d'installer le module dans un endroit facilement accessible comme votre dossier Accueil.
- Terminologie utilisée :
- *PARENT_FOLDER* : il s'agit du chemin d'accès au dossier dans lequel vous souhaitez installer Anduryl.
- Cela peut être n'importe où sur votre système, il ressemblera à ceci (vous pouvez changer cela) <br/>
Windows : `C:/Users/VOTRE_NOM` <br/>
Mac : `/home/nom`
2. **Télécharger Anduryl**. Cela peut être fait de 2 façons, en le téléchargeant depuis votre navigateur ou en utilisant la commande git.
- *Option 1* : Navigateur
1. Accédez à https://github.com/GBADsInformatics/anduryl-plus
2. Cliquez sur le bouton vert `Code` puis `Télécharger ZIP`
3. Déplacez le ZIP téléchargé vers le *PARENT_FOLDER* dans lequel vous souhaitez installer Anduryl.
4. Faites un clic droit sur le ZIP et cliquez sur "Extraire tout" ou "Extraire ici"
5. **Renommer** le nouveau dossier `anduryl-plus-master` en `anduryl`
6. Ouvrez votre système d'exploitation "Invite de commandes" ou "Terminal"
7. Exécutez `cd INSERT_PARENT_FOLDER_HERE`
8. Exécutez `python -m anduryl`
- *Option 2* : Commande Git (nécessite l'installation de git)
1. Ouvrez votre invite de commande/terminal, puis accédez à votre PARENT_FOLDER.
- Exécutez `cd INSERT_PARENT_FOLDER_HERE`
2. Exécutez `git clone https://github.com/GBADsInformatics/anduryl-plus.git`
3. Renommez `anduryl-plus` en `anduryl`
- Pour ce faire, lancez `mv anduryl-plus anduryl`
4. Exécutez `python -m anduryl`

## Anduryl dans le cahier Jupyter
**Importer Anduryl**
- Pour importer Anduryl, Jupyter doit savoir où le trouver. Ajoutez le bloc de code ci-dessous en haut de votre Jupyter Notebook pour importer le module. <br/>
**Remarque** : Remplacez le code par votre PARENT_FOLDER avant de l'exécuter.
```python
#Montrer le système où trouver Anduryl
importer système
anduryl_path = 'INSERT_PARENT_FOLDER_HERE' # Chemin vers le dossier parent anduryl
if anduryl_path not in sys.path: sys.path.append(anduryl_path) # Ajouter le chemin à sys
importer de l'anduryle
```
**Exemples d'utilisation**
- Pour en savoir plus sur l'utilisation d'Anduryl dans Jupyter Notebook, visitez [Example Anduryl with scripting](https://htmlpreview.github.io/?https://github.com/grongen/anduryl/blob/master/notebooks/Example_Anduryl_with_scripting. html)

## Anduryl dans R Studio
1. Installez la bibliothèque réticulée pour appeler les modules python à partir de R.
- Dans R, tapez `install.packages("reticulate")`
- Suivez l'assistant pour installer reticulate
2. Importez réticulé et Anduryl en exécutant le code ci-dessous. <br/>
**Remarque** : Remplacez la première ligne par votre PARENT_FOLDER
```R
anduryl_path = 'INSERT_PARENT_FOLDER_HERE'
bibliothèque ("réticule")
sys <- import("sys")
if (!anduryl_path %in% sys$path)(sys$path <- append(sys$path, anduryl_path))
anduryle <- import("anduryle")
```
3. Chaque fois que vous chargez R, vous devrez réexécuter l'étape 2.
4. Exemple d'utilisation :
```r
projet <- anduryl$Projet()
projet
```
Ce code devrait sortir
```r
Classe principale du projet.
Propriétés:
- évaluations
- experts
- io
- éléments
- principaux résultats
- résultats
Méthodes :
- add_results_from_settings
- calculate_decision_maker
- calculate_expert_robustness
- calculate_item_robustness
- initialiser
- to_results
```
- Pour en savoir plus sur le codage avec Anduryl, visitez [Example Anduryl with scripting](https://htmlpreview.github.io/?https://github.com/grongen/anduryl/blob/master/notebooks/Example_Anduryl_with_scripting.html)
- **Remarque** : étant donné que vous allez coder en R, vous référencerez les objets en utilisant `$` au lieu de `.`
- Ex. `anduryl$Project()` au lieu de `anduryl.Project()`
