---
slug: the-roadmap-to-reproducibility
title: Der Fahrplan zur Reproduzierbarkeit
authors: Kassy
tags: [reproducibility, data, values]
---

![Header-Bild](https://i.imgur.com/2JEVnaV.png)
*Abbildung 1: Der Fahrplan zur Reproduzierbarkeit*

> *„Der springende Punkt der Wissenschaft, der Art und Weise, wie wir etwas wissen, besteht nicht darin, dass ich Isaac Newton vertraue, weil ich denke, dass er ein großartiger Kerl war. Der springende Punkt ist, dass ich es selbst tun kann … Zeigen Sie mir die Daten, zeigen Sie mir den Prozess, zeigen Sie mir die Methode, und wenn ich möchte, kann ich sie dann reproduzieren.“*

[Brian Nosek](https://www.washingtonpost.com/news/looking-of-science/wp/2015/08/27/trouble-in-science-massive-effort-to-reproduce-100-experimental-results -succeeds-only-36-times/) – Washington Post[^1]

<br/>

Reproduzierbare Wissenschaft erfordert gut dokumentierte Methoden, Code und die Bereitstellung von Daten. Es bedeutet, während des gesamten wissenschaftlichen Prozesses Transparenz darüber zu schaffen, was Sie tun, um das Vertrauen in den Prozess und die Ergebnisse zu stärken und anderen die Möglichkeit zu geben, frühere Arbeiten zu nutzen. Für den wissenschaftlichen Skeptiker ist kein Platz, wenn Ihre Forschung reproduzierbar ist.

<br/>

Die von GBADs verwendeten Daten stammen aus vielen verschiedenen Quellen und werden in Modellen verwendet, die dann weitere Datensätze erzeugen und als Eingaben für andere Modelle dienen. Diese Verkettung von Daten-Modell-Daten-Modell-Daten ist nicht auf die Arbeit eines einzelnen Wissenschaftlers beschränkt; Wir haben Mitarbeiter, die auf der ganzen Welt arbeiten. Es ist von entscheidender Bedeutung, dass die zugrunde liegenden Daten verfügbar sind und alle unsere Methoden reproduzierbar sind, damit wir auf der Arbeit der anderen aufbauen und es anderen ermöglichen können, unsere Schätzungen sicher zu verwenden.

<br/>

Mit dem Ziel, alle unsere Prozesse reproduzierbar und transparent zu machen, startet GBADs die „Roadmap to Reproducibility“. In diesem Blogbeitrag laden wir Sie ein, mit uns den Weg zur Reproduzierbarkeit zu beschreiten. Schnallen Sie sich an, während wir den feurigen Flammen der „Reproduzierbarkeitskrise“ entgehen, bevor wir uns auf den Weg zu unserem endgültigen Ziel machen, der „Datenutopie“!

<br/>

## Die „Reproduzierbarkeitskrise“

Im Jahr 2016 ergab eine Umfrage von Nature unter 1.576 Forschern, dass es in der wissenschaftlichen Gemeinschaft eine „Krise der Reproduzierbarkeit“ gibt[^2]. Von den Teilnehmern „haben mehr als 70 % der Forscher versucht, das Experiment eines anderen Wissenschaftlers zu reproduzieren, und mehr als die Hälfte hat es nicht geschafft, ihre eigenen Experimente zu reproduzieren.“ Viele Faktoren tragen zur nicht reproduzierbaren Forschung bei (Abbildung 2), wobei Veröffentlichungsdruck und selektive Berichterstattung zu den am höchsten bewerteten Faktoren zählten. Allerdings wurden auch nicht verfügbare Rohdaten und nicht verfügbare Methoden oder nicht verfügbarer Code als Hauptverursacher eingestuft. Während der Druck zur Veröffentlichung einen Kulturwandel in der Forschung erfordert, sind nicht verfügbare Rohdaten und Methoden oder Code Probleme, die wir lösen können.

<br/>


![Abbildung 2](https://i.imgur.com/dcnJkJR.jpg)
Abbildung 2: Faktoren, die zu nicht reproduzierbarer Forschung beitragen. Abbildung aus Baker, 2016[^2].

## Auf dem Weg zur Reproduzierbarkeit

### Stopp 1: Menschen und Prozesse

Die Verfügbarkeit von Code und Daten ist wichtig für die Reproduzierbarkeit. Hinter dem Code und den Daten stehen jedoch Menschen, die an Prozessen arbeiten, um sie reproduzierbar zu machen.

<br/>

Daher haben wir Prozesse und Best Practices für die Nutzung von Daten in GBADs etabliert, die im [Data Governance Handbook](http://gbadskedoc.org/docs/Data-Governance-Handbook-for-GBADs/intro) kommuniziert werden ) und auf unserer [Dokumentationsseite](http://gbadskedoc.org). Diese Prozesse umfassen Folgendes:

<br/>

1. Dokumentation von Datenänderungen und Datenbereinigungspraktiken
2. Dokumentation der Metadatenstandards, die zur Bereitstellung von Informationen über die Daten verwendet werden
3. Wo und wie Daten und Metadaten gespeichert und wie sie verbreitet werden
4. Best Practices für die Dokumentation von Code in GitHub-Repositories

<br/>

Wir verlassen uns auch darauf, dass die Menschen die von uns festgelegten Prozesse einhalten. Da einige der von GBADs verwendeten Daten keine Metadaten enthalten, sind wir auf die Einrichtung einer Kontaktstelle für die Datenquelle angewiesen, um sicherzustellen, dass wir einen Kontext darüber erhalten, wie Daten gesammelt wurden, wie sie verwendet werden können, von wem, und für welche Zwecke und welche Kategorien in den Daten dargestellt werden.

<br/>

### Stopp 2: Erfassung und Aufnahme von Daten

Zur Datengewinnung identifizieren wir Daten, die für die Schätzung von Modellen relevant sind. Beispielsweise sind der Viehbestand nach Land und Art sowie das Lebendgewicht Eingaben für die Berechnung der Biomasse.

<br/>

Die Art und Weise, wie wir Daten erfassen, hängt vom Format ab, in dem sie verfügbar sind. Es gibt drei Hauptmethoden zur Erfassung und Aufnahme von Daten:

<br/>

* Wenn Daten über Anwendungsprogrammierschnittstellen (APIs) verfügbar sind, werden die Daten direkt von der Quelle erfasst und transformiert, bevor sie über die GBADs-API verfügbar gemacht werden.
* Wenn Daten per Direktdownload verfügbar sind, werden die Daten heruntergeladen und in Datenbanktabellen formatiert, bevor sie über die GBADs-API verfügbar gemacht werden.
* Wenn Daten in PDF-Tabellen verfügbar sind, extrahieren Web-Scraping-Skripte Daten aus Tabellen und stellen sie über CSV-Dateien zur Verfügung, bevor sie in Datenbanktabellen formatiert und über die GBADs-API verfügbar gemacht werden.

<br/>

Jeder dieser Prozesse wird dokumentiert. Die Herkunft der Daten wird in einer Graphdatenbank verfolgt, um sicherzustellen, dass wir alle Änderungen an den Daten nachvollziehen und unsere Prozesse transparent und reproduzierbar machen können.

<br/>

### Stopp 3: Datenqualität

Wir überprüfen die Qualität jeder Datenquelle, die von GBADs erfasst wird. Manchmal gibt es interne Fehler bei der Aggregation von Kategorisierungen, wenn Unterkategorien keine „Superkategorie“ ergeben. Wenn Geflügel beispielsweise in Hausgeflügel und Nutzgeflügel unterteilt wird, sollten diese Kategorien zusammengenommen „Geflügel“ ergeben. In anderen Fällen kann es zu einem plötzlichen Anstieg der Tierzahl in einem Land kommen. In diesem Fall müssen wir dies untersuchen, indem wir den Wert mit anderen Datenquellen vergleichen.

<br/>

Sämtliche Qualitätsprüfungen und entsprechende Änderungen werden protokolliert. Sobald die Daten „bereinigt“ wurden, wird die „bereinigte“ Version über die API und Dashboards der GBADs bereitgestellt. Auf diese Weise sind die Qualitätsbewertungen konsistent und nicht jeder Mitarbeiter führt dies unabhängig durch. Dies stellt die Konsistenz der Ergebnisse sicher und verbessert die Reproduzierbarkeit der Schätzungen und Daten der GBADs insgesamt.

<br/>

### Stopp 4: Code

Code, der zum Erfassen und Einspeisen von Daten, zum Bereinigen von Daten und zum Erstellen von Modellen verwendet wird, ist über die GitHub-Repositorys der GBADs verfügbar. Der Code ist gut dokumentiert und es gibt Informationen darüber, wie der Code ausgeführt wird, welche Datensätze verwendet wurden und wer an der Entwicklung beteiligt war.

<br/>

### Endgültiges Ziel: Datenutopie

In der Daten-Utopie können Daten harmonisiert und für nachfolgende Modelle oder Zwecke wiederverwendet werden. Die Idee dabei ist, dass alle Mitglieder von GBADs dieselben Daten verwenden und keine doppelten Datenbereinigungs-, Aufnahme- oder Datenerfassungsbemühungen erforderlich sind. Indem die Daten und Methoden zur Reinigung reproduzierbar gemacht werden, sind die zugrunde liegenden Daten konsistent und sofort einsatzbereit. In unserer Utopia werden Daten über Dashboards visualisiert und verfügbar und können über die API abgerufen werden. Die Dashboards verfügen außerdem über eine Registerkarte „Metadaten“, auf der Informationen zu Methodik, Code und Herkunft bereitgestellt werden, um sicherzustellen, dass alle Mitglieder auf den Code und die Rohdaten zugreifen können, die in den Dashboards angezeigt und verfügbar sind.

<br/>

*Hinweis: Wir nehmen zur Kenntnis, dass nicht alle Daten zur Verfügung gestellt werden können. Während wir derzeit mit offenen Regierungsdaten arbeiten, rechnen wir mit der kontrollierten Verwaltung privater und sensibler Daten, die ohne Erlaubnis des Dateninhabers gemäß Datenvereinbarungen und Lizenzen nicht in Rohform offen verfügbar sein werden.*

<br/><br/>

Verweise:

<!--References-->
[^1]: Achenbach, J. (2021, 27. Oktober). Viele wissenschaftliche Studien können nicht reproduziert werden. das ist ein Problem. Die Washington Post. Abgerufen am 19. Juni 2022 von [https://www.washingtonpost.com/news/looking-of-science/wp/2015/08/27/trouble-in-science-massive-effort-to-reproduce-100- experimentelle-results-succeeds-only-36-times/](https://www.washingtonpost.com/news/looking-of-science/wp/2015/08/27/trouble-in-science-massive-effort- 100-experimentelle-Ergebnisse-zu-reproduzieren-gelingt-nur-36-mal/)

[^2]: Baker, M. (2016). 1.500 Wissenschaftler lüften den Deckel der Reproduzierbarkeit. Natur, 533(7604).


