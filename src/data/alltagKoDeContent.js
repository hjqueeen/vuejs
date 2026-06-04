/** 일상 회화 — 한국어 → 독일어 Karteikarten */

export const ALLTAG_KO_DE_BOOK_ID = "book-alltag-ko-de";

export const alltagKoDeCards = [
  {
    id: "card-alltag-thema-zu-gross",
    term:
      "챕터 2,4를 써봤는데, 어쩌면 우리 주제 범위가 너무 큰거 같다는 생각도 들었어. 특히 챕터 4에서는 엄청난 함수 이름들이 쏟아지는데 그걸 다 설명할 수 가 없었어.",
    explanationDe:
      "Ich habe die Kapitel 2 und 4 geschrieben, und mir ist der Gedanke gekommen, dass unser Themenbereich vielleicht zu groß ist. Besonders in Kapitel 4 tauchen unglaublich viele Funktionsnamen auf, und ich konnte nicht alle erklären.",
    explanationKo: "주제 범위 · Funktionsnamen · erklären",
    vocabulary: [
      {
        word: "auftauchen",
        meaning: "나타나다, (갑자기) 등장하다 · to appear, come up",
        examples: [
          {
            de: "Gestern ist ein alter Freund plötzlich wieder aufgetaucht.",
            ko: "어제 오랜 친구가 갑자기 다시 나타났다.",
          },
          {
            de: "Beim Meeting ist plötzlich ein neues Thema aufgetaucht.",
            ko: "회의 중에 갑자기 새 주제가 나왔다.",
          },
        ],
      },
    ],
  },
  {
    id: "card-alltag-ki-kapitel2",
    term:
      "챕터 4를 쓰다보니 설명되지 못한 부분이 너무 많아서 일단 ai한테 이론 부분인 2를 써보라고 한거야. 챕터 2에서 설명될 수 있을지 시도해보려고.",
    explanationDe:
      "Als ich Kapitel 4 geschrieben hab, hab ich gemerkt, dass viel zu viel unerklärt geblieben ist — deshalb hab ich der KI erstmal gesagt, sie soll mal Kapitel 2 schreiben, also den Theorieteil. Wollte mal ausprobieren, ob man's da besser erklären kann.",
    explanationKo: "일단 · ausprobieren · ob … erklärt werden kann",
    vocabulary: [
      {
        word: "geblieben",
        meaning: "남다, (그 상태로) 있다 · remained, stayed",
        examples: [
          {
            de: "Die Frage ist bis heute offen geblieben.",
            ko: "그 질문은 오늘까지도 열린 채로 남아 있다.",
          },
          {
            de: "Am Ende sind wir bei der ersten Idee geblieben.",
            ko: "결국 우리는 첫 번째 아이디어에 머물렀다.",
          },
        ],
      },
    ],
  },
  {
    id: "card-alltag-von-vorne",
    term: "그래서 혹시 그냥 원래 첫 번째 버전으로 돌아가야 하는 생각이 들었어.. 내가 너무 깊게 생각했었나봐.",
    explanationDe:
      "Deswegen ist mir der Gedanke gekommen, ob wir nicht einfach zur allerersten Version zurückgehen sollten … Hab wohl zu tief nachgedacht.",
    explanationKo: "zur allerersten Version zurück · zu tief nachdenken",
    vocabulary: [
      {
        word: "ob … nicht … sollten",
        meaning:
          "앞문장(생각이 들었다 / 제안했다 등) + ob … nicht … sollten — 『~하면 어때?』 부드러운 제안 (직역과 달리 실제로는 권유)",
        examples: [
          {
            de: "Mir ist der Gedanke gekommen, ob wir nicht einfach eine Pause machen sollten.",
            ko: "나에게는 우리가 그냥 잠깐 쉬면 어떨까 하는 생각이 들었어.",
          },
          {
            de: "Sie hat vorgeschlagen, ob wir nicht erst mal den Plan ändern sollten.",
            ko: "그녀는 우리가 우선 계획부터 바꿔 보는 게 어떨지 제안했어.",
          },
        ],
      },
    ],
  },
  {
    id: "card-alltag-erste-version-theorie",
    term:
      "만약 네가 아직 챕터를 작성하지 않았고, 교수님한테도 답장이 오지 않았다면 우리 맨 처음 버전으로 돌아가는건 어때? 그러면 우리가 프로그램 언어를 배우고 코드를 살펴보는거에 더 집중할 수 있을거 같다는 생각이 들거든. 앱 크기, 성능, 사용자경험 이런 외적인 요소를 쓰는 것보다. 이론에 대해서 더 설명하고 각 프로그램 언어의 구조에 대해 더 배우고 비교하는거지.",
    explanationDe:
      "Wenn du die Kapitel noch nicht geschrieben hast und vom Professor auch noch keine Antwort da ist: Was wäre, wenn wir zur allerersten Version zurückgehen? Hab das Gefühl, wir könnten uns dann mehr auf Programmiersprachen lernen und Code durcharbeiten konzentrieren — statt über äußere Sachen wie App-Größe, Performance und Nutzererlebnis zu schreiben. Stattdessen mehr Theorie erklären und die Struktur der verschiedenen Sprachen mal lernen und vergleichen.",
    explanationKo: "zur allerersten Version · konzentrieren · Struktur vergleichen",
  },
];

export const ALLTAG_KO_DE_CARD_IDS = alltagKoDeCards.map((c) => c.id);

export const getAlltagKoDeCardById = (cardId) =>
  alltagKoDeCards.find((c) => c.id === cardId) || null;
