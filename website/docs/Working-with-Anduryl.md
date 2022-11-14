---
id: Working-with-Anduryl
title: Working with Anduryl
sidebar_position: 10
---

## Prerequisites
You can either install these programs separately or install Anaconda.
- *Option 1*: Anaconda
	- Install [Anaconda](https://www.anaconda.com/products/distribution) distribution
- *Option 2*: Install Separately
	- [Python3](https://www.python.org/downloads/) or higher
	- [Jupyter Notebook](https://jupyter.org/install)
		- You will use Python to install Jupyter 

## Anduryl Installation
1. **Plan** where you want Anduryl installed.
	- We suggest you install the module somewhere easily accessible like your Home folder.
	- Terminology used:
		- *PARENT_FOLDER*: This is the path to the folder that you want Anduryl installed into.
			- This can be anywhere on your system, it will look similar to this (you can change this) <br/>
			Windows: `C:/Users/YOUR_NAME` <br/>
			Mac: `/home/name`
2. **Download Anduryl**. This can be done 2 ways, downloading it from your browser, or using the git command.
	- *Option 1*: Browser
		1. Navigate to https://github.com/GBADsInformatics/anduryl-plus
		2. Click on the green `Code` button then `Download ZIP`
		3. Move the downloaded ZIP to the *PARENT_FOLDER* you would like Anduryl installed in.
		4. Right click the ZIP and click `Extract All` or `Extract Here`
		5. **Rename** the new `anduryl-plus-master` folder to `anduryl`
		6. Open your operating systems `Command Prompt` or `Terminal`
		7. Run `cd INSERT_PARENT_FOLDER_HERE`
		8. Run `python -m anduryl`
	- *Option 2*: Git Command (requires git to be installed)
		1. Open your command prompt/terminal, then navigate to your PARENT_FOLDER.
			- Run `cd INSERT_PARENT_FOLDER_HERE`
		2. Run `git clone https://github.com/GBADsInformatics/anduryl-plus.git`
		3. Rename `anduryl-plus` to `anduryl`
			- To do so, run `mv anduryl-plus anduryl`
		4. Run `python -m anduryl`

## Anduryl in Jupyter Notebook
**Import Anduryl**
- To import Anduryl, Jupyter needs to know where to find it. Add the block of code below to the top of your Jupyter Notebook to import the module. <br/>
	**Note**: Change the code to your PARENT_FOLDER before you run it.
```python
#Showing the system where to find Anduryl
import sys
anduryl_path = 'INSERT_PARENT_FOLDER_HERE' # Path to anduryl parent folder
if anduryl_path not in sys.path: sys.path.append(anduryl_path) # Add path to sys
import anduryl
```
**Usage Examples**
- To learn more about using Anduryl in Jupyter Notebook, visit [Example Anduryl with scripting](https://htmlpreview.github.io/?https://github.com/grongen/anduryl/blob/master/notebooks/Example_Anduryl_with_scripting.html)

## Anduryl in R Studio
1. Install the reticulate library to call python modules from R.
	- In R, type `install.packages("reticulate")`
	- Follow the wizard to install reticulate
2. Import reticulate and Anduryl by running the code below. <br/>
	**Note**: Change the first line to your PARENT_FOLDER
	```R
	anduryl_path = 'INSERT_PARENT_FOLDER_HERE'
	library("reticulate") 
	sys <- import("sys")
	if (!anduryl_path %in% sys$path)(sys$path <- append(sys$path, anduryl_path))
	anduryl <- import("anduryl")
	```
3. Each time you load up R, you'll need to re-run step 2.
4. Usage example:
	```r
	proj <- anduryl$Project()
	proj
	```
	This code should output 
	```r
	Main project class.
	Properties:
	 - assessments
	 - experts
	 - io
	 - items
	 - main_results
	 - results
	Methods:
	 - add_results_from_settings
	 - calculate_decision_maker
	 - calculate_expert_robustness
	 - calculate_item_robustness
	 - initialize
	 - to_results
	```
- To learn more about coding with Anduryl, visit [Example Anduryl with scripting](https://htmlpreview.github.io/?https://github.com/grongen/anduryl/blob/master/notebooks/Example_Anduryl_with_scripting.html)
- **Note**: because you will be coding in R, you will reference objects using `$` instead of `.`
	- Ex. `anduryl$Project()` instead of `anduryl.Project()`
