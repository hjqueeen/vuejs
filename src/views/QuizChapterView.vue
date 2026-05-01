<template>
  <div v-if="chapter" class="quiz-page">
    <header class="quiz-header">
      <div class="quiz-header-left">
        <span class="quiz-chip">{{ chapter.chip }}</span>
        <h2>{{ chapter.title }}</h2>
      </div>
      <div class="quiz-header-right">
        <p class="quiz-subtitle">{{ chapter.subtitle }}</p>
        <button v-if="anySelected" type="button" class="quiz-reset-btn" @click="resetAll">
          다시 풀기
        </button>
      </div>
    </header>

    <div class="quiz-body">
      <ol class="quiz-list">
        <li
          v-for="q in chapter.questions"
          :key="q.no"
          class="quiz-item"
          :class="resultClass(q)"
        >
          <p class="quiz-question">
            <span class="quiz-no" :class="noClass(q)">{{ q.no }}</span>
            {{ q.text }}
          </p>
          <ul class="quiz-options">
            <li
              v-for="(opt, idx) in q.options"
              :key="idx"
              class="quiz-option"
              :class="optionClass(q, idx)"
              @click="selectOption(q, idx)"
            >
              <span class="quiz-option-text">{{ opt }}</span>
            </li>
          </ul>
        </li>
      </ol>

      <footer class="quiz-footer">
        <button
          type="button"
          class="quiz-check-btn"
          :disabled="!anySelected"
          @click="openDialog"
        >
          정답 확인하기
        </button>
      </footer>
    </div>

    <!-- ── 결과 다이얼로그 ── -->
    <transition name="dialog-fade">
      <div v-if="dialogOpen" class="dialog-overlay" @click.self="closeDialog">
        <div class="dialog-box">
          <div class="dialog-header">
            <span class="dialog-score">
              {{ correctCount }} / {{ chapter.questions.length }} 정답
            </span>
            <button type="button" class="dialog-close" @click="closeDialog" aria-label="닫기">
              <svg viewBox="0 0 16 16" fill="none">
                <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
          </div>

          <ol class="dialog-list">
            <li
              v-for="q in chapter.questions"
              :key="q.no"
              class="dialog-item"
              :class="isCorrect(q) ? 'dialog-item--correct' : 'dialog-item--wrong'"
            >
              <div class="dialog-item-top">
                <span class="dialog-badge" :class="isCorrect(q) ? 'badge--correct' : 'badge--wrong'">
                  <svg v-if="isCorrect(q)" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l4 4 6-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <svg v-else viewBox="0 0 14 14" fill="none">
                    <path d="M3.5 3.5l7 7M10.5 3.5l-7 7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
                  </svg>
                </span>
                <span class="dialog-q-no">Q{{ q.no }}</span>
                <span class="dialog-verdict">{{ isCorrect(q) ? '정답' : '오답' }}</span>
                <span v-if="!isCorrect(q) && isAnswered(q)" class="dialog-selected-wrong">
                  (선택: {{ selectedOptionText(q) }})
                </span>
              </div>
              <p class="dialog-sentence-en">{{ q.completeSentence }}</p>
              <p class="dialog-sentence-ko">{{ q.ko }}</p>
              <ul v-if="q.notes && q.notes.length" class="dialog-notes">
                <li v-for="note in q.notes" :key="note.word" class="dialog-note">
                  <span class="note-word">{{ note.word }}</span>
                  <span class="note-pos">{{ note.pos }}</span>
                  <span class="note-meaning">{{ note.meaning }}</span>
                  <span class="note-example">e.g. {{ note.example }}</span>
                </li>
              </ul>
            </li>
          </ol>

          <div class="dialog-footer">
            <button type="button" class="dialog-retry-btn" @click="resetAndClose">
              다시 풀기
            </button>
            <button type="button" class="dialog-ok-btn" @click="closeDialog">
              확인
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { getBookById } from "@/data/books";

export default {
  name: "QuizChapterView",
  props: {
    quizId: { type: String, default: "" },
  },
  data() {
    return {
      /** { [questionNo]: optionIndex } */
      selected: {},
      dialogOpen: false,
    };
  },
  computed: {
    resolvedQuizId() {
      return this.quizId || this.$route.params.quizId;
    },
    chapter() {
      const bookId = this.$route.query.bookId;
      const book = getBookById(bookId);
      const chapters = book?.quizChapters || [];
      return chapters.find((c) => c.id === this.resolvedQuizId) || null;
    },
    anySelected() {
      return Object.keys(this.selected).length > 0;
    },
    correctCount() {
      if (!this.chapter) return 0;
      return this.chapter.questions.filter((q) => this.isCorrect(q)).length;
    },
  },
  watch: {
    resolvedQuizId() {
      this.selected = {};
      this.dialogOpen = false;
    },
  },
  methods: {
    optionKey(idx) {
      return String.fromCharCode(97 + idx);
    },
    selectOption(q, idx) {
      this.$set(this.selected, q.no, idx);
    },
    isAnswered(q) {
      return q.no in this.selected;
    },
    isCorrectAnswer(q, idx) {
      return this.optionKey(idx) === q.answerKey;
    },
    isCorrect(q) {
      return this.isAnswered(q) && this.isCorrectAnswer(q, this.selected[q.no]);
    },
    selectedOptionText(q) {
      const idx = this.selected[q.no];
      return idx !== undefined ? q.options[idx] : "";
    },
    openDialog() {
      this.dialogOpen = true;
    },
    closeDialog() {
      this.dialogOpen = false;
    },
    resetAll() {
      this.selected = {};
      this.dialogOpen = false;
    },
    resetAndClose() {
      this.resetAll();
    },
    /* ── CSS 클래스 ── */
    resultClass(q) {
      return "";
    },
    noClass(q) {
      return "";
    },
    optionClass(q, idx) {
      if (!this.isAnswered(q)) return "";
      const sel = this.selected[q.no];
      if (idx === sel) return "option--selected";
      return "option--dim";
    },
  },
};
</script>

<style scoped>
.quiz-page {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: var(--c-text-primary);
  background: var(--c-bg);
  height: 100%;
  overflow-y: auto;
  -webkit-font-smoothing: antialiased;
}

/* ─── Header ─── */
.quiz-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 20px;
  background: var(--c-surface);
  border-bottom: 1px solid var(--c-border-subtle);
  flex-wrap: wrap;
  position: sticky;
  top: 0;
  z-index: 10;
}

.quiz-header-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.quiz-header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.quiz-chip {
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: var(--c-radius-sm);
  background: var(--c-teal-light);
  border: 1px solid var(--c-teal);
  color: var(--c-teal);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  white-space: nowrap;
}

.quiz-header h2 {
  font-size: 15px;
  font-weight: 700;
  color: var(--c-text-primary);
  margin: 0;
  letter-spacing: -0.3px;
}

.quiz-subtitle {
  font-size: 12px;
  color: var(--c-text-muted);
  margin: 0;
  letter-spacing: 0.01em;
}

.quiz-reset-btn {
  padding: 4px 12px;
  border-radius: var(--c-radius-pill);
  border: 1px solid var(--c-border);
  background: transparent;
  color: var(--c-text-muted);
  font-size: 12px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s;
  white-space: nowrap;
}

.quiz-reset-btn:hover {
  border-color: var(--c-text-secondary);
  color: var(--c-text-secondary);
}

/* ─── Body ─── */
.quiz-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 0;
  flex: 1;
}

/* ─── Question list ─── */
.quiz-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 12px;
}

.quiz-item {
  background: var(--c-surface);
  border: 1.5px solid var(--c-border-subtle);
  border-radius: var(--c-radius-lg);
  padding: 14px 16px;
  transition: border-color 0.2s;
}

.quiz-item.item--correct { border-color: #22c55e; }
.quiz-item.item--wrong   { border-color: #ef4444; }

.quiz-question {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 0 0 10px;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--c-text-primary);
  line-height: 1.6;
}

.quiz-no {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--c-teal);
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  margin-top: 1px;
  transition: background 0.2s;
}

.quiz-no.no--correct { background: #22c55e; }
.quiz-no.no--wrong   { background: #ef4444; }

/* ─── Options ─── */
.quiz-options {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 6px;
}

.quiz-option {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 12px;
  background: var(--c-bg);
  border: 1.5px solid var(--c-border);
  border-radius: var(--c-radius-sm);
  font-size: 13px;
  color: var(--c-text-secondary);
  line-height: 1.5;
  cursor: pointer;
  transition: border-color 0.12s, background 0.12s, color 0.12s, opacity 0.15s;
  user-select: none;
}

.quiz-option:hover:not(.option--correct):not(.option--wrong):not(.option--dim) {
  border-color: var(--c-teal);
  background: var(--c-teal-light);
  color: var(--c-text-primary);
}

.quiz-option.option--selected {
  border-color: var(--c-blue);
  background: var(--c-blue-light);
  color: var(--c-text-primary);
}

.quiz-option.option--correct {
  border-color: #22c55e;
  background: #f0fdf4;
  color: #166534;
  cursor: default;
}

.quiz-option.option--wrong {
  border-color: #ef4444;
  background: #fef2f2;
  color: #991b1b;
  cursor: default;
}

.quiz-option.option--dim {
  opacity: 0.5;
}

.quiz-option-text { flex: 1; }

/* ─── Footer ─── */
.quiz-footer {
  margin-top: 20px;
}

.quiz-check-btn {
  display: inline-flex;
  align-items: center;
  padding: 9px 22px;
  border-radius: var(--c-radius-pill);
  border: none;
  background: var(--c-teal);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  transition: filter 0.15s;
}

.quiz-check-btn:hover:not(:disabled) {
  filter: brightness(1.08);
}

.quiz-check-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* ─── Dialog overlay ─── */
.dialog-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 16px;
}

.dialog-box {
  background: var(--c-surface);
  border-radius: var(--c-radius-lg);
  width: 100%;
  max-width: 480px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

/* ─── Dialog header ─── */
.dialog-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid var(--c-border-subtle);
  flex-shrink: 0;
}

.dialog-score {
  font-size: 16px;
  font-weight: 800;
  color: var(--c-text-primary);
  letter-spacing: -0.3px;
}

.dialog-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: var(--c-text-muted);
  cursor: pointer;
  transition: background 0.15s;
}

.dialog-close:hover {
  background: var(--c-bg);
  color: var(--c-text-primary);
}

.dialog-close svg {
  width: 14px;
  height: 14px;
}

/* ─── Dialog list ─── */
.dialog-list {
  list-style: none;
  margin: 0;
  padding: 16px 20px;
  display: grid;
  gap: 12px;
  overflow-y: auto;
  flex: 1;
}

.dialog-item {
  border-radius: var(--c-radius-md);
  padding: 12px 14px;
  background: var(--c-bg);
  border: 1.5px solid var(--c-border-subtle);
}

.dialog-item--correct { border-color: #22c55e; }
.dialog-item--wrong   { border-color: #ef4444; }

.dialog-item-top {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.dialog-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  flex-shrink: 0;
}

.dialog-badge svg {
  width: 14px;
  height: 14px;
}

.badge--correct {
  background: #22c55e;
  color: #fff;
}

.badge--wrong {
  background: #ef4444;
  color: #fff;
}

.dialog-q-no {
  font-size: 12px;
  font-weight: 700;
  color: var(--c-text-muted);
  letter-spacing: 0.04em;
}

.dialog-verdict {
  font-size: 13px;
  font-weight: 700;
}

.dialog-item--correct .dialog-verdict { color: #16a34a; }
.dialog-item--wrong   .dialog-verdict { color: #dc2626; }

.dialog-selected-wrong {
  font-size: 12px;
  color: var(--c-text-muted);
  margin-left: auto;
}

.dialog-sentence-en {
  font-size: 13.5px;
  font-weight: 600;
  color: var(--c-text-primary);
  line-height: 1.55;
  margin: 0 0 4px;
  letter-spacing: -0.1px;
}

.dialog-sentence-ko {
  font-size: 12px;
  color: var(--c-text-muted);
  line-height: 1.55;
  margin: 0;
}

.dialog-notes {
  list-style: none;
  margin: 8px 0 0;
  padding: 8px 10px;
  background: var(--c-surface);
  border-radius: var(--c-radius-sm);
  border: 1px solid var(--c-border-subtle);
  display: grid;
  gap: 6px;
}

.dialog-note {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 4px;
  font-size: 11.5px;
  line-height: 1.5;
}

.note-word {
  font-weight: 700;
  color: var(--c-text-primary);
}

.note-pos {
  font-size: 10px;
  font-weight: 600;
  color: var(--c-teal);
  background: var(--c-teal-light);
  border-radius: 3px;
  padding: 0 4px;
}

.note-meaning {
  color: var(--c-text-secondary);
}

.note-meaning::before { content: "— "; }

.note-example {
  color: var(--c-text-muted);
  font-style: italic;
  width: 100%;
  padding-left: 2px;
}

/* ─── Dialog footer ─── */
.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 14px 20px;
  border-top: 1px solid var(--c-border-subtle);
  flex-shrink: 0;
}

.dialog-retry-btn {
  padding: 8px 18px;
  border-radius: var(--c-radius-pill);
  border: 1.5px solid var(--c-border);
  background: transparent;
  color: var(--c-text-secondary);
  font-size: 13px;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s;
}

.dialog-retry-btn:hover {
  border-color: var(--c-text-primary);
  color: var(--c-text-primary);
}

.dialog-ok-btn {
  padding: 8px 22px;
  border-radius: var(--c-radius-pill);
  border: none;
  background: var(--c-teal);
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  transition: filter 0.15s;
}

.dialog-ok-btn:hover {
  filter: brightness(1.08);
}

/* ─── Transition ─── */
.dialog-fade-enter-active,
.dialog-fade-leave-active {
  transition: opacity 0.2s;
}

.dialog-fade-enter-active .dialog-box,
.dialog-fade-leave-active .dialog-box {
  transition: opacity 0.2s, transform 0.2s;
}

.dialog-fade-enter,
.dialog-fade-leave-to {
  opacity: 0;
}

.dialog-fade-enter .dialog-box,
.dialog-fade-leave-to .dialog-box {
  opacity: 0;
  transform: scale(0.95) translateY(8px);
}
</style>
