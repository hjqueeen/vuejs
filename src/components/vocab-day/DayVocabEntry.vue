<template>
  <article class="day-entry">
    <div class="day-entry__left">
      <div class="day-entry__id-row">
        <span class="day-entry__index">{{ word.index }}</span>
        <div
          class="day-entry__checks"
          role="group"
          :aria-label="`${word.headword} 암기 체크`"
        >
          <label
            v-for="(checked, i) in checks"
            :key="i"
            class="day-entry__check"
          >
            <input
              type="checkbox"
              :checked="checked"
              @change="onCheck(i, $event.target.checked)"
            />
          </label>
        </div>
      </div>
      <h2 class="day-entry__headword">{{ word.headword }}</h2>
    </div>

    <div class="day-entry__right">
      <div v-if="meanings.length" class="day-entry__sense">
        <span
          v-if="primaryPos"
          class="day-entry__pos"
          :class="posClass(primaryPos)"
        >{{ primaryPos }}</span>
        <div class="day-entry__meaning-line">
          <span
            v-for="(m, idx) in meanings"
            :key="'m' + idx"
            class="day-entry__meaning-item"
          >
            <span class="day-entry__meaning-num">{{ idx + 1 }}.</span>
            <span class="day-entry__meaning-text">{{ m.text }}</span>
          </span>
          <span
            v-for="(syn, sIdx) in synonyms"
            :key="'syn' + sIdx"
            class="day-entry__syn"
          >
            <span class="day-entry__syn-eq" aria-hidden="true">=</span>
            <span class="day-entry__syn-text">{{ syn }}</span>
          </span>
          <span
            v-for="(ant, aIdx) in antonyms"
            :key="'ant' + aIdx"
            class="day-entry__ant"
          >
            <span class="day-entry__ant-eq" aria-hidden="true">↔</span>
            <span class="day-entry__ant-text">{{ ant }}</span>
          </span>
        </div>
      </div>

      <ul v-if="examples.length" class="day-entry__examples">
        <li v-for="(ex, idx) in examples" :key="idx">
          <p
            v-if="exampleSource(ex)"
            class="day-entry__ex-source"
            v-html="highlightHeadword(exampleSource(ex))"
          />
          <p v-if="exampleGloss(ex)" class="day-entry__ex-gloss">{{ exampleGloss(ex) }}</p>
        </li>
      </ul>

      <ul v-if="derivatives.length" class="day-entry__derivs">
        <li v-for="(d, idx) in derivatives" :key="idx" class="day-entry__deriv">
          <span class="day-entry__deriv-plus" aria-hidden="true">+</span>
          <span class="day-entry__deriv-word">{{ d.word }}</span>
          <span
            v-if="d.pos"
            class="day-entry__pos day-entry__pos--sm"
            :class="posClass(d.pos)"
          >{{ d.pos }}</span>
          <span v-if="d.meaning" class="day-entry__deriv-meaning">{{ d.meaning }}</span>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
const POS_KIND = {
  명: "noun",
  동: "verb",
  형: "adj",
  부: "adv",
  전: "prep",
  접: "conj",
  구: "phrase",
  대: "pron",
};

export default {
  name: "DayVocabEntry",
  props: {
    word: {
      type: Object,
      required: true,
    },
    /** de-ko | en-de */
    studyMode: {
      type: String,
      default: "de-ko",
    },
  },
  computed: {
    checks() {
      return Array.isArray(this.word.checks) && this.word.checks.length
        ? this.word.checks
        : [false, false];
    },
    meanings() {
      return Array.isArray(this.word.meanings) ? this.word.meanings : [];
    },
    primaryPos() {
      return this.word.pos || this.meanings[0]?.pos || "";
    },
    examples() {
      const list = Array.isArray(this.word.examples) ? this.word.examples : [];
      return list.slice(0, 2);
    },
    synonyms() {
      return Array.isArray(this.word.synonyms) ? this.word.synonyms : [];
    },
    antonyms() {
      return Array.isArray(this.word.antonyms) ? this.word.antonyms : [];
    },
    derivatives() {
      const list = Array.isArray(this.word.derivatives) ? this.word.derivatives : [];
      return list.map((d) =>
        typeof d === "string" ? { word: d, pos: "", meaning: "" } : d
      );
    },
  },
  methods: {
    exampleSource(ex) {
      if (!ex) return "";
      if (this.studyMode === "en-de") return ex.en || ex.source || "";
      return ex.de || ex.source || "";
    },
    exampleGloss(ex) {
      if (!ex) return "";
      if (this.studyMode === "en-de") return ex.de || ex.gloss || "";
      return ex.ko || ex.gloss || "";
    },
    posClass(pos) {
      const kind = POS_KIND[pos] || "other";
      return `day-entry__pos--${kind}`;
    },
    escapeHtml(s) {
      return String(s)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    },
    /** 예문 안에서 표제어(또는 핵심어)를 굵게 */
    highlightHeadword(sentence) {
      const safe = this.escapeHtml(sentence);
      const hw = this.word.headword || "";
      if (!hw) return safe;

      const candidates = [hw]
        .concat(hw.split(/\s+/).filter((w) => w.length >= 4))
        .filter(Boolean);

      let result = safe;
      for (const raw of candidates) {
        const needle = this.escapeHtml(raw);
        const re = new RegExp(`(${needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
        if (re.test(result)) {
          result = result.replace(re, "<strong>$1</strong>");
          break;
        }
      }
      return result;
    },
    onCheck(index, checked) {
      this.$emit("check-change", {
        wordId: this.word.id,
        checkIndex: index,
        checked,
      });
    },
  },
};
</script>

<style scoped>
.day-entry {
  --vd-gold: #e0b13a;
  --vd-gold-deep: #c9a227;
  --vd-pink: #d45a6a;
  --vd-purple: #7b5ea7;
  --vd-green: #3aa06a;
  --vd-orange: #e0892a;
  --vd-dash: #d8d4cc;

  display: grid;
  grid-template-columns: minmax(110px, 28%) minmax(0, 1fr);
  gap: 10px 28px;
  padding: 18px 0;
  border-bottom: 1px dashed var(--vd-dash);
}

.day-entry:last-child {
  border-bottom: none;
}

.day-entry__left {
  min-width: 0;
}

.day-entry__id-row {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
}

.day-entry__index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.4rem;
  padding: 1px 5px;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #5a4a1a;
  background: var(--vd-gold);
  border-radius: 3px;
  font-variant-numeric: tabular-nums;
  line-height: 1.35;
}

.day-entry__checks {
  display: inline-flex;
  gap: 2px;
}

.day-entry__check {
  display: inline-flex;
  margin: 0;
  cursor: pointer;
}

.day-entry__check input {
  width: 10px;
  height: 10px;
  margin: 0;
  appearance: none;
  -webkit-appearance: none;
  border: 1.25px solid #b0aaa0;
  border-radius: 1.5px;
  background: transparent;
  cursor: pointer;
}

.day-entry__check input:checked {
  background: var(--vd-gold);
  border-color: var(--vd-gold-deep);
  box-shadow: inset 0 0 0 1.5px #fff;
}

.day-entry__headword {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 800;
  line-height: 1.25;
  color: var(--c-text-primary);
  letter-spacing: -0.02em;
  word-break: break-word;
}

.day-entry__right {
  min-width: 0;
}

.day-entry__sense {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 10px;
  line-height: 1.55;
}

/* sense(본뜻): 빨간 채움 뱃지 */
.day-entry__pos {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.35rem;
  height: 1.35rem;
  margin-top: 1px;
  font-size: 11px;
  font-weight: 700;
  color: #fff;
  background: var(--vd-pink);
  border: none;
  border-radius: 3px;
  line-height: 1;
  box-sizing: border-box;
}

.day-entry__sense .day-entry__pos,
.day-entry__sense .day-entry__pos--noun,
.day-entry__sense .day-entry__pos--pron,
.day-entry__sense .day-entry__pos--verb,
.day-entry__sense .day-entry__pos--adj,
.day-entry__sense .day-entry__pos--phrase,
.day-entry__sense .day-entry__pos--adv,
.day-entry__sense .day-entry__pos--prep,
.day-entry__sense .day-entry__pos--conj,
.day-entry__sense .day-entry__pos--other {
  color: #fff;
  background: var(--vd-pink);
  border: none;
}

/* 파생어(--sm): 회색 아웃라인 */
.day-entry__pos--sm {
  width: 1.15rem;
  height: 1.15rem;
  font-size: 10px;
  margin-top: 0;
  color: #6b6560;
  background: #fff;
  border: 1px solid #b8b2a8;
  border-radius: 2px;
}

.day-entry__pos--sm.day-entry__pos--noun,
.day-entry__pos--sm.day-entry__pos--pron,
.day-entry__pos--sm.day-entry__pos--verb,
.day-entry__pos--sm.day-entry__pos--adj,
.day-entry__pos--sm.day-entry__pos--phrase,
.day-entry__pos--sm.day-entry__pos--adv,
.day-entry__pos--sm.day-entry__pos--prep,
.day-entry__pos--sm.day-entry__pos--conj,
.day-entry__pos--sm.day-entry__pos--other {
  color: #6b6560;
  background: #fff;
  border-color: #b8b2a8;
}

.day-entry__meaning-line {
  flex: 1;
  min-width: 0;
  font-size: 0.95rem;
  color: var(--vd-pink);
  font-weight: 700;
}

.day-entry__meaning-item {
  margin-right: 0.35em;
}

.day-entry__meaning-num {
  font-weight: 700;
}

.day-entry__meaning-text {
  font-weight: 700;
}

.day-entry__syn,
.day-entry__ant {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-left: 8px;
  white-space: nowrap;
  vertical-align: middle;
}

.day-entry__syn-eq,
.day-entry__ant-eq {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 0.95rem;
  height: 0.95rem;
  font-size: 9px;
  font-weight: 800;
  border-radius: 50%;
  line-height: 1;
  box-sizing: border-box;
}

.day-entry__syn-eq {
  color: var(--vd-orange);
  background: #fff;
  border: 1px solid var(--vd-orange);
}

.day-entry__ant-eq {
  color: #8a8a8a;
  background: #fff;
  border: 1px solid #8a8a8a;
  font-size: 8px;
}

.day-entry__syn-text {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--vd-orange);
}

.day-entry__ant-text {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--c-text-secondary);
}

.day-entry__examples {
  list-style: none;
  margin: 0 0 8px;
  padding: 0;
}

.day-entry__examples li + li {
  margin-top: 8px;
}

.day-entry__ex-source {
  margin: 0 0 2px;
  font-size: 0.92rem;
  line-height: 1.5;
  color: var(--c-text-primary);
}

.day-entry__ex-source >>> strong {
  font-weight: 800;
  color: var(--c-text-primary);
}

.day-entry__ex-gloss {
  margin: 0;
  font-size: 0.86rem;
  line-height: 1.45;
  color: var(--c-text-secondary);
}

.day-entry__derivs {
  list-style: none;
  margin: 0;
  padding: 0;
}

.day-entry__deriv {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
  font-size: 0.88rem;
  line-height: 1.4;
}

.day-entry__deriv-plus {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  font-size: 11px;
  font-weight: 800;
  color: #fff;
  background: var(--vd-green);
  border-radius: 2px;
  line-height: 1;
}

.day-entry__deriv-word {
  font-weight: 700;
  color: var(--c-text-primary);
}

.day-entry__deriv-meaning {
  color: var(--c-text-secondary);
  font-weight: 500;
}

@media (max-width: 560px) {
  .day-entry {
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 14px 0;
  }

  .day-entry__headword {
    font-size: 1.1rem;
  }
}
</style>
