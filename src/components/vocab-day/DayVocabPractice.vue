<template>
  <section class="practice">
    <header class="practice__header">
      <h2 class="practice__title">예문 연습</h2>
      <p class="practice__hint">{{ modeHint }}</p>
      <p class="practice__progress">{{ answeredCount }}/{{ items.length }}</p>
    </header>

    <p v-if="!items.length" class="practice__empty">이 DAY에 예문이 없습니다.</p>

    <ol v-else class="practice__list">
      <li
        v-for="(item, idx) in items"
        :key="item.id"
        class="practice__card"
        :class="{
          'practice__card--ok': results[item.id] === 'ok',
          'practice__card--bad': results[item.id] === 'bad',
          'practice__card--revealed': revealed[item.id],
        }"
      >
        <div class="practice__meta">
          <span class="practice__num">{{ idx + 1 }}</span>
          <span class="practice__headword">{{ item.prompt }}</span>
        </div>

        <!-- 독일어: 한글 보고 독일어 쓰기 -->
        <template v-if="!isSpeakMode">
          <label class="practice__label" :for="'ans-' + item.id">독일어로 쓰기</label>
          <textarea
            :id="'ans-' + item.id"
            class="practice__input"
            rows="2"
            :value="answers[item.id] || ''"
            :placeholder="placeholder"
            @input="onInput(item.id, $event.target.value)"
          />
          <div class="practice__actions">
            <button
              type="button"
              class="practice__btn"
              :disabled="!hasAnswer(item.id)"
              @click="checkOne(item)"
            >
              확인
            </button>
            <button
              type="button"
              class="practice__btn practice__btn--ghost"
              :disabled="!hasAnswer(item.id)"
              @click="revealOne(item)"
            >
              정답 보기
            </button>
          </div>
        </template>

        <!-- 영어: 독일어 보고 영어로 말하기 -->
        <template v-else>
          <p class="practice__speak-cue">영어로 말해 보세요</p>
          <div class="practice__actions">
            <button
              type="button"
              class="practice__btn"
              @click="revealOne(item)"
            >
              말해 봤어요 · 정답 보기
            </button>
          </div>
          <details class="practice__type-opt">
            <summary>직접 써서 확인</summary>
            <textarea
              class="practice__input"
              rows="2"
              :value="answers[item.id] || ''"
              placeholder="영어로 적어 보기 (선택)"
              @input="onInput(item.id, $event.target.value)"
            />
            <button type="button" class="practice__btn practice__btn--sm" @click="checkOne(item)">
              확인
            </button>
          </details>
        </template>

        <p
          v-if="showAnswer(item)"
          class="practice__answer"
        >
          <span class="practice__answer-label">정답</span>
          {{ item.answer }}
        </p>
        <p
          v-if="showAnswer(item) && results[item.id] === 'ok'"
          class="practice__feedback practice__feedback--ok"
        >
          맞아요
        </p>
        <p
          v-else-if="showAnswer(item) && results[item.id] === 'bad'"
          class="practice__feedback practice__feedback--bad"
        >
          다시 해 보세요
        </p>
      </li>
    </ol>
  </section>
</template>

<script>
/** { [itemId]: { answer?: string, result?: 'ok'|'bad', revealed?: boolean } } */
const STORAGE_PRACTICE = "day-vocab-practice";

function exampleSource(ex, studyMode) {
  if (!ex) return "";
  if (studyMode === "en-de") return ex.en || ex.source || "";
  return ex.de || ex.source || "";
}

function exampleGloss(ex, studyMode) {
  if (!ex) return "";
  if (studyMode === "en-de") return ex.de || ex.gloss || "";
  return ex.ko || ex.gloss || "";
}

function normalizeAnswer(s) {
  return String(s || "")
    .trim()
    .toLowerCase()
    .replace(/[“”„"']/g, "")
    .replace(/\s+/g, " ")
    .replace(/[.!?…]+$/g, "");
}

function loadPracticeMap() {
  try {
    const raw = localStorage.getItem(STORAGE_PRACTICE);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export default {
  name: "DayVocabPractice",
  props: {
    words: {
      type: Array,
      default: () => [],
    },
    studyMode: {
      type: String,
      default: "de-ko",
    },
  },
  data() {
    return {
      answers: {},
      results: {},
      revealed: {},
      practiceMap: loadPracticeMap(),
    };
  },
  computed: {
    isSpeakMode() {
      return this.studyMode === "en-de";
    },
    modeHint() {
      return this.isSpeakMode
        ? "독일어 문장만 보고 영어로 말해 보세요."
        : "한글 해석만 보고 독일어 예문을 적어 보세요.";
    },
    placeholder() {
      return "예문을 독일어로 입력";
    },
    items() {
      const list = [];
      (this.words || []).forEach((word) => {
        (word.examples || []).slice(0, 2).forEach((ex, exIdx) => {
          const prompt = exampleGloss(ex, this.studyMode);
          const answer = exampleSource(ex, this.studyMode);
          if (!prompt || !answer) return;
          list.push({
            id: `${word.id}::${exIdx}`,
            wordId: word.id,
            headword: word.headword,
            prompt,
            answer,
          });
        });
      });
      return list;
    },
    answeredCount() {
      return this.items.filter(
        (it) => this.results[it.id] === "ok" || this.revealed[it.id]
      ).length;
    },
  },
  watch: {
    studyMode() {
      this.hydrateFromStorage();
    },
    words: {
      handler() {
        this.hydrateFromStorage();
      },
      deep: false,
    },
    items: {
      handler() {
        this.hydrateFromStorage();
      },
      immediate: true,
    },
  },
  methods: {
    hydrateFromStorage() {
      const answers = {};
      const results = {};
      const revealed = {};
      this.items.forEach((it) => {
        const saved = this.practiceMap[it.id];
        if (!saved || typeof saved !== "object") return;
        if (typeof saved.answer === "string") answers[it.id] = saved.answer;
        if (saved.result === "ok" || saved.result === "bad") {
          results[it.id] = saved.result;
        }
        if (saved.revealed) revealed[it.id] = true;
      });
      this.answers = answers;
      this.results = results;
      this.revealed = revealed;
    },
    persistItem(id) {
      const entry = {
        answer: this.answers[id] || "",
        result: this.results[id] || null,
        revealed: !!this.revealed[id],
      };
      if (!entry.answer && !entry.result && !entry.revealed) {
        this.$delete(this.practiceMap, id);
      } else {
        this.$set(this.practiceMap, id, entry);
      }
      try {
        localStorage.setItem(STORAGE_PRACTICE, JSON.stringify(this.practiceMap));
      } catch {
        /* quota / private mode */
      }
    },
    hasAnswer(id) {
      return String(this.answers[id] || "").trim().length > 0;
    },
    showAnswer(item) {
      if (!(this.revealed[item.id] || this.results[item.id])) return false;
      // 말하기 모드는 입력 없이 정답 보기 가능
      if (this.isSpeakMode) return true;
      return this.hasAnswer(item.id);
    },
    onInput(id, value) {
      this.$set(this.answers, id, value);
      if (this.results[id]) this.$delete(this.results, id);
      this.persistItem(id);
    },
    checkOne(item) {
      if (!this.isSpeakMode && !this.hasAnswer(item.id)) return;
      const ok =
        normalizeAnswer(this.answers[item.id]) === normalizeAnswer(item.answer);
      this.$set(this.results, item.id, ok ? "ok" : "bad");
      if (ok) this.$set(this.revealed, item.id, true);
      this.persistItem(item.id);
    },
    revealOne(item) {
      if (!this.isSpeakMode && !this.hasAnswer(item.id)) return;
      this.$set(this.revealed, item.id, true);
      this.persistItem(item.id);
    },
  },
};
</script>

<style scoped>
.practice {
  max-width: 720px;
  margin: 0 auto;
  padding: 12px 22px 48px;
}

.practice__header {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 8px 14px;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--c-border);
}

.practice__title {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--c-text-primary);
}

.practice__hint {
  margin: 0;
  flex: 1;
  font-size: 0.85rem;
  color: var(--c-text-secondary);
}

.practice__progress {
  margin: 0;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--c-text-muted);
  font-variant-numeric: tabular-nums;
}

.practice__empty {
  color: var(--c-text-muted);
}

.practice__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.practice__card {
  padding: 16px;
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-md);
}

.practice__card--ok {
  border-color: var(--c-teal);
  background: var(--c-teal-light);
}

.practice__card--bad {
  border-color: #d45a6a;
}

.practice__meta {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 8px;
}

.practice__num {
  font-size: 0.75rem;
  font-weight: 800;
  color: var(--c-text-muted);
}

.practice__headword {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--c-blue);
}

.practice__prompt {
  margin: 0 0 12px;
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.45;
  color: var(--c-text-primary);
}

.practice__speak-cue {
  margin: 0 0 10px;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--c-amber);
}

.practice__label {
  display: block;
  margin-bottom: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--c-text-muted);
}

.practice__input {
  width: 100%;
  box-sizing: border-box;
  padding: 10px 12px;
  font-size: 0.95rem;
  line-height: 1.4;
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-sm);
  background: var(--c-bg);
  color: var(--c-text-primary);
  resize: vertical;
  margin-bottom: 10px;
}

.practice__input:focus {
  outline: none;
  border-color: var(--c-blue-mid);
}

.practice__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.practice__btn {
  appearance: none;
  border: none;
  padding: 8px 14px;
  font-size: 0.85rem;
  font-weight: 700;
  color: #fff;
  background: var(--c-blue);
  border-radius: var(--c-radius-sm);
  cursor: pointer;
}

.practice__btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.practice__btn--ghost {
  background: transparent;
  color: var(--c-blue);
  border: 1px solid var(--c-blue-mid);
}

.practice__btn--sm {
  padding: 6px 12px;
  font-size: 0.8rem;
  margin-top: 8px;
}

.practice__type-opt {
  margin-top: 12px;
  font-size: 0.85rem;
  color: var(--c-text-secondary);
}

.practice__type-opt summary {
  cursor: pointer;
  font-weight: 600;
  margin-bottom: 8px;
}

.practice__answer {
  margin: 12px 0 0;
  padding: 10px 12px;
  font-size: 0.95rem;
  line-height: 1.45;
  background: var(--c-blue-light);
  border-radius: var(--c-radius-sm);
  color: var(--c-text-primary);
}

.practice__answer-label {
  display: inline-block;
  margin-right: 8px;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  color: var(--c-blue);
  text-transform: uppercase;
}

.practice__feedback {
  margin: 8px 0 0;
  font-size: 0.85rem;
  font-weight: 700;
}

.practice__feedback--ok {
  color: var(--c-teal);
}

.practice__feedback--bad {
  color: #d45a6a;
}
</style>
