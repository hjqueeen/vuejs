/** Physik · Wärme — Karteikarten (LEK 5.6., 시험용) */

export const WAERME_KARTEIKARTEN_BOOK_ID = "book-waerme-karteikarten";

export const waermeKarteikarten = [
  {
    id: "card-volumenaenderung",
    term: "Volumenänderung",
    explanationDe:
      "Bei Erwärmung oder Abkühlung ändert sich das Volumen von festen Stoffen, Flüssigkeiten und Gasen.\n\n" +
      "Rechnen: ΔV = V₀ · γ · ΔT\n" +
      "(V₀ = Anfangsvolumen, γ = Volumenausdehnungskoeffizient, ΔT = Temperaturänderung)\n\n" +
      "Neues Volumen: V = V₀ + ΔV  (bei Abkühlung ist ΔV negativ).\n\n" +
      "Stab (Länge): Δl = l₀ · α · ΔT — bei gleichmäßigem Festkörper oft γ ≈ 3α.",
    explanationKo:
      "가열·냉각하면 고체, 액체, 기체 모두 부피가 변한다.\n\n" +
      "계산: ΔV = V₀ · γ · ΔT\n" +
      "(V₀ = 처음 부피, γ = 체적팽창계수, ΔT = 온도 변화)\n\n" +
      "새 부피: V = V₀ + ΔV (냉각하면 ΔV는 음수).\n\n" +
      "막대 길이: Δl = l₀ · α · ΔT — 고체는 보통 γ ≈ 3α.",
  },
  {
    id: "card-laengenaenderung",
    term: "Längenänderung",
    explanationDe:
      "Erwärmt oder kühlt man einen Stab ab, wird er länger bzw. kürzer — das ist die Längenänderung.",
    explanationKo:
      "막대를 가열하면 길어지고 냉각하면 짧아지는 현상을 길이 변화라고 한다.",
  },
  {
    id: "card-laengenausdehnungskoeffizient",
    term: "Längenausdehnungskoeffizient",
    explanationDe:
      "Der Längenausdehnungskoeffizient gibt an, wie stark sich die Länge eines Stoffes pro Grad Temperaturänderung ändert.",
    explanationKo:
      "선팽창 계수는 온도 1°C 변화당 길이가 얼마나 변하는지를 나타낸다.",
  },
  {
    id: "card-bimetallstreifen",
    term: "Bimetallstreifen",
    explanationDe:
      "Zwei verschiedene Metalle sind fest miteinander verbunden; jedes hat einen eigenen Längenausdehnungskoeffizienten α.\n\n" +
      "Wird es wärmer, dehnt sich das Metall mit größerem α stärker aus — der Streifen krümmt sich zur Seite des kleineren α.\n\n" +
      "Wird es kälter, krümmt er sich in die andere Richtung.\n\n" +
      "Die Bewegung schaltet z. B. in Thermostaten oder Überhitzungsschutz einen Kontakt ein oder aus.",
    explanationKo:
      "서로 다른 두 금속을 붙여 만든 띠이며, 각각 선팽창 계수 α가 다르다.\n\n" +
      "가열하면 α가 큰 쪽이 더 많이 늘어나 띠가 α가 작은 쪽으로 휜다.\n\n" +
      "냉각하면 반대 방향으로 휜다.\n\n" +
      "이 휨으로 온도 조절기·과열 보호 장치 등에서 접점을 켜거나 끈다.",
  },
  {
    id: "card-benzinausdehnung",
    term: "Benzinausdehnung",
    explanationDe:
      "Benzintanks sind nur teilweise gefüllt, weil sich Benzin bei Wärme ausdehnt und sonst überlaufen könnte.",
    explanationKo:
      "휘발유는 더워지면 부피가 커지므로 탱크를 가득 채우지 않아 넘침을 방지한다.",
  },
  {
    id: "card-anomalie-wasser",
    term: "Anomalie des Wassers",
    explanationDe:
      "Zwischen 4 °C und 0 °C wird Wasser beim Abkühlen dichter, nimmt aber sein Volumen zu — die größte Dichte hat es bei etwa 4 °C.",
    explanationKo:
      "물은 4~0°C에서 냉각 시 밀도(Dichte)는 커지지만 부피는 늘어나며, 최대 밀도는 약 4°C이다.",
  },
  {
    id: "card-waerme",
    term: "Wärme",
    explanationDe:
      "Wärme gibt an, wie viel Energie von einem Körper auf einen anderen Körper übertragen wird.",
    explanationKo:
      "Wärme(열)는 한 물체에서 다른 물체로 얼마나 많은 에너지가 전달되는지를 나타낸다.",
  },
  {
    id: "card-thermische-energie",
    term: "thermische Energie",
    explanationDe:
      "Thermische Energie ist die Energie in der ungeordneten Bewegung aller Teilchen eines Körpers.",
    explanationKo:
      "열에너지(thermische Energie)는 물체를 이루는 입자들의 무질서한 운동에 담긴 에너지이다.",
  },
  {
    id: "card-temperatur",
    term: "Temperatur",
    explanationDe:
      "Die Temperatur gibt an, wie schnell die Teilchen eines Körpers im Mittel bewegen.",
    explanationKo:
      "온도(Temperatur)는 물체 입자들이 평균적으로 얼마나 빠르게 움직이는지를 나타낸다.",
  },
  // {
  //   id: "card-teilchenmodell",
  //   term: "Teilchenmodell",
  //   explanationDe:
  //     "Im Teilchenmodell erklärt man Wärme damit, dass sich die Teilchen bei Erwärmung schneller bewegen.",
  //   explanationKo:
  //     "입자 모델에서는 가열 시 입자가 더 빨리 움직인다고 보아 열 현상을 설명한다.",
  // },
  {
    id: "card-waermeleitung",
    term: "Wärmeleitung",
    explanationDe:
      "Bei der Wärmeleitung wird Wärme von Teilchen zu Teilchen weitergegeben, ohne dass der Stoff selbst mittransportiert wird (z. B. heißer Topfboden).",
    explanationKo:
      "열전도는 물질 이동 없이 입자끼리 열을 넘기는 방식이다(예: 뜨거운 냄비 바닥).",
  },
  {
    id: "card-waermestrahlung",
    term: "Wärmestrahlung",
    explanationDe:
      "Wärmestrahlung überträgt Energie als Wellen ohne Stoff dazwischen, z. B. die Sonne zur Erde (erwünscht) oder Hitze von heißen Flächen (oft unerwünscht).",
    explanationKo:
      "열해동(복사)은 매질 없이 파동으로 열을 전달한다(예: 태양 → 지구, 바람직/불바람직한 경우 모두 있음).",
  },
  {
    id: "card-waermestroemung",
    term: "Wärmeströmung",
    explanationDe:
      "Bei der Wärmeströmung transportieren sich erwärmte Flüssigkeiten oder Gase und nehmen Wärme mit, z. B. die Luftströmung im Zimmer.",
    explanationKo:
      "열대류(Wärmeströmung)는 가열된 유체·기체가 움직이며 열을 옮기는 방식이다(예: 방 안 공기 흐름).",
  },
  {
    id: "card-waermedaemmung",
    term: "Wärmedämmung",
    explanationDe:
      "Wärmedämmung verringert unerwünschten Wärmefluss mit schlecht leitenden Materialien und anderen Maßnahmen.",
    explanationKo:
      "단열(Wärmedämmung)은 열전도가 낮은 재료·조치로 원치 않는 열 이동을 줄인다.",
  },
  {
    id: "card-waermedaemmung-haus",
    term: "Wärmedämmung am Haus",
    explanationDe:
      "Gedämmte Wände, Dächer und Fenster halten im Winter Wärme im Haus und im Sommer Hitze draußen.",
    explanationKo:
      "집의 벽·지붕·창 단열은 겨울엔 내부 열을, 여름엔 외부 더위가 들어오는 것을 막는다.",
  },
];

export const WAERME_KARTEIKARTEN_CARD_IDS = waermeKarteikarten.map((c) => c.id);

export const getWaermeCardById = (cardId) =>
  waermeKarteikarten.find((c) => c.id === cardId) || null;
