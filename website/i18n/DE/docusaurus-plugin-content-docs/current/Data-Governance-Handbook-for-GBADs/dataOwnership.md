---
sidebar_position: 4
---
# Datenlizenzen, Datenschutz und Sicherheit

## Daten auf einem Spektrum

GBADs verbreitet und speichert in einigen Fällen Daten, die verschiedenen Zugriffs-, Nutzungs- und Wiederverwendungsbeschränkungen unterliegen. Nicht alle Daten können offen sein, und Datenschutz ist nicht so einfach, wie entweder offene oder private Daten zu haben. Um die gemeinsame Nutzung zu fördern, ist es wichtig, dass Datenlieferanten die Möglichkeit haben, auszuwählen, wie ihre Daten verwendet werden sollen, wofür sie sie verwenden möchten und von wem sie verwendet werden sollen. Datenlizenzvereinbarungen stellen sicher, dass die Datennutzung nicht verwechselt wird, und informieren unser System darüber, wer Daten sehen, herunterladen oder verwenden kann.

```{Rand}
**Sogar Daten, die als „offen“ definiert sind, benötigen eine Lizenz!** Wenn Sie offene Daten verwenden, müssen Sie immer noch bestimmen, wie Sie den Datensatz richtig zuordnen (oder zitieren). Darüber hinaus können Daten als offen betrachtet werden, können aber dennoch Einschränkungen hinsichtlich ihrer Verwendung unterliegen. Beispielsweise schränken einige Open-Data-Lizenzen die Nutzung von Daten für kommerzielle Zwecke ein.
```

Das [Open Data Institute](https://theodi.org/about-the-odi/) kommuniziert diese Idee, indem es Daten auf ein Spektrum von geschlossenen bis offenen Daten stellt.

<!-- ![AgDataSpectrum](/images/20210723_AgDataSpectrum_ODI.png) -->

## Kategorien im Datenspektrum

Wir haben das Spektrum verwendet, um vier diskrete Datenlizenzierungskategorien zu erstellen:

**Offene Daten**: „Offen bedeutet, dass jeder frei darauf zugreifen, sie verwenden, ändern und für jeden Zweck freigeben kann (höchstens vorbehaltlich der Anforderungen, die die Herkunft und Offenheit bewahren).“

**Öffentlich zugängliche Daten**: Die Daten sind durch eine Lizenzvereinbarung geschützt, die die Verwendung und Verbreitung der Daten und/oder der Modelle, für die die Daten verwendet werden können, einschränkt. Dies könnte die Art und Weise beinhalten, wie die Daten verwendet werden können und für welche Zwecke, Zuordnungsanforderungen usw.

**Gruppenbasierte Zugangsdaten**: Für den Zugriff auf die Daten ist eine Authentifizierung erforderlich. Wie öffentlich zugängliche Daten sind die Daten auch durch eine Lizenzvereinbarung geschützt, die die Verwendung und Verbreitung der Daten und/oder der Modelle, für die die Daten verwendet werden können, einschränkt.

**Namensgebundene Zugangsdaten und interne Zugangsdaten**: Es ist ein besonderer Vertrag erforderlich, um die Verwendung, Zuweisung und Zugriffsbeschränkungen der Daten zu artikulieren. Dies wird ausdrücklich durch einen Vertrag und/oder NDA zugewiesen, was einen direkten Kontakt mit der Rechtsabteilung von GBAD erfordert. Wir haben diese beiden gruppiert, da beide einen Datenvertrag benötigen und für die Verwendung einen benannten (und authentifizierten) Zugriff erfordern.

```{Ermahnung} Entscheidung erforderlich
- Wie werden Benutzer authentifiziert?
- Wie werden Benutzergruppen authentifiziert?
- Welche Lizenz werden wir für von GBADs generierte Modelle und von den Modellen generierte Datenausgaben verwenden?
```

### Personenbezogene Daten (PII)

Personenbezogene Daten (PII) sind alle Informationen, die zur Identifizierung einer Person, eines Wohnsitzes oder einer Farm verwendet werden können. Dies können beispielsweise Namen, E-Mail-Adressen, Geolokalisierung oder Tierarztaufzeichnungen sein. Unabhängig von der Art der PII sollten die darin enthaltenen Daten sorgfältig verwaltet werden.

PII sollten geschützt und sicher sein, mit eingeschränkten Zugriffsanforderungen. Je nach Anwendungsfall können die Daten möglicherweise transformiert werden, um die PII zu schützen. Beispielsweise können Geolokalisierungen in der räumlichen Granularität aufsteigen und Daten können in Regionen oder Zonen oder nach Ländern bereitgestellt werden. E-Mail-Adressen, Telefonnummern und Namen von Farmen können bei der Aufnahme verschlüsselt und aus Datentabellen entfernt werden.

```{Ermahnung} Sichere Datenspeicherinfrastruktur
:klasse: Tipp
Da die GBADs Knowledge Engine ein Cloud-Service ist, werden alle Daten, die PII enthalten, in einem sicheren Bucket gespeichert, wie z. B. dem Bucket [Amazon S3](https://aws.amazon.com/s3/).
```

## Lizenzierung

Lizenzen informieren darüber, wer auf Daten zugreifen kann, wie Daten verwendet werden können, von wem sie zu welchen Zwecken verwendet werden dürfen und wie die Daten ordnungsgemäß zuzuordnen sind.

### Lizenz verwendet
Lizenzen haben 3 Dienstprogramme für GBADs, die jeweils durch die CARE-Prinzipien informiert sind:

```{tabbed} 1. Datenmitwirkende schützen
**Jedes Mal, wenn Daten zu GBADs beigetragen werden, müssen Dateninhaber eine Lizenz für ihre Daten auswählen.**

Dies ist ein CARE-Sharing-Mechanismus, da Lizenzen es Datenmitwirkenden ermöglichen, die Befugnis zu haben, ihre Daten während ihres gesamten Lebenszyklus zu kontrollieren, und mit Lizenzen, die die Nutzungsbeschränkungen der Daten vorschreiben, können die Daten für den kollektiven Nutzen des Dateninhabers einzeln verwendet werden, oder die Gruppe, die der Dateninhaber vertritt.

Öffentlich verfügbare Lizenzen werden in den Metadaten verlinkt, und die Zitier-/Zuordnungsinformationen werden zusammen mit dem Datensatz verbreitet.
```

```{tabbed} 2. Datennutzer informieren
Jeder Datensatz wird lizenziert und die Lizenzierungs- und Zitierinformationen sind in den Metadaten des Datensatzes verfügbar. Daher werden Datennutzer darüber informiert, wie sie die Daten, auf die sie zugreifen, verwenden können und welche Zuordnung sie verwenden müssen.
```

```{tabbed} 3. Systemansicht informieren
Offene und öffentliche Daten sind für jeden Benutzer verfügbar, der die Website betritt, aber Gruppen- oder benannte Zugriffsdaten müssen authentifiziert werden und sind daher standardmäßig nicht zugänglich.

Mit anderen Worten, die Ansicht von GBADs Knowledge Engine wird durch die Lizenzvereinbarung informiert. In einigen Fällen kann dies dazu führen, dass nicht einmal die Metadaten unbefugten Benutzern angezeigt werden. In anderen Fällen können die beschreibenden Metadaten verfügbar sein und Benutzer könnten den Zugriff anfordern. Was die Öffentlichkeit oder bestimmte Benutzer und Gruppen sehen können, wird durch die Entscheidungen des Datenbenutzers bestimmt.
```

### Lizenzauswahl

Dateninhaber, die Open- oder Public-Access-Daten beitragen, müssen eine Lizenzvereinbarung für ihre Daten wählen. Es gibt eine Reihe von Datenlizenzvereinbarungen, aus denen Dateninhaber wählen können. Diese beinhalten:

- Creative-Commons-Lizenzen. Das [Creative Commons-Lizenzauswahltool] (https://creativecommons.org/choose/) ermöglicht es Einzelpersonen, die Nutzungs-, Anpassungs- und Freigabefunktionen auszuwählen, und stellt eine Lizenz bereit, die diese Präferenzen widerspiegelt.
- [Open Data Commons-Lizenzen](https://opendatacommons.org/licenses/) einschließlich der [Open Data Commons Open Database License (ODbl)](https://opendatacommons.org/licenses/odbl/), der [Open Data Commons Attribution License](https://opendatacommons.org/licenses/by/) und die [Open Data Commons Public Domain Dedication and License (PDDL)](https://opendatacommons.org/licenses/pddl/).


```{admonition} Maschinenlesbare Lizenzen
GBADs untersucht, wie Lizenzen maschinenlesbar gemacht werden können, damit Daten, die durch die Knowledge Engine fließen und in GBADs Repositories gespeichert werden, FAIRer sein können. Darüber hinaus verwenden wir Datenschutzeinschränkungen, um Systemansichten für verschiedene Benutzer zu informieren und dabei zu helfen, die von den Datenlieferanten festgelegten Nutzungsanforderungen zu schützen.
```

```{Ermahnung} Entscheidung erforderlich
GBADs müssen bestimmen, ob Datenlieferanten die Lizenz für ihre Daten ändern können, nachdem sie sie übermittelt haben, und wenn ja, wie sie Personen mitteilen, die die betreffenden Daten möglicherweise heruntergeladen haben. Darüber hinaus müssen GBADs entscheiden, wie sich das Zurückziehen von Daten auf bereits vorhandene Modelle auswirkt.
```



<!---

Datentypen
GBADs ist ein vertrauenswürdiger Broker für

die folgenden Datentypen: indigen, akademisch, nicht korporativ (z. B. NGOs),
Unternehmens- und Handelsdaten (Tabelle 1). Durch die Zusammenarbeit mit Community-Outreach-Programmen und
anderen Organisationen können GBADs auch als einziges Repository für bestimmte Daten dienen. Daten können hineinfallen
mehrere Kategorien (z. B. können Daten Unternehmens- und Handelsdaten sein). Wir können die Daten auch klassifizieren
als offen (für alle zugänglich) oder privat (nur für eine bestimmte Gruppe von Benutzern zugänglich). Die Definitionen
jedes Datentyps bietet eine Grundlage für das Verständnis der Eigentums-, Zugriffs- und Lizenzspezifikationen
der von GBADs und seinen Nutzern verarbeiteten Daten.

Daten und Nutzertypen werden weiter verfeinert, da sie die Sicht auf das Datenportal bestimmen
Schnittstelle. Beispielsweise ist ein kontrolliertes Vokabular erforderlich, um indigene Daten richtig zu definieren. In dem
Im kanadischen Kontext reicht die Kennzeichnung von Daten einfach als „indigene Daten“ nicht aus, um die Herkunft richtig zu definieren
und Verwaltung dieser Datenbestände. Es gibt viele Arten von indigenen Völkern in Kanada (Metìs, First Nations,
etc.), jeweils aus verschiedenen Gegenden des Landes und mit unterschiedlichen Traditionen und Bräuchen. Daher in Ordnung
Damit die Daten von kollektivem Nutzen sind, müssen die Daten ordnungsgemäß gekennzeichnet werden, um welche Art von indigenen Daten es sich handelt
bezieht sich auf.

In ähnlicher Weise kann es für kleine Stakeholder ontologische Bedürfnisse geben, die noch nicht antizipiert sind, insbesondere wenn
Betrachten Sie jeden Stakeholder aus der globalen Perspektive. Wenn wir ein „vertrauenswürdiger“ Datenbroker für kleine Unternehmen sein möchten
Stakeholdern, Privatpersonen und Randgruppen ist es wichtig, dass wir insbesondere mit unseren Datenlieferanten zusammenarbeiten
diejenigen ohne Macht, unsere Daten so zu kommentieren, dass sie zum kollektiven Nutzen kleiner Interessengruppen dienen
(und nicht nur groß). --->

<!---Tabelle 1: Definitionen der Datentypen

| Datentyp | Bestimmung |
| --- | --- |
| Indigene Daten | Alle Daten im Besitz indigener Völker und ihrer Territorien, einschließlich, aber nicht beschränkt auf Daten in Bezug auf kulturelles Erbe, Wissen, natürliche Ressourcen, Praktiken und Sprachen. Dazu gehören Daten, die „von Regierungen und Institutionen über indigene Völker und ihre Territorien gesammelt werden“ (GIDA, 2019). |
|Akademische Daten | Daten, die Eigentum von Personen sind oder von Personen erhoben werden, die akademischen Einrichtungen wie Universitäten angehören. Dazu gehören Daten, die durch Artikel in wissenschaftlichen Zeitschriften verfügbar sind, und Daten, die durch experimentelle Verfahren für die Forschung gesammelt wurden. |
| GBADs-Datenspeicher | Daten, die durch Kooperationen mit GBADs wie Partnerschaften mit Gemeinden, Forschern, akademischen Einrichtungen und NGOs gesammelt werden. Beachten Sie, dass von GBADs gespeicherte Daten unter andere Kategorien fallen können (d. h. Daten, die von GBADs gespeichert werden, können auch akademische Daten sein), GBADs regeln jedoch die Lizenzierung und den Grad der Verfügbarkeit und Offenheit dieser Daten. |
| Handelsdaten | Daten von kommerziellen Organisationen, normalerweise, aber nicht beschränkt auf eine bezahlte Abgrenzungsmethode. |
| Unternehmensdaten | Daten, die von einem Unternehmen, einer Organisation oder einer Gruppe erhalten wurden. Dazu gehören Daten aus Regierungs- und UN-Quellen wie der Weltbank und der FAO. |
| Unternehmensfremde Daten | Daten von nicht juristischen Personen, Organisationen oder Einzelpersonen. |
```{note} Daten können kommerziell und korporativ oder nichtkommerziell sein.
``` --->


<!---

Lizenzierung


Um sicherzustellen, dass die Daten FAIR(S) und SORGFÄLTIG sind, werden die Lizenzinformationen für jede Datenquelle für Benutzer im zugänglich sein
Metadaten. Lizenzierungsinformationen müssen zugänglich sein, um sicherzustellen, dass Benutzer die Wiederverwendbarkeit der Daten beurteilen und einhalten können
mit potenziellen Datennutzungsbeschränkungen und Zuordnungsanforderungen. Klare und zugängliche Informationen über Datennutzungsbeschränkungen
sind besonders wichtig für die Einhaltung der CARE-Prinzipien; insbesondere zum Schutz der indigenen Datenhoheit und zur Aufhebung der
Rechte und Interessen aller indigenen Datenlieferanten von GBADs (CARE:A1;A2;A3).

```{Ermahnung} Entscheidung erforderlich
GBADs muss festlegen, ob es beabsichtigt, eine bevorzugte Lizenz für alle Daten zu haben, die in seinen Datenspeichern gespeichert sind, und ob
Diese Lizenz sollte eine sein, die sicherstellt, dass Daten nicht für kommerzielle Zwecke verwendet werden können.
```

Die Metadaten für jede Datenquelle müssen eine URL zur Lizenzvereinbarung der Daten und alle zugehörigen Metadaten (falls zutreffend) enthalten.

Eine Liste gemeinsamer Datenlizenzvereinbarungen wurde zusammengestellt und ist in Anhang F verfügbar: Gemeinsame Lizenzvereinbarungen. Im
In einigen Fällen, z. B. bei Daten, die aus nicht unternehmensinternen Quellen stammen, wurden Lizenzinformationen möglicherweise nicht bestimmt oder entschieden
an. Datenlieferanten erhalten unsere Liste bevorzugter Datenlizenzvereinbarungen oder werden ermutigt, eine Lizenz auszuwählen
mit dem [Creative Commons License Selector Tool] (https://creativecommons.org/choose/).

Um sicherzustellen, dass Daten zum kollektiven Nutzen der indigenen Völker verwendet werden, können indigene Datenlieferanten entscheiden, zu regieren
wer Zugriff auf ihre Daten hat (CARE:A2). Das GBADs-Datenportal wird so gestaltet, dass dieser Unterscheidung Rechnung getragen und sichergestellt wird
Sicherheit und Privatsphäre der beteiligten Parteien.

Umgang mit offenen und privaten Daten
------------------------------

Das GBADs-Datenportal ist ein Datenbroker, d. h. wir verarbeiten und liefern Daten, die von anderen Quellen bereitgestellt werden. Daher ist es nicht
nach Ermessen von GBADs zu bestimmen, wer auf Daten zugreifen kann, die nicht von GBADs aufbewahrt werden. Um sicherzustellen, dass die Rechte der Daten
Mitwirkende respektiert werden, stellen das Datenportal und die Informatik-Website sicher, dass die Daten sicher sind und nur auf sie zugegriffen werden kann
durch die von den Datenlieferanten/Eigentümern identifizierten Personen.

Wie von FAIR:A2 vorgeschlagen, werden Metadaten für alle Datenquellen (offen und privat) über ein Metadaten-Suchportal und verfügbar sein
bleiben auch dann zugänglich, wenn die Daten nicht mehr über das GBADs-Portal verfügbar sind. Allerdings nicht alle Daten
die den Metadaten entsprechen, stehen allen Benutzern zur Verfügung. Da Herkunftsinformationen in den Metadaten enthalten sind, wird dies der Fall sein
ermöglichen Datenbenutzern, archivierte Datenquellen bis zu ihrem ursprünglichen Eigentümer zurückzuverfolgen.

GBADs rechnet mit folgenden Benutzertypen:
- Akademische Benutzer
- Unternehmensbenutzer
- Nicht-Unternehmensbenutzer
- Gewerbliche Nutzer

Offene (Meta-)Daten werden für alle Nutzer von GBADs öffentlich zugänglich sein. Weitere Informationen finden Sie unter Mechanismen für die gemeinsame Nutzung von Daten
wie das GBADs-System mit verschiedenen Benutzertypen und Datenbeschränkungen umgeht, während Datenschutz und Sicherheit für das System Priorität haben. --->

