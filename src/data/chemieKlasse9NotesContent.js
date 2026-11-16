/** Chemie · Klasse 9 — Unterrichtsnotizen (Lesen)
 *  Hangyeol · DE ↔ KO 챕터 리더용
 *  원본: hangyeol-chemie-klasse9.md / hangyeol-chemie-klasse9-ko.md
 */

export const CHEMIE_K9_NOTES_BOOK_ID = "book-chemie-klasse9-notes";

/**
 * @typedef {'p'|'h3'|'ul'|'ol'|'callout'|'meta'|'figure'} NoteBlockType
 * @typedef {{ type: NoteBlockType, de?: string, ko?: string, items?: { de: string, ko: string }[], src?: string, captionDe?: string, captionKo?: string }} NoteBlock
 * @typedef {{ id: string, titleDe: string, titleKo: string, blocks: NoteBlock[] }} NoteChapter
 */

/** @type {NoteChapter[]} */
export const chemieKlasse9NotesChapters = [
  {
    id: "ch-basen-definition",
    titleDe: "1. Basen – Definition und Dissoziation",
    titleKo: "1. 염기 – 정의와 해리",
    blocks: [
      {
        type: "meta",
        de: "Datum: 11.11.2024 · Blatt: Basen – Informationsblatt / Übungen",
        ko: "날짜: 2024.11.11 · 자료: Basen – Informationsblatt / Übungen",
      },
      { type: "h3", de: "1.1 Definition", ko: "1.1 정의" },
      {
        type: "p",
        de: "Basen sind Stoffe, die in wässriger Lösung in negativ geladene Hydroxid-Ionen (OH⁻) und positiv geladene Ionen (meist Metall-Ionen) zerfallen. Dieser Vorgang heißt Dissoziation der Basen. Die entstehenden Lösungen nennt man alkalische Lösungen oder Laugen.",
        ko: "염기는 수용액에서 음전하를 띤 수산화 이온(OH⁻)과 양전하를 띤 이온(대개 금속 이온)으로 분해되는 물질이다. 이 과정을 염기의 해리(Dissoziation)라고 한다. 생기는 용액을 알칼리성 용액 또는 수용액(Lauge)이라고 한다.",
      },
      { type: "h3", de: "1.2 Allgemeine Formel", ko: "1.2 일반식" },
      {
        type: "callout",
        de: "Base + Wasser → Baserest-Ion + Hydroxid-Ion + Wasser",
        ko: "염기 + 물 → 염기 잔기 이온 + 수산화 이온 + 물",
      },
      {
        type: "p",
        de: "Beispiel Natriumhydroxid: NaOH + H₂O → Na⁺ + OH⁻ + H₂O  (kurz: NaOH —H₂O→ Na⁺ + OH⁻)",
        ko: "예 수산화나트륨: NaOH + H₂O → Na⁺ + OH⁻ + H₂O  (짧게: NaOH —H₂O→ Na⁺ + OH⁻)",
      },
      {
        type: "h3",
        de: "1.3 Regeln zu Ladung und Ionen",
        ko: "1.3 전하와 이온 규칙",
      },
      {
        type: "ul",
        items: [
          {
            de: "Die positive Ladung des Baserest-Ions entspricht der Hauptgruppennummer.",
            ko: "염기 잔기 이온의 양전하는 주기율표 주기(Hauptgruppe) 번호와 같다.",
          },
          {
            de: "Die Anzahl der Hydroxid-Ionen entspricht der positiven Ladung.",
            ko: "수산화 이온의 개수는 그 양전하와 같다.",
          },
          {
            de: "Schreibweise: (OH)ₓ ist richtig; OHₓ ist falsch.",
            ko: "표기: (OH)ₓ가 맞음; OHₓ는 틀림.",
          },
          {
            de: "Nebengruppenelemente: Ladung mit römischen Ziffern in Klammern (z. B. Eisen(III)).",
            ko: "전이금속: 전하는 괄호 안 로마 숫자로 표시 (예: Eisen(III)).",
          },
        ],
      },
      {
        type: "ul",
        items: [
          {
            de: "Calciumhydroxid: Ca(OH)₂ → Ca²⁺ + 2 OH⁻",
            ko: "수산화칼슘: Ca(OH)₂ → Ca²⁺ + 2 OH⁻",
          },
          {
            de: "Eisen(III)hydroxid: Fe(OH)₃ → Fe³⁺ + 3 OH⁻",
            ko: "수산화철(III): Fe(OH)₃ → Fe³⁺ + 3 OH⁻",
          },
        ],
      },
      { type: "h3", de: "1.4 Übung – Dissoziation", ko: "1.4 연습 – 해리" },
      {
        type: "ul",
        items: [
          {
            de: "a) Aluminiumhydroxid: Al(OH)₃ → Al³⁺ + 3 OH⁻",
            ko: "a) 수산화알루미늄: Al(OH)₃ → Al³⁺ + 3 OH⁻",
          },
          {
            de: "b) Nickel(II)hydroxid: Ni(OH)₂ → Ni²⁺ + 2 OH⁻",
            ko: "b) 수산화니켈(II): Ni(OH)₂ → Ni²⁺ + 2 OH⁻",
          },
        ],
      },
    ],
  },

  {
    id: "ch-eigenschaften",
    titleDe: "2. Eigenschaften alkalischer Lösungen",
    titleKo: "2. 알칼리성 용액의 성질",
    blocks: [
      {
        type: "ul",
        items: [
          {
            de: "ätzend — besonders gegenüber organischen Stoffen (Pflanzenfasern, Haut, Haare)",
            ko: "부식성(ätzend) — 특히 유기물(식물 섬유, 피부, 머리카락)",
          },
          {
            de: "leitet elektrischen Strom — durch frei bewegliche Ionen",
            ko: "전기 전도 — 자유롭게 움직이는 이온 때문",
          },
          {
            de: "färbt pH-Indikatoren charakteristisch — durch Hydroxid-Anionen",
            ko: "pH 지시약 특유 발색 — 수산화 음이온 때문",
          },
          {
            de: "in reiner Form oft hygroskopisch — wasseranziehend",
            ko: "순수 형태에서는 종종 흡습성 — 물을 끌어당김",
          },
        ],
      },
      {
        type: "h3",
        de: "Typische Färbung einiger Indikatoren (in Base)",
        ko: "일부 지시약의 염기에서의 색",
      },
      {
        type: "ul",
        items: [
          {
            de: "Lackmuspapier / Universalindikator → blau",
            ko: "리트머스 / 만능지시약 → 파랑",
          },
          {
            de: "Phenolphthalein → rot / pink",
            ko: "페놀프탈레인 → 빨강 / 분홍",
          },
          {
            de: "Bromthymolblau → blau",
            ko: "브로모티몰블루 → 파랑",
          },
        ],
      },
    ],
  },

  {
    id: "ch-vertreter",
    titleDe: "3. Wichtige Vertreter und Verwendung",
    titleKo: "3. 중요한 염기와 용도",
    blocks: [
      { type: "h3", de: "3.1 Wichtige Vertreter", ko: "3.1 중요한 대표 물질" },
      {
        type: "ul",
        items: [
          {
            de: "Natriumhydroxid (Ätznatrium) — NaOH — Natronlauge",
            ko: "수산화나트륨 (가성소다) — NaOH — Natronlauge",
          },
          {
            de: "Kaliumhydroxid (Ätzkali) — KOH — Kalilauge",
            ko: "수산화칼륨 (가성칼리) — KOH — Kalilauge",
          },
          {
            de: "Calciumhydroxid (Löschkalk) — Ca(OH)₂ — Kalkwasser",
            ko: "수산화칼슘 (소석회) — Ca(OH)₂ — Kalkwasser (석회수)",
          },
          {
            de: "Ammoniak — NH₃ — Salmiakgeist",
            ko: "암모니아 — NH₃ — Salmiakgeist",
          },
        ],
      },
      { type: "h3", de: "3.2 Verwendung", ko: "3.2 용도" },
      {
        type: "ul",
        items: [
          { de: "Rohrreiniger", ko: "배수관 세정제" },
          { de: "Seifenindustrie", ko: "비누 산업" },
          { de: "Betonindustrie", ko: "콘크리트 산업" },
          { de: "Herstellung von Laugengebäck", ko: "알칼리 빵(Laugengebäck) 제조" },
          { de: "Neutralisation von Säuren", ko: "산의 중화" },
        ],
      },
    ],
  },

  {
    id: "ch-herstellung-metall",
    titleDe: "4. Herstellung 1: Metall + Wasser",
    titleKo: "4. 제조법 1: 금속 + 물",
    blocks: [
      {
        type: "callout",
        de: "Metall (1. HG / Alkalimetalle) + Wasser → Metallhydroxid + Wasserstoff (g)",
        ko: "금속 (1족 / 알칼리 금속) + 물 → 금속수산화물 + 수소 (기체)",
      },
      {
        type: "h3",
        de: "4.2 Beispiel: Natrium + Wasser",
        ko: "4.2 예: 나트륨 + 물",
      },
      {
        type: "ul",
        items: [
          {
            de: "Wortgleichung: Natrium + Wasser reagiert zu Natriumhydroxid + Wasserstoff",
            ko: "단어식: Natrium + Wasser → Natriumhydroxid + Wasserstoff",
          },
          {
            de: "Unausgeglichen: Na + H₂O → NaOH + H₂",
            ko: "미균형: Na + H₂O → NaOH + H₂",
          },
          {
            de: "Ausgleichen!: 2 Na + 2 H₂O → 2 NaOH + H₂",
            ko: "균형!: 2 Na + 2 H₂O → 2 NaOH + H₂",
          },
        ],
      },
      {
        type: "h3",
        de: "4.3 Erklärung zum Ausgleichen",
        ko: "4.3 균형을 맞추는 이유",
      },
      {
        type: "ul",
        items: [
          {
            de: "Wasserstoff (H₂) ist ein Molekül (Gas bei Raumtemperatur, kein Edelgas).",
            ko: "수소(H₂)는 분자로 쓴다 (실온 기체, 비활성기체 아님).",
          },
          {
            de: "Links 2 H (in H₂O), rechts 3 H (1 in NaOH + 2 in H₂) → unausgeglichen.",
            ko: "왼쪽 H 2개(H₂O), 오른쪽 H 3개(NaOH 1 + H₂ 2) → 맞지 않음.",
          },
          {
            de: "Mit 2 H₂O entstehen 2 NaOH → links braucht man 2 Na.",
            ko: "2 H₂O면 2 NaOH → 왼쪽도 2 Na 필요.",
          },
        ],
      },
      {
        type: "h3",
        de: "4.4 Übung Metall + Wasser",
        ko: "4.4 연습: 금속 + 물",
      },
      {
        type: "ul",
        items: [
          {
            de: "a) Cäsium + Wasser → CsOH + H₂ (Produkte: Cäsiumhydroxid und Wasserstoff)",
            ko: "a) 세슘 + 물 → CsOH + H₂ (생성물: 수산화세슘과 수소)",
          },
          {
            de: "b) Lithium: 2 Li + 2 H₂O → 2 LiOH + H₂",
            ko: "b) 리튬: 2 Li + 2 H₂O → 2 LiOH + H₂",
          },
          {
            de: "c) Kalium: 2 K + 2 H₂O → 2 KOH + H₂",
            ko: "c) 칼륨: 2 K + 2 H₂O → 2 KOH + H₂",
          },
        ],
      },
      {
        type: "h3",
        de: "4.5 Achtung – Sicherheit",
        ko: "4.5 주의 – 안전",
      },
      {
        type: "callout",
        de: "Reaktion verläuft spontan und stark exotherm. Wasserstoff ist leicht entzündlich; Lauge kann spritzen.",
        ko: "반응은 자발적이고 강하게 발열적. 수소는 쉽게 연소; 수용액이 튀을 수 있음.",
      },
      {
        type: "p",
        de: "Film-Tipp: Natrium/Kalium in Wasser (YouTube). Phenolphthalein im Wasser zeigt die Laugenbildung.",
        ko: "영상 팁: 나트륨/칼륨 + 물 (YouTube). 페놀프탈레인이 수용액 생성을 보여 줌.",
      },
    ],
  },

  {
    id: "ch-herstellung-oxid",
    titleDe: "5. Herstellung 2: Metalloxid + Wasser",
    titleKo: "5. 제조법 2: 금속산화물 + 물",
    blocks: [
      {
        type: "ol",
        items: [
          {
            de: "Metall + Sauerstoff → Metalloxid",
            ko: "금속 + 산소 → 금속산화물",
          },
          {
            de: "Metalloxid + Wasser → Metallhydroxid",
            ko: "금속산화물 + 물 → 금속수산화물",
          },
        ],
      },
      { type: "h3", de: "5.2 Beispiel 1: Calcium", ko: "5.2 예 1: 칼슘" },
      {
        type: "ul",
        items: [
          {
            de: "Oxid: 2 Ca + O₂ → 2 CaO",
            ko: "산화물: 2 Ca + O₂ → 2 CaO",
          },
          {
            de: "Hydroxid: CaO + H₂O → Ca(OH)₂",
            ko: "수산화물: CaO + H₂O → Ca(OH)₂",
          },
          {
            de: "Wertigkeit: O = −2, Ca (2. HG) = +2 → Formel CaO.",
            ko: "원자가: O = −2, Ca (2족) = +2 → 화학식 CaO.",
          },
        ],
      },
      { type: "h3", de: "5.3 Beispiel 2: Silber", ko: "5.3 예 2: 은" },
      {
        type: "ul",
        items: [
          {
            de: "Oxid: 4 Ag + O₂ → 2 Ag₂O",
            ko: "산화물: 4 Ag + O₂ → 2 Ag₂O",
          },
          {
            de: "Hydroxid: Ag₂O + H₂O → 2 AgOH",
            ko: "수산화물: Ag₂O + H₂O → 2 AgOH",
          },
          {
            de: "Silber Wertigkeit +1; Sauerstoff −2 → Ag₂O.",
            ko: "은 원자가 +1; 산소 −2 → Ag₂O.",
          },
        ],
      },
      {
        type: "h3",
        de: "5.4 Übung Metalloxid + Wasser",
        ko: "5.4 연습: 금속산화물 + 물",
      },
      {
        type: "ul",
        items: [
          {
            de: "a) FeO + H₂O → Fe(OH)₂",
            ko: "a) FeO + H₂O → Fe(OH)₂",
          },
          {
            de: "b) 2 Mg + O₂ → 2 MgO;  dann MgO + H₂O → Mg(OH)₂",
            ko: "b) 2 Mg + O₂ → 2 MgO;  이어서 MgO + H₂O → Mg(OH)₂",
          },
          {
            de: "c) Al₂O₃ + 3 H₂O → 2 Al(OH)₃  (schwierig!)",
            ko: "c) Al₂O₃ + 3 H₂O → 2 Al(OH)₃  (어려움!)",
          },
        ],
      },
    ],
  },

  {
    id: "ch-indikatoren",
    titleDe: "6. Indikatoren",
    titleKo: "6. 지시약",
    blocks: [
      {
        type: "p",
        de: "Ein Indikator ist ein Hilfsmittel, das chemische Zustände oder Reaktionen durch eine gut sichtbare Veränderung sichtbar macht.",
        ko: "지시약(Indikator)은 화학적으로 상태나 반응을 눈에 잘 띄는 변화로 보이게 하는 보조 수단이다.",
      },
      { type: "h3", de: "Reinstoffe", ko: "순물질" },
      {
        type: "ul",
        items: [
          {
            de: "Methylrot: sauer rot · neutral/basisch gelb",
            ko: "메틸레드: 산성 빨강 · 중성/염기 노랑",
          },
          {
            de: "Kresolrot: sauer gelb · neutral gelb-orange · basisch rot-violett",
            ko: "크레졸레드: 산성 노랑 · 중성 노랑-주황 · 염기 빨강-보라",
          },
          {
            de: "Phenolphthalein: sauer/neutral farblos · basisch pink",
            ko: "페놀프탈레인: 산성/중성 무색 · 염기 분홍",
          },
        ],
      },
      { type: "h3", de: "Stoffgemische", ko: "혼합물" },
      {
        type: "ul",
        items: [
          {
            de: "Lackmus: sauer rot · neutral violett · basisch blau",
            ko: "리트머스: 산성 빨강 · 중성 보라 · 염기 파랑",
          },
          {
            de: "Universalindikator: sauer rot→gelb · neutral grün · basisch blau→violett",
            ko: "만능지시약: 산성 빨강→노랑 · 중성 초록 · 염기 파랑→보라",
          },
          {
            de: "Rotkohlsaft: sauer rot-pink · neutral violett · basisch blau/grün",
            ko: "적양배추즙: 산성 빨강-분홍 · 중성 보라 · 염기 파랑/초록",
          },
        ],
      },
    ],
  },

  {
    id: "ch-neutralisation",
    titleDe: "7. Neutralisation",
    titleKo: "7. 중화",
    blocks: [
      {
        type: "p",
        de: "Reaktion, bei der eine Säure / Base mit einer Base / Säure reagiert, um sich gegenseitig aufzuheben und den pH-Wert 7 zu erreichen.",
        ko: "산 / 염기가 염기 / 산과 반응하여 서로를 상쇄하고 pH 7에 이르게 하는 반응.",
      },
      {
        type: "callout",
        de: "Säure + Base → Wasser + Säurerest + Baserest  (= Anion + Kation = Salz)",
        ko: "산 + 염기 → 물 + 산 잔기 + 염기 잔기  (= 음이온 + 양이온 = 염)",
      },
      {
        type: "p",
        de: "Kurz: Säure + Base → Salz + Wasser",
        ko: "짧게: 산 + 염기 → 염 + 물",
      },
    ],
  },

  {
    id: "ch-uebungen-neutralisation",
    titleDe: "8. Übungen Neutralisationsgleichungen (LB S. 228–229)",
    titleKo: "8. 중화 반응식 연습 (LB S. 228–229)",
    blocks: [
      {
        type: "h3",
        de: "8.1 Aufgabe A.2 – Gleichungen ausgleichen",
        ko: "8.1 과제 A.2 – 식 균형 맞추기",
      },
      {
        type: "ol",
        items: [
          {
            de: "HCl + KOH → H₂O + KCl",
            ko: "HCl + KOH → H₂O + KCl",
          },
          {
            de: "H₂S + NaOH → H₂O + NaHS",
            ko: "H₂S + NaOH → H₂O + NaHS",
          },
          {
            de: "H₂CO₃ + Ca(OH)₂ → CaCO₃ + 2 H₂O",
            ko: "H₂CO₃ + Ca(OH)₂ → CaCO₃ + 2 H₂O",
          },
          {
            de: "H₃PO₄ + 3 NaOH → Na₃PO₄ + 3 H₂O",
            ko: "H₃PO₄ + 3 NaOH → Na₃PO₄ + 3 H₂O",
          },
          {
            de: "2 HNO₃ + Ba(OH)₂ → Ba(NO₃)₂ + 2 H₂O",
            ko: "2 HNO₃ + Ba(OH)₂ → Ba(NO₃)₂ + 2 H₂O",
          },
        ],
      },
      {
        type: "h3",
        de: "8.2 Eisen(II)hydroxid mit salpetriger Säure",
        ko: "8.2 수산화철(II)과 아질산",
      },
      {
        type: "callout",
        de: "Fe(OH)₂ + 2 HNO₂ → Fe(NO₂)₂ + 2 H₂O",
        ko: "Fe(OH)₂ + 2 HNO₂ → Fe(NO₂)₂ + 2 H₂O",
      },
    ],
  },

  {
    id: "ch-merksaetze",
    titleDe: "Übersicht – Merksätze",
    titleKo: "요약 – 암기 포인트",
    blocks: [
      {
        type: "ol",
        items: [
          {
            de: "Base dissoziiert in Wasser zu OH⁻ + positivem Ion → Lauge.",
            ko: "염기는 물에서 OH⁻ + 양이온으로 해리 → 알칼리성 용액(Lauge).",
          },
          {
            de: "Herstellung: Alkalimetall + Wasser oder Metalloxid + Wasser.",
            ko: "제조: 알칼리 금속 + 물 또는 금속산화물 + 물.",
          },
          {
            de: "Indikator macht Säure/Base/Neutral durch Farbe sichtbar.",
            ko: "지시약은 산/염기/중성을 색으로 보여 준다.",
          },
          {
            de: "Neutralisation: Säure + Base → Salz + Wasser (Ziel: pH 7).",
            ko: "중화: 산 + 염기 → 염 + 물 (목표 pH 7).",
          },
          {
            de: "Beim Aufstellen von Gleichungen immer Atome zählen und ausgleichen.",
            ko: "반응식을 세울 때는 항상 원자 수를 세어 균형을 맞춘다.",
          },
        ],
      },
    ],
  },
];

export const getChemieKlasse9NotesChapterById = (chapterId) =>
  chemieKlasse9NotesChapters.find((c) => c.id === chapterId) || null;

export const CHEMIE_K9_NOTES_CHAPTER_IDS = chemieKlasse9NotesChapters.map(
  (c) => c.id,
);
