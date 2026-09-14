/** Latein · Lektion 14 — Karteikarten (Latein → Form · Deutsch)
 *  Bauern und Adlige (Klasse 8)
 */

export const LATIN_VOCAB_L14_BOOK_ID = "book-latin-vocab-l14";

/** @param {string} form @param {string} meaning */
const back = (form, meaning) => `${form}\n\n${meaning}`;

/** @param {string} id @param {string} term @param {string} form @param {string} meaning */
const card = (id, term, form, meaning) => ({
  id,
  term,
  explanationDe: back(form, meaning),
});

export const latinVocabL14Cards = [
  // —— Wiederholung ——
  card("card-latin-l14-punire", "pūnīre", "pūniō", "bestrafen"),
  card("card-latin-l14-agere", "agere", "agō", "handeln, tun"),
  card("card-latin-l14-licet", "licet", "—", "es ist erlaubt"),
  card("card-latin-l14-ita", "ita", "Adv.", "so"),
  card("card-latin-l14-fames", "famēs", "famis f.", "Hunger"),
  card("card-latin-l14-reddere", "reddere", "reddō", "zurückgeben"),
  card("card-latin-l14-iactare", "iactāre", "iactō", "werfen, schleudern"),

  // —— Lektionstext ——
  card(
    "card-latin-l14-rostra",
    "rōstra",
    "rōstrōrum n. Pl.",
    "Rednerbühne (auf dem Forum Romanum)",
  ),
  card(
    "card-latin-l14-civis",
    "cīvis",
    "cīvis m. (Gen. Pl.: cīvium)",
    "Bürger",
  ),
  card("card-latin-l14-ager", "ager", "agrī m.", "Acker, Feld"),
  card(
    "card-latin-l14-pellere",
    "pellere",
    "pellō, pepulī, pulsum",
    "vertreiben",
  ),
  card("card-latin-l14-probus", "probus", "-a, -um", "anständig, tüchtig, gut"),
  card(
    "card-latin-l14-laborare",
    "labōrāre",
    "labōrō, labōrāvī, labōrātum",
    "arbeiten; (+ Abl.:) an etwas leiden",
  ),
  card("card-latin-l14-urgere", "urgēre", "urgeō, ursī", "drängen, bedrängen"),
  card(
    "card-latin-l14-unus",
    "ūnus",
    "-a, -um (Gen. ūnīus, Dat. ūnī)",
    "einer",
  ),
  card(
    "card-latin-l14-gratia",
    "grātia",
    "grātiae f.",
    "Dank, Gunst, Beliebtheit",
  ),
  card("card-latin-l14-populus", "populus", "populī m.", "Volk"),
  card("card-latin-l14-lapis", "lapis", "lapidis m.", "Stein"),
  card(
    "card-latin-l14-in",
    "in",
    "Präp. + Akk.",
    "1. in … (hinein); 2. gegen; 3. nach; 4. auf",
  ),
  card(
    "card-latin-l14-iacere",
    "iacere",
    "iaciō, iēcī, iactum",
    "werfen",
  ),
  card("card-latin-l14-quod", "quod", "Konj.", "weil"),
  card(
    "card-latin-l14-monere",
    "monēre",
    "moneō, monuī, monitum",
    "mahnen, ermahnen; warnen",
  ),

  // —— Vokabular 14 (S. 119) ——
  card(
    "card-latin-l14-auris",
    "auris",
    "auris f. (Gen. Pl.: aurium)",
    "Ohr",
  ),
  card(
    "card-latin-l14-vincere",
    "vincere",
    "vincō, vīcī, victum",
    "siegen, besiegen",
  ),
  card("card-latin-l14-gloria", "glōria", "glōriae f.", "Ehre, Ruhm"),
  card("card-latin-l14-vero", "vērō", "Adv.", "wirklich, tatsächlich"),
  card("card-latin-l14-sedes", "sēdēs", "sēdis f.", "Wohnsitz"),
  card("card-latin-l14-luxuria", "lūxuria", "lūxuriae f.", "Genusssucht"),
  card(
    "card-latin-l14-avaritia",
    "avāritia",
    "avāritiae f.",
    "Habgier, Geiz",
  ),
  card("card-latin-l14-quamdiu", "quamdiū?", "—", "wie lange?"),
  card(
    "card-latin-l14-opprimere",
    "opprimere",
    "opprimō, oppressī, oppressum",
    "unterdrücken",
  ),
  card("card-latin-l14-lex", "lēx", "lēgis f.", "Gesetz"),
  card(
    "card-latin-l14-accipere",
    "accipere",
    "accipiō, accēpī, acceptum",
    "annehmen, aufnehmen",
  ),
  card(
    "card-latin-l14-mutare",
    "mūtāre",
    "mūtō, mūtāvī, mūtātum",
    "verändern",
  ),

  // —— Wendungen ——
  card(
    "card-latin-l14-praebere-aures",
    "praebēre aurēs",
    "—",
    "sein Ohr leihen, Gehör schenken",
  ),
  card(
    "card-latin-l14-itane-vero",
    "itane vērō?",
    "—",
    "Ist/War es wirklich so?",
  ),
];

export const latinVocabL14Sections = [
  {
    id: "section-latin-l14-wiederholung",
    title: "Wiederholung",
    cardIds: [
      "card-latin-l14-punire",
      "card-latin-l14-agere",
      "card-latin-l14-licet",
      "card-latin-l14-ita",
      "card-latin-l14-fames",
      "card-latin-l14-reddere",
      "card-latin-l14-iactare",
    ],
  },
  {
    id: "section-latin-l14-lektionstext",
    title: "Lektionstext",
    cardIds: [
      "card-latin-l14-rostra",
      "card-latin-l14-civis",
      "card-latin-l14-ager",
      "card-latin-l14-pellere",
      "card-latin-l14-probus",
      "card-latin-l14-laborare",
      "card-latin-l14-urgere",
      "card-latin-l14-unus",
      "card-latin-l14-gratia",
      "card-latin-l14-populus",
      "card-latin-l14-lapis",
      "card-latin-l14-in",
      "card-latin-l14-iacere",
      "card-latin-l14-quod",
      "card-latin-l14-monere",
    ],
  },
  {
    id: "section-latin-l14-vok",
    title: "Vokabular 14",
    cardIds: [
      "card-latin-l14-auris",
      "card-latin-l14-vincere",
      "card-latin-l14-gloria",
      "card-latin-l14-vero",
      "card-latin-l14-sedes",
      "card-latin-l14-luxuria",
      "card-latin-l14-avaritia",
      "card-latin-l14-quamdiu",
      "card-latin-l14-opprimere",
      "card-latin-l14-lex",
      "card-latin-l14-accipere",
      "card-latin-l14-mutare",
    ],
  },
  {
    id: "section-latin-l14-wendungen",
    title: "Wendungen",
    cardIds: [
      "card-latin-l14-praebere-aures",
      "card-latin-l14-itane-vero",
    ],
  },
];

export const LATIN_VOCAB_L14_CARD_IDS = latinVocabL14Sections.flatMap(
  (s) => s.cardIds,
);

export const orderedLatinVocabL14Cards = LATIN_VOCAB_L14_CARD_IDS.map(
  (id) => latinVocabL14Cards.find((c) => c.id === id),
).filter(Boolean);

export const getLatinVocabL14CardById = (cardId) =>
  latinVocabL14Cards.find((c) => c.id === cardId) || null;
