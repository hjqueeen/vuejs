/** Alltag 책 — 영어 학습용 번역 (카드 id / vocabulary word 키) */

export const alltagExplanationEn = {
  "card-alltag-thema-zu-gross":
    "I wrote chapters 2 and 4, and I got the feeling that our topic scope might be too big. Especially in chapter 4, an incredible number of function names come up, and I couldn't explain them all.",
  "card-alltag-ki-kapitel2":
    "When I was writing chapter 4, I noticed way too much was left unexplained — so I first told the AI to write chapter 2, the theory part. I wanted to try whether it can be explained better there.",
  "card-alltag-von-vorne":
    "So I got the feeling that maybe we should just go back to the very first version … I probably overthought it.",
  "card-alltag-erste-version-theorie":
    "If you haven't written the chapters yet and there's still no reply from the professor: what if we go back to the very first version? I feel like we could focus more on learning programming languages and going through code — instead of writing about external things like app size, performance, and user experience. Instead, explain more theory and learn and compare the structure of the different languages.",
  "card-alltag-gastrosoft-thema":
    "So, our project topic is called Gastrosoft — conception and development of software for gastronomic businesses. Our system covers the complete workflows: from ordering by the guest via order confirmation to managing orders on the restaurant side.",
  "card-alltag-gastrosoft-android":
    "Right now we've largely finished the Android version we developed with Kotlin. The version can already implement the most important core functions — for example ordering by the guest, selecting dishes, and creating the order. The whole workflow already works, and this is what the app looks like now, for example.",
  "card-alltag-praxis-literatur":
    "First off, nice that you properly prepared slides. It wasn't really necessary, but of course it makes things even clearer. I have a question: first off — in itself there's nothing against starting with the practical part and pushing the literature research a bit further back.",
  "card-alltag-preview-stelle": "Should I just remove the preview on the spot?",
  "card-alltag-werkbank-anpassung":
    "Are you coming to the Werkbank adjustment we discussed today?",
  "card-alltag-delete-id-mitliefern":
    "Delete isn't working right now because after the reload we're missing the ID from the function — without it we don't call DELETE at all. Can you include id and sourceId per item? Then it should work.",
  "card-alltag-werkbank-aura-sodass":
    "In the Werkbank in Aura you can use all the URLs we already have for the backend, so that it's functional.",
  "card-alltag-headerfavoriten-einbauen":
    "Can you integrate headerFavoriten today? Then I can properly test the backend before I do an update — it's already updated for reference.",
  "card-alltag-paper-fokus":
    "Where is the actual focus of our paper — on developing the restaurant ordering app or on the language comparison? If the language comparison is the real goal, we could go into the language comparison more strongly in the motivation, right? Could something like the problem statement in comparing cross-platform vs. native serve as our motivation?",
  "card-alltag-paper-titel":
    "I wonder whether we can still change the title of the paper. We've already submitted the title. Then maybe staying with the original topic would also be a good option.",
  "card-alltag-paper-sprachvergleich":
    "Regarding the email to the professor, I'm wondering if I overthought it. If comparing three languages under 6000 words is too much, should we go back to the original Kotlin-and-Swift comparison and focus the paper more on the language comparison itself?",
  "card-alltag-paper-ziel":
    "What does the professor actually expect from us in this paper — and what are the goals we need to achieve?",
};

/** @type {Record<string, Record<string, { wordEn: string, meaningEn?: string, examples: { en: string }[] }>>} */
export const alltagVocabEn = {
  "card-alltag-thema-zu-gross": {
    auftauchen: {
      wordEn: "come up / appear",
      examples: [
        { en: "Yesterday an old friend suddenly came up again." },
        { en: "At the meeting a new topic suddenly came up." },
      ],
    },
  },
  "card-alltag-ki-kapitel2": {
    geblieben: {
      wordEn: "remained / stayed",
      examples: [
        { en: "The question has remained open until today." },
        { en: "In the end we stayed with the first idea." },
      ],
    },
  },
  "card-alltag-von-vorne": {
    "ob … nicht … sollten": {
      wordEn: "shouldn't we …? (soft suggestion)",
      examples: [
        { en: "I got the feeling that maybe we should simply take a break." },
        { en: "She suggested that maybe we should change the plan first." },
      ],
    },
  },
  "card-alltag-gastrosoft-thema": {
    abdecken: {
      wordEn: "cover (scope)",
      examples: [
        { en: "The course covers all important basics." },
        { en: "With one module we can already cover many use cases." },
      ],
    },
    "von … über … bis": {
      wordEn: "from … via … to",
      examples: [
        { en: "We work on the project from Monday via Wednesday to Friday." },
        { en: "From planning via development to testing — that's how our workflow runs." },
      ],
    },
  },
  "card-alltag-gastrosoft-android": {
    weitgehend: {
      wordEn: "largely / to a large extent",
      examples: [
        { en: "The project is largely done, only small bugs left." },
        { en: "The requirements are largely clear." },
      ],
    },
    umsetzen: {
      wordEn: "implement / realize",
      examples: [
        { en: "We can finally implement the idea in code now." },
        { en: "The app implements the complete ordering process digitally." },
      ],
    },
  },
  "card-alltag-praxis-literatur": {
    "an sich": {
      wordEn: "in itself / as such",
      examples: [
        { en: "That was in itself not a bad idea, just badly timed." },
        { en: "In itself the system is stable, but today it's still stuck." },
      ],
    },
    "an sich spricht (ja) nichts dagegen": {
      wordEn: "in itself nothing speaks against it",
      examples: [
        {
          en: "In itself nothing speaks against starting with the practical part and pushing the literature research a bit further back.",
        },
        { en: "In itself nothing speaks against moving the meeting to next week." },
        { en: "If we show the prototype first — in itself nothing speaks against that." },
      ],
    },
    "nach hinten hängen": {
      wordEn: "push back / postpone",
      examples: [
        { en: "push the literature research a bit further back" },
        { en: "Can we push the tests back a little more?" },
      ],
    },
  },
  "card-alltag-preview-stelle": {
    "an der Stelle": {
      wordEn: "on the spot / right there",
      examples: [
        { en: "Can we fix the faulty section on the spot instead of rewriting everything?" },
        { en: "On the spot I changed the typo right away." },
      ],
    },
  },
  "card-alltag-werkbank-anpassung": {
    Anpassung: {
      wordEn: "adjustment / customization",
      examples: [
        { en: "The adjustment to the layout still takes a few hours." },
        { en: "Before the release we still need a small adjustment to the export." },
      ],
    },
  },
  "card-alltag-delete-id-mitliefern": {
    aufrufen: {
      wordEn: "call / invoke",
      examples: [
        { en: "Without a token we can't call the API at all." },
        { en: "Please call the helper function before you save." },
      ],
    },
    mitliefern: {
      wordEn: "include / supply along with",
      examples: [
        { en: "Can you also include the metadata when exporting?" },
        { en: "Each item should include a unique sourceId." },
      ],
    },
  },
  "card-alltag-werkbank-aura-sodass": {
    sodass: {
      wordEn: "so that",
      examples: [
        { en: "I'll explain it slowly again so that everyone can follow." },
        { en: "We adjusted the configuration so that the export works again." },
      ],
    },
  },
  "card-alltag-headerfavoriten-einbauen": {
    einbauen: {
      wordEn: "integrate / build in",
      examples: [
        { en: "Can you still integrate validation before the release?" },
        { en: "We built logging directly into the API." },
      ],
    },
    vernünftig: {
      wordEn: "properly / sensibly",
      examples: [
        { en: "Please test it properly first before you merge it." },
        { en: "Without documentation we can't use the feature properly." },
      ],
    },
    "zum Nachschauen": {
      wordEn: "for reference / to look up",
      examples: [
        { en: "I put the current API docs in the repo for reference." },
        { en: "The example requests are ready in the README for reference." },
      ],
    },
  },
  "card-alltag-paper-fokus": {
    "eingehen auf": {
      wordEn: "go into / address",
      examples: [
        { en: "In chapter 2 we go into the architecture in detail." },
        { en: "Could we go into the language comparison more strongly in the motivation?" },
      ],
    },
    fungieren: {
      wordEn: "serve as / act as",
      examples: [
        { en: "The app serves as a prototype and at the same time acts as a comparison object." },
        { en: "Could the problem statement serve as motivation?" },
      ],
    },
  },
  "card-alltag-paper-titel": {
    einreichen: {
      wordEn: "submit / hand in",
      examples: [
        { en: "We've already submitted the paper title to the examination office." },
        { en: "We have to submit the draft by Friday." },
      ],
    },
    "beim … bleiben": {
      wordEn: "stick with / stay with",
      examples: [
        { en: "Maybe we'll simply stay with the original topic." },
        { en: "After the feedback we stayed with the first approach." },
      ],
    },
  },
  "card-alltag-paper-sprachvergleich": {
    "zu tief nachdenken": {
      wordEn: "overthink",
      examples: [
        { en: "Maybe I simply overthought the email." },
        { en: "Sometimes I overthink instead of staying pragmatic." },
      ],
    },
    "sich konzentrieren auf": {
      wordEn: "focus on",
      examples: [
        { en: "We should focus more on the language comparison itself." },
        { en: "Can we focus more on syntax while writing?" },
      ],
    },
  },
  "card-alltag-paper-ziel": {
    "erwarten von": {
      wordEn: "expect from",
      examples: [
        { en: "What does the professor expect from us in this paper?" },
        { en: "Above all, a clear comparison is expected from us." },
      ],
    },
    erreichen: {
      wordEn: "achieve / reach",
      examples: [
        { en: "What goals do we have to achieve by the submission deadline?" },
        { en: "With a narrower focus we can achieve our goal more realistically." },
      ],
    },
  },
};

/** @param {object} card */
export function enrichAlltagCardForLang(card, targetLang) {
  if (!card || targetLang !== "en") return card;

  const explanationEn = alltagExplanationEn[card.id];
  const vocabMap = alltagVocabEn[card.id] || {};

  const vocabulary = (card.vocabulary || []).map((item) => {
    const en = vocabMap[item.word];
    if (!en) return { ...item };
    return {
      ...item,
      wordEn: en.wordEn,
      meaningEn: en.meaningEn,
      examples: (item.examples || []).map((ex, i) => ({
        ...ex,
        en: en.examples?.[i]?.en || ex.en,
      })),
    };
  });

  return {
    ...card,
    explanationEn,
    vocabulary,
  };
}
