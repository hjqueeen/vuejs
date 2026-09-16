/** Español · Lluvias tropicales — Karteikarten (Español → Deutsch)
 *  Klasse 9 · Hangyeol
 */

export const SPANISH_LLUVIAS_BOOK_ID = "book-spanish-lluvias-tropicales";

/** @param {string} id @param {string} term @param {string} meaning */
const card = (id, term, meaning) => ({
  id,
  term,
  explanationDe: meaning,
});

export const spanishLluviasCards = [
  // —— 1. la situación familiar de Chacho ——
  card(
    "card-es-lluvias-tener-familia",
    "(no) tener familia",
    "(keine) Familie haben",
  ),
  card(
    "card-es-lluvias-tener-hermano",
    "(no) tener una hermana / un hermano / hermanas/os",
    "(keine) Schwester / (keinen) Bruder / Geschwister haben",
  ),
  card(
    "card-es-lluvias-vivir-lejos",
    "vivir lejos de su familia",
    "weit weg von seiner/ihrer Familie leben",
  ),
  card(
    "card-es-lluvias-sentirse-solo",
    "sentirse o estar solo/a",
    "sich allein fühlen oder allein sein",
  ),
  card(
    "card-es-lluvias-buscar",
    "buscar a alguien",
    "jemanden suchen",
  ),
  card(
    "card-es-lluvias-encontrar",
    "encontrar a alguien",
    "jemanden finden",
  ),
  card(
    "card-es-lluvias-trabajar-plantacion",
    "trabajar (en una plantación)",
    "(auf einer Plantage) arbeiten",
  ),
  card(
    "card-es-lluvias-tener-casa",
    "(no) tener casa / vivir en la calle",
    "(kein) Haus haben / auf der Straße leben",
  ),
  card(
    "card-es-lluvias-dificultades",
    "(no) tener dificultades",
    "(keine) Schwierigkeiten haben",
  ),

  // —— 2. Chacho y Efraín, su relación ——
  card(
    "card-es-lluvias-cabana",
    "vivir en una cabaña",
    "in einer Hütte leben",
  ),
  card(
    "card-es-lluvias-persona-mayor",
    "ser una persona mayor (vieja)",
    "eine ältere (alte) Person sein",
  ),
  card(
    "card-es-lluvias-conocerse",
    "conocerse (se conocen / se han conocido)",
    "sich kennen(lernen) (sie kennen sich / sie haben sich kennengelernt)",
  ),
  card(
    "card-es-lluvias-hacerse-amigos",
    "hacerse amigos (se hacen amigos / se han hecho amigos)",
    "Freunde werden (sie werden Freunde / sie sind Freunde geworden)",
  ),
  card(
    "card-es-lluvias-desarrollar-amistad",
    "desarrollar una amistad entre …",
    "eine Freundschaft zwischen … entwickeln",
  ),
  card("card-es-lluvias-ser-pobre", "ser pobre(s)", "arm sein"),
  card(
    "card-es-lluvias-condiciones-humildes",
    "vivir en condiciones humildes",
    "in bescheidenen Verhältnissen leben",
  ),
  card(
    "card-es-lluvias-trabajar-duro",
    "trabajar mucho / duro",
    "viel / hart arbeiten",
  ),
  card(
    "card-es-lluvias-vender-cocos",
    "vender cocos a los turistas",
    "Kokosnüsse an Touristen verkaufen",
  ),
  card("card-es-lluvias-convivir", "convivir", "zusammenleben"),
  card(
    "card-es-lluvias-llevarse-bien",
    "llevarse bien (ellos se llevan bien)",
    "sich gut verstehen (sie verstehen sich gut)",
  ),
  card(
    "card-es-lluvias-buen-equipo",
    "formar un buen equipo",
    "ein gutes Team bilden",
  ),
  card(
    "card-es-lluvias-ganar-dinero",
    "recibir / ganar dinero",
    "Geld bekommen / verdienen",
  ),

  // —— 3. Hablar sobre un libro/cuento/texto ——
  card(
    "card-es-lluvias-protagonista",
    "el / la protagonista / los/las protagonistas",
    "der / die Protagonist(in) / die Protagonisten",
  ),
  card(
    "card-es-lluvias-autor",
    "el autor / la autora",
    "der Autor / die Autorin",
  ),
  card(
    "card-es-lluvias-dibujo",
    "el dibujo / la ilustración",
    "die Zeichnung / die Illustration",
  ),
  card(
    "card-es-lluvias-cuento",
    "el cuento / la novela / la historia",
    "die Erzählung / der Roman / die Geschichte",
  ),
  card(
    "card-es-lluvias-narrador",
    "el narrador / la narradora (yo / personal)",
    "der Erzähler / die Erzählerin (Ich-Erzähler / personal)",
  ),
  card("card-es-lluvias-capitulo", "el capítulo", "das Kapitel"),
  card("card-es-lluvias-parrafo", "el párrafo", "der Absatz"),
  card(
    "card-es-lluvias-principio-final",
    "al principio / al final",
    "am Anfang / am Ende",
  ),
  card(
    "card-es-lluvias-ficcion",
    "ser una historia de ficción / inventada",
    "eine fiktionale / erfundene Geschichte sein",
  ),
  card(
    "card-es-lluvias-historia-real",
    "ser una historia real / con un trasfondo real",
    "eine wahre Geschichte / mit realem Hintergrund sein",
  ),
  card(
    "card-es-lluvias-tematizar",
    "tematizar (el libro tematiza / los cuentos tematizan)",
    "thematisieren (das Buch thematisiert / die Erzählungen thematisieren)",
  ),
  card(
    "card-es-lluvias-tratar-de",
    "tratar de (el libro / la historia trata de …)",
    "handeln von (das Buch / die Geschichte handelt von …)",
  ),
  card(
    "card-es-lluvias-crear-historia",
    "crear una historia",
    "eine Geschichte erschaffen / erfinden",
  ),
  card(
    "card-es-lluvias-lector",
    "el lector / la lectora",
    "der Leser / die Leserin",
  ),
  card(
    "card-es-lluvias-transmitir",
    "transmitir algo (un sentimiento / ambiente / …)",
    "etwas vermitteln (ein Gefühl / eine Atmosphäre / …)",
  ),
];

export const spanishLluviasSections = [
  {
    id: "section-es-lluvias-familia",
    title: "la situación familiar de Chacho",
    cardIds: [
      "card-es-lluvias-tener-familia",
      "card-es-lluvias-tener-hermano",
      "card-es-lluvias-vivir-lejos",
      "card-es-lluvias-sentirse-solo",
      "card-es-lluvias-buscar",
      "card-es-lluvias-encontrar",
      "card-es-lluvias-trabajar-plantacion",
      "card-es-lluvias-tener-casa",
      "card-es-lluvias-dificultades",
    ],
  },
  {
    id: "section-es-lluvias-relacion",
    title: "Chacho y Efraín · su relación",
    cardIds: [
      "card-es-lluvias-cabana",
      "card-es-lluvias-persona-mayor",
      "card-es-lluvias-conocerse",
      "card-es-lluvias-hacerse-amigos",
      "card-es-lluvias-desarrollar-amistad",
      "card-es-lluvias-ser-pobre",
      "card-es-lluvias-condiciones-humildes",
      "card-es-lluvias-trabajar-duro",
      "card-es-lluvias-vender-cocos",
      "card-es-lluvias-convivir",
      "card-es-lluvias-llevarse-bien",
      "card-es-lluvias-buen-equipo",
      "card-es-lluvias-ganar-dinero",
    ],
  },
  {
    id: "section-es-lluvias-libro",
    title: "Hablar sobre un libro / cuento / texto",
    cardIds: [
      "card-es-lluvias-protagonista",
      "card-es-lluvias-autor",
      "card-es-lluvias-dibujo",
      "card-es-lluvias-cuento",
      "card-es-lluvias-narrador",
      "card-es-lluvias-capitulo",
      "card-es-lluvias-parrafo",
      "card-es-lluvias-principio-final",
      "card-es-lluvias-ficcion",
      "card-es-lluvias-historia-real",
      "card-es-lluvias-tematizar",
      "card-es-lluvias-tratar-de",
      "card-es-lluvias-crear-historia",
      "card-es-lluvias-lector",
      "card-es-lluvias-transmitir",
    ],
  },
];

export const SPANISH_LLUVIAS_CARD_IDS = spanishLluviasSections.flatMap(
  (s) => s.cardIds,
);

export const orderedSpanishLluviasCards = SPANISH_LLUVIAS_CARD_IDS.map(
  (id) => spanishLluviasCards.find((c) => c.id === id),
).filter(Boolean);

export const getSpanishLluviasCardById = (cardId) =>
  spanishLluviasCards.find((c) => c.id === cardId) || null;
