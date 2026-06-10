/** Latein · Vokabeln — Karteikarten (Latein → Form · Deutsch) */

export const LATIN_VOCAB_BOOK_ID = "book-latin-vocab";

/** @param {string} form @param {string} meaning */
const back = (form, meaning) => `${form}\n\n${meaning}`;

export const latinVocabCards = [
  {
    id: "card-latin-reducere",
    term: "redūcere",
    explanationDe: back("redūcō, redūxī, reductum", "zurückführen, hinbringen"),
  },
  {
    id: "card-latin-gratia",
    term: "grātia",
    explanationDe: back("grātiae f.", "Dank, Gunst, Beliebtheit"),
  },
  {
    id: "card-latin-gratias-agere",
    term: "grātiās agere",
    explanationDe: back("grātiās agō, ēgī, āctum", "danken, Danke sagen"),
  },
  {
    id: "card-latin-maxime",
    term: "māximē",
    explanationDe: back("Adv.", "am meisten"),
  },
  {
    id: "card-latin-aurum",
    term: "aurum",
    explanationDe: back("aurī n.", "Gold"),
  },
  {
    id: "card-latin-prudens",
    term: "prūdēns",
    explanationDe: back("Gen. prūdentis; Adv. prūdenter", "klug"),
  },
  {
    id: "card-latin-fides",
    term: "fidēs",
    explanationDe: back("fideī f.", "Schutz, Beistand; Zuverlässigkeit, Treue"),
  },
  {
    id: "card-latin-temptare",
    term: "temptāre",
    explanationDe: back("temptō", "versuchen; prüfen, auf die Probe stellen"),
  },
  {
    id: "card-latin-arbor",
    term: "arbor",
    explanationDe: back("arboris f.", "Baum"),
  },
  {
    id: "card-latin-trahere",
    term: "trahere",
    explanationDe: back("trahō, trāxī, tractum", "ziehen"),
  },
  {
    id: "card-latin-tenere",
    term: "tenēre",
    explanationDe: back("teneō, tenuī, tentum", "halten"),
  },
  {
    id: "card-latin-mirus",
    term: "mīrus",
    explanationDe: back("-a, -um", "wunderbar, erstaunlich"),
  },
  {
    id: "card-latin-conspicere",
    term: "cōnspicere",
    explanationDe: back("cōnspiciō, cōnspēxī, cōnspectum", "erblicken, sehen"),
  },
  {
    id: "card-latin-fingere",
    term: "fingere",
    explanationDe: back("fingō, fīnxī, fictum", "vorstellen, ausdenken"),
  },
  {
    id: "card-latin-iens",
    term: "(ab- / ad- / ex- / per- / red- / sub-) iēns",
    explanationDe: back("Gen. euntis", "PPA von īre"),
  },
  {
    id: "card-latin-cenare",
    term: "cēnāre",
    explanationDe: back("cēnō", "(die Hauptmahlzeit zu sich nehmen), speisen"),
  },
  {
    id: "card-latin-poculum",
    term: "pōculum",
    explanationDe: back("pōculī n.", "Becher"),
  },
  {
    id: "card-latin-vinum",
    term: "vīnum",
    explanationDe: back("vīnī n.", "Wein"),
  },
  {
    id: "card-latin-os",
    term: "ōs",
    explanationDe: back("ōris n.", "Mund"),
  },
  {
    id: "card-latin-cibus",
    term: "cibus",
    explanationDe: back("cibī m.", "Speise"),
  },
  {
    id: "card-latin-divitiae",
    term: "dīvitiae",
    explanationDe: back("dīvitiārum f. Pl.", "Reichtum"),
  },
  {
    id: "card-latin-modo",
    term: "modo",
    explanationDe: back("Adv.", "bloß, nur; gerade (eben)"),
  },
  {
    id: "card-latin-sic",
    term: "sīc",
    explanationDe: back("Adv.", "so"),
  },
  {
    id: "card-latin-torquere",
    term: "torquēre",
    explanationDe: back("torqueō, torsī, tortum", "foltern"),
  },
  {
    id: "card-latin-stultus",
    term: "stultus",
    explanationDe: back("-a, -um", "dumm"),
  },
];

export const LATIN_VOCAB_CARD_IDS = latinVocabCards.map((c) => c.id);

export const getLatinVocabCardById = (cardId) =>
  latinVocabCards.find((c) => c.id === cardId) || null;
