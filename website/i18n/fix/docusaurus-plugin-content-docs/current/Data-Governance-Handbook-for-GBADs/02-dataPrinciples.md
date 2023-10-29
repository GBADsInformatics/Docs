---
sidebar_position: 2
---

# Datenprinzipien

Als Programm verfügen wir über zentrale Datenprinzipien, auf denen unser [Data Governance Operating Model](https://gbadskedoc.org/docs/Data-Governance-Handbook-for-GBADs/dataGovOperatingModel) basiert.

Zu unseren Grundprinzipien gehören:

1. Halten Sie sich nach besten Kräften an die Leitprinzipien von FAIR(S)[^1],[^2].
2. Seien Sie ein „vertrauenswürdiger“ Datenbroker und eine föderierte Datenquelle
3. Berücksichtigen Sie die CARE-Grundsätze, wenn Sie Daten von Randgruppen und private Daten verwenden
4. Stellen Sie sicher, dass alle Prozesse, die Daten nutzen (einschließlich Datenbereinigung, Modellierung, Neuformatierung usw.), reproduzierbar und reproduzierbar sind

---

In diesem Kapitel des Handbuchs skizzieren wir die Grundsätze, denen wir in unserem Data-Governance-Framework folgen wollen, und geben einen Überblick über die damit verbundenen Prozesse.

In anderen Kapiteln des Handbuchs werden die Prozesse, technologischen Werkzeuge und menschlichen Verantwortlichkeiten, die mit den einzelnen Grundsätzen verbunden sind, detaillierter beschrieben. Außerdem wird auf diese Grundsätze zurückgegriffen, wenn die Prozesse beschrieben werden, die für jedes unserer Datenziele erforderlich sind.

---

## 1. FAIR-Prinzipien und Datenkultur

Wir haben die Leitprinzipien von FAIR(S)[^1],[^2] übernommen, um sicherzustellen, dass Daten, Metadaten und Modellierungsprozesse **F**indable, **A**ccessibile, **I**ninteroperabile sind , Wiederverwendbar und Sicher.

<!-- Um Daten bereitzustellen und zu erstellen, die ihr volles Potenzial ausschöpfen können, ist GBADs bestrebt, Daten und Metadaten bereitzustellen, die **F**indierbar, **zugänglich**, **Interoperabel** sind. Wiederverwendbar und sicher (FAIR(S)). ->


---

**Über FAIR:**

Die „[FAIR Guiding Principles for Scientific Data Management and Stewardship](https://www.nature.com/articles/sdata201618)“ wurden 2016 in *Scientific Data* veröffentlicht. Seit seiner Veröffentlichung wurde der Artikel über 4500 Mal zitiert Zeiten und es gab Bemühungen, die FAIR-Prinzipien in verschiedenen Bereichen umzusetzen und zu akzeptieren. Dazu gehört die [GO FAIR Initiative](https://www.go-fair.org/go-fair-initiative/go-fair-offices/), die Ressourcen für Gruppen bereitstellt, die versuchen, ihre Daten FAIR zu machen.

---

<!--GBADs ist bestrebt, (Meta-)Daten bereitzustellen, die den FAIR(S)- und CARE-Prinzipien entsprechen, und wird gegebenenfalls eine modifizierte Version der GATHER-Anweisung und Checkliste übernehmen, um detailliertere Metadaten zu erstellen.

Durch die Nutzung und den Aufbau bereits bestehender Standards werden wir ein interoperables System aufbauen, das andere Forscher verstehen und darauf aufbauen können. ->



Die Idee von „FAIR“-Daten wurde 2014/15 entwickelt, um die Wiederverwendung, Nutzbarkeit, Auffindbarkeit und Interoperabilität von Forschungsdaten zu steuern. Das Akronym „FAIR“ steht für Auffindbarkeit, Zugänglichkeit, Interoperabilität und Wiederverwendbarkeit von Datenbeständen, einschließlich der Daten selbst und der Metadaten, die zu ihrer Beschreibung verwendet werden (eine Aufschlüsselung der einzelnen FAIR-Prinzipien finden Sie in Anhang A). Die Idee von FAIR-Daten ist seitdem gewachsen und wurde weithin genutzt, angepasst und weiterentwickelt.
Im Jahr 2020 schlug die GBAD-Informatik „FAIR(S)“-Daten vor, um den FAIR-Leitprinzipien ein Element der Sicherheit hinzuzufügen.

Während die Idee von FAIR ursprünglich für die Wiederverwendung von Forschungsdaten entwickelt wurde, hat sie sich weiterentwickelt und kann auf offene und private Datenquellen angewendet werden. GBADs werden FAIR-Daten als Systemkonzept anpassen. Das FAIR-Datenökosystem (Abbildung 1) wird als Grundgerüst unseres Datenökosystems verwendet. Dieses Dokument dient als Datenmanagementplan, in dem jede Komponente des FAIR-Datenökosystems im Hinblick auf die Strukturierung von FAIR-Datenobjekten und die Definition der Verwendung der durch unser System fließenden Daten behandelt und diskutiert wird.

![fairDataObj](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/fairDataObj.png)

Ein weit verbreitetes Missverständnis bei der Einführung der FAIR-Sharing-Prinzipien besteht darin, dass FAIR vorschlägt, dass Daten standardmäßig „offen“ sein sollten; FAIR schlägt jedoch tatsächlich vor, dass Daten „so offen wie möglich, so geschlossen wie nötig“ sein sollten [Jones et al, 2018]. Für GBADs bedeutet dies, die FAIR-Prinzipien durch CARE zu ergänzen, worauf später in diesem Dokument ausführlicher eingegangen wird. Eine Schlüsselkomponente dabei wird die Identifizierung verschiedener Arten von Datennutzern und -mitwirkenden sein.

Durch die Sicherstellung, dass Metadaten in einer Standardform vorliegen, können GBADs FAIR entsprechen und als Rückgrat für unser System dienen und die Fähigkeit unterstützen, Ressourcen auf der Grundlage standardisierter Begriffe zu suchen und zu finden. Daher wird der Schwerpunkt auf klar definierte Metadatenattribute und -definitionen gelegt.

![cloudReg](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/cloudOfRegistries.png)

GBADs ist bestrebt, nicht nur FAIR im System zu integrieren, sondern mit unserem Unternehmen auch eine Kultur zu schaffen, die die Verwendung von FAIR in den Forschungsdaten der am größeren GBADs-Projekt beteiligten Wissenschaftler inspiriert. Wir glauben, dass dieser Wandel eine bessere Nutzung und Wiederverwendung von Daten ermöglichen wird, was eine Zusammenarbeit und eine bessere Ressourcenzuweisung ermöglicht.

## 2. Ein „vertrauenswürdiger“ Datenbroker

Es gibt viele Möglichkeiten, den Datenaustausch technisch zu erleichtern, z. B. Dateidownloads, APIs usw. In diesem Abschnitt werden die Prinzipien erläutert, die dahinter stehen, ein „vertrauenswürdiger“ Datenbroker und eine föderierte Datenquelle zu sein.

### Mechanismen für einen verantwortungsvollen Datenaustausch

**Die technologischen Mechanismen bei der Datenfreigabe von GBADs basieren auf der Fähigkeit, eine Datenanzeigearchitektur zu erstellen, die auf die Datenschutz- und Sicherheitsrechte verschiedener Benutzertypen zugeschnitten ist.**
Dies beruht insbesondere auf der Fähigkeit, Benutzer zu kategorisieren und Systemansichten für diesen Benutzer zu erstellen, in denen dieser Benutzer nur die Daten sehen kann, zu denen er berechtigt ist. Wir verwenden den Begriff „Ansicht“, wie er in der Datenbanktheorie beschrieben wird: *„Ansichten werden im Allgemeinen verwendet, um die Wahrnehmung, die jeder Benutzer von der Datenbank hat, zu fokussieren, zu vereinfachen und anzupassen.“ Ansichten können als Sicherheitsmechanismen verwendet werden, indem Benutzern der Zugriff auf Daten über die Ansicht ermöglicht wird, ohne dass den Benutzern die Berechtigung erteilt wird, direkt auf die zugrunde liegenden Basistabellen der Ansicht zuzugreifen Benutzer, denen sie Zugriff auf ihre Daten gewähren möchten, erstellen eine „Ansicht“ für diesen Datenbenutzer (entweder werden bestimmte Datenbestände ausgeblendet oder verfügbar gemacht). Dies gewährt Datenmitwirkenden die **Autorität zur Kontrolle** ihrer Datenressourcen. Dieses Konzept setzt natürlich die Fähigkeit voraus, Datennutzer zu kategorisieren.

Daten, die als „standardmäßig offen“ gelten, stehen jedem Benutzer, der das Datenportal betritt, öffentlich zur Verfügung und können ohne Einschränkung direkt heruntergeladen werden.

![sysView](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/systemView.png)

#### Benutzerauthentifizierung

Benutzer, die auf private Datenquellen zugreifen möchten, müssen sich mithilfe der vordefinierten Datenbenutzeridentifikationen von GBAD kategorisieren. Dies umfasst die Erstellung eines Benutzerprofils, die Feststellung, welcher Benutzertyp Sie sind, und die Eingabe einer entsprechenden Verifizierungsmethode. Die Verifizierungsmethode kann aus einer ORCHID-ID bestehen, wenn es sich um einen akademischen Benutzer handelt. Allerdings sind die Mechanismen hinter der Benutzerüberprüfung noch nicht festgelegt (wir versuchen immer noch herauszufinden, wie wir die Identität von Benutzern aus Randgruppen, privaten Interessengruppen usw. überprüfen). Diese Berechtigungen, sowohl in Bezug auf Benutzerinformationen als auch auf die Zugriffsrechte eines Datenbestands, werden in die Metadaten aufgenommen.

Sobald die Identität eines Benutzers überprüft werden kann, erhält dieser Benutzer eine Ansicht der Daten und einen API-Schlüssel, der ihm den Zugriff auf private Daten über einen API-Aufruf ermöglicht. Ebenso werden die Daten aus ihrer Sicht durch direkten Download verfügbar sein. Es ist zu beachten, dass FAIR-Prinzipien zwar normalerweise im Zusammenhang mit offenen Daten verwendet werden, Daten jedoch in verschiedenen Systemansichten und unter der Annahme, dass Daten standardmäßig nicht offen sind, FAIRifiziert werden können. Unsere Metadaten werden auffindbar, zugänglich, interoperabel und wiederverwendbar sein, wie es die FAIR-Leitprinzipien vorschlagen, aber innerhalb unseres Systems und wie durch unterschiedliche Ansichten geschützt. Offene Datenbestände sind beispielsweise für jeden auffindbar, Daten, die nur für bestimmte Datenbenutzer verfügbar sind, sind jedoch nur für diesen Benutzertyp auffindbar.

Im Allgemeinen wird jeder von GBADs vermittelte Datensatz mit einer eindeutigen Kennung ausgestattet, die ihn mit seinen Metadaten verknüpft. Wenn ein Benutzer auf irgendeine Weise auf die Daten zugreift (z. B. über einen API-Aufruf oder einen direkten Download), werden die eindeutige Kennung und die URL zum Metadatenportal zurückgegeben. Der Benutzer kann dann problemlos auf die Metadaten zugreifen. Ebenso können Benutzer ihre Datensuche mit dem Metadaten-Suchtool beginnen. Der Daten-API-Aufruf wird irgendwo in der Metadaten-Suchmaschine bereitgestellt (d. h. wenn Sie einen Datensatz von Interesse auswählen, werden Ihnen die Metadaten bereitgestellt).

### Herausforderungen bei Mechanismen für den Datenaustausch

Eine Herausforderung beim Entwurf der Systemansicht sind Lizenzschwierigkeiten bei der Bewältigung der Wiederverwendbarkeit einer Datenressource.
Es treten Bedenken hinsichtlich der Veröffentlichung und Berichterstattung von Ergebnissen auf, die auf privaten Daten basieren. Wenn private Daten in einem Modell oder für andere datengesteuerte Entscheidungen verwendet werden, wie werden Daten zitiert oder ordnungsgemäß zugeordnet (oder möglicherweise überprüft), ohne Zugriff auf Daten zu gewähren oder Ergebnisse von Modellen zu veröffentlichen, die private Daten als Eingabe verwendet haben? Es ist wichtig, die Meinungen der Datenakteure zu verstehen, um ihre Wünsche zur Datennutzung zu verstehen.

Eine weitere Schwierigkeit oder mögliche Einschränkung besteht darin, dass Benutzer mit bestimmten Ansichten nicht wissen, dass bestimmte Datenbestände überhaupt vorhanden sind.

## 3. CARE-Grundsätze

Zu den CARE-Grundsätzen gehören: Kollektiver Nutzen, Kontrollbefugnis, Verantwortung und Ethik. Jeder Grundsatz bezieht sich auf die Nutzung und Verwaltung von Daten, die Eigentum indigener Völker sind oder mit ihnen in Zusammenhang stehen, ihrem Land, ihrem Kulturgut und ihren Praktiken [Ref.] und ist in Anhang B in Kategorien unterteilt. CARE-Grundsätze werden in jedem Schritt der GBADs-Daten berücksichtigt Governance-Strategie und Datenportal-Design.

Wir erkennen an, dass unsere Interpretationen der CARE-Grundsätze möglicherweise nicht vollständig die wahren Interessen indigener Völker und Gruppen widerspiegeln, da das GBADs-Informatikteam derzeit keine indigenen Mitarbeiter beschäftigt oder keine Partnerschaften mit indigenen Völkern eingeht. Wenn offizielle Kooperationen mit indigenen Völkern und Gruppen entstanden sind, werden Strategien und Designs entwickelt und weiter verfeinert, um sicherzustellen, dass alle indigenen Daten zum kollektiven Nutzen der indigenen Völker verwaltet, verwaltet und genutzt werden.

## 4. Reproduzierbarkeit

### Datenherkunft

Wie Informationen über Daten von Spendern gesammelt oder abgerufen werden und wie diese Informationen ausgewertet und gespeichert werden und die Grundlage für die Generierung von Herkunftsinformationen zu allen von GBADs vermittelten Daten bilden.

Datenlieferanten müssen Angaben zur Herkunft machen.

Die Bereitstellung detaillierter Herkunftsinformationen für Datennutzer ist ein wesentliches Element der Bereitstellung von FAIR-Daten. Informationen zur Provenienz
sollte mindestens Folgendes abdecken:

1. Wer oder was hat die Daten erstellt? Dazu gehören Informationen über die Methodik, die zur Erstellung der Originaldaten verwendet wurde
(entweder durch ein Zitat oder die Bereitstellung von Informationen in den Metadaten). Informationen darüber, ob die Daten gespeichert wurden
auf irgendeine Weise transformiert (z. B. durch eine Änderung des Vokabulars/der Ontologie, Imputationstechniken, Schätzungen, Weglassen von Zeilen usw.)
sollten auch durch Verweise auf und Beschreibungen von Programmen oder Techniken bereitgestellt werden, die zur Durchführung dieser Transformationen verwendet werden.

2. Wann wurden die Daten erstellt und wann wurden zuletzt Änderungen an den Daten vorgenommen?

3. Kontext der Datenerstellung. Warum wurden die Daten erstellt oder produziert? Dadurch erhalten potenzielle Datennutzer Informationen darüber
ob die Verwendung der Daten ihren Bedürfnissen entspricht und ihren potenziellen Praktiken, Modellen oder anderen statistischen Techniken entspricht.

Von Interesse für diese Diskussion sind die für FAIR entwickelten Metriken:
[FAIR Metric FM-R1.2](https://github.com/FAIRMetrics/Metrics/blob/master/Distributions/FM_R1.2.pdf)

Der Datenzugriff richtet sich teilweise nach der Herkunft der Daten. Beispielsweise ist es wichtig zu verstehen, wer die Daten erstellt hat und wer ihnen gehört, um festzustellen, ob die Daten wiederverwendbar sind (FAIR-Prinzip 4). Im Rahmen von Lizenzvereinbarungen kann es spezifische Beschränkungen für den Datenzugriff geben, die bestimmen können, wie und von wem Daten verwendet werden dürfen.

---

Metadaten sollten die Herkunft und den Zweck sowie alle Einschränkungen oder Verpflichtungen bei der sekundären Verwendung, einschließlich Fragen der Einwilligung, angeben.

---

Provenienzinformationen für jeden Datensatz werden in Metadaten gespeichert, die allen Benutzern von GBADs zur Verfügung stehen und von ihnen durchsucht werden können. Es wird ein anerkannter Herkunftsstandard verwendet, um sicherzustellen, dass Herkunftsinformationen auffindbar und wiederverwendbar sind.

### GATHER-Anweisung

Die GATHER-Erklärung oder die **Leitlinien für **genaue und **transparente **H**Gesundheitsschätzungen **R**eporting, definiert die besten Berichtspraktiken für Studien, die Gesundheitsschätzungen berechnen [^4].

Die Gather-Checkliste enthält Informationen, die in globale Gesundheitsschätzungen einbezogen werden sollten:

| Artikelnummer | Checklistenpunkt |
| ----------- | -------------- |
| Ziele und Finanzierung | |
| 1 | Definieren Sie die Indikatoren, Populationen (einschließlich Alter, Geschlecht und geografische Einheiten) und Zeiträume, für die Schätzungen vorgenommen wurden. |
| 2 | Listen Sie die Finanzierungsquellen für die Arbeit auf. |
| Dateneingaben | |
| Für alle Dateneingaben aus mehreren Quellen, die im Rahmen der Studie synthetisiert werden: | |
| 3 | Beschreiben Sie, wie die Daten identifiziert wurden und wie auf die Daten zugegriffen wurde. |
| 4 | Geben Sie die Einschluss- und Ausschlusskriterien an. Identifizieren Sie alle Ad-hoc-Ausschlüsse. |
| 5 | Geben Sie Informationen zu allen enthaltenen Datenquellen und ihren Hauptmerkmalen an. Geben Sie für jede verwendete Datenquelle Referenzinformationen oder Kontaktnamen/-institutionen, die dargestellte Bevölkerung, die Datenerhebungsmethode, das/die Jahr(e) der Datenerhebung, Geschlecht und Altersspanne, Diagnosekriterien oder Messmethode und gegebenenfalls die Stichprobengröße an. |
| 6 | Identifizieren und beschreiben Sie alle Kategorien von Eingabedaten, die potenziell wichtige Verzerrungen aufweisen (z. B. basierend auf den in Punkt 5 aufgeführten Merkmalen). |
| Für Dateneingaben, die zur Analyse beitragen, aber nicht im Rahmen der Studie synthetisiert wurden:|
| 7 | Beschreiben und geben Sie Quellen für alle anderen Dateneingaben an. |
| Für alle Dateneingaben: | |
| 8 | Stellen Sie alle Dateneingaben in einem Dateiformat bereit, aus dem Daten effizient extrahiert werden können (z. B. eine Tabelle statt einer PDF), einschließlich aller relevanten Metadaten, die in Punkt 5 aufgeführt sind. Für alle Dateneingaben, die aus ethischen oder rechtlichen Gründen nicht weitergegeben werden können Geben Sie aus Gründen, wie z. B. Eigentum Dritter, einen Kontaktnamen oder den Namen der Institution an, die das Recht an den Daten behält. |
| Datenanalyse |
| 9 | Geben Sie einen konzeptionellen Überblick über die Datenanalysemethode. Ein Diagramm kann hilfreich sein. |
| 10 | Geben Sie eine detaillierte Beschreibung aller Schritte der Analyse, einschließlich mathematischer Formeln. Diese Beschreibung sollte gegebenenfalls Datenbereinigung, Datenvorverarbeitung, Datenanpassungen und Gewichtung von Datenquellen sowie mathematische oder statistische Modelle abdecken. |
| 11 | Beschreiben Sie, wie Kandidatenmodelle bewertet wurden und wie die endgültigen Modelle ausgewählt wurden. |
| 12 | Geben Sie die Ergebnisse einer Bewertung der Modellleistung (falls durchgeführt) sowie die Ergebnisse einer relevanten Sensitivitätsanalyse an. |
| 13 | Beschreiben Sie Methoden zur Berechnung der Unsicherheit der Schätzungen. Geben Sie an, welche Unsicherheitsquellen in der Unsicherheitsanalyse berücksichtigt wurden und welche nicht. |
| 14 | Geben Sie an, wie auf den analytischen oder statistischen Quellcode zugegriffen werden kann, der zur Erstellung von Schätzungen verwendet wird. |
| Ergebnisse und Diskussion |
| 15 | Stellen Sie veröffentlichte Schätzungen in einem Dateiformat bereit, aus dem Daten effizient extrahiert werden können. |
| 16 | Geben Sie ein quantitatives Maß für die Unsicherheit der Schätzungen an (z. B. Unsicherheitsintervalle). |
| 17 | Interpretieren Sie die Ergebnisse im Lichte der vorhandenen Beweise. Wenn Sie einen früheren Satz von Schätzungen aktualisieren, beschreiben Sie die Gründe für Änderungen in den Schätzungen. |
| 18 | Besprechen Sie die Einschränkungen der Schätzungen. Erörtern Sie etwaige Modellannahmen oder Dateneinschränkungen, die sich auf die Interpretation der Schätzungen auswirken. |
Tabelle aus [^4].


Während GBADs Gesundheitsschätzungen erstellen, werden wir GATHER als Ausgangspunkt und nicht als Endpunkt verwenden, da es sich dabei um die Gesundheit landwirtschaftlicher Tiere und nicht um Menschen handelt (wofür GATHER entwickelt wurde).


<!-- # Datenprinzipien und Governance

## Datenamt

**Data Governance ist die Verwaltung, Speicherung, Privatsphäre, Nutzung und Qualität der von einer Organisation verwendeten Daten und Metadaten.** Data Governance ist eine mehrdimensionale Aufgabe, die von allen Personen in einer Organisation die Einhaltung der dokumentierten Standards und Best Practices erfordert für alle Elemente der Datennutzung.
Die Einhaltung einer gut dokumentierten Data-Governance-Strategie ermöglicht eine verbesserte Datennutzung durch die Möglichkeit, Datenbestände optimal zu nutzen.

### Grundlagen der Datenverwaltung

Während es bei der Datenverwaltung um die Daten geht, geht es auch um die Personen, Prozesse und die Sicherheit der Daten.

**Datenverwaltung und Menschen**
Alle Personen, die Daten erstellen, nutzen, verbreiten oder verwalten, sind Teil der Data-Governance-Strategie und sollten diese einhalten.

**Datenverwaltung und -sicherheit**

**Datenverwaltung und -prozesse**

Begriffe zur Datenverwaltung, die Sie kennen sollten:
- Datenverwalter
- Datenintegration
- Datenherkunft
- Datenwissenschaft



#### Weitere Informationen zum Thema Data Governance
**Blogeinträge**
- https://towardsdatascience.com/what-we-got-wrong-about-data-governance-365555993048 -->

## Verweise
[^1]: https://www.nature.com/articles/sdata201618
[^2]: https://acsess.onlinelibrary.wiley.com/doi/full/10.1002/agj2.21017?af=R
[^3]: https://learn.microsoft.com/en-us/sql/relational-databases/views/views?view=sql-server-ver16
[^4]: https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(16)30388-9/fulltext
