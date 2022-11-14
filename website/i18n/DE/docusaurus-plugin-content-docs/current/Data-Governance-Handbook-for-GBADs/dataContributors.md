---
sidebar_position: 7
---
# Leitfaden für Datenlieferanten

Der Leitfaden für Datenlieferanten enthält Informationen darüber, wie Sie mithilfe unserer Datenformulare Daten in unser System eingeben können.

GBADs zielt darauf ab, Daten FAIR zu machen, und das beginnt damit, sicherzustellen, dass wir eine strenge Metadatenproduktion haben und dass die Herkunft von Datenressourcen gut dokumentiert ist. Wenn Sie also Daten beitragen, ist es wichtig, dass wir Informationen darüber sammeln, die die Wiederverwendung und Interoperabilität der bereitgestellten Datenressourcen ermöglichen.

## Warum die Metadatenproduktion wichtig ist

Die Produktion von Metadaten ist wichtig, weil sie die Wiederverwendung von Daten ermöglicht. Metadaten können als „Benutzerhandbuch“ für Ihre Daten betrachtet werden – sie sollten Ihnen alles mitteilen, was Sie wissen müssen, um festzustellen, ob die Daten für Ihre Analyse geeignet sind und wie die Daten entstanden sind. Manchmal finden wir uns in Situationen wieder, in denen wir auf einige Daten stoßen und keine Ahnung haben, woher die Daten stammen, welche experimentellen Methoden zur Datenerhebung verwendet wurden oder welche Modelle die Daten erstellt haben. Noch beunruhigender ist es, wenn Maßeinheiten nicht angegeben werden oder Spaltenüberschriften mehrdeutig sind. Metadaten sind die Lösung für dieses Problem. Wenn Sie also Ihre Daten in das GBADs-System eingeben oder API-Informationen aus einer anderen Quelle bereitstellen, werden wir Sie bitten, ein Formular auszufüllen, das Metadaten automatisch generiert, damit Sie (und andere) die Daten wiederverwenden und genaue Erkenntnisse und Modelle erstellen können und datengesteuerte Entscheidungen. Die Produktion von granularen Metadaten führt letztendlich zu einer höheren Datenqualität.

## Fragen zu Ihren Daten, um Metadaten zu generieren

Abhängig von der Art der Daten, die Sie eingeben, können die Fragen leicht variieren. Wenn Sie beispielsweise Daten aus einer Modellausgabe eingeben, müssen wir andere Informationen kennen, als wenn Sie Daten aus Haushaltsumfragen eingeben. Wenn wir mehr über die Datenquellen erfahren, die GBADs vermittelt, und die Daten, die unsere Benutzer verwenden, wird sich unsere Metadatenproduktion weiterentwickeln.

Wir passen die Richtlinien für die genaue und transparente Berichterstattung über Gesundheitsschätzungen (GATHER-Richtlinien) für die vorläufige Metadatenerstellung an.

Hier sind die Fragen für jeden Datensatz, der in das GBADs-System eingeht:
Bitte beachten Sie, dass diese Fragen aus den GATHER-Richtlinien übernommen wurden und in einigen Fällen mit GATHER identisch sind.

1. Definieren Sie die Indikatoren, Populationen (geografische Einheiten, Tierarten) und Zeiträume, für die Schätzungen vorgenommen wurden.
2. Nennen Sie Finanzierungsquellen für die Arbeit.
3. Beschreiben Sie, wie die Daten identifiziert und abgerufen wurden.
4. Legen Sie Einschluss-/Ausschlusskriterien fest. Identifizieren Sie alle Ad-hoc-Ausschlüsse.
5. Geben Sie Informationen zu allen einbezogenen Datenquellen und ihren Hauptmerkmalen an. Geben Sie für jede verwendete Datenquelle Referenzinformationen oder Kontaktname/Institution, vertretene Bevölkerung, Datenerhebungsmethode, Jahr(e) der Datenerhebung, Geschlecht und Altersspanne, diagnostische Kriterien oder Messmethode und Stichprobengröße an, sofern relevant.
6. Identifizieren und beschreiben Sie alle Kategorien von Eingabedaten, die potenziell wichtige Verzerrungen aufweisen (z. B. basierend auf den in Punkt 5 aufgeführten Merkmalen).
7. Beschreiben und geben Sie Quellen für alle anderen Dateneingaben an.
8. Stellen Sie alle Dateneingaben in einem Dateiformat bereit, aus dem Daten effizient extrahiert werden können (z. B. eine Tabellenkalkulation anstelle eines PDF- oder API-Aufrufs, der zum Extrahieren von Daten verwendet wurde). Geben Sie für alle Dateneingaben, die aus ethischen oder rechtlichen Gründen nicht weitergegeben werden können, wie z. B. Eigentum von Dritten, einen Kontaktnamen oder den Namen der Institution an, die das Recht auf die Daten behält.

Wenn die Daten mithilfe eines Modells oder einer Datenanalyse kuratiert oder Daten bereinigt wurden, bitten wir Sie, auch die folgenden Fragen zu beantworten:

1. Geben Sie eine detaillierte Beschreibung aller Schritte der Analyse, einschließlich mathematischer Formeln. Diese Beschreibung sollte, soweit relevant, Datenbereinigung, Datenvorverarbeitung, Datenanpassungen und Gewichtung von Datenquellen sowie mathematische oder statistische Modelle umfassen. Ein GitHub-Repository zum entsprechenden Code ist ebenfalls erforderlich.
2. Geben Sie die Ergebnisse einer Bewertung der Modellleistung, falls durchgeführt, sowie die Ergebnisse aller relevanten Sensitivitätsanalysen an.
3. Beschreiben Sie Methoden zur Berechnung der Unsicherheit der Schätzungen. Geben Sie an, welche Unsicherheitsquellen in der Unsicherheitsanalyse berücksichtigt wurden und welche nicht.

Jede dieser Fragen wird in einem Formular auf dem GBADs-Datenportal präsentiert, wo Sie jedes der Felder entsprechend der Fragen ausfüllen.

Uns ist bewusst, dass einige Datenlieferanten bereits ihre eigenen Metadaten erstellt haben. In diesen Fällen empfehlen wir Einzelpersonen, ihre Metadaten zum Ausfüllen der bereitgestellten Felder zu verwenden.

