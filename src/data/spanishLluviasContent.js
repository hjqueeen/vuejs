/** Español · Lluvias tropicales — Karteikarten (Deutsch → Español)
 *  Klasse 9 · Hangyeol
 */

export const SPANISH_LLUVIAS_BOOK_ID = "book-spanish-lluvias-tropicales";

/** @param {string} id @param {string} de @param {string} es */
const card = (id, de, es) => ({
  id,
  term: de,
  explanationDe: es,
});

export const spanishLluviasCards = [
  // —— 1. la situación familiar de Chacho ——
  card(
    "card-es-lluvias-tener-familia",
    "(keine) Familie haben",
    "(no) tener familia",
  ),
  card(
    "card-es-lluvias-tener-hermano",
    "(keine) Schwester / (keinen) Bruder / Geschwister haben",
    "(no) tener una hermana / un hermano / hermanas/os",
  ),
  card(
    "card-es-lluvias-vivir-lejos",
    "weit weg von seiner/ihrer Familie leben",
    "vivir lejos de su familia",
  ),
  card(
    "card-es-lluvias-sentirse-solo",
    "sich allein fühlen oder allein sein",
    "sentirse o estar solo/a",
  ),
  card(
    "card-es-lluvias-buscar",
    "jemanden suchen",
    "buscar a alguien",
  ),
  card(
    "card-es-lluvias-encontrar",
    "jemanden finden",
    "encontrar a alguien",
  ),
  card(
    "card-es-lluvias-trabajar-plantacion",
    "(auf einer Plantage) arbeiten",
    "trabajar (en una plantación)",
  ),
  card(
    "card-es-lluvias-tener-casa",
    "(kein) Haus haben / auf der Straße leben",
    "(no) tener casa / vivir en la calle",
  ),
  card(
    "card-es-lluvias-dificultades",
    "(keine) Schwierigkeiten haben",
    "(no) tener dificultades",
  ),

  // —— 2. Chacho y Efraín, su relación ——
  card(
    "card-es-lluvias-cabana",
    "in einer Hütte leben",
    "vivir en una cabaña",
  ),
  card(
    "card-es-lluvias-persona-mayor",
    "eine ältere (alte) Person sein",
    "ser una persona mayor (vieja)",
  ),
  card(
    "card-es-lluvias-conocerse",
    "sich kennen(lernen) (sie kennen sich / sie haben sich kennengelernt)",
    "conocerse (se conocen / se han conocido)",
  ),
  card(
    "card-es-lluvias-hacerse-amigos",
    "Freunde werden (sie werden Freunde / sie sind Freunde geworden)",
    "hacerse amigos (se hacen amigos / se han hecho amigos)",
  ),
  card(
    "card-es-lluvias-desarrollar-amistad",
    "eine Freundschaft zwischen … entwickeln",
    "desarrollar una amistad entre …",
  ),
  card("card-es-lluvias-ser-pobre", "arm sein", "ser pobre(s)"),
  card(
    "card-es-lluvias-condiciones-humildes",
    "in bescheidenen Verhältnissen leben",
    "vivir en condiciones humildes",
  ),
  card(
    "card-es-lluvias-trabajar-duro",
    "viel / hart arbeiten",
    "trabajar mucho / duro",
  ),
  card(
    "card-es-lluvias-vender-cocos",
    "Kokosnüsse an Touristen verkaufen",
    "vender cocos a los turistas",
  ),
  card("card-es-lluvias-convivir", "zusammenleben", "convivir"),
  card(
    "card-es-lluvias-llevarse-bien",
    "sich gut verstehen (sie verstehen sich gut)",
    "llevarse bien (ellos se llevan bien)",
  ),
  card(
    "card-es-lluvias-buen-equipo",
    "ein gutes Team bilden",
    "formar un buen equipo",
  ),
  card(
    "card-es-lluvias-ganar-dinero",
    "Geld bekommen / verdienen",
    "recibir / ganar dinero",
  ),

  // —— 3. Hablar sobre un libro/cuento/texto ——
  card(
    "card-es-lluvias-protagonista",
    "der / die Protagonist(in) / die Protagonisten",
    "el / la protagonista / los/las protagonistas",
  ),
  card(
    "card-es-lluvias-autor",
    "der Autor / die Autorin",
    "el autor / la autora",
  ),
  card(
    "card-es-lluvias-dibujo",
    "die Zeichnung / die Illustration",
    "el dibujo / la ilustración",
  ),
  card(
    "card-es-lluvias-cuento",
    "die Erzählung / der Roman / die Geschichte",
    "el cuento / la novela / la historia",
  ),
  card(
    "card-es-lluvias-narrador",
    "der Erzähler / die Erzählerin (Ich-Erzähler / personal)",
    "el narrador / la narradora (yo / personal)",
  ),
  card("card-es-lluvias-capitulo", "das Kapitel", "el capítulo"),
  card("card-es-lluvias-parrafo", "der Absatz", "el párrafo"),
  card(
    "card-es-lluvias-principio-final",
    "am Anfang / am Ende",
    "al principio / al final",
  ),
  card(
    "card-es-lluvias-ficcion",
    "eine fiktionale / erfundene Geschichte sein",
    "ser una historia de ficción / inventada",
  ),
  card(
    "card-es-lluvias-historia-real",
    "eine wahre Geschichte / mit realem Hintergrund sein",
    "ser una historia real / con un trasfondo real",
  ),
  card(
    "card-es-lluvias-tematizar",
    "thematisieren (das Buch thematisiert / die Erzählungen thematisieren)",
    "tematizar (el libro tematiza / los cuentos tematizan)",
  ),
  card(
    "card-es-lluvias-tratar-de",
    "handeln von (das Buch / die Geschichte handelt von …)",
    "tratar de (el libro / la historia trata de …)",
  ),
  card(
    "card-es-lluvias-crear-historia",
    "eine Geschichte erschaffen / erfinden",
    "crear una historia",
  ),
  card(
    "card-es-lluvias-lector",
    "der Leser / die Leserin",
    "el lector / la lectora",
  ),
  card(
    "card-es-lluvias-transmitir",
    "etwas vermitteln (ein Gefühl / eine Atmosphäre / …)",
    "transmitir algo (un sentimiento / ambiente / …)",
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
