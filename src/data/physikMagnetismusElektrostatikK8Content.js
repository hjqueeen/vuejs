/** Physik · Magnetismus / Elektrostatik — Karteikarten (Amin · Klasse 8 · LEK 1)
 *  앞면: Begriff / Frage (DE) · 뒷면: Erklärung (DE + KO)
 *  원본: amin-physik/LEK_Physik_8_1_*.md
 */

export const PHYSIK_MAG_ELEK_K8_BOOK_ID = "book-physik-magnetismus-elektrostatik-k8";

/**
 * @param {string} id
 * @param {string} term
 * @param {string} explanationDe
 * @param {string} explanationKo
 * @param {string} [category]
 */
const card = (id, term, explanationDe, explanationKo, category) => ({
  id,
  term,
  explanationDe,
  explanationKo,
  ...(category ? { frontCategory: category } : {}),
});

export const physikMagElekK8Cards = [
  // ─── 1. Alltag & Bauformen ───
  card(
    "card-ame-alltag",
    "Alltagsphänomene des Magnetismus (Beispiele)",
    "• Kühlschrankmagnet hält Zettel fest\n• Kompassnadel zeigt nach Norden\n• Magnetverschluss an Tasche / Schrank\n• Lautsprecher / Kopfhörer (Magnet + Spule)\n• Magnete an Werkzeugleisten",
    "• 냉장고 자석으로 메모 고정\n• 나침반이 북쪽을 가리킴\n• 가방·사물함 자석 잠금\n• 스피커·이어폰 (자석+코일)\n• 공구 걸이 자석",
    "Alltag & Bauformen",
  ),
  card(
    "card-ame-bauformen",
    "Bauformen von Magneten (gelernt)",
    "• Stabmagnet — länglich, N und S an den Enden\n• Hufeisenmagnet — U-förmig, Pole nah → starkes Feld dazwischen\n• Ringmagnet — ringförmig, Pole oft auf den Flachseiten",
    "• 막대자석 — 길쭉, 양끝 N·S\n• 말굽자석 — U자, 극이 가까워 사이 자기장이 강함\n• 고리자석 — 링, 극이 평면 쪽에 있는 경우 많음",
    "Alltag & Bauformen",
  ),

  // ─── 2. Magnetische Stoffe ───
  card(
    "card-ame-stoffe-angezogen",
    "Welche Stoffe werden von Magneten angezogen?",
    "Ferromagnetische Stoffe:\n• Eisen (Fe)\n• Nickel (Ni)\n• Cobalt (Co)\n• Legierungen daraus (z. B. Stahl mit hohem Eisenanteil)",
    "강자성체:\n• 철 (Fe)\n• 니켈 (Ni)\n• 코발트 (Co)\n• 이들을 포함한 합금 (예: 철이 많은 강철)",
    "Magnetische Stoffe",
  ),
  card(
    "card-ame-stoffe-nicht",
    "Welche Stoffe werden NICHT von Magneten angezogen? (Beispiele)",
    "Holz, Kunststoff, Glas, Aluminium, Kupfer, Gold, Silber (u. a.)",
    "나무, 플라스틱, 유리, 알루미늄, 구리, 금, 은 등",
    "Magnetische Stoffe",
  ),
  card(
    "card-ame-magnetisierbar",
    "Was kann magnetisiert werden? (Beispiele)",
    "Eisenstäbe, Nägel, Büroklammern, Schraubendreher aus Stahl.\nWeicheisen: leicht magnetisieren und wieder entmagnetisieren.\nHartmagnetische Stoffe: behalten Magnetismus länger → Dauermagnete.",
    "철막대, 못, 클립, 강철 드라이버.\n연철: 쉽게 자화·소자.\n경자성 물질: 자기를 오래 유지 → 영구자석.",
    "Magnetische Stoffe",
  ),

  // ─── 3. Pole & Polregel ───
  card(
    "card-ame-pole",
    "Wie heißen die Pole eines Magneten?",
    "Jeder Magnet hat einen Nordpol (N) und einen Südpol (S).\nEin freier Magnet richtet sich aus: Der Nordpol zeigt ungefähr nach geografisch Norden.",
    "모든 자석은 N극(북극)과 S극(남극)을 가진다.\n자유롭게 두면 N극이 대략 지리적인 북쪽을 가리킨다.",
    "Pole",
  ),
  card(
    "card-ame-polregel",
    "Polregel — Merksatz",
    "Gleichnamige Pole stoßen sich ab (N–N, S–S).\nUngleichnamige Pole ziehen sich an (N–S).",
    "같은 극은 밀어낸다 (N–N, S–S).\n다른 극은 끌어당긴다 (N–S).",
    "Pole",
  ),

  // ─── 4. Elementarmagnete ───
  card(
    "card-ame-elementar-modell",
    "Modell der Elementarmagnete",
    "Ein Eisenstück besteht aus vielen winzigen Elementarmagneten.\n• Unmagnetisiert: ungeordnet → Wirkungen heben sich auf\n• Magnetisiert: (meist) in eine Richtung ausgerichtet → äußerer Magnetismus",
    "철은 수많은 작은 기본자석으로 이루어진다.\n• 비자성: 무질서 → 효과가 상쇄\n• 자성: 한 방향으로 정렬 → 겉으로 자성이 나타남",
    "Elementarmagnete",
  ),
  card(
    "card-ame-magnetisierung",
    "Wie magnetisiert man einen Eisenstab?",
    "1. Mit einem Dauermagneten immer in dieselbe Richtung streichen\n2. Oder in ein starkes Magnetfeld bringen\n→ Elementarmagnete richten sich aus → Stab wird zum Magneten",
    "1. 영구자석으로 한 방향으로 여러 번 문지르기\n2. 또는 강한 자기장 속에 두기\n→ 기본자석이 정렬됨 → 막대가 자석이 됨",
    "Elementarmagnete",
  ),
  card(
    "card-ame-entmagnetisierung",
    "Wie entmagnetisiert man einen Eisenstab?",
    "• Starkes Erhitzen\n• Starke Stöße / Schläge\n• Wechselndes Magnetfeld (z. B. Wechselstromspule)\n→ Elementarmagnete werden wieder ungeordnet",
    "• 강하게 가열\n• 세게 두드리기\n• 교번 자기장 (교류 코일 등)\n→ 기본자석이 다시 불규칙해짐",
    "Elementarmagnete",
  ),

  // ─── 5. Teilen ───
  card(
    "card-ame-teilen",
    "Was passiert beim Teilen eines Magneten?",
    "Es entstehen zwei kleinere Magnete. Jedes Teilstück hat wieder Nord- und Südpol.\nEs gibt keinen magnetischen Monopol („nur-Nordpol“-Stück).\nGrund: Jeder Elementarmagnet hat selbst N und S.",
    "더 작은 자석 두 개가 생긴다. 각 조각마다 다시 N과 S가 있다.\n자기 홀극(N만 있는 조각)은 없다.\n이유: 기본자석 하나하나도 N·S를 가진다.",
    "Teilen",
  ),

  // ─── 6. Magnetische Influenz ───
  card(
    "card-ame-mag-influenz",
    "Was ist magnetische Influenz?",
    "Ein Magnet beeinflusst ferromagnetische Stoffe ohne Berührung.\nIm Stoff richten sich Elementarmagnete im äußeren Feld aus → der Stoff wird vorübergehend magnetisiert.\nBeispiel: Magnet nahe Büroklammer → Klammer zieht weitere Klammern an (Kette).",
    "자석이 접촉 없이 강자성체에 영향을 준다.\n외부 자기장 때문에 기본자석이 정렬 → 일시적으로 자화.\n예: 자석을 클립에 가까이하면 클립이 다른 클립을 끌어당김 (사슬).",
    "Magnetische Influenz",
  ),

  // ─── 7. Magnetisches Feld ───
  card(
    "card-ame-mag-feld",
    "Was ist ein magnetisches Feld?",
    "Der Raum um einen Magneten, in dem magnetische Kräfte wirken.\nSichtbar machen: Eisenfeilspäne oder Kompassnadeln.",
    "자석 주위에서 자기력이 작용하는 공간.\n확인: 쇳가루 또는 나침반.",
    "Magnetisches Feld",
  ),
  card(
    "card-ame-feldlinien-regeln",
    "Feldlinienregeln (Magnet) — Merksätze",
    "1. Außerhalb: vom Nordpol zum Südpol\n2. Feldlinien sind geschlossen (innen S → N)\n3. Feldlinien kreuzen sich nie\n4. Dichte ≈ Feldstärke (dicht = stark)\n5. Richtung = Richtung der Kraft auf den Nordpol einer Kompassnadel",
    "1. 바깥: N극 → S극\n2. 닫힌 곡선 (안쪽 S → N)\n3. 서로 교차하지 않음\n4. 빽빽할수록 자기장이 강함\n5. 방향 = 나침반 N극이 가리키는 방향",
    "Magnetisches Feld",
  ),

  // ─── 8. Reibungselektrizität ───
  card(
    "card-ame-reib-alltag",
    "Alltagsphänomene der Reibungselektrizität",
    "• Pullover knistert / Haare stehen zu Berge\n• Luftballon reiben → bleibt an der Wand\n• Kunststofflineal → zieht Papierschnipsel an\n• Elektroschock an Autotür / Türklinke (trockene Luft)\n• Staub an Bildschirmen",
    "• 스웨터 벗을 때 찌릿·머리카락이 일어남\n• 풍선 문질러 벽에 붙이기\n• 플라스틱 자로 종이 조각 끌어당기기\n• 차 문·문고리 정전기 (건조한 날)\n• 모니터에 먼지",
    "Reibungselektrizität",
  ),
  card(
    "card-ame-ladung-regel",
    "Kräfte zwischen Ladungen — Merksatz",
    "Gleichnamige Ladungen stoßen sich ab (+/+ oder −/−).\nUngleichnamige Ladungen ziehen sich an (+/−).",
    "같은 전하는 밀어낸다 (+/+ 또는 −/−).\n다른 전하는 끌어당긴다 (+/−).",
    "Reibungselektrizität",
  ),

  // ─── 9. Rutherford ───
  card(
    "card-ame-rutherford",
    "Aufbau des Atoms nach Rutherford",
    "• Atomkern in der Mitte: positiv, Protonen (+), klein und schwer\n• Elektronen (−) um den Kern\n• Meist elektrisch neutral: Anzahl Protonen = Anzahl Elektronen\n• Zum größten Teil leerer Raum",
    "• 가운데 원자핵: 양전하, 양성자(+), 작고 무거움\n• 전자(−)가 핵 주위\n• 보통 중성: 양성자 수 = 전자 수\n• 대부분 빈 공간",
    "Rutherford",
  ),
  card(
    "card-ame-teilchen",
    "Proton, Neutron, Elektron — Ladung und Ort",
    "• Proton — positiv (+) — im Kern\n• Neutron — neutral (0) — im Kern\n• Elektron — negativ (−) — um den Kern",
    "• 양성자 — 양(+) — 핵\n• 중성자 — 중성(0) — 핵\n• 전자 — 음(−) — 핵 주위",
    "Rutherford",
  ),

  // ─── 10. Ladungstrennung ───
  card(
    "card-ame-ladungstrennung",
    "Ladungstrennung beim Reiben (Teilchenebene)",
    "Beim Reiben gehen Elektronen von einem Stoff auf den anderen über.\n• Elektronen abgeben → positiv (Elektronenmangel)\n• Elektronen aufnehmen → negativ (Elektronenüberschuss)\nLadung entsteht durch Verschiebung von Elektronen — nicht durch Erzeugen von Ladung.",
    "문지르면 전자가 한쪽에서 다른 쪽으로 이동한다.\n• 전자를 잃음 → 양전하\n• 전자를 받음 → 음전하\n전하는 새로 만들어지는 것이 아니라 전자가 이동해서 생긴다.",
    "Ladungstrennung",
  ),

  // ─── 11. Elektrische Influenz ───
  card(
    "card-ame-el-influenz",
    "Was ist elektrische Influenz?",
    "Ein geladener Körper verschiebt Ladungen in einem (leitenden) Gegenstand ohne Berührung.\nElektronen werden angezogen oder abgestoßen → Ladungstrennung im Gegenstand.\nBeispiel: Negativer Stab nahe Metallkugel → nahe Seite positiv, entfernte Seite negativ → Anziehung möglich, obwohl die Kugel insgesamt ungeladen war.",
    "대전된 물체가 접촉 없이 (도체) 안의 전하를 재배치한다.\n전자가 끌리거나 밀려나며 전하가 나뉜다.\n예: 음으로 대전된 막대를 중성 금속 구에 가까이하면 → 가까운 쪽 양, 먼 쪽 음 → 전체는 중성이어도 인력이 생길 수 있음.",
    "Elektrische Influenz",
  ),

  // ─── 12. Elektrisches Feld (Zusatz) ───
  card(
    "card-ame-el-feld",
    "Was ist ein elektrisches Feld? (Zusatzwissen)",
    "Raum um eine Ladung, in dem elektrische Kräfte auf andere Ladungen wirken.\n(Hinweis: ab Mo 23.11. — Zusatzwissen)",
    "전하 주위에서 다른 전하에 전기력이 작용하는 공간.\n(참고: 월 23.11.부터 — 추가 지식)",
    "Elektrisches Feld · Zusatz",
  ),
  card(
    "card-ame-el-feldlinien",
    "Elektrische Feldlinien — Regeln (Zusatzwissen)",
    "1. Beginnen an positiven Ladungen, enden an negativen\n2. Kreuzen sich nie\n3. Dichte ≈ Feldstärke\n4. Richtung = Kraft auf eine positive Probeladung\n• Positive Punktladung: Linien nach außen\n• Negative Punktladung: Linien nach innen\n• Dipol: vom + zum −",
    "1. 양전하에서 시작, 음전하에서 끝\n2. 서로 교차하지 않음\n3. 빽빽할수록 전기장이 강함\n4. 방향 = 양(+) 시험전하가 받는 힘의 방향\n• 양 점전하: 바깥으로\n• 음 점전하: 안쪽으로\n• 쌍극자: + → −",
    "Elektrisches Feld · Zusatz",
  ),

  // ─── Merksätze kompakt ───
  card(
    "card-ame-merk-gesamt",
    "Kurzübersicht — Merksätze LEK 1",
    "• Pole / Ladungen: gleich → abstoßen, ungleich → anziehen\n• Elementarmagnete: Ordnung = magnetisch, Unordnung = unmagnetisch\n• Magnet teilen: immer wieder N und S\n• Influenz: Wirkung ohne Berührung\n• Magnetfeldlinien außen: N → S\n• Elektrische Feldlinien: + → −\n• Reiben: Elektronenübergang → Ladungstrennung\n• Rutherford: Kern (+), Elektronen (−), viel leerer Raum",
    "• 자극/전하: 같으면 밀어냄, 다르면 끌어당김\n• 기본자석: 정렬=자성, 무질서=비자성\n• 자석 절단: 항상 다시 N과 S\n• 유도: 접촉 없이 작용\n• 자기력선 바깥: N → S\n• 전기력선: + → −\n• 마찰: 전자 이동 → 전하 분리\n• 러더퍼드: 핵(+), 전자(−), 대부분 빈 공간",
    "Merksätze",
  ),
];

export const physikMagElekK8Sections = [
  {
    id: "section-ame-alltag",
    title: "1. Alltag & Bauformen",
    cardIds: ["card-ame-alltag", "card-ame-bauformen"],
  },
  {
    id: "section-ame-stoffe",
    title: "2. Magnetische Stoffe",
    cardIds: [
      "card-ame-stoffe-angezogen",
      "card-ame-stoffe-nicht",
      "card-ame-magnetisierbar",
    ],
  },
  {
    id: "section-ame-pole",
    title: "3. Pole & Polregel",
    cardIds: ["card-ame-pole", "card-ame-polregel"],
  },
  {
    id: "section-ame-elementar",
    title: "4. Elementarmagnete",
    cardIds: [
      "card-ame-elementar-modell",
      "card-ame-magnetisierung",
      "card-ame-entmagnetisierung",
    ],
  },
  {
    id: "section-ame-teilen",
    title: "5. Teilen eines Magneten",
    cardIds: ["card-ame-teilen"],
  },
  {
    id: "section-ame-mag-influenz",
    title: "6. Magnetische Influenz",
    cardIds: ["card-ame-mag-influenz"],
  },
  {
    id: "section-ame-mag-feld",
    title: "7. Magnetisches Feld",
    cardIds: ["card-ame-mag-feld", "card-ame-feldlinien-regeln"],
  },
  {
    id: "section-ame-reib",
    title: "8. Reibungselektrizität",
    cardIds: ["card-ame-reib-alltag", "card-ame-ladung-regel"],
  },
  {
    id: "section-ame-rutherford",
    title: "9. Rutherford-Atommodell",
    cardIds: ["card-ame-rutherford", "card-ame-teilchen"],
  },
  {
    id: "section-ame-ladung",
    title: "10. Ladungstrennung",
    cardIds: ["card-ame-ladungstrennung"],
  },
  {
    id: "section-ame-el-influenz",
    title: "11. Elektrische Influenz",
    cardIds: ["card-ame-el-influenz"],
  },
  {
    id: "section-ame-el-feld",
    title: "12. Elektrisches Feld (Zusatz)",
    cardIds: ["card-ame-el-feld", "card-ame-el-feldlinien"],
  },
  {
    id: "section-ame-merk",
    title: "13. Merksätze",
    cardIds: ["card-ame-merk-gesamt"],
  },
];

export const PHYSIK_MAG_ELEK_K8_CARD_IDS = physikMagElekK8Sections.flatMap(
  (s) => s.cardIds,
);

export const orderedPhysikMagElekK8Cards = PHYSIK_MAG_ELEK_K8_CARD_IDS.map(
  (id) => physikMagElekK8Cards.find((c) => c.id === id),
).filter(Boolean);

export const getPhysikMagElekK8CardById = (cardId) =>
  physikMagElekK8Cards.find((c) => c.id === cardId) || null;
