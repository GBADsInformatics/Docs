---
sidebar_position: 
---

# Metadata Storage: Graph Databases in GBADs

```{epigraph}
"All the knowledge is in connections"

-- [David Rumelhart](https://en.wikipedia.org/wiki/David_Rumelhart) 
```

GBADs Informatics uses [neo4j](https://neo4j.com/), a graph database management system, to manage and storage metadata and information about individuals and groups involved in the project. As you will learn in this section, a graph database is a type of database that leverages the idea of connections between entites as a method to derive insights and new knowledge from otherwise disconnected data.  

***In this section we tell you what a graph database is, how it can be used, talk about One Health research as a connected entity and outline the GBADs graph database use cases.*** 

```{admonition} Learning Objectives 
* Readers should understand what a graph database and a graph model is
* Readers should understand the metadata use case for graph databases in GBADs
* Readers should understand the idea of connectedness and data 
```



## What is a graph database? 

```{margin} What are relational databases?
Traditionally, data are organized into a series of tables. Each of the tables have columns, and some tables have common columns. With these common columns you can specify joins between tables, resulting in a new table. 

The biggest advantage of relational databases is the ability to join common tables to derive insights. On the other hand, relational databases require rigid schemas which require database engineers to structure their data to fit the schema. This comes with the assumption that we know what all of our data already looks like, which isn't always the case for research.  

```

A graph database is a type of database that stores data using relationships between main ideas or entities. The relationships between different entities show connectedness, allowing for more insights to be drawn than a traditional relational database. Because data is highly complex and multidimensional in terms of structure, provenance, governance, security and semantics, GBADs uses graph databases for master metadata management and data cataloguing. By leveraging the dynamic nature of the graph database and structuring our **graph model** in a way that enables improved understanding of the many dimensions of data, we can both visualize and understand how data flows outside and inside our organization. Graph databases also allow us to add and change the structure as the structure of the information about data changes. This will become more clear as we introduce the preliminary GBADs graph data model. 


### Parts of a graph database

Graph databases are made up of **nodes** (entities) and **edges** (relationships). Nodes can have properties and labels while edges serve as the connection, or relationship between nodes. 

A graph model is a model of what kinds of nodes you are representing and how they are connected (what relationships you will have).

![Graph Model](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/20210719_GBADs_GraphModel.png)

**Research and connectivity**

Research and modelling is build on the data that we collect to make sense of the world around us. We use the data to draw insights that inform decisions or to make models that inform decisions, to forecast, to optimize, to understand, to further science, to better business, to understand what features of something are truly fundamental to decision making or that impact whatever it is we are studying. But what is often missing in our collections of data (our datasets), is the connectedness, or relationships between the things that we are studying. 

Graph databases allow us to capture these relationships and use them to derive new insights and visualize data in a more meaningful way. 

<!---## GBADs graph database use cases--->

<!---GBADs uses graph databases for 2 main purposes:
1. Master metadata management
2. Management information system (MIS) --->

### Master metadata management

To understand more about metadata, how it is used, and why it is very important see the [metadata section](#techdatastds) of this handbook.

We use graph databases to understand the flow of 

Datasets can be related in many different ways. Two different datasets, from different sources might be connected in terms of their descriptive properties such as the 

- while different datasets can have different metadata contents, there is always relationships that can connect datasets to others.
- graph databases leverage this idea by..
