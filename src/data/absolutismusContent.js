/** Geschichte · Absolutismus & Französische Revolution — Karteikarten (Begriff → Erklärung) */

import { publicAssetUrl } from "@/utils/publicAssetUrl";

export const ABSOLUTISMUS_BOOK_ID = "book-absolutismus";

const KARIKATUR_M1_IMAGE = publicAssetUrl("images/karikatur-m1-trois-ordres.png");
const KARIKATUR_M2_IMAGE = publicAssetUrl("images/karikatur-m2-reveil-tiers-etat.jpg");
const KARIKATUR_M3_IMAGE = publicAssetUrl("images/karikatur-m3-ich-wusste-ja.jpg");

/** @param {string} imageUrl @param {string} category @param {string} question @param {string} answer */
const karikaturCard = (id, imageUrl, category, question, answer) => ({
  id,
  frontImageUrl: imageUrl,
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
  karikaturCard(
    "card-karikatur-m1-frage-1",
    KARIKATUR_M1_IMAGE,
    "Ersten Eindruck festhalten",
    "1. Wie wirkt die Karikatur auf dich?",
    "Die Karikatur wirkt ungerecht, unterdrückend und tragisch. Der alte, gebeugte Bauer leidet sichtbar, während die beiden Männer auf seinem Rücken entspannt und zufrieden wirken. Man fühlt Mitgeleid mit dem 3. Stand und Hoffnung, dass sich etwas ändern muss.",
  ),
  karikaturCard(
    "card-karikatur-m1-frage-2",
    KARIKATUR_M1_IMAGE,
    "Einzelheiten beschreiben",
    "2. Welche Personen, Gegenstände und andere Details lassen sich erkennen? Achte auf den Gesichtsausdruck, die Körperhaltung. Beziehe die Bildunterschrift mit ein.",
    "Ein alter, gebeugter Bauer mit weißem Bart, abgenutzter Kleidung und Holzschuhen stützt sich auf eine Hacke mit der Aufschrift „von Tränen getränkt“. Auf seinem Rücken sitzen ein Geistlicher in lila Soutane mit Kreuz und ein Adliger in rotem Mantel mit Federhut und Säbel. Am Boden fressen Hasen Kohl und Vögel picken Saat. Bildunterschrift: „A faut esperer q'eu.s jeu la finira bentot“ (Man muss hoffen, dass dieses Spiel bald ein Ende hat). Unten rechts: „L'auteur en Campagne“, 1789.",
  ),
  karikaturCard(
    "card-karikatur-m1-frage-3",
    KARIKATUR_M1_IMAGE,
    "Zusätzliche Informationen heranziehen",
    "3. Wer ist der Zeichner?",
    "Unbekannt. Initialen: M. P. (in der Quellenangabe auch „L'auteur en Campagne“).",
  ),
  karikaturCard(
    "card-karikatur-m1-frage-4",
    KARIKATUR_M1_IMAGE,
    "Zusätzliche Informationen heranziehen",
    "4. Wann und wo ist die Karikatur entstanden?",
    "1789, in Frankreich (Paris). Kurz vor der Französischen Revolution, zur Zeit der Generalstände.",
  ),
  karikaturCard(
    "card-karikatur-m1-frage-5",
    KARIKATUR_M1_IMAGE,
    "Zusätzliche Informationen heranziehen",
    "5. Gibt es einen Titel?",
    "Ja: „A faut esperer q'eu.s jeu la finira bentot“ — auf Deutsch: „Man muss hoffen, dass dieses Spiel bald ein Ende hat.“",
  ),
  karikaturCard(
    "card-karikatur-m1-frage-6",
    KARIKATUR_M1_IMAGE,
    "Zusätzliche Informationen heranziehen",
    "6. Welches Thema hat die Karikatur?",
    "Die Unterdrückung und Belastung des 3. Standes durch Klerus (1. Stand) und Adel (2. Stand) in der französischen Ständegesellschaft.",
  ),
  karikaturCard(
    "card-karikatur-m1-frage-7",
    KARIKATUR_M1_IMAGE,
    "Bildaussage erkennen",
    "7. Welche Bedeutung haben die Personen und Gegenstände?",
    "• Gebückter Bauer mit Hacke → 3. Stand (Bauern), harte Arbeit und Leid\n" +
      "• Hacke „von Tränen getränkt“ → Verzweiflung und schlechte Lebensbedingungen\n" +
      "• Geistlicher mit Kreuz und Soutane → 1. Stand (Klerus); Zettel: Pension, Ostentation\n" +
      "• Adliger mit rotem Mantel und Säbel → 2. Stand (Adel); Zettel: taille, corvée, dîme, milice\n" +
      "• Hasen und Vögel fressen die Ernte → Adelsprivilegien (nur Adel durfte jagen, Bauern nicht)",
  ),
  karikaturCard(
    "card-karikatur-m1-frage-8",
    KARIKATUR_M1_IMAGE,
    "Bildaussage erkennen",
    "8. Auf welches Ereignis bezieht sich die Karikatur?",
    "Auf die Krise des französischen Absolutismus und die Vorgeschichte der Französischen Revolution (1789) — die ungerechte Lastenverteilung zwischen den drei Ständen.",
  ),
  karikaturCard(
    "card-karikatur-m1-frage-9",
    KARIKATUR_M1_IMAGE,
    "Aussage der Karikatur formulieren",
    "9. Was ist die Botschaft?",
    "Der 3. Stand soll sich befreien und diese ungerechte Bedingung nicht mehr hinnehmen. Das „Spiel“ — die Ausbeutung durch Klerus und Adel — muss bald ein Ende haben.",
  ),
  karikaturCard(
    "card-karikatur-m1-frage-10",
    KARIKATUR_M1_IMAGE,
    "Aussage der Karikatur formulieren",
    "10. Was wird kritisiert?",
    "Die ungerechte Verteilung von Steuern und Lasten: Der 3. Stand trägt und ernährt Klerus und Adel, zahlt fast alle Steuern (taille, corvée, Frondienst …), während die privilegierten Stände nichts oder wenig zahlen und zusätzlich von Adelsprivilegien profitieren.",
  ),
  karikaturCard(
    "card-karikatur-m1-frage-11",
    KARIKATUR_M1_IMAGE,
    "Aussage der Karikatur formulieren",
    "11. Welche Wirkung könnte die Karikatur haben?",
    "Menschen des 3. Standes erkennen das Unrecht, die Ausbeutung und Demütigung — und wollen dagegen kämpfen oder hoffen auf Veränderung. Die einfache Bildsprache erreicht auch Analphabeten und weckt Widerstand gegen die Ständegesellschaft.",
  ),
  karikaturCard(
    "card-karikatur-m2-frage-1",
    KARIKATUR_M2_IMAGE,
    "Ersten Eindruck festhalten",
    "1. Wie wirkt die Karikatur auf dich?",
    "Die Karikatur wirkt dynamisch, bedrohlich und hoffnungsvoll zugleich. Der 3. Stand wehrt sich endlich — Adel und Klerus haben Angst. Man spürt: Etwas beginnt sich zu wenden.",
  ),
  karikaturCard(
    "card-karikatur-m2-frage-2",
    KARIKATUR_M2_IMAGE,
    "Einzelheiten beschreiben",
    "2. Welche Personen, Gegenstände und andere Details lassen sich erkennen? Achte auf den Gesichtsausdruck, die Körperhaltung. Beziehe die Bildunterschrift mit ein.",
    "Ein Mann steigt aus dem Bett und hält ein Gewehr (Fusil) in der Hand. Am Boden liegen zerbrochene Ketten. Links ein Adliger mit Federhut und Säbel, rechts ein Geistlicher in Soutane mit Kreuz — beide weichen erschrocken zurück. Im Hintergrund die zerstörte Bastille. Bildunterschrift: „Ma feinte, il étoit tems que je me réveillisse, car l'opression de mes fers me donnions le cochemar un peu trop fort.“ (Es war Zeit, dass ich aufwache …)",
  ),
  karikaturCard(
    "card-karikatur-m2-frage-3",
    KARIKATUR_M2_IMAGE,
    "Zusätzliche Informationen heranziehen",
    "3. Wer ist der Zeichner?",
    "Unbekannt (anonymer Stich).",
  ),
  karikaturCard(
    "card-karikatur-m2-frage-4",
    KARIKATUR_M2_IMAGE,
    "Zusätzliche Informationen heranziehen",
    "4. Wann und wo ist die Karikatur entstanden?",
    "1789, in Frankreich (Paris). Zur Zeit der Französischen Revolution, kurz nach dem Sturm auf die Bastille (14. Juli 1789).",
  ),
  karikaturCard(
    "card-karikatur-m2-frage-5",
    KARIKATUR_M2_IMAGE,
    "Zusätzliche Informationen heranziehen",
    "5. Gibt es einen Titel?",
    "Ja: „Réveil du Tiers État“ — auf Deutsch: „Das Erwachen des Dritten Standes“.",
  ),
  karikaturCard(
    "card-karikatur-m2-frage-6",
    KARIKATUR_M2_IMAGE,
    "Zusätzliche Informationen heranziehen",
    "6. Welches Thema hat die Karikatur?",
    "Das Erwachen und der bewaffnete Widerstand des 3. Standes gegen die Unterdrückung durch Adel (2. Stand) und Klerus (1. Stand).",
  ),
  karikaturCard(
    "card-karikatur-m2-frage-7",
    KARIKATUR_M2_IMAGE,
    "Bildaussage erkennen",
    "7. Welche Bedeutung haben die Personen und Gegenstände?",
    "• Erwachender Mann mit Gewehr → 3. Stand (Arbeiter/Bauern), aktiver Widerstand\n" +
      "• Zerbrochene Ketten → Befreiung von Unterdrückung und Abhängigkeit\n" +
      "• Gewehr → bewaffnete Revolution, Kampf gegen die alte Ordnung\n" +
      "• Fliehender Adliger → Angst des 2. Standes vor dem Machtverlust\n" +
      "• Fliehender Geistlicher → Angst des 1. Standes\n" +
      "• Zerstörte Bastille im Hintergrund → Sturm auf die Bastille, Beginn der Revolution",
  ),
  karikaturCard(
    "card-karikatur-m2-frage-8",
    KARIKATUR_M2_IMAGE,
    "Bildaussage erkennen",
    "8. Auf welches Ereignis bezieht sich die Karikatur?",
    "Auf die Französische Revolution 1789 — besonders den Sturm auf die Bastille (14. Juli 1789) und die Bildung der Nationalversammlung durch den 3. Stand.",
  ),
  karikaturCard(
    "card-karikatur-m2-frage-9",
    KARIKATUR_M2_IMAGE,
    "Aussage der Karikatur formulieren",
    "9. Was ist die Botschaft?",
    "Es war höchste Zeit aufzuwachen: Der 3. Stand muss sich von seinen Fesseln befreien und die alte Ständeordnung mit Waffengewalt beenden.",
  ),
  karikaturCard(
    "card-karikatur-m2-frage-10",
    KARIKATUR_M2_IMAGE,
    "Aussage der Karikatur formulieren",
    "10. Was wird kritisiert?",
    "Die jahrhundertelange Unterdrückung des 3. Standes durch Adel und Klerus — die „Fesseln“ der Ständegesellschaft, Steuerlast und fehlende Gleichberechtigung.",
  ),
  karikaturCard(
    "card-karikatur-m2-frage-11",
    KARIKATUR_M2_IMAGE,
    "Aussage der Karikatur formulieren",
    "11. Welche Wirkung könnte die Karikatur haben?",
    "Der 3. Stand fühlt sich ermutigt zum Widerstand; Adel und Klerus sollen Angst bekommen. Das Volk erkennt: Veränderung ist möglich — die Revolution hat begonnen.",
  ),
  karikaturCard(
    "card-karikatur-m3-frage-1",
    KARIKATUR_M3_IMAGE,
    "Ersten Eindruck festhalten",
    "1. Wie wirkt die Karikatur auf dich?",
    "Die Karikatur wirkt hoffnungsvoll und triumphierend — etwas hat sich gedreht. Der Bauer wirkt zufrieden und selbstbewusst, Adel und Klerus leiden darunter. Man spürt: Der 3. Stand ist endlich „an der Reihe“.",
  ),
  karikaturCard(
    "card-karikatur-m3-frage-2",
    KARIKATUR_M3_IMAGE,
    "Einzelheiten beschreiben",
    "2. Welche Personen, Gegenstände und andere Details lassen sich erkennen? Achte auf den Gesichtsausdruck, die Körperhaltung. Beziehe die Bildunterschrift mit ein.",
    "Drei Männer — umgekehrt zu M1: Ein Bauer sitzt oben auf dem Rücken von Adliger und Geistlichem, die gebückt gehen. Am Boden liegen tote Vögel, eine weggeworfene Hacke; der Kohl ist nicht angefressen. Alle drei tragen die blau-weiß-rote Kokarde. Eine Waage steht für Gerechtigkeit. Bildunterschrift: „J'savois ben qu'j'aurions not tour !“ (Ich wusste ja, dass wir auch noch an die Reihe kämen).",
  ),
  karikaturCard(
    "card-karikatur-m3-frage-3",
    KARIKATUR_M3_IMAGE,
    "Zusätzliche Informationen heranziehen",
    "3. Wer ist der Zeichner?",
    "Unbekannt (anonymer Künstler).",
  ),
  karikaturCard(
    "card-karikatur-m3-frage-4",
    KARIKATUR_M3_IMAGE,
    "Zusätzliche Informationen heranziehen",
    "4. Wann und wo ist die Karikatur entstanden?",
    "1789, in Frankreich. In der ersten Phase der Französischen Revolution, nach dem Ballhaus-Schwur (20. Juni 1789).",
  ),
  karikaturCard(
    "card-karikatur-m3-frage-5",
    KARIKATUR_M3_IMAGE,
    "Zusätzliche Informationen heranziehen",
    "5. Gibt es einen Titel?",
    "Ja: „J'savois ben qu'j'aurions not tour !“ — auf Deutsch: „Ich wusste ja, dass wir auch noch an die Reihe kämen.“",
  ),
  karikaturCard(
    "card-karikatur-m3-frage-6",
    KARIKATUR_M3_IMAGE,
    "Zusätzliche Informationen heranziehen",
    "6. Welches Thema hat die Karikatur?",
    "Die Erhebung des 3. Standes und die Umkehrung der Ständeverhältnisse — der 3. Stand bestimmt nun mit und strebt Gleichberechtigung an.",
  ),
  karikaturCard(
    "card-karikatur-m3-frage-7",
    KARIKATUR_M3_IMAGE,
    "Bildaussage erkennen",
    "7. Welche Bedeutung haben die Personen und Gegenstände?",
    "• Bauer oben → 3. Stand ist jetzt „an der Reihe“, selbstbewusst und handelnd\n" +
      "• Adel und Klerus unten → verlieren Privilegien, müssen Lasten tragen\n" +
      "• Umkehrung der bekannten M1-Karikatur → Machtverhältnis hat sich gedreht\n" +
      "• Tote Vögel, Hacke am Boden → Ende der Adelsprivilegien (Jagdrecht), Bauer nicht mehr nur Arbeiter\n" +
      "• Blau-weiß-rote Kokarde → Revolution, Zugehörigkeit zur Nation\n" +
      "• Waage → Gerechtigkeit und Gleichberechtigung",
  ),
  karikaturCard(
    "card-karikatur-m3-frage-8",
    KARIKATUR_M3_IMAGE,
    "Bildaussage erkennen",
    "8. Auf welches Ereignis bezieht sich die Karikatur?",
    "Auf den Ballhaus-Schwur (20. Juni 1789) und die Bildung der Nationalversammlung — der 3. Stand fordert eine Verfassung und Gleichberechtigung.",
  ),
  karikaturCard(
    "card-karikatur-m3-frage-9",
    KARIKATUR_M3_IMAGE,
    "Aussage der Karikatur formulieren",
    "9. Was ist die Botschaft?",
    "Der 3. Stand ist endlich an der Reihe: Er will mitbestimmen und eine gerechte, gleichberechtigte Ordnung schaffen — nicht mehr unterdrückt werden.",
  ),
  karikaturCard(
    "card-karikatur-m3-frage-10",
    KARIKATUR_M3_IMAGE,
    "Aussage der Karikatur formulieren",
    "10. Was wird kritisiert?",
    "Die alte Ständeordnung, in der Adel und Klerus Privilegien hatten und der 3. Stand alle Lasten trug. Die Karikatur zeigt die Umkehrung: Nun sollen auch die oberen Stände Pflichten übernehmen.",
  ),
  karikaturCard(
    "card-karikatur-m3-frage-11",
    KARIKATUR_M3_IMAGE,
    "Aussage der Karikatur formulieren",
    "11. Welche Wirkung könnte die Karikatur haben?",
    "Hoffnung auf Gleichberechtigung und gesellschaftlichen Wandel; Adel und Klerus sollen den Druck spüren. Das Volk erkennt: Die Revolution verändert die Verhältnisse — der 3. Stand hat eine Stimme.",
  ),
];

export const absolutismusSections = [
  {
    id: "section-geschichte-absolutismus",
    title: "Absolutismus",
    cardIds: [
      "card-absolutismus-definition",
      "card-absolutismus-saeulen",
      "card-absolutismus-mercantilismus",
    ],
  },
  {
    id: "section-geschichte-fr-revolution",
    title: "Französische Revolution",
    cardIds: [
      "card-fr-revolution-staendegesellschaft",
      "card-fr-revolution-aufklaerung",
      "card-fr-revolution-revolution",
      "card-fr-revolution-krise",
    ],
  },
  {
    id: "section-geschichte-karikatur-m1",
    title: "Karikatur · M1",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Troisordres.jpg",
    sourceLabel: "Wikimedia · Troisordres (1789)",
    cardIds: [
      "card-karikatur-m1-frage-1",
      "card-karikatur-m1-frage-2",
      "card-karikatur-m1-frage-3",
      "card-karikatur-m1-frage-4",
      "card-karikatur-m1-frage-5",
      "card-karikatur-m1-frage-6",
      "card-karikatur-m1-frage-7",
      "card-karikatur-m1-frage-8",
      "card-karikatur-m1-frage-9",
      "card-karikatur-m1-frage-10",
      "card-karikatur-m1-frage-11",
    ],
  },
  {
    id: "section-geschichte-karikatur-m2",
    title: "Karikatur · M2",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:R%C3%A9veil_du_Tiers_%C3%89tat.jpg",
    sourceLabel: "Wikimedia · Réveil du Tiers État (1789)",
    cardIds: [
      "card-karikatur-m2-frage-1",
      "card-karikatur-m2-frage-2",
      "card-karikatur-m2-frage-3",
      "card-karikatur-m2-frage-4",
      "card-karikatur-m2-frage-5",
      "card-karikatur-m2-frage-6",
      "card-karikatur-m2-frage-7",
      "card-karikatur-m2-frage-8",
      "card-karikatur-m2-frage-9",
      "card-karikatur-m2-frage-10",
      "card-karikatur-m2-frage-11",
    ],
  },
  {
    id: "section-geschichte-karikatur-m3",
    title: "Karikatur · M3",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:J%27savois_ben_qu%27j%27aurions_not_tour.jpg",
    sourceLabel: "Wikimedia · Ich wusste ja … (1789)",
    cardIds: [
      "card-karikatur-m3-frage-1",
      "card-karikatur-m3-frage-2",
      "card-karikatur-m3-frage-3",
      "card-karikatur-m3-frage-4",
      "card-karikatur-m3-frage-5",
      "card-karikatur-m3-frage-6",
      "card-karikatur-m3-frage-7",
      "card-karikatur-m3-frage-8",
      "card-karikatur-m3-frage-9",
      "card-karikatur-m3-frage-10",
      "card-karikatur-m3-frage-11",
    ],
  },
];

const orderAbsolutismusCards = (cards, sections) => {
  if (!sections?.length) return cards;
  const map = new Map(cards.map((card) => [card.id, card]));
  const ordered = [];
  const seen = new Set();
  for (const section of sections) {
    for (const id of section.cardIds) {
      const card = map.get(id);
      if (card && !seen.has(id)) {
        ordered.push(card);
        seen.add(id);
      }
    }
  }
  for (const card of cards) {
    if (!seen.has(card.id)) ordered.push(card);
  }
  return ordered;
};

export const orderedAbsolutismusCards = orderAbsolutismusCards(
  absolutismusCards,
  absolutismusSections,
);

export const ABSOLUTISMUS_CARD_IDS = orderedAbsolutismusCards.map((c) => c.id);

export const getAbsolutismusCardById = (cardId) =>
  absolutismusCards.find((c) => c.id === cardId) || null;
