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
      "Delete가 지금 안 돼. Reload 후에 함수에서 id가 안 넘어와서 DELETE를 호출할 수가 없거든. Item마다 id랑 sourceId도 같이 보내줄 수 있어? 그러면 될 것 같아.",
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
      "Aura Werkbank에서는 우리가 이미 있는 백엔드 URL을 다 쓸 수 있어. 그래야 제대로 동작하거든.",
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
      "headerFavoriten 오늘 넣을 수 있어? 그러면 업데이트하기 전에 백엔드를 제대로 테스트할 수 있거든. 백엔드는 참고하라고 이미 업데이트해 뒀어.",
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
];

export const ALLTAG_KO_DE_CARD_IDS = alltagKoDeCards.map((c) => c.id);

export const getAlltagKoDeCardById = (cardId) =>
  alltagKoDeCards.find((c) => c.id === cardId) || null;
