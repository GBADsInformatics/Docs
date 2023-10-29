---
title: "Zugriff auf die GBADs-API in R"
author: "Kassy Raymond"
date: "19/09/2022"
output: html_document
---

## Dokumentation

*Dokumentation zur API und nützliche Befehle finden Sie unter http://gbadske.org/api/dataportal/*

**Weitere Theorie zu APIs und warum Sie sie verwenden sollten, finden Sie in Debs Präsentation.**

### Einige wichtige Konzepte:

Eine API steht für Application Programming Interface. Eine API ist eine Schnittstelle zwischen zwei Programmen, die es Ihnen ermöglicht, Daten von einem Server anzufordern und an Ihr Programm zurückzusenden. Die GBADs-API ist eine webbasierte API, die mit dem HyperText Transfer Protocol (HTTP) von W3 erstellt wurde und es Webservern ermöglicht, Daten auszutauschen.

Wenn Sie einen API-Aufruf durchführen, erstellen Sie eine *Anfrage* (wir nennen sie einen Befehl), die aus einer URL, einem Pfad zum Endpunkt und einer Abfrage besteht:

**Basis-URL** (auch als Anforderungs-URL bezeichnet): Dies ist die URL, die Sie für den Zugriff auf die API benötigen.

Beispiel: `http://gbadske.org/api/GBADsTables/` und `http://gbadske.org/api/GBADsLivestockPopulation/` sind Basis-URLs für die GBADs-API.

**Endpunkt**: Hier befinden sich die gewünschten Daten.

**Abfrage**: Wird durch ein '?' gekennzeichnet und fragt auf diese Weise nach den gewünschten spezifischen Daten.

**Beispiel**:

Dieser Befehl stellt alle in der GBADs-API verfügbaren Tabellen bereit: http://gbadske.org/api/GBADsTables/public?format=html

Unter Verwendung der oben genannten Terminologie aufgeschlüsselt:

* Basis-URL: http://gbadske.org/api/GBADsTables/
* Endpunkt: öffentlich
* Abfrage: ?format=html

Sobald Sie Ihre URL haben, können Sie die HTTP-Methode `GET` zum Abrufen von Daten verwenden. Es gibt andere HTTP-Methoden, aber `GET` ist die einzige, die Sie kennen müssen, um Daten von der GBADs-API abzurufen.

## Erforderliche Pakete

Sie können das Paket `httr` verwenden, um Daten von der API abzurufen. Da wir manchmal auch etwas String-Handling durchführen müssen, laden wir auch das Paket `stringr` (das ist eine persönliche Präferenz, Sie können Strings auch in Basis-R verarbeiten, aber icfh mag stringr und verwende es nur im Funktionsabschnitt).

```
{r}
Bibliothek('httr')
Bibliothek('stringr')
```

## Verwenden der `httr`-Bibliothek zum Abrufen von Daten

Im nächsten Abschnitt stellen wir Funktionen bereit, die die Erstellung der Inhalts-URL für die Anfrage erleichtern, indem die Erstellung der URL und die Verarbeitung der Antwort automatisiert werden. Dieser Abschnitt bietet einen Überblick darüber, wie man die `httr“-Bibliothek in R versteht.

### Die Grundlagen von `httr` und das Abrufen einer Liste der verfügbaren Tabellen

Durch den direkten Aufruf des Endpunkts GBADsTables/public wird eine Liste der Tabellen bereitgestellt. Wenn wir diese Liste erhalten, können wir wissen, welche Tabellen verfügbar sind und auf welche Daten wir zugreifen können.

Zuerst richten wir die Inhalts-URL ein. Beachten Sie, dass wir das Format `Text“ anfordern, damit wir die Antwort verarbeiten können.

```
{r}
URL <- "http://gbadske.org/api/GBADsTables/public?format=text"
```

Dann können wir die `GET`-Methode von `httr` verwenden, indem wir die Funktion `GET()` verwenden. Wir nennen die Variable `res`, was für `response` steht.
```
{r}
res <- GET(url = url)
```

Nun wollen wir sehen, was wir zurückbekommen:
```
{r}
Namen(res)
```
Das Wichtige:

* Der `status_code` liefert uns einen Code, der uns sagt, ob unsere Anfrage an die API erfolgreich war.
Wenn wir den Status 204 erhalten, bedeutet dies, dass kein Inhalt zurückgegeben wurde. Eine vollständige Liste der Antwortcodes finden Sie unter: https://restfulapi.net/http-status-codes/

* `Inhalt` sind die Daten von der API im rohen Binärcode

Schauen wir uns den `status_code` an:
```
{r}
res$status_code
```
Ein `status_code` von 200 bedeutet, dass die Anfrage erfolgreich war.

Nun der Inhalt:
`{r, max.height=‘100px‘}
res$content
`
Die Ausgabe ist für eine Maschine nützlich, aber wir müssen sie bitte in eine menschliche Sprache übersetzen. Die Funktion `content“ aus der Bibliothek `httr“ macht dies ziemlich einfach. Für weitere Informationen zur Funktion `content“ verwenden Sie `?content()“, um die Dokumente abzurufen.
`{r}
Tabellen <- Inhalt(e)
Tische
`
Das ist schön, aber wir sollten es wahrscheinlich in eine Liste zusammenfassen.
`{r, max.height=‘100px‘}
as.list(strsplit(tables, ",""))
`
Zu guter Letzt!
**Unser Ergebnis ist eine Liste von Tabellen, die über die GBADs-API verfügbar sind. Jedes Mal, wenn eine neue Tabelle hinzugefügt oder etwas geändert wird, erhalten Sie mithilfe dieser vier Codezeilen, die wir gerade überprüft haben, die aktuellste Tabellenliste:**
`{r, eval = FALSE}
URL <- "http://gbadske.org/api/GBADsTables/public?format=text"
res <- GET(url = url)
Tabellen <- Inhalt(e)
as.list(strsplit(tables, ",""))
`
### Informationen zu einer Tabelle abrufen

Da wir nun eine Liste mit Tabellen haben, können wir sehen, welche Spalten in jeder Tabelle verfügbar sind. Nehmen wir an, wir möchten Daten von `livestock_countries_population_unfccc“ oder die Bevölkerungszahlen von der UNFCCC.

Erstellen Sie zunächst die URL. Wir können zum Tabelleninhalt gelangen mit:

* `http://gbadske.org/api/GBADsTable/public?`

und Angabe des Tabellennamens und -formats:

* table_name=livestock_countries_population_unfccc&format=text

Am Ende haben wir also Folgendes:
`{r}
url_unfccc <- 'http://gbadske.org/api/GBADsTable/public?table_name=livestock_countries_population_unfccc&format=text'
`

Dann verwenden wir `GET“ und überprüfen den `status_code“:
`{r}
res_unfccc <- GET(url = url_unfccc)
res_unfccc$status_code
`
Jetzt können wir mit dem Antwortformat umgehen:
`{r}
Inhalt(res_unfccc)
`
Hier stehen uns die Spalten `Land“, `Art“, `Jahr“, `Population“ und `Flagge“ zur Verfügung.

**In Kürze erhältlich**: Funktionalität für Metadaten/Beschreibung in der API.

Da wir nun über die Felder verfügen, können wir eine Abfrage erstellen, um nach den tatsächlichen Daten zu fragen.

### Abrufen der Datentabelle

**ERINNERUNG** BEISPIELBEFEHLE FINDEN SIE AUF http://gbadske.org/api/dataportal

Erstellen Sie zunächst die URL:

* url = http://gbadske.org/api/GBADsPublicQuery/
* table_name = livestock_countries_population_unfccc

Der neue Teil davon sind die Felder und Abfrageteile der URL:

* Felder = Land, Art, Jahr, Bevölkerung
* query = In diesem Fall möchten wir alle Daten haben, also können wir die Abfrage einfach leer lassen.

Dann legen wir das Format fest:

* Format = Text

Zusammenfassend ist dies unsere URL:

`{r}
url_unfccc_data <- 'http://gbadske.org/api/GBADsPublicQuery/livestock_countries_population_unfccc?fields=country,species,year,population&query=&format=text'
`

Jetzt können wir `GET“ verwenden, um die Daten abzurufen
`{r}
res_unfccc_data <- GET(url_unfccc_data)
unfccc_data <- content(res_unfccc_data)
`
`{r}
unfccc_data
`
Und da haben wir es!

Um es noch einmal zusammenzufassen: Das waren nur 3 Zeilen Code:
`{r, eval = FALSE}
url_unfccc_data <- 'http://gbadske.org/api/GBADsPublicQuery/livestock_countries_population_unfccc?fields=country,species,year,population&query=&format=text'
res_unfccc_data <- GET(url_unfccc_data)
unfccc_data <- content(res_unfccc_data)
`

Sie können die Daten jetzt visualisieren oder damit machen, was Sie möchten:
`{r}
Bibliothek(ggplot2)
Bibliothek(tidyverse)

unfccc_data %>%
Filter (Art == 'Büffel') %>%
Filter (Land == 'Australien') %>%
ggplot(., aes(x = Jahr, y = Bevölkerung)) +
geom_line() +
geom_point() +
ggtitle('Büffel in Australien', subtitle = sprintf('Daten von: %s', str_wrap(url_unfccc_data))) +
theme(plot.subtitle=element_text(size=10, face="italic", color="black"))
`



Nun, der schwierigste Teil von allem war. Erstellen der URLs. Schauen Sie sich die folgenden Funktionen an, um Ihnen das Erstellen dieser URLs zu erleichtern

## Verwenden von Funktionen zum Abrufen von Daten

Um die Datenbeschaffung etwas einfacher zu machen, haben wir einige Funktionen erstellt, die das Codieren etwas erleichtern.

Um eine Liste aller Tabellen in der API zu erhalten, können Sie die Funktion `get_tables“ verwenden.

`{r}
get_tables <- function() {

# Die Inhalts-URL ist der Ort, an dem sich die Tabellen befinden
content_url <- "http://gbadske.org/api/GBADsTables/public?format=text"

# GET vom httr-Modul ermöglicht es uns, Daten von der API anzufordern
res <- GET(content_url)

# Holen Sie sich den Inhalt, indem Sie die res-Variable an den Inhaltsbefehl übergeben.
Tabellen <- content(res, `text“)

# Teilen Sie den Inhalt in ein benutzerfreundlicheres Format auf
Tabellen <- as.list(strsplit(tables, ","))

return(Tabellen)

`

Mithilfe der Funktion können Sie einfach `get_tables()“ aufrufen, um eine Liste der verfügbaren Tabellen abzurufen:
`{r, max.height=‘100px‘}
get_tables()
`

Verwenden Sie die Funktion `get_table_fields“, um Informationen zu einer Tabelle von Interesse abzurufen. Die Funktion `get_table_fields“ funktioniert folgendermaßen:

* Übergeben Sie der Funktion den Tabellennamen, über den Sie Informationen wünschen
* Erstellt die Inhalts-URL anhand des Tabellennamens
* Fragt nach den Daten mit GET aus dem httr-Paket
* Prüft anhand des Antwortstatuscodes, ob die Anfrage gültig war
* Wenn der Statuscode gültig ist, analysieren Sie den aus der Antwort erhaltenen Inhalt und geben Sie die Daten zurück
* Wenn der Statuscode ungültig ist, drucken Sie eine Nachricht aus

`{r}
get_table_fields <- function(table_name) {
# Übergeben Sie der Funktion den Tabellennamen, über den Sie Informationen wünschen

# Erstellen Sie die URL
content_url = paste('http://gbadske.org/api/GBADsTable/public?table_name=',table_name,'&format=text', sep = '')

# Fragen Sie nach den Daten
res = GET(content_url)

if (res$status_code == 200) {
res_content = content(res, 'text')
res_list = as.list(strsplit(res_content, ",""))

# Die Antwort zurückgeben
return(res_list)


anders {
print('Antwortstatus war nicht 200. Anfrage konnte nicht verarbeitet werden.')



`

Ausprobieren der Funktion:
`{r}
get_table_fields('livestock_countries_population_unfccc')
`
In der Tabelle `livestock_countries_population_unfccc“ gibt es 5 Spalten – Land, Art, Jahr, Population, Flagge

Mit der Funktion get_data können Sie den Tabellennamen, die Felder und die Abfrage angeben, um die Daten von der API abzurufen:

* Übergeben Sie der Funktion den Tabellennamen
* Optional: Übergeben Sie die Funktionsfelder und die Abfrage
* Die Funktion führt eine Reihe von Prüfungen durch, um festzustellen, welche Parameter übergeben wurden
* Die Inhalts-URL wird entsprechend dem Übergebenen erstellt
* Es werden Daten gemäß der Inhalts-URL angefordert
* Die Antwort auf die Anfrage wird zurückgegeben
`{r, max.height=‘100px‘}
get_data <- function(tabellenname, felder, abfrage) {

# Überprüfen Sie, ob ein Tabellenname angegeben wurde
if (c(missing(table_name))) {
stop('Geben Sie einen Tabellennamen an.')


base_url = 'http://gbadske.org/api/GBADsPublicQuery/'

# Erstellen Sie einen API-Aufruf in den folgenden Situationen
# wenn keine Abfrage oder Felder vorhanden waren
if ((fehlende(Abfrage) & fehlende(Felder))) {
content_url = paste(base_url,table_name,'?fields=&query=&format=text', sep='')

# wenn Felder bereitgestellt wurden, aber keine Abfrage
else if (missing(query)) {
content_url = paste(base_url,table_name,'?fields=',fields,'&query=&format=text', sep='')

# wenn eine Abfrage bereitgestellt wurde, aber keine Felder angegeben wurden
else if (missing(fields)) {
stop('Sie können keine Abfrage bereitstellen, ohne dass Felder angegeben sind.')

# wenn Abfrage und Felder bereitgestellt wurden
anders {
content_url = paste(base_url,table_name,'?fields=',fields,'&query=',query,'&format=text', sep='')


# Fragen Sie nach den Daten
drucken(content_url)
res = GET(content_url)

if (res$status_code == 200) {
# Die Antwort zurückgeben
Rückkehr(res)


anders {
print('Antwortstatus war nicht 200. Anfrage konnte nicht verarbeitet werden.')


`

Testen Sie die Funktion, um die Daten `livestock_countries_population_unfccc“ zu erhalten
`{r}
res_unfccc_all <- get_data('livestock_countries_population_unfccc', field='country,species,year,population')
tab_unfccc_all <- content(res_unfccc_all)
`
Siehe Tabelle:
`{r}
tab_unfccc_all
`

Versuchen Sie es mit einer komplexeren Abfrage:

* table_name = livestock_countries_population_unfccc
* Felder = Land, Art, Jahr, Bevölkerung
* Datenabfrage im Jahr 2008

`{r}
res_unfccc_2008 <- get_data('livestock_countries_population_unfccc', Fields = 'Land, Art, Jahr, Bevölkerung', Abfrage = 'Jahr = 2008')
unfccc_2008_tab <- content(res_unfccc_2008)
`
Siehe Tabelle:
`{r}
unfccc_2008_tab
`

Versuchen Sie es mit einer anderen Abfrage:

* Erhalten Sie Daten für Kanada im Jahr 2008

Das Erstellen dieser Abfragezeichenfolge ist etwas schwieriger.

* Kanada ist eine Zeichenfolge und muss daher in einfache Anführungszeichen gesetzt werden.
* Wenn wir in R eine Zeichenfolge in Anführungszeichen an eine Funktion übergeben, müssen wir das Escape-Zeichen `\\“ verwenden. Beispiel: Land=\\'Kanada\\'
* Wir fragen sowohl nach einem Jahr als auch nach einem Land. Wir können AND in der Abfrage verwenden, um nach beiden zu fragen. Vor und nach AND verwenden Sie `%20“, ein Hexadezimalzeichen für ein Leerzeichen, um das Leerzeichen in der URL zu kennzeichnen. Beispiel: Land=\\'Kanada\\'%20AND%20Jahr=2008

Zusammenfassend erhalten wir `query = 'country=\'Canada\'%20AND%20year=2008“.

Jetzt können Sie die Funktion wie gewohnt aufrufen, indem Sie die gerade erstellte Abfragezeichenfolge verwenden:
`{r}
# Rufen Sie die Funktion auf
res_unfccc <- get_data('livestock_countries_population_unfccc', field = 'country,species,year,population', query = 'country=\'Canada\'%20AND%20year=2008')
tab <- content(res_unfccc)
`

Sehen Sie sich das Ergebnis an
`{r}
Tab
`

Versuchen Sie es mit einer anderen Abfrage und geben Sie dabei eine Art von Interesse an

* Erhalten Sie Daten für Kanada für Schafe im Jahr 2008

Mit den gleichen Regeln wie zuvor können wir die Abfragezeichenfolge erstellen

`query = 'country=\'Kanada\'%20AND%20 Jahr=2008%20AND%20 Arten=\'Schafe\''

`{r}
# Rufen Sie die Funktion auf
res_unfccc_sheep <- get_data('livestock_countries_population_unfccc', field = 'country,species,year,population', query = 'country=\'Canada\'%20AND%20year=2008%20AND%20species=\'Sheep\'')
tab <- content(res_unfccc_sheep)
`
Sehen Sie sich das Ergebnis an:
`{r}
Tab
`

Mit `get_data“ ist es viel einfacher, die Inhalts-URL zu erstellen, eine Anfrage zu senden und eine Antwort zu erhalten! Viel Spaß beim Spielen mit der API!

### Verweise
Format und Erklärungen dieses Tutorials wurden inspiriert von https://www.r-bloggers.com/2015/11/accessing-apis-from-r-and-a-little-r-programming/

### Tutorial erstellt mit:
`{r}
sessionInfo()
`



