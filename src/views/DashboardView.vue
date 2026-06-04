<template>
  <div class="dashboard">
    <header class="dash-header">
      <div>
        <p class="dash-eyebrow">English Learning</p>
        <h1 class="dash-title">나의 학습 서재</h1>
      </div>
      <p class="dash-desc">학습할 책을 선택하세요.</p>
    </header>

    <div class="bookshelf-grid">
      <article
        v-for="(book, idx) in books"
        :key="book.id"
        class="book-card"
        @click="openBook(book)"
      >
        <div class="book-spine" :class="`spine-${(idx % 3) + 1}`"></div>
        <div class="book-body">
          <div class="book-top">
            <span class="book-badge">BOOK {{ idx + 1 }}</span>
            <span class="book-arrow">→</span>
          </div>
          <h3 class="book-title">{{ book.title }}</h3>
          <p class="book-subtitle">{{ book.subtitle }}</p>
          <p class="book-desc">{{ book.description }}</p>
          <div v-if="isQuizWorkbook(book) || isFlashcardBook(book)" class="book-progress">
            <div class="mini-bar">
              <div class="mini-fill studied" :style="{ width: bookProgress(book).studiedPercent + '%' }"></div>
            </div>
            <span class="mini-stat">
              공부 {{ bookProgress(book).studied }}/{{ bookProgress(book).total }}
              · 테스트 {{ bookProgress(book).tested }}
            </span>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { books } from "@/data/books";

export default {
  name: "DashboardView",
  data() {
    return { books };
  },
  methods: {
    isQuizWorkbook(book) {
      return book.templateType === "quiz-workbook";
    },
    isFlashcardBook(book) {
      return book.templateType === "flashcard";
    },
    bookProgress(book) {
      const ids = book.questionIds || book.cardIds || [];
      return this.$store.getters["quizWorkbook/bookProgress"](book.id, ids);
    },
    openBook(book) {
      if (this.isFlashcardBook(book)) {
        this.$router.push({
          name: "flashcard-hub",
          params: { bookId: book.id },
        });
        return;
      }
      if (this.isQuizWorkbook(book)) {
        this.$router.push({
          name: "workbook-hub",
          params: { bookId: book.id },
        });
        return;
      }
      const firstParagraphId =
        book.paragraphIds?.length > 0 ? book.paragraphIds[0] : book.paragraphId;
      if (firstParagraphId) {
        this.$router.push({
          name: "paragraph-detail",
          params: { paragraphId: firstParagraphId },
          query: { bookId: book.id },
        });
        return;
      }
      const firstSentenceId = book.sentenceIds?.[0];
      if (!firstSentenceId) return;
      this.$router.push({
        name: "sentence-detail",
        params: { sentenceId: firstSentenceId },
        query: { bookId: book.id },
      });
    },
  },
};
</script>

<style scoped>
.dashboard {
  max-width: 680px;
  margin: 0 auto;
  padding: 8px 0 40px;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
}

@media (min-width: 768px) {
  .dashboard {
    max-width: 1100px;
    padding: 8px 8px 40px;
  }
}

/* ─── Header ── */
.dash-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 12px;
}

.dash-eyebrow {
  margin: 0 0 4px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--c-amber);
}

.dash-title {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  color: var(--c-text-primary);
  letter-spacing: -0.4px;
}

.dash-desc {
  margin: 0;
  font-size: 13px;
  color: var(--c-text-muted);
  align-self: flex-end;
  padding-bottom: 2px;
}

/* ─── Grid ── */
.bookshelf-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

/* ─── Card ── */
.book-card {
  display: flex;
  align-items: stretch;
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-lg);
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.18s, border-color 0.18s;
}

.book-card:hover {
  border-color: var(--c-blue-mid);
  box-shadow: 0 4px 16px rgba(45, 95, 168, 0.10);
}

/* ─── Spine ── */
.book-spine {
  width: 6px;
  flex-shrink: 0;
}

.spine-1 { background: var(--c-blue); }
.spine-2 { background: var(--c-teal); }
.spine-3 { background: var(--c-amber); }

/* ─── Body ── */
.book-body {
  flex: 1;
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.book-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
}

.book-badge {
  display: inline-flex;
  align-items: center;
  padding: 3px 9px;
  border-radius: var(--c-radius-pill);
  background: var(--c-amber-light);
  border: 1px solid var(--c-amber-mid);
  color: var(--c-amber);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.book-arrow {
  font-size: 16px;
  color: var(--c-text-muted);
  transition: color 0.15s, transform 0.15s;
}

.book-card:hover .book-arrow {
  color: var(--c-blue);
  transform: translateX(3px);
}

.book-title {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: var(--c-text-primary);
  letter-spacing: -0.3px;
  line-height: 1.4;
}

.book-subtitle {
  margin: 0;
  font-size: 12px;
  color: var(--c-text-secondary);
  line-height: 1.5;
}

.book-desc {
  margin: 6px 0 0;
  font-size: 12px;
  color: var(--c-text-muted);
  line-height: 1.55;
}

.book-progress {
  margin-top: 12px;
}

.mini-bar {
  height: 4px;
  background: var(--c-border);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 6px;
}

.mini-fill.studied {
  height: 100%;
  background: var(--c-teal);
  border-radius: 2px;
}

.mini-stat {
  font-size: 11px;
  color: var(--c-text-muted);
}
</style>
