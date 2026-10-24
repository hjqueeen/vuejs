# Klassenarbeit: Reelle Zahlen und Wurzeln

> Hangyeol · Klasse 9e · Herr Calow  
> Kurze Prüfungshilfen zu den „Ich kann …“-Punkten

---

## Wichtige Kenntnisse aus Klasse 7 und 8

| Thema | Inhalt |
| :--- | :--- |
| Quadratzahlen | \(1^2\) bis \(25^2\) auswendig: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400, 441, 484, 529, 576, 625 |
| Binomische Formeln | \((a+b)^2 = a^2+2ab+b^2\) · \((a-b)^2 = a^2-2ab+b^2\) · \((a+b)(a-b)=a^2-b^2\) |
| Lineare Gleichungen | Lösen mit Äquivalenzumformungen |
| Brüche / Dezimalzahlen | Abbrechende und periodische Dezimalzahlen ↔ rationale Zahlen |

---

## 1. Quadratwurzeln und Zahlbereiche

### 1.1 Definition der Quadratwurzel

> Die Quadratwurzel \(\sqrt{a}\) (mit \(a \ge 0\)) ist die nichtnegative Zahl \(x\), für die gilt: \(x^2 = a\).  
> Also: \(\sqrt{a} = x \Leftrightarrow x \ge 0\) und \(x^2 = a\).

**Warum ist \(\sqrt{-9}\) in \(\mathbb{R}\) nicht definiert?**

> Es gibt keine reelle Zahl \(x\) mit \(x^2 = -9\), weil das Quadrat einer reellen Zahl nie negativ ist.  
> Deshalb ist \(\sqrt{-9}\) in der Menge der reellen Zahlen nicht definiert.

---

### 1.2 Wurzeln im Kopf berechnen (Dezimalzahlen, Brüche)

**Vorgehen:** Dezimalzahl oder Bruch so umschreiben, dass man bekannte Quadratzahlen erkennt.

**Beispiel:** \(\sqrt{0{,}0144}\)

\[
\sqrt{0{,}0144} = \sqrt{\dfrac{144}{10000}} = \dfrac{\sqrt{144}}{\sqrt{10000}} = \dfrac{12}{100} = 0{,}12
\]

**Beispiel:** \(\sqrt{\dfrac{49}{225}}\)

\[
\sqrt{\dfrac{49}{225}} = \dfrac{\sqrt{49}}{\sqrt{225}} = \dfrac{7}{15}
\]

**Regel:** \(\sqrt{\dfrac{a}{b}} = \dfrac{\sqrt{a}}{\sqrt{b}}\) (für \(a,b \ge 0\), \(b \neq 0\))

---

### 1.3 Abschätzen zwischen zwei natürlichen Zahlen

**Vorgehen:** Die nächsten Quadratzahlen suchen.

**Beispiel:** \(\sqrt{20}\)

- \(4^2 = 16\), \(5^2 = 25\)
- \(16 < 20 < 25\) ⇒ \(4 < \sqrt{20} < 5\)

**Formulierung:**

> \(\sqrt{20}\) liegt zwischen den natürlichen Zahlen 4 und 5, weil \(4^2 = 16 < 20 < 25 = 5^2\).

---

### 1.4 Warum gilt \(\sqrt{a^2} = |a|\)?

> \(\sqrt{a^2}\) ist definitionsgemäß die **nichtnegative** Zahl, deren Quadrat \(a^2\) ist.  
> Das ist genau der Betrag \(|a|\).  
> Beispiel: \(\sqrt{(-3)^2} = \sqrt{9} = 3 = |-3|\), nicht \(-3\).

---

### 1.5 Zahlbereiche \(\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}\)

| Menge | Bedeutung | Beispiele |
| :--- | :--- | :--- |
| \(\mathbb{N}\) | natürliche Zahlen | \(0,1,2,3,\ldots\) (ob 0 dazugehört: nach Schuldefinition) |
| \(\mathbb{Z}\) | ganze Zahlen | \(\ldots,-2,-1,0,1,2,\ldots\) |
| \(\mathbb{Q}\) | rationale Zahlen (als Bruch darstellbar) | \(\dfrac{3}{4},\; -2,\; 0{,}5,\; 0{,}\overline{3}\) |
| \(\mathbb{R}\) | reelle Zahlen | alle rationalen Zahlen und irrationale Zahlen wie \(\sqrt{2},\; \pi\) |

**Zuordnung:**

| Zahl | \(\mathbb{N}\) | \(\mathbb{Z}\) | \(\mathbb{Q}\) | \(\mathbb{R}\) |
| :---: | :---: | :---: | :---: | :---: |
| \(5\) | ✓ | ✓ | ✓ | ✓ |
| \(-3\) | | ✓ | ✓ | ✓ |
| \(\dfrac{2}{7}\) | | | ✓ | ✓ |
| \(\sqrt{2}\) | | | | ✓ |
| \(\sqrt{9}=3\) | ✓ | ✓ | ✓ | ✓ |
| \(\pi\) | | | | ✓ |

---

## 2. Irrationale Zahlen

### 2.1 \(\sqrt{2}\) geometrisch darstellen

1. Einheitsquadrat mit Seitenlänge 1 zeichnen.
2. Diagonale mit Pythagoras: \(d^2 = 1^2 + 1^2 = 2\) ⇒ \(d = \sqrt{2}\).
3. Mit dem Zirkel die Länge der Diagonale auf die Zahlengerade übertragen.

---

### 2.2 Indirekter Beweis: \(\sqrt{2}\) ist irrational

> **Annahme:** \(\sqrt{2}\) sei rational.  
> Dann gibt es teilerfremde ganze Zahlen \(p,q\) mit \(q \neq 0\) und \(\sqrt{2} = \dfrac{p}{q}\).  
>
> Quadrieren: \(2 = \dfrac{p^2}{q^2}\) ⇒ \(p^2 = 2q^2\).  
> Also ist \(p^2\) gerade ⇒ \(p\) ist gerade, also \(p = 2k\).  
> Einsetzen: \((2k)^2 = 2q^2\) ⇒ \(4k^2 = 2q^2\) ⇒ \(q^2 = 2k^2\).  
> Also ist auch \(q\) gerade.  
>
> **Widerspruch:** \(p\) und \(q\) haben den gemeinsamen Teiler 2, sind aber teilerfremd.  
> Die Annahme ist falsch.  
> **Folgerung:** \(\sqrt{2}\) ist irrational.

**Übertragung:** Dieselbe Beweisidee gilt z. B. für \(\sqrt{3}\), \(\sqrt{5}\) oder \(\sqrt{p}\) (\(p\) Primzahl).

---

## 3. Näherungsverfahren

### 3.1 Intervallschachtelung

**Ziel:** \(\sqrt{a}\) durch immer engere Intervalle annähern.

**Vorgehen:**

1. Startintervall: \(u_0^2 < a < o_0^2\).
2. Mittelwert \(m = \dfrac{u+o}{2}\) berechnen.
3. Wenn \(m^2 < a\), setze \(u := m\); sonst \(o := m\).
4. Wiederholen, bis die gewünschte Genauigkeit erreicht ist.

**Tabelle** (Beispiel \(\sqrt{2}\)):

| Schritt | \(u\) | \(o\) | \(m=\frac{u+o}{2}\) | \(m^2\) | Vergleich mit 2 | neues Intervall |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 0 | 1 | 2 | 1,5 | 2,25 | \(> 2\) | \([1; 1{,}5]\) |
| 1 | 1 | 1,5 | 1,25 | 1,5625 | \(< 2\) | \([1{,}25; 1{,}5]\) |
| 2 | 1,25 | 1,5 | 1,375 | … | … | … |

---

### 3.2 Heron-Verfahren (Rechnung + Tabelle)

**Formel:** \(x_{n+1} = \dfrac{1}{2}\left(x_n + \dfrac{a}{x_n}\right)\)  
(Startwert \(x_0 > 0\), z. B. \(x_0 = 1\))

**Beispiel:** \(\sqrt{2}\), \(x_0 = 1\)

| \(n\) | \(x_n\) | \(\dfrac{a}{x_n}\) | \(x_{n+1}=\frac12\left(x_n+\frac{a}{x_n}\right)\) |
| :---: | :---: | :---: | :---: |
| 0 | 1 | 2 | \(\frac12(1+2)=1{,}5\) |
| 1 | 1,5 | \(1{,}\overline{3}\) | \(\frac12(1{,}5+1{,}\overline{3})\approx 1{,}4167\) |
| 2 | ≈1,4167 | ≈1,4118 | ≈1,4142 |

---

### 3.3 Heron-Verfahren geometrisch (Rechtecke)

> Man beginnt mit einem Rechteck der Fläche \(a\) (Seiten \(x_0\) und \(\frac{a}{x_0}\)).  
> Als neue Seitenlänge nimmt man den Mittelwert der beiden Seiten.  
> Die Rechtecke werden immer „quadratischer“.  
> Im Grenzfall entsteht ein Quadrat mit Seitenlänge \(\sqrt{a}\) und Fläche \(a\).

---

## 4. Rechnen mit Wurzeln

### 4.1 Wurzelgesetze

| Gesetz | Formel | Hinweis |
| :--- | :--- | :--- |
| Produkt | \(\sqrt{a}\cdot\sqrt{b}=\sqrt{a\cdot b}\) | \(a,b \ge 0\) |
| Quotient | \(\dfrac{\sqrt{a}}{\sqrt{b}}=\sqrt{\dfrac{a}{b}}\) | \(a \ge 0\), \(b > 0\) |
| Summe / Differenz | \(\sqrt{a}+\sqrt{b} \neq \sqrt{a+b}\) | **kein** entsprechendes Gesetz |

**Gegenbeispiel:** \(\sqrt{9}+\sqrt{16}=3+4=7\), aber \(\sqrt{9+16}=\sqrt{25}=5\).

---

### 4.2 Terme vereinfachen (partielles Wurzelziehen)

**Vorgehen:** Quadratfaktoren herausziehen.

\[
\sqrt{50} = \sqrt{25\cdot 2} = 5\sqrt{2}
\]

\[
\sqrt{72} = \sqrt{36\cdot 2} = 6\sqrt{2}
\]

\[
3\sqrt{18} - \sqrt{8} = 3\cdot 3\sqrt{2} - 2\sqrt{2} = 9\sqrt{2}-2\sqrt{2}=7\sqrt{2}
\]

---

### 4.3 Nenner rationalisieren

**Einfacher Fall:** \(\dfrac{1}{\sqrt{a}} = \dfrac{\sqrt{a}}{a}\)

\[
\dfrac{5}{\sqrt{3}} = \dfrac{5\sqrt{3}}{3}
\]

**Mit 3. binomischer Formel** (Nenner \(a+\sqrt{b}\)):

\[
\dfrac{1}{3+\sqrt{2}} \cdot \dfrac{3-\sqrt{2}}{3-\sqrt{2}} = \dfrac{3-\sqrt{2}}{9-2} = \dfrac{3-\sqrt{2}}{7}
\]

**Grund:** \((a+\sqrt{b})(a-\sqrt{b}) = a^2 - b\) → Wurzel im Nenner verschwindet.

---

## 5. Gleichungen

### 5.1 Definitionsmenge

**Regel:** Der Radikand muss \(\ge 0\) sein.

**Beispiel:** \(T(x)=\sqrt{2x-6}\)

\[
2x-6 \ge 0 \Rightarrow x \ge 3 \Rightarrow D = \{x \in \mathbb{R} \mid x \ge 3\}
\]

Bei mehreren Wurzeln: Bedingungen für jeden Radikanden aufstellen und schneiden.

---

### 5.2 Wurzelgleichungen und Scheinlösungen

**Vorgehen:**

1. Definitionsmenge bestimmen.
2. Wurzel isolieren.
3. Beide Seiten quadrieren (kann Scheinlösungen erzeugen!).
4. Entstandene Gleichung lösen.
5. **Probe:** Kandidaten in die Ausgangsgleichung und in \(D\) einsetzen. Unpassende Werte sind **Scheinlösungen**.

**Beispiel:** \(\sqrt{x+3} = x-1\)

- \(D\): \(x+3 \ge 0\) und \(x-1 \ge 0\) ⇒ \(x \ge 1\)
- Quadrieren: \(x+3 = (x-1)^2 = x^2-2x+1\)
- Gleichung lösen, danach **unbedingt Probe** machen
- Werte außerhalb von \(D\) oder falsch in der Ausgangsgleichung verwerfen

**Merksatz:**

> Beim Quadrieren können Scheinlösungen entstehen. Deshalb muss jede Lösung durch Einsetzen in die Ausgangsgleichung überprüft werden.

---

## Checkliste vor der Klassenarbeit

- [ ] \(\sqrt{-a}\) ist in \(\mathbb{R}\) nicht definiert (\(a>0\))
- [ ] \(\sqrt{a^2}=|a|\)
- [ ] Zahlen richtig zuordnen: \(\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}\)
- [ ] \(\sqrt{2}\) geometrisch und indirekter Beweis
- [ ] Intervallschachtelung / Heron mit Tabelle
- [ ] Produkt- und Quotientengesetz gelten; Summe/Differenz nicht
- [ ] Nenner rationalisieren (3. Binom)
- [ ] Wurzelgleichung: \(D\) → quadrieren → **Probe**
