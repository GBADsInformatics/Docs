---
sidebar_position: 9
---

# Metadatenspeicherung: Graph-Datenbanken in GBADs

```{Epigraph}
"Alles Wissen steckt in Verbindungen"

-- [David Rumelhart](https://en.wikipedia.org/wiki/David_Rumelhart)
```

GBADs Informatics verwendet [neo4j](https://neo4j.com/), ein Graphdatenbank-Verwaltungssystem, um Metadaten und Informationen über Einzelpersonen und Gruppen, die am Projekt beteiligt sind, zu verwalten und zu speichern. Wie Sie in diesem Abschnitt lernen werden, ist eine Graphdatenbank ein Datenbanktyp, der die Idee von Verbindungen zwischen Entitäten als Methode nutzt, um Erkenntnisse und neues Wissen aus ansonsten nicht verbundenen Daten abzuleiten.

***In diesem Abschnitt erklären wir Ihnen, was eine Graphdatenbank ist, wie sie verwendet werden kann, sprechen über One-Health-Forschung als verbundene Entität und skizzieren die Anwendungsfälle der Graphdatenbank von GBAD.***

```{Ermahnung} Lernziele
* Die Leser sollten verstehen, was eine Graphdatenbank und ein Graphmodell sind
* Leser sollten den Metadaten-Anwendungsfall für Graphdatenbanken in GBADs verstehen
* Die Leser sollten die Idee von Verbundenheit und Daten verstehen
```



## Was ist eine Graphdatenbank?

```{margin} Was sind relationale Datenbanken?
Traditionell werden Daten in einer Reihe von Tabellen organisiert. Jede der Tabellen hat Spalten, und einige Tabellen haben gemeinsame Spalten. Mit diesen gemeinsamen Spalten können Sie Verknüpfungen zwischen Tabellen angeben, was zu einer neuen Tabelle führt.

Der größte Vorteil relationaler Datenbanken ist die Möglichkeit, gemeinsame Tabellen zu verknüpfen, um Erkenntnisse abzuleiten. Andererseits erfordern relationale Datenbanken starre Schemata, die von Datenbankingenieuren verlangen, ihre Daten so zu strukturieren, dass sie in das Schema passen. Dies geht mit der Annahme einher, dass wir bereits wissen, wie alle unsere Daten aussehen, was für die Forschung nicht immer der Fall ist.

```

Eine Graphdatenbank ist eine Art Datenbank, die Daten unter Verwendung von Beziehungen zwischen Hauptideen oder Entitäten speichert. Die Beziehungen zwischen verschiedenen Entitäten zeigen Verbundenheit, sodass mehr Erkenntnisse gewonnen werden können als mit einer herkömmlichen relationalen Datenbank. Da Daten in Bezug auf Struktur, Herkunft, Governance, Sicherheit und Semantik hochkomplex und mehrdimensional sind, verwendet GBADs Graphdatenbanken für die Verwaltung von Master-Metadaten und die Datenkatalogisierung. Indem wir die dynamische Natur der Diagrammdatenbank nutzen und unser **Diagrammmodell** so strukturieren, dass ein besseres Verständnis der vielen Dimensionen von Daten ermöglicht wird, können wir sowohl visualisieren als auch verstehen, wie Daten außerhalb und innerhalb unseres Unternehmens fließen. Graphdatenbanken ermöglichen es uns auch, die Struktur hinzuzufügen und zu ändern, wenn sich die Struktur der Informationen über Daten ändert. Dies wird deutlicher, wenn wir das vorläufige GBADs-Grafikdatenmodell vorstellen.


### Teile einer Graphdatenbank

Graphdatenbanken bestehen aus **Knoten** (Entitäten) und **Kanten** (Beziehungen). Knoten können Eigenschaften und Beschriftungen haben, während Kanten als Verbindung oder Beziehung zwischen Knoten dienen.

Ein Diagrammmodell ist ein Modell dafür, welche Arten von Knoten Sie darstellen und wie sie verbunden sind (welche Beziehungen Sie haben werden).

![Grafikmodell](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/20210719_GBADs_GraphModel.png)

**Forschung und Konnektivität**

Forschung und Modellierung bauen auf den Daten auf, die wir sammeln, um die Welt um uns herum zu verstehen. Wir verwenden die Daten, um Erkenntnisse zu gewinnen, die Entscheidungen treffen, oder um Modelle zu erstellen, die Entscheidungen informieren, um Prognosen zu erstellen, zu optimieren, zu verstehen, die Wissenschaft voranzubringen, das Geschäft zu verbessern, um zu verstehen, welche Merkmale von etwas wirklich grundlegend für die Entscheidungsfindung oder diese Auswirkung sind was auch immer wir studieren. Aber was in unseren Datensammlungen (unseren Datensätzen) oft fehlt, ist die Verbundenheit oder Beziehung zwischen den Dingen, die wir untersuchen.

Graphdatenbanken ermöglichen es uns, diese Beziehungen zu erfassen und sie zu nutzen, um neue Erkenntnisse abzuleiten und Daten sinnvoller zu visualisieren.

<!---## Anwendungsbeispiele für GBADs-Grafikdatenbanken--->

<!---GBADs verwendet Graphdatenbanken für 2 Hauptzwecke:
1. Master-Metadatenverwaltung
2. Management-Informationssystem (MIS) --->

### Master-Metadatenverwaltung

Um mehr über Metadaten zu erfahren, wie sie verwendet werden und warum sie so wichtig sind, lesen Sie den Abschnitt [Metadaten](#techdatastds) dieses Handbuchs.

Wir verwenden Graphdatenbanken, um den Fluss von zu verstehen

Datensätze können auf viele verschiedene Arten verknüpft werden. Zwei unterschiedliche Datensätze aus unterschiedlichen Quellen können hinsichtlich ihrer beschreibenden Eigenschaften miteinander verbunden werden, z

- Während verschiedene Datensätze unterschiedliche Metadateninhalte haben können, gibt es immer Beziehungen, die Datensätze mit anderen verbinden können.
- Graphdatenbanken nutzen diese Idee, indem sie..
