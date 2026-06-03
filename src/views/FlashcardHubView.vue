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
      </p>
    </header>

    <p class="fc-hint">카드를 눌러 앞면(용어)과 뒷면(설명)을 뒤집으며 외우세요.</p>

    <ol class="fc-list">
      <li v-for="(card, idx) in cards" :key="card.id" class="fc-row">
        <span class="fc-no" :class="{ studied: isStudied(card.id) }">{{ idx + 1 }}</span>
        <button type="button" class="fc-term-btn" @click="openCard(card.id)">
          <span class="fc-term">{{ card.term }}</span>
          <span v-if="isStudied(card.id)" class="fc-studied-mark">✓</span>
          <span class="fc-arrow">→</span>
        </button>
      </li>
    </ol>
  </div>
</template>

<script>
import { getBookById } from "@/data/books";
import {
  WAERME_KARTEIKARTEN_BOOK_ID,
  waermeKarteikarten,
} from "@/data/waermeKarteikartenContent";

export default {
  name: "FlashcardHubView",
  props: {
    bookId: { type: String, required: true },
  },
  computed: {
    book() {
      return getBookById(this.bookId);
    },
    cards() {
      if (this.bookId === WAERME_KARTEIKARTEN_BOOK_ID) return waermeKarteikarten;
      return [];
    },
    studiedCount() {
      return this.cards.filter((c) => this.isStudied(c.id)).length;
    },
    studiedPercent() {
      if (!this.cards.length) return 0;
      return Math.round((this.studiedCount / this.cards.length) * 100);
    },
  },
  methods: {
    isStudied(cardId) {
      return this.$store.getters["quizWorkbook/isStudied"](this.bookId, cardId);
    },
    openCard(cardId) {
      this.$router.push({
        name: "flashcard-detail",
        params: { bookId: this.bookId, cardId },
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
  font-size: 15px;
  font-weight: 600;
  color: var(--c-text-primary);
}

.fc-studied-mark {
  font-size: 12px;
  color: var(--c-teal);
  font-weight: 700;
}

.fc-arrow {
  color: var(--c-text-muted);
  font-size: 14px;
}
</style>
