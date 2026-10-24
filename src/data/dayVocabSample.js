/**
 * DAY 단어장 (한 파일 · 한 번 등록 → 독일어/영어 둘 다)
 *
 * 추가 방법:
 *  1) makePair({ day, slot, pos, de: {...}, en: {...} }) 한 번만 작성
 *  2) 그날 공부한 만큼 pairs[] 에 push (개수 제한 없음, 예문 쪽당 1~2)
 *  3) 새 날짜면 dayVocabDaySources 에 { day, date, pairs } 추가
 *     → 번호(0001…)는 전체 단어장에서 이어서 자동 부여 (ID처럼 사용)
 *
 * de: headword + meaning(ko) + examples[{ de, ko }]
 * en: headword + meaning(de) + examples[{ en, de }]
 */

export const DAY_VOCAB_BOOK_ID = "book-day-vocab";

/** @typedef {'de-ko'|'en-de'} StudyModeId */

export const STUDY_MODES = [
  {
    id: "de-ko",
    label: "독일어",
    pairLabel: "독일어 · 한글",
    targetLang: "de",
    glossLang: "ko",
  },
  {
    id: "en-de",
    label: "영어",
    pairLabel: "영어 · 독일어",
    targetLang: "en",
    glossLang: "de",
  },
];

export function getStudyMode(modeId) {
  return STUDY_MODES.find((m) => m.id === modeId) || STUDY_MODES[0];
}

/** 전역 단어 번호 → 0001, 0002, … */
export function formatWordIndex(wordNo) {
  return String(wordNo).padStart(4, "0");
}

/**
 * UI용 단어 객체 (모드별)
 * @param {object} opts
 * @param {number} opts.wordNo 1부터 이어지는 전역 번호
 * @param {StudyModeId} [opts.mode]
 */
export function makeWord({
  wordNo,
  day,
  slot,
  headword,
  pos = "",
  meaning,
  examples = [],
  synonyms = [],
  antonyms = [],
  derivatives = [],
  mode = "de-ko",
}) {
  const index = formatWordIndex(wordNo);
  const meanings = (Array.isArray(meaning) ? meaning : [meaning]).map(
    (text, i) => ({ text, primary: i === 0, pos: i === 0 ? pos : undefined })
  );
  return {
    id: `${mode}-w${index}`,
    index,
    wordNo,
    day,
    slot,
    headword,
    pos,
    meanings,
    synonyms,
    antonyms,
    examples: examples.slice(0, 2),
    derivatives: derivatives.map((d) =>
      typeof d === "string" ? { word: d } : d
    ),
    checks: [false, false],
  };
}

/**
 * 독·영 한 세트 (소스에 한 번만 적기)
 * @param {object} opts
 * @param {object} opts.de { headword, meaning, examples?, synonyms?, antonyms?, derivatives? }
 * @param {object} opts.en { headword, meaning, examples?, synonyms?, antonyms?, derivatives? }
 */
export function makePair({ day, slot, pos = "", de, en }) {
  return { day, slot, pos, de, en };
}

function projectPair(pair, mode, wordNo) {
  const side = mode === "en-de" ? pair.en : pair.de;
  return makeWord({
    wordNo,
    day: pair.day,
    slot: pair.slot,
    pos: pair.pos,
    headword: side.headword,
    meaning: side.meaning,
    examples: side.examples || [],
    synonyms: side.synonyms || [],
    antonyms: side.antonyms || [],
    derivatives: side.derivatives || [],
    mode,
  });
}

/**
 * @param {object} opts
 * @param {number} [opts.indexStart] 이 DAY 첫 단어의 전역 번호 (1-based)
 */
export function buildDayFromPairs({ day, date, pairs, indexStart = 1 }) {
  return {
    day,
    date,
    pairs,
    indexStart,
    forMode(mode) {
      return {
        day,
        date,
        lang: mode === "en-de" ? "en" : "de",
        meaningLang: mode === "en-de" ? "de" : "ko",
        words: pairs.map((p, i) => projectPair(p, mode, indexStart + i)),
      };
    },
  };
}

/** 여러 DAY를 이어 번호가 끊기지 않게 조립 */
export function buildChainedDays(sources) {
  let nextNo = 1;
  return sources.map(({ day, date, pairs }) => {
    const built = buildDayFromPairs({ day, date, pairs, indexStart: nextNo });
    nextNo += pairs.length;
    return built;
  });
}

const DAY = 1;
const DATE = "2026-10-23";

/** DAY 01 pairs — 여기만 수정하면 독·영 둘 다 반영 */
const day01Pairs = [
  makePair({
    day: DAY,
    slot: 0,
    pos: "동",
    de: {
      headword: "schmiegen",
      meaning: [
        "sich an jdn./etw. ~: 누군가·무언가에 몸을 바짝 붙이다",
        "꼭 달라붙다, 밀착하다",
      ],
      synonyms: ["sich anschmiegen", "sich kuscheln"],
      examples: [
        {
          de: "Das Kind schmiegt sich an seine Mutter.",
          ko: "아이가 엄마에게 꼭 달라붙는다.",
        },
        {
          de: "Die Katze schmiegt sich an mein Bein.",
          ko: "고양이가 내 다리에 몸을 바짝 붙인다.",
        },
      ],
      derivatives: [
        { word: "schmiegsam", pos: "형", meaning: "유연한, 잘 밀착하는" },
        { word: "sich anschmiegen", pos: "동", meaning: "바짝 달라붙다" },
      ],
    },
    en: {
      headword: "nestle / cuddle up (against)",
      meaning: [
        "sich an jdn./etw. schmiegen: sich eng anschmiegen",
        "kuscheln, eng anlehnen",
      ],
      synonyms: ["snuggle", "cuddle"],
      examples: [
        {
          en: "The child nestles against his mother.",
          de: "Das Kind schmiegt sich an seine Mutter.",
        },
        {
          en: "The cat cuddles up against my leg.",
          de: "Die Katze schmiegt sich an mein Bein.",
        },
      ],
      derivatives: [
        { word: "snuggle", pos: "동", meaning: "sich kuscheln, anschmiegen" },
        { word: "cuddle", pos: "동", meaning: "kuscheln" },
      ],
    },
  }),
  makePair({
    day: DAY,
    slot: 1,
    pos: "동",
    de: {
      headword: "schmieren",
      meaning: ["연고·기름 등을 바르다", "(기계에) 윤활유를 치다"],
      synonyms: ["einreiben", "ölen"],
      examples: [
        {
          de: "Er schmiert Salbe auf die Wunde.",
          ko: "그는 상처에 연고를 바른다.",
        },
        {
          de: "Kannst du bitte Butter aufs Brot schmieren?",
          ko: "빵에 버터 좀 발라 줄래?",
        },
      ],
      derivatives: [
        { word: "die Schmiere", pos: "명", meaning: "그리스, (비격식) 뇌물" },
      ],
    },
    en: {
      headword: "smear / grease",
      meaning: ["schmieren: Salbe/Öl auftragen", "(Maschine) ölen, schmieren"],
      synonyms: ["spread", "lubricate"],
      examples: [
        {
          en: "He smears ointment on the wound.",
          de: "Er schmiert Salbe auf die Wunde.",
        },
        {
          en: "Can you please spread butter on the bread?",
          de: "Kannst du bitte Butter aufs Brot schmieren?",
        },
      ],
      derivatives: [
        { word: "grease", pos: "명", meaning: "die Schmiere, das Fett" },
        { word: "ointment", pos: "명", meaning: "die Salbe" },
      ],
    },
  }),
  makePair({
    day: DAY,
    slot: 2,
    pos: "형",
    de: {
      headword: "unterirdisch",
      meaning: ["지하의, 지하에 있는", "부사적으로: 지하에"],
      examples: [
        {
          de: "Tausende Londoner suchten damals Schutz in den unterirdischen Stationen.",
          ko: "당시 수천 명의 런던 시민들이 지하 역사에서 피난처를 찾았다.",
        },
        {
          de: "Die Station liegt unterirdisch.",
          ko: "그 역은 지하에 있다.",
        },
      ],
      derivatives: [
        { word: "unterirdische Stationen", pos: "구", meaning: "지하 역사들" },
        { word: "ein unterirdischer Tunnel", pos: "구", meaning: "지하 터널" },
      ],
    },
    en: {
      headword: "underground",
      meaning: ["unterirdisch", "unter der Erde gelegen"],
      synonyms: ["subterranean", "below ground"],
      examples: [
        {
          en: "Thousands of Londoners sought shelter in the underground stations.",
          de: "Tausende Londoner suchten Schutz in den unterirdischen Stationen.",
        },
        {
          en: "The station is underground.",
          de: "Die Station liegt unterirdisch.",
        },
      ],
      derivatives: [
        { word: "underground station", pos: "구", meaning: "die unterirdische Station" },
        { word: "tunnel", pos: "명", meaning: "der Tunnel" },
      ],
    },
  }),
  makePair({
    day: DAY,
    slot: 3,
    pos: "구",
    de: {
      headword: "dicht gedrängt",
      meaning: "빽빽하게 모인, 서로 바짝 붙어 있는",
      synonyms: ["eng zusammen", "knapp beieinander"],
      examples: [
        {
          de: "Die Menschen stehen dicht gedrängt.",
          ko: "사람들이 빽빽하게 서 있다.",
        },
        {
          de: "Die Fahrgäste sitzen dicht gedrängt in der U-Bahn.",
          ko: "승객들이 지하철 안에 다닥다닥 붙어 앉아 있다.",
        },
      ],
      derivatives: [
        { word: "dicht", pos: "부", meaning: "빽빽하게, 촘촘하게" },
        { word: "drängen", pos: "동", meaning: "밀어붙이다, 밀집시키다" },
        { word: "gedrängt", pos: "형", meaning: "밀집된, 빽빽하게 모인" },
      ],
    },
    en: {
      headword: "closely packed / packed tightly",
      meaning: ["dicht gedrängt", "eng zusammenstehend"],
      synonyms: ["crammed", "jam-packed"],
      examples: [
        {
          en: "The people are standing closely packed.",
          de: "Die Menschen stehen dicht gedrängt.",
        },
        {
          en: "The passengers sit packed tightly in the subway.",
          de: "Die Fahrgäste sitzen dicht gedrängt in der U-Bahn.",
        },
      ],
      derivatives: [
        { word: "packed", pos: "형", meaning: "gedrängt, voll" },
        { word: "crowd together", pos: "동", meaning: "sich drängen" },
      ],
    },
  }),
  makePair({
    day: DAY,
    slot: 4,
    pos: "동",
    de: {
      headword: "ausharren",
      meaning: [
        "버티다, 견디며 머무르다 (힘든 상황에서 오래)",
        "warten보다 어려운 상황을 견딘다는 뉘앙스",
      ],
      synonyms: ["durchhalten", "aushalten"],
      examples: [
        {
          de: "Wir müssen noch zwei Stunden ausharren.",
          ko: "우리는 두 시간 더 버텨야 한다.",
        },
        {
          de: "Die Menschen harrten die ganze Nacht im Keller aus.",
          ko: "사람들은 지하실에서 밤새 버텼다.",
        },
      ],
      derivatives: [
        { word: "harrte aus", pos: "동", meaning: "버텼다 (과거)" },
        { word: "hat ausgeharrt", pos: "동", meaning: "버텼다 (현재완료)" },
      ],
    },
    en: {
      headword: "hold out / endure (in a place)",
      meaning: [
        "ausharren: in einer schwierigen Lage aushalten und bleiben",
        "stärker als bloßes warten",
      ],
      synonyms: ["endure", "stick it out"],
      examples: [
        {
          en: "We have to hold out for two more hours.",
          de: "Wir müssen noch zwei Stunden ausharren.",
        },
        {
          en: "The people held out in the cellar all night.",
          de: "Die Menschen harrten die ganze Nacht im Keller aus.",
        },
      ],
      derivatives: [
        { word: "endure", pos: "동", meaning: "aushalten, ertragen" },
        { word: "hold out", pos: "동", meaning: "durchhalten, ausharren" },
      ],
    },
  }),
  makePair({
    day: DAY,
    slot: 5,
    pos: "명",
    de: {
      headword: "die Anspannung",
      meaning: [
        "긴장, 긴장감, 심리적 압박",
        "Angst(두려움)와 달리 압박·긴장에 초점",
      ],
      antonyms: ["die Entspannung"],
      examples: [
        {
          de: "Die Anspannung steigt.",
          ko: "긴장감이 높아진다.",
        },
        {
          de: "Man spürt die Anspannung im Raum.",
          ko: "방 안에 감도는 긴장감이 느껴진다.",
        },
      ],
      derivatives: [
        { word: "angespannt", pos: "형", meaning: "긴장한, 팽팽한" },
        { word: "sich anspannen", pos: "동", meaning: "긴장하다, 힘을 주다" },
        { word: "die Spannung", pos: "명", meaning: "긴장, 전압, 팽팽함" },
      ],
    },
    en: {
      headword: "tension / strain",
      meaning: [
        "die Anspannung: innere Anspannung, psychischer Druck",
        "anders als Angst: Fokus auf Druck/Spannung",
      ],
      synonyms: ["stress", "pressure"],
      antonyms: ["relaxation"],
      examples: [
        {
          en: "The tension is rising.",
          de: "Die Anspannung steigt.",
        },
        {
          en: "You can feel the tension in the room.",
          de: "Man spürt die Anspannung im Raum.",
        },
      ],
      derivatives: [
        { word: "tense", pos: "형", meaning: "angespannt" },
        { word: "strain", pos: "명", meaning: "die Anspannung, die Belastung" },
      ],
    },
  }),
  makePair({
    day: DAY,
    slot: 6,
    pos: "구",
    de: {
      headword: "ein Zelt aufschlagen",
      meaning: "텐트를 치다, 텐트를 설치하다 (분리동사 aufschlagen)",
      examples: [
        {
          de: "Einige schlagen Zelte auf, um sich einen kleinen Rückzugsraum zu sichern.",
          ko: "일부 사람들은 작은 피신 공간을 확보하기 위해 텐트를 친다.",
        },
        {
          de: "Sie schlugen ihre Zelte auf.",
          ko: "그들은 텐트를 쳤다.",
        },
      ],
      derivatives: [{ word: "das Zelt", pos: "명", meaning: "텐트" }],
    },
    en: {
      headword: "pitch a tent",
      meaning: ["ein Zelt aufschlagen", "ein Zelt aufstellen"],
      examples: [
        {
          en: "Some pitch tents to secure a small retreat space.",
          de: "Einige schlagen Zelte auf, um sich einen kleinen Rückzugsraum zu sichern.",
        },
        {
          en: "They pitched their tents.",
          de: "Sie schlugen ihre Zelte auf.",
        },
      ],
      derivatives: [
        { word: "tent", pos: "명", meaning: "das Zelt" },
        { word: "pitch", pos: "동", meaning: "aufschlagen, aufstellen" },
      ],
    },
  }),
  makePair({
    day: DAY,
    slot: 7,
    pos: "동",
    de: {
      headword: "aufschlagen",
      meaning: [
        "펴다, 펼치다 (책·신문)",
        "(가격을) 올리다; (넘어져) 세게 부딪히다; (달걀을) 깨다",
      ],
      examples: [
        {
          de: "Sie schlägt das Buch auf Seite 20 auf.",
          ko: "그녀는 책을 20쪽으로 펼친다.",
        },
        {
          de: "Er ist gestürzt und mit dem Kopf aufgeschlagen.",
          ko: "그는 넘어져 머리를 세게 부딪혔다.",
        },
      ],
      derivatives: [
        { word: "den Preis aufschlagen", pos: "구", meaning: "가격을 올리다" },
        { word: "Eier aufschlagen", pos: "구", meaning: "달걀을 깨다" },
      ],
    },
    en: {
      headword: "open (a book) / hit / crack (eggs) / mark up (price)",
      meaning: [
        "aufschlagen: Buch aufschlagen; hinfallen und aufschlagen",
        "Preis aufschlagen; Eier aufschlagen",
      ],
      examples: [
        {
          en: "She opens the book to page 20.",
          de: "Sie schlägt das Buch auf Seite 20 auf.",
        },
        {
          en: "He fell and hit his head.",
          de: "Er ist gestürzt und mit dem Kopf aufgeschlagen.",
        },
      ],
      derivatives: [
        { word: "mark up the price", pos: "구", meaning: "den Preis aufschlagen" },
        { word: "crack an egg", pos: "구", meaning: "ein Ei aufschlagen" },
      ],
    },
  }),
  makePair({
    day: DAY,
    slot: 8,
    pos: "구",
    de: {
      headword: "auf eine Idee kommen",
      meaning: "어떤 생각이 떠오르다, 아이디어를 생각해 내다",
      examples: [
        {
          de: "Wie kommst du auf diese Idee?",
          ko: "너는 어떻게 그런 생각을 하게 됐어?",
        },
        {
          de: "Wer ist auf diese Idee gekommen?",
          ko: "누가 이런 생각을 해낸 거야?",
        },
      ],
      derivatives: [{ word: "die Idee", pos: "명", meaning: "생각, 아이디어" }],
    },
    en: {
      headword: "come up with an idea / get the idea",
      meaning: ["auf eine Idee kommen", "sich etwas einfallen lassen"],
      examples: [
        {
          en: "How did you come up with this idea?",
          de: "Wie kommst du auf diese Idee?",
        },
        {
          en: "Who came up with this idea?",
          de: "Wer ist auf diese Idee gekommen?",
        },
      ],
      derivatives: [
        { word: "idea", pos: "명", meaning: "die Idee" },
        { word: "come up with", pos: "동", meaning: "sich ausdenken, auf etwas kommen" },
      ],
    },
  }),
  makePair({
    day: DAY,
    slot: 9,
    pos: "형",
    de: {
      headword: "beklemmend",
      meaning: "마음이 답답하고 무거운; 섬뜩하고 숨 막히는",
      examples: [
        {
          de: "Das ist beklemmend.",
          ko: "그건 마음이 답답하고 무거워.",
        },
        {
          de: "Ist das nicht ein bisschen beklemmend?",
          ko: "그거 조금 섬뜩하고 답답하지 않아?",
        },
      ],
      derivatives: [
        { word: "die Beklemmung", pos: "명", meaning: "압박감, 답답함" },
      ],
    },
    en: {
      headword: "oppressive / unsettling",
      meaning: ["beklemmend", "bedrückend, unheimlich"],
      synonyms: ["stifling", "eerie"],
      examples: [
        {
          en: "That is oppressive.",
          de: "Das ist beklemmend.",
        },
        {
          en: "Isn't that a bit unsettling?",
          de: "Ist das nicht ein bisschen beklemmend?",
        },
      ],
      derivatives: [
        { word: "oppression", pos: "명", meaning: "die Beklemmung, der Druck" },
      ],
    },
  }),
  makePair({
    day: DAY,
    slot: 10,
    pos: "구",
    de: {
      headword: "ohne viel Pomp",
      meaning: "많은 격식이나 화려함 없이, 거창하지 않게",
      synonyms: ["schlicht", "ohne viel Aufhebens"],
      examples: [
        {
          de: "Ich möchte auch eine Seebestattung haben, ohne viel Pomp.",
          ko: "나도 너무 거창하지 않게 해상 장례를 치르고 싶어.",
        },
      ],
      derivatives: [
        { word: "der Pomp", pos: "명", meaning: "화려함, 격식, 장식" },
      ],
    },
    en: {
      headword: "without much pomp / without fuss",
      meaning: ["ohne viel Pomp", "schlicht, ohne großes Aufheben"],
      synonyms: ["simply", "quietly"],
      examples: [
        {
          en: "I would also like a sea burial, without much pomp.",
          de: "Ich möchte auch eine Seebestattung haben, ohne viel Pomp.",
        },
      ],
      derivatives: [
        { word: "pomp", pos: "명", meaning: "der Pomp" },
        { word: "fuss", pos: "명", meaning: "das Aufheben" },
      ],
    },
  }),
  makePair({
    day: DAY,
    slot: 11,
    pos: "명",
    de: {
      headword: "die Seebestattung",
      meaning: "해상 장례, 바다에 유골을 뿌리는 장례",
      examples: [
        {
          de: "Weil ich ohne viel Pomp auch Seebestattung haben möchte.",
          ko: "왜냐하면 나도 거창하지 않게 해상 장례를 치르고 싶기 때문이다.",
        },
        {
          de: "Ich möchte auch eine schlichte Seebestattung.",
          ko: "나도 소박한 해상 장례를 원해.",
        },
      ],
      derivatives: [
        { word: "schlicht", pos: "형", meaning: "소박한, 검소한" },
        { word: "die Bestattung", pos: "명", meaning: "장례, 매장" },
      ],
    },
    en: {
      headword: "sea burial / burial at sea",
      meaning: ["die Seebestattung", "Bestattung auf See"],
      examples: [
        {
          en: "Because I would also like a sea burial without much pomp.",
          de: "Weil ich ohne viel Pomp auch Seebestattung haben möchte.",
        },
        {
          en: "I would also like a simple sea burial.",
          de: "Ich möchte auch eine schlichte Seebestattung.",
        },
      ],
      derivatives: [
        { word: "burial", pos: "명", meaning: "die Bestattung" },
        { word: "simple / plain", pos: "형", meaning: "schlicht" },
      ],
    },
  }),
  makePair({
    day: DAY,
    slot: 12,
    pos: "구",
    de: {
      headword: "wenn es so weit ist",
      meaning: "그때가 되면, 때가 되면",
      examples: [
        {
          de: "Wenn es so weit ist, sage ich dir Bescheid.",
          ko: "때가 되면 너에게 알려줄게.",
        },
      ],
      derivatives: [
        { word: "Bescheid sagen", pos: "구", meaning: "알려 주다, 통보하다" },
      ],
    },
    en: {
      headword: "when the time comes",
      meaning: ["wenn es so weit ist", "wenn der Zeitpunkt da ist"],
      examples: [
        {
          en: "When the time comes, I'll let you know.",
          de: "Wenn es so weit ist, sage ich dir Bescheid.",
        },
      ],
      derivatives: [
        { word: "let someone know", pos: "구", meaning: "Bescheid sagen" },
      ],
    },
  }),
  makePair({
    day: DAY,
    slot: 13,
    pos: "구",
    de: {
      headword: "jemandem zur Seite stehen",
      meaning: "누군가의 곁에서 도와주다, 지지해 주다",
      synonyms: ["unterstützen", "helfen"],
      examples: [
        {
          de: "Ich stehe dir zur Seite.",
          ko: "내가 네 곁에서 도와줄게.",
        },
        {
          de: "Sie steht ihrer Mutter zur Seite.",
          ko: "그녀는 어머니를 곁에서 돕는다.",
        },
      ],
    },
    en: {
      headword: "stand by someone / be there for someone",
      meaning: ["jemandem zur Seite stehen", "jdn. unterstützen"],
      synonyms: ["support", "help"],
      examples: [
        {
          en: "I'll stand by you.",
          de: "Ich stehe dir zur Seite.",
        },
        {
          en: "She stands by her mother.",
          de: "Sie steht ihrer Mutter zur Seite.",
        },
      ],
    },
  }),
  makePair({
    day: DAY,
    slot: 14,
    pos: "구",
    de: {
      headword: "sich auf etwas einlassen",
      meaning:
        "어떤 제안·상황을 받아들이다, 한번 해 보기로 하다, 관여하기로 하다",
      examples: [
        {
          de: "Wenn du dich darauf einlässt, kann es gut werden.",
          ko: "네가 한번 받아들이고 해 본다면 잘될 수도 있어.",
        },
        {
          de: "Ich lasse mich darauf nicht ein.",
          ko: "나는 그것에 응하지 않을 거야.",
        },
      ],
      derivatives: [
        {
          word: "sich einlassen auf",
          pos: "동",
          meaning: "…에 응하다, 관여하다",
        },
      ],
    },
    en: {
      headword: "go along with something / get involved in",
      meaning: [
        "sich auf etwas einlassen",
        "sich auf einen Vorschlag/eine Situation einlassen",
      ],
      examples: [
        {
          en: "If you go along with it, it might turn out well.",
          de: "Wenn du dich darauf einlässt, kann es gut werden.",
        },
        {
          en: "I won't get involved in that.",
          de: "Ich lasse mich darauf nicht ein.",
        },
      ],
      derivatives: [
        { word: "get involved", pos: "동", meaning: "sich einlassen" },
      ],
    },
  }),
  makePair({
    day: DAY,
    slot: 15,
    pos: "명",
    de: {
      headword: "die Urne",
      meaning: "유골함, 납골함",
      examples: [
        {
          de: "Die Urne wird beigesetzt.",
          ko: "유골함이 안치된다.",
        },
        {
          de: "Die Asche kommt in eine Urne.",
          ko: "유골이 유골함에 담긴다.",
        },
      ],
      derivatives: [
        { word: "die Asche", pos: "명", meaning: "재, 유골" },
        { word: "beisetzen", pos: "동", meaning: "안치하다, 매장하다" },
      ],
    },
    en: {
      headword: "urn",
      meaning: ["die Urne", "Behälter für die Asche"],
      examples: [
        {
          en: "The urn is interred.",
          de: "Die Urne wird beigesetzt.",
        },
        {
          en: "The ashes go into an urn.",
          de: "Die Asche kommt in eine Urne.",
        },
      ],
      derivatives: [
        { word: "ashes", pos: "명", meaning: "die Asche" },
        { word: "inter / bury", pos: "동", meaning: "beisetzen" },
      ],
    },
  }),
  makePair({
    day: DAY,
    slot: 16,
    pos: "구",
    de: {
      headword: "sich von etwas unterscheiden",
      meaning: "sich unterscheiden von + 3격: ~와 다르다",
      examples: [
        {
          de: "Das unterscheidet sich von meinem Leben.",
          ko: "그것은 내 삶과 다르다.",
        },
        {
          de: "Die beiden Städte unterscheiden sich voneinander.",
          ko: "두 도시는 서로 다르다.",
        },
      ],
      derivatives: [
        { word: "unterscheiden", pos: "동", meaning: "구별하다, 다르다" },
        { word: "unterschied", pos: "동", meaning: "달랐다 (과거형)" },
        { word: "der Unterschied", pos: "명", meaning: "차이, 차이점" },
      ],
    },
    en: {
      headword: "differ from / be different from",
      meaning: ["sich von etwas unterscheiden", "sich unterscheiden von + Dat."],
      examples: [
        {
          en: "That differs from my life.",
          de: "Das unterscheidet sich von meinem Leben.",
        },
        {
          en: "The two cities differ from each other.",
          de: "Die beiden Städte unterscheiden sich voneinander.",
        },
      ],
      derivatives: [
        { word: "difference", pos: "명", meaning: "der Unterschied" },
        { word: "distinguish", pos: "동", meaning: "unterscheiden" },
      ],
    },
  }),
  makePair({
    day: DAY,
    slot: 17,
    pos: "형",
    de: {
      headword: "anhaltend",
      meaning: [
        "계속되는, 지속되는 (한 번이 아니라 이어지는)",
        "정관사 뒤: die anhaltenden Angriffe (-en 어미)",
      ],
      examples: [
        {
          de: "die anhaltenden Angriffe Russlands",
          ko: "러시아의 계속되는 공격들",
        },
        {
          de: "Es gibt anhaltenden Regen und anhaltende Probleme.",
          ko: "계속되는 비와 지속되는 문제들이 있다.",
        },
      ],
      derivatives: [
        { word: "anhaltende Angriffe", pos: "구", meaning: "계속되는 공격들" },
        { word: "anhaltende Schmerzen", pos: "구", meaning: "지속되는 통증" },
        { word: "anhalten", pos: "동", meaning: "계속되다, 멈추다" },
      ],
    },
    en: {
      headword: "ongoing / persistent / continuous",
      meaning: ["anhaltend", "dauernd, fortgesetzt"],
      synonyms: ["lasting", "continued"],
      examples: [
        {
          en: "Russia's ongoing attacks",
          de: "die anhaltenden Angriffe Russlands",
        },
        {
          en: "There is continuous rain and ongoing problems.",
          de: "Es gibt anhaltenden Regen und anhaltende Probleme.",
        },
      ],
      derivatives: [
        { word: "persistent pain", pos: "구", meaning: "anhaltende Schmerzen" },
        { word: "persist", pos: "동", meaning: "anhalten, fortbestehen" },
      ],
    },
  }),
  makePair({
    day: DAY,
    slot: 18,
    pos: "구",
    de: {
      headword: "Der Gaumen juckt.",
      meaning: "입천장이 가렵다 (알레르기·과민 반응 등)",
      examples: [
        {
          de: "Der Gaumen juckt.",
          ko: "입천장이 가렵다.",
        },
        {
          de: "Nach dem Essen juckt mir der Gaumen.",
          ko: "먹고 나서 입천장이 가렵다.",
        },
      ],
      derivatives: [
        { word: "der Gaumen", pos: "명", meaning: "입천장" },
        { word: "jucken", pos: "동", meaning: "가렵다" },
      ],
    },
    en: {
      headword: "My palate is itchy. / The palate itches.",
      meaning: ["Der Gaumen juckt.", "Jucken am Gaumen (z. B. Allergie)"],
      examples: [
        {
          en: "My palate is itchy.",
          de: "Der Gaumen juckt.",
        },
        {
          en: "After eating, my palate itches.",
          de: "Nach dem Essen juckt mir der Gaumen.",
        },
      ],
      derivatives: [
        { word: "palate", pos: "명", meaning: "der Gaumen" },
        { word: "itch", pos: "동", meaning: "jucken" },
      ],
    },
  }),
  makePair({
    day: DAY,
    slot: 19,
    pos: "구",
    de: {
      headword: "Der Hals schwillt an.",
      meaning: "목이 붓다 (분리동사 anschwellen)",
      examples: [
        {
          de: "Der Hals schwillt an.",
          ko: "목이 붓는다.",
        },
        {
          de: "Mir ist der Hals angeschwollen.",
          ko: "목이 부었다.",
        },
      ],
      derivatives: [
        { word: "der Hals", pos: "명", meaning: "목" },
        { word: "anschwellen", pos: "동", meaning: "붓다, 부어오르다" },
      ],
    },
    en: {
      headword: "My throat is swelling. / The throat swells.",
      meaning: ["Der Hals schwillt an.", "anschwellen (trennbar)"],
      examples: [
        {
          en: "My throat is swelling.",
          de: "Der Hals schwillt an.",
        },
        {
          en: "My throat is swollen.",
          de: "Mir ist der Hals angeschwollen.",
        },
      ],
      derivatives: [
        { word: "throat", pos: "명", meaning: "der Hals" },
        { word: "swell / swell up", pos: "동", meaning: "anschwellen" },
      ],
    },
  }),
];

const DAY2 = 2;
const DATE2 = "2026-10-24";

/** DAY 02 pairs */
const day02Pairs = [
  makePair({
    day: DAY2,
    slot: 0,
    pos: "동",
    de: {
      headword: "verleugnen",
      meaning: [
        "부인하다, 부정하다; (사람·관계를) 모른 척하다, 배신하다",
        "ich wurde verleugnet: 나는 부인당했다 / 모른 척당했다",
      ],
      synonyms: ["leugnen", "abweisen"],
      examples: [
        {
          de: "Ich wurde verleugnet.",
          ko: "나는 부인당했다. / 모른 척당했다.",
        },
        {
          de: "Er hat mich vor seinen Freunden verleugnet.",
          ko: "그는 친구들 앞에서 나를 모른 척했다.",
        },
      ],
      derivatives: [
        { word: "die Verleugnung", pos: "명", meaning: "부인, 부정, 배신" },
        { word: "leugnen", pos: "동", meaning: "부인하다, 부정하다" },
      ],
    },
    en: {
      headword: "deny / disown / renounce",
      meaning: [
        "verleugnen: abstreiten; jdn. verleugnen = sich von jdm. distanzieren",
        "I was denied / disowned: Ich wurde verleugnet.",
      ],
      synonyms: ["disown", "repudiate"],
      examples: [
        {
          en: "I was denied. / I was disowned.",
          de: "Ich wurde verleugnet.",
        },
        {
          en: "He disowned me in front of his friends.",
          de: "Er hat mich vor seinen Freunden verleugnet.",
        },
      ],
      derivatives: [
        { word: "denial", pos: "명", meaning: "die Verleugnung, das Leugnen" },
        { word: "disown", pos: "동", meaning: "verleugnen, sich lossagen von" },
      ],
    },
  }),
  makePair({
    day: DAY2,
    slot: 1,
    pos: "구",
    de: {
      headword: "im Weg stehen",
      meaning: [
        "가로막다, 방해가 되다",
        "jemandem / etwas im Weg stehen: …을 가로막다",
      ],
      synonyms: ["hindern", "im Wege sein"],
      examples: [
        {
          de: "Nichts steht uns mehr im Weg.",
          ko: "이제 우리를 가로막는 것은 없다.",
        },
        {
          de: "Die Angst steht ihm im Weg.",
          ko: "두려움이 그를 가로막고 있다.",
        },
      ],
      derivatives: [
        { word: "der Weg", pos: "명", meaning: "길, 길목" },
        { word: "aus dem Weg gehen", pos: "구", meaning: "피하다, 비키다" },
      ],
    },
    en: {
      headword: "stand in the way (of)",
      meaning: [
        "im Weg stehen",
        "jemandem / etwas im Weg stehen = im Wege sein",
      ],
      synonyms: ["block", "hinder"],
      examples: [
        {
          en: "Nothing stands in our way anymore.",
          de: "Nichts steht uns mehr im Weg.",
        },
        {
          en: "Fear is standing in his way.",
          de: "Die Angst steht ihm im Weg.",
        },
      ],
      derivatives: [
        { word: "way", pos: "명", meaning: "der Weg" },
        { word: "get out of the way", pos: "구", meaning: "aus dem Weg gehen" },
      ],
    },
  }),
];

/** 새 날짜 추가: 이 배열에 { day, date, pairs } 만 push */
const dayVocabDaySources = [
  { day: DAY, date: DATE, pairs: day01Pairs },
  { day: DAY2, date: DATE2, pairs: day02Pairs },
];


/** 날짜순 DAY 목록 (번호 0001… 전역 연속) */
export const dayVocabDays = buildChainedDays(dayVocabDaySources);

export const dayVocabDay01 = dayVocabDays[0];
export const dayVocabDay02 = dayVocabDays[1];

/** 하위 호환 · 미리보기용 스냅샷 */
export const dayVocabSampleDay = dayVocabDay01.forMode("de-ko");
export const dayVocabEnDeSampleDay = dayVocabDay01.forMode("en-de");

/** mode → day 목록 */
export const dayVocabByMode = {
  "de-ko": dayVocabDays.map((d) => d.forMode("de-ko")),
  "en-de": dayVocabDays.map((d) => d.forMode("en-de")),
};

/** @param {StudyModeId} modeId */
export function listDaysForMode(modeId) {
  const list = dayVocabByMode[modeId] || [];
  return [...list].sort((a, b) => String(b.date).localeCompare(String(a.date)));
}

/**
 * @param {StudyModeId} modeId
 * @param {string} date YYYY-MM-DD
 */
export function findDayByDate(modeId, date) {
  const list = dayVocabByMode[modeId] || [];
  return list.find((d) => d.date === date) || list[0] || null;
}
