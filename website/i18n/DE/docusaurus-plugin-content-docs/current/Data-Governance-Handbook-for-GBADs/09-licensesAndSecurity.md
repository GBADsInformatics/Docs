---
sidebar_position: 9
---
# Datenlizenzen, Sicherheit und Datenschutz

Es gibt drei Kernfälle, in denen Datenlizenzierung, Datenschutz und Sicherheit wichtig sind:

1. Sicherstellen, dass wir Daten gemäß der Lizenzvereinbarung verwenden, speichern und weitergeben und dass wir Daten ordnungsgemäß zitieren
2. Sichere Speicherung privater Daten zum Schutz personenbezogener Daten
3. Zuweisung einer Lizenz für alle von GBADs erstellten Ausgabedaten

Durch die Sicherstellung, dass die mit der Sicherheit und dem Zugriff auf Daten in GBADs verbundenen Prozesse eine Vertrauensgemeinschaft zwischen Datengebern und -nutzern fördern.

---

**Hinweis zu privaten Daten:**

Wir verwenden derzeit nur öffentliche Daten für Modelle in GBADs. Im Hinblick auf private Daten haben wir die Infrastruktur konzipiert und geschaffen, die die Sicherheit privater Daten unterstützt.

---

**Arbeitsgruppe 1 sollte sich der Lizenzierung und des Datenschutzes bewusst sein, wenn sie Partnerschaften und Allianzen mit potenziellen Datenlieferanten eingeht.**

## Datenoffenheit in einem Spektrum

GBADs verbreiten und speichern in einigen Fällen Daten, für die verschiedene Zugriffs-, Nutzungs- und Wiederverwendungsbeschränkungen gelten. Nicht alle Daten können offen sein, und Datenschutz ist nicht so einfach wie offene oder private Daten. Um den Austausch zu fördern, ist es wichtig, dass Datenlieferanten die Möglichkeit erhalten, auszuwählen, wie ihre Daten verwendet werden sollen, wofür sie verwendet werden sollen und von wem sie verwendet werden sollen. Datenlizenzvereinbarungen stellen sicher, dass die Datennutzung nicht verwechselt wird, und informieren unser System darüber, wer Daten sehen, herunterladen oder verwenden kann.

„{Marge}“
**Auch Daten, die als „Offen“ definiert sind, benötigen eine Lizenz!** Wenn Sie offene Daten verwenden, müssen Sie noch bestimmen, wie der Datensatz richtig zugeordnet (oder zitiert) wird. Darüber hinaus können Daten als offen betrachtet werden, es können jedoch dennoch Einschränkungen hinsichtlich ihrer Verwendung bestehen. Beispielsweise beschränken einige Open-Data-Lizenzen die Nutzung von Daten für kommerzielle Zwecke.
„

Das [Open Data Institute](https://theodi.org/about-the-odi/) kommuniziert diese Idee, indem es Daten in einem Spektrum von geschlossenen bis offenen Daten bereitstellt.

![AgDataSpectrum](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/20210723_AgDataSpectrum_ODI.png)

## Kategorien im Datenspektrum

Wir haben das Spektrum genutzt, um vier separate Datenlizenzierungskategorien zu entwickeln:

**Offene Daten**: „Offen bedeutet, dass jeder für jeden Zweck frei darauf zugreifen, sie verwenden, ändern und teilen kann (höchstens vorbehaltlich der Anforderungen, die Herkunft und Offenheit wahren).“

**Öffentlich zugängliche Daten**: Die Daten sind durch eine Lizenzvereinbarung geschützt, die die Nutzung und Verbreitung der Daten und/oder der Modelle, für die die Daten verwendet werden können, einschränkt. Dazu kann gehören, wie und für welche Zwecke die Daten genutzt werden können, Zuordnungspflichten usw.

**Gruppenbasierte Zugangsdaten**: Für den Zugriff auf die Daten ist eine Authentifizierung erforderlich. Wie öffentlich zugängliche Daten sind auch die Daten durch eine Lizenzvereinbarung geschützt, die die Nutzung und Verbreitung der Daten und/oder der Modelle, für die die Daten verwendet werden können, einschränkt.

**Benannte Zugangsdaten und interne Zugangsdaten**: Zur Regelung der Nutzung, Zuordnung und Zugriffsbeschränkungen der Daten ist ein besonderer Vertrag erforderlich. Dies wird ausdrücklich durch einen Vertrag und/oder eine Geheimhaltungsvereinbarung festgelegt, was einen direkten Kontakt mit dem Rechtsteam von GBAD erfordert. Wir haben diese beiden gruppiert, da für beide ein Datenvertrag erforderlich ist und für die Nutzung ein benannter (und authentifizierter) Zugriff erforderlich ist.

---

**Erforderliche Entscheidungen:**

* Wie werden Benutzer authentifiziert?
* Wie werden Benutzergruppen authentifiziert?
* Welche Lizenz werden wir für von GBADs generierte Modelle und von den Modellen generierte Datenausgaben verwenden?

---

### Persönlich identifizierbare Informationen (PII)

Persönlich identifizierbare Informationen (PII) sind alle Informationen, die zur Identifizierung einer Person, eines Wohnsitzes oder eines Bauernhofs verwendet werden können. Dazu können beispielsweise Namen, E-Mail-Adressen, Geolokalisierung oder Tierarztaufzeichnungen gehören. Unabhängig von der Art der personenbezogenen Daten sollten die darin enthaltenen Daten sorgfältig verwaltet werden.

PII sollten geschützt und sicher sein, mit eingeschränkten Zugriffsanforderungen. Abhängig vom Anwendungsfall können die Daten möglicherweise umgewandelt werden, um die personenbezogenen Daten zu schützen. Beispielsweise können Geolokalisierungen in der räumlichen Granularität aufsteigen und Daten können in Regionen oder Zonen oder nach Ländern bereitgestellt werden. E-Mail-Adressen, Telefonnummern und Namen von Farmen können bei der Aufnahme verschlüsselt und aus Datentabellen entfernt werden.

---

Sichere Datenspeicherinfrastruktur

Da es sich bei der GBADs Knowledge Engine um einen Cloud-Dienst handelt, werden alle Daten, die personenbezogene Daten enthalten, in einem sicheren Bucket gespeichert, beispielsweise im [Amazon S3](https://aws.amazon.com/s3/)-Bucket.

---

## Lizenzierung

Lizenzen legen fest, wer auf Daten zugreifen kann, wie Daten verwendet werden können, von wem sie zu welchen Zwecken verwendet werden dürfen und wie die Daten ordnungsgemäß zugeordnet werden können.

### Lizenznutzungen
Lizenzen verfügen über drei Dienstprogramme für GBADs, die jeweils auf den CARE-Grundsätzen basieren:

1. Schützen Sie Datenmitwirkende
**Jedes Mal, wenn Daten zu GBADs beigetragen werden, müssen Dateninhaber eine Lizenz für ihre Daten auswählen.**

Dabei handelt es sich um einen CARE-Sharing-Mechanismus, da Lizenzen es Datenmitwirkenden ermöglichen, die Befugnis zur Kontrolle ihrer Daten während des gesamten Lebenszyklus zu haben, und mit Lizenzen, die die Nutzungsbeschränkungen der Daten vorschreiben, können die Daten zum kollektiven Nutzen des Dateninhabers einzeln oder individuell verwendet werden die Gruppe, die der Dateninhaber repräsentiert.

Öffentlich verfügbare Lizenzen werden in den Metadaten verlinkt und die Zitier-/Attributionsinformationen werden zusammen mit dem Datensatz verbreitet.

2. Datennutzer informieren
Jeder Datensatz wird lizenziert und die Lizenz- und Zitierinformationen werden in den Metadaten des Datensatzes verfügbar sein. Daher werden Datennutzer darüber informiert, wie sie die Daten, auf die sie zugreifen, verwenden können und welche Quellenangabe sie verwenden müssen.

3. Systemansicht informieren
Offene und öffentliche Daten stehen jedem Benutzer zur Verfügung, der die Site betritt. Gruppen- oder benannte Zugriffsdaten erfordern jedoch eine Authentifizierung und sind daher standardmäßig nicht zugänglich.

Mit anderen Worten: Die Ansicht der GBADs Knowledge Engine wird durch die Lizenzvereinbarung bestimmt. In einigen Fällen kann dies dazu führen, dass unbefugten Benutzern nicht einmal die Metadaten angezeigt werden. In anderen Fällen sind die beschreibenden Metadaten möglicherweise verfügbar und Benutzer können Zugriff anfordern. Was die Öffentlichkeit oder bestimmte Benutzer und Gruppen sehen können, wird durch die Entscheidungen des Datenbenutzers bestimmt.

### Lizenzauswahl

Dateninhaber, die Open-Access- oder Public-Access-Daten bereitstellen, müssen eine Lizenzvereinbarung für ihre Daten abschließen. Es gibt eine Reihe von Datenlizenzvereinbarungen, aus denen Dateninhaber wählen können. Diese beinhalten:

* Creative-Commons-Lizenzen. Das [Creative Commons-Lizenzauswahltool](https://creativecommons.org/choose/) ermöglicht es Einzelpersonen, die Funktionen der Nutzung, Anpassung und Weitergabe auszuwählen und stellt eine Lizenz bereit, die diese Präferenzen widerspiegelt.
* [Open Data Commons-Lizenzen](https://opendatacommons.org/licenses/), einschließlich der [Open Data Commons Open Database License (ODbl)](https://opendatacommons.org/licenses/odbl/), der [Open Data Commons Attribution License](https://opendatacommons.org/licenses/by/) und die [Open Data Commons Public Domain Dedication and License (PDDL)](https://opendatacommons.org/licenses/pddl/).

### Zukünftige Richtungen

In einigen Fällen müssen Vereinbarungen über private Daten mit einem Rechtsteam getroffen werden, um sicherzustellen, dass die Nutzungsbeschränkungen, die Sicherheit und die Lizenzinformationen ordnungsgemäß zwischen dem Dateninhaber und den GBADs vereinbart werden.

<!-- Maschinenlesbare Lizenzen
GBADs untersucht, wie Lizenzen maschinenlesbar gemacht werden können, sodass Daten, die durch die Wissensmaschine fließen und in GBADs-Repositorys gespeichert werden, FAIRer sein können. Darüber hinaus verwenden wir Datenschutzbeschränkungen, um Systemansichten für verschiedene Benutzer zu informieren und so dazu beizutragen, die von Datenlieferanten festgelegten Nutzungsanforderungen zu schützen. ->

<!--
„{admonition} Entscheidung erforderlich.“
GBADs müssen festlegen, ob Datenlieferanten die Lizenz für ihre Daten ändern können, nachdem sie diese übermittelt haben, und wenn ja, wie sie mit Personen kommunizieren, die die betreffenden Daten möglicherweise heruntergeladen haben. Darüber hinaus müssen GBADs entscheiden, wie sich die Zurückziehung von Daten auf bereits bestehende Modelle auswirkt.
„
->


<!---

Datentypen
GBADs ist ein vertrauenswürdiger Broker für

die folgenden Datentypen: indigene, akademische, nicht-unternehmensbezogene (z. B. NGOs),
Unternehmens- und Geschäftsdaten (Tabelle 1). Durch die Zusammenarbeit mit Community-Outreach-Programmen und
Bei anderen Organisationen können GBADs auch als einziger Speicher für bestimmte Daten dienen. Daten können hineinfallen
mehrere Kategorien (z. B. können Daten geschäftlicher und kommerzieller Natur sein). Wir können die Daten auch klassifizieren
als offen (für alle zugänglich) oder privat (nur für eine definierte Gruppe von Benutzern zugänglich). Die Definitionen
Jeder Datentyp bietet eine Grundlage für das Verständnis der Eigentums-, Zugriffs- und Lizenzspezifikationen
der von GBADs und seinen Nutzern verarbeiteten Daten.

Daten und Benutzertypen werden weiter verfeinert, da sie zur Bestimmung der Ansicht des Datenportals verwendet werden
Schnittstelle. Beispielsweise ist ein kontrolliertes Vokabular erforderlich, um indigene Daten richtig zu definieren. Im
Im kanadischen Kontext reicht es nicht aus, Daten einfach als „indigene Daten“ zu kennzeichnen, um die Herkunft ordnungsgemäß zu definieren
und Verwaltung dieser Datenbestände. Es gibt viele Arten indigener Völker in Kanada (Metìs, First Nations,
usw.), jeder aus unterschiedlichen Gegenden des Landes und mit unterschiedlichen Traditionen und Bräuchen. Daher der Reihe nach
Damit die Daten von kollektivem Nutzen sind, müssen die Daten ordnungsgemäß gekennzeichnet werden, um welche Art von indigenen Daten es sich handelt
bezieht sich auf.

Ebenso kann es bei kleinen Stakeholdern ontologische Bedürfnisse geben, die noch nicht vorhergesehen werden, insbesondere wenn
Wir betrachten jeden Stakeholder aus der globalen Perspektive. Wenn wir ein „vertrauenswürdiger“ Datenbroker für kleine Unternehmen sein möchten
Insbesondere bei Interessengruppen, Privatpersonen und Randgruppen ist es wichtig, dass wir mit unseren Datenlieferanten zusammenarbeiten
diejenigen ohne Macht, unsere Daten so zu kommentieren, dass sie dem kollektiven Nutzen kleinerer Interessengruppen dienen
(und nicht nur groß). --->

<!---Tabelle 1: Datentypdefinitionen

| Datentyp | Definition |
| --- | --- |
| Indigene Daten | Alle Daten im Besitz indigener Völker und ihrer Territorien, einschließlich, aber nicht beschränkt auf Daten im Zusammenhang mit kulturellem Erbe, Wissen, natürlichen Ressourcen, Praktiken und Sprachen. Dazu gehören Daten, die „von Regierungen und Institutionen über indigene Völker und ihre Territorien gesammelt werden“ (GIDA, 2019). |
|Akademische Daten | Daten, die Eigentum von Personen sind, die akademischen Einrichtungen wie Universitäten angehören, oder von diesen gesammelt werden. Dazu gehören Daten, die durch wissenschaftliche Zeitschriftenartikel verfügbar sind, und Daten, die durch experimentelle Forschungsverfahren gesammelt wurden. |
| GBADs-Datenrepositorys | Daten, die durch Kooperationen mit GBADs wie Partnerschaften mit Gemeinden, Forschern, akademischen Institutionen und NGOs gesammelt werden. Beachten Sie, dass in GBADs gespeicherte Daten unter andere Kategorien fallen können (d. h. Daten, die in GBADs gespeichert sind, können auch akademische Daten sein), aber GBADs regeln die Lizenzierung sowie den Grad der Verfügbarkeit und Offenheit dieser Daten. |
| Kommerzielle Daten | Daten von kommerziellen Organisationen, in der Regel, aber nicht beschränkt auf eine kostenpflichtige Abgrenzungsmethode. |
| Unternehmensdaten | Von einem Unternehmen, einer Organisation oder einer Gruppe erhaltene Daten. Dazu gehören Daten aus Regierungs- und UN-Quellen, etwa von der Weltbank und der FAO. |
| Nicht-Unternehmensdaten | Daten von Nicht-Unternehmen, Organisationen oder Einzelpersonen. |
„{note} Daten können kommerzieller und geschäftlicher Natur oder nichtkommerzieller Natur sein.
``` --->


<!---

Lizenzierung


Um sicherzustellen, dass die Daten FAIR(S) und CARE sind, werden die Lizenzinformationen für jede Datenquelle für Benutzer im Internet zugänglich sein
Metadaten. Lizenzinformationen müssen zugänglich sein, um sicherzustellen, dass Benutzer die Wiederverwendbarkeit der Daten beurteilen und diese einhalten können
mit möglichen Datennutzungsbeschränkungen und Zuordnungsanforderungen. Klare und zugängliche Informationen zu Datennutzungsbeschränkungen
sind besonders wichtig für die Einhaltung der CARE-Grundsätze; insbesondere zum Schutz der indigenen Datensouveränität und zur Aufhebung der
Rechte und Interessen aller indigenen GBAD-Datenlieferanten (CARE:A1;A2;A3).

„{admonition} Entscheidung erforderlich.“
GBADs muss feststellen, ob es eine Vorzugslizenz für alle in seinen Datenrepositorys gespeicherten Daten beabsichtigt und ob
Diese Lizenz sollte sicherstellen, dass Daten nicht für kommerzielle Zwecke verwendet werden dürfen.
„

Die Metadaten für jede Datenquelle müssen eine URL zur Lizenzvereinbarung der Daten und allen zugehörigen Metadaten (falls zutreffend) enthalten.

Eine Liste allgemeiner Datenlizenzvereinbarungen wurde zusammengestellt und ist in Anhang F: Gemeinsame Lizenzvereinbarungen verfügbar. In
In einigen Fällen, beispielsweise bei Daten, die aus unternehmensfremden Quellen stammen, wurden Lizenzinformationen möglicherweise nicht ermittelt oder entschieden
An. Datenlieferanten erhalten unsere Liste bevorzugter Datenlizenzvereinbarungen oder werden aufgefordert, eine Lizenz auszuwählen
mit dem [Creative Commons License Selector Tool](https://creativecommons.org/choose/).

Um sicherzustellen, dass Daten zum kollektiven Nutzen indigener Völker genutzt werden, können sich indigene Datenlieferanten für die Regierung entscheiden
wer Zugriff auf seine Daten hat (CARE:A2). Das GBADs-Datenportal wird so konzipiert, dass es dieser Unterscheidung Rechnung trägt und dies gewährleistet
Sicherheit und Privatsphäre der Beteiligten.

Umgang mit offenen und privaten Daten
----------------

Das GBADs-Datenportal ist ein Datenbroker, das heißt, wir verarbeiten und stellen Daten bereit, die von anderen Quellen stammen. Daher ist es nicht so
Es liegt im Ermessen der GBADs, zu bestimmen, wer auf Daten zugreifen kann, die nicht in den GBADs gespeichert sind. Um sicherzustellen, dass die Rechte an Daten gewährleistet sind
Mitwirkende werden respektiert, das Datenportal und die Informatik-Website stellen sicher, dass die Daten sicher sind und nur abgerufen werden können
durch die von den Datenlieferanten/-eigentümern identifizierten Personen.

Wie von FAIR:A2 vorgeschlagen, werden Metadaten für alle Datenquellen (offen und privat) über ein Metadaten-Suchportal verfügbar sein
bleiben auch dann zugänglich, wenn die Daten nicht mehr über das GBADs-Portal verfügbar sind. Allerdings nicht alle Daten
Die entsprechenden Metadaten stehen allen Benutzern zur Verfügung. Da in den Metadaten Informationen zur Herkunft enthalten sind, ist dies der Fall
Ermöglichen Sie Datenbenutzern, archivierte Datenquellen bis zu ihrem ursprünglichen Eigentümer zurückzuverfolgen.

GBADs erwartet die folgenden Benutzertypen:
- Akademische Benutzer
- Unternehmensbenutzer
- Nicht-Unternehmensbenutzer
- Gewerbliche Nutzer

Offene (Meta-)Daten werden für alle Nutzer von GBADs öffentlich zugänglich sein. Weitere Informationen finden Sie unter Mechanismen zur Datenfreigabe
wie das GBADs-System mit unterschiedlichen Benutzertypen und Datenbeschränkungen umgeht und gleichzeitig Privatsphäre und Sicherheit für das System priorisiert. --->

