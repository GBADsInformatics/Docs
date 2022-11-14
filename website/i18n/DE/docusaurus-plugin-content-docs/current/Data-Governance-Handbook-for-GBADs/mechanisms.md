---
sidebar_position: 5
---
Mechanismen für die gemeinsame Nutzung von Daten
==========================

Es gibt viele Möglichkeiten, die gemeinsame Nutzung von Daten technisch zu erleichtern, z. B. Dateidownloads, APIs usw. In diesem Abschnitt werden die Prinzipien erläutert, die dahinter stehen, ein „vertrauenswürdiger“ Datenbroker und eine föderierte Datenquelle zu sein.

![sysView](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/systemView.png)

Die Mechanismen der GBADs-Datenfreigabe basieren auf der Fähigkeit, eine Datenansichtsarchitektur zu erstellen, die auf die Datenschutz- und Sicherheitsrechte verschiedener Benutzertypen zugeschnitten ist. Dies beruht insbesondere auf der Fähigkeit, Benutzer zu kategorisieren und Systemansichten für diesen Benutzer zu erstellen, in denen dieser Benutzer nur die Daten sehen kann, für die er autorisiert ist. Wir verwenden den Begriff „Ansicht“, wie er in der Datenbanktheorie beschrieben wird: „Ansichten werden im Allgemeinen verwendet, um die Wahrnehmung zu fokussieren, zu vereinfachen und anzupassen, die jeder Benutzer von der Datenbank hat. Ansichten können als Sicherheitsmechanismen verwendet werden, indem Benutzer über die Ansicht auf Daten zugreifen können, ohne den Benutzern Berechtigungen für den direkten Zugriff auf die zugrunde liegenden Basistabellen der Ansicht zu erteilen. Mit anderen Worten, wenn Datenlieferanten auswählen können, welche Art von Benutzern sie auf ihre Daten zugreifen lassen möchten, wird eine „Ansicht“ für diesen Datenbenutzer erstellt (entweder werden bestimmte Datenbestände ausgeblendet oder verfügbar gemacht). Dies gewährt Datenlieferanten die Befugnis, ihre Datenressourcen zu kontrollieren. Natürlich ist dieses Konzept abhängig von der Fähigkeit, Datenbenutzer zu kategorisieren (siehe Abschnitt Datentypen für eine detailliertere Diskussion dieses Konzepts).

Daten, die als „standardmäßig offen“ gelten, stehen jedem Benutzer, der das Datenportal betritt, öffentlich zur Verfügung und können uneingeschränkt direkt heruntergeladen werden. Um jedoch über eine API auf offene Daten zugreifen zu können, ist eine Registrierung erforderlich, um einen benutzerdefinierten API-Schlüssel zu erhalten.

Benutzer, die auf private Datenquellen zugreifen möchten, müssen sich anhand der vordefinierten Datenbenutzeridentifikationen von GBAD selbst kategorisieren. Dies besteht aus der Erstellung eines Benutzerprofils, der Identifizierung, welcher Benutzertyp Sie sind, und der Eingabe einer Verifizierungsmethode dafür. Die Verifizierungsmethode kann aus einer ORCHID-ID bestehen, wenn es sich um einen akademischen Benutzer handelt. Die Mechanismen hinter der Benutzerverifizierung werden jedoch noch festgelegt (wir versuchen immer noch herauszufinden, wie wir die Identität von Benutzern aus Randgruppen, privaten Interessengruppen usw. überprüfen). Diese Berechtigungen, sowohl in Bezug auf Benutzerinformationen als auch die Zugriffsrechte eines Datenbestands, werden in die Metadaten aufgenommen.

Sobald die Identität eines Benutzers verifiziert werden kann, erhält dieser Benutzer eine Ansicht der Daten und einen API-Schlüssel, der es ihm ermöglicht, über einen API-Aufruf auf private Daten zuzugreifen. Ebenso werden Daten in ihrer Ansicht durch direkten Download verfügbar sein. Es sollte beachtet werden, dass FAIR-Prinzipien zwar normalerweise im Zusammenhang mit offenen Daten verwendet werden, Daten jedoch innerhalb verschiedener Systemansichten und unter der Annahme, dass Daten nicht standardmäßig offen sind, FAIRifiziert werden können. Unsere Metadaten werden auffindbar, zugänglich, interoperabel und wiederverwendbar sein, wie von den FAIR-Leitprinzipien vorgeschlagen, aber innerhalb unseres Systems und wie durch unterschiedliche Ansichten geschützt. Offene Datenbestände sind beispielsweise für alle auffindbar, aber Daten, die nur bestimmten Datenbenutzern zur Verfügung stehen, sind nur für diesen Benutzertyp auffindbar.

Generell wird jeder von GBADs vermittelte Datensatz mit einer eindeutigen Kennung versehen, die ihn mit seinen Metadaten verknüpft. Wenn ein Benutzer auf irgendeine Weise auf die Daten zugreift (z. B. über einen API-Aufruf oder direkten Download), werden die eindeutige Kennung und die URL zum Metadatenportal zurückgegeben. Der Benutzer kann dann einfach auf die Metadaten zugreifen. Ebenso können Benutzer ihre Datensuche mit dem Metadaten-Suchtool beginnen. Der Daten-API-Aufruf wird irgendwo in der Metadaten-Suchmaschine bereitgestellt (d. h. wenn Sie einen Datensatz von Interesse auswählen, werden Ihnen die Metadaten bereitgestellt).


Herausforderungen bei Mechanismen zur gemeinsamen Nutzung von Daten
-------------------------------------

Eine Herausforderung beim Entwurf der Systemansicht sind Lizenzierungsschwierigkeiten bei der Bewältigung der **R**verwendbarkeit einer Datenressource.
Bedenken bestehen in Bezug auf die Veröffentlichung und Berichterstattung von Ergebnissen, die von privaten Daten inspiriert sind. Wenn private Daten sind
in einem Modell oder für andere datengesteuerte Entscheidungen verwendet werden wie Daten zitiert oder richtig zugeordnet (oder vielleicht verifiziert) werden
ohne Zugang zu Daten zu gewähren oder Ergebnisse von Modellen zu veröffentlichen, die private Daten als Eingabe verwendeten? Es ist wichtig
die Meinungen der Datenbeteiligten verstehen, um ihre Wünsche bezüglich der Verwendung von Daten zu verstehen.

Eine weitere Schwierigkeit oder mögliche Einschränkung besteht darin, dass Benutzer mit bestimmten Ansichten nicht wissen, dass bestimmte Datenbestände überhaupt existieren.

Vokabeln und Ontologien
-----------------------

Auf bereits vorhandene Vokabulare und Ontologien wird zugegriffen, sie werden verfeinert, verglichen und erweitert, um eine zu erstellen
kontrolliertes Vokabular für GBADs. Für jede Datenquelle wird auf Semantik zugegriffen, um sicherzustellen, dass die Wörter
verwendet, um Daten zu beschreiben, zwischen Datenquellen konsistent sind.

- Vokabulare für Datenquellen, die keine Vokabularstandards zitieren, werden abgerufen und Wörter werden
im Vergleich zu bereits bestehenden Datenstandards wie AGROVOC (kontrolliertes Vokabular der FAO)
- Gesammelte Vokabeln werden für alle Datenquellen verglichen, um zu sehen, wie die Beschreibung der Begriffe im Vergleich zueinander abschneidet.
- Ziel ist es, einen Standard für GBADs bereitzustellen, der die Interoperabilität und Datenqualität erhöht und letztendlich dazu führt
überlegene Modelle und Schätzungen
- Auch kontrollierte Vokabulare führen zu besseren Systemen und ermöglichen die Automatisierung von Aufgaben

Agroportal ist ein Ontologie-Mapping-Tool, mit dem GBADs geeignete Ontologien und Mappings zwischen ihnen bestimmen können
standardisierte Vokabeln für den Agrarsektor.
- Wir erkennen auch an, dass wir von Datenlieferanten nicht erwarten können, dass sie ihr Vokabular ändern, um dem von GBADs zu folgen
(und wenn wir gefragt haben, könnte es Leute davon abhalten, Daten beizusteuern). Dies unterstreicht die Bedeutung des Wortschatzes
Zuordnungen.

```{Ermahnung} Zu ergänzen
Allgemeine Diskussion darüber, wie sie sich unserer Meinung nach für GBADS entwickeln.
```

Herkunft
----------

Wie Informationen über Daten von Spendern gesammelt oder abgerufen werden und wie diese Informationen ausgewertet, gespeichert,
und bieten die Grundlage für die Generierung von Provenienzinformationen über alle von GBADs vermittelten Daten.

Datenlieferanten werden aufgefordert, Herkunftsinformationen bereitzustellen.

Die Bereitstellung detaillierter Herkunftsinformationen für Datennutzer ist ein wesentliches Element der Bereitstellung von FAIR-Daten. Provenienzangaben
sollte mindestens abdecken:
1. Wer oder was hat die Daten erstellt? Dazu gehören Informationen über die Methodik, die zur Erstellung der Originaldaten verwendet wurde
(entweder durch ein Zitat oder die Bereitstellung von Informationen in den Metadaten). Informationen darüber, ob die Daten gespeichert wurden
in irgendeiner Weise transformiert (z. B. durch eine Änderung des Vokabulars / der Ontologie, Imputationstechniken, Schätzungen, Weglassen von Zeilen usw.)
sollten auch durch Verweise auf und Beschreibungen von Programmen oder Techniken bereitgestellt werden, die verwendet werden, um diese Transformationen abzuschließen.

2. Wann wurden die Daten erstellt und wann wurden die Daten zuletzt geändert?

3. Kontext der Datenerstellung. Warum wurden die Daten erstellt oder produziert? Diese informiert potenzielle Datennutzer über
ob die Nutzung der Daten ihren Bedürfnissen entspricht und ihren potenziellen Praktiken, Modellen oder anderen statistischen Techniken entspricht.

Von Interesse für diese Diskussion sind die Metriken, die für FAIR entwickelt wurden:
[FAIR Metric FM-R1.2](https://github.com/FAIRMetrics/Metrics/blob/master/Distributions/FM_R1.2.pdf)

Der Datenzugriff richtet sich teilweise nach der Herkunft der Daten. Beispielsweise ist es wichtig zu verstehen, wer und erstellt hat
besitzt die Daten, um festzustellen, ob die Daten wiederverwendbar sind (FAIR-Prinzip 4). Es kann spezifische Einschränkungen für Daten geben
Zugriff im Rahmen von Lizenzvereinbarungen, die festlegen könnten, wie und von wem Daten verwendet werden können.

```{Anmerkung}
E3-Metadaten sollten die Herkunft und den Zweck sowie alle Einschränkungen oder Verpflichtungen bei der sekundären Nutzung einschließlich angeben
von Einwilligungsfragen.
```

Provenienzinformationen für jeden Datensatz werden in Metadaten gespeichert, die verfügbar gemacht und durchsucht werden können
von allen Benutzern von GBADs. Ein anerkannter Provenienzstandard wird verwendet, um sicherzustellen, dass Provenienzinformationen auffindbar sind
und wiederverwendbar.

Informationssammlung
----------------------

Umfragen/Formulare, die Informationen sammeln, die für die Herkunft und Benutzeridentifikation verwendet werden.
- ORCID-ID
- Anmeldeinformationen

