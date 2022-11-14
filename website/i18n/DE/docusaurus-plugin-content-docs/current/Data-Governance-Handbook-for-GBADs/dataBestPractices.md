---
sidebar_position: 11
---
# Organisieren von Daten in Tabellenkalkulationen

```{Epigraph}
"Müll rein, Müll raus"
```

Wenn Sie dies lesen, verbringen Sie wahrscheinlich viel Zeit damit, sich mit Daten zu befassen. Sie können es sammeln, reinigen, modellieren, teilen, versuchen, es zu interpretieren, und dann das Ganze noch einmal machen. Wenn Sie Daten von einem Kollegen erhalten, versuchen Sie möglicherweise, sie erneut zu bereinigen (auch wenn sie bereits bereinigt wurden), versuchen, sie zu interpretieren, und müssen möglicherweise sogar mehrere E-Mails schreiben, um die Daten zu interpretieren.

**In diesem Teil des Handbuchs erfahren Sie, wie Sie Ihre Daten besser in Tabellenkalkulationen organisieren können, um qualitativ hochwertigere Daten zu erstellen, die zu qualitativ hochwertigeren Modellen führen. Wir definieren auch einige Standardpraktiken für die Eingabe von Daten bestimmter Typen, einschließlich Datumsangaben und langen Zahlen.**

### Tabellenkalkulationen und Datensätze

Tabellenkalkulationen, wie sie in Microsoft Excel und Google Sheets erstellt wurden, sind üblich, um Daten aus der Forschung zu speichern, einzugeben, zu teilen und zu manipulieren. Tabellenkalkulationen werden häufig geteilt, um Forschungsergebnisse zu kommunizieren, und als Eingabedaten für Modelle oder statistische Analysen verwendet. Obwohl Tabellenkalkulationen ein integraler Bestandteil des Datenlebenszyklus sind, müssen sie richtig strukturiert sein, um sicherzustellen, dass keine Fehler gemacht werden, die dazu führen, dass Daten nicht wiederverwendet oder interpretiert werden können. Kleine Fehler in Tabellenkalkulationen können uns in Situationen bringen, in denen Daten schwer zu verstehen, schwer zu analysieren und zeitaufwändig zu bereinigen sind.

```{warning} Wenden Sie sich an das GBADs-Informatikteam, wenn...
Bitte wenden Sie sich an das GBADs-Informatikteam, wenn Sie ein GBADs-Mitglied sind, das viele Tabellenkalkulationen mit „unordentlichen“ Daten hat! Wir können Sie beraten und darüber nachdenken, wie Sie ein Programm erstellen, das Ihre Daten verarbeitet und in ein ordentliches Format umwandelt!
```

Die richtige Strukturierung von Daten in Tabellenkalkulationen führt dazu, dass Daten besser wiederverwendbar und interoperabel (FAIR) sind, was zu einer höheren Datenqualität und letztendlich zu einer besseren Forschung führt. Indem wir von Anfang an Tabellenkalkulationen einrichten, die in statistische Software oder Bibliotheken aufgenommen werden, können wir Verwirrung minimieren und unsere Arbeitsabläufe vereinfachen.

```{Ermahnung} Lernziele
* Die Leser sollten verstehen, wie ein Datensatz in einer Tabellenkalkulation so strukturiert wird, dass die FAIR-Datenprinzipien unterstützt werden
* Die Leser sollten verstehen, wie sie ihren Datensatz strukturieren, um die Semantik (zugrunde liegende Bedeutung) der Daten zu bewahren
* Die Leser sollten verstehen, wie Datumsangaben und lange Zahlen in Tabellenkalkulationen strukturiert werden und warum es wichtig ist, dass diese Daten maschinenlesbar sind
* Die Leser sollten verstehen, welche häufigen Fehler zu unordentlichen Datensätzen führen und wie sie vermieden werden können
```

### Datenstruktur

```{Epigraph}
„Aufgeräumte Datensätze sind alle gleich, aber jeder unordentliche Datensatz ist auf seine eigene Weise unordentlich.“

-- [Hadley Wickham](http://hadley.nz/)
```

Im Allgemeinen besteht ein aufgeräumter oder sauberer Datensatz aus Folgendem ({numref}`tidyData`) {cite}`wickham_R4DS_2017`:

````{Felder}
:Spalte: Spalte-4
:card: Grenze-2
Spalten (Variablen)
^^^
Spalten sind eine Gruppe von Zellen, die vertikal ausgerichtet sind. In Datensätzen sind Spalten Variablen, wobei jede Zelle eine Information über ein bestimmtes Attribut enthält.
---
Zeilen (Beobachtungen)
^^^
Zeilen sind eine Gruppe von Zellen, die horizontal ausgerichtet sind, wobei jede Zeile eine Beobachtung ist.
---
Zellen (Werte)
^^^
In Datensätzen ist jede Zeile eine Beobachtung und jede Zelle in dieser Zeile enthält den Wert der Spalte, in die sie fällt.
````

```{figure} /images/tidyDataWickham.png
:name: ordentlicheDaten

Regeln für einen aufgeräumten Datensatz: Spalten sind Variablen, Beobachtungen sind Zeilen und Werte sind Zellen. Bild und Bildunterschrift von {cite}`wickham_R4DS_2017`.
```

Das Festhalten an einem sauberen Datenformat ermöglicht die Wiederverwendbarkeit von Daten, gewährleistet Konsistenz (was die Datenqualität verbessert) und hilft, die zugrunde liegende Bedeutung (Semantik) jedes der Werte in der Tabelle zu verstehen. Wenn Spalten als Variablen und Zeilen als Beobachtungen vorhanden sind, wissen wir, was ein Wert bedeutet, basierend auf seiner Beziehung zu den Variablen und Beobachtungen.

FAIR-Daten sind ordentliche Daten – ordentliche Daten sind von Natur aus wiederverwendbar und interoperabel. Aufgeräumte Daten sind besser auffindbar, da Header gut definiert sind, was die Erstellung von Metadaten erleichtert. Grundsätzlich können wir aus aufgeräumten Daten mehr Informationen ziehen.

### Speichern von Tabellenkalkulationen

Datensätze in Tabellenkalkulationen können als Excel-Datei oder im Format „.csv“ (kommagetrennte Werte) oder „.txt“ gespeichert werden. Die beiden letzteren werden bevorzugt, da sie einfacher in Programmierbibliotheken in R und Python einzulesen sind.

### Standardkonvention für Datum und Uhrzeit

Ohne eine Standardkonvention können Datumsangaben viel Mehrdeutigkeit aufweisen. Beispielsweise könnte 11.01. als Januar 2011, November 2001 oder 1. November interpretiert werden. Aus diesem Grund ist es wichtig, einen international anerkannten Datumsstandard zu verwenden, damit wir unsere Daten zuverlässig verstehen können.

GBADs verwenden den Standard [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) für Datumsangaben. ISO 8601 ist ein international anerkannter Standard, der den [gregorianischen Kalender](https://en.wikipedia.org/wiki/Gregorian_calendar) verwendet.

Daten werden dargestellt als:
- JJJJ-MM-TT oder JJJJMMTT

Der ISO 8601-Standard verwendet das 24-Stunden-Format. Zeiten können daher eingegeben werden als:

- T[hh:mm:ss]

oder wenn Sekunden nicht anwendbar sind:

- T[hh:mm]

und wenn Protokolle nicht anwendbar sind:

- T[hh]

Da GBADs eine globale Organisation ist, ist es wichtig, Zeitzonen anzugeben, wenn Sie die Zeit in Tabellenkalkulationen eingeben. Zeitzonen werden nach dem Datum angegeben, indem angegeben wird, wie weit die Zeitzone von UTC zurück- oder vorausliegt.

Zum Beispiel:
Samstag, 10. Juli 2021 um 13:48 EDT wird als 2021-07-10T13:48-4:00 geschrieben

```{Ermahnung} Verschiedene Kalender für verschiedene Länder
:klasse: Tipp

Beachten Sie bei der Analyse von Datensätzen aus verschiedenen Ländern, dass nicht alle Teile der Welt den gregorianischen Kalender verwenden.

Beispielsweise verwendet Äthiopien den äthiopischen Kalender, der sich vom gregorianischen Kalender unterscheidet. Damit liegt Äthiopien 7 Jahre hinter dem in Europa und Nordamerika verwendeten Kalender zurück. [Hier](https://melaku.ml/) ist ein Tool, mit dem Sie vom gregorianischen in den äthiopischen Kalender konvertieren können.
```

### Konventionen für große Zahlen

Je nach Land gibt es unterschiedliche Konventionen für große Zahlen.

Beispielsweise kann die Nummer 133333.450 auf verschiedene Arten dargestellt werden:

In englischsprachigen Ländern könnte die Nummer so aussehen:
- 133.333.450

In nicht englischsprachigen Ländern wie folgt:
- 133.333.450

Also - die gleiche Nummer, aber auf 3 verschiedene Arten dargestellt. Dies lässt viel Interpretationsspielraum, zumal beim Einlesen der meisten Dateien in statistische Programmiersprachen standardmäßig davon ausgegangen wird, dass ein Komma eine neue Spalte angibt. Und da ein Großteil der Arbeit von GBADs auf Programmiersprachen wie R und Python beruht, ist es wirklich wichtig, unsere Zahlen so zu strukturieren, dass sie auch von Maschinen leicht eingelesen und interpretiert und gelesen werden können!

Der Übersichtlichkeit halber sollten wir unsere großen Zahlen **ohne** Kommas strukturieren und Punkte für die Angabe einer Dezimalstelle reservieren.


```{Ermahnung} Wenn Sie ein Komma sehen, wo Sie denken, dass es nicht sein sollte...
:klasse: Tipp

Wenn Ihnen die Formatierung großer Zahlen unklar ist, fragen Sie den Dateneigentümer um Klärung! Wenn der Dateneigentümer Teil des GBADs-Programms ist, schlagen Sie ihm sanft vor, die vom Programm verwendeten und festgelegten Standards zu verwenden (Sie könnten dieses Kapitel sogar mitschicken).

```

### Dateinamenskonvention

Bei der Benennung von Dateien sollten Sie konsistent und aussagekräftig sein, Zeichen und Leerzeichen vermeiden und das Datum angeben (vorzugsweise unter Verwendung eines Standards wie [ISO 8601](https://www.iso.org/iso-8601-date-and- time-format.html) Aus Gründen der Dateinamenskonvention lassen wir die Bindestriche zwischen JJJJ-MM-TT weg.

**Beispiele für gute Dateinamenskonventionen:**

Beim Umgang mit Daten, die von Organisationen heruntergeladen wurden:
* YYYYMMDD_organization_topic_species_country
* 20210617_FAO_ProductionPrices_Poultry_Ethiopia.csv
* 20210617_WorldBank_LSMS_Ethiopia.csv

Wobei JJJJMMTT das Datum ist, an dem Sie die Datei heruntergeladen haben.

Wenn es sich um eine Metadatendatei handelt, sollten Sie die Datei mit „Metadaten“ und dem Dateinamen wie oben benennen, um zu wissen, welche Metadatendatei dem richtigen Datensatz entspricht. Zum Beispiel:

* 20210617_FAO_ProductionPrices_Poultry_Ethiopia_metadata.csv
* 20210617_WorldBank_LSMS_Ethiopia_metadata.csv

**Beispiele schlecht benannter Dateien:**
* FAO-Produktionspreise – heruntergeladen von Kassy am 25. April.csv
* Äthiopische Produktionspreise von fao stat website.csv
* ETHPRODPRICES_GOODCOPY.csv

```{Ermahnung} Daten zuerst
:klasse: Tipp

Wenn Sie das Datum in einer Datei an erster Stelle setzen, können Sie Dateien in einem Verzeichnis oder Ordner einfach nach aufsteigendem oder absteigendem Datum organisieren.

```

### Häufige Fehler

Formatierungen, Hervorhebungen und Fettdruck sollten vermieden werden. Hier ist der Grund, warum das Verschönern von Tabellenkalkulationen Kopfschmerzen im Lebenszyklus der Datenanalyse verursacht:

#### 7 häufige Fehler, die Tabellenkalkulationen unordentlich machen

1. Mehrere Tabellen in einer Tabelle
2. Schlechte Nullwerte (eine Null bedeutet nicht null)
3. Zellen werden zusammengeführt
4. Maßeinheiten sind in Werten anstelle von Spaltennamen enthalten
5. Formatierung wird verwendet, um Informationen darzustellen
6. Zellen enthalten mehr als eine Information
7. Standard-Datumsformat wird nicht verwendet

***1. Mehrere Tabellen in einer Tabelle***

Mehrere Tabellen in einer Tabelle zu haben, führt oft zu einer unnötigen Datenbereinigung für die weitere Datenverarbeitung. Mehrere Tabellen in einer Tabelle führen zu Verwirrung, wenn wir die Tabelle teilen oder zu einem späteren Zeitpunkt darauf zurückkommen. Wenn es sich bei einer Zeile um eine Beobachtung handelt, widerspricht das Erstellen mehrerer Tabellen dieser Vorstellung, wodurch die Qualität und die Fähigkeit zur Interpretation des Datensatzes verringert werden.

Im folgenden Beispiel, das aus fabrizierten Daten besteht, gibt es 4 Tabellen in einer einzigen Tabelle. In jeder Tabelle ist das „Element“ die Beobachtung, und die Anzahl der lebenden Tiere in einem bestimmten Jahr wird gemessen. Aufgrund der Art und Weise, wie die Tabelle eingerichtet ist, ist es jedoch schwierig festzustellen, ob die beiden oberen Tabellen mit Kanada verknüpft sind oder ob in der rechten Tabelle eine Kopfzeile fehlt.

![MultipleTablesBad](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/20210615_dataBestPractices_MultipleTablesBAD.png)

Eine bessere Möglichkeit, die Daten einzurichten, wäre wie folgt:

![MultipleTablesGood](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/20210614_dataBestPractices_MultipleTablesGOOD.png)

Hier sehen wir, dass alle Informationen immer noch bereitgestellt werden, aber jede Zeile ist eine Beobachtung für ein bestimmtes Land, einen bestimmten Artikel und ein bestimmtes Jahr. Neben der Verbesserung der Interpretierbarkeit der Daten können diese Daten nun ohne aufwändige Datenbereinigung in eine Statistiksoftware wie R eingegeben werden.

***2. Ungültige Nullwerte***

Fehlende oder Nullwerte sollten auf eine einheitliche Weise gekennzeichnet werden, die von einem quantitativen Wert von 0 unterscheidbar ist. Auf diese Weise wird der Datensatzleser verstehen, welche Daten fehlen oder unbekannt sind und welche einen Wert von 0 haben. Das Wichtigste bei der Erfassung fehlt Werte sind Konsistenz; Wenn Sie sich entscheiden, "NA" zu verwenden, um fehlende Werte zu kennzeichnen, stellen Sie sicher, dass Sie später in der Tabelle nicht zu Kleinbuchstaben ("NA") oder "Nicht zutreffend" wechseln.

Je nach Statistiksoftware kann die Bedeutung von „NA“ variieren. Beispielsweise ist „NA“ in R ein reservierter Begriff für einen fehlenden Wert. Die Art und Weise, wie „NA“-Werte in Python dargestellt werden, variiert je nach verwendeter Bibliothek. In Pandas (einer beliebten Python-Bibliothek für Datenanalyse, Bereinigung und Wrangling) werden „NA“-Werte durch „NaN“ oder „None“ dargestellt. Solange wir jedoch bei der Eingabe und Analyse von Daten konsistent in der Art und Weise sind, wie wir „NA“-Werte darstellen, können wir je nach gewählter Statistik- oder Programmiersoftware schnell zwischen den Formaten wechseln.

***3. Zellen werden zusammengeführt***

Das Zusammenführen von Zellen widerspricht der Vorstellung, dass Zeilen Beobachtungen und jede Spalte eine Variable ist. Das Zusammenführen von Zellen verstößt nicht nur gegen diese Prinzipien, es macht es auch unmöglich, Spalten und Zeilen zu sortieren, verursacht Fehler beim Einlesen von Daten in Statistiksoftware und führt zu der Möglichkeit, Daten falsch zu interpretieren oder Informationen zu verlieren. Wenn Sie beispielsweise verbundene Zellen verwenden, um zwei Zeilen miteinander zu verknüpfen, führt dies zu Verwirrung, wenn Sie zurückkommen, um sich die Daten anzusehen. Oder wenn die zusammengeführte Formatierung verloren geht, besteht die Gefahr, dass eine ganze Beobachtung oder Variablen in einer bestimmten Beobachtung verloren gehen.

***4. Maßeinheiten sind in Werten anstelle von Spaltennamen enthalten***

Da jede Spalte eine Variable darstellt, sollten die Maßeinheiten in der gesamten Spalte konsistent sein. Daher sollten Sie gegebenenfalls die Maßeinheit in die Spaltenüberschrift aufnehmen.

***5. Formatierung wird verwendet, um Informationen darzustellen***

Das Hervorheben von Zellen und das Fett- oder Kursivschreiben von Informationen sollte vermieden werden, um Informationen in einem Datensatz darzustellen. Das ist problematisch, denn wenn die Formatierung verloren geht, gehen wertvolle Informationen verloren. Wenn Sie die durch die Formatierung artikulierten Informationen in Ihr Modell oder Ihre Analyse aufnehmen möchten, müssen Sie das Blatt in Excel bereinigen, bevor Sie es in Ihrer Software lesen können.

Wenn Sie beispielsweise Proben auf Krankheiten testen, können Sie Hervorhebungen verwenden, um zu zeigen, welche Proben positiv ausgefallen sind. Wenn die Formatierung verloren geht oder jemand den Kontext der Hervorhebung nicht kennt, gehen diese Informationen verloren.

***6. Zellen enthalten mehr als eine Information***

Wenn Zellen mehr als eine Information enthalten, schränkt dies die Analyse eines bereits vorhandenen Datensatzes ein und führt normalerweise zu einer stärkeren Datenbereinigung. Sie könnten beispielsweise Rassetypen und -zahlen in Ihrem Datensatz melden.

In diesem Fall möchten Sie die Rasse melden und in separaten Spalten wie folgt zählen:

| Rasse | Graf | Bauernhof | Zähldatum |
| :---: | :---: | :---: | :---: |
| Aberdeen-Angus | 20 | Kanadische Rinderfarmen | 01.06.2021 |
| Abergele | 60 | Kanadische Rinderfarmen | 01.06.2021 |
| Limousin | 10| Kanadische Rinderfarmen | 01.06.2021 |

Anstatt sie in derselben Zelle zu melden, wie folgt:

| AnzahlDerRasse | Bauernhof | Zähldatum |
| :---: | :---: | :---: |
| 20 Aberdeen-Angus | Kanadische Rinderfarmen | 01.06.2021 |
| 60 Abergele | Kanadische Rinderfarmen | 01.06.2021 |
| 10 Limousin | Kanadische Rinderfarmen | 01.06.2021 |


***7. Standard-Datumsformat wird nicht verwendet***

Verwenden Sie bei der Eingabe von Datumsangaben einen Standard wie [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) (JJJJ-MM-TT). So können Sie nach Datum sortieren, die Interpretierbarkeit verbessern und bei Bedarf einfach in andere Datumsformate konvertieren. Weitere Informationen zur Herangehensweise von GBADs an die Eingabe von Datums- und Uhrzeitangaben finden Sie im Abschnitt **Standardkonventionen für Datum und Uhrzeit** dieses Abschnitts.

Achten Sie außerdem darauf, bei der Verwendung von Datumsangaben anzugeben, was das Datum bedeutet. Eine Spaltenüberschrift mit dem einfachen Titel „Datum“ bietet nicht viel Kontext. Bedeutet Datum beispielsweise das Datum, an dem die Daten in die Tabelle eingegeben wurden? Das Datum, an dem eine Probe entnommen wurde? Das Datum, an dem eine Probe im Labor analysiert wurde? Stellen Sie sicher, dass andere Forscher (und Sie in Zukunft) wissen, wovon Sie gesprochen haben!

### Weiterführende Leseempfehlungen
[R für Data Science von Hadley Wickham](https://r4ds.had.co.nz/)

Autoren: Kassy Raymond und K. Marie McIntyre
