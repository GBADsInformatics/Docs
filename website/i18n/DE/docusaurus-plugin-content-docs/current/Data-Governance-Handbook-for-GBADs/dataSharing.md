---
sidebar_position: 2
---
# Datenprinzipien und Governance

## Datenamt

**Data Governance ist die Verwaltung, Speicherung, der Datenschutz, die Nutzung und Qualität von Daten und Metadaten, die von einer Organisation verwendet werden.** Data Governance ist eine mehrdimensionale Aufgabe, die von allen Personen in einer Organisation verlangt, die dokumentierten Standards und Best Practices einzuhalten für alle Elemente der Datennutzung.
Die Einhaltung einer gut dokumentierten Data-Governance-Strategie ermöglicht eine verbesserte Datennutzung durch die Möglichkeit, Datenbestände in vollem Umfang zu nutzen.

### Grundlagen der Data Governance

Während es bei Data Governance um die Daten geht, geht es auch um die Menschen, Prozesse und die Sicherheit der Daten.

**Datenverwaltung und Menschen**
Alle Personen, die Daten erstellen, verwenden, verbreiten oder verwalten, sind Teil der Data-Governance-Strategie und sollten diese einhalten.

**Datenverwaltung und -sicherheit**

**Datenverwaltung und -prozesse**

Data-Governance-Begriffe, die Sie kennen sollten:
- Datenverwalter
- Datenintegration
- Datenherkunft
- Datenwissenschaft



#### Mehr zum Thema Data Governance
**Blogeinträge**
- https://towardsdatascience.com/what-we-got-wrong-about-data-governance-365555993048



## Datenprinzipien

Um Daten bereitzustellen und zu erstellen, die ihr volles Potenzial ausschöpfen können, ist GBADs bestrebt, Daten und Metadaten bereitzustellen, die **auffindbar, **zugänglich, **interoperabel, **verwendbar sind und **S**sicher (FAIR(S)).

```{Rand}
Die '[FAIR Guiding Principles for scientific data management and stewardship](https://www.nature.com/articles/sdata201618)' wurden 2016 in *Scientific Data* veröffentlicht. Seit seiner Veröffentlichung wurde der Artikel über 4500 Mal zitiert Zeiten und es gab Bemühungen, die FAIR-Prinzipien in verschiedenen Bereichen umzusetzen und zu akzeptieren. Dazu gehört die [GO FAIR Initiative](https://www.go-fair.org/go-fair-initiative/go-fair-offices/), die Gruppen, die versuchen, ihre Daten FAIR zu machen, Ressourcen zur Verfügung stellt.
```

<!--GBADs ist bestrebt, (Meta-)Daten bereitzustellen, die den FAIR(S)- und CARE-Prinzipien entsprechen, und wird eine modifizierte Version der GATHER-Erklärung und -Checkliste übernehmen, um gegebenenfalls detailliertere Metadaten zu erstellen.

Indem wir bereits vorhandene Standards verwenden und darauf aufbauen, werden wir ein interoperables System aufbauen, das andere Forscher verstehen und auf dem sie aufbauen können. -->

### FAIRe Prinzipien und Datenkultur

Die Idee der „FAIR“-Daten wurde 2014/15 entwickelt, um die Wiederverwendung, Nutzbarkeit, Auffindbarkeit und Interoperabilität von Forschungsdaten zu lenken. Das Akronym „FAIR“ steht für Auffindbarkeit, Zugänglichkeit, Interoperabilität und Wiederverwendbarkeit von Datenbeständen, einschließlich der Daten selbst und der Metadaten, die zu ihrer Beschreibung verwendet werden (siehe Anhang A für eine Aufschlüsselung der einzelnen FAIR-Prinzipien). Die Idee der FAIR-Daten ist seitdem gewachsen und wurde vielfach genutzt, angepasst und ausgebaut.
Im Jahr 2020 schlug GBADs Informatics „FAIR(S)“-Daten vor, um den FAIR-Leitprinzipien ein Sicherheitselement hinzuzufügen.

Ursprünglich für die Wiederverwendung von Forschungsdaten geschaffen, ist die Idee von FAIR gewachsen und kann auf offene und private Datenquellen angewendet werden. GBADs werden FAIR-Daten als Systemkonzept anpassen und FAIR-Datenobjekte erstellen. Das FAIR-Datenökosystem (Abbildung 1) wird als Skelettstruktur unseres Datenökosystems verwendet. Dieses Dokument fungiert als Datenmanagementplan, in dem jede Komponente des FAIR-Datenökosystems in Bezug auf die Strukturierung von FAIR-Datenobjekten und die Definition der Verwendung von Daten, die durch unser System fließen, angesprochen und diskutiert wird.


```{figure} /images/fairDataObj.png
:name: fairDataObj

```

Ein weit verbreitetes Missverständnis bei der Annahme von FAIR-Sharing-Prinzipien ist, dass FAIR vorschlägt, dass Daten standardmäßig „offen“ sein sollten; FAIR schlägt jedoch tatsächlich vor, dass Daten „so offen wie möglich, so geschlossen wie nötig“ sein sollten [Jones et al, 2018]. Für GBADs bedeutet dies, die FAIR-Prinzipien durch CARE zu ergänzen, was später in diesem Dokument ausführlicher erörtert wird. Eine Schlüsselkomponente dabei wird die Identifizierung verschiedener Arten von Datennutzern und -mitwirkenden sein.

Die Sicherstellung, dass Metadaten in einer standardisierten Form vorliegen, ermöglicht GBADs die Einhaltung von FAIR und dient als Rückgrat für unser System, das in die Fähigkeit einfließt, Ressourcen basierend auf standardisierten Begriffen zu suchen und zu finden. Daher wird Wert auf gut definierte Metadatenattribute und -definitionen gelegt.

![cloudReg](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/cloudOfRegistries.png)

GBADs ist bestrebt, FAIR nicht nur im System anzupassen, sondern auch eine Kultur mit unserem Unternehmen zu schaffen, die die Verwendung von FAIR in den Forschungsdaten der am größeren GBADs-Projekt beteiligten Wissenschaftler inspiriert. Wir glauben, dass diese Verschiebung eine bessere Nutzung und Wiederverwendung von Daten ermöglichen wird, was eine Zusammenarbeit und eine bessere Zuweisung von Ressourcen ermöglicht.

### CARE-Prinzipien

Zu den CARE-Prinzipien gehören: Kollektiver Nutzen, Kontrollbefugnis, Verantwortung und Ethik. Jeder Grundsatz bezieht sich auf die Nutzung und Verwaltung von Daten, die indigenen Völkern gehören oder mit ihnen in Verbindung stehen, ihr Land, ihr Kulturgut und ihre Praktiken [refs] und ist in Anhang B in Kategorien unterteilt. CARE-Prinzipien werden in jedem Schritt der GBADs-Daten berücksichtigt Governance-Strategie und Design des Datenportals.

Wir erkennen an, dass unsere Interpretationen der CARE-Prinzipien möglicherweise nicht vollständig die wahren Interessen indigener Völker und Gruppen widerspiegeln, da das GBADs-Informatikteam derzeit keine indigenen Mitarbeiter oder Partnerschaften mit indigenen Völkern hat. Wenn offizielle Kooperationen mit indigenen Völkern und Gruppen geschaffen wurden, werden Strategien und Designs entwickelt und weiter verfeinert, um sicherzustellen, dass alle indigenen Daten zum kollektiven Nutzen der indigenen Völker verwaltet, verwaltet und genutzt werden.

### GATHER-Richtlinien

GATHER, oder die Guidelines for Accurate and Transparent Health Estimates Reporting, definiert bewährte Berichterstattungsverfahren für Studien, die Gesundheitsschätzungen berechnen. GATHER hat drei Kerndokumente: die GATHER-Erklärung [refs], die GATHER-Checkliste und die GATHER-Erklärung und -Ausarbeitung [ref]. Während GBADs Gesundheitsschätzungen generieren werden, werden wir GATHER als Ausgangspunkt und nicht als Endpunkt verwenden, da die Gesundheit die von Nutztieren und nicht von Menschen ist (wofür GATHER entwickelt wurde). In Anhang C finden Sie die GATHER-Checkliste und eine vorläufige Bewertung, welche Punkte sich auf GBADs beziehen.



