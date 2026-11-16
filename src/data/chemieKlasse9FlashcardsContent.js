/** Chemie · Klasse 9 — Karteikarten (Hangyeol)
 *  앞면: Begriff / Frage (DE) · 뒷면: Erklärung (DE + KO)
 *  원본: hangyeol-chemie-klasse9.md
 */

import { CHEMIE_K9_NOTES_BOOK_ID } from "./chemieKlasse9NotesContent.js";

export const CHEMIE_K9_FLASHCARDS_BOOK_ID = "book-chemie-klasse9-flashcards";

export const CHEMIE_K9_FLASHCARDS_RELATED_NOTES_ID = CHEMIE_K9_NOTES_BOOK_ID;

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

export const chemieKlasse9Flashcards = [
  // ─── 1. Basen Definition ───
  card(
    "card-ch-base-definition",
    "Was ist eine Base?",
    "Basen sind Stoffe, die in wässriger Lösung in negativ geladene Hydroxid-Ionen (OH⁻) und positiv geladene Ionen (meist Metall-Ionen) zerfallen. Dieser Vorgang heißt Dissoziation der Basen. Die Lösungen nennt man alkalische Lösungen oder Laugen.",
    "염기는 수용액에서 OH⁻와 양이온(대개 금속 이온)으로 분해되는 물질이다. 이 과정을 해리(Dissoziation)라고 하며, 용액을 알칼리성 용액 또는 Lauge라고 한다.",
    "Basen",
  ),
  card(
    "card-ch-base-allgemein",
    "Allgemeine Formel der Basen-Dissoziation",
    "Base + Wasser → Baserest-Ion + Hydroxid-Ion + Wasser\n\nBeispiel: NaOH + H₂O → Na⁺ + OH⁻ + H₂O\nKurz: NaOH —H₂O→ Na⁺ + OH⁻",
    "염기 + 물 → 염기 잔기 이온 + 수산화 이온 + 물\n\n예: NaOH + H₂O → Na⁺ + OH⁻ + H₂O",
    "Basen",
  ),
  card(
    "card-ch-base-regeln",
    "Regeln: Ladung und Anzahl der OH⁻",
    "• Positive Ladung des Baserest-Ions = Hauptgruppennummer\n• Anzahl der OH⁻ = positive Ladung\n• Schreibweise: (OH)ₓ richtig, OHₓ falsch\n• Nebengruppe: Ladung mit römischen Ziffern (z. B. Eisen(III))",
    "• 염기 잔기 양전하 = 주기(Hauptgruppe) 번호\n• OH⁻ 개수 = 양전하\n• (OH)ₓ가 맞음, OHₓ는 틀림\n• 전이금속은 로마 숫자로 전하 표시",
    "Basen",
  ),
  card(
    "card-ch-diss-ca",
    "Dissoziation: Ca(OH)₂",
    "Ca(OH)₂ → Ca²⁺ + 2 OH⁻",
    "Ca(OH)₂ → Ca²⁺ + 2 OH⁻\n(칼슘은 2족 → 전하 2+, OH⁻ 2개)",
    "Basen",
  ),
  card(
    "card-ch-diss-fe3",
    "Dissoziation: Fe(OH)₃",
    "Fe(OH)₃ → Fe³⁺ + 3 OH⁻",
    "Fe(OH)₃ → Fe³⁺ + 3 OH⁻\n(철(III) → 전하 3+, OH⁻ 3개)",
    "Basen",
  ),
  card(
    "card-ch-diss-al",
    "Übung: Aluminiumhydroxid dissoziieren",
    "Al(OH)₃ → Al³⁺ + 3 OH⁻",
    "Al(OH)₃ → Al³⁺ + 3 OH⁻",
    "Basen",
  ),
  card(
    "card-ch-diss-ni",
    "Übung: Nickel(II)hydroxid dissoziieren",
    "Ni(OH)₂ → Ni²⁺ + 2 OH⁻",
    "Ni(OH)₂ → Ni²⁺ + 2 OH⁻",
    "Basen",
  ),

  // ─── 2. Eigenschaften ───
  card(
    "card-ch-eigenschaften",
    "Eigenschaften alkalischer Lösungen",
    "• ätzend (besonders organische Stoffe: Haut, Haare, Pflanzenfasern)\n• leitet elektrischen Strom (bewegliche Ionen)\n• färbt pH-Indikatoren charakteristisch\n• in reiner Form oft hygroskopisch (wasseranziehend)",
    "• 부식성(유기물·피부·머리카락)\n• 전기 전도(이온)\n• 지시약 특유 발색\n• 종종 흡습성",
    "Eigenschaften",
  ),
  card(
    "card-ch-indikator-base-farbe",
    "Indikatorfarben in Base (Lackmus, Phenolphthalein, Bromthymolblau)",
    "• Lackmus / Universalindikator → blau\n• Phenolphthalein → rot / pink\n• Bromthymolblau → blau",
    "• 리트머스 / 만능지시약 → 파랑\n• 페놀프탈레인 → 빨강/분홍\n• 브로모티몰블루 → 파랑",
    "Eigenschaften",
  ),

  // ─── 3. Vertreter & Verwendung ───
  card(
    "card-ch-naoh",
    "Natriumhydroxid — Formel und Lauge",
    "Name: Natriumhydroxid (Ätznatrium)\nFormel: NaOH\nLauge: Natronlauge",
    "수산화나트륨(가성소다)\n화학식: NaOH\n수용액: Natronlauge",
    "Vertreter",
  ),
  card(
    "card-ch-koh",
    "Kaliumhydroxid — Formel und Lauge",
    "Name: Kaliumhydroxid (Ätzkali)\nFormel: KOH\nLauge: Kalilauge",
    "수산화칼륨(가성칼리)\n화학식: KOH\n수용액: Kalilauge",
    "Vertreter",
  ),
  card(
    "card-ch-caoh2",
    "Calciumhydroxid — Formel und Lauge",
    "Name: Calciumhydroxid (Löschkalk)\nFormel: Ca(OH)₂\nLauge: Kalkwasser",
    "수산화칼슘(소석회)\n화학식: Ca(OH)₂\n수용액: Kalkwasser(석회수)",
    "Vertreter",
  ),
  card(
    "card-ch-nh3",
    "Ammoniak — Formel und Lauge",
    "Name: Ammoniak\nFormel: NH₃\nLauge: Salmiakgeist",
    "암모니아\n화학식: NH₃\n수용액: Salmiakgeist",
    "Vertreter",
  ),
  card(
    "card-ch-verwendung",
    "Verwendung von Basen / Laugen",
    "• Rohrreiniger → oft NaOH (Natronlauge)\n• Seifenindustrie → NaOH / KOH\n• Betonindustrie → Ca(OH)₂\n• Laugengebäck → oft NaOH\n• Neutralisation von Säuren → je nach Situation NaOH, KOH, Ca(OH)₂ …",
    "• 배수관 세정제 → 주로 NaOH\n• 비누 → NaOH / KOH\n• 콘크리트 → Ca(OH)₂\n• 알칼리 빵 → 주로 NaOH\n• 산 중화 → 상황에 따라 여러 염기",
    "Vertreter",
  ),

  // ─── 4. Herstellung Metall + Wasser ───
  card(
    "card-ch-herst1-allgemein",
    "Herstellung 1: Metall + Wasser (allgemein)",
    "Metall (1. HG / Alkalimetalle) + Wasser → Metallhydroxid + Wasserstoff (g)",
    "금속(1족/알칼리 금속) + 물 → 금속수산화물 + 수소(기체)",
    "Herstellung 1",
  ),
  card(
    "card-ch-herst1-na",
    "Natrium + Wasser — ausgeglichene Gleichung",
    "Wortgleichung: Natrium + Wasser reagiert zu Natriumhydroxid + Wasserstoff\n\n2 Na + 2 H₂O → 2 NaOH + H₂",
    "단어식: 나트륨 + 물 → 수산화나트륨 + 수소\n\n2 Na + 2 H₂O → 2 NaOH + H₂",
    "Herstellung 1",
  ),
  card(
    "card-ch-herst1-ausgleichen",
    "Warum muss man Na + H₂O ausgleichen?",
    "H₂ ist ein Molekül (Gas, kein Edelgas).\nLinks: 2 H in H₂O\nRechts: 1 H in NaOH + 2 H in H₂ = 3 H → unausgeglichen.\nMit 2 H₂O entstehen 2 NaOH → links 2 Na nötig.",
    "H₂는 분자로 씀.\n왼쪽 H 2개, 오른쪽 H 3개 → 안 맞음.\n2 H₂O → 2 NaOH → 왼쪽도 2 Na.",
    "Herstellung 1",
  ),
  card(
    "card-ch-herst1-cs",
    "Übung: Produkte von Cäsium + Wasser?",
    "Cäsiumhydroxid (CsOH) und Wasserstoff (H₂)\n\nAusgeglichen: 2 Cs + 2 H₂O → 2 CsOH + H₂",
    "수산화세슘(CsOH)과 수소(H₂)\n\n2 Cs + 2 H₂O → 2 CsOH + H₂",
    "Herstellung 1",
  ),
  card(
    "card-ch-herst1-li",
    "Übung: Lithium + Wasser",
    "Wortgleichung: Lithium + Wasser reagiert zu Lithiumhydroxid + Wasserstoff\n\n2 Li + 2 H₂O → 2 LiOH + H₂",
    "리튬 + 물 → 수산화리튬 + 수소\n\n2 Li + 2 H₂O → 2 LiOH + H₂",
    "Herstellung 1",
  ),
  card(
    "card-ch-herst1-k",
    "Übung: Kalium + Wasser",
    "Wortgleichung: Kalium + Wasser reagiert zu Kaliumhydroxid + Wasserstoff\n\n2 K + 2 H₂O → 2 KOH + H₂",
    "칼륨 + 물 → 수산화칼륨 + 수소\n\n2 K + 2 H₂O → 2 KOH + H₂",
    "Herstellung 1",
  ),
  card(
    "card-ch-herst1-sicherheit",
    "Achtung: Alkalimetall + Wasser",
    "Reaktion verläuft spontan (keine Aktivierungsenergie) und stark exotherm.\nWasserstoff ist leicht entzündlich und kann sich selbst entzünden.\nDie Lauge kann aus dem Gefäß spritzen.",
    "자발적·강한 발열 반응.\n수소는 쉽게 연소·자연발화 가능.\n수용액이 튈 수 있음.",
    "Herstellung 1",
  ),

  // ─── 5. Herstellung Metalloxid + Wasser ───
  card(
    "card-ch-herst2-allgemein",
    "Herstellung 2: Metalloxid + Wasser (Schritte)",
    "1. Metall + Sauerstoff → Metalloxid\n2. Metalloxid + Wasser → Metallhydroxid",
    "1. 금속 + 산소 → 금속산화물\n2. 금속산화물 + 물 → 금속수산화물",
    "Herstellung 2",
  ),
  card(
    "card-ch-herst2-ca",
    "Beispiel Calcium: Oxid und Hydroxid",
    "2 Ca + O₂ → 2 CaO\nCaO + H₂O → Ca(OH)₂\n\nWertigkeit: O = −2, Ca = +2 → CaO",
    "2 Ca + O₂ → 2 CaO\nCaO + H₂O → Ca(OH)₂\n\n원자가: O −2, Ca +2 → CaO",
    "Herstellung 2",
  ),
  card(
    "card-ch-herst2-ag",
    "Beispiel Silber: Oxid und Hydroxid",
    "4 Ag + O₂ → 2 Ag₂O\nAg₂O + H₂O → 2 AgOH\n\nSilber +1, Sauerstoff −2 → Ag₂O",
    "4 Ag + O₂ → 2 Ag₂O\nAg₂O + H₂O → 2 AgOH\n\n은 +1, 산소 −2 → Ag₂O",
    "Herstellung 2",
  ),
  card(
    "card-ch-herst2-feo",
    "Übung: Eisen(II)oxid + Wasser",
    "Eisen(II)oxid + Wasser reagiert zu Eisen(II)hydroxid\n\nFeO + H₂O → Fe(OH)₂",
    "산화철(II) + 물 → 수산화철(II)\n\nFeO + H₂O → Fe(OH)₂",
    "Herstellung 2",
  ),
  card(
    "card-ch-herst2-mg",
    "Übung: Magnesium verbrennen, dann + Wasser",
    "2 Mg + O₂ → 2 MgO\nMgO + H₂O → Mg(OH)₂",
    "2 Mg + O₂ → 2 MgO\nMgO + H₂O → Mg(OH)₂",
    "Herstellung 2",
  ),
  card(
    "card-ch-herst2-al",
    "Übung: Aluminiumhydroxid aus Metalloxid (schwierig!)",
    "Aluminiumoxid + Wasser reagiert zu Aluminiumhydroxid\n\nAl₂O₃ + 3 H₂O → 2 Al(OH)₃",
    "산화알루미늄 + 물 → 수산화알루미늄\n\nAl₂O₃ + 3 H₂O → 2 Al(OH)₃",
    "Herstellung 2",
  ),

  // ─── 6. Indikatoren ───
  card(
    "card-ch-indikator-def",
    "Was ist ein Indikator?",
    "Ein Indikator ist ein Hilfsmittel, das chemische Zustände oder Reaktionen durch eine gut sichtbare Veränderung (meist Farbe) sichtbar macht.",
    "지시약은 화학적 상태·반응을 눈에 띄는 변화(대개 색)로 보이게 하는 보조 수단이다.",
    "Indikatoren",
  ),
  card(
    "card-ch-indikator-phenol",
    "Phenolphthalein — Farben",
    "sauer: farblos\nneutral: farblos\nbasisch: pink",
    "산성: 무색\n중성: 무색\n염기: 분홍",
    "Indikatoren",
  ),
  card(
    "card-ch-indikator-lackmus",
    "Lackmus — Farben",
    "sauer: rot\nneutral: violett\nbasisch: blau",
    "산성: 빨강\n중성: 보라\n염기: 파랑",
    "Indikatoren",
  ),
  card(
    "card-ch-indikator-universal",
    "Universalindikator — Farben",
    "sauer: rot → gelb\nneutral: grün\nbasisch: blau → violett",
    "산성: 빨강 → 노랑\n중성: 초록\n염기: 파랑 → 보라",
    "Indikatoren",
  ),
  card(
    "card-ch-indikator-rotkohl",
    "Rotkohlsaft — Farben",
    "sauer: rot-pink\nneutral: violett\nbasisch: blau / grün",
    "산성: 빨강-분홍\n중성: 보라\n염기: 파랑 / 초록",
    "Indikatoren",
  ),
  card(
    "card-ch-indikator-methyl-kresol",
    "Methylrot und Kresolrot — Farben",
    "Methylrot: sauer rot · neutral/basisch gelb\n\nKresolrot: sauer gelb · neutral gelb-orange · basisch rot-violett",
    "메틸레드: 산성 빨강 · 중성/염기 노랑\n\n크레졸레드: 산성 노랑 · 중성 노랑-주황 · 염기 빨강-보라",
    "Indikatoren",
  ),

  // ─── 7. Neutralisation ───
  card(
    "card-ch-neutral-def",
    "Was ist Neutralisation?",
    "Reaktion, bei der Säure und Base sich gegenseitig aufheben und den pH-Wert 7 erreichen.\n\nSäure + Base → Salz + Wasser\n(Säurerest-Anion + Baserest-Kation = Salz)",
    "산과 염기가 서로를 상쇄해 pH 7에 이르게 하는 반응.\n\n산 + 염기 → 염 + 물",
    "Neutralisation",
  ),
  card(
    "card-ch-neutral-a",
    "Neutralisation: HCl + KOH",
    "HCl + KOH → H₂O + KCl",
    "HCl + KOH → H₂O + KCl\n(염산 + 수산화칼륨 → 물 + 염화칼륨)",
    "Neutralisation",
  ),
  card(
    "card-ch-neutral-b",
    "Neutralisation: H₂S + NaOH",
    "H₂S + NaOH → H₂O + NaHS",
    "H₂S + NaOH → H₂O + NaHS",
    "Neutralisation",
  ),
  card(
    "card-ch-neutral-c",
    "Neutralisation: H₂CO₃ + Ca(OH)₂",
    "H₂CO₃ + Ca(OH)₂ → CaCO₃ + 2 H₂O",
    "H₂CO₃ + Ca(OH)₂ → CaCO₃ + 2 H₂O",
    "Neutralisation",
  ),
  card(
    "card-ch-neutral-d",
    "Neutralisation: H₃PO₄ + NaOH",
    "H₃PO₄ + 3 NaOH → Na₃PO₄ + 3 H₂O",
    "H₃PO₄ + 3 NaOH → Na₃PO₄ + 3 H₂O",
    "Neutralisation",
  ),
  card(
    "card-ch-neutral-e",
    "Neutralisation: HNO₃ + Ba(OH)₂",
    "2 HNO₃ + Ba(OH)₂ → Ba(NO₃)₂ + 2 H₂O",
    "2 HNO₃ + Ba(OH)₂ → Ba(NO₃)₂ + 2 H₂O",
    "Neutralisation",
  ),
  card(
    "card-ch-neutral-fe",
    "Eisen(II)hydroxid mit salpetriger Säure",
    "Fe(OH)₂ + 2 HNO₂ → Fe(NO₂)₂ + 2 H₂O",
    "수산화철(II) + 아질산 → Fe(NO₂)₂ + 물\n\nFe(OH)₂ + 2 HNO₂ → Fe(NO₂)₂ + 2 H₂O",
    "Neutralisation",
  ),

  // ─── 8. Merksätze ───
  card(
    "card-ch-merksaetze",
    "5 Merksätze Basen & Neutralisation",
    "1. Base → OH⁻ + positives Ion → Lauge\n2. Herstellung: Alkalimetall + Wasser oder Metalloxid + Wasser\n3. Indikator zeigt Säure/Base/Neutral durch Farbe\n4. Neutralisation: Säure + Base → Salz + Wasser (pH 7)\n5. Gleichungen immer ausgleichen (Atome zählen)",
    "1. 염기 → OH⁻ + 양이온 → Lauge\n2. 제조: 알칼리금속+물 또는 금속산화물+물\n3. 지시약으로 산/염기/중성 확인\n4. 중화: 산+염기 → 염+물 (pH 7)\n5. 반응식은 항상 균형 맞추기",
    "Merksätze",
  ),
];

export const chemieKlasse9FlashcardSections = [
  {
    id: "section-ch-basen",
    title: "1. Basen – Definition & Dissoziation",
    cardIds: [
      "card-ch-base-definition",
      "card-ch-base-allgemein",
      "card-ch-base-regeln",
      "card-ch-diss-ca",
      "card-ch-diss-fe3",
      "card-ch-diss-al",
      "card-ch-diss-ni",
    ],
  },
  {
    id: "section-ch-eigenschaften",
    title: "2. Eigenschaften",
    cardIds: ["card-ch-eigenschaften", "card-ch-indikator-base-farbe"],
  },
  {
    id: "section-ch-vertreter",
    title: "3. Vertreter & Verwendung",
    cardIds: [
      "card-ch-naoh",
      "card-ch-koh",
      "card-ch-caoh2",
      "card-ch-nh3",
      "card-ch-verwendung",
    ],
  },
  {
    id: "section-ch-herst1",
    title: "4. Herstellung: Metall + Wasser",
    cardIds: [
      "card-ch-herst1-allgemein",
      "card-ch-herst1-na",
      "card-ch-herst1-ausgleichen",
      "card-ch-herst1-cs",
      "card-ch-herst1-li",
      "card-ch-herst1-k",
      "card-ch-herst1-sicherheit",
    ],
  },
  {
    id: "section-ch-herst2",
    title: "5. Herstellung: Metalloxid + Wasser",
    cardIds: [
      "card-ch-herst2-allgemein",
      "card-ch-herst2-ca",
      "card-ch-herst2-ag",
      "card-ch-herst2-feo",
      "card-ch-herst2-mg",
      "card-ch-herst2-al",
    ],
  },
  {
    id: "section-ch-indikatoren",
    title: "6. Indikatoren",
    cardIds: [
      "card-ch-indikator-def",
      "card-ch-indikator-phenol",
      "card-ch-indikator-lackmus",
      "card-ch-indikator-universal",
      "card-ch-indikator-rotkohl",
      "card-ch-indikator-methyl-kresol",
    ],
  },
  {
    id: "section-ch-neutral",
    title: "7. Neutralisation",
    cardIds: [
      "card-ch-neutral-def",
      "card-ch-neutral-a",
      "card-ch-neutral-b",
      "card-ch-neutral-c",
      "card-ch-neutral-d",
      "card-ch-neutral-e",
      "card-ch-neutral-fe",
    ],
  },
  {
    id: "section-ch-merk",
    title: "8. Merksätze",
    cardIds: ["card-ch-merksaetze"],
  },
];

export const CHEMIE_K9_FLASHCARD_IDS = chemieKlasse9FlashcardSections.flatMap(
  (s) => s.cardIds,
);

export const orderedChemieKlasse9Flashcards = CHEMIE_K9_FLASHCARD_IDS.map(
  (id) => chemieKlasse9Flashcards.find((c) => c.id === id),
).filter(Boolean);

export const getChemieKlasse9FlashcardById = (cardId) =>
  chemieKlasse9Flashcards.find((c) => c.id === cardId) || null;
