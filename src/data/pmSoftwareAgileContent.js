/** PM-Software für agile Projekte — Erwartete Fragen (Frage → Antwort, nur Deutsch) */

export const PM_SOFTWARE_AGILE_BOOK_ID = "book-pm-software-agile";

/** @param {string} id @param {string} category @param {string} question @param {string} answer */
const card = (id, category, question, answer) => ({
  id,
  frontCategory: category,
  term: question,
  explanationDe: answer,
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
    "Es ist schwer, von einem Tool zu einem anderen zu wechseln.\n" +
      "Wir haben es so gemacht: Alte Tasks bleiben im alten Tool.\n" +
      "Neue Aufgaben haben wir im neuen Tool angelegt.\n\n" +
      "Für eine gewisse Zeit haben wir beide Tools benutzt:\n\n" +
      "Mit der Zeit, als die alten Aufgaben fertig waren, wurde das alte Tool nach und nach leer.\n" +
      "So konnten wir Schritt für Schritt zum neuen Tool wechseln – über eine Übergangszeit.",
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
    "Einführung: grob 1–2 Sprints zum echten Test (nicht nur Demo), plus Zeit für Schulung und Daten-Umzug – je nach Teamgröße mehr.\n" +
      "Alltag: kurze Pflege gehört zur Arbeit dazu (Ticket aktualisieren, Status, Done-Kriterien) – oft wenige Minuten pro Aufgabe, nicht eine Extra-Stunde. Wenn die Pflege länger dauert als die Abstimmung, ist das Tool zu komplex.",
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
    "In der Softwarebranche oft sehr stark – viele Firmen haben Jira schon als Standard. Bei Alstom / Bahn nutzen wir eher Jazz/RTC, nicht Jira. Also: Jira ist branchenweit oft „drin“, aber nicht überall – es hängt am Konzern und an Compliance.",
  ),
  card(
    "card-pm-q8",
    "Priorität hoch · Praxis + eigene Erfahrung",
    "Kannst du ein konkretes Beispiel nennen, wo ein Tool die Arbeit klar verbessert hat – und eines, wo es eher gestört hat?",
    "Besser: GitHub Projects im Teamprojekt – Pull Request und Aufgabe nah beieinander, weniger Tool-Wechsel. Gestört: Wenn Jira (oder Jazz) zu viele Pflichtfelder und Status hat – dann wird nur noch Status gepflegt und das Gespräch fehlt.",
  ),

  // —— Eine Stufe tiefer ——
  card(
    "card-pm-q9",
    "Priorität hoch · Eine Stufe tiefer",
    "WIP-Limits stehen auf dem Board – aber was passiert, wenn das Management trotzdem mehr Tickets in „In Progress“ schiebt?",
    "Dann ist das Limit nur Dekoration. Folge: mehr parallele Arbeit, längere Cycle Time, schlechtere Qualität. Man muss das Limit als Regel verteidigen – oder sichtbar machen, was blockiert ist, statt neues anzufangen.",
  ),
  card(
    "card-pm-q10",
    "Priorität hoch · Eine Stufe tiefer",
    "Velocity soll keine Note sein. Wie erklärst du das einem Stakeholder, der genau diese Zahl als KPI will?",
    "Velocity zeigt, wie viel das Team plant – nicht wie „fleißig“ jemand ist. Als Note steigen die Schätzungen künstlich. Besser: Velocity intern zur Planung; nach außen Lieferung / Nutzen, nicht die Punktzahl.",
  ),
  card(
    "card-pm-q11",
    "Priorität hoch · Eine Stufe tiefer",
    "„Zwei Sprints mit echten Aufgaben testen“ – was genau prüft man in dem Test, und wann bricht man ab?",
    "Prüfen: eigener Workflow, Rechte, Integrationen, Reports, ob das Team das Board wirklich pflegt. Abbruch, wenn Grundbedürfnisse fehlen (z. B. kein Export, keine Code-Anbindung, zu komplex) oder der Pflegeaufwand den Nutzen frisst.",
  ),

  // —— Szenario ——
  card(
    "card-pm-q12",
    "Priorität hoch · Szenario",
    "Das Team will kein neues Tool. Wie gehst du vor, ohne es zu zwingen?",
    "Wenige Einstellungen, Team mitentscheiden lassen, Schulung einplanen. Erst den Schmerz klären (Warum wechseln?), dann klein starten – nicht „alles auf einmal Jira“.",
  ),
  card(
    "card-pm-q13",
    "Priorität hoch · Szenario",
    "Alle nutzen schon Jira, aber es ist chaotisch (zu viele Status, Pflichtfelder). Wechseln oder aufräumen?",
    "Meist erst aufräumen: Status reduzieren, Pflichtfelder streichen, Workflow vereinfachen. Wechsel nur, wenn das Tool grundsätzlich nicht passt (z. B. Daten/Hosting) – Umzug ist teuer.",
  ),
  card(
    "card-pm-q14",
    "Priorität hoch · Szenario",
    "Das Board wird nicht gepflegt – die Diagramme sind falsch. Tool abschalten, Regeln erzwingen, oder Metriken weglassen?",
    "Zuerst Metriken weglassen oder nicht als Entscheidung nutzen – falsche Diagramme sind schlimmer als keine. Dann Pflege-Regel im Team (Done-Definition). Tool abschalten löst das Verhalten nicht.",
  ),

  // —— Metriken ——
  card(
    "card-pm-q15",
    "Priorität hoch · Metriken",
    "Warum kann eine hohe Velocity ein schlechtes Zeichen sein?",
    "Weil man sie hochtreiben kann: höher schätzen, Tickets früh auf Done, Nacharbeit verstecken. Die Zahl steigt – die echte Leistung nicht. Als Note nutzlos.",
  ),
  card(
    "card-pm-q16",
    "Priorität hoch · Metriken",
    "Wann haben Burndown und Velocity wirklich Sinn – und wann eher nicht?",
    "Sinn: Aufgaben gleichmäßig geschnitten, Board ehrlich gepflegt, Zahlen zur Team-Planung. Nicht: als Chef-Note, bei chaotischem Board oder sehr ungleichen Tickets.",
  ),

  // —— Priorität mittel · Vergleich / Jira-Dominanz ——
  card(
    "card-pm-q17",
    "Priorität mittel · Vergleich / Jira-Dominanz",
    "Warum gerade diese fünf Tools – und nicht Linear, GitLab oder Asana?",
    "Typische Fälle: groß/mächtig (Jira, Azure), beim Code (GitHub), eigener Server (OpenProject), einfach (Trello). Linear/GitLab/Asana wären ähnliche Gruppen – fünf reichen für den Vergleich.",
  ),
  card(
    "card-pm-q18",
    "Priorität mittel · Vergleich / Jira-Dominanz",
    "Jira und Azure DevOps können laut dir fast dasselbe. Gibt es einen Fall, in dem Azure klar besser ist als Jira?",
    "Ja – wenn das Umfeld schon Microsoft-Stack ist (Azure Repos, Pipelines, Boards an einem Ort). Dann weniger Integration-Chaos als Jira + viele Einzellösungen.",
  ),
  card(
    "card-pm-q19",
    "Priorität mittel · Vergleich / Jira-Dominanz",
    "Warum ist Jira so weit verbreitet – Historie, Marketplace, oder weil Firmen es schon haben?",
    "Alles drei: seit ~2002, viele Schnittstellen/Apps, und in Konzernen oft schon Standard – deshalb bleibt es die erste Wahl.\n" +
      "Beispiele für Anbindungen: GitHub/GitLab (Code), Jenkins o. ä. (Build-Pipeline), Slack/Teams (Chat), Confluence (Wiki/Doku) – plus viele Apps im Atlassian Marketplace.",
  ),

  // —— KI / Manifest ——
  card(
    "card-pm-q20",
    "Priorität mittel · KI / Manifest",
    "Steht das Agile Manifest nicht gegen Tools – wann schadet ein Tool der Agilität?",
    "Nein – da steht „mehr als“, nicht „ohne“. Es schadet, wenn das Tool die Arbeit diktiert (Defaults = Prozess), zu komplex wird oder das Gespräch ersetzt.",
  ),
  card(
    "card-pm-q21",
    "Priorität mittel · KI / Manifest",
    "Wenn KI Stories schreibt und Fertigstellung schätzt: Wer trägt die Verantwortung, wenn die Schätzung falsch ist?",
    "Immer das Team / die Menschen, die die Zahl übernehmen. KI ist Vorschlag – Priorität und Commitment bleiben bei uns. Deshalb braucht man Regeln, bevor man KI stark nutzt.",
  ),

  // —— Zusage vs. Prognose ——
  card(
    "card-pm-q22",
    "Priorität mittel · Zusage vs. Prognose",
    "Das Tool zeigt einen Fertigstellungstermin. Darf man den dem Kunden als Zusage geben?",
    "Nein – das ist eine Prognose, keine Garantie. Dem Kunden klar sagen: Schätzung unter Annahmen; Scope kann sich ändern. Lieber wenig fest zusagen (under-promise).",
  ),
  card(
    "card-pm-q23",
    "Priorität mittel · Zusage vs. Prognose",
    "Wie verhindert man, dass man dem Kunden zu viele Features im nächsten Release verspricht – hilft das Tool dabei überhaupt?",
    "Tool zeigt Kapazität/Velocity nur als Hilfe. Verhindern tut Priorisierung und Kommunikation: Must klar machen, Rest als optional. Was man zusagt, wird zum Must – also nicht zu viel nennen.",
  ),

  // —— Form / Dozent ——
  card(
    "card-pm-q24",
    "Form / Dozent",
    "(Kontrast/Beamer) Sind die Tabellen und das Vergleichs-Dashboard auf dem Beamer noch lesbar?",
    "Danke – ich zoome / zeige nur die relevante Spalte / schwarzer Text, hoher Kontrast. Die Details stehen auch im Handout.",
  ),
  card(
    "card-pm-q25",
    "Form / Dozent",
    "(Folien-Dichte) Kannst du die Vergleichstabelle oder das Dashboard einmal nur mit dem relevanten Teil zeigen?",
    "Ja – z. B. nur die Zeile „Diagramme“ oder nur Jira vs. Azure. Vollständige Tabelle ist im Handout.",
  ),
  card(
    "card-pm-q26",
    "Form / Dozent",
    "(Sprechdynamik) Kannst du den Unterschied Jira vs. Azure noch einmal in einem Satz sagen?",
    "Funktionell ähnlich – die Wahl hängt am Umfeld: Microsoft-Stack → Azure DevOps; viele Apps/Schnittstellen → oft Jira.",
  ),

  // —— Weitere ——
  card(
    "card-pm-q27",
    "Weitere",
    "Was sieht ein Entwickler im Alltag von Velocity und Burndown – oder nur das Ticket-Board?",
    "Meistens vor allem das Board und die eigenen Tickets. Burndown/Velocity sieht man eher im Planning oder Retro – nicht den ganzen Tag. Wenn niemand das Board pflegt, sind die Diagramme sowieso wenig wert.",
  ),
  card(
    "card-pm-q28",
    "Weitere",
    "Wenn das Team remote arbeitet: Reicht das Tool, oder braucht man trotzdem feste Meetings?",
    "Das Tool reicht nicht allein. Es macht Status sichtbar und hilft bei Kommentaren. Prioritäten, Unklarheiten und echtes Feedback brauchen weiter Gespräch – Daily, Planning, Review.",
  ),
  card(
    "card-pm-q29",
    "Weitere",
    "Du sagst: Das Tool priorisiert nicht. Wer priorisiert dann konkret – Product Owner, Team, oder der Chef über das Tool?",
    "Fachlich der Product Owner (mit Stakeholdern). Das Team schätzt und sagt, was realistisch ist. Der Chef darf Ziele setzen – aber Priorität gehört nicht „ins Tool klicken“ ohne Gespräch. Das Tool speichert nur die Reihenfolge.",
  ),
  card(
    "card-pm-q30",
    "Weitere",
    "Gesamtkosten über drei Jahre: Welche Posten vergisst man am häufigsten außer der Lizenz?",
    "Zusatz-Apps, Schulung, Admin-/Pflegezeit (Workflows, Rechte), Migration/Umzug – manchmal auch eigener Server (Updates, Backup).",
  ),
  card(
    "card-pm-q31",
    "Weitere",
    "Was hat Vorrang, wenn Cloud billiger ist, aber Compliance den Server verlangt?",
    "Compliance zuerst. Billige Cloud hilft nicht, wenn Daten nicht dürfen. Dann Server/Data Center – und die Mehrarbeit (Betrieb) gleich mitplanen.",
  ),
  card(
    "card-pm-q32",
    "Weitere",
    "Ist Excel dann auch eine PM-Software – oder ab wann zählt etwas als „richtiges“ Tool?",
    "Excel reicht für eine Momentaufnahme. Für agile Teams fehlt oft Historie, Rechte, Code-Anbindung, automatische Diagramme. „Richtig“ ab dem Punkt, wo Workflow, Zusammenarbeit und Auswertung dauerhaft gebraucht werden.",
  ),
  card(
    "card-pm-q33",
    "Weitere",
    "Ersetzt Integration (Git, Pipeline, Chat) die Kommunikation – oder macht sie nur sichtbarer?",
    "Nur sichtbarer. Status und Pull Requests werden klarer. Entscheidungen und Feedback bleiben menschlich.",
  ),
  card(
    "card-pm-q34",
    "Weitere",
    "Kann ein Tool ein Team „agil machen“ – oder nur ein schon agiles Team unterstützen?",
    "Nur unterstützen. Agil wird man durch Verhalten (Priorisieren, Feedback, Anpassen) – nicht durch eine Lizenz.",
  ),
  card(
    "card-pm-q35",
    "Weitere",
    "Kleines Studienprojekt startet mit Trello, wächst auf 20 Leute – wann ist der Umstieg fällig, und wohin?",
    "Wenn Rechte, Sprints/Reports oder mehrere Teams wichtig werden – und Trello + Apps nicht mehr reicht. Dann oft Jira oder Azure DevOps; bei viel Code weiterhin GitHub/GitLab prüfen.",
  ),
  card(
    "card-pm-q36",
    "Weitere",
    "Der Chef verlangt ein Dashboard „wie bei Jira“, das Team will GitHub Projects. Wie entscheidest du?",
    "Bedarf klären: Braucht man wirklich die Diagramme? Wenn ja und GitHub zu wenig Reports hat → Jira/Azure oder Reporting separat. Wenn das Team nur Tasks+Code braucht → GitHub, und dem Chef zeigen, welche Transparenz schon reicht.",
  ),
  card(
    "card-pm-q37",
    "Weitere",
    "Zwei Tools parallel (z. B. Jira + Miro, oder Jira + GitHub): Wann ist das sinnvoll, wann schädlich?",
    "Sinnvoll, wenn jedes eine klare Rolle hat (Tasks vs. Workshop, oder PM vs. Code). Schädlich, wenn dieselbe Aufgabe doppelt gepflegt wird – dann doppelte Wahrheit und Chaos.",
  ),
  card(
    "card-pm-q38",
    "Weitere",
    "Pull Request ist fertig, aber das Ticket bleibt auf „In Progress“. Was läuft organisatorisch schief – und was kann das Tool davon lösen?",
    "Organisatorisch: Done-Definition unklar oder niemand aktualisiert. Tool kann helfen durch Integration (Pull Request schließen → Status). Aber die Regel „wann ist Done?“ muss das Team setzen.",
  ),
  card(
    "card-pm-q39",
    "Weitere",
    "OpenProject: Reicht „Daten bleiben im Haus“ als Argument, wenn Funktionen und Community schwächer sind?",
    "Für Behörden/sensible Daten oft ja, das ist das Hauptargument. Man tauscht Funktionsfülle gegen Kontrolle. Man muss den Betriebsaufwand ehrlich mitrechnen.",
  ),
  card(
    "card-pm-q40",
    "Weitere",
    "Trello ohne Sprint-Diagramme – wann ist „einfach“ wichtiger als Reporting?",
    "Kleine Teams, kurze Projekte, wenig Stakeholder-Reporting – z. B. Studienprojekt. Sobald Planung über Sprints und Zahlen nach außen wichtig wird, reicht Trello oft nicht mehr.",
  ),
  card(
    "card-pm-q41",
    "Weitere",
    "Kann ein Unternehmen mehrere PM-Tools gleichzeitig sinnvoll nutzen?",
    "Ja – z. B. Jira für Tasks, Miro für Workshops, GitHub für Code-nah. Wichtig: klare Zuständigkeit, keine doppelte Ticket-Pflege.",
  ),
  card(
    "card-pm-q42",
    "Weitere",
    "Gruppen A–E überschneiden sich. Nach welchem Kriterium würdest du ein Tool einer Gruppe zuordnen, wenn es in zwei passt?",
    "Nach dem Hauptnutzen für die Zielgruppe – z. B. GitHub Projects eher „beim Code“ (C), auch wenn es ein Board hat; Jira Align eher „viele Teams“ (E).",
  ),
  card(
    "card-pm-q43",
    "Weitere",
    "Cycle Time vs. Throughput: Was würdest du einem kleinen Team zuerst zeigen?",
    "Oft Cycle Time – „wie lange braucht eine Aufgabe?“ Das zeigt Blocker. Throughput später, wenn man Durchsatz vergleichen will.",
  ),
  card(
    "card-pm-q44",
    "Weitere",
    "State of Agile: 84 % KI, aber nur 49 % Regeln – was sollte ein Team als Erstes festlegen, bevor es KI im Tool nutzt?",
    "Was KI darf (welche Daten), wer prüft, und dass Menschen Priorität und Schätzung final entscheiden. Nutzung ohne Guardrails ist das Risiko.",
  ),
  card(
    "card-pm-q45",
    "Weitere",
    "Wenn die Kapazitätsanzeige im Tool „grün“ ist, aber das Team unsicher ist: Wem glaubst du – Zahl oder Bauchgefühl des Teams?",
    "Dem Team. Die Zahl kennt Risiken, On-Duty, Unklarheiten nicht. Lieber weniger einplanen; wird es schneller, zieht man nach.",
  ),
  card(
    "card-pm-q46",
    "Weitere",
    "Für Entwickler: Welcher Vorteil zählt am meisten – Board, Code-Anbindung oder Diagramme?",
    "Für mich oft Code-Anbindung (weniger Wechsel, Status am Pull Request). Board ist Basis; Diagramme eher für Planung/Stakeholder.",
  ),
  card(
    "card-pm-q47",
    "Weitere",
    "Wer sollte das Tool auswählen – Entwickler, Scrum Master, oder IT/Management?",
    "Gemeinsam: Team sagt Alltagstauglichkeit, SM/PO den Prozess, IT/Management Hosting, Lizenz, Compliance. Ohne Team-Stimme wird es Tool-Diktat.",
  ),
  card(
    "card-pm-q48",
    "Weitere",
    "Wann lohnt sich ein Tool-Wechsel mitten im Projekt – und wann eher nicht?",
    "Lohnt, wenn Blocker groß sind (Compliance, kein Export, Tool unbenutzbar). Eher nicht mitten in kritischer Lieferung nur wegen „schönerer Features“ – Umzug kostet Fokus.",
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
    id: "section-pm-dozent",
    title: "3. Form / Dozent",
    cardIds: ["card-pm-q24", "card-pm-q25", "card-pm-q26"],
  },
  {
    id: "section-pm-weitere",
    title: "4. Weitere",
    cardIds: [
      "card-pm-q27",
      "card-pm-q28",
      "card-pm-q29",
      "card-pm-q30",
      "card-pm-q31",
      "card-pm-q32",
      "card-pm-q33",
      "card-pm-q34",
      "card-pm-q35",
      "card-pm-q36",
      "card-pm-q37",
      "card-pm-q38",
      "card-pm-q39",
      "card-pm-q40",
      "card-pm-q41",
      "card-pm-q42",
      "card-pm-q43",
      "card-pm-q44",
      "card-pm-q45",
      "card-pm-q46",
      "card-pm-q47",
      "card-pm-q48",
    ],
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
