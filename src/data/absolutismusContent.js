/** Geschichte · Absolutismus & Französische Revolution — Karteikarten (Begriff → Erklärung) */

import { publicAssetUrl } from "@/utils/publicAssetUrl";

export const ABSOLUTISMUS_BOOK_ID = "book-absolutismus";

const KARIKATUR_M1_IMAGE = publicAssetUrl("images/karikatur-m1-trois-ordres.png");

/** @param {string} category @param {string} question @param {string} answer */
const karikaturM1Card = (id, category, question, answer) => ({
  id,
  frontImageUrl: KARIKATUR_M1_IMAGE,
  frontCategory: category,
  term: question,
  explanationDe: answer,
});

export const absolutismusCards = [
  {
    id: "card-absolutismus-definition",
    term: "Absolutismus · 1. Definition",
    explanationDe:
      "Absolutismus — eine Herrschaftsform in Europa von ca. 1650 bis 1790, in welcher der Monarch (König) uneingeschränkt und über den Gesetzen regiert.",
  },
  {
    id: "card-absolutismus-saeulen",
    term: "Absolutismus · 2. Säulen",
    explanationDe:
      "Die Säulen des Absolutismus:\n\n" +
      "• der stehende Herr\n" +
      "• Verwaltung durch loyale Beamte\n" +
      "• Merkantilismus als Wirtschaftsform\n" +
      "• höfische Gesellschaft (Versailles)\n" +
      "• Staatsreligion",
  },
  {
    id: "card-absolutismus-mercantilismus",
    term: "Absolutismus · 3. Mercantilismus",
    explanationDe:
      "Mercantilismus — eine Wirtschaftsform, welche größtenteils vom Staat gelenkt wird. Die Grundidee ist es, den Export zu maximieren und den Import zu minimieren, um die Edelmetallvorräte zu erhöhen.",
  },
  {
    id: "card-fr-revolution-staendegesellschaft",
    term: "Französische Revolution · Ständegesellschaft",
    explanationDe:
      "Ständegesellschaft in Frankreich:\n\n" +
      "1. Klerus (ca. 0,5 %)\n" +
      "2. Adel (ca. 1,5 %)\n" +
      "3. Bauern & Bürger (98 %)",
  },
  {
    id: "card-fr-revolution-aufklaerung",
    term: "Französische Revolution · Aufklärung",
    explanationDe:
      "Aufklärung (von 1715 bis 1789) — eine Bewegung, die sich für Vernunft, kritisches Denken und Bildung statt Tradition & Glaube einsetzt.",
  },
  {
    id: "card-fr-revolution-revolution",
    term: "Französische Revolution · Revolution",
    explanationDe:
      "Revolution (1789–1799) — begann mit dem Ballhaus-Schwur und dem Sturm der Bastille, und endete mit der Machtübernahme Napoleons.",
  },
  {
    id: "card-fr-revolution-krise",
    term: "Französische Revolution · Französische Krise (Ursachen)",
    explanationDe:
      "Französische Krise — Ursachen:\n\n" +
      "• Wirtschaftlich: 3. Stand zahlte alleine Steuern; zu hohe Ausgaben (Ludwig XIV)\n" +
      "• Geistlich: 3. Stand durch Aufklärung angestachelt; 3. Stand ging es sehr schlecht\n" +
      "• Politisch: Absolutismus; 3. Stand wollte Gleichberechtigung; Abgaben + Frondienst an König; Ausgaben wurden nicht gedeckt (z. B. Schloss Versailles)",
  },
  karikaturM1Card(
    "card-karikatur-m1-frage-1",
    "Ersten Eindruck festhalten",
    "1. Wie wirkt die Karikatur auf dich?",
    "Die Karikatur wirkt ungerecht, unterdrückend und tragisch. Der alte, gebeugte Bauer leidet sichtbar, während die beiden Männer auf seinem Rücken entspannt und zufrieden wirken. Man fühlt Mitgeleid mit dem 3. Stand und Hoffnung, dass sich etwas ändern muss.",
  ),
  karikaturM1Card(
    "card-karikatur-m1-frage-2",
    "Einzelheiten beschreiben",
    "2. Welche Personen, Gegenstände und andere Details lassen sich erkennen? Achte auf den Gesichtsausdruck, die Körperhaltung. Beziehe die Bildunterschrift mit ein.",
    "Ein alter, gebeugter Bauer mit weißem Bart, abgenutzter Kleidung und Holzschuhen stützt sich auf eine Hacke mit der Aufschrift „von Tränen getränkt“. Auf seinem Rücken sitzen ein Geistlicher in lila Soutane mit Kreuz und ein Adliger in rotem Mantel mit Federhut und Säbel. Am Boden fressen Hasen Kohl und Vögel picken Saat. Bildunterschrift: „A faut esperer q'eu.s jeu la finira bentot“ (Man muss hoffen, dass dieses Spiel bald ein Ende hat). Unten rechts: „L'auteur en Campagne“, 1789.",
  ),
  karikaturM1Card(
    "card-karikatur-m1-frage-3",
    "Zusätzliche Informationen heranziehen",
    "3. Wer ist der Zeichner?",
    "Unbekannt. Initialen: M. P. (in der Quellenangabe auch „L'auteur en Campagne“).",
  ),
  karikaturM1Card(
    "card-karikatur-m1-frage-4",
    "Zusätzliche Informationen heranziehen",
    "4. Wann und wo ist die Karikatur entstanden?",
    "1789, in Frankreich (Paris). Kurz vor der Französischen Revolution, zur Zeit der Generalstände.",
  ),
  karikaturM1Card(
    "card-karikatur-m1-frage-5",
    "Zusätzliche Informationen heranziehen",
    "5. Gibt es einen Titel?",
    "Ja: „A faut esperer q'eu.s jeu la finira bentot“ — auf Deutsch: „Man muss hoffen, dass dieses Spiel bald ein Ende hat.“",
  ),
  karikaturM1Card(
    "card-karikatur-m1-frage-6",
    "Zusätzliche Informationen heranziehen",
    "6. Welches Thema hat die Karikatur?",
    "Die Unterdrückung und Belastung des 3. Standes durch Klerus (1. Stand) und Adel (2. Stand) in der französischen Ständegesellschaft.",
  ),
  karikaturM1Card(
    "card-karikatur-m1-frage-7",
    "Bildaussage erkennen",
    "7. Welche Bedeutung haben die Personen und Gegenstände?",
    "• Gebückter Bauer mit Hacke → 3. Stand (Bauern), harte Arbeit und Leid\n" +
      "• Hacke „von Tränen getränkt“ → Verzweiflung und schlechte Lebensbedingungen\n" +
      "• Geistlicher mit Kreuz und Soutane → 1. Stand (Klerus); Zettel: Pension, Ostentation\n" +
      "• Adliger mit rotem Mantel und Säbel → 2. Stand (Adel); Zettel: taille, corvée, dîme, milice\n" +
      "• Hasen und Vögel fressen die Ernte → Adelsprivilegien (nur Adel durfte jagen, Bauern nicht)",
  ),
  karikaturM1Card(
    "card-karikatur-m1-frage-8",
    "Bildaussage erkennen",
    "8. Auf welches Ereignis bezieht sich die Karikatur?",
    "Auf die Krise des französischen Absolutismus und die Vorgeschichte der Französischen Revolution (1789) — die ungerechte Lastenverteilung zwischen den drei Ständen.",
  ),
  karikaturM1Card(
    "card-karikatur-m1-frage-9",
    "Aussage der Karikatur formulieren",
    "9. Was ist die Botschaft?",
    "Der 3. Stand soll sich befreien und diese ungerechte Bedingung nicht mehr hinnehmen. Das „Spiel“ — die Ausbeutung durch Klerus und Adel — muss bald ein Ende haben.",
  ),
  karikaturM1Card(
    "card-karikatur-m1-frage-10",
    "Aussage der Karikatur formulieren",
    "10. Was wird kritisiert?",
    "Die ungerechte Verteilung von Steuern und Lasten: Der 3. Stand trägt und ernährt Klerus und Adel, zahlt fast alle Steuern (taille, corvée, Frondienst …), während die privilegierten Stände nichts oder wenig zahlen und zusätzlich von Adelsprivilegien profitieren.",
  ),
  karikaturM1Card(
    "card-karikatur-m1-frage-11",
    "Aussage der Karikatur formulieren",
    "11. Welche Wirkung könnte die Karikatur haben?",
    "Menschen des 3. Standes erkennen das Unrecht, die Ausbeutung und Demütigung — und wollen dagegen kämpfen oder hoffen auf Veränderung. Die einfache Bildsprache erreicht auch Analphabeten und weckt Widerstand gegen die Ständegesellschaft.",
  ),
];

export const ABSOLUTISMUS_CARD_IDS = absolutismusCards.map((c) => c.id);

export const getAbsolutismusCardById = (cardId) =>
  absolutismusCards.find((c) => c.id === cardId) || null;
