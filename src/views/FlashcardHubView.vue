<template>
  <div class="flashcard-hub">
    <header class="fc-header">
      <button type="button" class="back-btn" @click="goDashboard">← 서재</button>
      <div>
        <h1>{{ book.title }}</h1>
        <p class="fc-sub">{{ book.subtitle }}</p>
      </div>
      <p class="fc-progress">
        공부함 {{ studiedCount }} / {{ cards.length }}
        <span v-if="studiedCount">({{ studiedPercent }}%)</span>
        · 복습 대기 {{ dueCount }}장
      </p>
    </header>

    <section class="review-panel">
      <button type="button" class="review-btn" :disabled="dueCount < 1" @click="goReview">
        Anki 복습 시작
        <small v-if="dueCount < 1">(복습할 카드가 없습니다)</small>
        <small v-else>(복습 대기 {{ dueCount }}장 · SM-2)</small>
      </button>
    </section>

    <p class="fc-hint">{{ bookMeta?.hint || "카드를 눌러 앞면과 뒷면을 뒤집으며 외우세요." }}</p>

    <ol class="fc-list">
      <li v-for="(card, idx) in cards" :key="card.id" class="fc-row">
        <span class="fc-no" :class="rowClass(card.id)">{{ idx + 1 }}</span>
        <button type="button" class="fc-term-btn" @click="openCard(card.id)">
          <span class="fc-term">{{ cardPreview(card) }}</span>
          <span class="fc-due-badge">{{ dueLabel(card.id) }}</span>
          <span v-if="isTested(card.id)" class="fc-tested-mark">✓✓</span>
          <span v-else-if="isStudied(card.id)" class="fc-studied-mark">✓</span>
          <span class="fc-arrow">→</span>
        </button>
      </li>
    </ol>
  </div>
</template>

<script>
import { getBookById } from "@/data/books";
import { getCardsForBook, getFlashcardBook } from "@/data/flashcardRegistry";

export default {
  name: "FlashcardHubView",
  props: {
    bookId: { type: String, required: true },
  },
  computed: {
    book() {
      return getBookById(this.bookId);
    },
    bookMeta() {
      return getFlashcardBook(this.bookId);
    },
    cards() {
      return getCardsForBook(this.bookId);
    },
    studiedCount() {
      return this.cards.filter((c) => this.isStudied(c.id)).length;
    },
    studiedPercent() {
      if (!this.cards.length) return 0;
      return Math.round((this.studiedCount / this.cards.length) * 100);
    },
    reviewPool() {
      const studiedIds = this.$store.getters["quizWorkbook/studiedIds"](this.bookId);
      if (studiedIds.length > 0) {
        return this.cards.filter((c) => studiedIds.includes(c.id));
      }
      return this.cards;
    },
    cardIds() {
      return this.reviewPool.map((c) => c.id);
    },
    dueCount() {
      return this.$store.getters["flashcardSrs/dueCount"](this.bookId, this.cardIds);
    },
  },
  methods: {
    cardPreview(card) {
      const text = card.term || "";
      return text.length > 56 ? `${text.slice(0, 56)}…` : text;
    },
    isStudied(cardId) {
      return this.$store.getters["quizWorkbook/isStudied"](this.bookId, cardId);
    },
    isTested(cardId) {
      return this.$store.getters["quizWorkbook/isTested"](this.bookId, cardId);
    },
    dueLabel(cardId) {
      return this.$store.getters["flashcardSrs/dueLabel"](this.bookId, cardId);
    },
    rowClass(cardId) {
      if (this.isTested(cardId)) return "tested";
      if (this.isStudied(cardId)) return "studied";
      return "";
    },
    openCard(cardId) {
      this.$router.push({
        name: "flashcard-detail",
        params: { bookId: this.bookId, cardId },
      });
    },
    goReview() {
      this.$router.push({
        name: "flashcard-review",
        params: { bookId: this.bookId },
      });
    },
    goDashboard() {
      this.$router.push({ name: "dashboard" });
    },
  },
};
</script>

<style scoped>
.flashcard-hub {
  max-width: 560px;
  margin: 0 auto;
  padding: 8px 16px 48px;
}

.fc-header {
  margin-bottom: 20px;
}

.fc-header h1 {
  margin: 8px 0 4px;
  font-size: 20px;
  font-weight: 700;
}

.fc-sub {
  margin: 0;
  font-size: 13px;
  color: var(--c-text-secondary);
}

.fc-progress {
  margin: 12px 0 0;
  font-size: 12px;
  color: var(--c-teal);
  font-weight: 600;
}

.review-panel {
  margin-bottom: 16px;
}

.review-btn {
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

.review-btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.review-btn small {
  display: block;
  font-size: 11px;
  font-weight: 500;
  margin-top: 4px;
  opacity: 0.9;
}

.fc-hint {
  margin: 0 0 16px;
  font-size: 13px;
  color: var(--c-text-muted);
  line-height: 1.5;
}

.back-btn {
  border: none;
  background: none;
  color: var(--c-blue);
  font-size: 13px;
  cursor: pointer;
  padding: 0;
}

.fc-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.fc-row {
  display: flex;
  align-items: stretch;
  gap: 10px;
}

.fc-no {
  flex-shrink: 0;
  width: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: var(--c-text-muted);
  border-radius: var(--c-radius-sm);
  background: var(--c-border-subtle);
}

.fc-no.studied {
  background: var(--c-teal-light);
  color: var(--c-teal);
}

.fc-no.tested {
  background: rgba(45, 95, 168, 0.15);
  color: var(--c-blue);
}

.fc-term-btn {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 16px;
  text-align: left;
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-md);
  cursor: pointer;
  transition: border-color 0.15s, box-shadow 0.15s;
}

.fc-term-btn:hover {
  border-color: var(--c-blue-mid);
  box-shadow: 0 2px 10px rgba(45, 95, 168, 0.08);
}

.fc-term {
  flex: 1;
  font-size: 14px;
  font-weight: 600;
  color: var(--c-text-primary);
  line-height: 1.45;
}

.fc-due-badge {
  flex-shrink: 0;
  font-size: 10px;
  font-weight: 700;
  color: var(--c-text-muted);
  padding: 2px 7px;
  border-radius: var(--c-radius-pill);
  background: var(--c-border-subtle);
}

.fc-studied-mark {
  font-size: 12px;
  color: var(--c-teal);
  font-weight: 700;
}

.fc-tested-mark {
  font-size: 11px;
  color: var(--c-blue);
  font-weight: 700;
}

.fc-arrow {
  color: var(--c-text-muted);
  font-size: 14px;
}
</style>
