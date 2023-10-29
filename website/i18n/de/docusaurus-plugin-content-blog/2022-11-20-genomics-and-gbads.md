---
slug: genomics-and-gbads-how-ncbi-metadata-can-be-a-new-source-of-data-on-livestock production-and-health
title: "Genomics & GBADs: Wie NCBI-Metadaten eine neue Datenquelle zur Tierproduktion und -gesundheit sein können"
authors: Cassandre
tags: [metadata, genomics, NCBI]
css: custom.css 
---

## Globale Genomforschung erhöht die Metadaten zur Tiergesundheit

Globale Organisationen wie die Weltorganisation für Tiergesundheit (WOAH) und die Ernährungs- und Landwirtschaftsorganisation (FAO) haben die Führung bei der Zusammenstellung von Daten zu Tierseuchenkennzahlen übernommen. Da jedoch die Genomdaten mit sinkenden Sequenzierungskosten zunehmen, können Metadaten im Zusammenhang mit Tiergesundheit und -krankheiten verwendet werden, um die vorhandenen GBAD-Daten zu ergänzen. Schätzungen gehen davon aus, dass jedes Jahr bis zu 40 Milliarden Gigabyte an Genomdaten generiert werden und dass die Genomforschung im nächsten Jahrzehnt zwischen 2 und 40 Exabyte an Daten generieren wird (Stephens et al. 2015). Das National Center for Biotechnology Information (NCBI) ist ein Beispiel für eine Reihe von Datenbanken, die Informationen zu GBADs enthalten. Da immer mehr Forscher genomische Untersuchungen an Nutztieren und anderen wirtschaftlich wichtigen Arten durchführen, werden Daten zu Rasse, Standort sowie individuellem Zustand und Krankheiten erfasst. Insbesondere speichert die BioSamples-Datenbank von NCBI die begleitenden Metadaten zu genetischen Sequenzen, die auf NCBI hochgeladen wurden. Da die Sequenzierung kosteneffizienter wird, werden Tiermetadaten anfallen, die von GBADs verwendet werden können. In den letzten sieben Jahren gab es einen bemerkenswerten Anstieg der Anzahl der Metadateneinträge zu Nutztieren (Abbildung 1). Diese Metadaten begleiten Genomstudien, die nicht nur von Universitäten, sondern auch von Organisationen auf der ganzen Welt durchgeführt werden. NCBI wurde bereits verwendet, um Datenbanken für andere Forscher zu erstellen (Hu et al. 2022). Die AnimalMetagenome DB (http://animalmetagenome.com) enthält metagenomische Daten für vier heimische Arten und eine Fülle wilder Arten.

![](https://i.imgur.com/bgF3nCD.png)
<p align="center"><i>Abbildung 1. NCBI-Einträge in der BioSample-Datenbank zu Arten, die in GBADs abgedeckt sind (Rinder, Schweine, Ziegen, Schafe, Hühner, Lamas, Equiden, Kamele). Diese Abbildung zeigt das Muster der Anzahl der Einträge seit 2005.</i></p>

## Geografische Verbreitung genomischer Daten
Eines der Hauptziele von GBADs ist es, globale Datenlücken zur Tiergesundheit zu schließen. Um grundlegende Tiergesundheitsdaten länderübergreifend zu standardisieren, sind Standort- und Rassedaten unglaublich wichtig. Die Klassifizierung des globalen Tierspektrums wird dabei helfen, die Ausbreitung von Krankheiten zu verstehen, die von Tieren ausgehen. Benutzer können Standortdaten als Basisattribut in die BioSamples-Datenbank eingeben. Einträge können insbesondere den Standort des Einreichers, den Probenahmeort und sogar bestimmte Probenahmekoordinaten enthalten. Diese Daten können widerspiegeln, wo bestimmte Arten dicht besiedelt sind oder in welchen Ländern und Standorten ein Mangel an Daten besteht. Obwohl die Kosten für die DNA-Sequenzierung gesunken sind, handelt es sich immer noch um eine beträchtliche Anschaffung; Daher können diese Daten auch Aufschluss darüber geben, ob es bei der Durchführung von Genomproben in verschiedenen Ländern inhärente Verzerrungen gibt. Mithilfe von Rentrez, einem R-Paket für den Zugriff auf NCBI (Winter 2017), konnten wir Metadateneinträge für Genomstudien mit Nutztieren und anderen wirtschaftlich wichtigen Arten extrahieren. Abbildung 2 veranschaulicht die geografische Verteilung dieser Daten, wobei gezeigt wird, dass es in stark untersuchten Gebieten Datencluster gibt. Umgekehrt gibt es deutliche Datenlücken in ganz Afrika und Teilen Asiens (Abbildung 2).

![](https://i.imgur.com/skR7ffk.png)
<p align="center"><i>Abbildung 2. Statischer Schnappschuss einer interaktiven Abbildung, die Probenahmestellen für Nutztiere und andere für GBADs relevante Arten basierend auf NCBI BioSample-Metadaten anzeigt.</i></p>

Dies sind nun nur die Daten, die Standortinformationen für jeden Eintrag enthielten. Wie bereits erwähnt handelt es sich bei diesen Daten um wichtige Basisdaten zum weltweiten Artenvorkommen; Die BioSamples-Datenbank enthält jedoch auch Daten, die für GBADs relevanter sind, beispielsweise zu Krankheiten. Wir untersuchten die von NCBI ermittelten Metadaten und stellten fest, dass bei unseren Studienarten 98 Prozent der Einträge keine Daten zu lebensfähigen Krankheiten enthielten. Mit „lebensfähig“ meinen wir krankheitsbezogene Informationen, da viele Einträge zufällige Zeichen oder nicht verwandte Informationen enthielten. Die restlichen 2 Prozent der Daten enthielten Krankheiten und Krankheitserreger, die sich mit der Krankheitserregerliste der WOAH überschnitten (WOAH, persönliche Mitteilung eines internen Dokuments). Bei Rindern gab es beispielsweise 16 Krankheiten, die sich mit der WOAH-Liste überschnitten (Abbildung 3).

![](https://i.imgur.com/jlqJbUB.png)
<p align="center"><i>Abbildung 3. Statischer Schnappschuss einer interaktiven Abbildung, die Probenahmestellen für Rinder mit Krankheitsinformationen im NCBI-Eintrag anzeigt. Die aufgeführten Krankheiten überschneiden sich mit den Krankheiten, die WOAH überwacht. </i></p>


## Inkonsistente Benutzereingaben führen zu Datenlücken

NCBI speichert Daten für eine Reihe von Organismen, von Bakterien bis hin zu Walen; Bei der Gewinnung von Daten zu Nutztieren und wirtschaftlich wichtigen Arten wurden jedoch fast 350.000 Einträge zurückgegeben. Das Sammeln von Daten für GBAD-Arten (Rinder, Hühner, Schweine, Schafe, Ziegen usw.) ergab Unterschiede in der Datenmenge. Die folgende Abbildung veranschaulicht diese Variation, wobei Rinder, Hühner und Schweine die meisten Daten lieferten. Die Vollständigkeit der Daten für diese zurückgegebenen Einträge war unterschiedlich; Sie machten jedoch den größten Anteil der GBADs-bezogenen Daten aus. Insbesondere Rindereinträge machten 27 % der Gesamteinträge aus. Die Kombination aus zwei anderen Arten, Lamas und Kamelen, machte weniger als 1 % der insgesamt zurückgegebenen Einträge aus.

Zusätzlich zu den Arteninformationen ermöglicht NCBI Benutzern auch die Eingabe von Rassedaten. Da Rasseinformationen hilfreich sein können, um die Prävalenz und Ausbreitung von Krankheiten zu verstehen, ist es wichtig zu wissen, welche Rassen den Großteil der Daten ausmachen. Abbildung 4 zeigt den Anteil spezifischer Rassen für jede Art, die für GBADs erfasst wurden, wobei jeder unterschiedliche Farbbalken eine andere Rasse anzeigt. Wie in der Grafik dargestellt, enthielten die meisten Einträge keine Informationen zur Rasse. Dies ist eine wichtige Erkenntnis, da Rasseinformationen einer der wichtigsten gemeldeten Parameter sein sollten, insbesondere für wirtschaftlich wichtige Arten. Dieses Diagramm zeigt auch mögliche Lücken in den im NCBI gespeicherten Daten, da bestimmte Rassen in den Daten nicht so häufig vorkommen. Dies kann Erkenntnisse darüber liefern, wo Ressourcen, Zeit und Finanzmittel eingesetzt werden sollten, um die Daten über Rassen und Arten hinweg anzugleichen.

![](https://i.imgur.com/dZKyLeW.png)
<p align="center"><i>Abbildung 4. Balkendiagramm, das den Anteil verschiedener Rassen veranschaulicht, die für jede in der NCBI-BioSamples-Datenbank untersuchte Art gemeldet wurden. Das Rosa gibt die Anzahl der Einträge ohne Rasseinformationen an. Alle anderen Farben geben den Anteil verschiedener Rassen für jede Art an.
</i></p>


## Nächste Schritte zur Nutzung dieser Daten

Basierend auf unserem ersten Blick auf die verfügbaren Metadaten zu NCBI gibt es einige Aufgaben, die den Prozess rationalisieren könnten. Darüber hinaus würden die folgenden Schritte die Metadaten für sekundäre Verwendungen erhöhen.

1. Parameter standardisieren.
Die Standardisierung von Parametern würde den Datenbereinigungsprozess verbessern und dazu beitragen, Daten zwischen verschiedenen Institutionen anzugleichen. Derzeit macht die Freitext-Einrichtung der BioSample-Datenbank den Vergleich zwischen Einträgen sehr schwierig, da Rechtschreibfehler und zusätzliche Zeichen den Vergleich erschweren können. Wie an anderer Stelle diskutiert (Goncalves und Musen 2019), wird die Stärkung der zugrunde liegenden Infrastruktur der NCBI BioSamples-Datenbank dazu beitragen, Daten zu standardisieren und diese Daten für Forscher für sekundäre Verwendungen außerhalb der Genomik zugänglicher zu machen.

2. Mehr Fokus auf Metadaten.
Es gibt große Datenlücken, die von kleineren Details wie der Krankheitsprävalenz bis hin zu wichtigen Parametern wie Rasse oder Standort reichen. Da auf NCBI immer mehr Metadaten zugegriffen werden, ist es unerlässlich, dass Benutzer so viele Daten wie möglich eingeben. Grundlegende Daten wie Art, Rasse und Standort sollten für Benutzer obligatorisch einzugeben sein.

3. Hochladen von Preprint-Daten.
Derzeit gibt es eine Verzögerung zwischen der Probenahme und der DNA-Sequenzierung sowie dem Hochladen dieser Daten in öffentliche Datenbanken wie NCBI. Diese Verzögerung kann zwischen einigen Monaten und Jahren variieren. Daher könnten Daten, die in Sekundärprojekten wie diesem verwendet werden könnten, erst einige Jahre nach der Probenahme veröffentlicht werden. Daher empfehle ich, Genomdaten mit den dazugehörigen Metadaten so bald wie möglich oder bei der Einreichung von Vorabdrucken auf NCBI hochzuladen.

NCBI und andere Genomdatenbanken enthalten Daten, die nicht nur für Genomprojekte nützlich sein können. Für GBADs können diese Daten wertvolle Informationen über das Vorkommen lokaler Rassen an normalerweise nicht beprobten Standorten sowie über das Auftreten von Krankheiten bei beprobten Personen liefern. Darüber hinaus bietet es einen ersten Einblick in die Frage, wie Genomprojekte das Ziel der GBADs, Daten und Kennzahlen zur Tiergesundheit zu sammeln, ergänzen können.

Verweise:

Goncalves R, Musen MA (2019) Die variable Qualität von Metadaten über biologische Proben, die in biomedizinischen Experimenten verwendet werden. Wissenschaftliche Daten, 6, 190021.

Hu R, Yao R, Li L, et al. (2022) Eine Datenbank tierischer Metagenome. Wissenschaftliche Daten, 9, 312.

Stephens ZD, Lee SY, Faghri, F, et al. (2015) Big Data: Astronomisch oder genomisch? PLoS Biology, 3, 1002195.

Winter, DJ (2017) rentrez: Ein R-Paket für die NCBI eUtils API. Das R Journal, 9, 520-526.

