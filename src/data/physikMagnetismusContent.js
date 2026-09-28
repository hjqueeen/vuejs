/** Physik · Magnetismus & Elektrischer Strom — Klasse 9 · Hangyeol
 *  앞면: Deutsch (문단) · 뒷면: 한국어
 */

import { publicAssetUrl } from "@/utils/publicAssetUrl";

export const PHYSIK_MAGNETISMUS_BOOK_ID = "book-physik-magnetismus-k9";

const img = (name) => publicAssetUrl(`images/physik-hangyeol/${name}`);

const IMG = {
  stabmagnet: img("stabmagnet-feldlinien.svg"),
  hufeisen: img("hufeisenmagnet-feldlinien.svg"),
  scheiben: img("scheibenmagnet-feldlinien.svg"),
  pole: img("pole-abstossen-anziehen.svg"),
  elementar: img("elementarmagnete.svg"),
  influenz: img("influenz-bueroklammer.svg"),
  leiter: img("stromdurchflossener-leiter.svg"),
  spule: img("spule-vs-stabmagnet.svg"),
  erde: img("erdmagnetfeld.svg"),
  strom: img("stromrichtung.svg"),
  eisenkern: img("eisenkern-geschlossen.svg"),
};

/**
 * @param {string} id
 * @param {string} de — 앞면 독일어
 * @param {string} ko — 뒷면 한국어
 * @param {{ image?: string, category?: string }} [extra]
 */
const card = (id, de, ko, extra = {}) => ({
  id,
  term: de,
  explanationDe: ko,
  ...(extra.image ? { frontImageUrl: extra.image } : {}),
  ...(extra.category ? { frontCategory: extra.category } : {}),
});

export const physikMagnetismusCards = [
  // ─── 1. Strom Wiederholung ───
  card(
    "card-pm-strom-amperemeter",
    "Strommesser (Amperemeter) werden immer in Reihe geschaltet. Spannungsmesser (Voltmeter) werden immer parallel geschaltet.",
    "전류계(Amperemeter)는 항상 직렬로 연결한다. 전압계(Voltmeter)는 항상 병렬로 연결한다.",
    { category: "Elektrischer Strom" },
  ),
  card(
    "card-pm-strom-definition",
    "Unter elektrischem Strom versteht man die gerichtete Bewegung von Ladungsträgern. In Metallen fließen vor allem Elektronen.",
    "전류란 전하 운반자의 방향성 있는 이동을 말한다. 금속에서는 주로 전자가 흐른다.",
    { category: "Elektrischer Strom" },
  ),
  card(
    "card-pm-strom-technisch",
    "Die Richtung des elektrischen Stroms (auch technische Stromrichtung genannt) zeigt vom „+“-Pol zum „−“-Pol.",
    "전기 전류의 방향(기술 전류 방향이라고도 함)은 「+」극에서 「−」극으로 향한다.",
    { category: "Elektrischer Strom", image: IMG.strom },
  ),
  card(
    "card-pm-strom-elektronen",
    "Heute wissen wir, dass in Metallen ausschließlich die negativen Elektronen fließen. Die Elektronen bewegen sich vom Minuspol (−) zum Pluspol (+), also entgegen der technischen Stromrichtung.",
    "오늘날 우리는 금속에서는 음의 전자만 흐른다는 것을 안다. 전자는 −극에서 +극으로, 즉 기술 전류 방향과 반대로 움직인다.",
    { category: "Elektrischer Strom", image: IMG.strom },
  ),
  card(
    "card-pm-strom-ampere",
    "Ampère führt den Strombegriff im heutigen Sinne ein und definiert eine Stromrichtung. Dabei orientiert er sich am Hofmannschen Wasserzersetzungsapparat: Am Pluspol entsteht Sauerstoff (O₂), am Minuspol Wasserstoff (H₂). Ampère legt die Richtung vom „Sauerstoffdraht“ zum „Wasserstoffdraht“ fest.",
    "앙페르는 오늘날의 의미로 전류 개념을 도입하고 전류 방향을 정의했다. 호프만식 물 전기분해 장치를 기준으로, 양극(+)에서는 산소(O₂), 음극(−)에서는 수소(H₂)가 생긴다. 앙페르는 「산소 쪽 전선」에서 「수소 쪽 전선」으로의 방향을 전류 방향으로 정했다.",
    { category: "Elektrischer Strom" },
  ),
  card(
    "card-pm-strom-warum-nicht",
    "Warum keine Umstellung der Stromrichtung? Dagegen sprechen mehrere Gründe: In Halbleitern und Elektrolyten bewegen sich auch positive Ladungsträger vom „+“ zum „−“. Die gesamte Elektrotechnik und die Maxwellschen Gleichungen beruhen auf Ampères Definition. Eine Umstellung wäre in der Literatur sehr aufwendig.",
    "왜 전류 방향을 바꾸지 않는가? 여러 이유가 있다. 반도체·전해질에서는 양의 전하 운반자도 +→−로 움직인다. 전체 전기공학과 맥스웰 방정식이 앙페르의 정의에 기반한다. 바꾸면 문헌 수정 부담이 크다.",
    { category: "Elektrischer Strom" },
  ),
  card(
    "card-pm-strom-ohm",
    "Die Formel U = R · I verbindet Spannung, Widerstand und Stromstärke. Bei gleichem Widerstand ist die Stromstärke proportional zur Spannung.",
    "공식 U = R · I는 전압, 저항, 전류 세기를 연결한다. 같은 저항에서 전류는 전압에 비례한다.",
    { category: "Elektrischer Strom" },
  ),
  card(
    "card-pm-strom-ladung",
    "Die Stromstärke I ist die Ladungsmenge Q pro Zeit t: I = Q / t, also Q = I · t. (Beispiel: 20 mA = 0,02 A.)",
    "전류 세기 I는 시간에 대한 전하량 Q이다: I = Q / t, 즉 Q = I · t. (예: 20 mA = 0,02 A.)",
    { category: "Elektrischer Strom" },
  ),

  // ─── 2. Leiter ───
  card(
    "card-pm-leiter-elektronen",
    "In einem elektrischen Leiter bewegen sich die Elektronen (e⁻) zum Pluspol, weil sie eine negative Ladung haben — also in entgegengesetzte Richtung zur technischen Stromrichtung.",
    "전기 도체에서 전자(e⁻)는 음전하를 띠므로 양극(+) 쪽으로, 즉 기술 전류 방향과 반대로 움직인다.",
    { category: "Elektrischer Leiter", image: IMG.strom },
  ),
  card(
    "card-pm-leiter-spannung",
    "Erhöht man die Spannung U, bewegen sich die Elektronen stärker zum Pluspol. Erhöht man die Stromstärke I, hängen U und I über U = R · I zusammen — die Werte sind proportional.",
    "전압 U를 높이면 전자가 양극 쪽으로 더 세게 움직인다. 전류 I를 높이면 U = R · I로 연결되어 값들이 비례한다.",
    { category: "Elektrischer Leiter" },
  ),

  // ─── 3. Pole ───
  card(
    "card-pm-pole-definition",
    "Die Stellen stärkster Anziehung eines Magneten nennt man magnetische Pole. Einen der beiden Pole bezeichnen wir als Nordpol (oft rot), den anderen als Südpol (oft grün).",
    "자석에서 인력이 가장 강한 곳을 자기 극(자극)이라 한다. 한 극을 북극(Nordpol, 종종 빨강), 다른 극을 남극(Südpol, 종종 초록)이라 한다.",
    { category: "Magnetismus · Pole" },
  ),
  card(
    "card-pm-pole-merkregel",
    "Merkregel: Nordpol ↔ rot, Südpol ↔ grün. Nord und rot haben jeweils ein „o“, Süd und grün jeweils ein „ü“.",
    "암기법: 북극 ↔ 빨강, 남극 ↔ 초록. (독일어 Nord/rot에 「o」, Süd/grün에 「ü」가 짝이다.)",
    { category: "Magnetismus · Pole" },
  ),
  card(
    "card-pm-pole-bueroklammern",
    "Taucht man einen Stabmagneten in Büroklammern, bleiben an den Enden sehr viele hängen, in der Mitte kaum welche. An den Polen ist die Anziehung am stärksten.",
    "막대자석을 클립 더미에 넣으면 양끝에는 많이 붙고 가운데에는 거의 안 붙는다. 극에서 인력이 가장 세다.",
    { category: "Magnetismus · Pole" },
  ),
  card(
    "card-pm-pole-kraft",
    "Gleichartige Pole (N–N oder S–S) stoßen sich ab. Verschiedenartige Pole (N–S) ziehen sich an. Je größer der Abstand, desto geringer die Kraftwirkung.",
    "같은 극(N–N 또는 S–S)은 서로 밀어낸다. 다른 극(N–S)은 서로 끌어당긴다. 거리가 클수록 힘의 작용은 작아진다.",
    { category: "Magnetismus · Pole", image: IMG.pole },
  ),

  // ─── 4. Stoffe ───
  card(
    "card-pm-stoffe-magnetisierbar",
    "Stoffe aus Eisen, Nickel oder Cobalt, die selbst keine Magnete sind, nennt man magnetisierbare Stoffe. Ein Magnet wirkt auf Gegenstände aus diesen Stoffen.",
    "철·니켈·코발트로 되어 있지만 자체가 자석이 아닌 물질을 자화 가능 물질이라 한다. 자석은 이런 물질로 된 물체에 작용한다.",
    { category: "Magnetismus · Stoffe" },
  ),
  card(
    "card-pm-stoffe-dauer",
    "Dauermagnete sind Magnete, deren magnetische Wirkung lange Zeit erhalten bleibt. Ein magnetisierbarer, aber nicht magnetischer Gegenstand wird immer angezogen, nie abgestoßen.",
    "영구자석은 자기 작용이 오래 지속되는 자석이다. 자화 가능하지만 자석이 아닌 물체는 항상 끌리며, 밀어내지지 않는다.",
    { category: "Magnetismus · Stoffe" },
  ),
  card(
    "card-pm-stoffe-kraft-abstand",
    "Die magnetische Kraft wirkt ohne Berührung. Der Betrag der Kraft hängt vom Abstand ab: Je größer der Abstand, desto kleiner die Kraft.",
    "자기력은 접촉 없이 작용한다. 힘의 크기는 거리에 따라 달라진다. 거리가 클수록 힘이 작다.",
    { category: "Magnetismus · Stoffe" },
  ),
  card(
    "card-pm-stoffe-formen",
    "Je nach Zweck gibt es verschiedene Magnetformen: Stabmagnet, Hufeisenmagnet, Ringmagnet, Topfmagnet, Scheibenmagnet.",
    "용도에 따라 자석 형태가 다르다: 막대자석, 말굽자석, 고리자석, 냄비형 자석, 원판자석.",
    { category: "Magnetismus · Stoffe" },
  ),
  card(
    "card-pm-stoffe-kategorien",
    "Im Experiment: Büroklammern = magnetisierbare Stoffe (magnetische Reaktion). Papier = Nicht-Magnete (keine Reaktion). Magneten = dauermagnetisierte Stoffe (magnetische Reaktion).",
    "실험에서: 클립 = 자화 가능 물질(자기 반응). 종이 = 비자성체(반응 없음). 자석 = 영구 자화된 물질(자기 반응).",
    { category: "Magnetismus · Stoffe" },
  ),

  // ─── 5. Elementarmagnete & Influenz ───
  card(
    "card-pm-elementar-modell",
    "Modell der Elementarmagnete: Alle magnetisierbaren Stoffe bestehen aus winzigen Bereichen, die sich wie kleine Magnete verhalten und ordnen können.",
    "소자석 모델: 모든 자화 가능 물질은 작은 자석처럼 행동하고 배열될 수 있는 아주 작은 영역으로 이루어져 있다.",
    { category: "Elementarmagnete", image: IMG.elementar },
  ),
  card(
    "card-pm-elementar-ordnung",
    "Sind die Elementarmagnete ungeordnet, heben sich ihre Wirkungen außerhalb des Körpers auf — der Körper ist kein Magnet. Sind sie ausgerichtet, wirkt der Körper als Magnet.",
    "소자석이 무질서하면 효과가 상쇄되어 물체는 자석이 아니다. 정렬되어 있으면 물체가 자석으로 작용한다.",
    { category: "Elementarmagnete", image: IMG.elementar },
  ),
  card(
    "card-pm-elementar-teilen",
    "Teilt man einen Magneten, entstehen zwei neue Magnete mit jeweils Nord- und Südpol. Man kann ihn nicht in reine Nord- oder Südpole zerteilen.",
    "자석을 나누면 각각 북극과 남극을 가진 두 자석이 생긴다. N만 또는 S만으로 나눌 수 없다.",
    { category: "Elementarmagnete" },
  ),
  card(
    "card-pm-influenz",
    "Magnetische Influenz ist die Magnetisierung eines magnetisierbaren Stoffes durch ein äußeres Magnetfeld. Die Elementarmagnete werden teilweise gleichgerichtet — z. B. wird eine Büroklammer im Feld selbst magnetisch.",
    "자기 유도(Influenz)는 외부 자기장에 의해 자화 가능 물질이 자화되는 것이다. 소자석이 부분적으로 같은 방향으로 정렬된다 — 예: 클립이 자기장 안에서 스스로 자성을 띤다.",
    { category: "Influenz", image: IMG.influenz },
  ),
  card(
    "card-pm-weich-hart",
    "Magnetisch weich: Elementarmagnete lassen sich leicht ausrichten und verlieren die Ausrichtung leicht wieder — gut zum Abschirmen. Magnetisch hart: Elementarmagnete sind schwer veränderbar — daraus stellt man Dauermagnete her.",
    "연자성: 소자석이 쉽게 정렬되고 쉽게 풀린다 — 차폐에 적합. 경자성: 소자석이 잘 바뀌지 않는다 — 영구자석을 만든다.",
    { category: "Influenz" },
  ),
  card(
    "card-pm-entmagnetisieren",
    "Zwei Möglichkeiten, einem Magneten die magnetischen Eigenschaften zu nehmen: starkes Erhitzen (über ca. 800 °C) oder starke Erschütterungen (z. B. Hämmern). Dann wird die einheitliche Ausrichtung der Elementarmagnete zerstört.",
    "자석을 탈자화하는 방법 두 가지: 강한 가열(약 800 °C 이상) 또는 강한 충격(예: 망치질). 그러면 소자석의 통일된 정렬이 깨진다.",
    { category: "Influenz" },
  ),

  // ─── 6. Magnetfeld & Feldlinien ───
  card(
    "card-pm-feld-definition",
    "Das magnetische Feld ist der Wirkungsbereich eines Magneten, in dem Kräfte auf andere Magnete oder magnetisierbare Stoffe wirken.",
    "자기장은 다른 자석이나 자화 가능 물질에 힘이 작용하는 자석의 작용 영역이다.",
    { category: "Magnetfeld" },
  ),
  card(
    "card-pm-feld-vakuum",
    "Vakuum, Luft und andere nichtmagnetisierbare Stoffe verändern das Magnetfeld nicht. Magnetisierbare Stoffe zwischen zwei Magneten können die Kraft verringern.",
    "진공·공기·다른 비자화 물질은 자기장을 바꾸지 않는다. 두 자석 사이의 자화 가능 물질은 힘을 줄일 수 있다.",
    { category: "Magnetfeld" },
  ),
  card(
    "card-pm-feldlinien-was",
    "Magnetische Feldlinien beschreiben die Umgebung eines Magneten. Sie zeigen die Ausrichtung von Magnetnadeln und die Kraftrichtung auf den Nordpol einer Magnetnadel.",
    "자기력선은 자석 주위를 나타낸다. 자기침의 방향과 자기침 북극에 작용하는 힘의 방향을 보여 준다.",
    { category: "Feldlinien" },
  ),
  card(
    "card-pm-feldlinien-richtung",
    "Jede magnetische Feldlinie verläuft vom Nordpol zum Südpol. Feldlinien kreuzen sich nie, weil das gleichzeitig zwei verschiedene Kraftrichtungen an einem Ort bedeuten würde.",
    "모든 자기력선은 북극에서 남극으로 향한다. 자기력선은 서로 교차하지 않는다. 교차하면 한 지점에서 힘의 방향이 둘이 되기 때문이다.",
    { category: "Feldlinien", image: IMG.stabmagnet },
  ),
  card(
    "card-pm-feldlinien-dichte",
    "Je dichter die Feldlinien auf engem Raum verlaufen, desto stärker ist das Magnetfeld. An den Polen laufen besonders viele Linien zusammen — dort ist die Kraft größer.",
    "좁은 공간에 자기력선이 조밀할수록 자기장이 세다. 극에서는 선이 특히 많이 모인다 — 그곳에서 힘이 더 크다.",
    { category: "Feldlinien" },
  ),
  card(
    "card-pm-feldlinien-stab",
    "Stabmagnet: Die Feldlinien verlaufen außen bogenförmig vom Nordpol zum Südpol.",
    "막대자석: 자기력선은 바깥에서 북극에서 남극으로 곡선 형태를 이룬다.",
    { category: "Feldlinien", image: IMG.stabmagnet },
  ),
  card(
    "card-pm-feldlinien-hufeisen",
    "Hufeisenmagnet: Besonders viele Feldlinien verlaufen über den Polspalt von N nach S — dort ist das Feld sehr stark.",
    "말굽자석: 극 사이 틈으로 N에서 S로 자기력선이 특히 많이 지나간다 — 그곳에서 장이 매우 세다.",
    { category: "Feldlinien", image: IMG.hufeisen },
  ),
  card(
    "card-pm-feldlinien-scheiben",
    "Scheibenmagnet: Die Feldlinien verlaufen von der N-Seite um die Seiten zur S-Seite.",
    "원판자석: 자기력선은 N면에서 옆을 돌아 S면으로 향한다.",
    { category: "Feldlinien", image: IMG.scheiben },
  ),
  card(
    "card-pm-feldlinien-elektrisch",
    "Unterschied: Magnetische Feldlinien beschreiben das Kraftfeld von Magneten. Elektrische Feldlinien hängen mit der elektrischen Potenzialdifferenz (Spannung) zusammen.",
    "차이: 자기력선은 자석의 힘장을 나타낸다. 전기력선은 전기 전위차(전압)와 관련된다.",
    { category: "Feldlinien" },
  ),

  // ─── 7. Erdmagnetfeld ───
  card(
    "card-pm-erde-nachweis",
    "Drehbare Magnete (z. B. Kompassnadeln) richten sich auf der Erde in Nord-Süd-Richtung aus. Daraus schließt man, dass die Erde ein Magnetfeld hat.",
    "돌릴 수 있는 자석(예: 나침반)이 지구에서 남북 방향으로 정렬된다. 이로부터 지구에 자기장이 있음을 알 수 있다.",
    { category: "Erdmagnetfeld", image: IMG.erde },
  ),
  card(
    "card-pm-erde-pole",
    "Der magnetische Südpol der Erde liegt in der Nähe des geografischen Nordpols. Der magnetische Nordpol liegt nahe dem geografischen Südpol.",
    "지구의 자기 남극은 지리적 북극 근처에 있다. 자기 북극은 지리적 남극 근처에 있다.",
    { category: "Erdmagnetfeld", image: IMG.erde },
  ),
  card(
    "card-pm-erde-missweisung",
    "Missweisung (Deklination) ist die Abweichung zwischen geografischem Nord und der Richtung, in die die Kompassnadel zeigt. Die Null-Linie wandert jährlich etwa 15 km nach Westen.",
    "편각(Missweisung)은 지리적 북쪽과 나침반이 가리키는 방향의 차이이다. 0° 선은 매년 약 15 km씩 서쪽으로 이동한다.",
    { category: "Erdmagnetfeld" },
  ),
  card(
    "card-pm-erde-inklination",
    "Inklination ist die Neigung der Feldlinien des Erdmagnetfeldes gegenüber der Horizontalen. In Deutschland tauchen sie mit etwa 63° (Süden) bis 69° (Norden) in den Boden.",
    "복각(Inklination)은 지구자기력선이 수평에 대해 기울어진 각도이다. 독일에서는 남쪽 약 63°, 북쪽 약 69°로 땅속으로 들어간다.",
    { category: "Erdmagnetfeld" },
  ),
  card(
    "card-pm-erde-geodynamo",
    "Das Erdmagnetfeld entsteht wahrscheinlich durch elektrische Ströme im flüssigen Eisenkern (Geodynamo, tiefer als 2900 km). Das Modell der Elementarmagnete reicht nicht, weil der Erdkern flüssig ist.",
    "지구자기장은 액체 철핵의 전기 전류(지구 발전기, 깊이 2900 km 이상)로 생기는 것으로 보인다. 핵이 액체이므로 소자석 모델로는 설명할 수 없다.",
    { category: "Erdmagnetfeld" },
  ),
  card(
    "card-pm-erde-umpolung",
    "Beim Abkühlen von Lava richten sich eisenhaltige Kristalle im Basalt nach dem damaligen Feld aus. In Gesteinen erkennt man wechselnde Magnetisierung — Beleg für regelmäßige Umpolungen (mind. ca. 170 in 100 Mio. Jahren; letzter Wechsel vor ca. 730 000 Jahren).",
    "용암이 식을 때 현무암 속 철 함유 결정이 당시 장 방향으로 정렬된다. 암석에서 바뀌는 자화가 보이며, 이는 규칙적 극전환의 증거이다(지난 1억 년 약 170회 이상; 마지막은 약 73만 년 전).",
    { category: "Erdmagnetfeld" },
  ),

  // ─── 8. Strom + Magnetfeld / Spule ───
  card(
    "card-pm-leiter-magnetfeld",
    "Bewegte Ladungen erzeugen ein Magnetfeld. Um einen stromdurchflossenen Leiter entstehen kreisförmige Feldlinien.",
    "움직이는 전하는 자기장을 만든다. 전류가 흐르는 도체 주위에는 원형 자기력선이 생긴다.",
    { category: "Strom & Magnetfeld", image: IMG.leiter },
  ),
  card(
    "card-pm-linke-hand",
    "Die Richtung des Magnetfeldes bestimmt man mit der Linke-Hand-Regel: Der Daumen zeigt in die Fließrichtung der Elektronen, die Finger zeigen die Richtung der magnetischen Feldlinien.",
    "자기장 방향은 왼손 법칙으로 정한다: 엄지는 전자가 흐르는 방향, 손가락은 자기력선의 방향을 가리킨다.",
    { category: "Strom & Magnetfeld", image: IMG.leiter },
  ),
  card(
    "card-pm-spule-eisenkern",
    "Um das Magnetfeld einer Spule zu verstärken, fügt man einen Eisenkern hinzu.",
    "코일의 자기장을 세게 하려면 철심(Eisenkern)을 넣는다.",
    { category: "Spule", image: IMG.eisenkern },
  ),
  card(
    "card-pm-spule-verstaerken",
    "Drei Möglichkeiten, das Magnetfeld einer stromdurchflossenen Spule zu verstärken: (1) Stromstärke erhöhen, (2) Windungszahl vergrößern, (3) die Spule verkürzen.",
    "전류가 흐르는 코일 자기장을 세게 하는 방법 세 가지: (1) 전류 세기 키우기, (2) 권선수 늘리기, (3) 코일 짧게 하기.",
    { category: "Spule" },
  ),
  card(
    "card-pm-spule-gemeinsam",
    "Gemeinsamkeiten von stromdurchflossener Spule und Stabmagnet: ähnliche Feldlinien / ähnliche Magnetfelder und entgegengesetzte Pole (Nord- und Südpol).",
    "전류가 흐르는 코일과 막대자석의 공통점: 비슷한 자기력선·자기장, 서로 반대인 극(북극·남극).",
    { category: "Spule", image: IMG.spule },
  ),
  card(
    "card-pm-spule-unterschied",
    "Unterschiede: Ein Stabmagnet ist dauerhaft magnetisch und hat Elementarmagnete. Das Magnetfeld einer Spule kann man ein- und ausschalten und verstärken (Strom, Windungen, Eisenkern).",
    "차이: 막대자석은 영구적으로 자성을 띠고 소자석을 갖는다. 코일의 자기장은 켰다 껐다 할 수 있고 세기(전류·권선·철심)를 키울 수 있다.",
    { category: "Spule", image: IMG.spule },
  ),
  card(
    "card-pm-eisenkern-geschlossen",
    "Eine Spule mit geschlossenem Eisenkern erzeugt ein deutlich stärkeres Magnetfeld als mit einfachem (offenem) Eisenkern. Der geschlossene Kern führt die Feldlinien im Eisen im Kreis, statt sie nach außen austreten zu lassen.",
    "폐쇄 철심이 있는 코일은 단순(열린) 철심보다 훨씬 강한 자기장을 만든다. 폐쇄 철심은 자기력선을 바깥으로 내보내지 않고 철 안에서 닫힌 경로로 이끈다.",
    { category: "Spule", image: IMG.eisenkern },
  ),

  // ─── 9. Elektromagnet ───
  card(
    "card-pm-elektromagnet",
    "Ein Elektromagnet ist eine stromdurchflossene Spule (oft mit Eisenkern), deren Magnetfeld man durch den Strom ein- und ausschalten kann.",
    "전자석은 전류가 흐르는 코일(대개 철심 포함)로, 전류로 자기장을 켰다 껐다 할 수 있다.",
    { category: "Elektromagnet" },
  ),
  card(
    "card-pm-lasthebemagnet",
    "Auf Schrottplätzen nutzt man Lasthebemagneten — das sind Elektromagnete. Sie können beliebig ein- und ausgeschaltet werden: einschalten zum Anheben schwerer Lasten (z. B. Autos), ausschalten zum Ablegen. Ein Dauermagnet könnte das nicht.",
    "고철 야적장에서는 하중 인양 자석(Lasthebemagnet)을 쓴다 — 바로 전자석이다. 마음대로 켰다 껐다 할 수 있다: 켜서 무거운 짐(예: 자동차)을 들어 올리고, 꺼서 내려놓는다. 영구자석으로는 불가능하다.",
    { category: "Elektromagnet" },
  ),
  card(
    "card-pm-lasthebemagnet-funktion",
    "Funktionsweise: Fließt Strom durch die Spule, entsteht ein starkes Magnetfeld (mit Eisenkern noch stärker) — Eisenlasten werden angezogen. Wird der Strom abgeschaltet, verschwindet das Feld — die Last fällt ab / kann abgelegt werden.",
    "작동: 코일에 전류가 흐르면 강한 자기장이 생기고(철심이 있으면 더 세게) 철 짐이 끌린다. 전류를 끄면 장이 사라져 짐을 내려놓을 수 있다.",
    { category: "Elektromagnet" },
  ),
];

export const physikMagnetismusSections = [
  {
    id: "section-pm-strom",
    title: "1. Elektrischer Strom",
    cardIds: [
      "card-pm-strom-amperemeter",
      "card-pm-strom-definition",
      "card-pm-strom-technisch",
      "card-pm-strom-elektronen",
      "card-pm-strom-ampere",
      "card-pm-strom-warum-nicht",
      "card-pm-strom-ohm",
      "card-pm-strom-ladung",
    ],
  },
  {
    id: "section-pm-leiter",
    title: "2. Elektrischer Leiter",
    cardIds: ["card-pm-leiter-elektronen", "card-pm-leiter-spannung"],
  },
  {
    id: "section-pm-pole",
    title: "3. Magnetpole & Kraftwirkung",
    cardIds: [
      "card-pm-pole-definition",
      "card-pm-pole-merkregel",
      "card-pm-pole-bueroklammern",
      "card-pm-pole-kraft",
    ],
  },
  {
    id: "section-pm-stoffe",
    title: "4. Magnetisierbare Stoffe",
    cardIds: [
      "card-pm-stoffe-magnetisierbar",
      "card-pm-stoffe-dauer",
      "card-pm-stoffe-kraft-abstand",
      "card-pm-stoffe-formen",
      "card-pm-stoffe-kategorien",
    ],
  },
  {
    id: "section-pm-elementar",
    title: "5. Elementarmagnete & Influenz",
    cardIds: [
      "card-pm-elementar-modell",
      "card-pm-elementar-ordnung",
      "card-pm-elementar-teilen",
      "card-pm-influenz",
      "card-pm-weich-hart",
      "card-pm-entmagnetisieren",
    ],
  },
  {
    id: "section-pm-feldlinien",
    title: "6. Magnetfeld & Feldlinien",
    cardIds: [
      "card-pm-feld-definition",
      "card-pm-feld-vakuum",
      "card-pm-feldlinien-was",
      "card-pm-feldlinien-richtung",
      "card-pm-feldlinien-dichte",
      "card-pm-feldlinien-stab",
      "card-pm-feldlinien-hufeisen",
      "card-pm-feldlinien-scheiben",
      "card-pm-feldlinien-elektrisch",
    ],
  },
  {
    id: "section-pm-erde",
    title: "7. Erdmagnetfeld",
    cardIds: [
      "card-pm-erde-nachweis",
      "card-pm-erde-pole",
      "card-pm-erde-missweisung",
      "card-pm-erde-inklination",
      "card-pm-erde-geodynamo",
      "card-pm-erde-umpolung",
    ],
  },
  {
    id: "section-pm-spule",
    title: "8. Stromdurchflossene Leiter & Spule",
    cardIds: [
      "card-pm-leiter-magnetfeld",
      "card-pm-linke-hand",
      "card-pm-spule-eisenkern",
      "card-pm-spule-verstaerken",
      "card-pm-spule-gemeinsam",
      "card-pm-spule-unterschied",
      "card-pm-eisenkern-geschlossen",
    ],
  },
  {
    id: "section-pm-elektro",
    title: "9. Elektromagnet / Lasthebemagnet",
    cardIds: [
      "card-pm-elektromagnet",
      "card-pm-lasthebemagnet",
      "card-pm-lasthebemagnet-funktion",
    ],
  },
];

export const PHYSIK_MAGNETISMUS_CARD_IDS = physikMagnetismusSections.flatMap(
  (s) => s.cardIds,
);

export const orderedPhysikMagnetismusCards = PHYSIK_MAGNETISMUS_CARD_IDS.map(
  (id) => physikMagnetismusCards.find((c) => c.id === id),
).filter(Boolean);

export const getPhysikMagnetismusCardById = (cardId) =>
  physikMagnetismusCards.find((c) => c.id === cardId) || null;
