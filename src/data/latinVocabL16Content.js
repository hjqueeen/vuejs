/** Latein · Lektion 16 — Karteikarten (Latein → Form · Deutsch)
 *  Geben und Nehmen: Politik in Rom (Klasse 8)
 */

export const LATIN_VOCAB_L16_BOOK_ID = "book-latin-vocab-l16";

/** @param {string} form @param {string} meaning */
const back = (form, meaning) => `${form}\n\n${meaning}`;

/** @param {string} id @param {string} term @param {string} form @param {string} meaning */
const card = (id, term, form, meaning) => ({
  id,
  term,
  explanationDe: back(form, meaning),
});

export const latinVocabL16Cards = [
  // —— Wiederholung ——
  card("card-latin-l16-probus", "probus", "-a, -um", "anständig, tüchtig, gut"),
  card("card-latin-l16-quondam", "quondam", "Adv.", "einst"),
  card(
    "card-latin-l16-urbs",
    "urbs",
    "urbis f. (Gen. Pl.: urbium)",
    "Stadt",
  ),
  card("card-latin-l16-donum", "dōnum", "dōnī n.", "Geschenk"),
  card("card-latin-l16-placere", "placēre", "placeō", "gefallen, Spaß machen"),
  card("card-latin-l16-profecto", "profectō", "Adv.", "tatsächlich"),

  // —— Lektionstext ——
  card("card-latin-l16-cato", "Catō", "Catōnis m.", "Cato"),
  card(
    "card-latin-l16-gravis",
    "gravis",
    "gravis m., gravis f., grave n.",
    "ernst, charakterfest",
  ),
  card("card-latin-l16-comes", "comes", "comitis m.", "Begleiter"),
  card("card-latin-l16-provincia", "prōvincia", "prōvinciae f.", "Provinz"),
  card("card-latin-l16-mos", "mōs", "mōris m.", "Sitte, Brauch"),
  card("card-latin-l16-illustris", "illūstris", "illūstre", "bekannt, berühmt"),
  card(
    "card-latin-l16-cognoscere",
    "cognōscere",
    "cognōscō, cognōvī, cognitum",
    "erfahren, in Erfahrung bringen, erkennen, kennenlernen",
  ),
  card("card-latin-l16-grandis", "grandis", "grande", "groß, bedeutend"),
  card("card-latin-l16-tunc", "tunc", "Adv.", "dann, damals"),
  card(
    "card-latin-l16-varius",
    "varius",
    "-a, -um",
    "verschieden, verschiedenartig",
  ),
  card(
    "card-latin-l16-dividere",
    "dīvidere",
    "dīvidō, dīvīsī, dīvīsum",
    "teilen, unterteilen",
  ),
  card(
    "card-latin-l16-singularis",
    "singulāris",
    "singulāre",
    "einzigartig",
  ),
  card("card-latin-l16-velut", "velut", "—", "wie zum Beispiel"),

  // —— Vokabular 16 ——
  card("card-latin-l16-vas", "vās", "vāsis n.", "Gefäß"),
  card(
    "card-latin-l16-praebere",
    "praebēre",
    "praebeō, praebuī, praebitum",
    "bieten, gewähren, anbieten",
  ),
  card(
    "card-latin-l16-omnis",
    "omnis",
    "omne",
    "jeder, ganz (Singular), alle (Plural)",
  ),
  card("card-latin-l16-ubi", "ubi", "Konj.", "als, sobald"),
  card("card-latin-l16-regius", "rēgius", "-a, -um", "königlich"),
  card(
    "card-latin-l16-audax",
    "audāx",
    "Gen. audācis",
    "wagemutig, frech",
  ),
  card("card-latin-l16-audere", "audēre", "audeō", "wagen"),
  card("card-latin-l16-agere", "agere", "agō, ēgī, āctum", "handeln, tun"),
  card(
    "card-latin-l16-alius",
    "alius",
    "alia, aliud; Gen. alterīus, Dat. aliī",
    "ein anderer",
  ),
  card("card-latin-l16-alii", "aliī", "-ae, -a", "andere"),
  card(
    "card-latin-l16-alii-alii",
    "aliī … aliī",
    "—",
    "einige … andere",
  ),
  card("card-latin-l16-modus", "modus", "modī m.", "Art, Weise"),
  card("card-latin-l16-donare", "dōnāre", "dōnō", "schenken"),
  card("card-latin-l16-felix", "fēlīx", "Gen. fēlīcis", "glücklich"),
  card(
    "card-latin-l16-ingens",
    "ingēns",
    "Gen. ingentis",
    "ungeheuer groß",
  ),
  card("card-latin-l16-celer", "celer", "celeris, celere", "schnell"),
  card(
    "card-latin-l16-accedere",
    "accēdere",
    "accēdō, accessī, accessum",
    "sich nähern, herbeikommen",
  ),
  card(
    "card-latin-l16-acer",
    "ācer",
    "ācris, ācre",
    "energisch, hitzig, scharf",
  ),
  card("card-latin-l16-sibi", "sibi", "Dat.", "sich"),
  card(
    "card-latin-l16-parare",
    "parāre",
    "parō",
    "vorbereiten, zubereiten; (+ Inf.:) sich vorbereiten, etwas zu tun; verschaffen",
  ),
];

export const latinVocabL16Sections = [
  {
    id: "section-latin-l16-wiederholung",
    title: "Wiederholung",
    cardIds: [
      "card-latin-l16-probus",
      "card-latin-l16-quondam",
      "card-latin-l16-urbs",
      "card-latin-l16-donum",
      "card-latin-l16-placere",
      "card-latin-l16-profecto",
    ],
  },
  {
    id: "section-latin-l16-lektionstext",
    title: "Lektionstext",
    cardIds: [
      "card-latin-l16-cato",
      "card-latin-l16-gravis",
      "card-latin-l16-comes",
      "card-latin-l16-provincia",
      "card-latin-l16-mos",
      "card-latin-l16-illustris",
      "card-latin-l16-cognoscere",
      "card-latin-l16-grandis",
      "card-latin-l16-tunc",
      "card-latin-l16-varius",
      "card-latin-l16-dividere",
      "card-latin-l16-singularis",
      "card-latin-l16-velut",
    ],
  },
  {
    id: "section-latin-l16-vok16",
    title: "Vokabular 16",
    cardIds: [
      "card-latin-l16-vas",
      "card-latin-l16-praebere",
      "card-latin-l16-omnis",
      "card-latin-l16-ubi",
      "card-latin-l16-regius",
      "card-latin-l16-audax",
      "card-latin-l16-audere",
      "card-latin-l16-agere",
      "card-latin-l16-alius",
      "card-latin-l16-alii",
      "card-latin-l16-alii-alii",
      "card-latin-l16-modus",
      "card-latin-l16-donare",
      "card-latin-l16-felix",
      "card-latin-l16-ingens",
      "card-latin-l16-celer",
      "card-latin-l16-accedere",
      "card-latin-l16-acer",
      "card-latin-l16-sibi",
      "card-latin-l16-parare",
    ],
  },
];

export const LATIN_VOCAB_L16_CARD_IDS = latinVocabL16Sections.flatMap(
  (s) => s.cardIds,
);

export const orderedLatinVocabL16Cards = LATIN_VOCAB_L16_CARD_IDS.map(
  (id) => latinVocabL16Cards.find((c) => c.id === id),
).filter(Boolean);

export const getLatinVocabL16CardById = (cardId) =>
  latinVocabL16Cards.find((c) => c.id === cardId) || null;
