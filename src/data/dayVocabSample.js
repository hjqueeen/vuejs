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
  makePair({
    day: DAY2,
    slot: 2,
    pos: "동",
    de: {
      headword: "anheuern",
      meaning: ["(사람·선원 등을) 고용하다, 채용하다"],
      synonyms: ["engagieren", "einstellen"],
      examples: [
        {
          de: "Sie haben mich angeheuert / engagiert.",
          ko: "나를 고용·기용했다.",
        },
        {
          de: "Die Firma hat neue Leute angeheuert.",
          ko: "그 회사가 새 사람들을 채용했다.",
        },
      ],
      derivatives: [
        { word: "angeheuert", pos: "동", meaning: "고용했다 (Partizip II)" },
        {
          word: "sich engagieren",
          pos: "동",
          meaning: "사회·정치 등에 적극 참여하다 (anheuern과 다른 뜻)",
        },
      ],
    },
    en: {
      headword: "hire / take on",
      meaning: ["anheuern: jdn. einstellen"],
      synonyms: ["employ", "engage"],
      examples: [
        {
          en: "They hired / engaged me.",
          de: "Sie haben mich angeheuert / engagiert.",
        },
        {
          en: "The company hired new people.",
          de: "Die Firma hat neue Leute angeheuert.",
        },
      ],
      derivatives: [
        { word: "hire", pos: "동", meaning: "anheuern, einstellen" },
        {
          word: "get involved / commit oneself",
          pos: "동",
          meaning: "sich engagieren (sozial/politisch — anderer Sinn)",
        },
      ],
    },
  }),
  makePair({
    day: DAY2,
    slot: 3,
    pos: "부",
    de: {
      headword: "ausgerechnet",
      meaning: [
        "하필, 하필이면, 공교롭게도 (부사 · 일상에서 가장 흔함)",
        "참고: ausrechnen의 과거분사 — 계산된, 계산했다",
      ],
      synonyms: ["gerade", "ironischerweise"],
      examples: [
        {
          de: "Der Schlüssel zur Weltherrschaft ist ausgerechnet ein Schlüssel.",
          ko: "세계 지배의 열쇠가 하필 열쇠이다.",
        },
        {
          de: "Ausgerechnet heute habe ich meinen Ausweis vergessen.",
          ko: "하필 오늘 신분증을 잊어버렸다.",
        },
      ],
      derivatives: [
        {
          word: "ausrechnen",
          pos: "동",
          meaning: "계산하다 (예: Die Kosten sind ausgerechnet.)",
        },
      ],
    },
    en: {
      headword: "of all things / of all people / wouldn't you know",
      meaning: [
        "ausgerechnet (Adv.): of all things — betont das Unerwartete",
        "auch zu ausrechnen: calculated",
      ],
      synonyms: ["ironically", "of all places"],
      examples: [
        {
          en: "The key to world domination is, of all things, a key.",
          de: "Der Schlüssel zur Weltherrschaft ist ausgerechnet ein Schlüssel.",
        },
        {
          en: "Of all days, I forgot my ID today.",
          de: "Ausgerechnet heute habe ich meinen Ausweis vergessen.",
        },
      ],
      derivatives: [
        { word: "calculate", pos: "동", meaning: "ausrechnen" },
        { word: "of all things", pos: "구", meaning: "ausgerechnet (Adv.)" },
      ],
    },
  }),
  makePair({
    day: DAY2,
    slot: 4,
    pos: "구",
    de: {
      headword: "zur Sache kommen",
      meaning: "본론으로 들어가다, 요점으로 넘어가다",
      synonyms: ["zum Punkt kommen"],
      examples: [
        {
          de: "Kommen wir zur Sache, wenn’s recht ist.",
          ko: "괜찮으시다면, 본론으로 들어가죠.",
        },
      ],
      derivatives: [
        { word: "die Sache", pos: "명", meaning: "일, 문제, 주제" },
        { word: "zur Sache", pos: "구", meaning: "본론으로, 주제에" },
      ],
    },
    en: {
      headword: "get down to business / come to the point",
      meaning: ["zur Sache kommen", "zum Punkt kommen"],
      synonyms: ["cut to the chase"],
      examples: [
        {
          en: "Let's get down to business, if that's all right.",
          de: "Kommen wir zur Sache, wenn’s recht ist.",
        },
      ],
      derivatives: [
        { word: "matter / business", pos: "명", meaning: "die Sache" },
        { word: "to the point", pos: "구", meaning: "zur Sache" },
      ],
    },
  }),
  makePair({
    day: DAY2,
    slot: 5,
    pos: "구",
    de: {
      headword: "wenn’s recht ist",
      meaning: [
        "괜찮으시다면, 실례가 안 된다면",
        "wenn es recht ist 의 구어 축약 — 상대 동의를 구하는 완충 표현",
      ],
      synonyms: ["wenn es Ihnen recht ist", "falls Sie nichts dagegen haben"],
      examples: [
        {
          de: "Ich gehe schon mal vor, wenn’s recht ist.",
          ko: "괜찮으시다면, 저 먼저 가 볼게요.",
        },
      ],
      derivatives: [
        { word: "wenn es recht ist", pos: "구", meaning: "정식 표기 (축약 전)" },
        { word: "recht sein", pos: "동", meaning: "괜찮다, 마음에 들다" },
      ],
    },
    en: {
      headword: "if that's all right / if you don't mind",
      meaning: [
        "wenn’s recht ist (= wenn es recht ist)",
        "höfliche Absicherung",
      ],
      synonyms: ["if that's okay with you"],
      examples: [
        {
          en: "I'll go ahead, if you don't mind.",
          de: "Ich gehe schon mal vor, wenn’s recht ist.",
        },
      ],
      derivatives: [
        { word: "if that's all right", pos: "구", meaning: "wenn’s recht ist" },
      ],
    },
  }),
  makePair({
    day: DAY2,
    slot: 6,
    pos: "구",
    de: {
      headword: "einen Vertrag aufsetzen",
      meaning: "계약서를 작성하다, 계약서 초안을 만들다",
      synonyms: ["einen Vertrag erstellen", "einen Vertrag ausarbeiten"],
      examples: [
        {
          de: "Können Sie den Vertrag aufsetzen?",
          ko: "계약서 작성해 주시겠어요?",
        },
        {
          de: "Der Anwalt setzt den Vertrag auf.",
          ko: "변호사가 계약서를 작성한다.",
        },
      ],
      derivatives: [
        { word: "der Vertrag", pos: "명", meaning: "계약, 계약서" },
        { word: "aufsetzen", pos: "동", meaning: "(문서 등을) 작성하다" },
      ],
    },
    en: {
      headword: "draw up a contract",
      meaning: ["einen Vertrag aufsetzen", "einen Vertragsentwurf erstellen"],
      synonyms: ["draft a contract"],
      examples: [
        {
          en: "Can you draw up the contract?",
          de: "Können Sie den Vertrag aufsetzen?",
        },
        {
          en: "The lawyer is drawing up the contract.",
          de: "Der Anwalt setzt den Vertrag auf.",
        },
      ],
      derivatives: [
        { word: "contract", pos: "명", meaning: "der Vertrag" },
        { word: "draw up / draft", pos: "동", meaning: "aufsetzen" },
      ],
    },
  }),
  makePair({
    day: DAY2,
    slot: 7,
    pos: "부",
    de: {
      headword: "offenbar",
      meaning: [
        "아무래도 ~인 것 같다, 보아하니 (추측)",
        "분명히, 명백히",
      ],
      synonyms: ["anscheinend", "offensichtlich"],
      examples: [
        {
          de: "Er ist offenbar krank.",
          ko: "아무래도 아픈 것 같다.",
        },
        {
          de: "Das ist offenbar falsch.",
          ko: "그건 분명히 틀렸다.",
        },
      ],
      derivatives: [
        { word: "offensichtlich", pos: "형", meaning: "명백한, 분명한" },
      ],
    },
    en: {
      headword: "apparently / evidently / clearly",
      meaning: [
        "offenbar: anscheinend / offensichtlich",
        "vermutend oder klar feststellend",
      ],
      synonyms: ["seemingly", "obviously"],
      examples: [
        {
          en: "He's apparently ill.",
          de: "Er ist offenbar krank.",
        },
        {
          en: "That's clearly wrong.",
          de: "Das ist offenbar falsch.",
        },
      ],
      derivatives: [
        { word: "obvious", pos: "형", meaning: "offensichtlich" },
      ],
    },
  }),
  makePair({
    day: DAY2,
    slot: 8,
    pos: "동",
    de: {
      headword: "stiften",
      meaning: [
        "기부하다; (재단·상 등을) 설립하다",
        "(상태·분위기 등을) 일으키다, 만들다 — Unruhe/Frieden stiften",
      ],
      synonyms: ["spenden", "gründen"],
      examples: [
        {
          de: "Wenn man annimmt, dass 30 Prozent gar nicht stiften …",
          ko: "30%는 아예 기부하지 않는다고 가정하면 …",
        },
        {
          de: "Er hat eine Stiftung gestiftet.",
          ko: "그는 재단을 설립했다.",
        },
      ],
      derivatives: [
        { word: "die Stiftung", pos: "명", meaning: "재단, 기부" },
        { word: "Unruhe stiften", pos: "구", meaning: "소란을 일으키다" },
      ],
    },
    en: {
      headword: "donate / endow / found; cause (trouble)",
      meaning: [
        "stiften: spenden, eine Stiftung gründen",
        "auch: Unruhe/Frieden stiften",
      ],
      synonyms: ["donate", "establish"],
      examples: [
        {
          en: "If one assumes that 30 percent don't donate at all …",
          de: "Wenn man annimmt, dass 30 Prozent gar nicht stiften …",
        },
        {
          en: "He endowed / founded a foundation.",
          de: "Er hat eine Stiftung gestiftet.",
        },
      ],
      derivatives: [
        { word: "foundation", pos: "명", meaning: "die Stiftung" },
        { word: "cause unrest", pos: "구", meaning: "Unruhe stiften" },
      ],
    },
  }),
  makePair({
    day: DAY2,
    slot: 9,
    pos: "부",
    de: {
      headword: "weitaus",
      meaning: "훨씬, 단연히 (비교급 앞에서 정도를 강하게 함)",
      synonyms: ["viel", "bei Weitem"],
      examples: [
        {
          de: "… und die meisten weitaus weniger geben, als sie vorher ansagen,",
          ko: "… 그리고 대부분은 미리 말한 것보다 훨씬 적게 낸다,",
        },
        {
          de: "Das ist weitaus besser als erwartet.",
          ko: "그건 예상보다 훨씬 낫다.",
        },
      ],
      derivatives: [
        {
          word: "ansagen",
          pos: "동",
          meaning: "미리 말하다, 공언하다, 예고하다",
        },
        { word: "weitaus mehr / weniger", pos: "구", meaning: "훨씬 더 / 훨씬 덜" },
      ],
    },
    en: {
      headword: "by far / far (more/less)",
      meaning: [
        "weitaus: verstärkt einen Komparativ",
        "weitaus weniger = far less",
      ],
      synonyms: ["far", "much"],
      examples: [
        {
          en: "… and most give far less than they previously announce,",
          de: "… und die meisten weitaus weniger geben, als sie vorher ansagen,",
        },
        {
          en: "That's far better than expected.",
          de: "Das ist weitaus besser als erwartet.",
        },
      ],
      derivatives: [
        {
          word: "announce / declare beforehand",
          pos: "동",
          meaning: "ansagen",
        },
        { word: "far less / far more", pos: "구", meaning: "weitaus weniger / mehr" },
      ],
    },
  }),
  makePair({
    day: DAY2,
    slot: 10,
    pos: "구",
    de: {
      headword: "die Zeit anhalten",
      meaning: "시간을 멈추다",
      examples: [
        {
          de: "Dumm, dass man die Zeit nicht anhalten kann.",
          ko: "시간을 멈출 수 없다니, 바보 같지.",
        },
        {
          de: "Ich wünschte, ich könnte die Zeit anhalten.",
          ko: "시간을 멈출 수 있으면 좋겠어.",
        },
      ],
      derivatives: [
        {
          word: "anhalten",
          pos: "동",
          meaning: "멈추다; 세우다; 계속되다 (단독 뜻은 다양)",
        },
      ],
    },
    en: {
      headword: "stop time / freeze time",
      meaning: ["die Zeit anhalten"],
      examples: [
        {
          en: "It's dumb that you can't stop time.",
          de: "Dumm, dass man die Zeit nicht anhalten kann.",
        },
        {
          en: "I wish I could stop time.",
          de: "Ich wünschte, ich könnte die Zeit anhalten.",
        },
      ],
      derivatives: [
        { word: "stop / halt", pos: "동", meaning: "anhalten" },
      ],
    },
  }),
  makePair({
    day: DAY2,
    slot: 11,
    pos: "구",
    de: {
      headword: "Ein Jammer ist das.",
      meaning: [
        "정말 안타까워. / 참 유감이야.",
        "일상에서는 Schade. 가 더 흔함 — 한탄·문장형 표현",
      ],
      synonyms: ["Es ist ein Jammer.", "Das ist schade."],
      examples: [
        {
          de: "Ein Jammer ist das.",
          ko: "정말 안타까워. / 참 유감이야.",
        },
        {
          de: "Es ist ein Jammer, dass er nicht kommen kann.",
          ko: "그가 올 수 없다니 참 안타깝다.",
        },
      ],
      derivatives: [
        { word: "der Jammer", pos: "명", meaning: "안타까움, 한탄" },
        { word: "schade", pos: "형", meaning: "안타까운 (일상 표현: Schade.)" },
      ],
    },
    en: {
      headword: "What a pity. / That's a shame.",
      meaning: [
        "Ein Jammer ist das. / Es ist ein Jammer.",
        "im Alltag oft: Schade.",
      ],
      synonyms: ["What a shame.", "Too bad."],
      examples: [
        {
          en: "What a pity. / That's a shame.",
          de: "Ein Jammer ist das.",
        },
        {
          en: "It's a pity that he can't come.",
          de: "Es ist ein Jammer, dass er nicht kommen kann.",
        },
      ],
      derivatives: [
        { word: "pity / shame", pos: "명", meaning: "der Jammer" },
        { word: "too bad / pity", pos: "구", meaning: "schade" },
      ],
    },
  }),
  makePair({
    day: DAY2,
    slot: 12,
    pos: "동",
    de: {
      headword: "jemanden versetzen",
      meaning: [
        "(약속을) 바람맞히다, 나타나 주지 않다",
        "다른 뜻: 전근시키다, 옮기다 — 여기선 약속 맥락",
      ],
      synonyms: ["jemanden stehen lassen", "nicht erscheinen"],
      examples: [
        {
          de: "Nein. Man hat mich versetzt.",
          ko: "아니. 나를 바람맞혔어.",
        },
        {
          de: "Sie hat mich gestern Abend versetzt.",
          ko: "그녀가 어제 저녁 나를 바람맞혔다.",
        },
      ],
      derivatives: [
        { word: "die Versetzung", pos: "명", meaning: "전근; (학교) 진급" },
      ],
    },
    en: {
      headword: "stand someone up",
      meaning: [
        "jemanden versetzen (Termin)",
        "auch: versetzen = transfer (Job)",
      ],
      synonyms: ["blow someone off"],
      examples: [
        {
          en: "No. They stood me up.",
          de: "Nein. Man hat mich versetzt.",
        },
        {
          en: "She stood me up last night.",
          de: "Sie hat mich gestern Abend versetzt.",
        },
      ],
      derivatives: [
        { word: "transfer / relocation", pos: "명", meaning: "die Versetzung" },
      ],
    },
  }),
  makePair({
    day: DAY2,
    slot: 13,
    pos: "구",
    de: {
      headword: "den Philanthropen spielen",
      meaning: "자선가 행세하다, 자선가인 척하다",
      examples: [
        {
          de: "Reiche spielen gern den Philanthropen.",
          ko: "부자들은 자선가 행세하기를 좋아한다.",
        },
        {
          de: "Aber wenn’s um den Scheck geht, sind sie nicht mehr da.",
          ko: "그런데 수표(돈) 얘기가 되면, 그들은 더 이상 없다.",
        },
      ],
      derivatives: [
        { word: "der Philanthrop", pos: "명", meaning: "자선가, 박애주의자" },
        {
          word: "wenn es um etwas geht",
          pos: "구",
          meaning: "…가 문제/핵심일 때",
        },
      ],
    },
    en: {
      headword: "play the philanthropist",
      meaning: ["den Philanthropen spielen", "sich als Wohltäter geben"],
      examples: [
        {
          en: "Rich people like to play the philanthropist.",
          de: "Reiche spielen gern den Philanthropen.",
        },
        {
          en: "But when it comes to the check, they're gone.",
          de: "Aber wenn’s um den Scheck geht, sind sie nicht mehr da.",
        },
      ],
      derivatives: [
        { word: "philanthropist", pos: "명", meaning: "der Philanthrop" },
        {
          word: "when it comes to …",
          pos: "구",
          meaning: "wenn es um … geht",
        },
      ],
    },
  }),
  makePair({
    day: DAY2,
    slot: 14,
    pos: "구",
    de: {
      headword: "wenn es um etwas geht",
      meaning: "…가 문제일 때, …에 관한 일이면, …가 핵심이면",
      synonyms: ["wenn’s um etwas geht"],
      examples: [
        {
          de: "Aber wenn’s um den Scheck geht, sind sie nicht mehr da.",
          ko: "그런데 수표(돈) 얘기가 되면, 그들은 더 이상 없다.",
        },
        {
          de: "Wenn es um Geld geht, wird er ernst.",
          ko: "돈 얘기가 되면 그는 진지해진다.",
        },
      ],
      derivatives: [
        { word: "der Scheck", pos: "명", meaning: "수표 (여기선 실제 돈·기부금)" },
      ],
    },
    en: {
      headword: "when it comes to something",
      meaning: ["wenn es um etwas geht", "wenn’s um etwas geht"],
      examples: [
        {
          en: "But when it comes to the check, they're gone.",
          de: "Aber wenn’s um den Scheck geht, sind sie nicht mehr da.",
        },
        {
          en: "When it comes to money, he gets serious.",
          de: "Wenn es um Geld geht, wird er ernst.",
        },
      ],
      derivatives: [
        { word: "check / cheque", pos: "명", meaning: "der Scheck" },
      ],
    },
  }),
  makePair({
    day: DAY2,
    slot: 15,
    pos: "동",
    de: {
      headword: "improvisieren",
      meaning: "즉흥으로 하다, 즉석에서 해내다",
      examples: [
        {
          de: "Das kann man nicht improvisieren.",
          ko: "그건 즉흥으로 할 수 없다.",
        },
        {
          de: "Wir müssen improvisieren.",
          ko: "우리는 즉흥으로 해야 한다.",
        },
      ],
      derivatives: [
        { word: "die Improvisation", pos: "명", meaning: "즉흥, 즉흥 연주/연기" },
      ],
    },
    en: {
      headword: "improvise",
      meaning: ["improvisieren"],
      examples: [
        {
          en: "You can't improvise that.",
          de: "Das kann man nicht improvisieren.",
        },
        {
          en: "We'll have to improvise.",
          de: "Wir müssen improvisieren.",
        },
      ],
      derivatives: [
        { word: "improvisation", pos: "명", meaning: "die Improvisation" },
      ],
    },
  }),
  makePair({
    day: DAY2,
    slot: 16,
    pos: "명",
    de: {
      headword: "die Provision",
      meaning: "(판매·중개) 수수료, 커미션",
      synonyms: ["die Kommission"],
      examples: [
        {
          de: "Er bekommt eine Provision für jeden Verkauf.",
          ko: "그는 판매마다 수수료를 받는다.",
        },
        {
          de: "Die Provision beträgt zehn Prozent.",
          ko: "수수료는 10%이다.",
        },
      ],
      derivatives: [
        {
          word: "provisorisch",
          pos: "형",
          meaning: "임시의 (뜻은 다름 — 헷갈리지 말 것)",
        },
      ],
    },
    en: {
      headword: "commission",
      meaning: ["die Provision", "Vermittlungsgebühr"],
      synonyms: ["fee", "cut"],
      examples: [
        {
          en: "He gets a commission on every sale.",
          de: "Er bekommt eine Provision für jeden Verkauf.",
        },
        {
          en: "The commission is ten percent.",
          de: "Die Provision beträgt zehn Prozent.",
        },
      ],
      derivatives: [
        {
          word: "provisional",
          pos: "형",
          meaning: "provisorisch (anderer Sinn)",
        },
      ],
    },
  }),
];

const DAY3 = 3;
const DATE3 = "2026-10-25";

/** DAY 03 — Agile/실무 독일어 */
const day03Pairs = [
  makePair({
    day: DAY3,
    slot: 0,
    pos: "구",
    de: {
      headword: "sich auf etwas erstrecken",
      meaning: "~에까지 미치다, ~까지 확장되다, ~에 걸쳐 있다 / 적용되다",
      examples: [
        {
          de: "Diese Praktiken erstrecken sich auch auf verschiedene Aspekte ihrer Geschäftstätigkeit.",
          ko: "이러한 실천 방법들은 기업 활동의 다양한 측면에도 적용된다.",
        },
        {
          de: "Das Projekt erstreckt sich über drei Jahre.",
          ko: "그 프로젝트는 3년에 걸쳐 있다.",
        },
      ],
      derivatives: [
        { word: "sich erstrecken", pos: "동", meaning: "뻗다, 미치다, 걸치다" },
      ],
    },
    en: {
      headword: "extend to / cover / span",
      meaning: ["sich auf etwas erstrecken"],
      examples: [
        {
          en: "These practices also extend to various aspects of their business.",
          de: "Diese Praktiken erstrecken sich auch auf verschiedene Aspekte ihrer Geschäftstätigkeit.",
        },
        {
          en: "The project spans three years.",
          de: "Das Projekt erstreckt sich über drei Jahre.",
        },
      ],
    },
  }),
  makePair({
    day: DAY3,
    slot: 1,
    pos: "동",
    de: {
      headword: "aufgliedern",
      meaning: "나누다, 세분화하다 (aufgegliedert werden = 세분화되다)",
      synonyms: ["unterteilen", "aufteilen"],
      examples: [
        {
          de: "Komplexe Projekte werden in kleinere Teilabschnitte aufgegliedert.",
          ko: "복잡한 프로젝트가 더 작은 단계들로 세분화된다.",
        },
        {
          de: "Wir gliedern das Thema in drei Teile auf.",
          ko: "우리는 주제를 세 부분으로 나눈다.",
        },
      ],
      derivatives: [
        { word: "die Aufgliederung", pos: "명", meaning: "세분화, 구분" },
      ],
    },
    en: {
      headword: "break down / subdivide",
      meaning: ["aufgliedern", "aufgegliedert werden"],
      examples: [
        {
          en: "Complex projects are broken down into smaller sections.",
          de: "Komplexe Projekte werden in kleinere Teilabschnitte aufgegliedert.",
        },
        {
          en: "We break the topic down into three parts.",
          de: "Wir gliedern das Thema in drei Teile auf.",
        },
      ],
    },
  }),
  makePair({
    day: DAY3,
    slot: 2,
    pos: "동",
    de: {
      headword: "vorankommen",
      meaning: [
        "진전되다, 앞으로 나아가다, 발전하다",
        "Wie kommst du voran? / mit etwas vorankommen",
      ],
      synonyms: ["Fortschritte machen"],
      examples: [
        {
          de: "Agile bedeutet, schnell voranzukommen.",
          ko: "Agile은 빠르게 진전하는 것을 의미한다.",
        },
        {
          de: "Wie kommst du mit dem Projekt voran? — Ich komme gut voran.",
          ko: "프로젝트는 어떻게 돼 가? — 잘 진행되고 있어.",
        },
      ],
      derivatives: [
        { word: "mit etwas vorankommen", pos: "구", meaning: "…이 잘 진행되다" },
        { word: "Fortschritte machen", pos: "구", meaning: "진전을 이루다" },
      ],
    },
    en: {
      headword: "make progress / get ahead",
      meaning: ["vorankommen", "Wie kommst du voran?"],
      synonyms: ["make progress"],
      examples: [
        {
          en: "Agile means making progress quickly.",
          de: "Agile bedeutet, schnell voranzukommen.",
        },
        {
          en: "How are you getting on with the project? — I'm making good progress.",
          de: "Wie kommst du mit dem Projekt voran? — Ich komme gut voran.",
        },
      ],
    },
  }),
  makePair({
    day: DAY3,
    slot: 3,
    pos: "명",
    de: {
      headword: "der Leitfaden",
      meaning: "가이드, 안내서, 지침서",
      synonyms: ["der Guide", "die Anleitung"],
      examples: [
        {
          de: "Dieser Leitfaden stellt die neun besten Optionen vor.",
          ko: "이 가이드는 9가지 최고의 선택지를 소개한다.",
        },
        {
          de: "Im Leitfaden finden Sie alle wichtigen Schritte.",
          ko: "안내서에서 모든 중요한 단계를 찾을 수 있다.",
        },
      ],
    },
    en: {
      headword: "guide / guidebook / guideline",
      meaning: ["der Leitfaden"],
      examples: [
        {
          en: "This guide presents the nine best options.",
          de: "Dieser Leitfaden stellt die neun besten Optionen vor.",
        },
        {
          en: "You'll find all the key steps in the guide.",
          de: "Im Leitfaden finden Sie alle wichtigen Schritte.",
        },
      ],
    },
  }),
  makePair({
    day: DAY3,
    slot: 4,
    pos: "구",
    de: {
      headword: "fundierte Entscheidung",
      meaning: "충분한 근거에 바탕을 둔 결정, 신중하고 합리적인 결정",
      examples: [
        {
          de: "die nötigen Informationen für eine fundierte Entscheidung",
          ko: "합리적인 결정을 내리기 위한 필요한 정보",
        },
        {
          de: "Wir brauchen mehr Daten für eine fundierte Entscheidung.",
          ko: "근거 있는 결정을 위해 데이터가 더 필요하다.",
        },
      ],
      derivatives: [
        { word: "fundiert", pos: "형", meaning: "근거가 충분한, 탄탄한" },
        { word: "die Entscheidung", pos: "명", meaning: "결정" },
      ],
    },
    en: {
      headword: "informed / well-founded decision",
      meaning: ["fundierte Entscheidung"],
      examples: [
        {
          en: "the information needed for an informed decision",
          de: "die nötigen Informationen für eine fundierte Entscheidung",
        },
        {
          en: "We need more data for a well-founded decision.",
          de: "Wir brauchen mehr Daten für eine fundierte Entscheidung.",
        },
      ],
    },
  }),
  makePair({
    day: DAY3,
    slot: 5,
    pos: "구",
    de: {
      headword: "den Wert von etwas erkennen",
      meaning: "~의 가치를 알아보다, ~의 중요성을 인식하다",
      examples: [
        {
          de: "Viele Unternehmen haben den Wert von Agile-Projektmanagementpraktiken erkannt.",
          ko: "많은 기업들이 애자일 프로젝트 관리 방법의 가치를 인식했다.",
        },
        {
          de: "Sie hat den Wert guter Bildung erkannt.",
          ko: "그녀는 좋은 교육의 가치를 깨달았다.",
        },
      ],
      derivatives: [
        { word: "der Wert", pos: "명", meaning: "가치" },
        { word: "erkennen", pos: "동", meaning: "인식하다, 알아보다" },
      ],
    },
    en: {
      headword: "recognize the value of something",
      meaning: ["den Wert von etwas erkennen"],
      examples: [
        {
          en: "Many companies have recognized the value of agile project management practices.",
          de: "Viele Unternehmen haben den Wert von Agile-Projektmanagementpraktiken erkannt.",
        },
        {
          en: "She recognized the value of a good education.",
          de: "Sie hat den Wert guter Bildung erkannt.",
        },
      ],
    },
  }),
  makePair({
    day: DAY3,
    slot: 6,
    pos: "동",
    de: {
      headword: "evaluieren",
      meaning: "평가하다, 검토하다, 분석하다",
      synonyms: ["bewerten", "prüfen"],
      examples: [
        {
          de: "Wir müssen die Ergebnisse evaluieren.",
          ko: "우리는 결과를 평가해야 한다.",
        },
        {
          de: "Das Unternehmen evaluiert verschiedene Softwarelösungen.",
          ko: "그 회사는 다양한 소프트웨어 솔루션을 평가하고 있다.",
        },
      ],
      derivatives: [
        { word: "die Evaluierung", pos: "명", meaning: "평가" },
      ],
    },
    en: {
      headword: "evaluate",
      meaning: ["evaluieren", "bewerten"],
      examples: [
        {
          en: "We have to evaluate the results.",
          de: "Wir müssen die Ergebnisse evaluieren.",
        },
        {
          en: "The company is evaluating various software solutions.",
          de: "Das Unternehmen evaluiert verschiedene Softwarelösungen.",
        },
      ],
      derivatives: [
        { word: "evaluation", pos: "명", meaning: "die Evaluierung" },
      ],
    },
  }),
  makePair({
    day: DAY3,
    slot: 7,
    pos: "구",
    de: {
      headword: "einer Anforderung gerecht werden",
      meaning: "요구사항을 충족하다, 요구에 부응하다",
      synonyms: ["eine Anforderung erfüllen"],
      examples: [
        {
          de: "Die Software wird den Anforderungen der Kunden gerecht.",
          ko: "그 소프트웨어는 고객의 요구사항을 충족한다.",
        },
        {
          de: "Das Produkt wird den Erwartungen der Nutzer gerecht.",
          ko: "이 제품은 사용자들의 기대에 부응한다.",
        },
      ],
      derivatives: [
        { word: "die Anforderung", pos: "명", meaning: "요구사항, 요구조건" },
        {
          word: "den Erwartungen gerecht werden",
          pos: "구",
          meaning: "기대에 부응하다",
        },
        {
          word: "den Bedürfnissen gerecht werden",
          pos: "구",
          meaning: "필요를 충족하다",
        },
      ],
    },
    en: {
      headword: "meet a requirement / live up to",
      meaning: [
        "einer Anforderung gerecht werden",
        "den Erwartungen gerecht werden",
      ],
      examples: [
        {
          en: "The software meets the customers' requirements.",
          de: "Die Software wird den Anforderungen der Kunden gerecht.",
        },
        {
          en: "The product lives up to users' expectations.",
          de: "Das Produkt wird den Erwartungen der Nutzer gerecht.",
        },
      ],
      derivatives: [
        { word: "requirement", pos: "명", meaning: "die Anforderung" },
      ],
    },
  }),
  makePair({
    day: DAY3,
    slot: 8,
    pos: "구",
    de: {
      headword: "im großen Maßstab",
      meaning: "대규모로, 조직 전체 규모에서",
      antonyms: ["im kleinen Maßstab"],
      examples: [
        {
          de: "Vorlagen für agile Zusammenarbeit im großen Maßstab erstellen",
          ko: "대규모 애자일 협업을 위한 템플릿을 만들다",
        },
        {
          de: "Das System wird bereits im großen Maßstab eingesetzt.",
          ko: "그 시스템은 이미 대규모로 사용되고 있다.",
        },
      ],
      derivatives: [
        { word: "der Maßstab", pos: "명", meaning: "척도, 기준; 규모, 축척" },
        { word: "im kleinen Maßstab", pos: "구", meaning: "소규모로" },
      ],
    },
    en: {
      headword: "on a large scale",
      meaning: ["im großen Maßstab", "im kleinen Maßstab = on a small scale"],
      examples: [
        {
          en: "create templates for agile collaboration on a large scale",
          de: "Vorlagen für agile Zusammenarbeit im großen Maßstab erstellen",
        },
        {
          en: "The system is already being used on a large scale.",
          de: "Das System wird bereits im großen Maßstab eingesetzt.",
        },
      ],
      derivatives: [
        { word: "scale / standard", pos: "명", meaning: "der Maßstab" },
      ],
    },
  }),
  makePair({
    day: DAY3,
    slot: 9,
    pos: "동",
    de: {
      headword: "sich überschneiden",
      meaning: "서로 겹치다, 교차하다, (범위·기능이) 중복되다",
      synonyms: ["sich überlappen"],
      examples: [
        {
          de: "Viele Funktionen überschneiden sich, und die Produkte entwickeln sich ständig weiter.",
          ko: "많은 기능들이 서로 겹치고, 제품들은 끊임없이 발전한다.",
        },
        {
          de: "Die Grenzen zwischen den Gruppen sind allerdings nicht immer eindeutig.",
          ko: "다만 그룹 간의 경계가 항상 분명한 것은 아니다.",
        },
      ],
      derivatives: [
        { word: "die Überschneidung", pos: "명", meaning: "겹침, 중복" },
      ],
    },
    en: {
      headword: "overlap / intersect",
      meaning: ["sich überschneiden", "sich überlappen"],
      synonyms: ["overlap"],
      examples: [
        {
          en: "Many features overlap, and the products keep evolving.",
          de: "Viele Funktionen überschneiden sich, und die Produkte entwickeln sich ständig weiter.",
        },
        {
          en: "The boundaries between the groups aren't always clear, though.",
          de: "Die Grenzen zwischen den Gruppen sind allerdings nicht immer eindeutig.",
        },
      ],
      derivatives: [
        { word: "overlap (n.)", pos: "명", meaning: "die Überschneidung" },
      ],
    },
  }),
  makePair({
    day: DAY3,
    slot: 10,
    pos: "동",
    de: {
      headword: "sich überlappen",
      meaning: "서로 겹치다, 오버랩되다 (sich überschneiden과 비슷한 뜻)",
      synonyms: ["sich überschneiden"],
      examples: [
        {
          de: "Die Gruppen überlappen sich, und die Produkte entwickeln sich weiter.",
          ko: "그룹들이 서로 겹치고, 제품들은 계속 발전한다.",
        },
        {
          de: "GitHub Projects war früher nur eine Liste und ist heute ein richtiges Board.",
          ko: "GitHub Projects는 예전엔 단순한 목록이었고, 지금은 제대로 된 보드다.",
        },
      ],
      derivatives: [
        { word: "die Überlappung", pos: "명", meaning: "겹침, 오버랩" },
      ],
    },
    en: {
      headword: "overlap",
      meaning: ["sich überlappen", "sich überschneiden"],
      synonyms: ["intersect"],
      examples: [
        {
          en: "The groups overlap, and the products keep developing.",
          de: "Die Gruppen überlappen sich, und die Produkte entwickeln sich weiter.",
        },
        {
          en: "GitHub Projects used to be just a list and is now a real board.",
          de: "GitHub Projects war früher nur eine Liste und ist heute ein richtiges Board.",
        },
      ],
      derivatives: [
        { word: "overlap (n.)", pos: "명", meaning: "die Überlappung" },
      ],
    },
  }),
  makePair({
    day: DAY3,
    slot: 11,
    pos: "동",
    de: {
      headword: "etwas vertreiben",
      meaning: [
        "여기서: 무엇이 사라지도록 하다, 쫓아내다, 없애다",
        "다른 뜻: (상품을) 판매·유통하다",
      ],
      synonyms: ["wegschaffen", "beseitigen"],
      examples: [
        {
          de: "Wir müssen die Fehler so schnell wie möglich vertreiben.",
          ko: "우리는 오류를 최대한 빨리 없애야 한다.",
        },
        {
          de: "Die Sonne vertreibt die Wolken.",
          ko: "태양이 구름을 몰아낸다.",
        },
      ],
      derivatives: [
        { word: "der Vertrieb", pos: "명", meaning: "판매, 유통 (다른 맥락)" },
      ],
    },
    en: {
      headword: "drive away / get rid of",
      meaning: [
        "etwas vertreiben: dafür sorgen, dass etwas weggeht",
        "auch: distribute / sell (Waren)",
      ],
      synonyms: ["dispel", "chase away"],
      examples: [
        {
          en: "We have to get rid of the errors as quickly as possible.",
          de: "Wir müssen die Fehler so schnell wie möglich vertreiben.",
        },
        {
          en: "The sun drives the clouds away.",
          de: "Die Sonne vertreibt die Wolken.",
        },
      ],
    },
  }),
  makePair({
    day: DAY3,
    slot: 12,
    pos: "동",
    de: {
      headword: "etwas deponieren",
      meaning: "보관하다, 맡기다; (짐을) 내려놓다, 적재하다",
      synonyms: ["lagern", "abladen", "hinterlegen"],
      examples: [
        {
          de: "Die Unterlagen werden im Archiv deponiert.",
          ko: "서류는 아카이브에 보관된다.",
        },
        {
          de: "Die Waren wurden am Lagerplatz deponiert.",
          ko: "상품이 창고 장소에 내려져 보관되었다.",
        },
      ],
      derivatives: [
        { word: "das Depot", pos: "명", meaning: "보관소, 창고" },
        { word: "die Deponie", pos: "명", meaning: "쓰레기 매립지 (관련 어휘)" },
      ],
    },
    en: {
      headword: "deposit / store / drop off",
      meaning: ["etwas deponieren: lagern; abladen"],
      synonyms: ["store", "unload"],
      examples: [
        {
          en: "The documents are deposited in the archive.",
          de: "Die Unterlagen werden im Archiv deponiert.",
        },
        {
          en: "The goods were dropped off at the storage site.",
          de: "Die Waren wurden am Lagerplatz deponiert.",
        },
      ],
    },
  }),
  makePair({
    day: DAY3,
    slot: 13,
    pos: "동",
    de: {
      headword: "etwas verbauen",
      meaning: [
        "여기서: 무엇을 어디에 장착하다, 넣어 설치하다 (einbauen)",
        "다른 뜻: (공간을) 가리다/막아버리다; (재료를) 다 써버리다",
      ],
      synonyms: ["einbauen", "installieren"],
      examples: [
        {
          de: "Die neue Funktion wird in die App verbaut.",
          ko: "새 기능이 앱에 넣어 설치된다.",
        },
        {
          de: "Der Motor ist fest im Gehäuse verbaut.",
          ko: "모터가 하우징에 단단히 장착되어 있다.",
        },
      ],
      derivatives: [
        { word: "einbauen", pos: "동", meaning: "장착하다, 내장하다" },
      ],
    },
    en: {
      headword: "install / build in / integrate",
      meaning: [
        "etwas verbauen: hier etwas in etwas einbauen",
        "auch: block (space); use up (materials)",
      ],
      synonyms: ["build in", "install"],
      examples: [
        {
          en: "The new feature is built into the app.",
          de: "Die neue Funktion wird in die App verbaut.",
        },
        {
          en: "The motor is firmly installed in the housing.",
          de: "Der Motor ist fest im Gehäuse verbaut.",
        },
      ],
    },
  }),
  makePair({
    day: DAY3,
    slot: 14,
    pos: "명",
    de: {
      headword: "der Konsens",
      meaning: "합의, 의견 일치",
      synonyms: ["die Einigung", "die Übereinstimmung"],
      examples: [
        {
          de: "Den Konsens im Team findet aber nur das Gespräch.",
          ko: "팀의 합의는 결국 대화로만 이루어진다.",
        },
        {
          de: "Wir brauchen einen Konsens über das Vorgehen.",
          ko: "우리는 진행 방식에 대한 합의가 필요하다.",
        },
      ],
      derivatives: [
        { word: "konsensfähig", pos: "형", meaning: "합의 가능한" },
      ],
    },
    en: {
      headword: "consensus",
      meaning: ["der Konsens", "agreement"],
      synonyms: ["agreement"],
      examples: [
        {
          en: "But only conversation finds consensus in the team.",
          de: "Den Konsens im Team findet aber nur das Gespräch.",
        },
        {
          en: "We need a consensus on how to proceed.",
          de: "Wir brauchen einen Konsens über das Vorgehen.",
        },
      ],
    },
  }),
  makePair({
    day: DAY3,
    slot: 15,
    pos: "명",
    de: {
      headword: "die Sepsis",
      meaning: "패혈증 (전신 염증 반응을 동반한 중증 감염)",
      examples: [
        {
          de: "Der Patient wurde wegen einer Sepsis behandelt.",
          ko: "환자는 패혈증으로 치료를 받았다.",
        },
        {
          de: "Eine unbehandelte Infektion kann zu einer Sepsis führen.",
          ko: "치료하지 않은 감염은 패혈증으로 이어질 수 있다.",
        },
      ],
      derivatives: [
        { word: "septisch", pos: "형", meaning: "패혈성의, 감염성의" },
      ],
    },
    en: {
      headword: "sepsis",
      meaning: ["die Sepsis", "blood poisoning / systemic infection"],
      examples: [
        {
          en: "The patient was treated for sepsis.",
          de: "Der Patient wurde wegen einer Sepsis behandelt.",
        },
        {
          en: "An untreated infection can lead to sepsis.",
          de: "Eine unbehandelte Infektion kann zu einer Sepsis führen.",
        },
      ],
      derivatives: [
        { word: "septic", pos: "형", meaning: "septisch" },
      ],
    },
  }),
  makePair({
    day: DAY3,
    slot: 16,
    pos: "명",
    de: {
      headword: "das Verhör",
      meaning: "심문, 취조",
      synonyms: ["die Befragung", "die Vernehmung"],
      examples: [
        {
          de: "Das Verhör dauerte mehrere Stunden.",
          ko: "심문은 몇 시간 동안 이어졌다.",
        },
        {
          de: "Er wurde zum Verhör vorgeladen.",
          ko: "그는 심문을 위해 소환되었다.",
        },
      ],
      derivatives: [
        { word: "verhören", pos: "동", meaning: "심문하다, 취조하다" },
      ],
    },
    en: {
      headword: "interrogation",
      meaning: ["das Verhör", "questioning"],
      synonyms: ["questioning", "cross-examination"],
      examples: [
        {
          en: "The interrogation lasted several hours.",
          de: "Das Verhör dauerte mehrere Stunden.",
        },
        {
          en: "He was summoned for questioning.",
          de: "Er wurde zum Verhör vorgeladen.",
        },
      ],
      derivatives: [
        { word: "interrogate", pos: "동", meaning: "verhören" },
      ],
    },
  }),
  makePair({
    day: DAY3,
    slot: 17,
    pos: "명",
    de: {
      headword: "der Leichnam",
      meaning: "시신, 시체 (격식·공식 표현)",
      synonyms: ["die Leiche"],
      examples: [
        {
          de: "Der Leichnam wurde zur Untersuchung gebracht.",
          ko: "시신은 조사를 위해 옮겨졌다.",
        },
        {
          de: "Die Polizei fand den Leichnam im Wald.",
          ko: "경찰이 숲에서 시신을 발견했다.",
        },
      ],
      derivatives: [
        { word: "die Leiche", pos: "명", meaning: "시체 (더 일상·구어적)" },
      ],
    },
    en: {
      headword: "corpse / dead body",
      meaning: ["der Leichnam", "die Leiche"],
      synonyms: ["body", "cadaver"],
      examples: [
        {
          en: "The body was taken for examination.",
          de: "Der Leichnam wurde zur Untersuchung gebracht.",
        },
        {
          en: "The police found the body in the forest.",
          de: "Die Polizei fand den Leichnam im Wald.",
        },
      ],
    },
  }),
];

/** 새 날짜 추가: 이 배열에 { day, date, pairs } 만 push */
const dayVocabDaySources = [
  { day: DAY, date: DATE, pairs: day01Pairs },
  { day: DAY2, date: DATE2, pairs: day02Pairs },
  { day: DAY3, date: DATE3, pairs: day03Pairs },
];

/** 날짜순 DAY 목록 (번호 0001… 전역 연속) */
export const dayVocabDays = buildChainedDays(dayVocabDaySources);

export const dayVocabDay01 = dayVocabDays[0];
export const dayVocabDay02 = dayVocabDays[1];
export const dayVocabDay03 = dayVocabDays[2];

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
