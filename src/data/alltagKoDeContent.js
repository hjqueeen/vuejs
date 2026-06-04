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
  },
  {
    id: "card-alltag-praxis-literatur",
    term:
      "우선 슬라이드를 제대로 준비해줘서 고마워. 꼭 필요하진 않았지만, 확실히 더 보기 좋아졌어. 질문이 있는데 — 사실 Praxisteil부터 시작하고 Literaturrecherche는 좀 뒤로 미뤄도 괜찮다고 봐.",
    explanationDe:
      "Erst mal schön, dass du richtig Folien vorbereitet hast. War jetzt an sich nicht nötig, aber macht's natürlich noch mal anschaulicher. Ich hätte eine Frage: Also erst mal — an sich spricht ja nichts dagegen, mit dem Praxisteil anzufangen und die Literaturrecherche etwas weiter nach hinten zu hängen.",
    explanationKo: "erst mal schön · an sich · nach hinten hängen",
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
    ],
  },
];

export const ALLTAG_KO_DE_CARD_IDS = alltagKoDeCards.map((c) => c.id);

export const getAlltagKoDeCardById = (cardId) =>
  alltagKoDeCards.find((c) => c.id === cardId) || null;
