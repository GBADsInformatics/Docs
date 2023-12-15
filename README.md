
<p align="center">
  <img src="https://i0.wp.com/animalhealthmetrics.org/wp-content/uploads/2019/10/GBADs-LOGO-Black-sm.png?w=180&ssl=1" alt="GBADs logo"width="310">
</p>
<p align="center">Documentation Server</p>
<p align="center">:t-rex: :computer: :globe_with_meridians: :cow: :face_with_thermometer:</p>

#
<p align="center">
<img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
<img src="https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white"/>
<img src="https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white"/>
<img src="https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white"/>
<img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/Flask-20232A?style=for-the-badge&logo=flask&logoColor=white"/>
</p>
Welcome to the GBADs documentation server github repo!

## Table of Contents
1. [Installation](https://github.com/GBADsInformatics/Docs#1-installation)
2. [How to configure the site locally](https://github.com/GBADsInformatics/Docs#2-how-to-configure-the-site-locally)
   * 2.1. [Modifying different parts of the site](https://github.com/GBADsInformatics/Docs#21-modifying-different-parts-of-the-site)
   * 2.2. [Creating a term](https://github.com/GBADsInformatics/Docs#22-creating-a-term)
3. [Wiki documentation](https://github.com/GBADsInformatics/Docs#3-wiki-documentation)
	* 3.1. [How do I order my files?](https://github.com/GBADsInformatics/Docs#31-how-do-i-order-my-files)
	* 3.2. [Ordering folders sidebar positions](https://github.com/GBADsInformatics/Docs#32-ordering-folders-sidebar-positions)
	* 3.3. [How do I add multiple authours to a blog post?](https://github.com/GBADsInformatics/Docs#33-how-do-i-add-multiple-authors-to-a-blog-post)
	* 3.4. [Where can I learn more about styling?](https://github.com/GBADsInformatics/Docs#34-where-can-i-learn-more-about-styling)
	* 3.5. [How can I translate the site to another language?](https://github.com/GBADsInformatics/Docs#35-how-can-i-translate-the-site-to-another-language)
4. [Developers' message](https://github.com/GBADsInformatics/Docs#4-developers-message)

## 1. Installation

<ol>
  <li>Clone the repo with <code>git clone https://github.com/GBADsInformatics/Docs.git</code></li>
  <li>Change the current directory to the cloned repo with: <code>cd Docs</code></li>
  <li>Download dependencies with:
    <ol>
      <li><code>npm i</code>
      <li><code>npm run packs</code></li>
    </ol>
  <li>Make changes...</li>
  <li>Push changes to the "master" branch, and the site will update!</li>
</ol>


## 2. How to configure the site locally

In the cloned repo with the installed dependencies, do the following:
<ol>
  <li>Run the code with:<code>npm run dev</code></li>
  <li>Client runs on <a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a>.</li>
</ol>

### 2.1. Modifying different parts of the site

All of the files that modify the main site are in the <b>client folder</b>.
|    What do you want to modify?   | Where is it?    |
| ----------- | ----------- |
|       |     |
| Homepage   | /client/src/pages or /client/src/components        |
| Site defaults (general info. Footers, titles, etc)   | docusarus.config.js       |
| Documentation (Place markdown files here)   | /client/docs       |
| Blogs (Place markdown files here)   | /client/blog       |

### 2.2. Creating a term

To create a term in documentation, follow these steps:
<ul>
  <li>Create the markdown for the term page and place it in the <code>/client/docs/terms</code> folder. Example: <img src="https://i.imgur.com/XNffeTN.png" alt="Adding a term example"></li>
  <li>Next, in your documentation file placed in the <code>/client/docs</code> folder, swap for your term with the following syntax:
    <code>%%term_text|term_name%%</code>
    Example:
    To display the term 'Party' use the corresponding ID associated with it. In this case, the corresponding ID is 'partyTerm'.
    <img src="https://i.imgur.com/nblLJmw.png" alt="Adding a term example">
  </li>
  <li>Then, run the <code>yarn docusaurus parse</code> command, and check your documentation file and terminal to see if there are any errors.</li>
  <li>Finally, run the <code>yarn docusaurus glossary</code> to update the glossary.</li>
</ul>

## 3. Wiki documentation

### 3.1. How do I order my files?

By giving your files a naming convention like this:
<ul>
  <li>01-introduction.md</li>
  <li>02-details.md</li>
  <li>03-conclusion.md</li>
</ul>

You can easily order files.

Also, by placing something like this:
```
---
sidebar_position: 6
---
```
At the top of your markdown file, you can order where your document goes.

### 3.2. Ordering folders sidebar positions

By including a _category_.json file in your folder and placing code like this:

```
{
  "label": "Tutorial - Extras",
  "position": 3
}
```

You can order where your folder shows up on the sidebar.

### 3.3. How do I add multiple authours to a blog post?

This is a pretty easy fix. In the header of the markdown document, modify the "authors" property to have a list of id's instead of a single id.

Example:

<img src="https://i.imgur.com/Q1Y3tqq.png" alt="Example of multiple authours on a blog post"/>

### 3.4. Where can I learn more about styling?
The Docusaurus documentation site has lots of info about styling. Most documentation material regarding the frontend is found on the [Docusaurus](https://docusaurus.io/docs) page.

### 3.5. How can I translate the site to another language?
Using the [Translate Docusaurus](https://github.com/GBADsInformatics/TranslateDocusaurus) repo created by Flex Consulting Solutions, developers can easily translate the site into any chosen ISO language.




## 4. Developers' message
Feel free to contribute to this repo by sharing your thoughts and ideas, raising issues (if found) and providing bug-fixes. 
For any information or support, please do not hesitate to contact us through this Github repository or by email.

Developed by [Matthew Szurkowski](mailto:mszurkow@gmail.com).


<p align="center">
  <img src="https://www.gatesfoundation.org/-/media/placeholders/fullmark_light.png" alt="The Gates Foundation Logo" width="400">
</p>
