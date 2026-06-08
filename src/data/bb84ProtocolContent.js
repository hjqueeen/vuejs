/** BB84 Protocol — 한국어 발표 원문 → English presentation script */

import { publicAssetUrl } from "@/utils/publicAssetUrl";

export const BB84_PROTOCOL_BOOK_ID = "book-BB84-protocol";

const bb84ProtocolCardsRaw = [
  // ── Workshop dialogues (2-person team · English presentation) ──
  // {
  //   id: "card-BB84-ws-d1-opening",
  //   term:
  //     "[1일차 · 워크샵 시작] 주제(BB84 구현)는 이미 정해진 상태. 민수와 지연이 처음 모여 서로 BB84 프로토콜을 얼마나 이해하고 있는지 확인한다.\n\n" +
  //     "민수: 주제는 정해졌어 — Qiskit으로 BB84 구현하는 거. 코드 쓰기 전에, 우리가 어디까지 아는지부터 보자. 프로토콜 얼마나 이해하고 있어?\n\n" +
  //     "지연: 솔직히? Alice, Bob, Eve 이름이랑 BB84가 QKD 프로토콜인 건 알아. 근데 Alice가 큐비트 인코딩한 다음에 뭐가 일어나는지는 헷갈려.\n\n" +
  //     "민수: 나도 디테일은 비슷해. 큰 그림 — 양자 키 분배 — 은 알겠는데, sifting을 지금 영어로 설명하긴 어려울 것 같아.\n\n" +
  //     "지연: 그럼 오늘은 코딩보다 서로 퀴즈하면서 빈틈 채우자. 최종 발표는 영어니까, 코드만이 아니라 vocabulary를 우리 것으로 만들어야 해.\n\n" +
  //     "민수: 동의. 내가 시작할게 — 한 문장으로, BB84가 뭘 해결해?\n\n" +
  //     "지연: Alice랑 Bob이 비밀 키를 맞추고, Eve가 엿들었는지 감지하게 해줘 — 어려운 수학만이 아니라 물리로.",
  //   explanationDe:
  //     "Min-su: The topic is set — we're implementing BB84 with Qiskit. Before we write any code, let's see where we stand. How much of the protocol do you actually understand?\n\n" +
  //     "Ji-yeon: Honestly? I know the names Alice, Bob, and Eve, and that BB84 is a QKD protocol. But I'm shaky on what happens after Alice encodes the qubits.\n\n" +
  //     "Min-su: Same here on the details. I get the big picture — quantum key distribution — but I'd struggle to explain sifting in English right now.\n\n" +
  //     "Ji-yeon: Then today shouldn't be about coding. Let's quiz each other and fill the gaps. The final presentation is in English, so we need to own the vocabulary, not just the code.\n\n" +
  //     "Min-su: Agreed. I'll start: in one sentence, what problem does BB84 solve?\n\n" +
  //     "Ji-yeon: It lets Alice and Bob agree on a secret key and detect if Eve was listening — using physics, not just hard math.",
  //   explanationKo: "Day 1 · protocol baseline · Alice/Bob/Eve",
  // },
  // {
  //   id: "card-BB84-ws-d1-qkd-steps",
  //   term:
  //     "[1일차] QKD와 BB84 단계를 영어로 서로 설명해 보는 장면.\n\n" +
  //     "민수: BB84 단계를 순서대로 말해봐 — 영어로, 발표하는 것처럼.\n\n" +
  //     "지연: OK. Alice가 랜덤 비트랑 랜덤 기저 — rectilinear 또는 diagonal — 를 생성해. 선택한 기저로 각 비트를 인코딩해. Bob도 랜덤 기저를 고르고 측정해. 그다음 기저를 공개로 비교하고, 기저가 맞은 비트만 남겨. 그게 sifting이야.\n\n" +
  //     "민수: 좋아. 공개 채널에 올라가는 것 vs 비밀로 남는 건?\n\n" +
  //     "지연: 기저는 공개로 알려. 실제 키 비트는 방송 안 해 — 기저가 맞은 위치만 키에 써.\n\n" +
  //     "민수: Eve가 틀린 기저로 측정하면?\n\n" +
  //     "지연: 상태가 collapse돼. 기저가 맞아도 Bob 결과가 Alice랑 완벽히 일치 안 해 — 그래서 도청을 감지하지.\n\n" +
  //     "민수: collapse, arbitrary, no-cloning — 이 파트 더 연습해야겠다. 오늘 밤 flashcard에 적자.",
  //   explanationDe:
  //     "Min-su: Walk me through BB84 step by step — in English, like we're already presenting.\n\n" +
  //     "Ji-yeon: OK. Alice generates random bits and random bases — rectilinear or diagonal. She encodes each bit in the basis she picked. Bob chooses random bases too and measures. Then they publicly compare bases and keep only the bits where the bases matched. That's sifting.\n\n" +
  //     "Min-su: Good. What goes on the public channel versus what stays secret?\n\n" +
  //     "Ji-yeon: Bases are announced publicly. The actual key bits are never broadcast — only the positions where bases matched count toward the key.\n\n" +
  //     "Min-su: And if Eve measured in the wrong basis?\n\n" +
  //     "Ji-yeon: The state collapses. Bob's results won't match Alice's perfectly even when their bases align — so we detect eavesdropping.\n\n" +
  //     "Min-su: That's the part I need to rehearse more: collapse, arbitrary states, no-cloning. Let's write those on flashcards tonight.",
  //   explanationKo: "sifting · public vs secret · Eve · collapse",
  // },
  // {
  //   id: "card-BB84-ws-d1-bases-quiz",
  //   term:
  //     "[1일차] 두 사람이 기저(basis)와 게이트(X, Hadamard) 이해도를 서로 질문하는 장면.\n\n" +
  //     "지연: 기저 퀴즈해 줘. Hadamard gate 언제 쓰는지 항상 헷갈려.\n\n" +
  //     "민수: Rectilinear — bit 0은 |0⟩ 그대로, bit 1은 X gate. Diagonal — bit 0은 Hadamard, bit 1은 X 다음 Hadamard. Bob도 똑같이 디코딩: rectilinear는 바로 측정, diagonal은 Hadamard 후 측정.\n\n" +
  //     "지연: Hadamard는 왜 필요해?\n\n" +
  //     "민수: 측정 기저를 바꿔 — superposition 만들어서 diagonal basis에서 일하게 해. Rectilinear면 큐비트 그대로, diagonal이면 H 적용.\n\n" +
  //     "지연: 발표 문장으로 말해볼 수 있어?\n\n" +
  //     "민수: \"The Hadamard gate changes the basis — we use it to encode and decode in the diagonal basis.\"\n\n" +
  //     "지연: 낫다. 나도 연습할게: \"A qubit can be in both 0 and 1 at once until measurement makes the state collapse.\"",
  //   explanationDe:
  //     "Ji-yeon: Quiz me on bases. I always mix up when to apply the Hadamard gate.\n\n" +
  //     "Min-su: Rectilinear basis — bit 0 stays |0⟩, bit 1 gets an X gate. Diagonal basis — bit 0 gets Hadamard, bit 1 gets X then Hadamard. Bob decodes the same way: measure directly in rectilinear, or Hadamard first then measure in diagonal.\n\n" +
  //     "Ji-yeon: Why Hadamard at all?\n\n" +
  //     "Min-su: It switches the measurement basis — it creates superposition so we can work in the diagonal basis. Leave the qubit alone for rectilinear; apply H when you need diagonal.\n\n" +
  //     "Ji-yeon: Can you say that in a presentation sentence?\n\n" +
  //     "Min-su: \"The Hadamard gate changes the basis — we use it to encode and decode in the diagonal basis.\"\n\n" +
  //     "Ji-yeon: Better. I'll practice: \"A qubit can be in both 0 and 1 at once until measurement makes the state collapse.\"",
  //   explanationKo: "rectilinear · diagonal · X gate · Hadamard",
  // },
  // {
  //   id: "card-BB84-ws-d1-gaps-scope",
  //   term:
  //     "[1일차] 각자 부족한 부분을 솔직히 말하고, 5일 안에 구현할 범위(scope)를 정하는 장면.\n\n" +
  //     "민수: 아직 fuzzy한 부분이 뭐야?\n\n" +
  //     "지연: generate_encryption_key — Alice랑 Bob이 각각 뭘 인수로 넣는지 정확히 기억 안 나. Eve가 re-encode 안 해도 mismatch가 나는 이유도 영어로 설명 자신 없어.\n\n" +
  //     "민수: 함수 구현은 내가 할게, 슬라이드 설명은 네가 확실히 해줘. 나는 no-cloning theorem — Eve가 복사 못 하는 건 아는데 \"why arbitrary?\" 물으면 멈출 것 같아.\n\n" +
  //     "지연: 현실적으로 scope 잡자. Must-have: encode, decode, sifting, Eve 없을 때 키 일치, Eve 있을 때 mismatch — 전부 Aer simulator.\n\n" +
  //     "민수: Nice-to-have는 시간 남으면: error-rate plot, 여러 random seed. IBM 실제 hardware는 demo day에 위험해.\n\n" +
  //     "지연: proof-of-concept simulation이지 production QKD 아님 — 슬라이드 1에 영어로 박자.\n\n" +
  //     "민수: \"We simulate BB84 on Qiskit Aer — we do not claim a deployable quantum network.\"",
  //   explanationDe:
  //     "Min-su: What's still fuzzy for you?\n\n" +
  //     "Ji-yeon: generate_encryption_key — I don't remember exactly what Alice and Bob each pass in as arguments. And I'm not confident explaining why Eve doesn't need to re-encode for our demo to still show a mismatch.\n\n" +
  //     "Min-su: I can implement the functions if you nail the slide explanations. My weak spot is the no-cloning theorem — I know Eve can't copy, but I'd freeze if someone asks \"why arbitrary?\"\n\n" +
  //     "Ji-yeon: Let's scope this realistically. Must-have: encode, decode, sifting, key match without Eve, mismatch with Eve — all on the Aer simulator.\n\n" +
  //     "Min-su: Nice-to-have only if we're ahead: error-rate plot, multiple random seeds. No real IBM hardware — too risky for demo day.\n\n" +
  //     "Ji-yeon: And we're clear: this is a proof-of-concept simulation, not production QKD. We say that in English on slide one.\n\n" +
  //     "Min-su: \"We simulate BB84 on Qiskit Aer — we do not claim a deployable quantum network.\"",
  //   explanationKo: "scope · must-have · proof of concept · Aer simulator",
  // },
  // {
  //   id: "card-BB84-ws-d1-timeline-roles",
  //   term:
  //     "[1일차] 5일 일정과 영어 발표 역할 분담.\n\n" +
  //     "지연: 5일 계획은?\n\n" +
  //     "민수: 1일차 — 프로토콜 점검, 끝. 2일차 — 환경, Colab, 단일 큐비트 demo, encode/decode. 3일차 — full BB84 + Eve. 4일차 — 슬라이드, 영어 리허설, backup screenshot. 5일차 — 발표.\n\n" +
  //     "지연: 15분 발표 어떻게 나눌까?\n\n" +
  //     "민수: 네가 opening — motivation, classical limits, QKD intro — 7분 정도. 내가 BB84 steps, live demo, Eve comparison — 7분. Q&A는 둘 다.\n\n" +
  //     "지연: 전부 영어 — 슬라이드, 말, 한국어 fallback 없음. 3일차부터 매일 밤 소리 내서 연습하자.\n\n" +
  //     "민수: 오늘 밤 requirements.txt에 qiskit pin 해 두자. 5일차 Colab 깨지지 않게.\n\n" +
  //     "지연: 미팅 끝나고 Git repo. 커밋 메시지: \"Add project brief and five-day plan.\"",
  //   explanationDe:
  //     "Ji-yeon: Five-day plan?\n\n" +
  //     "Min-su: Day 1 — protocol check, done. Day 2 — environment, Colab, single-qubit demo, encode/decode. Day 3 — full BB84 plus Eve. Day 4 — slides, English run-through, backup screenshots. Day 5 — present.\n\n" +
  //     "Ji-yeon: Split the fifteen-minute talk?\n\n" +
  //     "Min-su: You open: motivation, classical limits, QKD intro — about seven minutes. I take BB84 steps, live demo, Eve comparison — about seven minutes. We both handle Q&A.\n\n" +
  //     "Ji-yeon: All in English — slides, speech, no Korean fallback. We should rehearse out loud every night from Day 3.\n\n" +
  //     "Min-su: And we pin qiskit in requirements.txt tonight so Colab doesn't break on Day 5.\n\n" +
  //     "Ji-yeon: Git repo after this meeting. Commit message: \"Add project brief and five-day plan.\"",
  //   explanationKo: "5-day plan · English-only · role split · requirements pin",
  // },
  // {
  //   id: "card-BB84-ws-d2-ai-tools",
  //   term:
  //     "[2일차] 코딩 시작 전, 서로 어떤 AI 도구를 쓰는지 묻고 협업 규칙을 정하는 장면.\n\n" +
  //     "지연: 설치하기 전에 — 이 프로젝트에 AI 뭐 써?\n\n" +
  //     "민수: Qiskit 에러 설명은 주로 ChatGPT, VS Code에서는 GitHub Copilot inline. 너는?\n\n" +
  //     "지연: Cursor에 Claude, Colab 할 때는 무료 ChatGPT 탭도.\n\n" +
  //     "민수: 솔직히 하자 — AI로 debug·설명은 OK, 붙여 넣은 줄은 전부 이해해야 해. 발표 Q&A는 설명 못 하는 copy-paste 안 봐줘.\n\n" +
  //     "지연: 규칙: Copilot이 circuit 제안하면 comment는 우리 말로 다시 쓰고, 영어 docstring 한 줄 추가.\n\n" +
  //     "민수: AI 슬라이드도 wording 연습 없이 쓰지 말자 — 특히 \"relies on\" vs \"counted on\".\n\n" +
  //     "지연: Deal. 이제 환경 세팅하자.",
  //   explanationDe:
  //     "Ji-yeon: Before we install anything — what AI are you using for this project?\n\n" +
  //     "Min-su: Mostly ChatGPT for explaining Qiskit errors, and GitHub Copilot inline in VS Code. You?\n\n" +
  //     "Ji-yeon: Cursor for the editor with Claude, and sometimes the free ChatGPT tab when I'm on Colab.\n\n" +
  //     "Min-su: Let's be upfront: we can use AI to debug and explain, but we need to understand every line we paste. The presentation Q&A won't forgive copy-paste we can't explain.\n\n" +
  //     "Ji-yeon: Rule: if Copilot suggests a circuit, we rewrite the comment in our own words and add a one-line docstring in English.\n\n" +
  //     "Min-su: And no AI-generated slides without us rehearsing the wording — especially terms like \"relies on\" versus \"counted on.\"\n\n" +
  //     "Ji-yeon: Deal. Now let's actually set up the environment.",
  //   explanationKo: "ChatGPT · Copilot · Cursor · AI ground rules",
  // },
  // {
  //   id: "card-BB84-ws-d2-ide-setup",
  //   term:
  //     "[2일차] IDE 선택과 로컬 Python 환경에 대해 이야기하는 장면.\n\n" +
  //     "민수: IDE 뭐 써?\n\n" +
  //     "지연: VS Code에 Python·Jupyter extension. 데모는 브라우저 Colab. 오프라인용으로 Jupyter Lab도 있어.\n\n" +
  //     "민수: 나도 같아 — 로컬 VS Code, 발표용 Colab. global Python 오염 막으려 venv 만들게.\n\n" +
  //     "지연: Python 버전은?\n\n" +
  //     "민수: 3.10 또는 3.11 — Qiskit docs는 modern Python 3 기준이야. `python3 -m venv .venv` 하고 activate, pip install from requirements.txt.\n\n" +
  //     "지연: 내 PC도 똑같이 맞출게. import error 나면 circuit 탓하기 전에 버전부터 비교하자.\n\n" +
  //     "민수: `.venv`는 `.gitignore`, `requirements.txt`랑 영어 README setup steps는 commit.",
  //   explanationDe:
  //     "Min-su: What IDE are you on?\n\n" +
  //     "Ji-yeon: VS Code with the Python and Jupyter extensions. Colab in the browser for demos. My laptop also has Jupyter Lab if we need offline.\n\n" +
  //     "Min-su: Same — VS Code locally, Colab for the workshop presentation. I'll create a venv so we don't pollute global Python.\n\n" +
  //     "Ji-yeon: Python version?\n\n" +
  //     "Min-su: 3.10 or 3.11 — Qiskit's docs assume modern Python 3. Run `python3 -m venv .venv`, then activate and pip install from requirements.txt.\n\n" +
  //     "Ji-yeon: I'll mirror the same on my machine. If one of us gets import errors, we compare versions before blaming the circuit.\n\n" +
  //     "Min-su: Put `.venv` in `.gitignore` but commit `requirements.txt` and a short README with setup steps in English.",
  //   explanationKo: "VS Code · Jupyter · venv · Python 3.10+",
  // },
  // {
  //   id: "card-BB84-ws-d2-colab-setup",
  //   term:
  //     "[2일차] Google Colab 새 노트북 만들고, Qiskit 설치 셀을 함께 작성하는 장면.\n\n" +
  //     "지연: 화면 공유할게 — Colab 새 노트북: \"BB84-Qiskit-Workshop.\"\n\n" +
  //     "민수: 첫 셀: 버전 pin해서 설치. `!pip install qiskit==0.46.0 numpy matplotlib --quiet`\n\n" +
  //     "지연: 두 번째 셀: import랑 smoke test.\n\n" +
  //     "민수: 이렇게 해봐:\nfrom qiskit import QuantumCircuit, transpile\nfrom qiskit_aer import AerSimulator\nimport numpy as np\n\n" +
  //     "지연: 실행 중… OK, import error 없어. 세 번째 셀: one-qubit circuit, Hadamard, measure — counts만 확인.\n\n" +
  //     "민수: Google Drive에 저장하고 `.ipynb` backup download. 발표 날 runtime 끊기면 로컬 copy 열어.\n\n" +
  //     "지연: 맨 위 markdown 셀: \"Runtime: CPU. GPU not required. Re-run install cell after reconnect.\"",
  //   explanationDe:
  //     "Ji-yeon: I'll share my screen — new Colab notebook: \"BB84-Qiskit-Workshop.\"\n\n" +
  //     "Min-su: First cell: install with a pinned version. `!pip install qiskit==0.46.0 numpy matplotlib --quiet`\n\n" +
  //     "Ji-yeon: Second cell: imports and a smoke test.\n\n" +
  //     "Min-su: Try:\n" +
  //     "from qiskit import QuantumCircuit, transpile\n" +
  //     "from qiskit_aer import AerSimulator\n" +
  //     "import numpy as np\n\n" +
  //     "Ji-yeon: Running… OK, no import errors. Third cell: one-qubit circuit, Hadamard, measure — just to see counts.\n\n" +
  //     "Min-su: Save a copy to Google Drive and download `.ipynb` for backup. If runtime disconnects on presentation day, we open the local copy.\n\n" +
  //     "Ji-yeon: I'll add a markdown cell at the top: \"Runtime: CPU. GPU not required. Re-run install cell after reconnect.\"",
  //   explanationKo: "Colab · pip install · smoke test · backup .ipynb",
  // },
  // {
  //   id: "card-BB84-ws-d2-qiskit-local",
  //   term:
  //     "[2일차] 로컬에 Qiskit 설치하고 import 테스트까지 마치는 대화.\n\n" +
  //     "민수: 로컬 install. `pip install -r requirements.txt` 했어 — qiskit, qiskit-aer, numpy, matplotlib.\n\n" +
  //     "지연: `from qiskit import QuantumCircuit` 됐어?\n\n" +
  //     "민수: 첫 시도 fail — venv activate 깜빡. 두 번째 pass. `which python`이 `.venv` 안 가리키는지 항상 확인.\n\n" +
  //     "지연: 나도 같아. Makefile에 `make setup` — venv + pip install.\n\n" +
  //     "민수: sanity check — two-qubit circuit, AerSimulator, counts 출력. 둘 다 `{ '00': ~1024 }` 비슷하면 aligned.\n\n" +
  //     "지연: counts good. Commit: \"Add requirements and Aer simulator smoke test.\"\n\n" +
  //     "민수: 다음: single-qubit Alice-to-Bob demo, then encode_message. 환경 세팅 day 끝.",
  //   explanationDe:
  //     "Min-su: Local install time. I ran `pip install -r requirements.txt` — qiskit, qiskit-aer, numpy, matplotlib.\n\n" +
  //     "Ji-yeon: Did `from qiskit import QuantumCircuit` work?\n\n" +
  //     "Min-su: First try failed — I forgot to activate the venv. Second try passed. Always check `which python` points inside `.venv`.\n\n" +
  //     "Ji-yeon: Same here. I'll add a Makefile target: `make setup` runs venv plus pip install.\n\n" +
  //     "Min-su: Quick sanity check — build a two-qubit circuit, run on AerSimulator, print counts. If we both get `{ '00': ~1024 }` or similar, we're aligned.\n\n" +
  //     "Ji-yeon: Counts look good. Commit: \"Add requirements and Aer simulator smoke test.\"\n\n" +
  //     "Min-su: Next up: single-qubit Alice-to-Bob demo, then encode_message. Environment day is done.",
  //   explanationKo: "pip install · venv · AerSimulator · smoke test",
  // },
  // ── Presentation script ──
  {
    id: "card-BB84-intro",
    term:
      "안녕하세요 키스 킷(Qiskit)을 사용한 BB84 프로토콜 구현에 대해 설명할 김혜진 입니다. 이번 영상은 간단한 양자 컴퓨팅의 개념 기존 암호 통신의 한계와 양자 암호 통신에 대해 알아보고 양자 암호 통신 중 하나인 BB84 프로토콜을 알아보려고 합니다 이후 키스 킷을 사용한 BB84 프로토콜 구현 실습도 진행하고자 합니다 실습 파트에서 필요한 건 파이썬 기초 지식과 구글 코렉 기초 사용법입니다",
    explanationDe:
      "Hello, I'm Hyejin Kim, and today I'll be talking about implementing the BB84 protocol using Qiskit. In this presentation, we'll cover some basic concepts of quantum computing, the limitations of conventional cryptography, and quantum cryptography — including the BB84 protocol. After that, we'll walk through a hands-on implementation of BB84 with Qiskit. For the practical part, you'll need basic Python knowledge and familiarity with Google Colab.",
    explanationKo: "Intro · Qiskit · BB84 · Colab",
  },
  {
    id: "card-BB84-quantum-computing",
    term:
      "양자 컴퓨팅은 양자 현상을 이용하여 동시 다발적으로 데이터를 처리하는 기술로 연산 속도가 굉장히 빠릅니다 최근에 큰 화재가 된 것이 바로 구글의 양자 컴퓨팅이 있는데요 아래의 기사처럼 양자 컴퓨팅으로 10.7조년이 걸리는 문제를 5분 만에 해결했다는 내용이었습니다 이렇게 양자 컴퓨팅은 빠른 연산 속도로 인해 다양한 분야에서 유용하게 이용될 수 있어 세계 여러 기업들이 양자 컴퓨팅 발전에 힘을 쏟고 있습니다",
    explanationDe:
      "Quantum computing is a technology that uses quantum phenomena to process data in parallel on a massive scale, which makes computation extremely fast. A recent headline example is Google's quantum supremacy experiment — news reports said they solved a problem that would take about 10.7 trillion years on a classical computer in just five minutes. Because of this speed, quantum computing is expected to be useful across many fields, and companies around the world are investing heavily in its development.",
    explanationKo: "Quantum computing · quantum supremacy",
  },
  {
    id: "card-BB84-classical-crypto",
    term:
      "양자 암호 통신을 설명하기에 앞서 기존의 암호 통신에 대해 설명하고자 합니다 현재 널리 사용되고 있는 비대칭 공개키 암호 재계는 해결하기 매우 어려운 수학적인 문제를 공개키로 사용하여 정보를 암호화하고 그 해를 비밀키로 회독하는 방식을 사용합니다 즉 계산 복잡성에 기초하고 있습니다",
    explanationDe:
      "Before we get into quantum cryptography, let me briefly explain how conventional cryptography works. The asymmetric public-key schemes widely used today rely on mathematical problems that are very hard to solve. You encrypt information with a public key, and only someone with the private key can decrypt it — so security is based on computational complexity.",
    explanationKo: "Public-key cryptography · computational complexity",
  },
  {
    id: "card-BB84-rsa",
    term:
      "예를 들어 RSA 공개키 암호 책에는 소인수 분해 문제를 이용합니다 소인수 분해는 문제의 크기가 증가함에 따라 계산 시간이 지수함수적으로 증가하게 됩니다. 이를 이용해 송신자와 수신자가 충분히 큰 숫자의 소인수 분해 문제를 공개키로 사용하면 도청자 암호문을 해독하기 현실적으로 불가능하다는 점을 이용합니다.",
    explanationDe:
      "Take RSA as an example: it uses the integer factorization problem. As the size of the problem grows, the time needed to solve it increases exponentially. So if sender and receiver use a large enough factorization problem as their public key, an eavesdropper who intercepts the ciphertext can't realistically decrypt it in practice.",
    explanationKo: "RSA · integer factorization",
  },
  {
    id: "card-BB84-quantum-threat",
    term:
      "이렇게 기존의 암호 체계는 암호를 해독하는데 오래 걸린다는 점을 이용하여 안전성을 보장하였지만 양자 컴퓨터는 아까 말했듯이 엄청난 연산 속도로 인해 수학적 단재를 순식간에 해결할 수 있습니다. 따라서 양자 컴퓨팅이 발전하면서 기존 암호 체계의 보안이 더 이상 안정하다고 보장할 수 없는 것입니다.",
    explanationDe:
      "Traditional cryptography stayed secure because decryption takes a long time — but as I mentioned, quantum computers can solve these mathematical hard problems in a flash. As quantum computing advances, we can no longer assume that our existing crypto systems are safe.",
    explanationKo: "Quantum threat to classical crypto",
  },
  {
    id: "card-BB84-qkd-solution",
    term:
      "그러면 어떻게 해결할 수 있을까요? 이를 해결할 수 있는 방법이 바로 양자 암호 통신입니다. 양자암호통신은 암호화된 정보를 푸는 키를 전송할 때 양자 역학의 법칙을 이용하여 도청이 불가능하도록 하는 기술입니다. 기존의 암호 체계가 해독하는데 오래 걸려 안전하다고 보상했다면, 양자 암호 통신은 물리적 현상을 이용하여 양자 컴퓨터의 능력과 관계없이 일정한 보안성을 유지할 수 있습니다.",
    explanationDe:
      "So how do we address this? One answer is quantum cryptography. When you transmit the encryption key, quantum cryptography uses the laws of quantum mechanics to make eavesdropping impossible. Where classical crypto counted on slow decryption for safety, quantum cryptography uses physical principles so you maintain a consistent level of security regardless of how powerful quantum computers become.",
    explanationKo: "Quantum cryptography · QKD overview · count on",
    vocabulary: [
      {
        word: "count on (~ for ~)",
        meaning:
          "~에 의존하다, ~을 믿고 삼다 · to rely on, depend on. Where A counted on B for C = A는 C(안전 등)을 위해 B에 의존했던 반면(대조)",
        examples: [
          {
            de: "For decades, the industry counted on mathematical hardness — not physics — to keep keys safe.",
            ko: "수십 년 동안 업계는 키 안전을 물리가 아니라 ‘수학적 난이도’에 의존해 왔다.",
          },
          {
            de: "You can't count on brute-force attacks staying impractical as computing power keeps growing.",
            ko: "연산 능력이 계속 늘어나는데 무차별 대입 공격이 영원히 비현실적일 거라고 믿을 수는 없다.",
          },
        ],
      },
    ],
  },
  {
    id: "card-BB84-quantum-properties",
    term:
      "이제 양자 암호 통신에 사용되는 양자의 특성에 대해 설명하려고 합니다. 양자는 양자 중첩 불확정성 복제 불가능성이라는 특징을 가지고 있습니다. 양자 중첩이란 양자는 0과 1을 동시에 가질 수 있다는 특징으로 암호키 값을 알 수 없도록 두 상태를 중첩하여 전송하는데 사용됩니다. 불확정성은 양자를 관측하기 전에는 중첩 상태였다가 관측을 하면 붕괴되어 중첩 상태가 깨지는 특징으로 이를 이용해 양자암호 통신 중에 도청을 발각 수 있습니다. 복제 불가능성은 임의의 양자 정보를 완벽하게 복제하는 것은 불가능하다는 특징으로 도청 후 같은 양자를 복사하여 수신자에게 보내 도청을 숨기는 것이 불가능하게 합니다.",
    explanationDe:
      "Now let me explain the quantum properties that quantum cryptography relies on. Quantum systems have three key features: superposition, measurement uncertainty, and the no-cloning theorem. Superposition means a qubit can be in both 0 and 1 at once — we use that to send keys in overlapping states so their values stay hidden. Uncertainty means that before you measure a quantum state it can be in superposition, but once you measure, the state collapses — and that lets us detect eavesdropping during key exchange. No-cloning means you cannot perfectly copy arbitrary quantum information — so an eavesdropper can't measure, copy, and forward the same quantum state to hide what they did.",
    explanationKo: "Superposition · uncertainty · no-cloning · rely on · both A and B · collapse · arbitrary",
    vocabulary: [
      {
        word: "rely on",
        meaning:
          "~에 의존하다, ~을 근거로 하다 · to depend on (설명체·기술 문서에 count on보다 자주 씀). relies on = 3인칭 단수",
        examples: [
          {
            de: "Eavesdropping detection relies on the fact that any measurement disturbs the state.",
            ko: "도청 감지는 어떤 측정이든 상태를 바꾼다는 점에 의존한다.",
          },
          {
            de: "BB84 does not rely on hard math problems — it relies on the laws of physics.",
            ko: "BB84는 어려운 수학 문제가 아니라 물리 법칙에 의존한다.",
          },
        ],
      },
      {
        word: "both A and B · in both A and B",
        meaning:
          "both A and B = A와 B 둘 다. be + in both A and B (at once) = A와 B 두 상태에 동시에 있다. either A or B(둘 중 하나)와 대비",
        examples: [
          {
            de: "A classical bit is either 0 or 1, never both at once.",
            ko: "고전 비트는 0 또는 1이지, 둘 다 동시에는 아니다.",
          },
          {
            de: "BB84 uses both the rectilinear and the diagonal basis.",
            ko: "BB84는 직교 기저와 대각 기저 둘 다를 사용한다.",
          },
        ],
      },
      {
        word: "collapse (the state collapses)",
        meaning:
          "(중첩 상태가) 붕괴하다 · measurement 후 하나의 확정값(0 또는 1)으로 떨어짐. superposition이 깨지는 현상",
        examples: [
          {
            de: "Even one measurement can make the superposition collapse into a single outcome.",
            ko: "측정 한 번만으로도 중첩이 하나의 결과로 붕괴할 수 있다.",
          },
          {
            de: "If Eve intercepts the qubit, the state may collapse before Bob receives it.",
            ko: "이브가 큐비트를 가로채면, 밥이 받기 전에 상태가 붕괴할 수 있다.",
          },
        ],
      },
      {
        word: "arbitrary",
        meaning:
          "임의의, 특정되지 않은, 아무(미지의) ~ · any (unspecified). arbitrary quantum information = 어떤 양자 상태든(미리 정해지지 않은)",
        examples: [
          {
            de: "The no-cloning theorem applies to an arbitrary unknown state, not just one fixed pattern.",
            ko: "복제 불가 정리는 하나의 고정 패턴만이 아니라 임의의 미지 상태에도 적용된다.",
          },
          {
            de: "You cannot perfectly duplicate a qubit whose state you did not prepare yourself.",
            ko: "직접 준비하지 않은 큐비트 상태는 완벽히 복제할 수 없다.",
          },
        ],
      },
    ],
  },
  {
    id: "card-BB84-qkd-name",
    term:
      "양자암호 통신 기술은 이러한 특성을 이용하여 송신자와 수신자 사이에 암호키를 안전하게 실시간으로 분배하는 시스템으로 qkd 퀀텀 키 디스트리뷰션으로도 알려져 있습니다. 다음으로 qkd 대표적인 BB84 프로토콜을 설명하겠습니다 BB84는네 가지 양자 상태를 이용하여 양자 암호 통신을 하는 프로토콜입니다. 이 프로토콜의 동작 과정을 설명하기 전에 몇 가지 알아야 할 지식이 있는데요. 너무 자세히 설명하면 면 어려우니까 간단하게 설명해 보도록 하겠습니다.",
    explanationDe:
      "Using these properties, quantum cryptography builds a system where sender and receiver can safely distribute encryption keys in real time. This is known as QKD — Quantum Key Distribution. Next, I'll walk you through BB84, one of the most representative QKD protocols. BB84 performs quantum key distribution using four quantum states. Before we look at the protocol steps, there are a few concepts we should cover — I'll keep this simple so it's not too overwhelming.",
    explanationKo: "QKD · BB84 intro · distribute · representative · overwhelming",
    vocabulary: [
      {
        word: "distribute",
        meaning:
          "분배하다, 나눠 주다 · distribute keys / distribute information. QKD에서는 송·수신자 사이에 암호키를 안전하게 나눠 줌",
        examples: [
          {
            de: "The server distributes software updates to every machine on the network.",
            ko: "서버가 네트워크의 모든 기기에 소프트웨어 업데이트를 배포한다.",
          },
          {
            de: "Our goal is to distribute the workload evenly across the team.",
            ko: "우리 목표는 팀 전체에 업무 부담을 고르게 나누는 것이다.",
          },
        ],
      },
      {
        word: "representative (of ~)",
        meaning:
          "대표적인 · typical or classic example of a group. one of the most representative protocols = 그 중 가장 대표적인 프로토콜 하나",
        examples: [
          {
            de: "Shor's algorithm is a representative example of what quantum computers can do to classical crypto.",
            ko: "Shor 알고리즘은 양자 컴퓨터가 고전 암호에 할 수 있는 일의 대표적 예이다.",
          },
          {
            de: "We chose a representative sample of test cases before running the full simulation.",
            ko: "전체 시뮬레이션 전에 대표적인 테스트 케이스 샘플을 골랐다.",
          },
        ],
      },
      {
        word: "overwhelming",
        meaning:
          "압도적인, (정보·난이도가) 감당하기 벅찬 · too much to take in at once. not too overwhelming = 너무 벅차지 않게",
        examples: [
          {
            de: "The first lecture was overwhelming — too many new terms in one hour.",
            ko: "첫 강의는 감당하기 벅찼다 — 한 시간에 새 용어가 너무 많았다.",
          },
          {
            de: "I'll keep the math section short so the audience doesn't feel overwhelmed.",
            ko: "청중이 압도당하지 않도록 수학 파트는 짧게 가져가겠다.",
          },
        ],
      },
    ],
  },
  {
    id: "card-BB84-qubit-bases",
    term:
      "먼저 양자 컴퓨팅에서 사용되는 비트를 퀀텀 비트 큐비트라고 합니다. 아까 말했듯이 0 혹은 1로 고정된 우리가 흔히 아는 비트와 달리 큐비트는 0과 1을 확률적으로 동시에 가지는 중첩된 상태로 존재할 수 있습니다. 기저는 양자 상태를 표현하는데 사용하는 직교 벡터 집합으로 bb84에서는 직교 기저와 각 기저를 다룹니다. 양자가 직교 대각 평강 필터를 지나면 아래 사진과 같이 양자 상태가 변한다고 이해하시면 편할 것 같습니다. 직교 기저의 경우 0은 수평 편강 1은 수직 평강을 인코딩하고 대각 기저의 경우 0은 대각 평광 1은 반대각 평강을 인코딩합니다",
    explanationDe:
      "In quantum computing, the basic unit of information is the quantum bit, or qubit. Unlike a classical bit that is fixed at 0 or 1, a qubit can exist in a superposition where it probabilistically holds both 0 and 1 at the same time. A basis is a set of orthogonal vectors used to represent quantum states. BB84 uses two bases — the rectilinear basis and the diagonal basis — and when a quantum state passes through different polarization filters, its representation changes, as shown in the diagram. In the rectilinear basis, 0 maps to horizontal polarization and 1 to vertical. In the diagonal basis, 0 maps to diagonal polarization and 1 to anti-diagonal.",
    explanationKo: "Qubit · rectilinear & diagonal bases",
  },
  {
    id: "card-BB84-protocol-steps",
    term:
      "이제 BB84 프로토콜의 동작에 대해 알려드리겠습니다. 암호학에서는 친근함을 위해 송신자 앨리스, 수신자를 밥, 도청자를 이브라고 부릅니다. 이를 적용하여 설명해 보도록 하겠습니다. 첫 번째로 앨리스는 랜덤 비트들을 생성하고 그 비트 수만큼 랜덤하게 기저를 선택합니다. 다음으로 앨리스는 선택한 기저로 비트를 인코딩합니다. 아까 말했듯이 표를 보시면 비트 0과 직교 기저를 선택하면 수평으로 인코딩 되고 1과 직교기저을 선택하면 수직으로, 1과 대각 기저를 선택하면 반대각으로, 0과 대각 기저를 선택하면 대각으로 인코딩 되는 것을 확인할 수 있습니다. 이후 밥도 비트 수만큼 랜덤 기저를 선택합니다 이제 엘리스와 밥은 기저를 공유하여 같은 기조인 비트만 암호키로 사용합니다. 둘의 암호키가 같은 경우 도청 없이 성공적으로 전송이 되었다고 보고, 암호키가 다른 경우 도청이 있었다고 보는 것이 BB 84의 기본적인 동작 과정 입니다.",
    explanationDe:
      "Now let's go through how BB84 works. In cryptography we often name the sender Alice, the receiver Bob, and the eavesdropper Eve — I'll use those names here. First, Alice generates random bits and randomly chooses a basis for each one. Then she encodes each bit in the chosen basis — for example, bit 0 with the rectilinear basis becomes horizontal polarization, bit 1 with rectilinear becomes vertical, and with the diagonal basis, 0 becomes diagonal and 1 becomes anti-diagonal. Bob also picks a random basis for each incoming qubit. After transmission, Alice and Bob publicly compare their basis choices and keep only the bits where they matched — those become the shared secret key. If their keys agree, they assume the channel was secure; if not, they treat it as possible eavesdropping. That's the core idea of BB84.",
    explanationKo: "Alice · Bob · Eve · key sifting",
  },
  {
    id: "card-BB84-qiskit-intro",
    term:
      "이제 키스 킷을 사용하여 BB84 프로토콜을 구현해 보도록 하겠습니다 키스 킷은 클라우드 시스템을 통해 양자 컴퓨터에 접근하고 회로를 설계하기 위해 만들어진 오픈소스 양자 컴퓨팅 프레임워크입니다. 실습은 구글 코랩에서 진행할 거고 코드는 미리 쳐 놨습니다. 먼저 키스키 사용에 필요한 패키지를 설치 후 불러오겠습니다. 이렇게 패키지를 설치하고 해당 패키지들을 불러오겠습니다 그리고 BB84 구현 전에 간단하게 앨리스가 밥에게 하나의 비트를 보내고 밥이 잃는 상황을 만들어 보겠습니다.",
    explanationDe:
      "Now let's implement BB84 using Qiskit. Qiskit is an open-source quantum computing framework designed to access quantum computers through the cloud and to design quantum circuits. We'll run the lab in Google Colab, and the code is already prepared. First we'll install and import the packages Qiskit needs. Before the full BB84 implementation, let's look at a simple case: Alice sends one bit to Bob and Bob receives it.",
    explanationKo: "Qiskit · Colab · setup",
  },
  {
    id: "card-BB84-hadamard",
    term:
      "먼저 큐비트 0이 대각 기저로 통과하게 되면 대각 편강으로 인코딩됩니다. 이때 대각 기저를 하다마드 게이트(Hadamard Gate)를 사용하여 구현할 수 있는데요. 하다마드 게이트는 양자 중첩 상태를 만들어 주는 것으로 기저를 바꾸는 데에 사용됩니다. 아무것도 건들지 않았을 때는 직교 기저의 상태로 대각 기저 상태가 필요할 때 하다마드 게이트를 사용하면 됩니다.",
    explanationDe:
      "When qubit 0 passes through the diagonal basis, it gets encoded as diagonal polarization. We can implement the diagonal basis using the Hadamard gate. The Hadamard gate creates superposition and is used to change the measurement basis — when you want the rectilinear basis you leave the qubit alone, and when you need the diagonal basis you apply a Hadamard gate.",
    explanationKo: "Hadamard gate · basis change",
  },
  {
    id: "card-BB84-single-qubit",
    term:
      "자 그럼 코드를 확인해 봅시다. 먼저 하나의 큐비트를 사용하는 양자 해로를 만들어 줍니다. 만들고 난 직후에 초기 큐비트는 0이고 여기에 하다마드 게이트를 이용하여 대각 기저로 바꿔줍니다. 즉 0이 대각 기저를 통과하여 대각 편강으로 인코딩됩니다. 그리고 베리어는 회로 그림에서 구분이 편하게 넣어둔 것으로 별다른 의미는 없습니다. 다음으로 밥이 같은 대각 기저로 측정하기 위해 하다마드 게이트를 사용한 후 측정 즉 디코딩합니다. 결과를 보면 앨리스가 보냈던 원래 상태인 0이 100% 됩니다.",
    explanationDe:
      "Let's look at the code. We create a one-qubit quantum circuit. Right after initialization the qubit starts in |0⟩, and we apply a Hadamard gate to switch it to the diagonal basis — so 0 becomes diagonally polarized. The barrier in the diagram is just for visual separation; it doesn't change the physics. Bob then applies another Hadamard gate and measures in the same diagonal basis to decode. When we run the circuit, we see the original state Alice sent — 0 — with 100% probability.",
    explanationKo: "Single-qubit demo · no eavesdropping",
  },
  {
    id: "card-BB84-eve-demo",
    term:
      "다음으로 도청이 있는 상황입니다 도청이 일어날 때 한번 측정되면 붕괴되는 양자의 불확정성 때문에 수신자는 원래 상태를 알 수 없다고 했습니다. 아까와 코드는 같고 중간에 이브가 도청을 한 경우를 넣어 보았는데요. 중간에 한번 측정이 있고 난 후에 결과를 살펴보면 앨리스가 보냈던 원래 상태인 0이 100% 나오는 것이 아니라 0과 1이 반 의 확률로 나오게 됩니다.",
    explanationDe:
      "Next, the eavesdropping scenario. As I said, because of measurement uncertainty, once Eve measures the qubit it collapses and Bob can no longer recover the original state. The code is the same as before, except we insert Eve's measurement in the middle. After that intervention, the result is no longer 100% zero — we get 0 and 1 with about 50% each.",
    explanationKo: "Eve · measurement collapse",
  },
  {
    id: "card-BB84-lab-start",
    term:
      "자 이제 BB84 프로토콜 실습을 해 보겠습니다. 과정은 PPT 설명드린 것과 동일하여 바로 구현으로 넘어가겠습니다. 먼저 아무도 도청을 하지 않는 경우입니다. 이때는 앨리스와 밥이 같은 기저를 선택했다면 앨리스가 보낸 비트와 밥이 디코딩한 비트가 100% 같겠죠. 이걸 이용하여 같은 기저를 사용한 비트를 암호키로 사용하는데요.",
    explanationDe:
      "Now let's move on to the BB84 lab. The flow matches the slides, so I'll go straight into the implementation. First, the case with no eavesdropping: when Alice and Bob chose the same basis, Bob's decoded bits should match Alice's bits perfectly — and we use those matching cases to build the key.",
    explanationKo: "BB84 lab · no eavesdropping",
  },
  {
    id: "card-BB84-random-bits",
    term:
      "한번 확인해 보겠습니다 먼저 MP 랜덤 시드를 이용해 랜덤으로 0부터 1까지 비트 35개 기저 35개를 뽑아 보겠습니다. 기저는 0인 경우 직교 기저, 1인 경우 대각 기저로 생각해 주시면 됩니다. 결과는 다음과 같이 비트와 기저가 잘 선택된 것을 보실 수 있습니다.",
    explanationDe:
      "Let's verify that. Using NumPy's random seed, we'll randomly pick 35 bits and 35 bases. Think of basis 0 as rectilinear and basis 1 as diagonal. You can see the bits and bases were selected correctly.",
    explanationKo: "Random bits & bases · NumPy",
  },
  {
    id: "card-BB84-encoding",
    term:
      "이제 선택한 기저로 인코딩을 해볼 건데요. 코드는 다음과 같습니다. 비트 수인 n번 동안 양자 회로를 생성하고, 기저와 비트에 맞게 양자 상태를 바꿔 주면 됩니다. 먼저 직교 기저이고, 초기비트가 0인 경우 그대로 넘겨주면 됩니다. 1인 경우, X_Gate를 사용하여 0을 1로 만들어주면 됩니다. 대각 기저는 초기 비트가 0인 경우, 하다마드 게이트를 통해 대각 기저 상태로 바꿔주면 되고, 1인 경우에는 마찬가지로 X_게이트를 통해 1로 만들어 준 후 하다마드 게이트를 적용해 주시면 됩니다. 이렇게 인코딩한 비트들을 붙여서 리턴해 주는 것이 인코드 메시지 함수이고, 이렇게 비트와 베이스를 인수로 보내면 사용할 수 있습니다. 메시지는 인코딩된 상태라서 따로 프린트지 않고, 후에 앨리스의 비트와 밥이 디코딩한 결과를 비교하면 될 것 같습니다.",
    explanationDe:
      "Next we encode according to the chosen bases. For each of the n bits we build a quantum circuit and set the state based on the bit and basis. If the basis is rectilinear and the bit is 0, we pass it through unchanged. If it's 1, we flip it with an X gate. For the diagonal basis with bit 0, we apply Hadamard; for bit 1 we X first, then Hadamard. We concatenate these encoded circuits in the encode_message function — pass in the bits and bases, and you get the encoded message. The message itself is a quantum state, so we won't print it directly; we'll compare Alice's bits with Bob's decoded results later.",
    explanationKo: "encode_message · X gate · Hadamard",
  },
  {
    id: "card-BB84-decoding",
    term:
      "다음으로 밥이 비트에 대한 랜덤 기저를 선택합니다. 이렇게 타나는 것을 볼 수 있고요. 그리고 그에 맞게 디코딩을 해볼 건데요. 코드는 다음과 같습니다. n번 동안 선택한 기저에 디코딩을 진행합니다. 직교 기저의 경우 그냥 q번째 메시지를 측정하면 되고 대각 기저의 경우 하다마드 게이트를 적용한 후 측정하면 됩니다. 이렇게 디코딩한 비트들을 붙여서 리턴해 주는 것이 디코드 메시지 함수이고 이렇게 인코딩된 메시지와 선택한 기저를 인수로 보내면 사용할 수 있습니다. 결과는 다음과 같습니다 한 눈에 알아보기 어려우실 모르겠지만 앨리스와 밥의 기저가 같은 경우에는 앨리스의 비트와 밥의 결과가 완벽히 동일합니다. 이는 다음 단계에서 더 쉽게 확인할 수 있습니다.",
    explanationDe:
      "Bob randomly chooses bases for each qubit, then decodes. For n qubits, if Bob's basis is rectilinear he measures directly; if it's diagonal he applies Hadamard first, then measures. The decode_message function collects the decoded bits. At first glance it's hard to tell, but whenever Alice and Bob used the same basis, Bob's result matches Alice's bit exactly — we'll verify that more clearly in the next step.",
    explanationKo: "decode_message · Bob's measurement",
  },
  {
    id: "card-BB84-key-generation",
    term:
      "이제 앨리스와 밥은 서로의 기저를 공유하여 같은 기저의 경우 해당 비트를 암호키로 사용합니다. 코드는 다음과 같습니다. 서로의 기저가 같은 경우 인크립션 키에 추가하고 n번 동안 반복을 완료했으면 이를 리턴해 주는 제너레이트 인크립션 키 함수입니다. 앨리스의 경우 송 수신자의 기저와 초기 비트 그리고 밥의 경우 송 수신자의 기저와 디코딩한 결과를 인수로 보내면 사용할 수 있습니다. 앨리스와 밥의 암호키를 생성한 결과는 다음과 같습니다. 마지막으로 암호키가 같은지 확인합니다. 아까 봤듯이 암호키가 완벽히 동일한 것을 확인할 수 있었죠. 한번 돌리면 전송 성공이라고 뜨게 되고요. 이렇게 둘의 키가 동일한 경우 도청 없이 전송에 성공했다고 볼 수 있습니다.",
    explanationDe:
      "Alice and Bob now publicly share their basis choices and add matching cases to the encryption key — that's what generate_encryption_key does. Alice passes both parties' bases plus her original bits; Bob passes the bases plus his decoded results. The keys they generate look like this. Finally we check whether the keys match. As we saw, they're identical — run it once and you get a successful transmission message. When both keys match, we can conclude there was no eavesdropping.",
    explanationKo: "generate_encryption_key · key check",
  },
  {
    id: "card-BB84-eavesdropping-lab",
    term:
      "번외로 누군가 도청을 한 경우에는 어떻게 되는지 한번 보여 드리겠습니다. 코드는 별로 달라진게 없고, 중간에 이브가 랜덤으로 기저를 선택하여 그에 맞게 앨리스의 메시지를 디코딩하는 코드가 중간에 추가되었습니다. 이렇게 이브가 한번 도청을 하면 결과는 어떻게 될까요? 다음과 같이 이브의 도청으로 인해 양자 상태가 붕괴되어 앨리스의 초기 비트와 100% 같은 상태를 유지할 수 없어져서 밥은 다른 결과를 받게 됩니다. 이로 인해 앨리스와 밥이 같은 기저를 선택해 만든 아무키도 완벽하게 동일하지 않아 도청을 감지할 수 있습니다.",
    explanationDe:
      "As a bonus, here's what happens when someone eavesdrops. The code is mostly the same, but we added a step where Eve randomly picks a basis and decodes Alice's message. When Eve measures once, the quantum state collapses, so Bob can no longer keep the same result as Alice's original bit. That means even the bits where Alice and Bob chose the same basis no longer match perfectly — and that's how we detect eavesdropping.",
    explanationKo: "Eve in BB84 lab · detection",
  },
  {
    id: "card-BB84-closing",
    term:
      "참고 자료는 다음과 같이 양자암호 통신 기술에 대해 알아보기 위해 몇 가지 논문을 참고하였고 그리고 키스 킷을 사용하기 위해 키스킷 텍스트북 깃허브 참고하였습니다. 지금까지 키스 킷을 사용한 BB84 프로토콜 구현에 대해 알아보았습니다 감사합니다.",
    explanationDe:
      "For references, I consulted several papers on quantum cryptography and the Qiskit textbook on GitHub for the implementation. That wraps up our look at implementing the BB84 protocol with Qiskit. Thank you.",
    explanationKo: "References · closing",
  },
];

export const BB84ProtocolCards = bb84ProtocolCardsRaw.map((card) => ({
  ...card,
  normalSpeedUrl: publicAssetUrl(`audio/bb84-protocol/${card.id}-normal.mp3`),
}));

export const BB84_PROTOCOL_CARD_IDS = BB84ProtocolCards.map((c) => c.id);

export const getBb84ProtocolCardById = (cardId) =>
  BB84ProtocolCards.find((c) => c.id === cardId) || null;
