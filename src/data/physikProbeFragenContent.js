/** Physik · Klasse 9 — Probe-Fragen (Frage vorne, Antwort leer)
 *  Hangyeol · 학생이 먼저 답을 말해/써 보게 함
 *  원본: hangyeol-physik-karteikarten.md (Q만)
 */

export const PHYSIK_PROBE_FRAGEN_BOOK_ID = "book-physik-probe-fragen-k9";

/**
 * @param {string} id
 * @param {string} de — 질문 (독일어)
 * @param {string} ko — 질문 (한국어)
 * @param {string} [category]
 */
const q = (id, de, ko, category = "") => ({
  id,
  termDe: de,
  termKo: ko,
  /** 기본 표시: 독일어 질문 (resolve에서 DE+KO 가능) */
  term: de,
  /** 뒷면 비움 — 학생이 스스로 답함 */
  explanationDe: "",
  ...(category ? { frontCategory: category } : {}),
});

export const physikProbeFragenCards = [
  // ─── A. Strom ───
  q(
    "card-ppf-a1",
    "Wie werden Amperemeter und Voltmeter geschaltet?",
    "전류계와 전압계는 어떻게 연결하는가?",
    "A · Strom",
  ),
  q(
    "card-ppf-a2",
    "Was versteht man unter elektrischem Strom?",
    "전류란 무엇인가?",
    "A · Strom",
  ),
  q(
    "card-ppf-a3",
    "In welche Richtung zeigt die technische Stromrichtung?",
    "기술 전류 방향은 어느 쪽인가?",
    "A · Strom",
  ),
  q(
    "card-ppf-a4",
    "In welche Richtung bewegen sich die Elektronen in einem Metalldraht?",
    "금속 도선에서 전자는 어느 쪽으로 움직이는가?",
    "A · Strom",
  ),
  q(
    "card-ppf-a5",
    "Warum hat Ampère die Stromrichtung vom „+“ zum „−“ festgelegt?",
    "왜 앙페르는 +→− 방향으로 전류를 정했는가?",
    "A · Strom",
  ),
  q(
    "card-ppf-a6",
    "Warum stellt man die Stromrichtung heute nicht um? Nenne zwei Gründe.",
    "왜 오늘날 전류 방향을 바꾸지 않는가? 이유 두 가지.",
    "A · Strom",
  ),
  q(
    "card-ppf-a7",
    "Warum tragen Elektronen eine negative Ladung (im Zusammenhang mit der Stromrichtung)?",
    "전류 방향과 관련해, 전자가 음전하를 띠는 이유는?",
    "A · Strom",
  ),
  q(
    "card-ppf-a8",
    "Was bedeutet die Formel U = R · I qualitativ (ohne Rechnung)?",
    "공식 U = R · I가 의미하는 바는? (계산 없이)",
    "A · Strom",
  ),

  // ─── B. Pole ───
  q(
    "card-ppf-b1",
    "Was sind magnetische Pole?",
    "자기 극이란 무엇인가?",
    "B · Pole",
  ),
  q(
    "card-ppf-b2",
    "Welche Farbe hat oft der Nordpol, welche der Südpol? (Merkregel)",
    "북극·남극 색 암기법은?",
    "B · Pole",
  ),
  q(
    "card-ppf-b3",
    "Warum bleiben Büroklammern vor allem an den Enden eines Stabmagneten hängen?",
    "왜 클립이 막대자석 양끝에 주로 붙는가?",
    "B · Pole",
  ),
  q(
    "card-ppf-b4",
    "Was geschieht, wenn man zwei gleiche Pole zusammenbringt?",
    "같은 극을 가까이하면?",
    "B · Pole",
  ),
  q(
    "card-ppf-b5",
    "Was geschieht, wenn man verschiedene Pole zusammenbringt?",
    "다른 극을 가까이하면?",
    "B · Pole",
  ),
  q(
    "card-ppf-b6",
    "Wie hängt die Kraftwirkung vom Abstand der Pole ab?",
    "극 사이 거리와 힘의 관계는?",
    "B · Pole",
  ),
  q(
    "card-ppf-b7",
    "Formuliere die Beobachtungsregel für Magnetpole in einem Satz.",
    "자극에 대한 관찰 규칙을 한 문장으로.",
    "B · Pole",
  ),

  // ─── C. Stoffe ───
  q(
    "card-ppf-c1",
    "Was sind magnetisierbare Stoffe? Nenne Beispiele.",
    "자화 가능 물질이란? 예시는?",
    "C · Stoffe",
  ),
  q(
    "card-ppf-c2",
    "Was ist ein Dauermagnet?",
    "영구자석이란?",
    "C · Stoffe",
  ),
  q(
    "card-ppf-c3",
    "Wird ein magnetisierbarer, aber nicht magnetischer Gegenstand von einem Magneten angezogen oder abgestoßen?",
    "자화 가능하지만 자석이 아닌 물체는 끌리는가, 밀리는가?",
    "C · Stoffe",
  ),
  q(
    "card-ppf-c4",
    "Wirkt die magnetische Kraft nur bei Berührung?",
    "자기력은 접촉할 때만 작용하는가?",
    "C · Stoffe",
  ),
  q(
    "card-ppf-c5",
    "Welche Formen von Magneten kennst du?",
    "자석 형태에는 어떤 것이 있는가?",
    "C · Stoffe",
  ),
  q(
    "card-ppf-c6",
    "Teile Büroklammern, Papier und Magneten in Kategorien ein.",
    "클립, 종이, 자석을 분류하면?",
    "C · Stoffe",
  ),

  // ─── D. Elementarmagnete ───
  q(
    "card-ppf-d1",
    "Was besagt das Modell der Elementarmagnete?",
    "소자석 모델은 무엇을 말하는가?",
    "D · Elementarmagnete",
  ),
  q(
    "card-ppf-d2",
    "Wann ist ein Körper kein Magnet / wann wirkt er als Magnet? (Elementarmagnete)",
    "소자석이 무질서/정렬일 때 차이는?",
    "D · Elementarmagnete",
  ),
  q(
    "card-ppf-d3",
    "Was passiert, wenn man einen Magneten teilt?",
    "자석을 자르면?",
    "D · Elementarmagnete",
  ),
  q(
    "card-ppf-d4",
    "Was ist magnetische Influenz?",
    "자기 유도란?",
    "D · Elementarmagnete",
  ),
  q(
    "card-ppf-d5",
    "Welche Probe aus dem Experiment zeigt magnetische Influenz?",
    "실험에서 자기 유도가 나타나는 시료는?",
    "D · Elementarmagnete",
  ),
  q(
    "card-ppf-d6",
    "Beschreibe die Elementarmagnete in einer Büroklammer ohne / mit Magnetfeld.",
    "자기장 없을 때/있을 때 클립의 소자석은?",
    "D · Elementarmagnete",
  ),
  q(
    "card-ppf-d7",
    "Was bedeutet magnetisch weich / magnetisch hart?",
    "연자성 / 경자성이란?",
    "D · Elementarmagnete",
  ),
  q(
    "card-ppf-d8",
    "Nenne zwei Möglichkeiten, einem Magneten die magnetischen Eigenschaften zu nehmen.",
    "자석을 탈자화하는 방법 두 가지.",
    "D · Elementarmagnete",
  ),

  // ─── E. Feldlinien ───
  q(
    "card-ppf-e1",
    "Was ist ein magnetisches Feld?",
    "자기장이란?",
    "E · Feldlinien",
  ),
  q(
    "card-ppf-e2",
    "Wird das Magnetfeld durch Vakuum oder Luft verändert?",
    "진공·공기가 자기장을 바꾸는가?",
    "E · Feldlinien",
  ),
  q(
    "card-ppf-e3",
    "Was sind magnetische Feldlinien?",
    "자기력선이란?",
    "E · Feldlinien",
  ),
  q(
    "card-ppf-e4",
    "In welcher Richtung verlaufen magnetische Feldlinien immer?",
    "자기력선은 항상 어느 방향인가?",
    "E · Feldlinien",
  ),
  q(
    "card-ppf-e5",
    "Warum kreuzen sich Feldlinien nie?",
    "왜 자기력선은 교차하지 않는가?",
    "E · Feldlinien",
  ),
  q(
    "card-ppf-e6",
    "Woran erkennt man, dass ein Magnetfeld besonders stark ist?",
    "자기장이 특히 세다는 것을 어떻게 아는가?",
    "E · Feldlinien",
  ),
  q(
    "card-ppf-e7",
    "Beschreibe kurz die Feldlinien bei Stab-, Hufeisen- und Scheibenmagnet.",
    "막대·말굽·원판 자석의 자기력선은?",
    "E · Feldlinien",
  ),
  q(
    "card-ppf-e8",
    "Was ist der Unterschied zwischen magnetischen und elektrischen Feldlinien? (kurze Schülerantwort)",
    "자기력선과 전기력선의 차이는? (짧게)",
    "E · Feldlinien",
  ),

  // ─── F. Erde ───
  q(
    "card-ppf-f1",
    "Woran erkennt man, dass die Erde ein Magnetfeld hat?",
    "지구에 자기장이 있음을 어떻게 아는가?",
    "F · Erdmagnetfeld",
  ),
  q(
    "card-ppf-f2",
    "Wo liegt der magnetische Südpol der Erde?",
    "지구의 자기 남극은 어디에 있는가?",
    "F · Erdmagnetfeld",
  ),
  q(
    "card-ppf-f3",
    "Was ist die Missweisung (Deklination)?",
    "편각이란?",
    "F · Erdmagnetfeld",
  ),
  q(
    "card-ppf-f4",
    "Was ist die Inklination?",
    "복각이란?",
    "F · Erdmagnetfeld",
  ),
  q(
    "card-ppf-f5",
    "Wie entsteht das Erdmagnetfeld? Warum reicht das Elementarmagnet-Modell nicht?",
    "지구자기장은 어떻게 생기며, 왜 소자석 모델로 부족한가?",
    "F · Erdmagnetfeld",
  ),
  q(
    "card-ppf-f6",
    "Woran kann man belegen, dass sich das Erdmagnetfeld regelmäßig umpolt?",
    "지구자기장이 규칙적으로 극전환한다는 증거는?",
    "F · Erdmagnetfeld",
  ),
  q(
    "card-ppf-f7",
    "Nenne eine wichtige Tatsache zu Polwechseln.",
    "극전환에 대한 중요 사실 하나.",
    "F · Erdmagnetfeld",
  ),

  // ─── G. Spule ───
  q(
    "card-ppf-g1",
    "Wann entsteht um einen Leiter ein Magnetfeld?",
    "도체 주위에 자기장이 언제 생기는가?",
    "G · Spule",
  ),
  q(
    "card-ppf-g2",
    "Wie bestimmt man die Richtung des Magnetfeldes um einen stromdurchflossenen Leiter?",
    "전류가 흐르는 도체 주위 자기장 방향은 어떻게 정하는가?",
    "G · Spule",
  ),
  q(
    "card-ppf-g3",
    "Welches Material verstärkt das Magnetfeld einer Spule im Inneren?",
    "코일 안쪽에 넣어 자기장을 세게 하는 재료는?",
    "G · Spule",
  ),
  q(
    "card-ppf-g4",
    "Nenne drei Möglichkeiten, das Magnetfeld einer stromdurchflossenen Spule zu verstärken.",
    "전류가 흐르는 코일 자기장을 세게 하는 방법 3가지.",
    "G · Spule",
  ),
  q(
    "card-ppf-g5",
    "Welche Gemeinsamkeiten haben eine stromdurchflossene Spule und ein Stabmagnet?",
    "전류가 흐르는 코일과 막대자석의 공통점은?",
    "G · Spule",
  ),
  q(
    "card-ppf-g6",
    "Welche Unterschiede gibt es zwischen Spule und Stabmagnet?",
    "코일과 막대자석의 차이점은?",
    "G · Spule",
  ),
  q(
    "card-ppf-g7",
    "Was ist ein geschlossener Eisenkern und warum verstärkt er das Feld stärker?",
    "폐쇄 철심이란, 왜 장을 더 세게 하는가?",
    "G · Spule",
  ),

  // ─── H. Elektromagnet ───
  q(
    "card-ppf-h1",
    "Was ist ein Elektromagnet?",
    "전자석이란?",
    "H · Elektromagnet",
  ),
  q(
    "card-ppf-h2",
    "Welche Art von Magnet wird bei Lasthebemagneten auf Schrottplätzen genutzt? Warum?",
    "고철장 하중 인양 자석에는 어떤 자석? 왜?",
    "H · Elektromagnet",
  ),
  q(
    "card-ppf-h3",
    "Erkläre knapp die Funktionsweise eines Lasthebemagneten.",
    "하중 인양 자석의 작동을 짧게 설명하시오.",
    "H · Elektromagnet",
  ),
];

export const physikProbeFragenSections = [
  {
    id: "section-ppf-a",
    title: "A · Elektrischer Strom",
    cardIds: [
      "card-ppf-a1",
      "card-ppf-a2",
      "card-ppf-a3",
      "card-ppf-a4",
      "card-ppf-a5",
      "card-ppf-a6",
      "card-ppf-a7",
      "card-ppf-a8",
    ],
  },
  {
    id: "section-ppf-b",
    title: "B · Magnetpole",
    cardIds: [
      "card-ppf-b1",
      "card-ppf-b2",
      "card-ppf-b3",
      "card-ppf-b4",
      "card-ppf-b5",
      "card-ppf-b6",
      "card-ppf-b7",
    ],
  },
  {
    id: "section-ppf-c",
    title: "C · Magnetisierbare Stoffe",
    cardIds: [
      "card-ppf-c1",
      "card-ppf-c2",
      "card-ppf-c3",
      "card-ppf-c4",
      "card-ppf-c5",
      "card-ppf-c6",
    ],
  },
  {
    id: "section-ppf-d",
    title: "D · Elementarmagnete & Influenz",
    cardIds: [
      "card-ppf-d1",
      "card-ppf-d2",
      "card-ppf-d3",
      "card-ppf-d4",
      "card-ppf-d5",
      "card-ppf-d6",
      "card-ppf-d7",
      "card-ppf-d8",
    ],
  },
  {
    id: "section-ppf-e",
    title: "E · Magnetfeld & Feldlinien",
    cardIds: [
      "card-ppf-e1",
      "card-ppf-e2",
      "card-ppf-e3",
      "card-ppf-e4",
      "card-ppf-e5",
      "card-ppf-e6",
      "card-ppf-e7",
      "card-ppf-e8",
    ],
  },
  {
    id: "section-ppf-f",
    title: "F · Erdmagnetfeld",
    cardIds: [
      "card-ppf-f1",
      "card-ppf-f2",
      "card-ppf-f3",
      "card-ppf-f4",
      "card-ppf-f5",
      "card-ppf-f6",
      "card-ppf-f7",
    ],
  },
  {
    id: "section-ppf-g",
    title: "G · Spule",
    cardIds: [
      "card-ppf-g1",
      "card-ppf-g2",
      "card-ppf-g3",
      "card-ppf-g4",
      "card-ppf-g5",
      "card-ppf-g6",
      "card-ppf-g7",
    ],
  },
  {
    id: "section-ppf-h",
    title: "H · Elektromagnet",
    cardIds: ["card-ppf-h1", "card-ppf-h2", "card-ppf-h3"],
  },
];

export const PHYSIK_PROBE_FRAGEN_CARD_IDS = physikProbeFragenSections.flatMap(
  (s) => s.cardIds,
);

export const orderedPhysikProbeFragenCards = PHYSIK_PROBE_FRAGEN_CARD_IDS.map(
  (id) => physikProbeFragenCards.find((c) => c.id === id),
).filter(Boolean);

export const getPhysikProbeFragenCardById = (cardId) =>
  physikProbeFragenCards.find((c) => c.id === cardId) || null;

/**
 * @param {object} card
 * @param {'de'|'deko'} lang — de = 독일어만, deko = 독+한
 */
export function enrichPhysikProbeFragenCardForLang(card, lang) {
  if (!card) return null;
  if (lang === "deko" && card.termKo) {
    return {
      ...card,
      term: `${card.termDe}\n\n(${card.termKo})`,
    };
  }
  return {
    ...card,
    term: card.termDe || card.term,
  };
}
