/** Physik · Wärme — Karteikarten (LEK 5.6., Klasse 7) */

export const WAERME_KARTEIKARTEN_BOOK_ID = "book-waerme-karteikarten";

export const waermeKarteikarten = [
  {
    id: "card-waermelehre",
    term: "Wärmelehre",
    explanationDe:
      "In der Wärmelehre lernst du: Ausdehnung von Stoffen, wichtige Begriffe (Wärme, Temperatur …), drei Arten der Wärmeübertragung, Teilchenmodell und Wärmedämmung.\n\n" +
      "Alles findest du im LEK-Themenblatt und in deinem Physikheft (S. 51–80).",
    explanationKo:
      "열역학(Wärmelehre) 단원: 물질의 팽창, Wärme·Temperatur 등 개념, 열 전달 3가지, 입자 모델, 단열을 배운다.\n\n" +
      "시험 주제표와 교과서 S. 51–80을 함께 본다.",
  },
  {
    id: "card-volumenaenderung",
    term: "Volumenänderung",
    explanationDe:
      "Wird ein Körper wärmer, wird sein Volumen meist größer; wird er kälter, meist kleiner. Das gilt für:\n\n" +
      "• feste Stoffe — dehnen sich nur wenig aus (z. B. ein Metallstab wird länger).\n" +
      "• Flüssigkeiten — dehnen sich stärker aus als feste Stoffe (z. B. Benzin im Tank).\n" +
      "• Gase — dehnen sich am stärksten aus (z. B. Luft in einem Tischtennisball wird wärmer und „bläht“ den Ball auf).\n\n" +
      "Berechnung Volumen: ΔV = V₀ · γ · ΔT, dann V_neu = V₀ + ΔV\n" +
      "(V₀ = Volumen am Anfang, γ = Volumenausdehnungskoeffizient, ΔT = Temperaturänderung in K oder °C)\n\n" +
      "Beispiel fester Stoff — Längenänderung eines Stabs:\n" +
      "Δl = l₀ · α · ΔT, dann l_neu = l₀ + Δl\n" +
      "(l₀ = Länge am Anfang, α = Längenausdehnungskoeffizient aus der Tabelle im Heft)",
    explanationKo:
      "물체가 따뜻해지면 부피가 보통 커지고, 차가워지면 작아진다. 대상별로:\n\n" +
      "• 고체(feste Stoffe) — 조금만 늘어남 (예: 금속 막대가 길어짐).\n" +
      "• 액체(Flüssigkeiten) — 고체보다 많이 늘어남 (예: 휘발유).\n" +
      "• 기체(Gase) — 가장 많이 늘어남 (예: 탁구공 안 공기가 따뜻해지면 공이 부풀음).\n\n" +
      "부피 계산: ΔV = V₀ · γ · ΔT,  V_새 = V₀ + ΔV\n\n" +
      "고체 예 — 막대 길이: Δl = l₀ · α · ΔT,  l_새 = l₀ + Δl (α는 교과서 표에서)",
  },
  {
    id: "card-laengenaenderung",
    term: "Längenänderung",
    explanationDe:
      "Ein fester Stab wird bei Erwärmung länger und bei Abkühlung kürzer — das ist die Längenänderung.\n\n" +
      "Formel: Δl = l₀ · α · ΔT\n" +
      "Neue Länge: l_neu = l₀ + Δl\n\n" +
      "Beispiel: Ein 1 m langer Eisenstab (α aus Tabelle) wird um 50 °C erwärmt → Δl ausrechnen, dann l_neu.",
    explanationKo:
      "고체 막대는 가열하면 길어지고 냉각하면 짧아진다(Längenänderung).\n\n" +
      "공식: Δl = l₀ · α · ΔT,  l_새 = l₀ + Δl\n\n" +
      "예: 길이 1 m 막대, α는 표에서, 온도 50 °C 올리면 Δl을 구한 뒤 새 길이를 구한다.",
  },
  {
    id: "card-laengenausdehnungskoeffizient",
    term: "Längenausdehnungskoeffizient",
    explanationDe:
      "Der Längenausdehnungskoeffizient α steht in der kopierten Tabelle in deinem Heft: Er sagt, wie viel länger ein Stoff pro Meter und pro Grad wird.\n\n" +
      "Je größer α, desto stärker dehnt sich der Stoff aus — wichtig für Rechnungen und für den Bimetallstreifen (S. 58).",
    explanationKo:
      "선팽창계수 α는 공책에 붙여 둔 표(kopierte Tabelle)에 있다: 1 m가 1 °C 올라갈 때 얼마나 늘어나는지.\n\n" +
      "α가 클수록 더 많이 늘어난다. 계산과 Bimetallstreifen(S. 58)에 필요하다.",
  },
  {
    id: "card-anwendungen",
    term: "Anwendungen (Ausdehnung)",
    explanationDe:
      "Im LEK sollst du Beispiele für Ausdehnung kennen:\n\n" +
      "• Bimetallstreifen (S. 58) — mit α aus der Tabelle erklären\n" +
      "• Benzinausdehnung (S. 57) — Tank nicht ganz voll\n" +
      "• Anomalie des Wassers (S. 53) — Eis schwimmt",
    explanationKo:
      "시험에 나오는 팽창 응용 예:\n\n" +
      "• Bimetallstreifen(S. 58) — 표의 α로 설명\n" +
      "• Benzinausdehnung(S. 57) — 탱크를 가득 안 채움\n" +
      "• Anomalie des Wassers(S. 53) — 얼음이 물 위에 뜸",
  },
  {
    id: "card-bimetallstreifen",
    term: "Bimetallstreifen",
    explanationDe:
      "Zwei Metalle mit unterschiedlichem α sind fest verbunden (α aus der kopierten Tabelle im Heft vergleichen, z. B. Eisen und Messing).\n\n" +
      "Wärmer → das Metall mit größerem α wird länger → der Streifen biegt sich.\n" +
      "Kälter → er biegt sich zurück.\n\n" +
      "Die Bewegung schaltet z. B. in einem Thermostat Strom ein oder aus (S. 58).",
    explanationKo:
      "α가 다른 두 금속을 붙인 띠다(표에서 α 비교, 예: 철 vs 황동).\n\n" +
      "따뜻해지면 α 큰 쪽이 더 늘어 휜다. 차가워지면 다시 펴진다.\n\n" +
      "이 움직임으로 온도 조절기 등에서 전기를 켜거나 끈다(S. 58).",
  },
  {
    id: "card-benzinausdehnung",
    term: "Benzinausdehnung",
    explanationDe:
      "Benzin ist eine Flüssigkeit und dehnt sich bei Wärme stark aus.\n\n" +
      "Deshalb sind Benzintanks nicht ganz voll — sonst könnte das Benzin bei heißem Wetter überlaufen (S. 57).",
    explanationKo:
      "휘발유는 액체라 더워지면 부피가 꽤 커진다.\n\n" +
      "그래서 연료 탱크를 가득 채우지 않는다. 여름에 넘칠 수 있기 때문이다(S. 57).",
  },
  {
    id: "card-anomalie-wasser",
    term: "Anomalie des Wassers",
    explanationDe:
      "Fast alle Stoffe werden beim Abkühlen kleiner — Wasser macht das zwischen 4 °C und 0 °C anders: Es wird dichter, aber sein Volumen wird größer.\n\n" +
      "Bei 4 °C hat Wasser die größte Dichte. Darum schwimmt Eis auf dem Wasser (S. 53).",
    explanationKo:
      "대부분 물질은 차가워지면 작아지는데, 물은 4~0 °C에서는 밀도는 커지면서 부피는 커진다(이상 현상).\n\n" +
      "4 °C에서 밀도가 가장 크다. 그래서 얼음이 물 위에 뜬다(S. 53).",
  },
  {
    id: "card-begriffe-uebersicht",
    term: "Begriffe — Übersicht",
    explanationDe:
      "Drei wichtige Begriffe (Definition & Erklärung, S. 65) — nicht verwechseln!\n\n" +
      "• Temperatur — wie warm/kalt (Teilchenbewegung im Mittel)\n" +
      "• thermische Energie — Energie in der Teilchenbewegung im Körper\n" +
      "• Wärme — übertragene Energie von Körper zu Körper (fließt vom Warmen zum Kalten)",
    explanationKo:
      "세 가지 개념(S. 65) — 헷갈리지 말 것!\n\n" +
      "• Temperatur — 얼마나 따뜻한지(입자 평균 속도)\n" +
      "• thermische Energie — 물체 안 입자 운동 에너지\n" +
      "• Wärme — 물체 사이로 옮겨진 에너지(따뜻한→차가운)",
  },
  {
    id: "card-waerme",
    term: "Wärme",
    explanationDe:
      "Wärme gibt an, wie viel Energie von einem Körper auf einen anderen übertragen wird (S. 65).\n\n" +
      "Wärme fließt immer vom wärmeren zum kälteren Körper — nicht umgekehrt.\n\n" +
      "Nicht dasselbe wie Temperatur oder thermische Energie!",
    explanationKo:
      "Wärme(열)는 한 물체에서 다른 물체로 옮겨진 에너지 양이다(S. 65).\n\n" +
      "항상 따뜻한 쪽→차가운 쪽으로 간다.\n\n" +
      "온도·열에너지와 다른 개념이다!",
  },
  {
    id: "card-thermische-energie",
    term: "thermische Energie",
    explanationDe:
      "Thermische Energie ist die Energie in der Bewegung aller Teilchen eines Körpers (S. 65).\n\n" +
      "Je schneller die Teilchen, desto größer die thermische Energie — und meist auch die Temperatur.",
    explanationKo:
      "열에너지(thermische Energie)는 물체 안 모든 입자 운동에 담긴 에너지이다(S. 65).\n\n" +
      "입자가 빠를수록 열에너지가 크고, 보통 온도도 높다.",
  },
  {
    id: "card-temperatur",
    term: "Temperatur",
    explanationDe:
      "Temperatur misst, wie warm oder kalt etwas ist — sie hängt mit der mittleren Bewegung der Teilchen zusammen (S. 65).\n\n" +
      "Du misst sie mit dem Thermometer in °C.\n\n" +
      "Sagt nicht, wie viel Energie insgesamt im Körper steckt (das wäre thermische Energie).",
    explanationKo:
      "온도(Temperatur)는 얼마나 따뜻한지/차가운지이다. 입자 평균 속도와 연결된다(S. 65).\n\n" +
      "온도계로 °C 단위로 잰다.\n\n" +
      "물체 안 에너지 총량(열에너지)과는 다르다.",
  },
  {
    id: "card-waermeuebertragung",
    term: "Arten der Wärmeübertragung",
    explanationDe:
      "Es gibt drei Arten (S. 66–67):\n\n" +
      "1. Wärmeleitung — Teilchen geben Energie weiter, Stoff bewegt sich kaum\n" +
      "2. Wärmestrahlung — Energie als Strahlung, auch ohne Stoff dazwischen\n" +
      "3. Wärmeströmung — Stoff bewegt sich und nimmt Wärme mit (nur Flüssigkeit & Gas, S. 72)\n\n" +
      "Im LEK: zu jeder Art Beispiele, Erklärung und erwünscht/unerwünscht nennen können!",
    explanationKo:
      "열 전달 3가지(S. 66–67):\n\n" +
      "1. Wärmeleitung — 입자끼리 전달\n" +
      "2. Wärmestrahlung — 복사(매질 없이)\n" +
      "3. Wärmeströmung — 유체·기체 이동(S. 72)\n\n" +
      "시험: 각각 예시·설명·erwünscht(바람직)/unerwünscht(불바람직) 말할 수 있어야 함!",
  },
  {
    id: "card-waermeleitung",
    term: "Wärmeleitung",
    explanationDe:
      "Teilchen geben Energie an Nachbarteilchen ab — der Stoff bewegt sich selbst kaum (S. 66).\n\n" +
      "Erwünscht: Topfboden wird heiß, du kochst.\n" +
      "Unerwünscht: Griff wird heiß, du verbrennst dich; Wärme geht durch Fensterglas nach draußen.",
    explanationKo:
      "입자가 옆 입자에게 에너지를 넘긴다. 물질이 크게 움직이지는 않는다(S. 66).\n\n" +
      "erwünscht: 냄비 바닥이 뜨거워져 요리 가능.\n" +
      "unerwünscht: 손잡이·창문으로 열 손실, 화상.",
  },
  {
    id: "card-waermestrahlung",
    term: "Wärmestrahlung",
    explanationDe:
      "Energie wird als Strahlung übertragen — auch durch leeren Raum, ohne Stoff dazwischen (S. 66–67).\n\n" +
      "Erwünscht: Sonne wärmt die Erde; du trocknest Wäsche in der Sonne.\n" +
      "Unerwünscht: Auto wird in der Sonne heiß; du fühlst Hitze neben dem Herd.",
    explanationKo:
      "복사로 에너지 전달 — 공기·물질 없이도 가능(S. 66–67).\n\n" +
      "erwünscht: 태양, 빨래 말리기.\n" +
      "unerwünscht: 주차된 차가 뜨거워짐, 난로 옆이 덥다.",
  },
  {
    id: "card-waermestroemung",
    term: "Wärmeströmung",
    explanationDe:
      "Der Stoff bewegt sich selbst und nimmt Wärme mit — nur bei Flüssigkeiten und Gasen (S. 66–67, 72).\n\n" +
      "Beispiel: warme Luft steigt auf, kalte sinkt → Luftströmung im Zimmer.\n\n" +
      "Erwünscht: Heizung wärmt den ganzen Raum.\n" +
      "Unerwünscht: Zugluft an Fenstern; kalte Luft am Boden, Füße frieren.",
    explanationKo:
      "액체·기체만 해당: 물질이 움직이며 열을 옮긴다(S. 66–67, 72).\n\n" +
      "예: 따뜻한 공기↑, 차가운 공기↓ — 방 안 공기 흐름(Luftströmung).\n\n" +
      "erwünscht: 난방으로 방 전체가 따뜻해짐.\n" +
      "unerwünscht: 창가 바람, 바닥 쪽 차가운 공기.",
  },
  {
    id: "card-teilchenmodell",
    term: "Teilchenmodell",
    explanationDe:
      "Mit dem Teilchenmodell erklärst du Wärme-Phänomene so: Alle Stoffe bestehen aus kleinen Teilchen.\n\n" +
      "Bei Erwärmung bewegen sich die Teilchen schneller → mehr Abstand → Ausdehnung.\n" +
      "Bei Abkühlung langsamer → enger zusammen.\n\n" +
      "Das gilt für Ausdehnung, Wärmeübertragung und Temperatur!",
    explanationKo:
      "입자 모델: 모든 물질은 작은 입자로 이루어져 있다.\n\n" +
      "가열 → 입자 빨라짐 → 간격 넓어짐 → 팽창.\n" +
      "냉각 → 입자 느려짐 → 간격 좁아짐.\n\n" +
      "팽창·열 전달·온도 설명에 모두 쓴다!",
  },
  {
    id: "card-waermedaemmung",
    term: "Wärmedämmung",
    explanationDe:
      "Wärmedämmung soll verhindern, dass Wärme ungewollt weggeht oder reinkommt.\n\n" +
      "Erklärung: schlechte Wärmeleiter nutzen (Luft, Styropor, Wolle, Glaswolle …).\n\n" +
      "Maßnahmen: dickere Wände, Dämmstoff, Doppelglas, Zugluft stoppen.",
    explanationKo:
      "단열: 원하지 않는 열 이동을 막는다.\n\n" +
      "원리: 열이 잘 안 통하는 재료(공기층, 스티로폼, 양모, 유리섬유 …).\n\n" +
      "방법(Maßnahmen): 두꺼운 벽, 단열재, 이중창, 틈새 막기.",
  },
  {
    id: "card-waermedaemmung-haus",
    term: "Wärmedämmung am Haus",
    explanationDe:
      "Am Haus dämmst du Wände, Dach, Kellerdecke und Fenster (Doppel- oder Dreifachverglasung).\n\n" +
      "Im Winter bleibt Wärme drinnen → weniger heizen.\n" +
      "Im Sommer kommt weniger Hitze rein → angenehmer und sparsamer.",
    explanationKo:
      "집 단열: 벽, 지붕, 지하천장, 창(이중·삼중 유리).\n\n" +
      "겨울 — 안의 열이 덜 빠져 난방비 절약.\n" +
      "여름 — 밖 더위가 덜 들어와 시원하고 절약.",
  },
];

export const WAERME_KARTEIKARTEN_CARD_IDS = waermeKarteikarten.map((c) => c.id);

export const getWaermeCardById = (cardId) =>
  waermeKarteikarten.find((c) => c.id === cardId) || null;
