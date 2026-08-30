<template>
  <div class="workbook-hub">
    <header class="hub-header">
      <button type="button" class="back-btn" @click="goDashboard">← 서재</button>
      <div>
        <p class="hub-eyebrow">{{ workbookEyebrow }}</p>
        <h1>{{ book.title }}</h1>
        <p class="hub-sub">{{ book.subtitle }}</p>
      </div>
    </header>

    <section class="progress-panel">
      <h2>학습 현황</h2>
      <div class="progress-bars">
        <div class="progress-row">
          <span class="label">공부 완료</span>
          <div class="bar-track">
            <div class="bar-fill studied" :style="{ width: progress.studiedPercent + '%' }"></div>
          </div>
          <span class="stat">{{ progress.studied }} / {{ progress.total }} ({{ progress.studiedPercent }}%)</span>
        </div>
        <div class="progress-row">
          <span class="label">테스트 통과</span>
          <div class="bar-track">
            <div class="bar-fill tested" :style="{ width: progress.testedPercent + '%' }"></div>
          </div>
          <span class="stat">{{ progress.tested }} / {{ progress.total }} ({{ progress.testedPercent }}%)</span>
        </div>
      </div>
      <div class="progress-chips">
        <span class="chip studied-chip">공부 {{ progress.studied }}</span>
        <span class="chip tested-chip">테스트 {{ progress.tested }}</span>
        <span class="chip remain-chip">남음 {{ progress.total - progress.studied }}</span>
      </div>
      <button
        type="button"
        class="random-btn"
        :disabled="studiedCount < 1"
        @click="goRandomQuiz"
      >
        랜덤 퀴즈 10문제
        <small v-if="studiedCount < 1">(공부한 문제가 있어야 합니다)</small>
        <small v-else>(공부한 {{ studiedCount }}문제 중 10문제)</small>
      </button>
    </section>

    <section v-for="chapter in chapters" :key="chapter.id" class="chapter-block">
      <div class="chapter-head">
        <h3>{{ chapter.title }}</h3>
        <span class="chapter-stat">
          {{ chapterProgress(chapter.id).studied }} / {{ chapterProgress(chapter.id).total }}
          ({{ chapterProgress(chapter.id).percent }}%)
        </span>
      </div>
      <ol class="question-list">
        <li v-for="q in questionsByChapter(chapter.id)" :key="q.id" class="question-row">
          <span class="q-no" :class="statusClass(q.id)">{{ q.no }}</span>
          <div class="q-body">
            <p class="q-preview">{{ preview(q.question) }}</p>
            <div class="q-actions">
              <button type="button" class="mode-btn study" @click="openQuestion(q.id, 'study')">공부</button>
              <button
                type="button"
                class="mode-btn test"
                :disabled="!isStudied(q.id)"
                @click="openQuestion(q.id, 'test')"
              >
                테스트
              </button>
              <button
                type="button"
                class="mark-btn"
                :class="{ active: isStudied(q.id) }"
                @click="toggleStudied(q.id)"
              >
                {{ isStudied(q.id) ? "✓ 공부함" : "공부 표시" }}
              </button>
            </div>
          </div>
        </li>
      </ol>
    </section>
  </div>
</template>

<script>
import { getBookById } from "@/data/books";
import { getQuizWorkbookContent } from "@/data/quizWorkbookRegistry";
import { guardBookAccess } from "@/utils/bookAccessGuard";
import { getDashboardLocation } from "@/data/bookCatalog";

export default {
  name: "QuizWorkbookHubView",
  props: {
    bookId: { type: String, required: true },
  },
  created() {
    guardBookAccess(this.$router, this.bookId);
  },
  computed: {
    book() {
      return getBookById(this.bookId) || { title: "문제집", subtitle: "" };
    },
    workbookContent() {
      return getQuizWorkbookContent(this.bookId);
    },
    workbookEyebrow() {
      return this.workbookContent?.eyebrow || this.book.subjectLabel || "문제집";
    },
    chapters() {
      return this.workbookContent?.chapters || [];
    },
    questionIds() {
      return (this.workbookContent?.questions || []).map((q) => q.id);
    },
    progress() {
      return this.$store.getters["quizWorkbook/bookProgress"](this.bookId, this.questionIds);
    },
    studiedCount() {
      return this.$store.getters["quizWorkbook/studiedIds"](this.bookId).length;
    },
  },
  methods: {
    goDashboard() {
      this.$router.push(getDashboardLocation());
    },
    questionsByChapter(chapterId) {
      return this.workbookContent?.getQuestionsByChapter(chapterId) || [];
    },
    chapterProgress(chapterId) {
      const ids = this.questionsByChapter(chapterId).map((q) => q.id);
      return this.$store.getters["quizWorkbook/chapterProgress"](this.bookId, ids);
    },
    isStudied(questionId) {
      return this.$store.getters["quizWorkbook/isStudied"](this.bookId, questionId);
    },
    statusClass(questionId) {
      if (this.$store.getters["quizWorkbook/isTested"](this.bookId, questionId)) return "done-test";
      if (this.isStudied(questionId)) return "done-study";
      return "";
    },
    preview(text) {
      if (!text) return "";
      return text.length > 72 ? `${text.slice(0, 72)}…` : text;
    },
    openQuestion(questionId, mode) {
      this.$router.push({
        name: "workbook-question",
        params: { bookId: this.bookId, questionId },
        query: { mode },
      });
    },
    toggleStudied(questionId) {
      this.$store.dispatch("quizWorkbook/toggleStudied", {
        bookId: this.bookId,
        questionId,
      });
    },
    goRandomQuiz() {
      this.$router.push({
        name: "workbook-random",
        params: { bookId: this.bookId },
      });
    },
  },
};
</script>

<style scoped>
.workbook-hub {
  max-width: 720px;
  margin: 0 auto;
  padding: 8px 0 48px;
}

.hub-header {
  margin-bottom: 24px;
}

.back-btn {
  border: none;
  background: none;
  color: var(--c-blue);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  margin-bottom: 12px;
}

.hub-eyebrow {
  margin: 0 0 4px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--c-amber);
  text-transform: uppercase;
}

.hub-header h1 {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
}

.hub-sub {
  margin: 6px 0 0;
  font-size: 13px;
  color: var(--c-text-muted);
}

.progress-panel {
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-lg);
  padding: 20px;
  margin-bottom: 28px;
}

.progress-panel h2 {
  margin: 0 0 16px;
  font-size: 15px;
}

.progress-row {
  display: grid;
  grid-template-columns: 72px 1fr auto;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
  font-size: 12px;
}

.bar-track {
  height: 8px;
  background: var(--c-border);
  border-radius: 4px;
  overflow: hidden;
}

.bar-fill.studied {
  height: 100%;
  background: var(--c-teal);
  border-radius: 4px;
  transition: width 0.3s;
}

.bar-fill.tested {
  height: 100%;
  background: var(--c-blue);
  border-radius: 4px;
  transition: width 0.3s;
}

.progress-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 14px 0 18px;
}

.chip {
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: var(--c-radius-pill);
}

.studied-chip {
  background: rgba(45, 143, 111, 0.12);
  color: var(--c-teal);
}

.tested-chip {
  background: rgba(45, 95, 168, 0.12);
  color: var(--c-blue);
}

.remain-chip {
  background: var(--c-border);
  color: var(--c-text-muted);
}

.random-btn {
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: var(--c-radius-md);
  background: var(--c-blue);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}

.random-btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.random-btn small {
  display: block;
  font-size: 11px;
  font-weight: 500;
  margin-top: 4px;
  opacity: 0.9;
}

.chapter-block {
  margin-bottom: 28px;
}

.chapter-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
  gap: 12px;
}

.chapter-head h3 {
  margin: 0;
  font-size: 15px;
}

.chapter-stat {
  font-size: 12px;
  color: var(--c-text-muted);
  white-space: nowrap;
}

.question-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.question-row {
  display: flex;
  gap: 12px;
  padding: 12px 14px;
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-md);
}

.q-no {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: var(--c-border);
  font-size: 12px;
  font-weight: 700;
}

.q-no.done-study {
  background: rgba(45, 143, 111, 0.2);
  color: var(--c-teal);
}

.q-no.done-test {
  background: rgba(45, 95, 168, 0.2);
  color: var(--c-blue);
}

.q-body {
  flex: 1;
  min-width: 0;
}

.q-preview {
  margin: 0 0 8px;
  font-size: 13px;
  line-height: 1.5;
  color: var(--c-text-secondary);
}

.q-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.mode-btn,
.mark-btn {
  font-size: 11px;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: var(--c-radius-pill);
  border: 1px solid var(--c-border);
  background: var(--c-surface);
  cursor: pointer;
}

.mode-btn.study {
  border-color: var(--c-teal);
  color: var(--c-teal);
}

.mode-btn.test {
  border-color: var(--c-blue);
  color: var(--c-blue);
}

.mode-btn.test:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.mark-btn.active {
  background: rgba(45, 143, 111, 0.12);
  border-color: var(--c-teal);
  color: var(--c-teal);
}
</style>
