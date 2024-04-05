# Updating the Dashboards Page

The dashboards page is made up of two javascript files
- dashboards.js
- DashboardCard.js


## dashboard.js

This file contains information about the page itself. The title, legend, and the card components are held within this file. The constant variable `DashInfo`    contains a objects that are piped into DashboardCard.js. Each object contains the following key's:
- title
- relatedLinks

The title variable should be wrapped in <Translate> tags so that when a translation is preformed, the translation can easily be mapped to that part of the page.

The relatedLinks is a list that contains objects with various key pair mappings. 

- The first key value is the name of the dashboard, and the value that corresponds with it with it will make a link for the title, and the dashboard icon.
- The second key value maps to the information icon, and if there is a third link, it will map to the papers icon


If you would like to add a new dashboard into one of the categories, simply add a new object into the relatedLinks variable in the corresponding title. If you'd like to create a new card completely, simply create a new object within the `DashInfo` variable with the required fields mentioned above.