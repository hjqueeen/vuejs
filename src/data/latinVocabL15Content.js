/** Latein · Lektion 15 — Karteikarten (Latein → Form · Deutsch)
 *  Römische exempla (Klasse 8)
 */

export const LATIN_VOCAB_L15_BOOK_ID = "book-latin-vocab-l15";

/** @param {string} form @param {string} meaning */
const back = (form, meaning) => `${form}\n\n${meaning}`;

/** @param {string} id @param {string} term @param {string} form @param {string} meaning */
const card = (id, term, form, meaning) => ({
  id,
  term,
  explanationDe: back(form, meaning),
});

export const latinVocabL15Cards = [
  // —— Wiederholung (S. 119) ——
  card("card-latin-l15-rex", "rēx", "rēgis m.", "König"),
  card("card-latin-l15-iratus", "īrātus", "-a, -um", "zornig, wütend"),
  card("card-latin-l15-fugere", "fugere", "fugiō, fūgī", "fliehen, meiden"),
  card("card-latin-l15-custos", "cūstōs", "cūstōdis m.", "Wächter"),
  card(
    "card-latin-l15-petere",
    "petere",
    "petō, petīvī",
    "angreifen, aufsuchen, fordern",
  ),
  card(
    "card-latin-l15-deligere",
    "dēligere",
    "dēligō, dēlēgī",
    "auswählen",
  ),
  card("card-latin-l15-domum", "domum", "—", "nach Hause"),

  // —— Lektionstext (S. 119) ——
  card("card-latin-l15-ira", "īra", "īrae f.", "Zorn"),
  card("card-latin-l15-ardere", "ārdēre", "ārdeō, ārsī, —", "brennen"),
  card(
    "card-latin-l15-qui",
    "quī",
    "quae, quod (Relativpronomen)",
    "der/welcher, die/welche, das/welches",
  ),

  // —— Vokabular 15 (S. 120) ——
  card("card-latin-l15-obses", "obses", "obsidis m., f.", "(die) Geisel"),
  card("card-latin-l15-nonnulli", "nōnnūllī", "-ae, -a Pl.", "einige, manche"),
  card(
    "card-latin-l15-castra",
    "castra",
    "castrōrum n. Pl.",
    "Lager, Kriegslager",
  ),
  card("card-latin-l15-fallere", "fallere", "fallō, fefellī, —", "täuschen"),
  card("card-latin-l15-flumen", "flūmen", "flūminis n.", "Fluss"),
  card("card-latin-l15-ducere", "dūcere", "dūcō, dūxī, ductum", "führen"),
  card("card-latin-l15-telum", "tēlum", "tēlī n.", "Geschoss, Wurfgeschoss"),
  card(
    "card-latin-l15-iactare",
    "iactāre",
    "iactō, iactāvī, iactātum",
    "werfen, schleudern",
  ),
  card("card-latin-l15-neque", "neque", "Konj.", "und nicht, aber nicht"),
  card("card-latin-l15-vulnus", "vulnus", "vulneris n.", "Wunde"),
  card(
    "card-latin-l15-recipere",
    "recipere",
    "recipiō, recēpī, receptum",
    "aufnehmen",
  ),
  card(
    "card-latin-l15-foedus",
    "foedus",
    "foederis n.",
    "Vertrag, Friedensvertrag, Bündnis",
  ),
  card(
    "card-latin-l15-explere",
    "explēre",
    "expleō, explēvī, explētum",
    "erfüllen",
  ),
  card(
    "card-latin-l15-vocare",
    "vocāre",
    "vocō, vocāvī, vocātum",
    "rufen, nennen",
  ),
  card("card-latin-l15-nuntius", "nūntius", "nūntiī m.", "Bote"),
  card(
    "card-latin-l15-mittere",
    "mittere",
    "mittō, mīsī, missum",
    "schicken, wegschicken",
  ),
  card(
    "card-latin-l15-repetere",
    "repetere",
    "repetō, repetīvī, repetītum",
    "zurückverlangen",
  ),
  card("card-latin-l15-si", "sī", "Konj.", "wenn"),
  card(
    "card-latin-l15-rumpere",
    "rumpere",
    "rumpō, rūpī, ruptum",
    "brechen, zerbrechen",
  ),
  card("card-latin-l15-aliter", "aliter", "Adv.", "sonst, andernfalls"),
  card("card-latin-l15-apud", "apud", "Präp. + Akk.", "bei"),
  card(
    "card-latin-l15-manere",
    "manēre",
    "maneō, mānsī, mānsum",
    "bleiben; erwarten",
  ),
  card("card-latin-l15-etruscus-adj", "Etrūscus", "-a, -um", "etruskisch"),
  card(
    "card-latin-l15-etruscus-noun",
    "Etrūscus",
    "Etrūscī m.",
    "der Etrusker",
  ),
  card(
    "card-latin-l15-reddere",
    "reddere",
    "reddō, reddidī, redditum",
    "zurückgeben",
  ),
  card(
    "card-latin-l15-timere",
    "timēre",
    "timeō, timuī, —",
    "sich fürchten, Angst haben; (+ Akk.:) Angst haben vor",
  ),
  card("card-latin-l15-libertas", "lībertās", "lībertātis f.", "Freiheit"),
  card(
    "card-latin-l15-remittere",
    "remittere",
    "remittō, remīsī, remissum",
    "zurückschicken",
  ),

  // —— Vokabular 15 (S. 121) ——
  card(
    "card-latin-l15-interea",
    "intereā",
    "Adv.",
    "inzwischen, in der Zwischenzeit",
  ),
  card(
    "card-latin-l15-mutare",
    "mūtāre",
    "mūtō, mūtāvī, mūtātum",
    "verändern, verwandeln",
  ),
  card("card-latin-l15-virtus", "virtūs", "virtūtis f.", "Tapferkeit, Tugend"),
  card(
    "card-latin-l15-cognoscere",
    "cognōscere",
    "cognōscō, cognōvī, cognitum",
    "erfahren, in Erfahrung bringen, erkennen",
  ),
  card(
    "card-latin-l15-redire",
    "redīre",
    "redeō, rediī, reditum",
    "zurückkehren, zurückgehen",
  ),
  card("card-latin-l15-facinus", "facinus", "facinoris n.", "Handlung, Tat"),
  card(
    "card-latin-l15-laudare",
    "laudāre",
    "laudō, laudāvī, laudātum",
    "loben",
  ),
  card("card-latin-l15-ob", "ob", "Präp. + Akk.", "wegen"),
  card("card-latin-l15-honor", "honor", "honōris m.", "Ehre"),
  card(
    "card-latin-l15-afficere",
    "afficere",
    "afficiō, affēcī, affectum",
    "mit etw. versehen",
  ),
  card(
    "card-latin-l15-ponere",
    "pōnere",
    "pōnō, posuī, positum",
    "stellen, aufstellen",
  ),
  card(
    "card-latin-l15-instruere",
    "instruere",
    "instruō, instrūxī, instrūctum",
    "anweisen, unterrichten; bauen",
  ),
  card(
    "card-latin-l15-opprimere",
    "opprimere",
    "opprimō, oppressī, oppressum",
    "unterdrücken",
  ),

  // —— Wendungen ——
  card(
    "card-latin-l15-ira-ardere",
    "īrā ārdēre",
    "—",
    "vor Zorn brennen",
  ),
  card(
    "card-latin-l15-vulnus-accipere",
    "vulnus accipere",
    "—",
    "eine Wunde erleiden, verwundet werden",
  ),
  card(
    "card-latin-l15-foedus-facere",
    "foedus facere",
    "—",
    "einen Friedensvertrag schließen",
  ),

  // —— PPP-Beispiel / Übungen ——
  card("card-latin-l15-audire", "audīre", "audiō, audīvī, audītum", "hören"),
  card(
    "card-latin-l15-defendere",
    "dēfendere",
    "dēfendō, dēfendī, dēfēnsum",
    "verteidigen",
  ),
  card(
    "card-latin-l15-scribere",
    "scribere",
    "scribō, scrīpsī, scriptum",
    "schreiben",
  ),
  card(
    "card-latin-l15-tangere",
    "tangere",
    "tangō, tetigī, tāctum",
    "berühren",
  ),
  card("card-latin-l15-facere", "facere", "faciō, fēcī, factum", "machen, tun"),
  card(
    "card-latin-l15-accipere",
    "accipere",
    "accipiō, accēpī, acceptum",
    "annehmen, aufnehmen",
  ),
  card(
    "card-latin-l15-corrumpere",
    "corrumpere",
    "corrumpō, corrūpī, corruptum",
    "verderben",
  ),
  card(
    "card-latin-l15-caedere",
    "caedere",
    "caedō, cecīdī, caesum",
    "schlachten, töten",
  ),
  card(
    "card-latin-l15-condere",
    "condere",
    "condō, condidī, conditum",
    "gründen",
  ),
  card(
    "card-latin-l15-ridere",
    "rīdēre",
    "rīdeō, rīsī, rīsum",
    "lachen; (+ Akk.:) auslachen",
  ),
  card(
    "card-latin-l15-pellere",
    "pellere",
    "pellō, pepulī, pulsum",
    "vertreiben",
  ),
];

export const latinVocabL15Sections = [
  {
    id: "section-latin-l15-wiederholung",
    title: "Wiederholung",
    cardIds: [
      "card-latin-l15-rex",
      "card-latin-l15-iratus",
      "card-latin-l15-fugere",
      "card-latin-l15-custos",
      "card-latin-l15-petere",
      "card-latin-l15-deligere",
      "card-latin-l15-domum",
    ],
  },
  {
    id: "section-latin-l15-lektionstext",
    title: "Lektionstext",
    cardIds: [
      "card-latin-l15-ira",
      "card-latin-l15-ardere",
      "card-latin-l15-qui",
    ],
  },
  {
    id: "section-latin-l15-vok",
    title: "Vokabular 15",
    cardIds: [
      "card-latin-l15-obses",
      "card-latin-l15-nonnulli",
      "card-latin-l15-castra",
      "card-latin-l15-fallere",
      "card-latin-l15-flumen",
      "card-latin-l15-ducere",
      "card-latin-l15-telum",
      "card-latin-l15-iactare",
      "card-latin-l15-neque",
      "card-latin-l15-vulnus",
      "card-latin-l15-recipere",
      "card-latin-l15-foedus",
      "card-latin-l15-explere",
      "card-latin-l15-vocare",
      "card-latin-l15-nuntius",
      "card-latin-l15-mittere",
      "card-latin-l15-repetere",
      "card-latin-l15-si",
      "card-latin-l15-rumpere",
      "card-latin-l15-aliter",
      "card-latin-l15-apud",
      "card-latin-l15-manere",
      "card-latin-l15-etruscus-adj",
      "card-latin-l15-etruscus-noun",
      "card-latin-l15-reddere",
      "card-latin-l15-timere",
      "card-latin-l15-libertas",
      "card-latin-l15-remittere",
      "card-latin-l15-interea",
      "card-latin-l15-mutare",
      "card-latin-l15-virtus",
      "card-latin-l15-cognoscere",
      "card-latin-l15-redire",
      "card-latin-l15-facinus",
      "card-latin-l15-laudare",
      "card-latin-l15-ob",
      "card-latin-l15-honor",
      "card-latin-l15-afficere",
      "card-latin-l15-ponere",
      "card-latin-l15-instruere",
      "card-latin-l15-opprimere",
    ],
  },
  {
    id: "section-latin-l15-wendungen",
    title: "Wendungen",
    cardIds: [
      "card-latin-l15-ira-ardere",
      "card-latin-l15-vulnus-accipere",
      "card-latin-l15-foedus-facere",
    ],
  },
  {
    id: "section-latin-l15-uebungen",
    title: "Übungen · PPP",
    cardIds: [
      "card-latin-l15-audire",
      "card-latin-l15-defendere",
      "card-latin-l15-scribere",
      "card-latin-l15-tangere",
      "card-latin-l15-facere",
      "card-latin-l15-accipere",
      "card-latin-l15-corrumpere",
      "card-latin-l15-caedere",
      "card-latin-l15-condere",
      "card-latin-l15-ridere",
      "card-latin-l15-pellere",
    ],
  },
];

export const LATIN_VOCAB_L15_CARD_IDS = latinVocabL15Sections.flatMap(
  (s) => s.cardIds,
);

export const orderedLatinVocabL15Cards = LATIN_VOCAB_L15_CARD_IDS.map(
  (id) => latinVocabL15Cards.find((c) => c.id === id),
).filter(Boolean);

export const getLatinVocabL15CardById = (cardId) =>
  latinVocabL15Cards.find((c) => c.id === cardId) || null;
