/** Physik Probe-Fragen — Musterlösung + Feedback (Hangyeol 2026-09-28 export 기준) */

export const PHYSIK_PROBE_FEEDBACK_META = {
  bookId: "book-physik-probe-fragen-k9",
  sourceExport: "physik-probe-antworten-hangyeol-2026-09-28.json",
  reviewedAt: "2026-09-28",
  learner: "hangyeol",
};

/**
 * @typedef {'ok'|'partial'|'wrong'|'empty'} ProbeMark
 * @typedef {{
 *   mark: ProbeMark,
 *   modelDe: string,
 *   commentKo?: string,
 *   noteChapterId?: string,
 *   noteDe?: string,
 *   noteKo?: string,
 * }} ProbeFeedbackItem
 */

/** 수업 노트(Physik · Klasse 9 Notizen) 출처 — chapter id + 소제목 */
const NS = {
  strom11: {
    noteChapterId: "ch-strom",
    noteDe: "1. Wiederholung Elektrischer Strom → 1.1 Schaltung",
    noteKo: "1. 전류 복습 → 1.1 회로 연결",
  },
  strom12: {
    noteChapterId: "ch-strom",
    noteDe: "1. Wiederholung Elektrischer Strom → 1.2 Schaltpläne",
    noteKo: "1. 전류 복습 → 1.2 회로도",
  },
  strom13: {
    noteChapterId: "ch-strom",
    noteDe: "1. Wiederholung Elektrischer Strom → 1.3 Rechenaufgaben (Formeln)",
    noteKo: "1. 전류 복습 → 1.3 계산 (공식)",
  },
  strom14: {
    noteChapterId: "ch-strom",
    noteDe: "1. Wiederholung Elektrischer Strom → 1.4 Was ist Strom?",
    noteKo: "1. 전류 복습 → 1.4 전류란?",
  },
  strom15: {
    noteChapterId: "ch-strom",
    noteDe: "1. Wiederholung Elektrischer Strom → 1.5 Stromrichtung nach Ampère",
    noteKo: "1. 전류 복습 → 1.5 앙페르의 전류 방향",
  },
  leiter: {
    noteChapterId: "ch-leiter",
    noteDe: "2. Elektrischer Leiter → U = R · I",
    noteKo: "2. 전기 도체 → U = R · I",
  },
  pole31: {
    noteChapterId: "ch-magnet-einfuehrung",
    noteDe: "3. Magnetismus – Einführung → 3.1 Pole eines Magneten",
    noteKo: "3. 자기 – 도입 → 3.1 자석의 극",
  },
  kraft32: {
    noteChapterId: "ch-magnet-einfuehrung",
    noteDe: "3. Magnetismus – Einführung → 3.2 Kraftwirkung zwischen Magnetpolen",
    noteKo: "3. 자기 – 도입 → 3.2 자극 사이의 힘",
  },
  anord33: {
    noteChapterId: "ch-magnet-einfuehrung",
    noteDe: "3. Magnetismus – Einführung → 3.3 Anordnungen",
    noteKo: "3. 자기 – 도입 → 3.3 배치",
  },
  exp34: {
    noteChapterId: "ch-magnet-einfuehrung",
    noteDe: "3. Magnetismus – Einführung → 3.4 Gruppenexperiment",
    noteKo: "3. 자기 – 도입 → 3.4 모둠 실험",
  },
  ent35: {
    noteChapterId: "ch-magnet-einfuehrung",
    noteDe: "3. Magnetismus – Einführung → 3.5 Entmagnetisierung & Erdmagnetfeld",
    noteKo: "3. 자기 – 도입 → 3.5 탈자화 & 지구자기장",
  },
  gw41: {
    noteChapterId: "ch-grundwissen",
    noteDe: "4. Magnetismus – Grundwissen → 4.1 Beobachtungen mit Magneten",
    noteKo: "4. 자기 – 기초 지식 → 4.1 자석으로의 관찰",
  },
  gw42: {
    noteChapterId: "ch-grundwissen",
    noteDe: "4. Magnetismus – Grundwissen → 4.2 Magnetfeld & Feldlinien",
    noteKo: "4. 자기 – 기초 지식 → 4.2 자기장 & 자기력선",
  },
  gw43: {
    noteChapterId: "ch-grundwissen",
    noteDe: "4. Magnetismus – Grundwissen → 4.3 Regeln für Feldlinien",
    noteKo: "4. 자기 – 기초 지식 → 4.3 자기력선 규칙",
  },
  gw44: {
    noteChapterId: "ch-grundwissen",
    noteDe: "4. Magnetismus – Grundwissen → 4.4 Elementarmagnete",
    noteKo: "4. 자기 – 기초 지식 → 4.4 소자석",
  },
  gw45: {
    noteChapterId: "ch-grundwissen",
    noteDe: "4. Magnetismus – Grundwissen → 4.5 Magnetische Influenz",
    noteKo: "4. 자기 – 기초 지식 → 4.5 자기 유도",
  },
  gw46: {
    noteChapterId: "ch-grundwissen",
    noteDe: "4. Magnetismus – Grundwissen → 4.6 Erdmagnetfeld",
    noteKo: "4. 자기 – 기초 지식 → 4.6 지구자기장",
  },
  feld5: {
    noteChapterId: "ch-feldlinien",
    noteDe: "5. Feldlinien (Übung)",
    noteKo: "5. 자기력선 (연습)",
  },
  spule6: {
    noteChapterId: "ch-spule",
    noteDe: "6. Magnetfelder stromdurchflossener Leiter",
    noteKo: "6. 전류가 흐르는 도체의 자기장",
  },
  elektro7: {
    noteChapterId: "ch-elektro",
    noteDe: "7. Elektromagnetismus – Lasthebemagnet",
    noteKo: "7. 전자기 – 전자석 크레인",
  },
};

/** @type {Record<string, typeof NS[keyof typeof NS]>} */
export const physikProbeNoteSourceByCardId = {
  "card-ppf-a1": NS.strom11,
  "card-ppf-a2": NS.strom14,
  "card-ppf-a3": NS.strom15,
  "card-ppf-a4": NS.strom15,
  "card-ppf-a5": NS.strom15,
  "card-ppf-a6": NS.strom15,
  "card-ppf-a7": NS.strom15,
  "card-ppf-a8": NS.strom13,
  "card-ppf-b1": NS.pole31,
  "card-ppf-b2": NS.pole31,
  "card-ppf-b3": NS.pole31,
  "card-ppf-b4": NS.kraft32,
  "card-ppf-b5": NS.kraft32,
  "card-ppf-b6": NS.kraft32,
  "card-ppf-b7": NS.kraft32,
  "card-ppf-c1": NS.gw41,
  "card-ppf-c2": NS.gw41,
  "card-ppf-c3": NS.gw41,
  "card-ppf-c4": NS.gw41,
  "card-ppf-c5": NS.gw41,
  "card-ppf-c6": NS.exp34,
  "card-ppf-d1": NS.gw44,
  "card-ppf-d2": NS.gw44,
  "card-ppf-d3": NS.gw44,
  "card-ppf-d4": NS.gw45,
  "card-ppf-d5": NS.exp34,
  "card-ppf-d6": NS.exp34,
  "card-ppf-d7": NS.gw45,
  "card-ppf-d8": NS.ent35,
  "card-ppf-e1": NS.gw42,
  "card-ppf-e2": NS.gw42,
  "card-ppf-e3": NS.gw42,
  "card-ppf-e4": NS.gw43,
  "card-ppf-e5": NS.gw43,
  "card-ppf-e6": NS.gw43,
  "card-ppf-e7": NS.feld5,
  "card-ppf-e8": NS.feld5,
  "card-ppf-f1": NS.gw46,
  "card-ppf-f2": NS.gw46,
  "card-ppf-f3": NS.gw46,
  "card-ppf-f4": NS.gw46,
  "card-ppf-f5": NS.gw46,
  "card-ppf-f6": NS.gw46,
  "card-ppf-f7": NS.gw46,
  "card-ppf-g1": NS.spule6,
  "card-ppf-g2": NS.spule6,
  "card-ppf-g3": NS.spule6,
  "card-ppf-g4": NS.spule6,
  "card-ppf-g5": NS.spule6,
  "card-ppf-g6": NS.spule6,
  "card-ppf-g7": NS.elektro7,
  "card-ppf-h1": NS.elektro7,
  "card-ppf-h2": NS.elektro7,
  "card-ppf-h3": NS.elektro7,
};

/** @type {Record<string, ProbeFeedbackItem>} */
export const physikProbeFeedbackByCardId = {
  // ─── A ───
  "card-ppf-a1": {
    mark: "ok",
    modelDe:
      "Strommesser (Amperemeter) werden immer in Reihe geschaltet. Spannungsmesser (Voltmeter) werden immer parallel geschaltet.",
    commentKo: "내용 맞음. 철자: Amperemeter, parallel(소문자).",
  },
  "card-ppf-a2": {
    mark: "partial",
    modelDe:
      "Unter elektrischem Strom versteht man die gerichtete Bewegung von Ladungsträgern, in Metallen vor allem von Elektronen.",
    commentKo: "방향은 맞지만 정의가 짧음. ‘gerichtete Bewegung von Ladungsträgern’를 넣으세요.",
  },
  "card-ppf-a3": {
    mark: "ok",
    modelDe:
      "Die technische Stromrichtung zeigt vom Pluspol (+) zum Minuspol (−).",
    commentKo: "맞음. Pluspol / Minuspol로 쓰면 더 좋아요.",
  },
  "card-ppf-a4": {
    mark: "ok",
    modelDe:
      "Die Elektronen bewegen sich vom Minuspol (−) zum Pluspol (+), also entgegen der technischen Stromrichtung.",
    commentKo: "핵심 정확히 맞음.",
  },
  "card-ppf-a5": {
    mark: "ok",
    modelDe:
      "Ampère orientierte sich am Hofmannschen Wasserzersetzungsapparat: Am Pluspol entsteht Sauerstoff, am Minuspol Wasserstoff. Die Richtung geht vom „Sauerstoffdraht“ zum „Wasserstoffdraht“.",
    commentKo: "내용 좋음. 문장 끝 따옴표만 닫으면 됩니다.",
  },
  "card-ppf-a6": {
    mark: "partial",
    modelDe:
      "1) In Halbleitern und Elektrolyten bewegen sich auch positive Ladungsträger vom „+“ zum „−“. 2) Elektrotechnik und Maxwellsche Gleichungen beruhen auf Ampères Definition — eine Umstellung wäre sehr aufwendig.",
    commentKo: "이유 ‘두 가지’가 필요함. 지금은 문헌/Maxwell 쪽만 있음. 반도체·전해질 이유도 추가하세요.",
  },
  "card-ppf-a7": {
    mark: "ok",
    modelDe:
      "Die Elektronen tragen eine negative Ladung, weil sie sich entgegen der technischen Stromrichtung bewegen.",
    commentKo: "맞음.",
  },
  "card-ppf-a8": {
    mark: "partial",
    modelDe:
      "Bei gleichem Widerstand ist die Stromstärke proportional zur Spannung (U = R · I).",
    commentKo: "‘비례’만으로는 부족. U·R·I 관계를 한 문장으로.",
  },

  // ─── B ───
  "card-ppf-b1": {
    mark: "wrong",
    modelDe:
      "Die Stellen stärkster Anziehung eines Magneten nennt man magnetische Pole. Es gibt Nordpol und Südpol.",
    commentKo: "질문과 다른 단원(지구자기장) 답을 씀. ‘자극 = 인력이 가장 센 곳’으로 다시 쓰세요.",
  },
  "card-ppf-b2": {
    mark: "ok",
    modelDe: "Nordpol ↔ rot, Südpol ↔ grün.",
    commentKo: "맞음. 수업 Merkregel은 초록(grün).",
  },
  "card-ppf-b3": {
    mark: "wrong",
    modelDe:
      "An den Polen ist die Anziehung am stärksten. In der Mitte des Magneten ist die Kraft viel kleiner.",
    commentKo: "Influenz 설명이 아니라, 이 문항은 ‘극에서 인력이 가장 세다’가 정답.",
  },
  "card-ppf-b4": {
    mark: "ok",
    modelDe: "Gleichartige Pole (N–N oder S–S) stoßen sich ab.",
    commentKo: "맞음.",
  },
  "card-ppf-b5": {
    mark: "ok",
    modelDe: "Verschiedenartige Pole (N–S) ziehen sich an.",
    commentKo: "맞음.",
  },
  "card-ppf-b6": {
    mark: "wrong",
    modelDe:
      "Je größer der Abstand zwischen den Polen ist, desto geringer ist die Kraftwirkung.",
    commentKo: "거리↑ → 힘↓ 한 문장으로. 장의 ‘세기’ 이야기만으로는 부족.",
  },
  "card-ppf-b7": {
    mark: "wrong",
    modelDe:
      "Gleichartige Pole stoßen sich ab, verschiedenartige Pole ziehen sich an.",
    commentKo: "‘gleiche ziehen sich an’은 오류 → verschiedenartige. 거리 규칙은 보너스.",
  },

  // ─── C ───
  "card-ppf-c1": {
    mark: "partial",
    modelDe:
      "Magnetisierbare Stoffe können von einem Magneten angezogen werden, z. B. Eisen, Nickel und Cobalt.",
    commentKo: "예시는 맞음. 정의 한 줄을 앞에 붙이세요.",
  },
  "card-ppf-c2": {
    mark: "ok",
    modelDe:
      "Ein Dauermagnet ist ein Magnet, dessen magnetische Wirkung lange Zeit erhalten bleibt.",
    commentKo: "내용 OK.",
  },
  "card-ppf-c3": {
    mark: "wrong",
    modelDe: "Er wird immer angezogen, nie abgestoßen.",
    commentKo: "극에 따라 다르지 않음. 자화 가능 비자성체는 항상 끌림.",
  },
  "card-ppf-c4": {
    mark: "ok",
    modelDe:
      "Nein. Die magnetische Kraft wirkt ohne Berührung. Ihr Betrag hängt vom Abstand ab.",
    commentKo: "방향 맞음. ‘ohne Berührung’을 명시하면 더 좋음.",
  },
  "card-ppf-c5": {
    mark: "partial",
    modelDe:
      "Stabmagnet, Hufeisenmagnet, Ringmagnet, Topfmagnet, Scheibenmagnet.",
    commentKo: "형태만. Elektromagnet/Spule/Lasthebemagnet는 형태가 아님.",
  },
  "card-ppf-c6": {
    mark: "ok",
    modelDe:
      "Büroklammern → magnetisierbare Stoffe; Papier → Nicht-Magnete; Magneten → dauermagnetisierte Stoffe.",
    commentKo: "분류 맞음.",
  },

  // ─── D ───
  "card-ppf-d1": {
    mark: "ok",
    modelDe:
      "Alle magnetisierbaren Stoffe bestehen aus winzigen Bereichen, die sich wie kleine Magnete verhalten und ordnen können.",
    commentKo: "좋음.",
  },
  "card-ppf-d2": {
    mark: "ok",
    modelDe:
      "Ungeordnet: Wirkungen heben sich auf → kein Magnet. Ausgerichtet → Körper wirkt als Magnet.",
    commentKo: "맞음.",
  },
  "card-ppf-d3": {
    mark: "ok",
    modelDe:
      "Es entstehen zwei neue Magnete, jeweils mit Nord- und Südpol.",
    commentKo: "맞음. ‘reine N-/S-Pole gibt es nicht’까지 쓰면 만점.",
  },
  "card-ppf-d4": {
    mark: "ok",
    modelDe:
      "Magnetische Influenz ist die Magnetisierung eines magnetisierbaren Stoffes durch ein äußeres Magnetfeld.",
    commentKo: "잘 씀.",
  },
  "card-ppf-d5": {
    mark: "ok",
    modelDe:
      "Die Büroklammern, weil sie magnetisierbar sind und im Magnetfeld selbst magnetisch werden.",
    commentKo: "핵심 맞음.",
  },
  "card-ppf-d6": {
    mark: "ok",
    modelDe:
      "Ohne Magnetfeld: Elementarmagnete ungeordnet. Mit Magnetfeld: ausgerichtet → Büroklammer wird selbst magnetisch.",
    commentKo: "잘 씀.",
  },
  "card-ppf-d7": {
    mark: "ok",
    modelDe:
      "Magnetisch weich: leicht ausrichtbar, Ausrichtung geht leicht verloren. Magnetisch hart: schwer veränderbar → Dauermagnete.",
    commentKo: "맞음.",
  },
  "card-ppf-d8": {
    mark: "partial",
    modelDe:
      "Starkes Erhitzen (über ca. 800 °C) und starke Erschütterungen (z. B. Hämmern).",
    commentKo: "가열은 맞음. 두 번째(강한 충격/해머링)가 비어 있음.",
  },

  // ─── E ───
  "card-ppf-e1": {
    mark: "partial",
    modelDe:
      "Das magnetische Feld ist der Wirkungsbereich eines Magneten, in dem Kräfte wirken.",
    commentKo: "방향은 맞지만 한 문장 정의로. ‘Kräfte wirken’을 넣으세요.",
  },
  "card-ppf-e2": {
    mark: "ok",
    modelDe:
      "Nein. Vakuum und Luft verändern das Magnetfeld nicht.",
    commentKo: "맞음.",
  },
  "card-ppf-e3": {
    mark: "partial",
    modelDe:
      "Magnetische Feldlinien beschreiben die Umgebung eines Magneten. Sie zeigen die Ausrichtung von Magnetnadeln und die Kraftrichtung auf den Nordpol.",
    commentKo: "N→S·교차 없음은 맞음. ‘viele Linien = eine Feldlinie’는 Feldlinienbild로 고치세요.",
  },
  "card-ppf-e4": {
    mark: "ok",
    modelDe: "Jede Feldlinie verläuft vom Nordpol zum Südpol.",
    commentKo: "맞음.",
  },
  "card-ppf-e5": {
    mark: "wrong",
    modelDe:
      "Feldlinien kreuzen sich nie, weil das zwei verschiedene Kraftrichtungen an einem Ort bedeuten würde.",
    commentKo: "답을 써야 함. 위 모범 문장을 외우세요.",
  },
  "card-ppf-e6": {
    mark: "ok",
    modelDe:
      "Dort verlaufen die Feldlinien dichter (viele Linien auf engem Raum).",
    commentKo: "맞음.",
  },
  "card-ppf-e7": {
    mark: "partial",
    modelDe:
      "Stab: N→S bogenförmig. Hufeisen: über den Polspalt. Scheiben: von der N-Seite zur S-Seite.",
    commentKo: "Stab·Scheiben OK. Hufeisen은 ‘두 막대 사이’보다 Polspalt(극 사이 틈)로.",
  },
  "card-ppf-e8": {
    mark: "ok",
    modelDe:
      "Magnetische Feldlinien: Kraftfeld des Magneten. Elektrische: Potenzialdifferenz (Spannung).",
    commentKo: "핵심 맞음.",
  },

  // ─── F ───
  "card-ppf-f1": {
    mark: "ok",
    modelDe:
      "Drehbare Magnete (Kompassnadeln) richten sich in Nord-Süd-Richtung aus.",
    commentKo: "맞음.",
  },
  "card-ppf-f2": {
    mark: "ok",
    modelDe:
      "Der magnetische Südpol liegt in der Nähe des geografischen Nordpols.",
    commentKo: "맞음.",
  },
  "card-ppf-f3": {
    mark: "ok",
    modelDe:
      "Missweisung ist die Abweichung zwischen geografischem Nord und der Kompassrichtung (magnetisch).",
    commentKo: "맞음.",
  },
  "card-ppf-f4": {
    mark: "ok",
    modelDe:
      "Inklination ist die Neigung der Feldlinien gegenüber der Horizontalen.",
    commentKo: "맞음.",
  },
  "card-ppf-f5": {
    mark: "ok",
    modelDe:
      "Durch elektrische Ströme im flüssigen Eisenkern (Geodynamo). Elementarmagnete reichen nicht, weil der Kern flüssig ist.",
    commentKo: "핵심 잘 잡음.",
  },
  "card-ppf-f6": {
    mark: "ok",
    modelDe:
      "Abkühlende Lava / Basalt speichert die damalige Magnetisierung — wechselnde Magnetisierung im Gestein.",
    commentKo: "맞음.",
  },
  "card-ppf-f7": {
    mark: "ok",
    modelDe:
      "In den letzten 100 Mio. Jahren gab es mind. ca. 170 Polwechsel; der letzte vor ca. 730 000 Jahren.",
    commentKo: "맞음.",
  },

  // ─── G ───
  "card-ppf-g1": {
    mark: "ok",
    modelDe: "Bewegte Ladungen (Strom) erzeugen ein Magnetfeld.",
    commentKo: "맞음.",
  },
  "card-ppf-g2": {
    mark: "ok",
    modelDe:
      "Linke-Hand-Regel: Daumen = Elektronenfluss, Finger = Feldlinienrichtung.",
    commentKo: "맞음.",
  },
  "card-ppf-g3": {
    mark: "ok",
    modelDe: "Ein Eisenkern.",
    commentKo: "맞음.",
  },
  "card-ppf-g4": {
    mark: "partial",
    modelDe:
      "Stromstärke erhöhen, Windungszahl vergrößern, Spule verkürzen.",
    commentKo: "전류·짧은 코일은 OK. ‘Windungszahl(감은 수)’도 넣으세요. Eisenkern은 별도 문항.",
  },
  "card-ppf-g5": {
    mark: "ok",
    modelDe: "Ähnliche Feldlinien, Magnetfeld, entgegengesetzte Pole (N/S).",
    commentKo: "맞음.",
  },
  "card-ppf-g6": {
    mark: "ok",
    modelDe:
      "Stabmagnet dauerhaft / Elementarmagnete; Spule ein-/ausschaltbar und verstärkbar.",
    commentKo: "맞음.",
  },
  "card-ppf-g7": {
    mark: "wrong",
    modelDe:
      "Geschlossener Eisenkern führt Feldlinien im Kern — stärkeres Feld als offener Kern.",
    commentKo: "전자석 정의를 씀. 이 문항은 ‘폐쇄 철심이 장을 더 세게 하는 이유’입니다.",
  },

  // ─── H ───
  "card-ppf-h1": {
    mark: "ok",
    modelDe:
      "Eine stromdurchflossene Spule (oft mit Eisenkern), deren Magnetfeld man ein- und ausschalten kann.",
    commentKo: "방향 맞음. ‘stromdurchflossen / ein-ausschaltbar’를 넣으면 더 좋음.",
  },
  "card-ppf-h2": {
    mark: "ok",
    modelDe:
      "Elektromagnet — weil man ihn zum Anheben einschalten und zum Ablegen ausschalten kann.",
    commentKo: "맞음.",
  },
  "card-ppf-h3": {
    mark: "ok",
    modelDe:
      "Strom ein → starkes Feld → Last angezogen. Strom aus → Feld weg → Last ablegbar.",
    commentKo: "맞음.",
  },
};

/** @param {string} cardId */
export function getBundledProbeFeedback(cardId) {
  const base = physikProbeFeedbackByCardId[cardId];
  if (!base) return null;
  const note = physikProbeNoteSourceByCardId[cardId] || {};
  return {
    ...base,
    noteChapterId: note.noteChapterId || base.noteChapterId || "",
    noteDe: note.noteDe || base.noteDe || "",
    noteKo: note.noteKo || base.noteKo || "",
  };
}

export function getAllBundledProbeFeedback() {
  /** @type {Record<string, ProbeFeedbackItem>} */
  const out = {};
  for (const id of Object.keys(physikProbeFeedbackByCardId)) {
    out[id] = getBundledProbeFeedback(id);
  }
  return out;
}

/** @param {string} cardId */
export function getProbeNoteSource(cardId) {
  return physikProbeNoteSourceByCardId[cardId] || null;
}
