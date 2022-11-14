---
sidebar_position: 8
---

# Data-Benutzerhandbuch

Das [GBADs-Datenportal](http://gbadske.org:8050/dash/page-1/) ist ein Prototyp-Dashboard, das Benutzern den Zugriff auf Datensätze von [FAOSTAT](http://www.fao.org/faostat /en/) und [OIE WAHIS](https://wahis.oie.int/). Der Prototyp ermöglicht es Ihnen, interessante Daten auszuwählen, sie in Balkendiagrammen zu visualisieren, die Daten im `.csv`- und `.json`-Format herunterzuladen und den API-Aufruf (Application Programming Interface) anzuzeigen.

```{Rand}
**Was ist „.json“?**

[JSON](https://en.wikipedia.org/wiki/JSON) steht für JavaScript Object Notation. JSON ist ein Dateiformat, das Daten in einem strukturierten Standardformat speichert, sodass Daten sowohl für Menschen als auch für Maschinen lesbar sind. JSON-Daten können in alle Programmiersprachen eingelesen und in „Excel“ geparst werden. JSON-Daten sind lesbar und einfacher zu parsen als andere Dateiformate wie [XML](https://en.wikipedia.org/wiki/XML).

```

````{Rand}
```{Ermahnung} Wir möchten von Ihnen hören!
:klasse: Tipp

Bitte beachten Sie, dass diese Seite aktualisiert wird, wenn wir unser Datenportal weiter verbessern und Zugang zu weiteren Datenquellen erhalten. Wir freuen uns über Feedback, was Ihnen am System gefällt, was Sie sehen möchten und was Ihrer Meinung nach klarer sein könnte!
```
````

```{Ermahnung} Lernziele
* Die Leser sollten verstehen, was eine API ist, wie sie funktioniert und warum GBADs APIs verwendet
* Leser sollten verstehen, wie man die GBADs-API verwendet, um FAOSTAT- und OIE WAHIS-Daten zu erhalten
* Die Leser sollten verstehen, wie sie die GBADs-API verwenden, um Daten in ihre „R“- und „Python“-Programme einzulesen
```

## Erste Schritte mit unserer API

### Was ist eine API?

Eine Anwendungsprogrammierschnittstelle (API) ist eine Maschine-zu-Maschine-Methode, um einen Server nach Daten zu fragen, den Server dazu zu bringen, die Daten abzurufen und zu interpretieren und sie an Ihre Maschine zurückzugeben. APIs sind überall; Sie ermöglichen es Anwendungen, miteinander zu „sprechen“. Wenn Sie beispielsweise das Wetter in einer Wetter-App überprüfen, verwendet die App eine API, um die Daten abzurufen und auf Ihrem Telefon in einer verwendbaren und interpretierbaren Weise darzustellen. APIs stellen die aktuellsten Daten bereit, ohne dass Daten auf Ihrem eigenen Computer gespeichert werden müssen.

Für die Datenanforderungen von GBADs funktionieren APIs wie folgt:
1. Sie/Ihr Programm fordert Daten über den API-Aufruf an
2. Der Webserver durchsucht seine interne Datenbank nach den von Ihnen angeforderten Daten
3. Die Datenbank gibt dem Server die Daten, die Sie angefordert haben
4. Die Daten werden an Sie/Ihr Programm zurückgegeben

### Ihr Workflow und Ihre APIs

Um das Konzept einer API ausführlicher zu erläutern, werden wir den allgemeinen Arbeitsablauf für den Zugriff auf Daten für die Modellierung erörtern und erläutern, wo APIs ins Spiel kommen.

**Manuelle Datenerfassungsmethode**

Wenn Sie in Ihrem aktuellen Workflow keine APIs verwenden, besteht der Zugriff auf Daten wahrscheinlich darin, zu einem Datenportal oder einer Datenquelle zu navigieren, den Datenkatalog zu durchsuchen oder nach einem Datensatz von Interesse zu suchen und die Daten dann herunterzuladen. Jedes Mal, wenn die Daten aktualisiert werden, müssen Sie den Vorgang wiederholen, die Daten finden, sie erneut herunterladen, die Datei in Ihr Modell importieren und mit den aktualisierten Zahlen erneut ausführen. Während dieser Workflow funktioniert, kann die Verwendung von APIs die manuelle Arbeit des Aufrufens der Website und des Abrufens der Daten jedes Mal, wenn Sie sie benötigen, eliminieren.

Wenn Sie mit der Website interagieren, um die gewünschten Daten zu erhalten, interagieren Sie wahrscheinlich indirekt mit einer API, die im Backend arbeitet, um die von Ihnen ausgewählten Daten abzurufen und auf der Webseite anzuzeigen. Sie können jedoch einen **API-Aufruf** verwenden, um Daten von dem Server anzufordern, auf dem sich die interessierenden Daten befinden {numref}`APIcall`.

```{Rand}
Ein **API-Aufruf** ist die Art und Weise, wie Sie einen Server nach Daten fragen.
```

**Verwenden von APIs zum Abrufen von Daten**

Anstatt Daten jedes Mal manuell von einer Website herunterzuladen, können Sie API-Aufrufe in Ihren Arbeitsablauf integrieren, um die aktuellsten Daten von der Quelle anzufordern. Dadurch können Sie Code erneut ausführen, ohne Ihren Code ändern zu müssen.

```{figure} /images/API.png
:name: APIaufruf

Einfache Aufschlüsselung der Funktionsweise einer API.
```


<!--Wenn Sie noch nie eine Anwendungsprogrammierschnittstelle (API) verwendet haben, keine Panik! Sie sind an der richtigen Stelle. Bevor wir uns mit der Verwendung unserer API befassen, erklären wir, warum wir der Meinung sind, dass Menschen die API-Nutzung übernehmen sollten, und was eine API überhaupt ist.

Sie haben vielleicht schon einmal von einer API gehört und gedacht, was ist überhaupt eine API? Wenn "API" gegoogelt wird, werden Sie oft mit Fachjargon und Schlagworten überschwemmt - oder Informationen, die auf Softwareentwickler und technische Abteilungen zugeschnitten sind. APIs sind jedoch äußerst wertvoll für jeden, der aktiv eine Website aufruft und Daten von ihr herunterlädt. Durch die Verwendung einer API können Sie Ihren Computer dazu bringen, mit einem Webserver zu kommunizieren und nach den Daten zu fragen, ohne auf diese Website zu gehen und diese Daten selbst herunterzuladen. Zum Beispiel können Sie jetzt zum Datenportal der Weltbank gehen, indem Sie zur Website navigieren, den Datenkatalog durchgehen oder nach dem Datensatz Ihres Interesses suchen und die Daten dann herunterladen. Sicherlich ist diese manuelle Methode eine gültige Möglichkeit, mit einem Webserver zu interagieren und es Ihnen zu ermöglichen, die gewünschten Daten zu erhalten. Sie müssen jedoch nicht auf diese manuelle Weise mit einer Website interagieren, um die gewünschten Daten zu erhalten. APIs ermöglichen es Ihnen, die Website aufzurufen und die gewünschten Daten anzufordern, ohne durch eine Website navigieren (oder sogar Ihren Webbrowser öffnen zu müssen). Und wie Sie erfahren werden, müssen Sie keinen umfangreichen Programmierhintergrund haben, um eine API zu verwenden! --->

<!--API-Aufrufe erfolgen über den Unique Resource Identifier (URI) der API. Einfach ausgedrückt ist ein URI etwas, das die API deutlich von anderen APIs unterscheidet. Sie können sich einen URI als etwas vorstellen, das etwas von allen anderen Dingen unterscheidet. Beispielsweise ist Ihre Sozialversicherungsnummer Ihre URI, die es der Regierung ermöglicht, Sie von anderen Bürgern zu identifizieren. Ebenso stellen Sie möglicherweise fest, dass niemand die gleiche E-Mail-Adresse wie Sie hat. Eine E-Mail-Adresse ist auch eine URI! -->

Sobald Sie diesen „API-Aufruf“ haben, können Sie ihn einfach in das Programm Ihrer Wahl eingeben und Ihre Arbeitsabläufe automatisieren und auf die Daten zugreifen, ohne jedes Mal Datenkataloge durchsuchen zu müssen. APIs basieren auf HTTP-Protokollen und bieten ein weiteres Plus: Sie können APIs mit praktisch jeder Programmiersprache verwenden, einschließlich R und Python, die bei unseren derzeitigen Benutzern am beliebtesten sind. Anstatt jedes Mal Datendateien in Ihr R- oder Python-Programm zu laden, können Sie einfach direkt in Ihrem Programm auf die API zugreifen. Ein zusätzlicher Vorteil besteht darin, dass Sie dadurch Ihre Programme erneut ausführen können, ohne jedes Mal Daten von Ihren Quellen herunterladen zu müssen, wenn diese Quelle aktualisiert oder geändert wird.

Einige Datenquellen, die GBADs verwendet, wie FAOSTAT und die Weltbank, verfügen über APIs, die zum Abrufen von Daten verwendet werden können. GBADs übernimmt jedoch die API-Verwaltung, indem es eine API entwickelt, die Daten von anderen APIs anfordern kann ({numref}`GBADsAPI`).

```{figure} /images/GBADsAPI.png
:name: GBADsAPI

Überblick über die API-Infrastruktur von GBADs. Die GBADs-API kann mit verschiedenen anderen offenen APIs kommunizieren, um auf Daten aus anderen Datenspeichern wie FAOSTAT zuzugreifen. Die GBADs-API ermöglicht auch das Anfordern von Daten aus dem GBADs-Datenspeicher. Benutzer können über einen API-Aufruf an die GBADs-API auf Daten aus verschiedenen Quellen zugreifen.
```

````{Rand}
```{Ermahnung} Spezielle Zugangsdaten
:klasse: Tipp

_Bitte beachten Sie, dass einige Daten nicht öffentlich zugänglich sind und daher nicht allen Benutzern zur Verfügung stehen_. Siehe [das Kapitel über Datenlizenzen, Datenschutz und Sicherheit](http://www.gbadske.org/Documentation/DataGovernanceHandbook/dataOwnership.html) für weitere Informationen darüber, wie GBADs mit vertraulichen und sensiblen Daten umgehen.
```
````


### Verwenden der GBADs-API

Sie können unsere ausführlichere API-Dokumentation [FIXME hier] einsehen. Dieser Abschnitt zeigt Ihnen jedoch die Grundlagen der Verwendung unserer API zum Abrufen einiger Daten.

Wir werden zwei Beispiele für API-Aufrufe an die GBADs-API bereitstellen. Eine in Python und eine in R. In beiden Beispielen verwenden wir denselben API-Aufruf, der Ihnen den Aktienpreis von Hühnern in Äthiopien von 2005 und 2018 von der FAO gibt. Unser API-Aufruf für diese Art von Daten lautet: [http://35.183.203.15:8000/gbads/LiveAnimals/?year_start=2005&year_end=2018&element=Stocks&item=Chickens](http://35.183.203.15:8000/gbads/LiveAnimals /?year_start=2005&year_end=2018&element=Aktien&item=Hühner)

```{Rand}
Sie werden feststellen, dass Sie, wenn Sie den API-Aufruf direkt in Ihren Browser stellen, zu einer Seite mit den Daten im JSON-Format gelangen. Sie werden auch feststellen, dass der API-Aufruf die Kategorie (Lebende Tiere), das Start- und Endjahr, das Element, das die Aktienkurse darstellt, und den Artikel Hühner angibt. Derzeit unterstützt unser Portal nur den Abruf äthiopischer Daten, da dies der Schwerpunkt unserer Pilotstudie ist.
```

```{Anmerkung}
Wir entwickeln unsere Metadaten-API noch weiter.
```

In unserem Python-Anwendungsfall benötigen Sie drei heruntergeladene Bibliotheken: „json“, „requests“ und „pandas“.

```{Codezelle} ipython3
json importieren
Anfragen importieren
pandas als pd importieren
seegeboren als sns importieren
matplotlib.pyplot als plt importieren

# API-Aufruf erstellen
apiCall = "http://15.223.72.239:8000/gbads/LiveAnimals/?year_start=2005&year_end=2018&element=Stocks&item=Hühner"

Antwort = Anfragen.get(apiCall).json()

# Drucken Sie die Antwort aus, damit wir sehen können, was wir bekommen haben.
drucken (Antwort)
```

In einigen Fällen möchten Sie Ihre Antwort möglicherweise in einen „Pandas“-Datenrahmen konvertieren, das Ergebnis visualisieren oder das Ergebnis in einer CSV-Datei speichern. Im Folgenden zeigen wir Ihnen, wie Sie Folgendes erreichen können:

```{Codezelle} ipython3
# Erstellen Sie Pandas-Datenrahmen aus der API-Antwort
Antwort = pd.DataFrame (Antwort)

# Was ist unser Ergebnis? Drucken Sie die ersten 10 Zeilen des Datenrahmens.
print(response.head(10))
```

Bevor wir fortfahren und diese Daten grafisch darstellen, können wir „Pandas“ verwenden, um einen allgemeinen Überblick über die Daten zu erhalten, die wir vom API-Aufruf erhalten haben.

```{Codezelle} ipython3
# Welche Spalten haben wir?
print(response.columns)
```

Wir können auch Zusammenfassungen der Spalten sehen:

```{Codezelle} ipython3
Antwort.beschreiben()
```

```{Codezelle} ipython3
# Grafikzeit!
response.plot.scatter(x='Jahr',
y='Wert',
c='Dunkelblau')
```
Und zum Spaß visualisieren wir eine lineare Beziehung durch die lineare Regressionsfunktion von `seaborn`. Die Funktion liefert eine Regressionslinie in einem Diagramm mit einem Konfidenzintervall von 95 %.

```{Codezelle} ipython3

ax = sns.regplot(x="Jahr", y="Wert", data=response)

# Achsenbeschriftungen festlegen
ax.set(xlabel='Jahr', ylabel='Anzahl lebender Tiere (1000 Stück)')

# Füge einen Titel hinzu
plt.title("Anzahl der lebenden Hühner in Äthiopien")

# Ergebnis anzeigen
plt.show(ax)

```

Wie Sie sehen können, haben wir mit sehr wenig Arbeit die Daten aus der API gesammelt, in einen „Pandas“-Datenrahmen konvertiert und eine Regression gezeichnet.

Wir könnten die Daten auch graphisch darstellen und visualisieren, welche Punkte offiziellen Daten entsprechen und welche imputiert wurden:

```{Codezelle} python3
# Unterschiedliche Farben für die Flaggenbeschreibungen
sns.scatterplot(x="Year", y="Value", hue="Flag Description", data=response)

# Achsenbeschriftungen festlegen
ax.set(xlabel='Jahr', ylabel='Anzahl lebender Tiere (1000 Stück)')

# Füge einen Titel hinzu
plt.title("Anzahl der lebenden Hühner in Äthiopien")

# Ergebnis anzeigen
plt.show(ax)

```


Wenn Sie daran interessiert sind, die Daten einfach aus der API zu sammeln und als CSV-Datei zu speichern, können Sie dazu den folgenden Code verwenden.

```
json importieren
Anfragen importieren
pandas als pd importieren

# API-Aufruf erstellen
apiCall = "http://15.223.72.239:8000/gbads/LiveAnimals/?year_start=2005&year_end=2018&element=Stocks&item=Hühner"

Antwort = Anfragen.get(apiCall).json()

# Datenrahmen codieren/decodieren, um ihn im csv-Format zu erhalten
response = response.to_json(orient='split')
Antwort = pd.read_json(Antwort,orient='split')

# Name der Ausgabedatei. Ersetzen Sie dies durch den Pfad, an dem Sie die Datei speichern möchten, und den Dateinamen.
outfile = 'Pfad/zu/outfile/outfilename.csv'

# Mit Pandas in Outfile speichern
response.to_csv(outfile, index=False)
```

Hier ist unsere R-Implementierung:

Sie müssen sicherstellen, dass Sie die R-Pakete „httr“ und „jsonlite“ heruntergeladen haben.

```
# Kommentieren Sie die folgende Zeile aus, wenn Sie die Bibliotheken noch nicht haben
# install.packages(c("httr", "jsonlite"))

# Bibliotheken laden
Bibliothek (httr)
Bibliothek (jsonlite)

# API-Aufruf erstellen
apiCall = "http://15.223.72.239:8000/gbads/LiveAnimals/?year_start=2005&year_end=2018&element=Stocks&item=Hühner"

# Anfrage senden
Antwort = GET (API-Aufruf)

# Sehen Sie, was uns die Antwort gibt
Antwort

# Erstellen Sie einen Datenrahmen aus der API-Antwort
data = fromJSON(rawToChar(response$content))

# Überprüfen Sie, ob das funktioniert hat
Klasse (Daten)

# Sehen Sie, wie die ersten 5 Zeilen der Daten aussehen
Kopf (Daten)
```

## Erstellen eines Benutzerprofils

Die obige Anleitung ermöglicht Ihnen den Zugriff auf die API, die den Zugriff auf offene Daten ermöglicht. In Zukunft rechnen wir mit privaten Datenquellen, auf die Sie nur zugreifen können, wenn Sie die Erlaubnis dazu haben. Unser System unterstützt die Möglichkeit, eine verifizierte Benutzeranmeldung zu erstellen, die Ihnen über ein personalisiertes Portal und einen API-Schlüssel Zugriff auf die privaten Quellen gewährt, auf die Sie Zugriff haben.

