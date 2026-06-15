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
            ko: "어제 오래된 친구 한 명이 갑자기 다시 나타났다.",
          },
          {
            de: "Beim Meeting ist plötzlich ein neues Thema aufgetaucht.",
            ko: "미팅에서 갑자기 새 주제가 나타났다.",
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
            ko: "그 질문은 오늘까지 열린 채로 남아 있다.",
          },
          {
            de: "Am Ende sind wir bei der ersten Idee geblieben.",
            ko: "끝에 우리는 첫 번째 아이디어에 남았다.",
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
            ko: "나에게는 우리가 그냥 쉬어야 하지 않을까 하는 생각이 왔다.",
          },
          {
            de: "Sie hat vorgeschlagen, ob wir nicht erst mal den Plan ändern sollten.",
            ko: "그녀는 우리가 우선 계획을 바꿔야 하지 않을까고 제안했다.",
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
            ko: "그 수업은 모든 중요한 기초를 다룬다.",
          },
          {
            de: "Mit einem Modul können wir schon viele Anwendungsfälle abdecken.",
            ko: "모듈 하나로 우리는 이미 많은 적용 사례를 다룰 수 있다.",
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
            ko: "우리는 월요일에서 수요일을 거쳐 금요일까지 그 프로젝트에 일한다.",
          },
          {
            de: "Von der Planung über die Entwicklung bis zum Test — so läuft unser Ablauf.",
            ko: "기획에서 개발을 거쳐 테스트까지 — 이렇게 우리 흐름이 돌아간다.",
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
            ko: "프로젝트는 상당히 끝났다, 작은 버그만 아직.",
          },
          {
            de: "Die Anforderungen sind weitgehend klar.",
            ko: "요구사항은 상당히 명확하다.",
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
            ko: "우리는 이제 드디어 그 아이디어를 코드로 구현할 수 있다.",
          },
          {
            de: "Die App setzt den kompletten Bestellprozess digital um.",
            ko: "앱은 전체 주문 과정을 디지털로 구현한다.",
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
            ko: "그것은 그 자체로는 나쁜 아이디어가 아니었다, 타이밍만 나빴을 뿐.",
          },
          {
            de: "An sich ist das System stabil, aber heute hakt es noch.",
            ko: "그 자체로는 시스템이 안정적이다, 하지만 오늘은 아직 걸린다.",
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
            ko: "그 자체로는 실습 부분으로 시작하고 문헌 조사를 조금 더 뒤로 미루는 것에 반대하는 것은 없다.",
          },
          {
            de: "An sich spricht nichts dagegen, das Meeting auf nächste Woche zu verschieben.",
            ko: "그 자체로는 회의를 다음 주로 미루는 것에 반대하는 것은 없다.",
          },
          {
            de: "Wenn wir erst den Prototypen zeigen — an sich spricht da nichts dagegen.",
            ko: "우리가 먼저 프로토타입을 보여준다면 — 그 자체로는 그에 반대하는 것은 없다.",
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
            ko: "문헌 조사를 조금 더 뒤로 미루다",
          },
          {
            de: "Können wir die Tests noch ein bisschen nach hinten hängen?",
            ko: "우리가 테스트를 조금 더 뒤로 미룰 수 있을까?",
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
  {
    id: "card-alltag-preview-stelle",
    term: "프리뷰 그 자리에서 그냥 없애도 될까?",
    explanationDe:
      "Soll ich die Preview an der Stelle einfach entfernen?",
    explanationKo: "an der Stelle · Preview entfernen",
    vocabulary: [
      {
        word: "an der Stelle",
        meaning:
          "그 자리에서, 바로 거기서 · on the spot, right there (ohne woanders hinzugehen)",
        examples: [
          {
            de: "Können wir den fehlerhaften Abschnitt an der Stelle korrigieren, statt alles neu zu schreiben?",
            ko: "전부 새로 쓰는 대신, 그 자리에서 잘못된 부분을 고칠 수 있을까?",
          },
          {
            de: "An der Stelle hab ich den Tippfehler gleich geändert.",
            ko: "그 자리에서 나는 오타를 바로 바꿨다.",
          },
        ],
      },
    ],
  },
  {
    id: "card-alltag-werkbank-anpassung",
    term: "오늘 우리가 이야기했던 Werkbank Anpassung 작업 보러 올 거야?",
    explanationDe:
      "Kommst du heute zur Werkbank-Anpassung, die wir besprochen haben?",
    explanationKo: "zur … Anpassung · die wir besprochen haben",
    vocabulary: [
      {
        word: "Anpassung",
        meaning:
          "(시스템·레이아웃·코드 등에 대한) 수정, 맞춤 변경 · adjustment, customization",
        examples: [
          {
            de: "Die Anpassung am Layout dauert noch ein paar Stunden.",
            ko: "레이아웃에 대한 수정은 아직 몇 시간 더 걸린다.",
          },
          {
            de: "Vor dem Release brauchen wir noch eine kleine Anpassung am Export.",
            ko: "릴리스 전에 우리는 Export에 작은 수정 하나가 더 필요하다.",
          },
        ],
      },
    ],
  },
  {
    id: "card-alltag-delete-id-mitliefern",
    term:
      "Delete가 지금 안 돼, 왜냐하면 Reload 후에 함수에서 id가 빠져있고, 그것이 없이는 DELETE를 호출할 수가 없거든. Item마다 id랑 sourceId도 같이 보내줄 수 있어? 그러면 될 것 같아.",
    explanationDe:
      "Delete klappt gerade nicht, weil uns nach dem Reload die ID aus der Funktion fehlt – ohne sie rufen wir DELETE gar nicht auf. Kannst du pro Item id und sourceId mitliefern? Dann sollte es passen.",
    explanationKo: "aufrufen · mitliefern · pro Item",
    vocabulary: [
      {
        word: "aufrufen",
        meaning:
          "(API·Funktion·Endpoint 등을) 호출하다 · to call, invoke (trennbar: ruft … auf)",
        examples: [
          {
            de: "Ohne Token können wir die API gar nicht aufrufen.",
            ko: "토큰 없이는 우리는 API를 전혀 호출할 수 없다.",
          },
          {
            de: "Ruf bitte die Hilfsfunktion auf, bevor du speicherst.",
            ko: "저장하기 전에 보조 함수를 호출해 줘.",
          },
        ],
      },
      {
        word: "mitliefern",
        meaning:
          "(데이터·정보를) 함께 보내다, 같이 넘기다 · to include/supply along with",
        examples: [
          {
            de: "Kannst du beim Export auch die Metadaten mitliefern?",
            ko: "Export할 때 메타데이터도 함께 넘겨줄 수 있니?",
          },
          {
            de: "Jedes Item sollte eine eindeutige sourceId mitliefern.",
            ko: "각 Item은 고유한 sourceId를 함께 보내야 한다.",
          },
        ],
      },
    ],
  },
  {
    id: "card-alltag-werkbank-aura-sodass",
    term:
      "Aura Werkbank에서는, 우리가 이미 가지고 있는 모든 URL을, 백엔드를 위해 쓸 수 있어. 그래서 그게 제대로 동작하게 된다.",
    explanationDe:
      "In der Werkbank in Aura kannst du alle URLs, die wir schon haben, fürs Backend nutzen, sodass es funktionsfähig ist.",
    explanationKo: "sodass · fürs Backend · funktionsfähig",
    vocabulary: [
      {
        word: "sodass",
        meaning:
          "~해서, ~하도록 (결과·목적) · so that (Nebensatz mit Verb am Ende)",
        examples: [
          {
            de: "Ich erkläre es nochmal langsam, sodass alle mitkommen.",
            ko: "나는 모든 사람이 따라올 수 있도록 다시 천천히 설명한다.",
          },
          {
            de: "Wir haben die Konfiguration angepasst, sodass der Export wieder klappt.",
            ko: "우리는 Export가 다시 되도록 설정을 맞췄다.",
          },
        ],
      },
    ],
  },
  {
    id: "card-alltag-headerfavoriten-einbauen",
    term:
      "headerFavoriten 오늘 넣을 수 있어? 그러면 업데이트하기 전에 백엔드를 제대로 테스트할 수 있거든. 백엔드는 참고하라고 이미 업데이트 되었어.",
    explanationDe:
      "Schaffst du es, headerFavoriten heute einzubauen? Dann kann ich das Backend vernünftig testen, bevor ich ein Update mache — es ist zum Nachschauen schon aktualisiert.",
    explanationKo: "einbauen · vernünftig · zum Nachschauen",
    vocabulary: [
      {
        word: "einbauen",
        meaning:
          "(기능·코드·모듈을) 넣다, 통합하다 · to integrate, build in (trennbar: baut … ein)",
        examples: [
          {
            de: "Kannst du die Validierung noch vor dem Release einbauen?",
            ko: "릴리스 전에 유효성 검사를 아직 넣을 수 있니?",
          },
          {
            de: "Wir haben das Logging direkt in die API eingebaut.",
            ko: "우리는 Logging을 API에 바로 넣었다.",
          },
        ],
      },
      {
        word: "vernünftig",
        meaning:
          "제대로, 합리적으로, 알맞게 · properly, sensibly, in a reasonable way",
        examples: [
          {
            de: "Teste das bitte erst vernünftig, bevor du es mergst.",
            ko: "머지하기 전에 그것을 먼저 합리적으로 테스트해 줘.",
          },
          {
            de: "Ohne Dokumentation können wir das Feature nicht vernünftig nutzen.",
            ko: "문서 없이는 우리는 그 기능을 합리적으로 쓸 수 없다.",
          },
        ],
      },
      {
        word: "zum Nachschauen",
        meaning:
          "참고용으로, 확인하려고 · for reference, to look up / check (zu + Nominalisierung)",
        examples: [
          {
            de: "Ich hab dir die aktuelle API-Doku zum Nachschauen ins Repo gelegt.",
            ko: "나는 참고하려고 현재 API 문서를 repo에 넣어 뒀다.",
          },
          {
            de: "Die Beispiel-Requests stehen in der README zum Nachschauen bereit.",
            ko: "예시 Request들은 참고하려고 README에 준비되어 있다.",
          },
        ],
      },
    ],
  },
  {
    id: "card-alltag-paper-fokus",
    term:
      "저희 논문의 주제가 어디에 더 포커스가 있나요? 레스토랑 주문앱 개발, 아니면 언어 비교? 만약에 언어비교가 더 목적이라면 논문의 동기에 언어 비교에 대한 부분을 더 넣으면 되겠죠? 만약 저희의 경우에는 크로스플랫폼과 네이티브의 비교에 대한 문제의식 같은게 동기가 될 수 있나요?",
    explanationDe:
      "Wo liegt eigentlich der Schwerpunkt unserer Arbeit — bei der Entwicklung der Restaurant-Bestell-App oder beim Sprachvergleich? Wenn der Sprachvergleich das eigentliche Ziel ist, könnten wir in der Motivation ja noch stärker auf den Sprachvergleich eingehen, oder? Könnte bei uns so etwas wie die Problemstellung beim Vergleich von Cross-Platform und Native als Motivation fungieren?",
    explanationKo: "Schwerpunkt · Motivation · Problemstellung",
    vocabulary: [
      {
        word: "eingehen auf",
        meaning:
          "(주제·세부사항에) 들어가다, 다루다 · to go into, address (trennbar: geht … ein)",
        examples: [
          {
            de: "In Kapitel 2 gehen wir ausführlich auf die Architektur ein.",
            ko: "2장에서 우리는 아키텍처를 자세히 다룬다.",
          },
          {
            de: "Könnten wir in der Motivation stärker auf den Sprachvergleich eingehen?",
            ko: "동기 부분에서 언어 비교를 더 강하게 다룰 수 있을까?",
          },
        ],
      },
      {
        word: "fungieren",
        meaning: "~ 역할을 하다, ~로 쓰이다 · to serve as, act as",
        examples: [
          {
            de: "Die App dient als Prototyp und fungiert gleichzeitig als Vergleichsobjekt.",
            ko: "앱은 프로토타입 역할을 하면서 동시에 비교 대상으로 쓰인다.",
          },
          {
            de: "Könnte die Problemstellung als Motivation fungieren?",
            ko: "문제의식이 동기 역할을 할 수 있을까?",
          },
        ],
      },
    ],
  },
  {
    id: "card-alltag-paper-titel",
    term:
      "논문의 제목도 변경할 수 있을지 궁금합니다. 우리는 이미 논문의 제목을 제출했는데요. 그렇다면 그냥 원래의 주제에 머무는 것도 좋은 선택이 될 수 있겠네요.",
    explanationDe:
      "Ich frage mich, ob wir den Titel der Arbeit noch ändern können. Wir haben den Titel ja schon eingereicht. Dann wäre es vielleicht auch eine gute Option, einfach beim ursprünglichen Thema zu bleiben.",
    explanationKo: "Titel ändern · eingereicht · beim Thema bleiben",
    vocabulary: [
      {
        word: "einreichen",
        meaning: "(서류·논문·제목 등을) 제출하다 · to submit, hand in",
        examples: [
          {
            de: "Wir haben den Arbeitstitel schon beim Prüfungsamt eingereicht.",
            ko: "우리는 논문 제목을 이미 시험 사무실에 제출했다.",
          },
          {
            de: "Den Entwurf müssen wir bis Freitag einreichen.",
            ko: "초안은 금요일까지 제출해야 한다.",
          },
        ],
      },
      {
        word: "beim … bleiben",
        meaning: "(원래 주제·계획·방향에) 머무르다, 그대로 가다 · to stick with, stay with",
        examples: [
          {
            de: "Vielleicht bleiben wir einfach beim ursprünglichen Thema.",
            ko: "아마 우리는 그냥 원래 주제에 머무는 게 나을 것 같다.",
          },
          {
            de: "Nach dem Feedback sind wir beim ersten Ansatz geblieben.",
            ko: "피드백 후에 우리는 첫 번째 접근법에 머물렀다.",
          },
        ],
      },
    ],
  },
  {
    id: "card-alltag-paper-sprachvergleich",
    term:
      "제가 교수님께 쓴 메일은 혹시 제가 너무 깊게 생각한건 아닌가 생각합니다. 6000 단어 아래에서 세 언어를 비교하는 것이 너무 과하다고 생각된다면 원래 코틀린과 스위프트의 비교로 돌아가고, 언어자체의 비교에 좀더 초점을 맞추어 논문을 작성하면 될까요?",
    explanationDe:
      "Bei der Mail an den Professor frage ich mich, ob ich nicht zu tief gedacht hab. Falls ein Vergleich von drei Sprachen unter 6000 Wörtern zu viel ist, sollten wir vielleicht wieder zum ursprünglichen Kotlin-und-Swift-Vergleich zurückgehen und die Arbeit stärker auf den Sprachvergleich an sich konzentrieren?",
    explanationKo: "zu tief denken · zurückgehen · sich konzentrieren auf",
    vocabulary: [
      {
        word: "zu tief nachdenken",
        meaning: "너무 깊게 생각하다, 지나치게 곱씹다 · to overthink",
        examples: [
          {
            de: "Vielleicht hab ich bei der Mail einfach zu tief nachgedacht.",
            ko: "아마 메일에서 나는 그냥 너무 깊게 생각한 것 같다.",
          },
          {
            de: "Manchmal denke ich zu tief nach, statt pragmatisch zu bleiben.",
            ko: "가끔 나는 실용적으로 가기보다 너무 깊게 생각한다.",
          },
        ],
      },
      {
        word: "sich konzentrieren auf",
        meaning: "~에 집중하다, 초점을 맞추다 · to focus on (reflexiv)",
        examples: [
          {
            de: "Wir sollten uns stärker auf den Sprachvergleich an sich konzentrieren.",
            ko: "우리는 언어 자체의 비교에 더 집중해야 한다.",
          },
          {
            de: "Können wir uns beim Schreiben mehr auf die Syntax konzentrieren?",
            ko: "글을 쓸 때 문법 구조에 더 집중할 수 있을까?",
          },
        ],
      },
    ],
  },
  {
    id: "card-alltag-paper-ziel",
    term:
      "실제로 이 논문에서 교수님이 우리에게 바라는것, 우리가 이루어야 할 목표는 무엇인가요?",
    explanationDe:
      "Was erwartet der Professor von uns bei dieser Arbeit eigentlich — und was sind unsere Ziele, die wir erreichen müssen?",
    explanationKo: "erwarten · Ziele erreichen",
    vocabulary: [
      {
        word: "erwarten von",
        meaning:
          "~에게 ~을 기대하다, 바라다 · to expect from (+ Dativ)",
        examples: [
          {
            de: "Was erwartet der Professor von uns bei dieser Arbeit?",
            ko: "이 논문에서 교수님은 우리에게 무엇을 기대하시나요?",
          },
          {
            de: "Von uns wird vor allem ein klarer Vergleich erwartet.",
            ko: "우리에게는 무엇보다 명확한 비교가 기대된다.",
          },
        ],
      },
      {
        word: "erreichen",
        meaning: "(목표·Ergebnis를) 이루다, 달성하다 · to achieve, reach",
        examples: [
          {
            de: "Welche Ziele müssen wir bis zur Abgabe erreichen?",
            ko: "제출까지 우리가 달성해야 할 목표는 무엇인가요?",
          },
          {
            de: "Mit dem engeren Fokus können wir unser Ziel realistischer erreichen.",
            ko: "더 좁은 초점으로 우리는 목표를 더 현실적으로 달성할 수 있다.",
          },
        ],
      },
    ],
  },
  {
    id: "card-alltag-workshop-overview",
    term:
      "이번 주에 워크샵을 다녀오면서 정말 흥미로운 것을 많이 경험했다. 퀀텀컴퓨팅, 고성능 컴퓨팅(HPC) 등의 신기술에 대해서 배웠고, 도이치 텔레콤과 Zuse Institute도 방문했다.",
    explanationDe:
      "Diese Woche war ich auf einem Workshop und hab richtig viel Spannendes erlebt. Ich hab neue Technologien wie Quantencomputing und High-Performance-Computing kennengelernt, und wir haben auch die Deutsche Telekom und das Zuse-Institut besucht.",
    explanationKo: "Workshop · Quantencomputing · High-Performance-Computing · besuchen",
    vocabulary: [
      {
        word: "sein + auf einem Workshop",
        meaning:
          "워크샵에 (참석·참가)하다 · to be at / attend a workshop (+ Dativ, auf)",
        examples: [
          {
            de: "Diese Woche war ich auf einem Workshop.",
            ko: "이번 주 워크샵에 다녀왔다.",
          },
          {
            de: "Nächste Woche bin ich auf einer Konferenz in Berlin.",
            ko: "다음 주 베를린 컨퍼런스에 간다.",
          },
          {
            de: "Warst du auch auf dem Seminar gestern?",
            ko: "어제 세미나에도 갔어?",
          },
        ],
      },
      {
        word: "erleben",
        meaning: "(경험·사건을) 겪다, 경험하다 · to experience",
        examples: [
          {
            de: "Auf dem Workshop hab ich richtig viel Spannendes erlebt.",
            ko: "워크샵에서 정말 흥미로운 것을 많이 경험했다.",
          },
          {
            de: "Beim Besuch im Quantum Lab hab ich etwas Neues erlebt.",
            ko: "퀀텀 랩 방문에서 새로운 것을 경험했다.",
          },
        ],
      },
      {
        word: "kennenglernen",
        meaning: "(새로운 것을) 알게 되다, 익히다 · to get to know, learn about",
        examples: [
          {
            de: "Ich hab neue Technologien wie High-Performance-Computing kennengelernt.",
            ko: "고성능 컴퓨팅 같은 신기술에 대해 알게 되었다.",
          },
          {
            de: "Beim Workshop haben wir verschiedene Forschungsinstitute kennengelernt.",
            ko: "워크샵에서 여러 연구 기관을 알게 되었다.",
          },
        ],
      },
    ],
  },
  {
    id: "card-alltag-workshop-dt-quantumlab",
    term:
      "도이치 텔레콤 퀀텀 랩을 방문했는데, 양자 보안 통신에는 두 갈래가 있다는 걸 알게 됐어. 양자 키 분배(QKD)는 광자 같은 물리적 양자 상태에 보안이 기반하고, 포스트 양자 암호(PQC)는 일반 네트워크에서 수학 알고리즘만으로 양자 내성을 확보하는 거야. 둘 다 '양자 보안'이지만 원리가 완전히 달라서 놀랐어.",
    explanationDe:
      "Bei der Deutschen Telekom waren wir im Quantum Lab — da hab ich gelernt, dass es zwei Wege für quantensichere Kommunikation gibt: Quantenschlüsselverteilung (QKD) basiert auf physischen Quantenzuständen wie Photonen, Post-Quanten-Kryptographie (PQC) dagegen nutzt mathematische Algorithmen auf normalen Netzwerken. Beide gelten als quantensicher, funktionieren aber völlig unterschiedlich — das hat mich überrascht.",
    explanationKo: "Quantenschlüsselverteilung · Post-Quanten-Kryptographie · basieren auf",
    vocabulary: [
      {
        word: "basieren auf",
        meaning:
          "~에 기반하다 · to be based on (+ Dativ)",
        examples: [
          {
            de: "Quantenschlüsselverteilung (QKD) basiert auf physischen Quantenzuständen wie Photonen.",
            ko: "양자 키 분배(QKD)는 광자 같은 물리적 양자 상태에 기반한다.",
          },
          {
            de: "Post-Quanten-Kryptographie (PQC) basiert auf mathematischen Algorithmen, nicht auf Quantenphysik.",
            ko: "포스트 양자 암호(PQC)는 양자 물리가 아니라 수학 알고리즘에 기반한다.",
          },
        ],
      },
      {
        word: "sich unterscheiden",
        meaning: "(서로) 다르다, 구별되다 · to differ, be distinct",
        examples: [
          {
            de: "Beide Ansätze unterscheiden sich grundlegend.",
            ko: "두 접근법은 근본적으로 다르다.",
          },
          {
            de: "Man muss Quantenschlüsselverteilung und Post-Quanten-Kryptographie klar voneinander unterscheiden.",
            ko: "양자 키 분배와 포스트 양자 암호를 명확히 구별해야 한다.",
          },
        ],
      },
    ],
  },
  {
    id: "card-alltag-workshop-zuse-hpc",
    term:
      "Zuse Institute에서는 지하를 가득 채운 슈퍼컴퓨터들을 보았는데, 국가 차원에서 관리되고 5년마다 일부를 교체하면서 항상 최신으로 업데이트하고, 현재에도 세계 탑 500 안에 드는 컴퓨터이더라.",
    explanationDe:
      "Im Zuse-Institut hab ich Supercomputer gesehen, die den Keller füllen; sie werden auf nationaler Ebene betrieben, alle fünf Jahre werden Teile ausgetauscht, damit alles aktuell bleibt, und die Rechner stehen immer noch in den Top 500 weltweit.",
    explanationKo: "Supercomputer · national · austauschen · Top 500",
    vocabulary: [
      {
        word: "austauschen",
        meaning: "(부품·장비 등을) 교체하다, 바꾸다 · to replace, swap out",
        examples: [
          {
            de: "Alle fünf Jahre werden Teile der Supercomputer ausgetauscht.",
            ko: "5년마다 슈퍼컴퓨터의 일부가 교체된다.",
          },
          {
            de: "Damit alles aktuell bleibt, tauschen sie regelmäßig Hardware aus.",
            ko: "모든 것이 최신 상태로 유지되도록 그들은 정기적으로 하드웨어를 교체한다.",
          },
        ],
      },
      {
        word: "betreiben",
        meaning: "(시설·System 등을) 운영하다, 가동하다 · to operate, run",
        examples: [
          {
            de: "Die Supercomputer werden auf nationaler Ebene betrieben.",
            ko: "슈퍼컴퓨터는 국가 차원에서 운영된다.",
          },
          {
            de: "Das Institut betreibt mehrere Rechner in den Top 500.",
            ko: "그 기관은 탑 500 안에 드는 여러 컴퓨터를 운영한다.",
          },
        ],
      },
    ],
  },
  {
    id: "card-alltag-workshop-fu-campus",
    term:
      "또 그 기관은 자유대학교 옆에 있었는데, 처음으로 가봤는데 너무 좋더라. 특히 식당에서 밥도 진짜 싸고 맛있었어.",
    explanationDe:
      "Die Einrichtung liegt direkt neben der Freien Universität — war mein erstes Mal dort, und mir hat's richtig gut gefallen. Besonders in der Mensa war das Essen echt günstig und lecker.",
    explanationKo: "Freie Universität · Mensa · gefallen · günstig",
    vocabulary: [
      {
        word: "gefallen",
        meaning: "마음에 들다, 좋다 · to like, appeal to (+ Dativ)",
        examples: [
          {
            de: "Mir hat der Campus richtig gut gefallen.",
            ko: "캠퍼스가 정말 마음에 들었다.",
          },
          {
            de: "Hat dir die Lage neben der Uni gefallen?",
            ko: "대학교 옆 위치가 마음에 들었어?",
          },
        ],
      },
      {
        word: "günstig",
        meaning: "(가격이) 저렴하다 · cheap, affordable",
        examples: [
          {
            de: "In der Mensa war das Essen echt günstig und lecker.",
            ko: "학식에서 밥이 정말 싸고 맛있었다.",
          },
          {
            de: "Für Studenten ist die Mensa oft günstiger als draußen.",
            ko: "학생들에게 학식은 밖보다 종종 더 저렴하다.",
          },
        ],
      },
    ],
  },
  {
    id: "card-alltag-workshop-team-praesentation",
    term: "또 우리는 퀀텀 프로토콜에 대해 팀 프로젝트를 발표했어.",
    explanationDe:
      "Außerdem haben wir unser Teamprojekt zum Quantenprotokoll präsentiert.",
    explanationKo: "Teamprojekt · Quantenprotokoll · präsentieren",
    vocabulary: [
      {
        word: "präsentieren",
        meaning: "(프로젝트·Ergebnis 등을) 발표하다 · to present",
        examples: [
          {
            de: "Am Ende des Workshops haben wir unser Teamprojekt präsentiert.",
            ko: "워크샵 마지막에 우리는 팀 프로젝트를 발표했다.",
          },
          {
            de: "Wir präsentieren morgen unser Quantenprotokoll vor der Gruppe.",
            ko: "우리는 내일 그룹 앞에서 퀀텀 프로토콜을 발표한다.",
          },
        ],
      },
    ],
  },
  {
    id: "card-alltag-bootstrap-link-farbe",
    term:
      "그러면 부트스트랩에서 알스톰 색깔을 오버라이드 하는 것에 대해서 한 번 살펴보겠습니다. 먼저 링크입니다. 부트스트랩의 기본 색깔은 파란색으로 구현되어 있습니다. 여기에 보시면 파란 색깔 링크를 볼 수 있죠. 그리고 네, 다음으로는 기존 코드입니다. 기존 코드는 `a`와 `a:hover`에 CSS를 직접 작성하여 알스톰 파란색으로 오버라이드 되어 있습니다. 새로 작성한 코드에서는 `$link-color`와 `$link-hover-color` 변수를 `@import` 전에 설정하여 부트스트랩이 링크 색상을 자동으로 적용하게 했습니다.",
    explanationDe:
      "Dann schauen wir uns an, wie wir die Alstom-Farben in Bootstrap überschreiben. Zuerst die Links: Bootstrap ist standardmäßig blau. Im Legacy-Code (`override_legacy.less`) setzen wir `a` und `a:hover` direkt per CSS. Im neuen Code (`override_new.scss`) reichen `$link-color` und `$link-hover-color` vor dem `@import` — Bootstrap übernimmt die Farben in den Reboot-Styles.",
    explanationKo:
      "그러면 부트스트랩에서 Alstom 색상을 어떻게 오버라이드하는지 살펴보겠습니다. 먼저 링크입니다: 부트스트랩은 기본적으로 파란색입니다. 레거시 코드(`override_legacy.less`)에서는 `a`와 `a:hover`를 CSS로 직접 설정합니다. 새 코드(`override_new.scss`)에서는 `@import` 전에 `$link-color`와 `$link-hover-color`만 있으면 됩니다 — 부트스트랩이 Reboot 스타일에서 색상을 가져갑니다.",
    vocabulary: [
      {
        word: "überschreiben",
        meaning:
          "(스타일·변수·기본값을) 덮어쓰다, 오버라이드하다 · to override",
        examples: [
          {
            de: "Im Legacy-Code überschreiben wir die Linkfarbe per CSS (`a { color: … }`).",
            ko: "레거시 코드에서는 CSS로 링크 색상을 오버라이드한다.",
          },
          {
            de: "Im neuen Code überschreiben wir mit `$link-color` vor dem `@import`.",
            ko: "새 코드에서는 `@import` 전에 `$link-color` 변수로 오버라이드한다.",
          },
        ],
      },
    ],
  },
  {
    id: "card-alltag-bootstrap-btn-primary",
    term:
      "다음입니다. 프라이머리 버튼입니다. 부트스트랩 원래 색깔은 파란색으로 되어있고 포커스가 되어 있을 때는 연한 파란색으로 포커스 링이 되어 있는 것을 볼 수 있습니다. 기존 코드에서는 `background-color`와 `border-color`만 CSS로 오버라이드 했기 때문에 포커스 링(`box-shadow`)은 부트스트랩 기본 파란색이 그대로 남아 있습니다. 새 코드에서는 `button-variant` Mixin을 사용하여 Alstom 색상을 명시적으로 전달하고, Mixin이 포커스 링까지 Alstom 색상 기준으로 계산합니다.",
    explanationDe:
      "Als Nächstes der Primary-Button. Bootstrap liefert ihn in Blau — beim Fokus einen hellblauen Focus-Ring (`box-shadow`). Im Legacy-Code überschreiben wir nur `background-color` und `border-color` per CSS — der Focus-Ring bleibt Bootstrap-Standard. Im neuen Code rufen wir `@include button-variant(...)` mit expliziten Alstom-Farben auf; das Mixin berechnet auch den Focus-Ring aus diesen Werten.",
    explanationKo:
      "다음은 Primary 버튼입니다. 부트스트랩은 이를 파란색으로 제공합니다 — 포커스 시 연한 파란색 Focus-Ring(`box-shadow`). 레거시 코드에서는 CSS로 `background-color`와 `border-color`만 오버라이드합니다 — Focus-Ring은 부트스트랩 기본값을 유지합니다. 새 코드에서는 명시적인 Alstom 색상으로 `@include button-variant(...)`를 호출합니다; Mixin이 이 값들에서 Focus-Ring도 계산합니다.",
    vocabulary: [
      {
        word: "Focus-Ring",
        meaning:
          "(키보드 포커스 시 버튼·링크 주변의) 포커스 링 — `box-shadow` · focus ring (outline)",
        examples: [
          {
            de: "Im Legacy-Code bleibt der Focus-Ring beim Bootstrap-Standard, weil nur bg/border überschrieben werden.",
            ko: "레거시 코드에서는 bg/border만 덮어써서 포커스 링은 부트스트랩 기본값을 유지한다.",
          },
          {
            de: "Das `button-variant`-Mixin leitet den Focus-Ring aus Hintergrund- und Rahmenfarbe ab.",
            ko: "`button-variant` Mixin은 배경색·테두리색에서 포커스 링을 도출한다.",
          },
        ],
      },
    ],
  },
  {
    id: "card-alltag-bootstrap-mixin-implementierung",
    term:
      "코드 구현을 살펴보겠습니다. 기존 코드는 `.btn-primary`의 default, hover, focus, active 상태를 CSS에 각각 따로 정의했습니다. 새 코드에서는 `button-variant` Mixin에 Alstom 색상을 파라미터로 넘겨 한 번에 생성하고, focus 배경색만 추가 CSS로 darkblue로 고정합니다. 포커스 링은 Mixin 내부에서 `rgba(mix(...), .5)`로 배경색 기준 자동 계산됩니다.",
    explanationDe:
      "Zur Implementierung: Im Legacy-Code definiert jeder Zustand (default, hover, focus, active) eine eigene CSS-Regel. Im neuen Code übergibt `@include button-variant($background: …, $hover-background: …, …)` alle Alstom-Farben als Parameter — das Mixin erzeugt die Zustände und den Focus-Ring (`box-shadow`) daraus. Nur die Focus-Hintergrundfarbe wird zusätzlich per CSS auf Darkblue fixiert.",
    explanationKo:
      "구현에 대해: 레거시 코드에서는 각 상태(default, hover, focus, active)마다 별도의 CSS 규칙을 정의합니다. 새 코드에서는 `@include button-variant($background: …, $hover-background: …, …)`가 모든 Alstom 색상을 파라미터로 전달합니다 — Mixin이 이로부터 상태와 Focus-Ring(`box-shadow`)을 생성합니다. Focus 배경색만 추가로 CSS로 Darkblue에 고정합니다.",
    vocabulary: [
      {
        word: "Mixin",
        meaning:
          "(Sass) 믹스인 — `button-variant` 등 재사용 가능한 스타일 규칙 묶음 · Sass mixin",
        examples: [
          {
            de: "`@include button-variant(...)` erzeugt alle Button-Zustände aus den übergebenen Farben.",
            ko: "`@include button-variant(...)`는 전달한 색상으로 모든 버튼 상태를 생성한다.",
          },
          {
            de: "Im Legacy-Code brauchten wir dafür viele einzelne CSS-Regeln.",
            ko: "레거시 코드에서는 이를 위해 여러 개의 CSS 규칙이 필요했다.",
          },
        ],
      },
    ],
  },
  {
    id: "card-alltag-bootstrap-btn-outline",
    term:
      "아웃라인 프라이머리 버튼도 마찬가지입니다. 부트스트랩 기본 컴포넌트는 파란색으로 구현되어 있고요. 기존 코드에서는 각 상태를 CSS로 오버라이드 했지만 포커스 링은 건드리지 않아 부트스트랩 기본 색이 남습니다. 새 코드에서는 `button-outline-variant` Mixin으로 테두리·텍스트·포커스 링을 Alstom 색상으로 생성하고, hover 배경색 등 Mixin이 맞추지 못하는 부분만 추가 CSS로 보완합니다.",
    explanationDe:
      "Beim Outline-Primary-Button gilt dasselbe. Bootstrap liefert die Komponente in Blau. Im Legacy-Code überschreiben wir jeden Zustand per CSS, lassen den Focus-Ring aber unverändert. Im neuen Code erzeugt `@include button-outline-variant(...)` Rahmen, Text und Focus-Ring in Alstom-Farben; nur Hover-Hintergrund und Active-Textfarbe werden zusätzlich per CSS ergänzt.",
    explanationKo:
      "Outline-Primary 버튼도 마찬가지입니다. 부트스트랩은 컴포넌트를 파란색으로 제공합니다. 레거시 코드에서는 각 상태를 CSS로 오버라이드하지만 Focus-Ring은 변경하지 않습니다. 새 코드에서는 `@include button-outline-variant(...)`가 테두리, 텍스트, Focus-Ring을 Alstom 색상으로 생성합니다; Hover 배경과 Active 텍스트 색만 추가로 CSS로 보완합니다.",
  },
  {
    id: "card-alltag-bootstrap-outline-code",
    term:
      "코드 구현을 살보면, 기존 코드는 `.btn-outline-primary`의 default, focus, hover, active를 모두 CSS로 작성했습니다. 새 코드에서는 `button-outline-variant` Mixin이 기본·포커스 링을 처리하고, hover 배경(`$alstom-bluegrey`)과 active 텍스트 색만 CSS로 남겨 두었습니다.",
    explanationDe:
      "Zur Code-Implementierung: Im Legacy-Code steht für jeden Zustand (default, focus, hover, active) eine eigene CSS-Regel. Im neuen Code übernimmt `button-outline-variant` Basis und Focus-Ring; nur Hover-Hintergrund (`$alstom-bluegrey`) und Active-Textfarbe bleiben als kleine CSS-Ergänzungen.",
    explanationKo:
      "코드 구현에 대해: 레거시 코드에서는 각 상태(default, focus, hover, active)마다 별도의 CSS 규칙이 있습니다. 새 코드에서는 `button-outline-variant`가 기본과 Focus-Ring을 처리합니다; Hover 배경(`$alstom-bluegrey`)과 Active 텍스트 색만 작은 CSS 보완으로 남습니다.",
  },
  {
    id: "card-alltag-bootstrap-fokus-ring-hinweis",
    term:
      "한 가지 질문이 있습니다. Alstom 버튼 색상을 쓰면서 포커스 링은 부트스트랩 기본 파란색을 유지하고 싶다면, 레거시처럼 `background-color`/`border-color`만 CSS로 오버라이드하고 `box-shadow`는 건드리지 않는 방식이 맞습니다. `button-variant` Mixin을 쓰면 포커스 링도 Alstom 색상 기준으로 재계산되므로, Mixin을 쓰면서 기본 파란 링을 유지하려면 `box-shadow`를 별도로 오버라이드해야 합니다.",
    explanationDe:
      "Eine Frage: Wenn ihr Alstom-Buttonfarben wollt, aber den Focus-Ring bei Bootstrap-Blau belassen möchtet, ist der Legacy-Ansatz richtig — nur `background-color`/`border-color` per CSS überschreiben, `box-shadow` nicht anfassen. Mit `button-variant` wird der Focus-Ring aus den Alstom-Farben neu berechnet; wollt ihr trotzdem Bootstrap-Blau, müsst ihr `box-shadow` explizit überschreiben.",
    explanationKo:
      "질문 하나: Alstom 버튼 색상을 원하지만 Focus-Ring은 부트스트랩 파란색으로 유지하고 싶다면, 레거시 방식이 맞습니다 — CSS로 `background-color`/`border-color`만 오버라이드하고 `box-shadow`는 건드리지 않습니다. `button-variant`를 쓰면 Focus-Ring이 Alstom 색상에서 재계산됩니다; 그래도 부트스트랩 파란색을 원한다면 `box-shadow`를 명시적으로 오버라이드해야 합니다.",
    vocabulary: [
      {
        word: "ableiten",
        meaning:
          "(Mixin 등에서 다른 값·규칙으로부터) 도출하다, 유도하다 · to derive, infer",
        examples: [
          {
            de: "Das Mixin leitet den Focus-Ring aus Hintergrund- und Rahmenfarbe ab.",
            ko: "Mixin은 배경색·테두리색에서 포커스 링을 도출한다.",
          },
          {
            de: "Ohne Mixin bleibt der Bootstrap-`box-shadow` unverändert.",
            ko: "Mixin 없이는 부트스트랩 `box-shadow`가 그대로 남는다.",
          },
        ],
      },
    ],
  },
  {
    id: "card-alltag-bootstrap-dropdown",
    term:
      "드롭다운도 마찬가지입니다. 기존 코드에서는 `.dropdown-item.active`에 CSS로 `background-color`를 직접 지정했습니다. 새 코드에서는 `$dropdown-link-active-bg: $alstom-darkblue` 변수 하나만 `@import` 전에 설정하여 동일한 결과를 얻습니다.",
    explanationDe:
      "Beim Dropdown: Im Legacy-Code setzen wir `.dropdown-item.active { background-color: … }` per CSS. Im neuen Code reicht `$dropdown-link-active-bg: $alstom-darkblue` vor dem `@import` — dieselbe Farbe, ohne extra CSS.",
    explanationKo:
      "드롭다운: 레거시 코드에서는 CSS로 `.dropdown-item.active { background-color: … }`를 설정합니다. 새 코드에서는 `@import` 전에 `$dropdown-link-active-bg: $alstom-darkblue`만 있으면 됩니다 — 같은 색상, 추가 CSS 없이.",
  },
  {
    id: "card-alltag-bootstrap-btn-link",
    term:
      "버튼 링크는 부트스트랩에 전용 변수나 Mixin이 없습니다. 그래서 기존·새 코드 모두 `.btn-link`에 CSS 오버라이드를 사용하며, default와 hover 모두 `$alstom-bluegrey`로 동일하게 설정합니다. 문법만 LESS의 `@`에서 Sass의 `$`로 바뀌었습니다.",
    explanationDe:
      "Bei Button-Links gibt es in Bootstrap keine eigenen Variablen oder Mixins. Deshalb nutzen Legacy und neuer Code dieselbe CSS-Überschreibung — default und hover beide `$alstom-bluegrey`. Einziger Unterschied: `@` (LESS) wurde zu `$` (Sass).",
    explanationKo:
      "버튼 링크: 부트스트랩에는 전용 변수나 Mixin이 없습니다. 그래서 레거시와 새 코드 모두 같은 CSS 오버라이드를 사용합니다 — default와 hover 모두 `$alstom-bluegrey`. 유일한 차이: `@`(LESS)가 `$`(Sass)로 바뀌었습니다.",
  },
];

export const alltagKoDeSections = [
  {
    id: "section-alltag-team",
    title: "팀 미팅 · 업무",
    cardIds: [
      "card-alltag-praxis-literatur",
      "card-alltag-preview-stelle",
      "card-alltag-werkbank-anpassung",
      "card-alltag-delete-id-mitliefern",
      "card-alltag-werkbank-aura-sodass",
      "card-alltag-headerfavoriten-einbauen",
    ],
  },
  {
    id: "section-alltag-gastrosoft",
    title: "프로젝트 발표 (Gastrosoft)",
    cardIds: ["card-alltag-gastrosoft-thema", "card-alltag-gastrosoft-android"],
  },
  {
    id: "section-alltag-thesis",
    title: "논문 · 챕터 기획",
    cardIds: [
      "card-alltag-thema-zu-gross",
      "card-alltag-ki-kapitel2",
      "card-alltag-von-vorne",
      "card-alltag-erste-version-theorie",
    ],
  },
  {
    id: "section-alltag-paper",
    title: "교수님 · 논문 문의",
    cardIds: [
      "card-alltag-paper-fokus",
      "card-alltag-paper-titel",
      "card-alltag-paper-sprachvergleich",
      "card-alltag-paper-ziel",
    ],
  },
  {
    id: "section-alltag-workshop",
    title: "워크샵 · 퀀텀컴퓨팅",
    cardIds: [
      "card-alltag-workshop-overview",
      "card-alltag-workshop-dt-quantumlab",
      "card-alltag-workshop-zuse-hpc",
      "card-alltag-workshop-fu-campus",
      "card-alltag-workshop-team-praesentation",
    ],
  },
  {
    id: "section-alltag-bootstrap",
    title: "Bootstrap 테마 · Alstom 색상",
    cardIds: [
      "card-alltag-bootstrap-link-farbe",
      "card-alltag-bootstrap-btn-primary",
      "card-alltag-bootstrap-mixin-implementierung",
      "card-alltag-bootstrap-btn-outline",
      "card-alltag-bootstrap-outline-code",
      "card-alltag-bootstrap-fokus-ring-hinweis",
      "card-alltag-bootstrap-dropdown",
      "card-alltag-bootstrap-btn-link",
    ],
  },
];

const orderAlltagKoDeCards = (cards, sections) => {
  if (!sections?.length) return cards;
  const map = new Map(cards.map((card) => [card.id, card]));
  const ordered = [];
  const seen = new Set();
  for (const section of sections) {
    for (const id of section.cardIds) {
      const card = map.get(id);
      if (card && !seen.has(id)) {
        ordered.push(card);
        seen.add(id);
      }
    }
  }
  for (const card of cards) {
    if (!seen.has(card.id)) ordered.push(card);
  }
  return ordered;
};

export const orderedAlltagKoDeCards = orderAlltagKoDeCards(
  alltagKoDeCards,
  alltagKoDeSections,
);

export const ALLTAG_KO_DE_CARD_IDS = orderedAlltagKoDeCards.map((c) => c.id);

export const getAlltagKoDeCardById = (cardId) =>
  alltagKoDeCards.find((c) => c.id === cardId) || null;
