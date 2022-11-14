---
sidebar_position: 1
---

# Einführung

## Übersicht über GBADs

Das Ziel der [Global Burden of Animal Diseases (GBADs)](https://animalhealthmetrics.org/) ist es, die wirtschaftliche und gesundheitliche Belastung durch Tierkrankheiten zu minimieren, indem private und offene Datenressourcen über eine Wissensmaschine gesammelt, bewertet und kuratiert werden .

### Die Rolle von Daten in GBADs

Daten inspirieren die Entscheidungsfindung durch Modelle (wie sie von GBADs und anderen bereitgestellt werden), die die gesellschaftlichen Ergebnisse von Viehzucht und Aquakultur verbessern, sich positiv auf die Ziele für nachhaltige Entwicklung (Sustainable Development Goals, SDGs) auswirken und die Ergebnisse für Viehzüchter verbessern. **Das übergeordnete Ziel von GBADs ist die Verbesserung der Methoden zur Schätzung der gesundheitlichen und wirtschaftlichen Belastung durch Tierkrankheiten und menschliche Krankheiten aufgrund von Tierkrankheiten.** GBADs werden die Fülle verfügbarer offener und privater Datenressourcen sammeln, darauf zugreifen, standardisieren und kuratieren und stellt diese Ressourcen über eine Knowledge Engine zur Verfügung. Indem Daten zur Gesundheit und Wirtschaftlichkeit von Tieren über eine einzige Engine verfügbar gemacht werden, können Daten besser genutzt und verglichen werden, was letztendlich zu besseren Entscheidungen und Ergebnissen sowohl im privaten als auch im öffentlichen Sektor führt.

Die Daten-Wissens-Engine von GBADs wird in einer standardisierten und gut definierten Data-Governance- und Herkunftsstrategie verwurzelt sein, die es GBADs ermöglicht, als vertrauenswürdiger Daten-„Broker“ für alle Datenartefakte zu fungieren, die sich durch unser System bewegen. „Vermittlung“ von Datenartefakten bedeutet, dass wir Datenartefakte, die über das System verbreitet werden, nicht besitzen (oder in vielen Fällen speichern), sondern Daten bereitstellen, die mit unseren dokumentierten Methoden standardisiert und „FAIRifiziert“ wurden. Die Data-Governance- und Provenance-Strategie von GBAD wird sicherstellen, dass Daten standardisiert sind, vor Missbrauch geschützt werden und die Möglichkeit bieten, die Qualität und das Vertrauen von Daten kritisch zu bewerten. Dies umfasst insbesondere reglementierte Metadatenstandards, einschließlich kontrollierter Vokabulare, Ontologien und Strukturen, die wir als Rückgrat unserer Daten-Engine verwenden werden. Die Anpassung standardisierter Metadaten ermöglicht die Abfrage von Daten und Metadaten, die Prüfung von Praktiken und ein Verständnis dafür, wann Datenquellen kombiniert werden können. Unser Schwerpunkt auf detaillierten Metadaten und Datenqualität wird die Notwendigkeit einer detaillierten Provenienz für alle von unserem System vermittelten Daten hervorheben.

## Data Governance und GBADs

```{Epigraph}
„Wenn du schnell gehen willst, geh alleine. Wenn du weit gehen willst, geh zusammen.“

- Afrikanisches Sprichwort
```
```{Rand}
[Jonathan Rushton](https://orcid.org/0000-0001-5450-4202), der Direktor von GBADs, beginnt Teammeetings oft mit dem obigen Zitat und erinnert die GBADs-Themen daran, dass es wichtig ist, weiter zusammenzuarbeiten Wirkung machen.
```

Dieses Sprichwort lässt sich auf die Idee von Big Data erweitern. Es gibt unzählige Quellen für offene und private Daten, und selbst wenn diese Quellen aus derselben Disziplin stammen, sehen wir oft Unterschiede darin, wie Daten strukturiert, berichtet, beschrieben und verbreitet werden. Das Kombinieren von Daten aus verschiedenen Quellen erfordert Zusammenarbeit, Transparenz und Teamarbeit.

```{Rand}
**FAIR** steht, wie Sie lesen werden, für Findable, Accessible, Interoperable und Reusable. Wir werfen ein 'S' nach FAIR (**FAIRS**) für Sicherheit.

Dies sind die Prinzipien des Datenaustauschs, nach denen wir bei GBADs streben!
```

```{Ermahnung} Gehen Sie zusammen mit Daten
Es ist unmöglich, Daten zu kombinieren, wenn jeder individuell an seinen Datensätzen arbeitet, ohne darüber nachzudenken, wie er seine Daten kommunizieren, teilen und wiederverwenden wird. Indem wir Standards verwenden und Daten strukturieren, um FAIR-Prinzipien zu unterstützen, können wir mit der Zusammenarbeit beginnen und eine **Datenkultur** in GBADs aufbauen.
```

**Das GBADs Data Governance Handbook beschreibt, wie die Daten, die durch die GBADs Knowledge Engine fließen, verwaltet, beschrieben und kommuniziert werden. Es dokumentiert die Richtlinien, Standardpraktiken und Verfahren im Zusammenhang mit der Data-Governance-Strategie von GBADs.**


```{Ermahnung} Bitte beachten Sie:
:klasse: Tipp

Dies ist ein „lebendes Dokument“! Da das Thema GBADs-Informatik mehr über die Datenverwaltung und die Datenanforderungen von GBADs erfährt, werden wir dieses Buch entsprechend aktualisieren und anpassen.
```

## Navigieren im Data Governance-Handbuch

Erste Schritte

````{Felder}

Informationen zu unseren Grundsätzen für die gemeinsame Nutzung von Daten:
[Prinzipien für die gemeinsame Nutzung von Daten](#dataSharing)
---

Erfahren Sie hier mehr über unsere Wissensmaschine:

---
So verstehen Sie unsere Datenstandards und Informationen zu Metadaten:
[Datenstandards](#techdatastds)

---
Erfahren Sie hier, wie Sie unser Application Programming Interface (API) verwenden:
[Daten-Benutzerhandbuch](#dataUsers)

---
Erfahren Sie hier mehr über „aufgeräumte Daten“ (das Organisieren Ihrer Tabellenkalkulationen auf eine Weise, die FAIR-Prinzipien unterstützt):
[Daten in Tabellenkalkulationen organisieren](#dataBestPractices)

````

Dieses Dokument ist so aufgebaut, dass es die Hauptkomponenten der Data Governance aus der GBAD-Perspektive widerspiegelt:

1. Was ist Data Governance aus Sicht von GBADs? Dies beinhaltet einen Überblick darüber, was Data Governance und Provenienz sind, unsere Datenfreigabeprinzipien und warum Data Governance in der Gesamtperspektive von GBADs von zentraler Bedeutung ist.
2. Metadatenstandards und Best Practices, die wir übernehmen möchten.
3. Datenschutz und Sicherheit
4. Datenverwaltung, einschließlich eines Überblicks über das System und wie Metadatenspeicherung, APIs und andere Datenspeicherung funktionieren
5. Leitfaden zur Datennutzung
6. Leitfaden für Datenlieferanten



