"""Parse 통일원정대 공개문제 PDF into tongilQuizContent.generated.json"""
from pypdf import PdfReader
import re
import json
import os

PDF = "/Users/kim/Downloads/통일원정대공개문제_0428.pdf"
OUT = os.path.join(os.path.dirname(__file__), "..", "src/data/tongilQuizContent.generated.json")

CHAPTERS = [
    {"id": "ch1", "title": "1. 분단에 대한 인식", "start": 1, "end": 49},
    {"id": "ch2", "title": "2. 평화통일에 대한 역사적 접근", "start": 50, "end": 96},
    {"id": "ch3", "title": "3. 북한에 대한 이해", "start": 97, "end": 146},
    {"id": "ch4", "title": "4. 한반도 평화통일의 미래", "start": 147, "end": 200},
]


def chapter_for(no):
    for ch in CHAPTERS:
        if ch["start"] <= no <= ch["end"]:
            return ch["id"]
    return "ch4"


def clean_pdf_artifacts(t):
    t = re.sub(r"-\s*\d+\s*-\s*", " ", t)
    t = re.sub(r"번\s*호\s*문\s*항\s*\d+\.[^\n]*", " ", t)
    return t


def norm_space(t):
    return re.sub(r"\s+", " ", clean_pdf_artifacts(t)).strip()


def find_q_start(text, qno):
    cut = len(text)
    patterns = [
        rf"\n\s*{qno}\s*\n",
        rf"\n\s*{qno}(?=\s|[(\u2460-\u2473가-힣①②③④'\"'\u2018\u2019])",
        rf"(?<=[。.\s])(?<![0-9]){qno}(?=\s|[(\u2460-\u2473가-힣①②③④'\"'\u2018\u2019])",
        rf"(?<![0-9]){qno}(?=\s|[(\u2460-\u2473가-힣①②③④0-9'\"'\u2018\u2019])",
    ]
    for pat in patterns:
        m = re.search(pat, text)
        if m and m.start() < cut:
            cut = m.start()
    return cut


def parse_problem_block(raw, qno):
    raw = clean_pdf_artifacts(raw.strip())
    cut = find_q_start(raw, qno)
    raw = raw[cut:]
    raw = re.sub(rf"^{qno}\s*", "", raw.lstrip())
    choices = []
    for m in re.finditer(r"([①②③④⑤⑥])\s*([^\n①②③④⑤⑥\[]+)", raw):
        choices.append({"key": m.group(1), "label": norm_space(m.group(2))})
    if choices:
        qtext = raw[: raw.find("①")].strip() if "①" in raw else raw
        return norm_space(qtext), choices, "mcq"
    if re.search(r"맞으면\s*O|O,\s*틀리면\s*X", raw, re.I):
        qtext = norm_space(re.sub(r"맞으면\s*O.*$", "", raw, flags=re.I))
        return qtext, [{"key": "O", "label": "맞음 (O)"}, {"key": "X", "label": "틀림 (X)"}], "ox"
    return norm_space(raw), [], "short"


def normalize_answer(a, qtype):
    a = norm_space(a).replace("○", "O")
    if qtype == "mcq" and re.match(r"^(\d+)$", a):
        keys = ["①", "②", "③", "④", "⑤", "⑥"]
        idx = int(a) - 1
        if 0 <= idx < len(keys):
            return keys[idx]
    if qtype == "ox":
        u = a.upper().strip()
        if u in ("O", "X"):
            return u
    return a


def main():
    reader = PdfReader(PDF)
    full = "".join((p.extract_text() or "") + "\n" for p in reader.pages)
    markers = [m.start() for m in re.finditer(r"\[정답\]", full)]
    assert len(markers) == 200
    ANS = len("[정답]")
    questions = []

    for i in range(1, 201):
        pos = markers[i - 1]
        ans_end = pos + ANS
        ans_exp = full[ans_end : markers[i] if i < 200 else len(full)]
        exp_parts = re.split(r"【해설】|\[해설\]", ans_exp, maxsplit=1)
        answer_raw = norm_space(exp_parts[0])
        explanation = norm_space(exp_parts[1].replace("\n", " ")) if len(exp_parts) > 1 else ""

        if i == 1:
            prob_region = full[:pos]
            m = re.search(r"(?:번 호문 항\s*1\.[^\n]*\n\s*)?1\s*\n(.+)$", prob_region, re.DOTALL)
            prob_raw = m.group(1).strip() if m else prob_region[-2000:]
        else:
            prev = full[markers[i - 2] + ANS : pos]
            exp_parts2 = re.split(r"【해설】|\[해설\]", prev, maxsplit=1)
            prob_raw = exp_parts2[1] if len(exp_parts2) > 1 else prev
            cut = find_q_start(prob_raw, i)
            prob_raw = prob_raw[cut:]
            prob_raw = re.sub(rf"^{i}\s*", "", prob_raw.lstrip())

        question, choices, qtype = parse_problem_block(prob_raw, i)
        if i < 200 and explanation:
            nxt = i + 1
            cut = find_q_start(explanation, nxt)
            if cut < len(explanation):
                explanation = explanation[:cut].strip()

        questions.append({
            "id": f"tq-{i}",
            "no": i,
            "chapterId": chapter_for(i),
            "type": qtype,
            "question": question,
            "choices": choices,
            "answer": normalize_answer(answer_raw, qtype),
            "explanation": explanation,
        })

    issues = [(q["no"], len(q["question"])) for q in questions if len(q["question"]) < 12]
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, "w", encoding="utf-8") as f:
        json.dump({"chapters": CHAPTERS, "questions": questions}, f, ensure_ascii=False, indent=2)
    print(f"Saved {len(questions)} questions, issues: {len(issues)}", issues[:10])
    print("Q2:", questions[1]["question"][:90])
    print("Q41:", questions[40]["question"][:90])


if __name__ == "__main__":
    main()
