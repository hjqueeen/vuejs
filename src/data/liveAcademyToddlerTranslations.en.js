/** Live Academy Toddler — 영어 학습용 번역 */

export const liveAcademyToddlerExplanationEn = {
  "card-alltag-reise-wie-war": "How was your trip?",
  "card-alltag-reise-schoene-reise": "Did you have a nice trip?",
  "card-alltag-reise-wohin": "Where did you go?",
  "card-alltag-reise-wie-dorthin": "How did you get there?",
  "card-alltag-reise-geflogen": "Did you fly there?",
  "card-alltag-reise-flugzeug": "Did you take a plane?",
  "card-alltag-reise-zug": "Did you take a train?",
  "card-alltag-reise-auto": "Did you drive there?",
  "card-alltag-reise-begleitung":
    "Did you go alone?\nDid you go with your family?\nDid you go with a friend?\nDid you go with your wife?\nDid you go with your husband?\nDid you go with your girlfriend?\nDid you go with your boyfriend?",
  "card-alltag-reise-mit-wem": "Who did you go with?",
  "card-alltag-reise-wie-lange": "How long were you there?",
  "card-alltag-reise-gewesen": "Must have been nice.\nMust have been fun.",
  "card-alltag-reise-erstes-mal": "Was it your first time there?",
  "card-alltag-reise-lieblings": "What was your favorite part?",
  "card-alltag-reise-wetter": "How was the weather while you were there?",
  "card-alltag-reise-teuer": "Sounds like it was an expensive trip.",
  "card-lat-sleep-1":
    "A: Hey. It's already 8 o'clock. Are you up?\nB: Yeah. I'm up. Thanks.",
  "card-lat-sleep-2":
    "A: Are you OK? You look tired.\nB: Yeah. I couldn't sleep last night.\nA: What kept you up?\nB: Noisy neighbors.",
  "card-lat-sleep-3":
    "A: Is Jamie still up? I want to say good night to him.\nB: He just went to bed. Let me go see if he's still awake…. I think he's asleep. I can wake him.\nA: No, don't. Just let him sleep.",
  "card-lat-sleep-4":
    "A: Oh, you're up early.\nB: Actually, I didn't sleep.\nA: You were up all night?\nB: Yeah. I had a lot of work to do.",
  "card-lat-sleep-5":
    "A: I'll stay with mom for a while. Why don't you go get some sleep. You haven't slept in almost 2 whole days.\nB: OK. Thanks. Could you wake me up in a couple of hours?\nA: Sure.",
  "card-lat-lesson001-1": "I work out at home by myself two hours a day.",
  "card-lat-lesson001-2": "I study at home every day.",
  "card-lat-lesson001-3": "I work in an office almost every day.",
  "card-lat-lesson001-4": "I cook at home on weekends.",
  "card-lat-lesson001-5": "I study mainly with books six hours a day.",
  "card-lat-lesson001-6": "I work out at home pretty well by myself.",
  "card-lat-lesson001-7": "I cook at home once in a while.",
  "card-lat-lesson001-8": "I work in an office six hours a day.",
  "card-lat-lesson001-9": "I study at home every day mainly with books.",
  "card-lat-lesson001-10": "I work out on weekends by myself.",
  "card-lat-lesson002-1": "He works hard.",
  "card-lat-lesson002-2": "He doesn't work hard.",
  "card-lat-lesson002-3":
    "She cooks pretty well. But she doesn't cook every day.",
  "card-lat-lesson002-4": "He works every day.",
  "card-lat-lesson002-5": "She studies at home 2 hours a day.",
  "card-lat-lesson002-6": "Jane cooks pretty well.",
  "card-lat-lesson002-7": "He exercises by himself at home 2 hours a day.",
  "card-lat-lesson002-8": "He doesn't work.",
  "card-lat-lesson002-9": "She doesn't study.",
  "card-lat-lesson002-10": "Jane doesn't cook.",
  "card-lat-lesson003-1":
    "I work almost 12 hours a day.\n+ It's tough.\n\nI don't work on weekends.\n+ I'm lucky.",
  "card-lat-lesson003-2":
    "She exercises every day at home by herself.\n+ She's very healthy.\n+ She's in very good shape.",
  "card-lat-lesson003-3":
    "She doesn't eat any junk food.\n+ It's amazing!",
};

/** @type {Record<string, Record<string, { wordEn: string, examples: { en: string }[] }>>} */
export const liveAcademyToddlerVocabEn = {
  "card-lat-lesson003-1": {
    "von zu Hause arbeiten": {
      wordEn: "work from home",
      examples: [
        {
          en: "I work in the office 3 days a week and work from home 2 days.",
        },
        {
          en: "But it's tough because I have to work in German.",
        },
      ],
    },
  },
  "card-lat-lesson003-2": {
    "mindestens dreimal die Woche trainieren": {
      wordEn: "exercise at least three times a week",
      examples: [
        {
          en: "I haven't been in good health since last year. So I try to exercise at least three times a week.",
        },
      ],
    },
  },
  "card-lat-lesson003-3": {
    "nicht aufhören können, Junkfood zu essen": {
      wordEn: "can't stop eating junk food",
      examples: [
        {
          en: "But still, I can't seem to stop eating junk food. It's not good.",
        },
      ],
    },
  },
};

/** @param {object} card */
export function enrichLiveAcademyToddlerCardForLang(card, targetLang) {
  if (!card || targetLang !== "en") return card;

  const explanationEn = liveAcademyToddlerExplanationEn[card.id];
  const vocabMap = liveAcademyToddlerVocabEn[card.id] || {};

  const vocabulary = (card.vocabulary || []).map((item) => {
    const en = vocabMap[item.word];
    if (!en) return { ...item };
    return {
      ...item,
      wordEn: en.wordEn,
      examples: (item.examples || []).map((ex, i) => ({
        ...ex,
        en: en.examples?.[i]?.en || ex.en,
      })),
    };
  });

  return {
    ...card,
    ...(explanationEn ? { explanationEn } : {}),
    ...(vocabulary.length ? { vocabulary } : {}),
  };
}
