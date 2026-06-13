#!/usr/bin/env python3
"""Overlay employee data onto the original DATEV Personalfragebogen Minijob PDF."""

import fitz

SRC = "/Users/kim/project-hwr/vuejs/src/data/private/Personalfragebogen Minijob.pdf"
OUT = "/Users/kim/project-hwr/vuejs/src/data/private/Personalfragebogen Minijob - ausgefuellt.pdf"

FONT = "helv"
SIZE = 9
SMALL = 8


def text(page, x, y, value, size=SIZE):
    if value:
        page.insert_text((x, y), value, fontsize=size, fontname=FONT, color=(0, 0, 0))


def mark(page, x, y, size=SMALL):
    page.insert_text((x, y), "X", fontsize=size, fontname=FONT, color=(0, 0, 0))


def fill_pdf():
    doc = fitz.open(SRC)

    # Page 1 — personal, bank, employment
    p = doc[0]
    text(p, 76, 256, "Kim")
    text(p, 304, 256, "Hyejin")
    text(p, 304, 280, "27.01.1986")
    text(p, 76, 304, "Gyeongju")
    text(p, 304, 304, "Republik Korea")
    text(p, 76, 328, "Republik Korea")
    mark(p, 409, 322)  # Schwerbehindert ja
    text(p, 448, 328, "GdB 50", SMALL)
    mark(p, 355, 346)  # weiblich
    text(p, 76, 376, "Chamissostr. 10")
    text(p, 304, 376, "13587 Berlin")
    # Cover "Abweichender Kontoinhaber" label and use the field for bank details
    p.draw_rect(fitz.Rect(72, 468, 528, 518), color=(1, 1, 1), fill=(1, 1, 1))
    text(p, 76, 488, "IBAN: DE19 1101 0101 5446 2990 18")
    text(p, 76, 504, "BIC: SOBKDEB2XXX")
    text(p, 76, 574, "01.07.2026")
    text(p, 76, 622, "HWR Berlin")
    text(p, 304, 622, "Studentische Hilfskraft / Minijob")

    # Page 2 — education, hours, status, tax
    p = doc[1]
    mark(p, 86, 294)   # Abitur/Fachabitur
    mark(p, 297, 298)  # Bachelor
    text(p, 210, 372, "10")
    mark(p, 156, 378)  # Teilzeit
    mark(p, 338, 500)  # Student/in
    text(p, 76, 598, "65324076610")
    text(p, 304, 598, "5")
    text(p, 76, 622, "0,0")
    text(p, 304, 622, "keine")

    # Page 3 — insurance, other employment
    p = doc[2]
    mark(p, 181, 238)  # Gesetzlich
    text(p, 304, 256, "Techniker Krankenkasse (TK)")
    mark(p, 374, 272)  # RV-Befreiung ja
    mark(p, 260, 572)  # weitere Beschäftigungen ja
    text(p, 92, 616, "laufend")
    text(p, 92, 640, "laufend")
    text(p, 168, 616, "Alstom")
    text(p, 340, 616, "Duales Studium / Praxis")
    mark(p, 272, 614)  # nicht geringfügig entlohnt
    mark(p, 471, 686)  # Entgeltgrenze ja

    # Page 4 — documents, date
    p = doc[3]
    mark(p, 313, 350)  # Studienbescheinigung
    mark(p, 313, 363)  # Schwerbehindertenausweis
    text(p, 76, 484, "11.06.2026")

    doc.save(OUT)
    doc.close()
    print(OUT)


if __name__ == "__main__":
    fill_pdf()
