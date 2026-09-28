/** Physik · Klasse 9 — Unterrichtsnotizen (Lesen)
 *  Hangyeol · DE ↔ KO 챕터 리더용
 *  원본: hangyeol-physik-klasse9.md / hangyeol-physik-klasse9-ko.md
 */

export const PHYSIK_K9_NOTES_BOOK_ID = "book-physik-klasse9-notes";

/** 읽기 후 암기용 플래시카드 책 (physikMagnetismusContent) */
export const PHYSIK_K9_NOTES_RELATED_FLASHCARD_ID = "book-physik-magnetismus-k9";

/**
 * @typedef {'p'|'h3'|'ul'|'ol'|'callout'|'meta'} NoteBlockType
 * @typedef {{ type: NoteBlockType, de?: string, ko?: string, items?: { de: string, ko: string }[] }} NoteBlock
 * @typedef {{ id: string, titleDe: string, titleKo: string, blocks: NoteBlock[] }} NoteChapter
 */

/** @type {NoteChapter[]} */
export const physikKlasse9NotesChapters = [
  {
    id: "ch-strom",
    titleDe: "1. Wiederholung Elektrischer Strom",
    titleKo: "1. 전류 복습",
    blocks: [
      { type: "meta", de: "Datum: 25.–26.08.2026 · Name: Hangyeol", ko: "날짜: 2026.08.25–26 · 이름: Hangyeol" },
      { type: "h3", de: "1.1 Schaltung", ko: "1.1 회로 연결" },
      {
        type: "ul",
        items: [
          {
            de: "Strommesser (Amperemeter) werden immer in Reihe geschaltet.",
            ko: "전류계(Amperemeter)는 항상 직렬로 연결한다.",
          },
          {
            de: "Spannungsmesser (Voltmeter) werden immer parallel geschaltet.",
            ko: "전압계(Voltmeter)는 항상 병렬로 연결한다.",
          },
        ],
      },
      { type: "h3", de: "1.2 Schaltpläne", ko: "1.2 회로도" },
      {
        type: "ul",
        items: [
          {
            de: "Einfacher Stromkreis: Stromquelle – Schalter – Glühlampe (Reihe).",
            ko: "간단 회로: 전원 – 스위치 – 전구 (직렬).",
          },
          {
            de: "Widerstand und Glühlampe in Reihe; Voltmeter parallel zur Stromquelle.",
            ko: "저항과 전구 직렬; 전압계는 전원에 병렬.",
          },
        ],
      },
      { type: "h3", de: "1.3 Rechenaufgaben (Formeln)", ko: "1.3 계산 (공식)" },
      {
        type: "ul",
        items: [
          {
            de: "Widerstand: R = U / I. Beispiel Bügeleisen: U = 220 V, I = 4,4 A → R = 50 Ω.",
            ko: "저항: R = U / I. 예) 다리미: 220 V, 4,4 A → R = 50 Ω.",
          },
          {
            de: "Ladung: Q = I · t. Beispiel LED: I = 20 mA = 0,02 A, t = 1 s → Q = 0,02 C.",
            ko: "전하량: Q = I · t. 예) LED: 20 mA = 0,02 A, 1 s → Q = 0,02 C.",
          },
        ],
      },
      { type: "h3", de: "1.4 Was ist Strom?", ko: "1.4 전류란?" },
      {
        type: "p",
        de: "Unter elektrischem Strom versteht man die gerichtete Bewegung von Ladungsträgern. In Metallen fließen vor allem Elektronen.",
        ko: "전류란 전하 운반자의 방향성 있는 이동이다. 금속에서는 주로 전자가 흐른다.",
      },
      {
        type: "p",
        de: "Antwort (Hangyeol): Strom wird im Alltag für viele Techniken benutzt. Man versteht darunter auch fließende Elektronen.",
        ko: "답(Hangyeol): 전류는 일상의 많은 기술에 쓰인다. 흐르는 전자로도 이해한다.",
      },
      {
        type: "h3",
        de: "1.5 Stromrichtung nach Ampère",
        ko: "1.5 앙페르의 전류 방향",
      },
      {
        type: "p",
        de: "Ampère definiert die Stromrichtung am Hofmannschen Wasserzersetzungsapparat: Am Pluspol entsteht Sauerstoff (O₂), am Minuspol Wasserstoff (H₂). Die Richtung geht vom „Sauerstoffdraht“ zum „Wasserstoffdraht“.",
        ko: "앙페르는 호프만식 물 전기분해 장치로 전류 방향을 정했다. 양극(+)에서 산소(O₂), 음극(−)에서 수소(H₂). 「산소 쪽」에서 「수소 쪽」으로의 방향이다.",
      },
      {
        type: "callout",
        de: "Die technische Stromrichtung zeigt vom „+“-Pol zum „−“-Pol.",
        ko: "기술 전류 방향은 「+」극에서 「−」극으로 향한다.",
      },
      {
        type: "p",
        de: "In Metallen fließen nur negative Elektronen — vom Minuspol zum Pluspol, also entgegen der technischen Stromrichtung.",
        ko: "금속에서는 음의 전자만 흐른다 — −극에서 +극으로, 즉 기술 전류 방향과 반대.",
      },
      {
        type: "h3",
        de: "Warum keine Umstellung der Stromrichtung?",
        ko: "왜 전류 방향을 바꾸지 않는가?",
      },
      {
        type: "ul",
        items: [
          {
            de: "In Halbleitern und Elektrolyten bewegen sich auch positive Ladungsträger vom „+“ zum „−“.",
            ko: "반도체·전해질에서는 양의 전하 운반자도 +→−로 움직인다.",
          },
          {
            de: "Elektronen sind negativ, weil sie sich entgegen der technischen Stromrichtung bewegen.",
            ko: "전자가 음전하인 것은 기술 전류 방향과 반대로 움직이기 때문이다.",
          },
          {
            de: "Elektrotechnik und Maxwellsche Gleichungen beruhen auf Ampères Definition.",
            ko: "전기공학과 맥스웰 방정식이 앙페르의 정의에 기반한다.",
          },
          {
            de: "Eine Umstellung wäre in der Literatur sehr aufwendig.",
            ko: "바꾸면 문헌·교재 수정 부담이 크다.",
          },
        ],
      },
    ],
  },
  {
    id: "ch-leiter",
    titleDe: "2. Elektrischer Leiter",
    titleKo: "2. 전기 도체",
    blocks: [
      { type: "meta", de: "Datum: 26.08.2026", ko: "날짜: 2026.08.26" },
      {
        type: "h3",
        de: "Erhöhte Stromstärke I / erhöhte Spannung U",
        ko: "전류 세기↑ / 전압↑",
      },
      {
        type: "ul",
        items: [
          {
            de: "Elektronen (e⁻) bewegen sich zum Pluspol, weil sie negativ geladen sind.",
            ko: "전자(e⁻)는 음전하이므로 양극(+) 쪽으로 움직인다.",
          },
          {
            de: "Formel: U = R · I — die Werte sind proportional.",
            ko: "공식: U = R · I — 값들이 비례한다.",
          },
          {
            de: "Bei höherer Spannung bewegen sich die Elektronen stärker zum Pluspol.",
            ko: "전압이 커지면 전자가 양극 쪽으로 더 세게 움직인다.",
          },
          {
            de: "Merkmal in Skizzen: Jedes Elektron sollte einen Vektor haben.",
            ko: "스케치 특징: 각 전자에 벡터를 표시한다.",
          },
        ],
      },
    ],
  },
  {
    id: "ch-magnet-einfuehrung",
    titleDe: "3. Magnetismus – Einführung",
    titleKo: "3. 자기 – 도입",
    blocks: [
      { type: "meta", de: "Datum: 01.09.2026", ko: "날짜: 2026.09.01" },
      { type: "h3", de: "3.1 Pole eines Magneten", ko: "3.1 자석의 극" },
      {
        type: "p",
        de: "Die Stellen stärkster Anziehung nennt man magnetische Pole: Nordpol (oft rot) und Südpol (oft grün). An den Enden eines Stabmagneten bleiben viele Büroklammern hängen, in der Mitte kaum welche.",
        ko: "인력이 가장 강한 곳을 자극이라 한다: 북극(종종 빨강), 남극(종종 초록). 막대자석 양끝에는 클립이 많이 붙고 가운데에는 거의 없다.",
      },
      {
        type: "callout",
        de: "Merkregel: Nordpol ↔ rot, Südpol ↔ grün.",
        ko: "암기: 북극 ↔ 빨강, 남극 ↔ 초록.",
      },
      {
        type: "h3",
        de: "3.2 Kraftwirkung zwischen Magnetpolen",
        ko: "3.2 자극 사이의 힘",
      },
      {
        type: "callout",
        de: "Gleichartige Pole stoßen sich ab, verschiedenartige Pole ziehen sich an. Je größer der Abstand, desto geringer die Kraft.",
        ko: "같은 극은 반발하고, 다른 극은 끌어당긴다. 거리가 클수록 힘은 작아진다.",
      },
      {
        type: "h3",
        de: "3.3 Anordnungen (Abstoßung / Anziehung)",
        ko: "3.3 배치 (반발 / 인력)",
      },
      {
        type: "ul",
        items: [
          {
            de: "Abstoßung: z. B. [N|S]  [S|N] — S trifft auf S.",
            ko: "반발: 예) [N|S]  [S|N] — S가 S와 만남.",
          },
          {
            de: "Anziehung: z. B. [S|N]  [S|N] — N trifft auf S.",
            ko: "인력: 예) [S|N]  [S|N] — N이 S와 만남.",
          },
        ],
      },
      { type: "h3", de: "3.4 Gruppenexperiment", ko: "3.4 모둠 실험" },
      {
        type: "ul",
        items: [
          {
            de: "Büroklammern → magnetisierbare Stoffe (magnetische Reaktion).",
            ko: "클립 → 자화 가능 물질 (자기 반응).",
          },
          {
            de: "Papier → Nicht-Magnete (nicht-magnetische Reaktion).",
            ko: "종이 → 비자성체 (비자성 반응).",
          },
          {
            de: "Magneten → dauermagnetisierte Stoffe.",
            ko: "자석 → 영구 자화된 물질.",
          },
        ],
      },
      {
        type: "p",
        de: "Magnetische Influenz: Magnetisierung von magnetisierbaren Stoffen durch ein äußeres Feld. Betroffene Probe: Büroklammer.",
        ko: "자기 유도: 외부 장에 의한 자화 가능 물질의 자화. 해당 시료: 클립.",
      },
      {
        type: "ul",
        items: [
          {
            de: "Büroklammer ohne Magnetfeld: Elementarmagnete ungeordnet.",
            ko: "자기장 없는 클립: 소자석 무질서.",
          },
          {
            de: "Mit Magnetfeld: Elementarmagnete ausgerichtet → Büroklammer wird selbst magnetisch.",
            ko: "자기장 안: 소자석 정렬 → 클립이 스스로 자성을 띰.",
          },
        ],
      },
      {
        type: "h3",
        de: "3.5 Entmagnetisierung & Erdmagnetfeld",
        ko: "3.5 탈자화 & 지구자기장",
      },
      {
        type: "ul",
        items: [
          {
            de: "Magnetische Eigenschaften nehmen: starkes Erhitzen oder starke Erschütterungen (Elementarmagnete werden ungeordnet).",
            ko: "탈자화: 강한 가열 또는 강한 충격 (소자석 정렬이 깨짐).",
          },
          {
            de: "Umpolung des Erdmagnetfeldes: Abkühlung von Lava, Magnetisierung von Basalt, wechselnde Magnetisierung im Gestein.",
            ko: "지구자기장 극전환 증거: 용암 냉각, 현무암 자화, 암석의 바뀌는 자화.",
          },
          {
            de: "Erdmagnetfeld nicht durch Elementarmagnete erklärbar: flüssiger Erdkern, elektrische Ströme.",
            ko: "지구자기장은 소자석 모델로 설명 불가: 액체 핵, 전기 전류.",
          },
        ],
      },
    ],
  },
  {
    id: "ch-grundwissen",
    titleDe: "4. Magnetismus – Grundwissen",
    titleKo: "4. 자기 – 기초 지식 (교과서)",
    blocks: [
      {
        type: "h3",
        de: "4.1 Beobachtungen mit Magneten",
        ko: "4.1 자석으로의 관찰",
      },
      {
        type: "p",
        de: "Magnete enthalten vor allem Eisen; auch Nickel, Cobalt, Legierungen. Formen: Stab-, Hufeisen-, Ring-, Topf-, Scheibenmagnet.",
        ko: "자석은 주로 철; 니켈·코발트·합금도. 형태: 막대·말굽·고리·냄비형·원판 자석.",
      },
      {
        type: "ul",
        items: [
          {
            de: "Magnetisierbare Stoffe: Eisen, Nickel, Cobalt — werden angezogen, nie abgestoßen.",
            ko: "자화 가능 물질: 철·니켈·코발트 — 항상 끌리며 밀어내지지 않음.",
          },
          {
            de: "Dauermagnete behalten ihre Wirkung lange.",
            ko: "영구자석은 자기 작용이 오래 지속된다.",
          },
          {
            de: "Magnetische Kraft wirkt ohne Berührung; größerer Abstand → kleinere Kraft.",
            ko: "자기력은 접촉 없이 작용; 거리↑ → 힘↓.",
          },
        ],
      },
      {
        type: "callout",
        de: "Ein Magnet wirkt auf Gegenstände aus magnetisierbaren Stoffen. Der Betrag der Kraft hängt vom Abstand ab.",
        ko: "자석은 자화 가능 물질에 작용한다. 힘의 크기는 거리에 따라 달라진다.",
      },
      {
        type: "h3",
        de: "4.2 Magnetfeld & Feldlinien",
        ko: "4.2 자기장 & 자기력선",
      },
      {
        type: "p",
        de: "Das magnetische Feld ist der Wirkungsbereich eines Magneten. Vakuum und nichtmagnetisierbare Stoffe ändern es nicht.",
        ko: "자기장은 자석의 작용 영역이다. 진공·비자화 물질은 바꾸지 않는다.",
      },
      {
        type: "callout",
        de: "Feldlinien zeigen die Ausrichtung von Magnetnadeln. Die Orientierung gibt die Kraftrichtung auf den Nordpol an.",
        ko: "자기력선은 자기침의 방향을 보여 준다. 방향은 북극에 작용하는 힘의 방향이다.",
      },
      {
        type: "h3",
        de: "4.3 Regeln für Feldlinien",
        ko: "4.3 자기력선 규칙",
      },
      {
        type: "ul",
        items: [
          {
            de: "Jede Feldlinie verläuft vom Nordpol zum Südpol.",
            ko: "모든 자기력선은 북극에서 남극으로 향한다.",
          },
          {
            de: "Feldlinien kreuzen sich nie (sonst zwei Kraftrichtungen an einem Ort).",
            ko: "교차하지 않는다 (한 지점에 힘 방향이 둘이 되기 때문).",
          },
          {
            de: "An den Polen verlaufen sie dichter → dort ist die Kraft größer.",
            ko: "극에서 더 조밀 → 그곳에서 힘이 더 크다.",
          },
        ],
      },
      {
        type: "h3",
        de: "4.4 Elementarmagnete",
        ko: "4.4 소자석",
      },
      {
        type: "callout",
        de: "Alle magnetisierbaren Stoffe bestehen aus winzigen Bereichen, die sich wie kleine Magnete verhalten (Elementarmagnete).",
        ko: "모든 자화 가능 물질은 작은 자석처럼 행동하는 아주 작은 영역(소자석)으로 이루어져 있다.",
      },
      {
        type: "ul",
        items: [
          {
            de: "Ungeordnet → Wirkungen heben sich auf → kein Magnet.",
            ko: "무질서 → 효과 상쇄 → 비자성.",
          },
          {
            de: "Ausgerichtet → Körper wirkt als Magnet.",
            ko: "정렬 → 물체가 자석으로 작용.",
          },
          {
            de: "Teilt man einen Magneten, entstehen immer neue Magnete mit N- und S-Pol.",
            ko: "자석을 자르면 항상 N·S극을 가진 새 자석이 생긴다.",
          },
        ],
      },
      {
        type: "h3",
        de: "4.5 Magnetische Influenz",
        ko: "4.5 자기 유도",
      },
      {
        type: "p",
        de: "Im äußeren Magnetfeld werden Elementarmagnete eines Eisenstücks gleichgerichtet → das Eisen wird selbst zum Magneten. Das heißt magnetische Influenz.",
        ko: "외부 자기장에서 철의 소자석이 같은 방향으로 정렬되면 철 자체가 자석이 된다. 이를 자기 유도라 한다.",
      },
      {
        type: "ul",
        items: [
          {
            de: "Magnetisch weich: leicht ausrichtbar, Ausrichtung geht leicht verloren → gut zum Abschirmen.",
            ko: "연자성: 쉽게 정렬·풀림 → 차폐에 적합.",
          },
          {
            de: "Magnetisch hart: schwer veränderbar → Dauermagnete.",
            ko: "경자성: 잘 안 바뀜 → 영구자석.",
          },
          {
            de: "Ausrichtung geht verloren bei starkem Erhitzen (über ca. 800 °C) oder Erschütterungen.",
            ko: "강한 가열(약 800 °C 이상)이나 충격으로 정렬이 깨진다.",
          },
        ],
      },
      {
        type: "h3",
        de: "4.6 Erdmagnetfeld",
        ko: "4.6 지구자기장",
      },
      {
        type: "ul",
        items: [
          {
            de: "Kompassnadeln richten sich Nord–Süd aus → Erdmagnetfeld.",
            ko: "나침반은 남북으로 정렬 → 지구자기장.",
          },
          {
            de: "Magnetischer Südpol nahe geografischem Nordpol (und umgekehrt).",
            ko: "자기 남극 ≈ 지리적 북극 근처 (반대도 성립).",
          },
          {
            de: "Missweisung (Deklination): Abweichung geografisch ↔ magnetisch.",
            ko: "편각: 지리적 북쪽과 자기 방향의 차이.",
          },
          {
            de: "Inklination: Neigung der Feldlinien; in Deutschland ca. 63°–69°.",
            ko: "복각: 력선 기울기; 독일에서 약 63–69°.",
          },
          {
            de: "Ursprung: Geodynamo — elektrische Ströme im flüssigen Eisenkern.",
            ko: "기원: 지구 발전기 — 액체 철핵의 전류.",
          },
          {
            de: "Paläomagnetismus: Basalt speichert Feldrichtung; viele Polwechsel in der Erdgeschichte.",
            ko: "고지자기: 현무암이 장 방향 기록; 지구 역사상 많은 극전환.",
          },
        ],
      },
    ],
  },
  {
    id: "ch-feldlinien",
    titleDe: "5. Feldlinien (Übung)",
    titleKo: "5. 자기력선 (연습)",
    blocks: [
      { type: "meta", de: "Datum: 08.09.2026", ko: "날짜: 2026.09.08" },
      {
        type: "ul",
        items: [
          {
            de: "Feldlinien verlaufen von N nach S, kreuzen sich nie; viele Linien ergeben ein Feldlinienbild.",
            ko: "자기력선은 N→S, 교차 없음; 많은 선이 자기력선 그림을 이룬다.",
          },
          {
            de: "Starkes Feld: Feldlinien werden dichter.",
            ko: "강한 장: 자기력선이 더 조밀해진다.",
          },
          {
            de: "Stabmagnet: bogenförmig N→S. Hufeisen: über den Polspalt. Scheiben: von N-Seite zur S-Seite.",
            ko: "막대: N→S 곡선. 말굽: 극 틈. 원판: N면에서 S면.",
          },
          {
            de: "Magnetische Feldlinien: Kraftfeld des Magneten. Elektrische: Potenzialdifferenz (Spannung).",
            ko: "자기력선: 자석의 힘장. 전기력선: 전위차(전압).",
          },
        ],
      },
    ],
  },
  {
    id: "ch-spule",
    titleDe: "6. Magnetfelder stromdurchflossener Leiter",
    titleKo: "6. 전류가 흐르는 도체의 자기장",
    blocks: [
      { type: "meta", de: "Datum: 09.09.2026", ko: "날짜: 2026.09.09" },
      {
        type: "callout",
        de: "Bewegte Ladungen erzeugen ein Magnetfeld.",
        ko: "움직이는 전하는 자기장을 만든다.",
      },
      {
        type: "p",
        de: "Linke-Hand-Regel: Daumen = Fließrichtung der Elektronen, Finger = Richtung der Feldlinien.",
        ko: "왼손 법칙: 엄지 = 전자 흐름, 손가락 = 자기력선 방향.",
      },
      {
        type: "h3",
        de: "Spule verstärken",
        ko: "코일 자기장 세게 하기",
      },
      {
        type: "ul",
        items: [
          {
            de: "Eisenkern in die Spule legen.",
            ko: "코일 안에 철심을 넣는다.",
          },
          {
            de: "Stromstärke erhöhen.",
            ko: "전류 세기를 키운다.",
          },
          {
            de: "Windungszahl vergrößern.",
            ko: "권선수(감은 수)를 늘린다.",
          },
          {
            de: "Spule verkürzen.",
            ko: "코일을 짧게 한다.",
          },
        ],
      },
      {
        type: "h3",
        de: "Spule ↔ Stabmagnet",
        ko: "코일 ↔ 막대자석",
      },
      {
        type: "ul",
        items: [
          {
            de: "Gemeinsam: ähnliche Feldlinien, N- und S-Pol.",
            ko: "공통: 비슷한 자기력선, N·S극.",
          },
          {
            de: "Unterschied: Stabmagnet dauerhaft / Elementarmagnete; Spule ein-/ausschaltbar und verstärkbar.",
            ko: "차이: 막대자석=영구·소자석; 코일=켜고 끄기·세기 조절 가능.",
          },
        ],
      },
    ],
  },
  {
    id: "ch-elektro",
    titleDe: "7. Elektromagnetismus – Lasthebemagnet",
    titleKo: "7. 전자기 – 전자석 크레인",
    blocks: [
      {
        type: "p",
        de: "Auf Schrottplätzen werden Lasthebemagnete genutzt: ein- und ausschaltbar, zum Transport schwerer Lasten (z. B. Autos).",
        ko: "고철장에서는 하중 인양 자석을 쓴다: 켰다 껐다 가능, 무거운 짐(예: 자동차) 운반.",
      },
      {
        type: "callout",
        de: "Art des Magneten: Elektromagnet — weil er ein- und ausgeschaltet werden kann. Ein Dauermagnet kann das nicht.",
        ko: "자석 종류: 전자석 — 켰다 껐다 할 수 있기 때문. 영구자석은 불가능.",
      },
      {
        type: "p",
        de: "Funktionsweise: Strom durch die Spule → starkes Magnetfeld (Eisenkern noch stärker) → Last angezogen. Strom aus → Feld weg → Last ablegen.",
        ko: "작동: 코일에 전류 → 강한 자기장(철심이면 더 세게) → 짐 흡착. 전류 OFF → 장 소멸 → 짐 내려놓기.",
      },
      {
        type: "h3",
        de: "Zusatz: Geschlossener Eisenkern",
        ko: "추가: 폐쇄 철심",
      },
      {
        type: "p",
        de: "Ein geschlossener Eisenkern führt die Feldlinien im Kern und lässt sie nicht nach außen austreten — das Magnetfeld wird deutlich stärker als bei einem offenen Eisenkern.",
        ko: "폐쇄 철심은 자기력선을 철심 안에서 이끌어 바깥으로 내보내지 않는다 — 열린 철심보다 장이 훨씬 세다.",
      },
    ],
  },
];

export const getPhysikKlasse9NotesChapterById = (chapterId) =>
  physikKlasse9NotesChapters.find((c) => c.id === chapterId) || null;

export const PHYSIK_K9_NOTES_CHAPTER_IDS = physikKlasse9NotesChapters.map(
  (c) => c.id,
);
