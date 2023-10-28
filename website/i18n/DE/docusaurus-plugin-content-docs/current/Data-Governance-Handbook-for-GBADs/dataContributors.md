---
sidebar_position: 10
---
# Leitfaden für Datenmitwirkende

Der Leitfaden für Datenlieferanten gibt Auskunft darüber, wie Sie mithilfe unserer Datenformulare Daten in unser System eingeben können.

GBADs zielt darauf ab, Daten FAIR zu machen, und das beginnt damit, sicherzustellen, dass wir eine strenge Metadatenproduktion haben und dass die Herkunft der Datenressourcen gut dokumentiert ist. Wenn Sie also Daten beisteuern, ist es wichtig, dass wir Informationen darüber sammeln, die die Wiederverwendung und Interoperabilität der bereitgestellten Datenressourcen ermöglichen.

## Warum die Metadatenproduktion wichtig ist

Die Erstellung von Metadaten ist wichtig, da sie die Wiederverwendung von Daten ermöglicht. Metadaten können als „Benutzerleitfaden“ für Ihre Daten betrachtet werden. Sie sollten Ihnen alles sagen, was Sie wissen müssen, um festzustellen, ob die Daten für Ihre Analyse geeignet sind und wie die Daten entstanden sind. Manchmal befinden wir uns in Situationen, in denen wir auf Daten stoßen und keine Ahnung haben, woher die Daten stammen, welche experimentellen Methoden zur Datenerhebung verwendet wurden oder welche Modelle die Daten erstellt haben. Noch problematischer ist es, wenn keine Maßeinheiten angegeben werden oder die Spaltenüberschriften nicht eindeutig sind. Metadaten sind die Lösung für dieses Problem. Wenn Sie also Ihre Daten in das GBADs-System eingeben oder API-Informationen aus einer anderen Quelle bereitstellen, werden wir Sie bitten, ein Formular auszufüllen, das automatisch Metadaten generiert, damit Sie (und andere) die Daten wiederverwenden und genaue Erkenntnisse und Modelle erstellen können und datengesteuerte Entscheidungen. Die Produktion granularer Metadaten führt letztendlich zu qualitativ hochwertigeren Daten.

## Fragen zu Ihren Daten zur Generierung von Metadaten

Abhängig von der Art der Daten, die Sie eingeben, können die Fragen leicht variieren. Wenn Sie beispielsweise Daten aus einer Modellausgabe eingeben, benötigen wir andere Informationen als wenn Sie Daten aus Haushaltsumfragen eingeben. Wenn wir mehr über die Datenquellen erfahren, die GBADs vermitteln, und über die Daten, die unsere Benutzer verwenden, wird sich unsere Metadatenproduktion weiterentwickeln.

Wir passen die Guidelines for Accurate and Transparent Health Estimates Reporting (GATHER-Richtlinien) für die vorläufige Metadatenproduktion an.

Hier sind die Fragen für jeden Datensatz, der in das GBADs-System gelangt:
Bitte beachten Sie, dass diese Fragen aus den GATHER-Richtlinien übernommen wurden und in einigen Fällen mit GATHER identisch sind.

1. Definieren Sie die Indikatoren, Populationen (geografische Einheiten, Tierarten) und Zeiträume, für die Schätzungen vorgenommen wurden.
2. Listen Sie Finanzierungsquellen für die Arbeit auf.
3. Beschreiben Sie, wie die Daten identifiziert und abgerufen wurden.
4. Geben Sie Einschluss-/Ausschlusskriterien an. Identifizieren Sie alle Ad-hoc-Ausschlüsse.
5. Stellen Sie Informationen zu allen enthaltenen Datenquellen und ihren Hauptmerkmalen bereit. Geben Sie für jede verwendete Datenquelle Referenzinformationen oder Kontaktnamen/-institutionen, die dargestellte Bevölkerung, die Datenerhebungsmethode, das/die Jahr(e) der Datenerhebung, Geschlecht und Altersspanne, Diagnosekriterien oder Messmethode und gegebenenfalls die Stichprobengröße an.
6. Identifizieren und beschreiben Sie alle Kategorien von Eingabedaten, die potenziell wichtige Verzerrungen aufweisen (z. B. basierend auf den in Punkt 5 aufgeführten Merkmalen).
7. Beschreiben und geben Sie Quellen für alle anderen Dateneingaben an.
8. Stellen Sie alle Dateneingaben in einem Dateiformat bereit, aus dem Daten effizient extrahiert werden können (z. B. eine Tabellenkalkulation anstelle eines PDF- oder API-Aufrufs, der zum Extrahieren von Daten verwendet wurde). Geben Sie für alle Dateneingaben, die aus ethischen oder rechtlichen Gründen nicht weitergegeben werden dürfen, z. B. Eigentum Dritter, einen Kontaktnamen oder den Namen der Institution an, die das Recht an den Daten behält.

Wenn die Daten mithilfe eines Modells oder einer Datenanalyse kuratiert wurden oder wenn Daten bereinigt wurden, bitten wir Sie, auch Folgendes zu beantworten:

1. Geben Sie eine detaillierte Beschreibung aller Schritte der Analyse, einschließlich mathematischer Formeln. Diese Beschreibung sollte gegebenenfalls Datenbereinigung, Datenvorverarbeitung, Datenanpassungen und Gewichtung von Datenquellen sowie mathematische oder statistische Modelle abdecken. Ein GitHub-Repo zum entsprechenden Code ist ebenfalls erforderlich.
2. Geben Sie die Ergebnisse einer Bewertung der Modellleistung (falls durchgeführt) sowie die Ergebnisse einer relevanten Sensitivitätsanalyse an.
3. Beschreiben Sie Methoden zur Berechnung der Unsicherheit der Schätzungen. Geben Sie an, welche Unsicherheitsquellen in der Unsicherheitsanalyse berücksichtigt wurden und welche nicht.

Jede dieser Fragen wird in einem Formular auf dem GBADs-Datenportal angezeigt, in dem Sie die einzelnen Felder entsprechend den Fragen ausfüllen.

Wir verstehen, dass einige Datenlieferanten bereits ihre eigenen Metadaten erstellen lassen. In diesen Fällen empfehlen wir Einzelpersonen, ihre Metadaten zum Ausfüllen der bereitgestellten Felder zu verwenden.

