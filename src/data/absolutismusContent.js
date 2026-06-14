/** Geschichte · Absolutismus & Französische Revolution — Karteikarten (Begriff → Erklärung) */

import { publicAssetUrl } from "@/utils/publicAssetUrl";

export const ABSOLUTISMUS_BOOK_ID = "book-absolutismus";

const KARIKATUR_M1_IMAGE = publicAssetUrl("images/karikatur-m1-trois-ordres.png");
const KARIKATUR_M2_IMAGE = publicAssetUrl("images/karikatur-m2-reveil-tiers-etat.jpg");
const KARIKATUR_M3_IMAGE = publicAssetUrl("images/karikatur-m3-ich-wusste-ja.jpg");
// const KARIKATUR_M4_IMAGE = publicAssetUrl("images/karikatur-m4-declaration-droits.jpg");
// const KARIKATUR_M5_IMAGE = publicAssetUrl("images/karikatur-m5-tiers-etat-poids-royaume.jpg");
const KARIKATUR_M6_IMAGE = publicAssetUrl("images/karikatur-m6-france-globe-trois-ordres.jpg");
const KARIKATUR_M7_IMAGE = publicAssetUrl("images/karikatur-m7-taille-impots-corvees.jpg");
const KARIKATUR_M8_IMAGE = publicAssetUrl("images/karikatur-m8-ordres-femmes.jpg");

import { karikaturKoById } from "./absolutismusKarikaturKo.js";

/** @param {string} imageUrl @param {string} category @param {string} question @param {string} answer */
const karikaturCard = (id, imageUrl, category, question, answer) => ({
  id,
  frontImageUrl: imageUrl,
  frontCategory: category,
  term: question,
  explanationDe: answer,
  ...(karikaturKoById[id] ? { explanationKo: karikaturKoById[id] } : {}),
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
  /*
  karikaturCard(
    "card-karikatur-m4-frage-1",
    KARIKATUR_M4_IMAGE,
    "Ersten Eindruck festhalten",
    "1. Wie wirkt die Karikatur auf dich?",
    "Das Bild wirkt feierlich, hoffnungsvoll und ernst zugleich. Die großen Gesetzestafeln und vielen Symbole vermitteln: Etwas Wichtiges und Dauerhaftes wird festgeschrieben — Freiheit und Gleichheit sollen für alle gelten.",
  ),
  karikaturCard(
    "card-karikatur-m4-frage-2",
    KARIKATUR_M4_IMAGE,
    "Einzelheiten beschreiben",
    "2. Welche Personen, Gegenstände und andere Details lassen sich erkennen? Achte auf den Gesichtsausdruck, die Körperhaltung. Beziehe die Bildunterschrift mit ein.",
    "Oben der Präambel-Text der Déclaration. Links eine weibliche Allegorie (La Monarchie / Frankreich) mit Krone und Zepter, in der Hand zerbrochene Ketten der Tyrannei. Rechts der Génie de la Nation (Genius der Nation) mit Fackel und Zepter der Macht. In der Mitte unten zwei große Tafeln mit den 17 Artikeln der Erklärung, getrennt durch ein Liktorenbündel (Fasces) mit phrygischer Mütze, Eichenlaub und einer sich in den Schwanz beißenden Schlange. Darüber ein strahlendes Auge der Vorsehung im Dreieck. Antikisierende Säulen und feierliche Inschrift — keine satirische Bildunterschrift wie bei M1–M3, sondern der offizielle Titel: Déclaration des Droits de l'Homme et du Citoyen.",
  ),
  karikaturCard(
    "card-karikatur-m4-frage-3",
    KARIKATUR_M4_IMAGE,
    "Zusätzliche Informationen heranziehen",
    "3. Wer ist der Zeichner?",
    "Jean-Jacques-François Le Barbier (dit l'Aîné, 1738–1826), französischer Historienmaler — zugeschrieben/attributed.",
  ),
  karikaturCard(
    "card-karikatur-m4-frage-4",
    KARIKATUR_M4_IMAGE,
    "Zusätzliche Informationen heranziehen",
    "4. Wann und wo ist die Karikatur entstanden?",
    "Um 1789, in Paris (Frankreich). Die Erklärung wurde am 26. August 1789 von der Nationalversammlung beschlossen; das Gemälde wurde der Versammlung am 5. November 1790 offiziell übergeben.",
  ),
  karikaturCard(
    "card-karikatur-m4-frage-5",
    KARIKATUR_M4_IMAGE,
    "Zusätzliche Informationen heranziehen",
    "5. Gibt es einen Titel?",
    "Ja: „Déclaration des Droits de l'Homme et du Citoyen“ — auf Deutsch: „Erklärung der Menschen- und Bürgerrechte“.",
  ),
  karikaturCard(
    "card-karikatur-m4-frage-6",
    KARIKATUR_M4_IMAGE,
    "Zusätzliche Informationen heranziehen",
    "6. Welches Thema hat die Karikatur?",
    "Die Erklärung der Menschen- und Bürgerrechte von 1789 — die rechtliche Verankerung von Freiheit, Gleichheit und Grundrechten nach den Idealen der Aufklärung und der Französischen Revolution.",
  ),
  karikaturCard(
    "card-karikatur-m4-frage-7",
    KARIKATUR_M4_IMAGE,
    "Bildaussage erkennen",
    "7. Welche Bedeutung haben die Personen und Gegenstände?",
    "• Weibliche Allegorie (Monarchie/Frankreich) mit zerbrochenen Ketten → Ende der Tyrannei, neuer Staat\n" +
      "• Génie de la Nation mit Fackel und Zepter → souveränes Volk, Nation als Träger der Macht\n" +
      "• Zwei Gesetzestafeln mit 17 Artikeln → heilige, verbindliche Grundrechte (Anspielung auf Moses/Gesetzestafeln)\n" +
      "• Fasces (Liktorenbündel) → Einheit und Stärke des Volkes\n" +
      "• Phrygische Mütze → Freiheit\n" +
      "• Schlange, die sich in den Schwanz beißt → Ewigkeit der Rechte\n" +
      "• Eichenlaub → Sieg der Revolution\n" +
      "• Auge der Vorsehung im Dreieck → göttliche/vernünftige Ordnung, Gleichheit",
  ),
  karikaturCard(
    "card-karikatur-m4-frage-8",
    KARIKATUR_M4_IMAGE,
    "Bildaussage erkennen",
    "8. Auf welches Ereignis bezieht sich die Karikatur?",
    "Auf die Verabschiedung der Erklärung der Menschen- und Bürgerrechte am 26. August 1789 durch die Nationalversammlung — ein zentraler Schritt der Französischen Revolution.",
  ),
  karikaturCard(
    "card-karikatur-m4-frage-9",
    KARIKATUR_M4_IMAGE,
    "Aussage der Karikatur formulieren",
    "9. Was ist die Botschaft?",
    "Alle Menschen sind frei und gleich geboren; ihre Rechte sind unveräußerlich. Die Revolution beendet die Tyrannei und stellt die Rechte des Volkes in den Mittelpunkt — festgeschrieben in einer Verfassung für alle Bürger.",
  ),
  karikaturCard(
    "card-karikatur-m4-frage-10",
    KARIKATUR_M4_IMAGE,
    "Aussage der Karikatur formulieren",
    "10. Was wird kritisiert?",
    "Die alte absolutistische Ordnung ohne Grundrechte: Willkür des Königs, Ständeprivilegien und fehlende Gleichheit vor dem Gesetz. Stattdessen sollen Freiheit, Eigentum, Sicherheit und Widerstandsrecht für alle gelten.",
  ),
  karikaturCard(
    "card-karikatur-m4-frage-11",
    KARIKATUR_M4_IMAGE,
    "Aussage der Karikatur formulieren",
    "11. Welche Wirkung könnte die Karikatur haben?",
    "Das Volk erkennt seine neuen Rechte und fühlt sich als Bürger mit Anspruch auf Freiheit und Gleichheit. Die feierliche Darstellung soll Vertrauen in die Revolution wecken und zeigen: Die neue Ordnung ist legitim und dauerhaft.",
  ),
  karikaturCard(
    "card-karikatur-m5-frage-1",
    KARIKATUR_M5_IMAGE,
    "Ersten Eindruck festhalten",
    "1. Wie wirkt die Karikatur auf dich?",
    "Die Karikatur wirkt ungerecht und bedrückend. Der Mann in der Mitte leidet sichtbar unter der Last, während die beiden anderen entspannt daneben stehen. Man fühlt Mitgeleid mit dem 3. Stand und erkennt: Die Lastenverteilung ist völlig einseitig.",
  ),
  karikaturCard(
    "card-karikatur-m5-frage-2",
    KARIKATUR_M5_IMAGE,
    "Einzelheiten beschreiben",
    "2. Welche Personen, Gegenstände und andere Details lassen sich erkennen? Achte auf den Gesichtsausdruck, die Körperhaltung. Beziehe die Bildunterschrift mit ein.",
    "Runde Allegorie mit der Überschrift „EXPLICATION DE L'ALLÉGORIE“. In der Mitte ein gebeugter Mann in einfacher Kleidung (3. Stand), der eine große Kugel mit Lilien (Fleur-de-lis) auf dem Rücken trägt — das Königreich. Links ein gepanzerter Adliger (2. Stand), der sich auf die Kugel stützt und sie zusätzlich drückt. Rechts ein Geistlicher in Soutane (1. Stand), der die Kugel nur mit dem Zeigefinger berührt. Um den Rand der Bilderklärung: „le Tiers-Etat soutient seul le poids du royaume sous lequel il fléchit, un Noble … pèse dessus en s'appuyant, le Prêtre … du bout du doigt.“",
  ),
  karikaturCard(
    "card-karikatur-m5-frage-3",
    KARIKATUR_M5_IMAGE,
    "Zusätzliche Informationen heranziehen",
    "3. Wer ist der Zeichner?",
    "Unbekannt (anonymer Künstler).",
  ),
  karikaturCard(
    "card-karikatur-m5-frage-4",
    KARIKATUR_M5_IMAGE,
    "Zusätzliche Informationen heranziehen",
    "4. Wann und wo ist die Karikatur entstanden?",
    "Um 1789, in Frankreich. Kurz vor oder zu Beginn der Französischen Revolution, zur Zeit der Generalstände und der Krise des Ancien Régime.",
  ),
  karikaturCard(
    "card-karikatur-m5-frage-5",
    KARIKATUR_M5_IMAGE,
    "Zusätzliche Informationen heranziehen",
    "5. Gibt es einen Titel?",
    "Ja, als Überschrift: „EXPLICATION DE L'ALLÉGORIE“ — Erklärung der Allegorie. Der Inhalt beschreibt: „Le Tiers-État soutient le poids du Royaume“ (Der 3. Stand trägt das Gewicht des Königreichs).",
  ),
  karikaturCard(
    "card-karikatur-m5-frage-6",
    KARIKATUR_M5_IMAGE,
    "Zusätzliche Informationen heranziehen",
    "6. Welches Thema hat die Karikatur?",
    "Die ungerechte Lastenverteilung in der Ständegesellschaft des Ancien Régime: Der 3. Stand allein trägt das Königreich, während Adel und Klerus kaum helfen oder sogar zusätzlich drücken.",
  ),
  karikaturCard(
    "card-karikatur-m5-frage-7",
    KARIKATUR_M5_IMAGE,
    "Bildaussage erkennen",
    "7. Welche Bedeutung haben die Personen und Gegenstände?",
    "• Gebeugter Mann in der Mitte → 3. Stand (Bauern, Bürger), trägt alle Last\n" +
      "• Kugel mit Lilien (Fleur-de-lis) → das Königreich Frankreich / Staat\n" +
      "• Gepanzerter Adliger, der sich aufstützt → 2. Stand drückt zusätzlich, statt zu entlasten\n" +
      "• Geistlicher mit Zeigefinger → 1. Stand hilft nur symbolisch, nicht wirklich\n" +
      "• Runde Form + erklärender Text → Allegorie soll auch Analphabeten verständlich sein",
  ),
  karikaturCard(
    "card-karikatur-m5-frage-8",
    KARIKATUR_M5_IMAGE,
    "Bildaussage erkennen",
    "8. Auf welches Ereignis bezieht sich die Karikatur?",
    "Auf die soziale und wirtschaftliche Krise Frankreichs vor der Revolution 1789 — die Generalstände und die Forderung des 3. Standes nach gleichen Rechten und gerechter Besteuerung.",
  ),
  karikaturCard(
    "card-karikatur-m5-frage-9",
    KARIKATUR_M5_IMAGE,
    "Aussage der Karikatur formulieren",
    "9. Was ist die Botschaft?",
    "Der 3. Stand kann die Last des Staates nicht allein weiter tragen. Adel und Klerus müssen endlich wirklich mithelfen — durch Steuern, Arbeit und Verzicht auf Privilegien — statt nur zuzuschauen oder noch schwerer zu machen.",
  ),
  karikaturCard(
    "card-karikatur-m5-frage-10",
    KARIKATUR_M5_IMAGE,
    "Aussage der Karikatur formulieren",
    "10. Was wird kritisiert?",
    "Die Ständegesellschaft: Der 3. Stand zahlt fast alle Steuern und Frondienste, während Adel (2. Stand) und Klerus (1. Stand) privilegiert sind, wenig zahlen und den Staat nicht wirklich stützen — der Adlige drückt sogar noch zusätzlich.",
  ),
  karikaturCard(
    "card-karikatur-m5-frage-11",
    KARIKATUR_M5_IMAGE,
    "Aussage der Karikatur formulieren",
    "11. Welche Wirkung könnte die Karikatur haben?",
    "Der 3. Stand erkennt das Unrecht und fühlt sich bestätigt in seiner Forderung nach Reform. Die einfache Allegorie mit Erklärungstext macht das Problem klar — und kann Wut und Widerstand gegen Adel und Klerus wecken.",
  ),
  */
  karikaturCard(
    "card-karikatur-m6-frage-1",
    KARIKATUR_M6_IMAGE,
    "Ersten Eindruck festhalten",
    "1. Wie wirkt die Karikatur auf dich?",
    "Die Karikatur wirkt zunächst hoffnungsvoll — alle drei Stände stützen gemeinsam Frankreich. Gleichzeitig wirkt sie aber auch ungerecht: Der Mann vom Volk kniet und trägt das Hauptgewicht, während Adel und Klerus stehen und nur mithelfen. Man spürt: Einigkeit wird propagiert, aber die Last bleibt beim 3. Stand.",
  ),
  karikaturCard(
    "card-karikatur-m6-frage-2",
    KARIKATUR_M6_IMAGE,
    "Einzelheiten beschreiben",
    "2. Welche Personen, Gegenstände und andere Details lassen sich erkennen? Achte auf den Gesichtsausdruck, die Körperhaltung. Beziehe die Bildunterschrift mit ein.",
    "Drei Männer stützen eine große blaue Kugel mit goldener Krone und drei Fleur-de-lis (Frankreich). In der Mitte kniet ein Mann in einfacher Kleidung (3. Stand / Peuple), trägt die Kugel mit den Händen. Links ein gepanzerter Adliger mit rotem Umhang und Federhelm (2. Stand), rechts ein Bischof in gold-roter Soutane mit Mitra und Bischofsstab (1. Stand) — beide halten die Kugel mit. Am Boden ein Korb mit Bienenkorb (Ruche) und eine Schaufel. Bildunterschrift: „La France Figurée sous un Globe est soutenu du Peuple — la Noblesse et le Clergé aide au premier — La Ruche represente les trois Ordres reunis.“",
  ),
  karikaturCard(
    "card-karikatur-m6-frage-3",
    KARIKATUR_M6_IMAGE,
    "Zusätzliche Informationen heranziehen",
    "3. Wer ist der Zeichner?",
    "Unbekannt (anonymer Künstler).",
  ),
  karikaturCard(
    "card-karikatur-m6-frage-4",
    KARIKATUR_M6_IMAGE,
    "Zusätzliche Informationen heranziehen",
    "4. Wann und wo ist die Karikatur entstanden?",
    "1789, in Frankreich (Paris). Zur Zeit der Generalstände und zu Beginn der Französischen Revolution — als noch Hoffnung auf die Vereinigung der drei Stände bestand.",
  ),
  karikaturCard(
    "card-karikatur-m6-frage-5",
    KARIKATUR_M6_IMAGE,
    "Zusätzliche Informationen heranziehen",
    "5. Gibt es einen Titel?",
    "Ja, in der Bildunterschrift: „La France Figurée sous un Globe est soutenu du Peuple …“ — auf Deutsch: „Das als Kugel dargestellte Frankreich wird vom Volk getragen …“",
  ),
  karikaturCard(
    "card-karikatur-m6-frage-6",
    KARIKATUR_M6_IMAGE,
    "Zusätzliche Informationen heranziehen",
    "6. Welches Thema hat die Karikatur?",
    "Die Ständegesellschaft und die Lastenverteilung: Das Volk (3. Stand) trägt Frankreich, Adel und Klerus sollen mithelfen — und der Bienenkorb steht für die vereinten drei Stände.",
  ),
  karikaturCard(
    "card-karikatur-m6-frage-7",
    KARIKATUR_M6_IMAGE,
    "Bildaussage erkennen",
    "7. Welche Bedeutung haben die Personen und Gegenstände?",
    "• Kniender Mann in einfacher Kleidung → 3. Stand (Peuple), trägt das Hauptgewicht\n" +
      "• Gepanzerter Adliger mit Schwert → 2. Stand (Noblesse), Militär und Privilegien\n" +
      "• Bischof mit Bischofsstab → 1. Stand (Klerus), geistliche Macht\n" +
      "• Kugel mit Krone und Lilien → Königreich Frankreich / Staat\n" +
      "• Bienenkorb (Ruche) → drei Stände sollen wie Bienen zusammenarbeiten\n" +
      "• Schaufel am Boden → harte Arbeit des Volkes\n" +
      "• Olivenzweig → Frieden / Hoffnung auf Einheit",
  ),
  karikaturCard(
    "card-karikatur-m6-frage-8",
    KARIKATUR_M6_IMAGE,
    "Bildaussage erkennen",
    "8. Auf welches Ereignis bezieht sich die Karikatur?",
    "Auf die Generalstände von 1789 und die Forderung nach Zusammenarbeit der drei Stände — kurz vor oder zu Beginn der Revolution, als eine Vereinigung (union des trois ordres) noch erwartet wurde.",
  ),
  karikaturCard(
    "card-karikatur-m6-frage-9",
    KARIKATUR_M6_IMAGE,
    "Aussage der Karikatur formulieren",
    "9. Was ist die Botschaft?",
    "Frankreich kann nur stehen, wenn alle drei Stände zusammenhalten — aber das Volk trägt den Staat vor allem allein. Adel und Klerus sollen endlich wirklich mittragen, nicht nur symbolisch helfen.",
  ),
  karikaturCard(
    "card-karikatur-m6-frage-10",
    KARIKATUR_M6_IMAGE,
    "Aussage der Karikatur formulieren",
    "10. Was wird kritisiert?",
    "Dass der 3. Stand den Staat praktisch allein stützt (Steuern, Arbeit), während Adel und Klerus zwar mithelfen, aber bequemer dastehen und weiter privilegiert sind. Die „Einheit“ der Stände ist noch ungleich.",
  ),
  karikaturCard(
    "card-karikatur-m6-frage-11",
    KARIKATUR_M6_IMAGE,
    "Aussage der Karikatur formulieren",
    "11. Welche Wirkung könnte die Karikatur haben?",
    "Das Volk erkennt: Wir tragen das Land — ohne uns geht nichts. Adel und Klerus sollen sich verpflichtet fühlen, wirklich mitzuhelfen. Die Allegorie kann Hoffnung auf Einheit wecken, aber auch den Druck auf Reform verstärken.",
  ),
  karikaturCard(
    "card-karikatur-m7-frage-1",
    KARIKATUR_M7_IMAGE,
    "Ersten Eindruck festhalten",
    "1. Wie wirkt die Karikatur auf dich?",
    "Die Karikatur wirkt brutal ungerecht und bedrückend. Der Bauer liegt am Boden und wird von einem schweren Stein nieder gedrückt, während Geistlicher und Adliger oben darauf stehen. Man fühlt sofort Mitgeleid mit dem 3. Stand und erkennt: Die Lastenverteilung ist völlig einseitig.",
  ),
  karikaturCard(
    "card-karikatur-m7-frage-2",
    KARIKATUR_M7_IMAGE,
    "Einzelheiten beschreiben",
    "2. Welche Personen, Gegenstände und andere Details lassen sich erkennen? Achte auf den Gesichtsausdruck, die Körperhaltung. Beziehe die Bildunterschrift mit ein.",
    "Auf dem Land liegen drei Figuren: Am Boden ein Bauer in rotem Kittel und Hut, neben ihm eine Hacke (bêche). Ein großer Stein liegt auf seinem Körper — darauf steht „Taille, impôts et corvées“. Auf dem Stein stehen zwei Männer: links ein Priester in langer blauer Robe mit Buch in der Hand, rechts ein Adliger in Uniform mit Schwert an der Seite. Keine separate Bildunterschrift — der Text auf dem Stein ist das zentrale Detail.",
  ),
  karikaturCard(
    "card-karikatur-m7-frage-3",
    KARIKATUR_M7_IMAGE,
    "Zusätzliche Informationen heranziehen",
    "3. Wer ist der Zeichner?",
    "Unbekannt. Anonyme, kolorierte Gravure (estampe) ohne nennenswerten Künstler.",
  ),
  karikaturCard(
    "card-karikatur-m7-frage-4",
    KARIKATUR_M7_IMAGE,
    "Zusätzliche Informationen heranziehen",
    "4. Wann und wo ist die Karikatur entstanden?",
    "1789, in Frankreich (Paris). Entstand in den ersten Monaten von 1789, kurz vor der Französischen Revolution — zur Zeit der Generalstände und der Cahiers de doléances. Aufbewahrt im Musée Carnavalet (Paris).",
  ),
  karikaturCard(
    "card-karikatur-m7-frage-5",
    KARIKATUR_M7_IMAGE,
    "Zusätzliche Informationen heranziehen",
    "5. Gibt es einen Titel?",
    "Nein, kein offizieller Titel. Die zentrale Inschrift auf dem Stein lautet: „Taille, impôts et corvées“ — auf Deutsch: „Taille (Grundsteuer), Abgaben und Frondienst.“",
  ),
  karikaturCard(
    "card-karikatur-m7-frage-6",
    KARIKATUR_M7_IMAGE,
    "Zusätzliche Informationen heranziehen",
    "6. Welches Thema hat die Karikatur?",
    "Die ungerechte Steuer- und Lastenverteilung in der Ständegesellschaft des Ancien Régime: Der 3. Stand wird von Steuern erdrückt, während Adel und Klerus privilegiert sind und nicht (oder kaum) zahlen.",
  ),
  karikaturCard(
    "card-karikatur-m7-frage-7",
    KARIKATUR_M7_IMAGE,
    "Bildaussage erkennen",
    "7. Welche Bedeutung haben die Personen und Gegenstände?",
    "• Bauer am Boden in rotem Kittel → 3. Stand (Bauern), wird physisch erdrückt\n" +
      "• Stein „Taille, impôts et corvées“ → die Lasten des 3. Standes: direkte Steuer (taille), sonstige Abgaben (impôts), Frondienst (corvées)\n" +
      "• Hacke (bêche) → harte körperliche Arbeit des Bauern\n" +
      "• Priester mit Buch → 1. Stand (Klerus); zahlt keine Steuern, nimmt Zehnt (dîme) von Bauern\n" +
      "• Adliger mit Schwert → 2. Stand (Adel); Privilegien, zieht Abgaben und Frondienste von Bauern\n" +
      "• Zwei oben auf dem Stein → Klerus und Adel „wiegen“ auf den Steuern, ohne selbst zu zahlen",
  ),
  karikaturCard(
    "card-karikatur-m7-frage-8",
    KARIKATUR_M7_IMAGE,
    "Bildaussage erkennen",
    "8. Auf welches Ereignis bezieht sich die Karikatur?",
    "Auf die Krise des Ancien Régime und die Vorgeschichte der Französischen Revolution 1789 — die Einberufung der Generalstände (5. Mai 1789) und die Cahiers de doléances, in denen der 3. Stand die Ungerechtigkeit der Steuern anprangert.",
  ),
  karikaturCard(
    "card-karikatur-m7-frage-9",
    KARIKATUR_M7_IMAGE,
    "Aussage der Karikatur formulieren",
    "9. Was ist die Botschaft?",
    "Der 3. Stand wird von Steuern und Frondiensten erdrückt, während Adel und Klerus oben stehen und profitieren. Alle sollten Steuern zahlen — der 3. Stand fordert Gleichheit, beginnend mit Steuergleichheit (égalité fiscale).",
  ),
  karikaturCard(
    "card-karikatur-m7-frage-10",
    KARIKATUR_M7_IMAGE,
    "Aussage der Karikatur formulieren",
    "10. Was wird kritisiert?",
    "Die Ständegesellschaft und die Steuerordnung: Der 3. Stand zahlt taille, impôts und corvées, während Adel und Klerus keine oder wenig Steuern zahlen und zusätzlich von Bauern profitieren (dîme für den Klerus, Abgaben und Frondienste für die Noblesse).",
  ),
  karikaturCard(
    "card-karikatur-m7-frage-11",
    KARIKATUR_M7_IMAGE,
    "Aussage der Karikatur formulieren",
    "11. Welche Wirkung könnte die Karikatur haben?",
    "1789 wird die Karikatur zur politischen Sprache: Sie funktioniert wie ein Cahier de doléances in Bildform. Der 3. Stand erkennt seine Unterdrückung und seine berechtigten Forderungen — und kann Widerstand gegen die alte Ordnung wecken.",
  ),
  karikaturCard(
    "card-karikatur-m8-frage-1",
    KARIKATUR_M8_IMAGE,
    "Ersten Eindruck festhalten",
    "1. Wie wirkt die Karikatur auf dich?",
    "Die Karikatur wirkt ungerecht und bedrückend — ähnlich wie die männliche Version (M1), aber auffällig: Alle Figuren sind Frauen. Die gebeugte Bäuerin leidet sichtbar, während Adelige und Geistliche auf ihrem Rücken entspannt sitzen. Man spürt Mitgeleid und erkennt: Auch Frauen sind von der Ständegesellschaft betroffen.",
  ),
  karikaturCard(
    "card-karikatur-m8-frage-2",
    KARIKATUR_M8_IMAGE,
    "Einzelheiten beschreiben",
    "2. Welche Personen, Gegenstände und andere Details lassen sich erkennen? Achte auf den Gesichtsausdruck, die Körperhaltung. Beziehe die Bildunterschrift mit ein.",
    "Oben: „Costumes et Caricatures“. Eine gebeugte Bäuerin (Fermière) in einfacher Kleidung stützt sich auf eine Hacke und trägt auf dem Rücken zwei Frauen: eine Nonne/Geistliche in Soutane und eine Adlige in feiner Kleidung. Auf dem Bild stehen die Ziffern „I. 2. 3.“ für die drei Stände. Unten: „La fermière en corvé“ und „Les 3 ordres du temps passé en juin 1789“. Bildunterschrift: „À faut esperer qu'eu se jeu la finira bentot“ (Man muss hoffen, dass dieses Spiel bald ein Ende hat).",
  ),
  karikaturCard(
    "card-karikatur-m8-frage-3",
    KARIKATUR_M8_IMAGE,
    "Zusätzliche Informationen heranziehen",
    "3. Wer ist der Zeichner?",
    "Unbekannt. Anonyme Gravure, aufbewahrt in der Bibliothèque nationale de France (BnF).",
  ),
  karikaturCard(
    "card-karikatur-m8-frage-4",
    KARIKATUR_M8_IMAGE,
    "Zusätzliche Informationen heranziehen",
    "4. Wann und wo ist die Karikatur entstanden?",
    "Juni 1789, in Frankreich (Paris). Entstand zur Zeit der Generalstände und der Cahiers de doléances — als „Version Femmes“ (VF) der bekannten Drei-Ordres-Karikatur.",
  ),
  karikaturCard(
    "card-karikatur-m8-frage-5",
    KARIKATUR_M8_IMAGE,
    "Zusätzliche Informationen heranziehen",
    "5. Gibt es einen Titel?",
    "Ja: „La Fermière en Corvé“ und „Les 3 ordres du temps passé en juin 1789“. Auch bekannt als „Version Femmes“ — die weibliche Variante der Trois-Ordres-Karikatur.",
  ),
  karikaturCard(
    "card-karikatur-m8-frage-6",
    KARIKATUR_M8_IMAGE,
    "Zusätzliche Informationen heranziehen",
    "6. Welches Thema hat die Karikatur?",
    "Die soziale Ungleichheit in der Ständegesellschaft — dargestellt mit Frauenfiguren. Eine Frau des 3. Standes (Fermière) trägt die Frauen von Adel und Klerus; zugleich die Stellung der Frauen als „quatrième ordre“ (vierte Stand) in der Gesellschaft.",
  ),
  karikaturCard(
    "card-karikatur-m8-frage-7",
    KARIKATUR_M8_IMAGE,
    "Bildaussage erkennen",
    "7. Welche Bedeutung haben die Personen und Gegenstände?",
    "• Gebeugte Fermière mit Hacke → Frauen des 3. Standes, harte Arbeit und Frondienst (corvée)\n" +
      "• Nonne/Geistliche auf dem Rücken → 1. Stand (Klerus), auch in weiblicher Form\n" +
      "• Adlige auf dem Rücken → 2. Stand (Noblesse), privilegiert und faul\n" +
      "• „I. 2. 3.“ → die drei Stände der Ständegesellschaft\n" +
      "• Parallele zur männlichen Karikatur (M1) → dieselbe Kritik, aber mit Frauen als Figuren\n" +
      "• „Version Femmes“ → Frauen sind ebenfalls von der Ungleichheit betroffen und fast unsichtbar in der Politik",
  ),
  karikaturCard(
    "card-karikatur-m8-frage-8",
    KARIKATUR_M8_IMAGE,
    "Bildaussage erkennen",
    "8. Auf welches Ereignis bezieht sich die Karikatur?",
    "Auf die Generalstände von 1789 und die Cahiers de doléances — einschließlich der Forderungen von Frauen (z. B. Cahier de Madame B.B.), die eine gleiche Vertretung der Frauen verlangten.",
  ),
  karikaturCard(
    "card-karikatur-m8-frage-9",
    KARIKATUR_M8_IMAGE,
    "Aussage der Karikatur formulieren",
    "9. Was ist die Botschaft?",
    "Auch Frauen leiden unter der Ständegesellschaft — sie sind das „vierte Stand“, das am meisten unterdrückt wird. Wie beim 3. Stand insgesamt muss auch dieses „Spiel“ bald ein Ende haben; Frauen fordern Gleichheit und Anerkennung.",
  ),
  karikaturCard(
    "card-karikatur-m8-frage-10",
    KARIKATUR_M8_IMAGE,
    "Aussage der Karikatur formulieren",
    "10. Was wird kritisiert?",
    "Die doppelte Ungleichheit: Ständegesellschaft (3. Stand trägt alles) und Geschlechterungleichheit (Frauen haben keine politischen Rechte, werden von Männern nicht vertreten). Privilegierte Frauen von Adel und Klerus profitieren, während die Bäuerin alle Lasten trägt.",
  ),
  karikaturCard(
    "card-karikatur-m8-frage-11",
    KARIKATUR_M8_IMAGE,
    "Aussage der Karikatur formulieren",
    "11. Welche Wirkung könnte die Karikatur haben?",
    "Frauen erkennen ihre Unterdrückung und den feministischen Impuls der Revolution. Die Karikatur zeigt: Auch Frauen wollen gehört werden — und weckt Hoffnung auf Veränderung, auch wenn die Männer der Revolution den Frauen zunächst wenig Rechte gewähren werden.",
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
  /*
  {
    id: "section-geschichte-karikatur-m4",
    title: "Karikatur · M4",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Declaration_of_the_Rights_of_Man_and_of_the_Citizen_in_1789.jpg",
    sourceLabel: "Wikimedia · Déclaration des droits de l'homme (1789)",
    cardIds: [
      "card-karikatur-m4-frage-1",
      "card-karikatur-m4-frage-2",
      "card-karikatur-m4-frage-3",
      "card-karikatur-m4-frage-4",
      "card-karikatur-m4-frage-5",
      "card-karikatur-m4-frage-6",
      "card-karikatur-m4-frage-7",
      "card-karikatur-m4-frage-8",
      "card-karikatur-m4-frage-9",
      "card-karikatur-m4-frage-10",
      "card-karikatur-m4-frage-11",
    ],
  },
  {
    id: "section-geschichte-karikatur-m5",
    title: "Karikatur · M5",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Le_Tiers-%C3%89tat_soutient_le_poids_du_Royaume.jpg",
    sourceLabel: "Wikimedia · Le Tiers-État soutient le poids du Royaume (ca. 1789)",
    cardIds: [
      "card-karikatur-m5-frage-1",
      "card-karikatur-m5-frage-2",
      "card-karikatur-m5-frage-3",
      "card-karikatur-m5-frage-4",
      "card-karikatur-m5-frage-5",
      "card-karikatur-m5-frage-6",
      "card-karikatur-m5-frage-7",
      "card-karikatur-m5-frage-8",
      "card-karikatur-m5-frage-9",
      "card-karikatur-m5-frage-10",
      "card-karikatur-m5-frage-11",
    ],
  },
  */
  {
    id: "section-geschichte-karikatur-m6",
    title: "Karikatur · M6",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:La_France_Figur%C3%A9e_sous_un_Globe_est_soutenu_du_Peuple_La_Noblesse_et_le_Clerg%C3%A9_aide_au_premier,_la_ruche_represente_les_trois_Ordres_reunies._LCCN2009633457.jpg",
    sourceLabel: "Wikimedia · La France figurée sous un Globe (1789)",
    cardIds: [
      "card-karikatur-m6-frage-1",
      "card-karikatur-m6-frage-2",
      "card-karikatur-m6-frage-3",
      "card-karikatur-m6-frage-4",
      "card-karikatur-m6-frage-5",
      "card-karikatur-m6-frage-6",
      "card-karikatur-m6-frage-7",
      "card-karikatur-m6-frage-8",
      "card-karikatur-m6-frage-9",
      "card-karikatur-m6-frage-10",
      "card-karikatur-m6-frage-11",
    ],
  },
  {
    id: "section-geschichte-karikatur-m7",
    title: "Karikatur · M7",
    sourceUrl:
      "https://histoire-en-citations.fr/WP/lhistoire-en-caricatures-sous-la-revolution/",
    sourceLabel: "Histoire en Citations · Taille, impôts et corvées (1789)",
    cardIds: [
      "card-karikatur-m7-frage-1",
      "card-karikatur-m7-frage-2",
      "card-karikatur-m7-frage-3",
      "card-karikatur-m7-frage-4",
      "card-karikatur-m7-frage-5",
      "card-karikatur-m7-frage-6",
      "card-karikatur-m7-frage-7",
      "card-karikatur-m7-frage-8",
      "card-karikatur-m7-frage-9",
      "card-karikatur-m7-frage-10",
      "card-karikatur-m7-frage-11",
    ],
  },
  {
    id: "section-geschichte-karikatur-m8",
    title: "Karikatur · M8",
    sourceUrl:
      "https://histoire-en-citations.fr/WP/lhistoire-en-caricatures-sous-la-revolution/",
    sourceLabel: "Histoire en Citations · La Fermière en Corvé — Version Femmes (1789)",
    cardIds: [
      "card-karikatur-m8-frage-1",
      "card-karikatur-m8-frage-2",
      "card-karikatur-m8-frage-3",
      "card-karikatur-m8-frage-4",
      "card-karikatur-m8-frage-5",
      "card-karikatur-m8-frage-6",
      "card-karikatur-m8-frage-7",
      "card-karikatur-m8-frage-8",
      "card-karikatur-m8-frage-9",
      "card-karikatur-m8-frage-10",
      "card-karikatur-m8-frage-11",
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
