---
id: Arbeiten-mit-Anduryl
title: Arbeiten mit Anduryl
sidebar_position: 10
---

## Voraussetzungen
Sie können diese Programme entweder separat installieren oder Anaconda installieren.
- *Option 1*: Anakonda
- Installieren Sie die Distribution [Anaconda] (https://www.anaconda.com/products/distribution).
- *Option 2*: Separat installieren
- [Python3](https://www.python.org/downloads/) oder höher
- [Jupyter-Notebook] (https://jupyter.org/install)
- Sie verwenden Python, um Jupyter zu installieren

## Anduryl-Installation
1. **Planen**, wo Anduryl installiert werden soll.
- Wir empfehlen Ihnen, das Modul an einem leicht zugänglichen Ort zu installieren, z. B. in Ihrem Home-Ordner.
- Verwendete Terminologie:
- *PARENT_FOLDER*: Dies ist der Pfad zu dem Ordner, in dem Anduryl installiert werden soll.
- Dies kann überall auf Ihrem System sein, es sieht ähnlich aus (Sie können dies ändern) <br/>
Windows: „C:/Benutzer/IHR_NAME“ <br/>
Mac: `/home/name`
2. **Anduryl herunterladen**. Dies kann auf zwei Arten erfolgen, indem Sie es von Ihrem Browser herunterladen oder den Befehl git verwenden.
- *Option 1*: Browser
1. Navigieren Sie zu https://github.com/GBADsInformatics/anduryl-plus
2. Klicken Sie auf die grüne Schaltfläche „Code“ und dann auf „ZIP herunterladen“.
3. Verschieben Sie die heruntergeladene ZIP-Datei in den *PARENT_FOLDER*, in dem Sie Anduryl installieren möchten.
4. Klicken Sie mit der rechten Maustaste auf die ZIP-Datei und klicken Sie auf „Alle extrahieren“ oder „Hier extrahieren“.
5. **Umbenennen** Sie den neuen Ordner „anduryl-plus-master“ in „anduryl“.
6. Öffnen Sie die „Eingabeaufforderung“ oder das „Terminal“ Ihres Betriebssystems
7. Führen Sie „cd INSERT_PARENT_FOLDER_HERE“ aus
8. Führen Sie „python -m anduryl“ aus
- *Option 2*: Git-Befehl (erfordert die Installation von git)
1. Öffnen Sie Ihre Eingabeaufforderung/Ihr Terminal und navigieren Sie dann zu Ihrem PARENT_FOLDER.
- Führen Sie `cd INSERT_PARENT_FOLDER_HERE` aus
2. Führen Sie „git clone https://github.com/GBADsInformatics/anduryl-plus.git“ aus
3. Benennen Sie „anduryl-plus“ in „anduryl“ um
- Führen Sie dazu "mv anduryl-plus anduryl" aus
4. Führen Sie „python -m anduryl“ aus

## Anduryl im Jupyter-Notizbuch
**Anduryl importieren**
- Um Anduryl zu importieren, muss Jupyter wissen, wo es zu finden ist. Fügen Sie den folgenden Codeblock oben in Ihrem Jupyter Notebook hinzu, um das Modul zu importieren. <br/>
**Hinweis**: Ändern Sie den Code in Ihren PARENT_FOLDER, bevor Sie ihn ausführen.
„Python
#Dem System zeigen, wo Anduryl zu finden ist
System importieren
anduryl_path = 'INSERT_PARENT_FOLDER_HERE' # Pfad zum übergeordneten Anduryl-Ordner
if anduryl_path not in sys.path: sys.path.append(anduryl_path) # Pfad zu sys hinzufügen
Anduryl importieren
```
**Anwendungsbeispiele**
– Um mehr über die Verwendung von Anduryl in Jupyter Notebook zu erfahren, besuchen Sie [Example Anduryl with scripting](https://htmlpreview.github.io/?https://github.com/grongen/anduryl/blob/master/notebooks/Example_Anduryl_with_scripting. html)

## Anduryl in R Studio
1. Installieren Sie die Reticulate-Bibliothek, um Python-Module von R aufzurufen.
- Geben Sie in R `install.packages("reticulate")` ein
- Folgen Sie dem Assistenten, um reticulate zu installieren
2. Importieren Sie Reticulate und Anduryl, indem Sie den folgenden Code ausführen. <br/>
**Hinweis**: Ändern Sie die erste Zeile in Ihren PARENT_FOLDER
„R
anduryl_path = 'INSERT_PARENT_FOLDER_HERE'
Bibliothek ("retikulieren")
sys <-import("sys")
if (!anduryl_path %in% sys$path)(sys$path <- append(sys$path, anduryl_path))
anduryl <- import("anduryl")
```
3. Jedes Mal, wenn Sie R laden, müssen Sie Schritt 2 erneut ausführen.
4. Anwendungsbeispiel:
```r
proj <-anduryl$Project()
proj
```
Dieser Code sollte ausgegeben werden
```r
Hauptprojektklasse.
Eigenschaften:
- Einschätzungen
- Experten
- io
- Artikel
- main_results
- Ergebnisse
Methoden:
- add_results_from_settings
- berechnen_entscheidungsträger
- berechnen_expert_robustheit
- compute_item_robustness
- initialisieren
- zu_Ergebnissen
```
- Um mehr über das Programmieren mit Anduryl zu erfahren, besuchen Sie [Example Anduryl with scripting](https://htmlpreview.github.io/?https://github.com/grongen/anduryl/blob/master/notebooks/Example_Anduryl_with_scripting.html)
- **Hinweis**: Da Sie in R codieren, werden Sie Objekte mit `$` anstelle von `.` referenzieren
- Ex. `anduryl$Project()` anstelle von `anduryl.Project()`
