---
id: Working-with-Anduryl

title: Travailler avec Anduryl
sidebar_position: 10
---

## Conditions préalables
Vous pouvez soit installer ces programmes séparément, soit installer Anaconda.
- *Option 1* : Anaconda
- Installer la distribution [Anaconda](https://www.anaconda.com/products/distribution)
- *Option 2* : Installer séparément
- [Python3](https://www.python.org/downloads/) ou supérieur
- [Carnet Jupyter](https://jupyter.org/install)
- Vous utiliserez Python pour installer Jupyter

## Installation d'Anduryl
1. **Planifiez** l'endroit où vous souhaitez installer Anduryl.
- Nous vous suggérons d'installer le module dans un endroit facilement accessible, comme votre dossier Accueil.
- Terminologie utilisée :
- *PARENT_FOLDER* : Il s'agit du chemin d'accès au dossier dans lequel vous souhaitez installer Anduryl.
- Cela peut être n'importe où sur votre système, cela ressemblera à ceci (vous pouvez modifier cela) <br/>
Windows : `C:/Utilisateurs/VOTRE_NOM` <br/>
Mac : `/home/nom`
2. **Téléchargez Anduryl**. Cela peut être fait de 2 manières, en le téléchargeant depuis votre navigateur ou en utilisant la commande git.
- *Option 1* : Navigateur
1. Accédez à https://github.com/GBADsInformatics/anduryl-plus
2. Cliquez sur le bouton vert `Code` puis `Télécharger ZIP`
3. Déplacez le ZIP téléchargé vers le *PARENT_FOLDER* dans lequel vous souhaitez qu'Anduryl soit installé.
4. Cliquez avec le bouton droit sur le ZIP et cliquez sur « Extraire tout » ou « Extraire ici ».
5. **Renommer** le nouveau dossier `anduryl-plus-master` en `anduryl`
6. Ouvrez l'invite de commande ou le terminal de votre système d'exploitation.
7. Exécutez `cd INSERT_PARENT_FOLDER_HERE`
8. Exécutez `python -manduryl`
- *Option 2* : Commande Git (nécessite l'installation de git)
1. Ouvrez votre invite de commande/terminal, puis accédez à votre PARENT_FOLDER.
- Exécutez `cd INSERT_PARENT_FOLDER_HERE`
2. Exécutez `git clone https://github.com/GBADsInformatics/anduryl-plus.git`
3. Renommez « anduryl-plus » en « anduryl »
- Pour ce faire, lancez `mv anduryl-plus anduryl`
4. Exécutez `python -manduryl`

## Anduryl dans le carnet Jupyter
**Importer de l'Anduryl**
- Pour importer Anduryl, Jupyter doit savoir où le trouver. Ajoutez le bloc de code ci-dessous en haut de votre bloc-notes Jupyter pour importer le module. <br/>
**Remarque** : remplacez le code par votre PARENT_FOLDER avant de l'exécuter.
```python
#Montrant au système où trouver Anduryl
système d'importation
anduryl_path = 'INSERT_PARENT_FOLDER_HERE' # Chemin vers le dossier parent anduryl
si anduryl_path n'est pas dans sys.path : sys.path.append(anduryl_path) # Ajouter un chemin vers sys
importer de l'anduryle
```
**Exemples d'utilisation**
- Pour en savoir plus sur l'utilisation d'Anduryl dans Jupyter Notebook, visitez [Example Anduryl with scripting](https://htmlpreview.github.io/?https://github.com/grongen/anduryl/blob/master/notebooks/Example_Anduryl_with_scripting. html)

## Anduryl dans R Studio
1. Installez la bibliothèque réticulée pour appeler les modules python depuis R.
- Dans R, tapez `install.packages("reticulate")`
- Suivez l'assistant pour installer Reticulate
2. Importez le réticulé et l'Anduryl en exécutant le code ci-dessous. <br/>
**Remarque** : Remplacez la première ligne par votre PARENT_FOLDER
```R
anduryl_path = 'INSERT_PARENT_FOLDER_HERE'
bibliothèque("réticulé")
sys <- import("sys")
if (!anduryl_path %in% sys$path)(sys$path <- append(sys$path, anduryl_path))
anduryl <- import("anduryl")
```
3. Chaque fois que vous chargez R, vous devrez réexécuter l'étape 2.
4. Exemple d'utilisation :
```r
projet <- anduryl$Projet()
projet
```
Ce code devrait afficher
```r
Classe de projet principale.
Propriétés:
- évaluations
- experts
- io
- articles
- principaux résultats
- résultats
Méthodes :
- add_results_from_settings
- calculate_decision_maker
- calculate_expert_robustness
- calculate_item_robustness
- initialiser
- vers_results
```
- Pour en savoir plus sur le codage avec Anduryl, visitez [Example Anduryl with scripting](https://htmlpreview.github.io/?https://github.com/grongen/anduryl/blob/master/notebooks/Example_Anduryl_with_scripting.html)
- **Remarque** : comme vous coderez en R, vous référencerez des objets en utilisant `$` au lieu de `.`
- Ex. `anduryl$Project()` au lieu de `anduryl.Project()`
