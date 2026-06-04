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
  {
    id: "card-alltag-gastrosoft-thema",
    term:
      "우리 프로젝트 주제는 Gastrosoft야 — 요식업용 소프트웨어 기획이랑 개발이야. 시스템은 손님이 주문하는 것부터 주문 확인, 레스토랑 쪽 주문 관리까지 전체 흐름을 다 다뤄.",
    explanationDe:
      "Also, unser Projektthema heißt Gastrosoft — Konzeption und Entwicklung einer Software für gastronomische Betriebe. Unser System deckt die kompletten Abläufe ab: von der Bestellung durch den Gast über die Bestellungsbestätigung bis zur Verwaltung der Bestellungen auf Restaurantseite.",
    explanationKo: "Projektthema · Abläufe abdecken · Als Nächstes vorstellen",
    vocabulary: [
      {
        word: "abdecken",
        meaning: "(범위·주제를) 다루다, 포괄하다 · to cover (trennbar: deckt … ab)",
        examples: [
          {
            de: "Der Kurs deckt alle wichtigen Grundlagen ab.",
            ko: "그 강의는 중요한 기초를 전부 다룬다.",
          },
          {
            de: "Mit einem Modul können wir schon viele Anwendungsfälle abdecken.",
            ko: "모듈 하나로도 많은 사용 사례를 이미 포괄할 수 있다.",
          },
        ],
      },
      {
        word: "von … über … bis",
        meaning:
          "A에서 B(중간)를 거쳐 C까지 — 단계나 기간을 이을 때 (über = 사람 수식 아님)",
        examples: [
          {
            de: "Wir arbeiten von Montag über Mittwoch bis Freitag an dem Projekt.",
            ko: "우리는 월요일부터 수요일을 거쳐 금요일까지 그 프로젝트를 한다.",
          },
          {
            de: "Von der Planung über die Entwicklung bis zum Test — so läuft unser Ablauf.",
            ko: "기획에서 개발을 거쳐 테스트까지 — 우리 흐름은 이렇게 돌아간다.",
          },
        ],
      },
    ],
  },
  {
    id: "card-alltag-gastrosoft-android",
    term:
      "지금 Kotlin으로 개발한 Android 버전은 거의 다 끝났어. 손님 주문, 메뉴 고르기, 주문 만들기 같은 핵심 기능은 이미 돼. 전체 흐름도 이미 돌아가고, 앱은 지금 이런 모습이야.",
    explanationDe:
      "Aktuell haben wir die Android-Version, die wir mit Kotlin entwickelt haben, weitgehend abgeschlossen. Die Version kann schon die wichtigsten Kernfunktionen umsetzen — zum Beispiel Bestellen durch den Gast, Auswahl von Gerichten und Erstellung der Bestellung. Der ganze Ablauf funktioniert schon, und so sieht die App jetzt zum Beispiel aus.",
    explanationKo: "weitgehend abgeschlossen · Kernfunktionen · Der Ablauf funktioniert",
    vocabulary: [
      {
        word: "weitgehend",
        meaning: "상당히, 대체로, 거의 · largely, to a large extent",
        examples: [
          {
            de: "Das Projekt ist weitgehend fertig, nur noch kleine Bugs.",
            ko: "프로젝트는 대체로 끝났고, 작은 버그만 남았어.",
          },
          {
            de: "Die Anforderungen sind weitgehend klar.",
            ko: "요구사항은 거의 다 명확해.",
          },
        ],
      },
      {
        word: "umsetzen",
        meaning:
          "etw. umsetzen = (아이디어·기능·계획을) 구현·실현하다\n\n" +
          "• 주어: 사람(Wir, ich) ✅ — «우리가 개발·구현했다»\n" +
          "• 주어: 사물(Die App, die Version) ✅ — «앱이 그 기능을 지원한다» (IT 발표에서 흔함)\n" +
          "• 목적어: Funktion, Idee, Prozess, Anforderung … ✅\n" +
          "• 목적어: 사람 ❌ (Gast, Kunde 등은 안 씀)",
        examples: [
          {
            de: "Wir können die Idee jetzt endlich in Code umsetzen.",
            ko: "주어 = Wir (사람) · 목적어 = die Idee",
          },
          {
            de: "Die App setzt den kompletten Bestellprozess digital um.",
            ko: "주어 = die App (사물) · 목적어 = Bestellprozess",
          },
        ],
      },
    ],
    writingPractice: {
      attemptDe:
        "Entwicklung durch Kotlin für die Android-Systeme ist fast fertig. Kernfunktionen wie Kundenbestellung, Menüauswahl, Bestellungsaufheben, haben wir. Die gesamte Flow funktioniert schon gut und die App sieht so aus.",
      feedback: [
        {
          mark: "Entwicklung durch Kotlin für die Android-Systeme",
          fix: "Die Android-Version, die wir mit Kotlin entwickelt haben,",
          noteKo: "「Kotlin으로 개발한 Android 버전」→ mit Kotlin entwickelt",
        },
        {
          mark: "ist fast fertig",
          fix: "haben wir weitgehend abgeschlossen",
          noteKo:
            "fast fertig = 일상 구어(거의 다 됐어). weitgehend abgeschlossen = 발표·프로젝트에 맞는 격식 표현(대체로 마무리됨). 더 고급≠더 어려움, 상황에 맞게 선택.",
        },
        {
          mark: "Kernfunktionen … haben wir",
          fix: "Die Version kann schon die wichtigsten Kernfunktionen umsetzen —",
          noteKo:
            "haben wir schon(이미 갖고 있다)도 가능. 모범 답안처럼 kann … umsetzen(이미 구현·실행할 수 있다)으로 말해도 됨 — 기능이 돌아간다는 뉘앙스.",
        },
        {
          mark: "Bestellungsaufheben",
          fix: "Bestellerstellung / Erstellung der Bestellung",
          noteKo: "주문 만들기 (aufheben = 취소 아님)",
        },

        {
          mark: "die Flow",
          fix: "der Ablauf",
          noteKo: "영어 Flow 대신 독일어 Ablauf",
        },
      ],
      practicedAt: "2026-06-04",
    },
  },
  {
    id: "card-alltag-praxis-literatur",
    term:
      "일단 슬라이드를 제대로 준비해 줘서 좋아. 원래는 꼭 필요하진 않았는데, 그래도 확실히 한층 더 보기 좋아졌어. 질문 하나 있는데 — 솔직히 Praxisteil부터 시작하고 Literaturrecherche는 조금 더 뒤로 미뤄도, 딱히 반대할 건 없을 것 같아.",
    explanationDe:
      "Erst mal schön, dass du richtig Folien vorbereitet hast. War jetzt an sich nicht nötig, aber macht's natürlich noch mal anschaulicher. Ich hätte eine Frage: Also erst mal — an sich spricht ja nichts dagegen, mit dem Praxisteil anzufangen und die Literaturrecherche etwas weiter nach hinten zu hängen.",
    explanationKo: "erst mal schön · an sich spricht nichts dagegen · nach hinten hängen",
    vocabulary: [
      {
        word: "an sich",
        meaning: "그 자체로는, 근본적으로는, 사실은 · in itself, as such, basically",
        examples: [
          {
            de: "Das war an sich keine schlechte Idee, nur schlecht getimed.",
            ko: "그건 사실 나쁜 아이디어는 아니었는데, 타이밍만 안 좋았어.",
          },
          {
            de: "An sich ist das System stabil, aber heute hakt es noch.",
            ko: "시스템 자체는 안정적인데, 오늘은 아직 좀 걸려.",
          },
        ],
      },
      {
        word: "an sich spricht (ja) nichts dagegen",
        meaning:
          "원칙적으로 / 그 자체로는 반대할 건 없다 — 회의·메일에서 순서·방법을 부드럽게 제안할 때 통째로 자주 씀\n\n" +
          "쓰임:\n" +
          "• an sich spricht (ja) nichts dagegen, + zu-Infinitiv …\n" +
          "• …, wenn / dass … (Nebensatz)\n" +
          "• ja = 말할 때 자연스럽게 넣는 입자(필수 아님)\n\n" +
          "≈ 딱히 반대할 건 없을 것 같아 · 별 문제 없을 것 같아 (강한 허락보다 한 단계 약함)",
        examples: [
          {
            de: "An sich spricht ja nichts dagegen, mit dem Praxisteil anzufangen und die Literaturrecherche etwas weiter nach hinten zu hängen.",
            ko: "이 카드 모범 답안 — Praxisteil 먼저, Literaturrecherche는 뒤로",
          },
          {
            de: "An sich spricht nichts dagegen, das Meeting auf nächste Woche zu verschieben.",
            ko: "회의를 다음 주로 미뤄도 딱히 반대할 건 없어.",
          },
          {
            de: "Wenn wir erst den Prototypen zeigen — an sich spricht da nichts dagegen.",
            ko: "먼저 프로토타입을 보여 주자 — 그건 별로 문제될 건 없어.",
          },
        ],
      },
      {
        word: "nach hinten hängen",
        meaning:
          "(일정·작업을) 뒤로 미루다, 뒤쪽으로 밀다 · to push back, postpone (구어, oft mit etwas weiter)",
        examples: [
          {
            de: "die Literaturrecherche etwas weiter nach hinten hängen",
            ko: "문헌 조사를 조금 더 뒤로 미루다 — 이 카드와 짝",
          },
          {
            de: "Können wir die Tests noch ein bisschen nach hinten hängen?",
            ko: "테스트는 조금만 더 뒤로 미뤄도 될까?",
          },
        ],
      },
    ],
    writingPractice: {
      attemptDe:
        "Zuerst, vielen Dank für die Vorbereitung des Folien. Das musst du nicht unbedingt vorbereiten, aber es ist mehr anschaulicher. Ich habe eine Frage: Findest du in Ordnung, wenn du von Praxis teil anfangen und Literaturrecherche verschieben kannst?",
      feedback: [
        {
          mark: "Zuerst, vielen Dank für die Vorbereitung des Folien",
          fix: "Erst mal schön, dass du richtig Folien vorbereitet hast",
          noteKo:
            "감사는 «~해줘서 고맙다» → dass du … vorbereitet hast. Folien = die Folien (복수) — des Folien ❌, der Folien / die Folien ✅. erst mal schön = 우선 ~해줘서 좋다(구어 감사)",
        },
        {
          mark: "Das musst du nicht unbedingt vorbereiten",
          fix: "War jetzt an sich nicht nötig",
          noteKo:
            "이미 준비해 준 것에 대한 반응 — «꼭 안 해도 됐어»(과거·사실). musst du … vorbereiten은 «앞으로 준비하지 마»처럼 들림",
        },
        {
          mark: "aber es ist mehr anschaulicher",
          fix: "aber macht's natürlich noch mal anschaulicher",
          noteKo:
            "mehr + 비교급(-er) ❌ → noch (mal) anschaullicher. macht's = macht es (구어). «더 보기 좋아졌어»",
        },
        {
          mark: "Ich habe eine Frage: Findest du in Ordnung",
          fix: "Ich hätte eine Frage: Also erst mal —",
          noteKo:
            "Ich hätte eine Frage = 질문이 있는데(가벼운 도입). Findest du in Ordnung? 가능하지만 다소 딱딱·영어식 — 모범 답은 제안을 부드럽게 이어감",
        },
        {
          mark: "wenn du von Praxis teil anfangen",
          fix: "mit dem Praxisteil anzufangen",
          noteKo:
            "Praxisteil = 한 단어. von … anfangen ❌ → mit dem Praxisteil anfangen / anzufangen. 한국어는 «~부터 시작해도 된다고 본다»이지 상대에게 «너가 시작해»가 아님",
        },
        {
          mark: "und Literaturrecherche verschieben kannst?",
          fix: "und die Literaturrecherche etwas weiter nach hinten zu hängen",
          noteKo:
            "verschieben만 쓰면 무엇을·어디로 미루는지 약함 → nach hinten hängen(뒤로 미루다). kannst? = «네가 미울 수 있어?» — 제안·동의 구하기는 an sich spricht nichts dagegen, … zu …",
        },
      ],
      practicedAt: "2026-06-04",
    },
  },
];

export const ALLTAG_KO_DE_CARD_IDS = alltagKoDeCards.map((c) => c.id);

export const getAlltagKoDeCardById = (cardId) =>
  alltagKoDeCards.find((c) => c.id === cardId) || null;
