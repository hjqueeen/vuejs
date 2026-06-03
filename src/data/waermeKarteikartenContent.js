/** Physik · Wärme — Karteikarten (LEK 5.6., Klasse 7) */

export const WAERME_KARTEIKARTEN_BOOK_ID = "book-waerme-karteikarten";

export const waermeKarteikarten = [
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
      "Der Längenausdehnungskoeffizient α steht in deiner Tabelle im Heft: Er sagt, wie viel länger ein Stoff pro Meter und pro Grad wird.\n\n" +
      "Je größer α, desto stärker dehnt sich der Stoff bei gleicher Temperaturänderung aus.",
    explanationKo:
      "선팽창계수 α는 공책 표에 있다: 1 m 길이가 1 °C 올라갈 때 얼마나 늘어나는지 나타낸다.\n\n" +
      "α가 크면 같은 온도 변화에 더 많이 늘어난다.",
  },
  {
    id: "card-bimetallstreifen",
    term: "Bimetallstreifen",
    explanationDe:
      "Ein Bimetallstreifen besteht aus zwei Metallen mit unterschiedlichem α, die fest zusammengeklebt sind.\n\n" +
      "Wird es wärmer: Das Metall mit größerem α wird länger → der Streifen biegt sich.\n" +
      "Wird es kälter: Er biegt sich in die andere Richtung.\n\n" +
      "So kann man z. B. in einem Thermostat bei einer bestimmten Temperatur Strom ein- oder ausschalten (S. 58).",
    explanationKo:
      "쌍금속 띠는 α가 다른 두 금속을 붙인 것이다.\n\n" +
      "따뜻해지면 α가 큰 쪽이 더 늘어 띠가 휜다. 차가워지면 반대로 휜다.\n\n" +
      "온도 조절기처럼 정해진 온도에서 전기를 켜거나 끄는 데 쓴다.",
  },
  {
    id: "card-benzinausdehnung",
    term: "Benzinausdehnung",
    explanationDe:
      "Benzin ist eine Flüssigkeit und dehnt sich bei Wärme stark aus.\n\n" +
      "Deshalb sind Benzintanks nicht ganz voll — sonst könnte das Benzin bei heißem Wetter überlaufen (S. 57).",
    explanationKo:
      "휘발유는 액체라 더워지면 부피가 꽤 커진다.\n\n" +
      "그래서 연료 탱크를 가득 채우지 않는다. 여름에 넘칠 수 있기 때문이다.",
  },
  {
    id: "card-anomalie-wasser",
    term: "Anomalie des Wassers",
    explanationDe:
      "Fast alle Stoffe werden beim Abkühlen kleiner — Wasser macht das zwischen 4 °C und 0 °C anders: Es wird dichter, aber sein Volumen wird größer.\n\n" +
      "Bei 4 °C hat Wasser die größte Dichte. Darum schwimmt Eis auf dem Wasser (S. 53).",
    explanationKo:
      "대부분 물질은 차가워지면 작아지는데, 물은 4~0 °C에서는 밀도는 커지면서 부피는 커진다(이상 현상).\n\n" +
      "4 °C에서 밀도가 가장 크다. 그래서 얼음이 물 위에 뜬다.",
  },
  {
    id: "card-waerme",
    term: "Wärme",
    explanationDe:
      "Wärme gibt an, wie viel Energie von einem Körper auf einen anderen übertragen wird.\n\n" +
      "Wärme fließt immer vom wärmeren zum kälteren Körper — nicht umgekehrt.",
    explanationKo:
      "Wärme(열)는 한 물체에서 다른 물체로 얼마나 에너지가 옮겨졌는지 말해 준다.\n\n" +
      "열은 항상 더 따뜻한 쪽에서 더 차가운 쪽으로 간다.",
  },
  {
    id: "card-thermische-energie",
    term: "thermische Energie",
    explanationDe:
      "Thermische Energie ist die Energie, die in der Bewegung der Teilchen eines Körpers steckt.\n\n" +
      "Je schneller die Teilchen sich bewegen, desto größer ist die thermische Energie.",
    explanationKo:
      "열에너지(thermische Energie)는 물체 안 입자들이 움직이며 가진 에너지이다.\n\n" +
      "입자가 더 빨리 움직일수록 열에너지가 크다.",
  },
  {
    id: "card-temperatur",
    term: "Temperatur",
    explanationDe:
      "Die Temperatur misst, wie warm oder kalt etwas ist — sie hängt mit der mittleren Bewegung der Teilchen zusammen.\n\n" +
      "Schnellere Teilchen → höhere Temperatur (mit Thermometer in °C).",
    explanationKo:
      "온도(Temperatur)는 얼마나 따뜻한지/차가운지 나타낸다. 입자가 평균적으로 얼마나 빠른지와 연결된다.\n\n" +
      "입자가 빠를수록 온도가 높다(°C로 잰다).",
  },
  {
    id: "card-teilchenmodell",
    term: "Teilchenmodell",
    explanationDe:
      "Im Teilchenmodell erklärst du Wärme so: Alle Stoffe bestehen aus kleinen Teilchen.\n\n" +
      "Bei Erwärmung bewegen sich die Teilchen schneller und brauchen mehr Platz → der Körper dehnt sich aus.\n\n" +
      "Bei Abkühlung bewegen sie sich langsamer.",
    explanationKo:
      "입자 모델: 모든 물질은 작은 입자로 이루어져 있다.\n\n" +
      "가열하면 입자가 더 빨리 움직이고 자리가 더 필요해져서 부피가 늘어난다.\n\n" +
      "냉각하면 입자가 느려진다.",
  },
  {
    id: "card-waermeleitung",
    term: "Wärmeleitung",
    explanationDe:
      "Bei der Wärmeleitung geben Teilchen Energie an Nachbarteilchen ab — der Stoff bewegt sich selbst kaum (S. 66).\n\n" +
      "Erwünscht: Metalllöffel wird warm. Unerwünscht: du verbrennst dich an einem heißen Griff.",
    explanationKo:
      "열전도: 입자가 옆 입자에게 에너지를 넘긴다. 물질 전체가 크게 움직이지는 않는다.\n\n" +
      "바람직: 금속 수저가 뜨거워짐. 불바람직: 뜨거운 손잡이에 데임.",
  },
  {
    id: "card-waermestrahlung",
    term: "Wärmestrahlung",
    explanationDe:
      "Wärmestrahlung transportiert Energie als Strahlung — auch durch leeren Raum, ohne dass Stoff dazwischen ist.\n\n" +
      "Erwünscht: die Sonne wärmt die Erde. Unerwünscht: du spürst Hitze neben einem heißen Ofen.",
    explanationKo:
      "열해동(복사): 공기가 없어도 빛·열 같은 방식으로 에너지가 전달된다.\n\n" +
      "바람직: 태양이 지구를 데움. 불바람직: 뜨거운 난로 옆이 뜨거움.",
  },
  {
    id: "card-waermestroemung",
    term: "Wärmeströmung",
    explanationDe:
      "Bei der Wärmeströmung bewegt sich der Stoff selbst und nimmt Wärme mit — nur bei Flüssigkeiten und Gasen (S. 66–67, 72).\n\n" +
      "Beispiel: warme Luft steigt auf, kalte sinkt — Luftströmung im Zimmer.",
    explanationKo:
      "열대류: 액체나 기체가 움직이면서 열을 옮긴다(고체 X).\n\n" +
      "예: 따뜻한 공기는 위로, 차가운 공기는 아래로 — 방 안 공기 흐름.",
  },
  {
    id: "card-waermedaemmung",
    term: "Wärmedämmung",
    explanationDe:
      "Wärmedämmung soll verhindern, dass Wärme ungewollt weggeht oder reinkommt.\n\n" +
      "Maßnahmen: Materialien, die schlecht leiten (z. B. Styropor, Wolle, Luftpolster).",
    explanationKo:
      "단열: 원하지 않는 열 이동을 막는다.\n\n" +
      "방법: 열이 잘 안 통하는 재료(스티로폼, 양모, 공기층 등)를 쓴다.",
  },
  {
    id: "card-waermedaemmung-haus",
    term: "Wärmedämmung am Haus",
    explanationDe:
      "Am Haus dämmt man Wände, Dach und Fenster.\n\n" +
      "Im Winter bleibt Wärme drinnen, im Sommer kommt weniger Hitze von draußen — du heizt und kaufst Klimaanlage weniger.",
    explanationKo:
      "집은 벽·지붕·창을 단열한다.\n\n" +
      "겨울엔 안의 열이 덜 빠지고, 여름엔 밖 더위가 덜 들어온다.",
  },
];

export const WAERME_KARTEIKARTEN_CARD_IDS = waermeKarteikarten.map((c) => c.id);

export const getWaermeCardById = (cardId) =>
  waermeKarteikarten.find((c) => c.id === cardId) || null;
