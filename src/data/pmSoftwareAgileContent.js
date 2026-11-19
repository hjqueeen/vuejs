/** PM-Software für agile Projekte — Erwartete Fragen (Frage → Antwort, Deutsch) */

export const PM_SOFTWARE_AGILE_BOOK_ID = "book-pm-software-agile";

/** @param {string} id @param {string} category @param {string} question @param {string} answer @param {string} [ko] */
const card = (id, category, question, answer, ko) => ({
  id,
  frontCategory: category,
  term: question,
  explanationDe: answer,
  ...(ko ? { explanationKo: ko } : {}),
});

export const pmSoftwareAgileCards = [
  // —— Priorität hoch · Einführung, Wechsel, Alltag ——
  card(
    "card-pm-q1",
    "Priorität hoch · Einführung, Wechsel, Alltag",
    "In welchen Situationen sollte man das Tool wechseln?",
    "Man sollte das Tool wechseln, wenn die Funktionen nicht mehr zum Team passen.\n\n" +
      "Zum Beispiel: Am Anfang nimmt man ein einfaches Tool wie Trello. Später braucht man aber mehr – etwa Diagramme oder Dashboards – und Trello reicht nicht mehr. Dann wechselt man zu etwas Größerem, z. B. Jira.\n\n" +
      "Oder umgekehrt: Man hat ein großes, teures Tool gewählt, das Team wird kleiner, die vielen Funktionen braucht man nicht mehr – und man will Kosten sparen. Dann kann man auch zu einem kleineren Tool wechseln.\n\n" +
      "Kurz: Wechseln, wenn Nutzen und Aufwand nicht mehr zusammenpassen – nicht nur weil ein anderes Tool „schöner“ aussieht.\n\n" +
      "Und es gibt auch Situationen, in denen die Daten auf dem eigenen Server bleiben müssen. Dann kann man auch überlegen, zu einem Tool zu wechseln, das auf dem eigenen Server laufen darf.",
  ),
  card(
    "card-pm-q1-1",
    "Priorität hoch · Einführung, Wechsel, Alltag",
    "Wie kann man effizient ein Tool wechseln?",
    "Zuerst muss man prüfen: Geht der Datenaustausch zwischen den beiden Tools überhaupt?\n\n" +
      "Beim Export reicht oft CSV nicht. Man sollte schauen: Kommen Bilder, Anhänge, Kommentare, Reviews – also wirklich alles – vollständig raus? Und: Kann das neue Tool das Format auch lesen?\n\n" +
      "Wenn ja – dann kann man direkt umziehen. Wenn nicht – braucht man einen Zwischenschritt.\n\n" +
      "Zum Beispiel so: Neue Aufgaben nur noch im neuen Tool anlegen. Alte Tasks bleiben im alten Tool. Eine Zeit lang laufen beide parallel. Wenn die alten Aufgaben fertig sind, wird das alte Tool nach und nach leer. So wechselt man Schritt für Schritt.\n\n" +
      "Und wichtig: Mit dem Team sprechen und Schulung einplanen. Sonst technisch umgezogen – und niemand nutzt es richtig.",
  ),
  card(
    "card-pm-q2",
    "Priorität hoch · Einführung, Wechsel, Alltag",
    "Wie kann man sicherstellen, dass die Einführung von einem neuen Tool erfolgreich ist?",
    "Zuerst muss man klar definieren, wie das Team arbeiten will und was das Team sich wünscht.\n" +
      "Danach sollte das Team mit echten Aufgaben testen – zum Beispiel zwei Sprints.\n" +
      "Und wenn möglich, sollen alle Daten erfolgreich und vollständig umgezogen werden, und alle Mitarbeitenden sollen sich daran gewöhnen.",
  ),
  card(
    "card-pm-q3",
    "Priorität hoch · Einführung, Wechsel, Alltag",
    "Wie viel Zeit sollte man für die Einführung oder für die Nutzung von dem Tool im Alltag einplanen?",
    "Einführung: grob 1–2 Sprints zum echten Test (nicht nur Demo), plus Zeit für Schulung und Daten-Umzug – je nach Teamgröße mehr.\n\n" +
      "Im Alltag gehört eine kurze Pflege einfach dazu: Ticket aktualisieren, Status setzen, schauen ob Done passt.\n" +
      "Das sind oft nur ein paar Minuten pro Aufgabe – nicht extra eine Stunde.\n\n" +
      "Wenn man länger am Tool hängt als beim echten Abstimmen, dann ist das Tool zu kompliziert.",
  ),
  card(
    "card-pm-q4",
    "Priorität hoch · Einführung, Wechsel, Alltag",
    "Gibt es Situationen, wo man kein Tool nutzen sollte?",
    "Ja – sehr kleines Team am einem Ort, wenige Aufgaben, kurze Zeit: Wandboard oder einfache Liste kann reichen. Auch wenn niemand pflegen will/kann: dann lieber kein Dashboard als falsche Zahlen. „Mehr als Werkzeuge“ heißt: erst Menschen und Prozess, dann Tool – nicht Tool um jeden Preis.",
  ),
  card(
    "card-pm-q5",
    "Priorität hoch · Einführung, Wechsel, Alltag",
    "Welche Regeln/Vorgaben müssen festgelegt werden, damit das Tool korrekt gepflegt und richtig genutzt wird?",
    "Man braucht ein paar klare Regeln. Zum Beispiel: Was heißt bei uns Done? Welche Status gibt es – möglichst wenige? Wer priorisiert? Bei Kanban: Wie hoch ist das WIP-Limit? Und wann aktualisiert man das Board – z. B. nach dem Pull Request oder im Daily? Wichtig auch: Zahlen wie Velocity sind nur Hilfe zur Planung, keine Note für den Chef. Dazu kann man noch festlegen: Wie heißen die Tickets, welche Pflichtfelder wirklich nötig sind, und wer Admin ist. Ohne solche Regeln wird das Board schnell unbrauchbar.",
  ),

  // —— Praxis + eigene Erfahrung ——
  card(
    "card-pm-q6",
    "Priorität hoch · Praxis + eigene Erfahrung",
    "Nutzt du selbst eines dieser Tools – und welches in Firma bzw. Studienprojekt?",
    "Drei Erfahrungen: Bei Alstom arbeite ich mit IBM Jazz (vor allem RTC / ELM). In einer anderen Firma habe ich Jira genutzt. Im Studien-/Teamprojekt an der Hochschule GitHub Projects – weil Aufgaben und Code nah beieinander liegen und man schnell starten kann.\n\n" +
      "Warum Jazz bei Alstom: Wir bauen Züge und die dazugehörige Software – Sicherheit/Stabilität zählt besonders. Deshalb brauchen wir starke Nachverfolgbarkeit: Jede Codezeile hat Git-Historie, in den Commit-Messages steht die Ticket-ID, und man sieht immer, wer warum etwas geändert hat. Auch Änderungen an der Ticket-Beschreibung werden historisiert. Dazu lassen sich Testergebnisse mitverfolgen. Jazz/RTC ist dafür unser ALM-Standard (Application Lifecycle Management) – nicht nur ein einfaches Task-Board; oft auch wegen Server/Compliance und Nutzung über viele Teams.",
  ),
  card(
    "card-pm-q7",
    "Priorität hoch · Praxis + eigene Erfahrung",
    "Wie stark ist Jira bei euch / in eurer Branche wirklich „drin“ – oder nur auf dem Papier?",
    "In der Softwarebranche oft sehr stark – viele Firmen haben Jira schon als Standard. Bei Alstom nutzen wir eher IBM Jazz, nicht Jira. Also: Jira ist branchenweit oft „drin“, aber nicht überall – es hängt am Konzern und an Compliance.",
  ),
  card(
    "card-pm-q8",
    "Priorität hoch · Praxis + eigene Erfahrung",
    "Kannst du ein konkretes Beispiel nennen, wo ein Tool die Arbeit klar verbessert hat – und eines, wo es eher gestört hat?",
    "Ein gutes Beispiel ist GitHub Projects in einem Teamprojekt. Dort hat man die Aufgaben und Pull Requests direkt zusammen. Dadurch muss man nicht ständig zwischen verschiedenen Tools wechseln.\n\n" +
      "Ein schlechtes Beispiel ist Jira oder Jazz, wenn es zu viele Pflichtfelder und Status gibt. Dann beschäftigt sich das Team mehr damit, den Status zu aktualisieren, anstatt miteinander zu sprechen.\n\n" +
      "Ein anderes gutes Beispiel ist bei uns Jazz: Man sieht an der Ticket-ID im Commit, wer warum etwas geändert hat, und Tests hängen mit dran. Das hilft wirklich bei der Nachverfolgbarkeit.\n\n" +
      "Gestört hat es zum Beispiel, wenn man nur aufs Dashboard schaut, aber niemand das Board pflegt. Dann sind die Diagramme falsch – und das ist schlimmer als gar keine Zahlen. Oder wenn das Team meint, mit Kommentaren im Tool sei das Gespräch schon erledigt. Das reicht oft nicht.",
  ),

  // —— Eine Stufe tiefer ——
  card(
    "card-pm-q9",
    "Priorität hoch · Eine Stufe tiefer",
    "WIP-Limits stehen auf dem Board – aber was passiert, wenn das Management trotzdem mehr Tickets in „In Progress“ schiebt?",
    "Dann ist das Limit eigentlich nur noch Dekoration. Das Team arbeitet dann an zu vielen Aufgaben gleichzeitig. Dadurch dauert alles länger und auch die Qualität kann darunter leiden. Deshalb muss man das Limit als feste Regel einhalten. Wenn etwas blockiert ist, sollte man das offen zeigen, statt direkt eine neue Aufgabe anzufangen.",
  ),
  card(
    "card-pm-q10",
    "Priorität hoch · Eine Stufe tiefer",
    "Velocity soll keine Note sein. Wie erklärst du das einem Stakeholder, der genau diese Zahl als KPI will?",
    "Velocity zeigt uns, wie viel Arbeit das Team in einem Sprint schafft. Aber sie sagt nicht, wie fleißig jemand ist. Wenn man Velocity als Bewertung benutzt, besteht die Gefahr, dass Teams ihre Schätzungen künstlich erhöhen. Deshalb sollte man Velocity nur intern für die Planung nutzen. Nach außen sollte man lieber zeigen, was tatsächlich geliefert wurde und welchen Nutzen es gebracht hat.",
  ),
  card(
    "card-pm-q11",
    "Priorität hoch · Eine Stufe tiefer",
    "„Zwei Sprints mit echten Aufgaben testen“ – was genau prüft man in dem Test, und wann bricht man ab?",
    "In den zwei Sprints würde ich prüfen, ob das Tool wirklich zum Team passt. Zum Beispiel: Funktioniert unser Workflow? Sind die Rechte richtig eingestellt? Funktionieren die Integrationen und Reports? Und kann das Team das Board einfach pflegen?\n\n" +
      "Abbrechen würde ich den Test, wenn wichtige Funktionen fehlen oder das Tool zu kompliziert ist. Wenn der Aufwand für die Pflege größer ist als der Nutzen, lohnt es sich einfach nicht.",
  ),

  // —— Szenario ——
  card(
    "card-pm-q12",
    "Priorität hoch · Szenario",
    "Das Team will kein neues Tool. Wie gehst du vor, ohne es zu zwingen?",
    "Ich würde das Team auf keinen Fall zwingen. Zuerst würde ich fragen, warum wir überhaupt ein neues Tool brauchen und welche Probleme es aktuell gibt. Dann würde ich das Team bei der Auswahl und Einrichtung mitentscheiden lassen. Am Anfang würde ich nur die wichtigsten Funktionen nutzen und das Team Schritt für Schritt einarbeiten. Also lieber klein anfangen, statt direkt alles umzustellen.",
  ),
  card(
    "card-pm-q13",
    "Priorität hoch · Szenario",
    "Alle nutzen schon Jira, aber es ist chaotisch (zu viele Status, Pflichtfelder). Wechseln oder aufräumen?",
    "Ich würde Jira nicht sofort ersetzen, sondern erst einmal aufräumen. Zum Beispiel würde ich unnötige Status und Pflichtfelder entfernen und den Workflow einfacher machen. Ein Wechsel lohnt sich nur, wenn Jira grundsätzlich nicht zu den Anforderungen passt, zum Beispiel beim Thema Hosting oder Datenschutz. Denn ein kompletter Umzug kostet viel Zeit und Geld.",
  ),
  card(
    "card-pm-q14",
    "Priorität hoch · Szenario",
    "Das Board wird nicht gepflegt – die Diagramme sind falsch. Tool abschalten, Regeln erzwingen, oder Metriken weglassen?",
    "Ich würde die Metriken erst einmal nicht mehr für wichtige Entscheidungen verwenden. Denn falsche Zahlen sind manchmal sogar schlimmer als gar keine Zahlen. Danach würde ich gemeinsam mit dem Team klare Regeln für die Board-Pflege festlegen. Zum Beispiel, wann ein Ticket wirklich als „Done“ gilt. Das Tool komplett abzuschalten bringt meiner Meinung nach wenig, weil dadurch das eigentliche Problem nicht gelöst wird.",
  ),

  // —— Metriken ——
  card(
    "card-pm-q15",
    "Priorität hoch · Metriken",
    "Warum kann eine hohe Velocity ein schlechtes Zeichen sein?",
    "Eine hohe Velocity ist nicht automatisch etwas Gutes. Das Team kann zum Beispiel anfangen, Aufgaben höher zu schätzen oder Tickets zu früh auf „Done“ zu setzen. Dadurch steigt zwar die Zahl, aber die tatsächliche Leistung verbessert sich nicht. Deshalb sollte man Velocity nicht als Leistungsbewertung verwenden.",
  ),
  card(
    "card-pm-q16",
    "Priorität hoch · Metriken",
    "Wann haben Burndown und Velocity wirklich Sinn – und wann eher nicht?",
    "Burndown und Velocity sind sinnvoll, wenn die Aufgaben ungefähr gleichmäßig aufgeteilt sind und das Board regelmäßig und ehrlich gepflegt wird. Dann helfen sie dem Team bei der Planung. Wenn das Board aber chaotisch ist oder die Aufgaben sehr unterschiedlich groß sind, sind die Zahlen nicht besonders aussagekräftig. Als Bewertung für Mitarbeiter oder Teams sollte man sie sowieso nicht verwenden.",
  ),

  // —— Priorität mittel · Vergleich / Jira-Dominanz ——
  card(
    "card-pm-q17",
    "Priorität mittel · Vergleich / Jira-Dominanz",
    "Warum gerade diese fünf Tools – und nicht Linear, GitLab oder Asana?",
    "Ich habe diese fünf Tools ausgewählt, weil sie unterschiedliche Anwendungsfälle abdecken. Jira und Azure DevOps sind eher umfangreiche Lösungen. GitHub eignet sich besonders gut für die Arbeit rund um Code. OpenProject ist interessant, wenn man einen eigenen Server nutzen möchte, und Trello ist eher für eine einfache Aufgabenplanung gedacht.\n\n" +
      "Linear, GitLab oder Asana könnte man natürlich auch vergleichen. Aber ich finde, dass fünf Tools für einen guten Überblick erst einmal ausreichen.",
  ),
  card(
    "card-pm-q18",
    "Priorität mittel · Vergleich / Jira-Dominanz",
    "Jira und Azure DevOps können laut dir fast dasselbe. Gibt es einen Fall, in dem Azure klar besser ist als Jira?",
    "Ja, auf jeden Fall. Azure DevOps hat einen klaren Vorteil, wenn ein Unternehmen sowieso schon mit Microsoft arbeitet. Wenn man zum Beispiel Azure Repos, Pipelines und Boards zusammen nutzt, hat man alles an einem Ort. Dadurch braucht man weniger zusätzliche Integrationen als bei Jira mit verschiedenen Einzellösungen.",
  ),
  card(
    "card-pm-q19",
    "Priorität mittel · Vergleich / Jira-Dominanz",
    "Warum ist Jira so weit verbreitet – Historie, Marketplace, oder weil Firmen es schon haben?",
    "Ich denke, es liegt an mehreren Gründen. Erstens gibt es Jira schon sehr lange, nämlich seit ungefähr 2002. Zweitens bietet Jira viele Schnittstellen und Erweiterungen. Und drittens nutzen viele große Unternehmen Jira bereits als Standard. Deshalb bleiben viele Unternehmen einfach dabei.\n\n" +
      "Man kann zum Beispiel GitHub oder GitLab für den Code, Jenkins für die Build-Pipeline, Slack oder Teams für die Kommunikation und Confluence für die Dokumentation anbinden. Dazu kommen noch viele weitere Erweiterungen über den Atlassian Marketplace.",
  ),

  // —— KI / Manifest ——
  card(
    "card-pm-q20",
    "Priorität mittel · KI / Manifest",
    "Steht das Agile Manifest nicht gegen Tools – wann schadet ein Tool der Agilität?",
    "Nein, das Agile Manifest ist nicht grundsätzlich gegen Tools. Es sagt ja, dass Menschen und Zusammenarbeit wichtiger sind als Prozesse und Werkzeuge. Ein Tool kann also durchaus hilfreich sein. Problematisch wird es erst, wenn das Tool dem Team vorschreibt, wie es arbeiten soll, zu kompliziert wird oder persönliche Gespräche ersetzt.",
  ),
  card(
    "card-pm-q21",
    "Priorität mittel · KI / Manifest",
    "Wenn KI Stories schreibt und Fertigstellung schätzt: Wer trägt die Verantwortung, wenn die Schätzung falsch ist?",
    "Die Verantwortung liegt immer beim Team beziehungsweise bei den Menschen, die die Schätzung übernehmen. KI kann einen Vorschlag machen, aber die Entscheidung müssen wir selbst treffen. Auch die Prioritäten und die Verantwortung für die Planung bleiben beim Team. Deshalb sollte man klare Regeln festlegen, bevor man KI stärker im Arbeitsalltag einsetzt.",
  ),

  // —— Zusage vs. Prognose ——
  card(
    "card-pm-q22",
    "Priorität mittel · Zusage vs. Prognose",
    "Das Tool zeigt einen Fertigstellungstermin. Darf man den dem Kunden als Zusage geben?",
    "Nein – das ist eine Prognose, keine Garantie. Dem Kunden sollte man klar sagen, dass es nur eine Schätzung ist und sich der Umfang noch ändern kann. Deshalb sollte man lieber nicht zu viel versprechen.\n\n" +
      "Damit die Schätzung stimmt, sollte man die Aufgaben gleichmäßig aufteilen. Aber die Schätzung kann auch falsch sein. Deshalb sollte man die Aufgaben nicht zu hoch einschätzen. Under-promise ist besser.\n\n" +
      "Lieber weniger versprechen als zu viel.",
  ),
  card(
    "card-pm-q23",
    "Priorität mittel · Zusage vs. Prognose",
    "Wie verhindert man, dass man dem Kunden zu viele Features im nächsten Release verspricht – hilft das Tool dabei überhaupt?",
    "Tool zeigt Kapazität/Velocity nur als Hilfe. Das Tool zeigt uns nur, wie viel Kapazität das Team hat und wie schnell es arbeitet. Aber wichtig sind vor allem die Priorisierung und die Kommunikation. Man muss klar sagen, was unbedingt gemacht werden muss und was nur optional ist. Denn alles, was man zusagt, wird schnell als Pflicht angesehen. Deshalb sollte man lieber nicht zu viel versprechen.",
    "유용한 표현\n" +
      "• unbedingt gemacht werden muss: 반드시 해야 하는 것\n" +
      "• nur optional ist: 선택 사항인 것\n" +
      "• als Pflicht angesehen werden: 의무로 여겨지다\n" +
      "• nicht zu viel versprechen: 너무 많은 것을 약속하지 않다",
  ),

  // —— Verständnis sichern ——
  card(
    "card-pm-u1",
    "Weitere · Verständnis sichern",
    "Kannst du die Frage bitte noch einmal sagen?",
    "Kannst du die Frage bitte noch einmal sagen?",
  ),
  card(
    "card-pm-u2",
    "Weitere · Verständnis sichern",
    "Meinst du …, oder eher …?",
    "Meinst du …, oder eher …?",
  ),
  card(
    "card-pm-u3",
    "Weitere · Verständnis sichern",
    "Kurz nachfragen: Geht es dir um die Auswahl des Tools – oder um den Alltag danach?",
    "Geht es dir um die Auswahl des Tools – oder um den Alltag danach?",
  ),
  card(
    "card-pm-u4",
    "Weitere · Verständnis sichern",
    "Zeit gewinnen: Gute Frage. Ich glaube, du meinst … – stimmt das so?",
    "Gute Frage. Ich glaube, du meinst … – stimmt das so?",
  ),
  card(
    "card-pm-u5",
    "Weitere · Verständnis sichern",
    "Ehrlich: Einen Teil habe ich akustisch nicht verstanden. Meinst du X oder Y?",
    "Einen Teil habe ich akustisch nicht verstanden. Meinst du X oder Y?",
  ),

  // —— Praxis-Szenarien ——
  card(
    "card-pm-q24",
    "Weitere · Praxis-Szenarien",
    "Was machst du, wenn der Kunde oder der Chef das Board sehen will – und das Team das unangenehm findet?",
    "In dem Fall würde ich nicht einfach das komplette Arbeitsboard freigeben. Stattdessen würde ich eine gefilterte Ansicht oder ein kleines Dashboard erstellen, auf dem nur die wichtigsten Epics und deren aktueller Status zu sehen sind. Interne Kommentare und Diskussionen würde ich ausblenden. Das Team braucht einen geschützten Raum, in dem es offen arbeiten kann. Nach außen sollte man transparent zeigen, was geliefert wird und wie der Fortschritt aussieht, aber nicht jede interne Diskussion offenlegen.",
  ),
  card(
    "card-pm-q25",
    "Weitere · Praxis-Szenarien",
    "Das Tool sagt „Done“, der Tester sagt „noch nicht fertig“. Was gilt?",
    "Für mich gilt hier ganz klar die Definition of Done, also die gemeinsam festgelegten Kriterien dafür, wann eine Aufgabe wirklich fertig ist. Nur weil jemand im Tool auf „Done“ klickt, heißt das noch lange nicht, dass die Arbeit abgeschlossen ist. Wenn Entwickler und Tester unterschiedliche Vorstellungen haben, muss das Team die Definition of Done noch einmal gemeinsam klären. Sonst stimmen am Ende auch die Auswertungen und Diagramme nicht mehr.",
  ),
  card(
    "card-pm-q26",
    "Weitere · Praxis-Szenarien",
    "Zwei Teams: ein gemeinsames Jira-Projekt oder zwei getrennte?",
    "Ich würde in den meisten Fällen zwei getrennte Projekte empfehlen, weil jedes Team seine eigenen Abläufe und Verantwortlichkeiten hat. Dadurch bleiben die Boards übersichtlicher und die Teams können unabhängiger arbeiten. Natürlich kann man gemeinsame Epics, Abhängigkeiten oder ein übergeordnetes Dashboard miteinander verbinden. Nur weil beide Teams dasselbe Tool verwenden, müssen sie nicht automatisch im selben Projekt arbeiten.",
  ),
  card(
    "card-pm-q27",
    "Weitere · Praxis-Szenarien",
    "Die Demo sah toll aus – nach zwei echten Sprints hasst das Team das Tool. Abbrechen?",
    "Ja, ich würde auf jeden Fall darüber nachdenken, den Test abzubrechen oder das Tool deutlich zu vereinfachen. Genau dafür macht man ja einen Praxistest. Eine gute Demo bedeutet nicht automatisch, dass das Tool auch im Alltag funktioniert. Wenn das Team nach zwei Sprints merkt, dass die Arbeit damit komplizierter wird, sollte man das ernst nehmen. Es bringt nichts, nur wegen der bereits investierten Zeit daran festzuhalten. Lieber früh wechseln, als jahrelang mit dem falschen Tool arbeiten.",
  ),
  card(
    "card-pm-q28",
    "Weitere · Praxis-Szenarien",
    "Darf man Jira und GitHub Projects und Confluence gleichzeitig nutzen?",
    "Technisch ist das natürlich möglich, aber ich würde damit eher vorsichtig sein. Jedes zusätzliche Tool bedeutet auch zusätzlichen Pflegeaufwand. Wenn Aufgaben in Jira stehen, der Code in GitHub und wichtige Informationen in Confluence, muss klar sein, welches System für was zuständig ist. Meine Empfehlung wäre, einen zentralen Ort für die Aufgabenverwaltung zu haben und die anderen Tools sinnvoll damit zu integrieren. Sonst verbringt das Team irgendwann mehr Zeit mit der Pflege der Tools als mit der eigentlichen Arbeit.",
  ),
  card(
    "card-pm-q29",
    "Weitere · Praxis-Szenarien",
    "Remote-Team: reicht das Tool statt Daily Stand-up?",
    "Nein, meiner Meinung nach reicht das allein nicht aus. Das Tool zeigt zwar, woran jeder gerade arbeitet und welchen Status eine Aufgabe hat, aber es ersetzt nicht die direkte Kommunikation. Im Daily kann das Team kurz besprechen, ob es Blocker gibt oder jemand Unterstützung braucht. Gerade bei Remote-Teams ist dieser Austausch wichtig. Das Meeting muss auch nicht lange dauern, aber es komplett zu streichen, nur weil alle ihr Board aktualisieren, halte ich für keine gute Idee.",
  ),
  card(
    "card-pm-q30",
    "Weitere · Praxis-Szenarien",
    "Der Product Owner pflegt das Backlog im Tool kaum. Ist das Tool dann nutzlos?",
    "Ja, zumindest verliert das Tool dadurch einen großen Teil seines Nutzens. Wenn das Backlog nicht gepflegt wird und Prioritäten fehlen, zeigt das Board irgendwann nur noch eine unübersichtliche Sammlung von Aufgaben. Das Problem liegt dann aber nicht unbedingt an der Software, sondern eher an der Organisation. Zuerst muss geklärt werden, wer für die Priorisierung verantwortlich ist und wann das Backlog aktualisiert wird. Erst wenn diese Regeln klar sind, kann das Tool wirklich helfen.",
  ),

  // —— Eine Stufe tiefer / Grenzen ——
  card(
    "card-pm-q31",
    "Weitere · Eine Stufe tiefer / Grenzen",
    "Kann ein Tool Scrum und Kanban gleichzeitig gut abbilden?",
    "Ja, viele moderne Projektmanagement-Tools können sowohl Scrum als auch Kanban unterstützen. Man kann zum Beispiel Sprints aktivieren oder deaktivieren und die Boards entsprechend anpassen. Entscheidend ist für mich aber nicht, ob das Tool beide Methoden technisch unterstützt. Viel wichtiger ist, dass das Team weiß, nach welchen Regeln es arbeitet. Wenn man Scrum und Kanban einfach vermischt, ohne klare Abläufe festzulegen, wird das Board schnell unübersichtlich und die Zusammenarbeit schwierig.",
  ),
  card(
    "card-pm-q32",
    "Weitere · Eine Stufe tiefer / Grenzen",
    "Wandboard plus digitales Tool – Hybrid sinnvoll oder doppelte Arbeit?",
    "Ich finde eine Kombination grundsätzlich sinnvoll, zumindest für bestimmte Situationen. Bei einem Workshop vor Ort kann ein physisches Wandboard sehr praktisch sein, während das digitale Tool für die langfristige Dokumentation und für Remote-Teammitglieder genutzt wird. Problematisch wird es aber, wenn beide Boards dauerhaft parallel gepflegt werden müssen. Dann entstehen schnell unterschiedliche Informationsstände. Deshalb sollte man vorher festlegen, welches Board die führende Quelle ist und wann die Informationen übertragen werden.",
  ),
  card(
    "card-pm-q33",
    "Weitere · Eine Stufe tiefer / Grenzen",
    "„Integration“ auf der Folie – was ist das Minimum, das wirklich helfen muss?",
    "Für ein Entwicklerteam würde ich vor allem die Verbindung zwischen Aufgabenverwaltung und Code empfehlen. Zum Beispiel kann man die Ticket-ID direkt in der Commit-Message hinterlegen oder den Status eines Tickets mit einem Pull Request verknüpfen. Dadurch sieht man schneller, welche Änderungen zu welcher Aufgabe gehören. Das spart im Alltag einiges an Zeit und verhindert Missverständnisse. Chat- und Wiki-Integrationen sind natürlich auch hilfreich, aber die Verbindung zum Entwicklungsprozess ist für mich besonders wichtig.",
  ),
  card(
    "card-pm-q34",
    "Weitere · Eine Stufe tiefer / Grenzen",
    "Export ist möglich – aber heißt das wirklich kein Vendor-Lock-in?",
    "Nein, nur weil ein Tool einen Export anbietet, bedeutet das noch lange nicht, dass man unabhängig vom Anbieter ist. Entscheidend ist, ob man die exportierten Daten auch in ein anderes System übernehmen kann. Dazu gehören nicht nur die Tickets selbst, sondern auch Kommentare, Anhänge, Verknüpfungen und die Änderungshistorie. Bei einem einfachen CSV-Export können viele dieser Informationen verloren gehen. Deshalb würde ich den Export schon während der Testphase ausprobieren und überprüfen, ob sich die Daten tatsächlich weiterverwenden lassen.",
  ),
  card(
    "card-pm-q35",
    "Weitere · Eine Stufe tiefer / Grenzen",
    "Marketplace / Zusatz-Apps: Chance oder Falle?",
    "Ich würde sagen, beides. Zusatz-Apps können sehr hilfreich sein, wenn einem bestimmte Funktionen fehlen oder man spezielle Anforderungen hat. Gleichzeitig entstehen dadurch aber zusätzliche Kosten und Abhängigkeiten. Außerdem können Updates oder Kompatibilitätsprobleme Schwierigkeiten verursachen. Wenn ein Tool nur mit fünf oder sechs zusätzlichen Plugins richtig funktioniert, würde ich mich fragen, ob es überhaupt das passende Tool für das Team ist. Im Idealfall sollte bereits die Grundversion die wichtigsten Anforderungen erfüllen.",
  ),

  // —— Quelle, Zahlen, Folien ——
  card(
    "card-pm-q36",
    "Weitere · Quelle, Zahlen, Folien",
    "Der State of Agile Report – wie belastbar sind die 84 % / 49 %?",
    "Ich würde diese Zahlen nicht als absolute Wahrheit betrachten, weil es sich um Umfrageergebnisse und nicht um eine wissenschaftliche Laborstudie handelt. Sie zeigen aber eine interessante Entwicklung und geben einen guten Überblick darüber, wie Unternehmen bestimmte Technologien einsetzen. Für mich ist vor allem die Richtung wichtig: Die Nutzung von KI nimmt zu, aber klare Regeln und Governance entwickeln sich nicht immer genauso schnell. Genau diese Lücke finde ich besonders interessant. Die konkreten Prozentzahlen würde ich deshalb eher als Orientierung und nicht als allgemeingültigen Beweis verwenden.",
  ),
  card(
    "card-pm-q37",
    "Weitere · Quelle, Zahlen, Folien",
    "Warum genau diese Metriken – und nicht z. B. Story Points pro Person?",
    "Weil ich finde, dass Metriken in erster Linie dem Team helfen sollen, den eigenen Arbeitsprozess zu verbessern. Wenn man Story Points pro Person vergleicht, entsteht schnell der Eindruck, dass einzelne Mitarbeiter bewertet werden. Das kann zu unnötigem Druck führen und sogar das Verhalten im Team negativ beeinflussen. Metriken wie Burndown, Velocity, Cycle Time oder Throughput sind sinnvoller, weil sie den gesamten Arbeitsfluss und die Planbarkeit betrachten. Wichtig ist natürlich, dass die Daten im Board auch ehrlich und regelmäßig gepflegt werden.",
  ),
  card(
    "card-pm-q38",
    "Weitere · Quelle, Zahlen, Folien",
    "OpenProject bei Behörden – hast du das selbst gesehen, oder nur gelesen?",
    "Da würde ich ehrlich zwischen eigener Erfahrung und Informationen aus Literatur oder Berichten unterscheiden. Meine eigene praktische Erfahrung liegt eher bei Tools wie Jazz, Jira und GitHub Projects. OpenProject kenne ich vor allem als typisches Beispiel für eine Open-Source-Lösung, die auch On-Premise betrieben werden kann. Das bedeutet, dass Unternehmen oder Behörden ihre Daten auf eigenen Servern speichern können. Ich würde also nicht behaupten, dass ich selbst intensiv damit gearbeitet habe, sondern es eher als bekanntes Einsatzbeispiel nennen.",
  ),

  // —— Organisation, Kauf, Druck ——
  card(
    "card-pm-q39",
    "Weitere · Organisation, Kauf, Druck",
    "Wer entscheidet beim Tool-Kauf – das Team oder die IT / der Einkauf?",
    "Ich finde, dass beide Seiten beteiligt sein sollten, aber unterschiedliche Aufgaben haben. Das Team sollte entscheiden können, ob das Tool zum eigenen Arbeitsprozess passt und ob es im Alltag gut funktioniert. Die IT und der Einkauf sollten dagegen Themen wie Datenschutz, Sicherheit, Kosten, Lizenzen und Betrieb prüfen. Wenn nur die IT ein Tool auswählt, ohne das Team einzubeziehen, besteht die Gefahr, dass das Tool später nicht akzeptiert wird. Andersherum kann das Team zwar ein gutes Tool finden, aber wenn es nicht den Sicherheitsanforderungen entspricht, kann es trotzdem nicht eingesetzt werden.",
  ),
  card(
    "card-pm-q40",
    "Weitere · Organisation, Kauf, Druck",
    "Die Firma zwingt ein Tool, das du nicht empfehlen würdest. Was dann?",
    "Wenn das Tool bereits von der Firma vorgegeben ist, würde ich zunächst versuchen, das Beste daraus zu machen. Man kann auch innerhalb eines nicht idealen Tools viele Dinge verbessern, zum Beispiel unnötige Status entfernen, die Definition of Done klar festlegen und überflüssige Pflichtfelder reduzieren. Außerdem würde ich darauf achten, dass Metriken nicht zur Bewertung einzelner Mitarbeiter verwendet werden. Natürlich würde ich auch offen ansprechen, welche Nachteile das Tool hat. Aber wenn ein Wechsel momentan nicht möglich ist, sollte man zumindest den eigenen Arbeitsprozess sinnvoll gestalten.",
  ),
  card(
    "card-pm-q41",
    "Weitere · Organisation, Kauf, Druck",
    "Lizenz wird plötzlich teurer. Was ist die Exit-Strategie?",
    "Das sollte man am besten schon vor der Einführung des Tools berücksichtigen. Ich würde vorher prüfen, ob ein vollständiger Export der Daten möglich ist und ob sich diese Daten auch in ein anderes System übertragen lassen. Außerdem sollte man die eigenen Workflows dokumentieren und möglichst wenige zusätzliche Plugins verwenden. Wenn man alle Prozesse stark an einen bestimmten Anbieter anpasst, wird ein späterer Wechsel schwierig und teuer. Deshalb sollte man sich schon bei der Auswahl überlegen, wie man im Notfall wieder aus dem System herauskommt.",
  ),
  card(
    "card-pm-q42",
    "Weitere · Organisation, Kauf, Druck",
    "Externe Freelancer sollen mitarbeiten – was mit Rechten und Sichtbarkeit?",
    "In diesem Fall würde ich für externe Freelancer eigene Benutzerkonten einrichten und ihnen nur die Rechte geben, die sie für ihre Arbeit wirklich benötigen. Sie sollten beispielsweise nur Zugriff auf die Projekte und Informationen haben, an denen sie beteiligt sind. Admin-Rechte würde ich grundsätzlich nicht vergeben, nur weil es gerade einfacher ist. Gerade in der Industrie können Kommentare, Dokumente oder technische Informationen sensibel sein. Deshalb muss man genau kontrollieren, wer welche Informationen sehen und bearbeiten darf.",
  ),

  // —— KI und Alltag ——
  card(
    "card-pm-q43",
    "Weitere · KI und Alltag",
    "Die KI schreibt User Stories – aber sie sind falsch oder zu vage. Wie gehst du damit um?",
    "Ich würde die von der KI erstellte User Story zunächst nur als Entwurf betrachten und nicht direkt übernehmen. Der Product Owner oder das Team muss den Inhalt prüfen und die Akzeptanzkriterien konkretisieren. Besonders wichtig ist, dass die Anforderungen verständlich und umsetzbar sind. Wenn man ungenaue KI-Texte ungeprüft ins Backlog übernimmt, entstehen später Probleme bei der Entwicklung und beim Testen. Meine Grundregel wäre deshalb: Die KI darf Vorschläge machen, aber die endgültige Entscheidung und Freigabe liegt immer beim Menschen.",
  ),
  card(
    "card-pm-q44",
    "Weitere · KI und Alltag",
    "KI fasst Ticket-Diskussionen zusammen – darf man dem Summary vertrauen?",
    "Ich würde das Summary durchaus nutzen, aber nicht als einzige Informationsquelle. Gerade bei längeren Diskussionen kann eine KI helfen, die wichtigsten Punkte schnell zu verstehen und Zeit zu sparen. Allerdings besteht immer die Gefahr, dass wichtige Details oder unterschiedliche Meinungen verloren gehen. Deshalb sollten wichtige Entscheidungen direkt im Ticket dokumentiert werden. So kann jeder später nachvollziehen, was tatsächlich beschlossen wurde, ohne sich ausschließlich auf die KI-Zusammenfassung verlassen zu müssen.",
  ),

  // —— Studienprojekt / kleine Teams ——
  card(
    "card-pm-q45",
    "Weitere · Studienprojekt / kleine Teams",
    "Für ein Hochschulprojekt: Wann lohnt sich Jira wirklich nicht?",
    "Für ein kleines Hochschulprojekt mit vielleicht drei bis sechs Personen würde ich Jira nicht unbedingt empfehlen. Wenn das Projekt nur ein Semester dauert, die Aufgaben relativ überschaubar sind und man keine umfangreichen Reports benötigt, reichen GitHub Projects oder Trello meistens völlig aus. Jira bietet zwar viele Funktionen, aber man muss auch Zeit für die Einrichtung und Pflege investieren. Das lohnt sich meiner Meinung nach erst dann, wenn man wirklich komplexere Workflows, unterschiedliche Benutzerrechte oder detaillierte Auswertungen benötigt. Für kleine Teams ist eine einfache Lösung oft praktischer.",
  ),
  card(
    "card-pm-q46",
    "Weitere · Studienprojekt / kleine Teams",
    "Gratis-Version: Kann man damit „für immer“ arbeiten?",
    "Ja, grundsätzlich kann man mit einer kostenlosen Version auch langfristig arbeiten, besonders wenn es sich um ein kleines Team handelt. Für viele Hochschulprojekte oder kleinere Unternehmen reichen die kostenlosen Funktionen vollkommen aus. Allerdings sollte man sich vorher informieren, welche Einschränkungen es gibt. Das können zum Beispiel die maximale Anzahl an Benutzern, der verfügbare Speicherplatz, Automatisierungen oder zusätzliche Apps sein. Wichtig ist, dass man diese Grenzen kennt, bevor das Projekt größer wird oder man mitten in einer wichtigen Entwicklungsphase plötzlich auf eine kostenpflichtige Version wechseln muss.",
  ),
];

export const pmSoftwareAgileSections = [
  {
    id: "section-pm-einfuehrung",
    title: "1. Priorität hoch · Einführung, Wechsel, Alltag",
    cardIds: [
      "card-pm-q1",
      "card-pm-q1-1",
      "card-pm-q2",
      "card-pm-q3",
      "card-pm-q4",
      "card-pm-q5",
    ],
  },
  {
    id: "section-pm-praxis",
    title: "1. Priorität hoch · Praxis + eigene Erfahrung",
    cardIds: ["card-pm-q6", "card-pm-q7", "card-pm-q8"],
  },
  {
    id: "section-pm-stufe-tiefer",
    title: "1. Priorität hoch · Eine Stufe tiefer",
    cardIds: ["card-pm-q9", "card-pm-q10", "card-pm-q11"],
  },
  {
    id: "section-pm-szenario",
    title: "1. Priorität hoch · Szenario",
    cardIds: ["card-pm-q12", "card-pm-q13", "card-pm-q14"],
  },
  {
    id: "section-pm-metriken",
    title: "1. Priorität hoch · Metriken",
    cardIds: ["card-pm-q15", "card-pm-q16"],
  },
  {
    id: "section-pm-vergleich",
    title: "2. Priorität mittel · Vergleich / Jira-Dominanz",
    cardIds: ["card-pm-q17", "card-pm-q18", "card-pm-q19"],
  },
  {
    id: "section-pm-ki-manifest",
    title: "2. Priorität mittel · KI / Manifest",
    cardIds: ["card-pm-q20", "card-pm-q21"],
  },
  {
    id: "section-pm-zusage",
    title: "2. Priorität mittel · Zusage vs. Prognose",
    cardIds: ["card-pm-q22", "card-pm-q23"],
  },
  {
    id: "section-pm-verstaendnis",
    title: "3. Weitere · Verständnis sichern",
    cardIds: [
      "card-pm-u1",
      "card-pm-u2",
      "card-pm-u3",
      "card-pm-u4",
      "card-pm-u5",
    ],
  },
  {
    id: "section-pm-praxis-szenarien",
    title: "3. Weitere · Praxis-Szenarien",
    cardIds: [
      "card-pm-q24",
      "card-pm-q25",
      "card-pm-q26",
      "card-pm-q27",
      "card-pm-q28",
      "card-pm-q29",
      "card-pm-q30",
    ],
  },
  {
    id: "section-pm-grenzen",
    title: "3. Weitere · Eine Stufe tiefer / Grenzen",
    cardIds: [
      "card-pm-q31",
      "card-pm-q32",
      "card-pm-q33",
      "card-pm-q34",
      "card-pm-q35",
    ],
  },
  {
    id: "section-pm-quelle",
    title: "3. Weitere · Quelle, Zahlen, Folien",
    cardIds: ["card-pm-q36", "card-pm-q37", "card-pm-q38"],
  },
  {
    id: "section-pm-organisation",
    title: "3. Weitere · Organisation, Kauf, Druck",
    cardIds: [
      "card-pm-q39",
      "card-pm-q40",
      "card-pm-q41",
      "card-pm-q42",
    ],
  },
  {
    id: "section-pm-ki-alltag",
    title: "3. Weitere · KI und Alltag",
    cardIds: ["card-pm-q43", "card-pm-q44"],
  },
  {
    id: "section-pm-studienprojekt",
    title: "3. Weitere · Studienprojekt / kleine Teams",
    cardIds: ["card-pm-q45", "card-pm-q46"],
  },
];

export const PM_SOFTWARE_AGILE_CARD_IDS = pmSoftwareAgileSections.flatMap(
  (s) => s.cardIds,
);

export const orderedPmSoftwareAgileCards = PM_SOFTWARE_AGILE_CARD_IDS.map(
  (id) => pmSoftwareAgileCards.find((c) => c.id === id),
).filter(Boolean);

export const getPmSoftwareAgileCardById = (cardId) =>
  pmSoftwareAgileCards.find((c) => c.id === cardId) || null;
