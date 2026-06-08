<template>
  <div v-if="card" class="flashcard-detail">
    <header class="fc-nav">
      <button type="button" class="back-btn" @click="goHub">← 목록</button>
      <span class="fc-index">{{ cardIndex + 1 }} / {{ totalCards }}</span>
      <FlashcardLayoutToggle @change="onLayoutChange" />
      <div class="fc-nav-btns">
        <button type="button" :disabled="!prevId" @click="goSibling(prevId)">‹</button>
        <button type="button" :disabled="!nextId" @click="goSibling(nextId)">›</button>
      </div>
    </header>

    <div class="fc-body" :class="{ 'fc-body--with-writing': hasWritingPractice }">
      <FlashcardCardPanel
        :card="card"
        :labels="labels"
        :show-ko-on-back="showKoOnBack"
        :layout-mode="layoutMode"
        :revealed="flipped"
        tap-hint-front="탭하여 뒤집기"
        tap-hint-back="탭하여 앞면"
        @toggle="toggleFlip"
      />

      <aside v-if="hasWritingPractice" class="fc-writing-aside">
        <FlashcardWritingPractice :practice="card.writingPractice" />
      </aside>

      <FlashcardVocabulary
        v-if="flipped || layoutMode === 'split'"
        class="fc-vocab-slot"
        :items="card.vocabulary"
      />

      <footer class="fc-actions">
        <button
          v-if="layoutMode === 'flip'"
          type="button"
          class="flip-btn"
          @click="toggleFlip"
        >
          {{ flipped ? "앞면 보기" : "설명 보기 (뒤집기)" }}
        </button>
        <button
          type="button"
          class="studied-btn"
          :class="{ active: isStudied }"
          @click="toggleStudied"
        >
          {{ isStudied ? "✓ 공부함" : "공부 완료 표시" }}
        </button>
      </footer>
    </div>
  </div>
  <div v-else class="not-found">카드를 찾을 수 없습니다.</div>
</template>

<script>
import FlashcardCardPanel from "@/components/flashcard/FlashcardCardPanel.vue";
import FlashcardLayoutToggle from "@/components/flashcard/FlashcardLayoutToggle.vue";
import FlashcardVocabulary from "@/components/flashcard/FlashcardVocabulary.vue";
import FlashcardWritingPractice from "@/components/flashcard/FlashcardWritingPractice.vue";
import { getCardById, getCardsForBook, getFlashcardBook } from "@/data/flashcardRegistry";
import { getFlashcardLayoutMode } from "@/utils/flashcardLayout";

export default {
  name: "FlashcardDetailView",
  components: {
    FlashcardCardPanel,
    FlashcardLayoutToggle,
    FlashcardVocabulary,
    FlashcardWritingPractice,
  },
  props: {
    bookId: { type: String, required: true },
    cardId: { type: String, required: true },
  },
  data() {
    return {
      flipped: false,
      layoutMode: getFlashcardLayoutMode(),
    };
  },
  computed: {
    bookMeta() {
      return getFlashcardBook(this.bookId);
    },
    labels() {
      return this.bookMeta?.labels || { front: "앞면", back: "뒷면" };
    },
    showKoOnBack() {
      return this.bookMeta?.showKoOnBack !== false;
    },
    allCards() {
      return getCardsForBook(this.bookId);
    },
    card() {
      return getCardById(this.bookId, this.cardId);
    },
    cardIndex() {
      return this.allCards.findIndex((c) => c.id === this.cardId);
    },
    totalCards() {
      return this.allCards.length;
    },
    prevId() {
      const i = this.cardIndex;
      return i > 0 ? this.allCards[i - 1].id : null;
    },
    nextId() {
      const i = this.cardIndex;
      return i >= 0 && i < this.allCards.length - 1 ? this.allCards[i + 1].id : null;
    },
    isStudied() {
      return this.$store.getters["quizWorkbook/isStudied"](this.bookId, this.cardId);
    },
    hasWritingPractice() {
      return Boolean(this.card?.writingPractice?.attemptDe);
    },
  },
  watch: {
    cardId() {
      this.flipped = false;
    },
  },
  methods: {
    onLayoutChange(mode) {
      this.layoutMode = mode;
    },
    toggleFlip() {
      this.flipped = !this.flipped;
    },
    toggleStudied() {
      this.$store.dispatch("quizWorkbook/toggleStudied", {
        bookId: this.bookId,
        questionId: this.cardId,
      });
    },
    goHub() {
      this.$router.push({ name: "flashcard-hub", params: { bookId: this.bookId } });
    },
    goSibling(id) {
      if (!id) return;
      this.$router.push({
        name: "flashcard-detail",
        params: { bookId: this.bookId, cardId: id },
      });
    },
  },
};
</script>

<style scoped>
.flashcard-detail {
  max-width: 480px;
  margin: 0 auto;
  padding: 8px 16px 40px;
}

.fc-body {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.fc-vocab-slot {
  margin: 0;
}

.fc-writing-aside {
  margin: 0;
}

@media (min-width: 768px) {
  .flashcard-detail {
    max-width: 1240px;
    padding: 8px 24px 48px;
  }

  .fc-body--with-writing {
    display: grid;
    grid-template-columns: minmax(0, 500px) minmax(440px, 1fr);
    grid-template-areas:
      "flip writing"
      "vocab writing"
      "actions writing";
    column-gap: 36px;
    row-gap: 16px;
    align-items: start;
  }

  .fc-body--with-writing > :first-child {
    grid-area: flip;
  }

  .fc-body--with-writing .fc-writing-aside {
    grid-area: writing;
    position: sticky;
    top: 12px;
    max-height: calc(100vh - 100px);
    overflow-y: auto;
  }

  .fc-body--with-writing .fc-writing-aside :deep(.fc-writing) {
    margin-top: 0;
  }

  .fc-body--with-writing .fc-vocab-slot {
    grid-area: vocab;
  }

  .fc-body--with-writing .fc-actions {
    grid-area: actions;
    margin-top: 0;
  }

  .fc-body:not(.fc-body--with-writing) .fc-actions {
    margin-top: 0;
  }
}

.fc-nav {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.fc-index {
  flex: 1;
  text-align: center;
  font-size: 13px;
  color: var(--c-text-muted);
  font-weight: 600;
  min-width: 64px;
}

.fc-nav-btns button {
  width: 36px;
  height: 36px;
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-sm);
  background: var(--c-surface);
  cursor: pointer;
  font-size: 18px;
}

.fc-nav-btns button:disabled {
  opacity: 0.35;
  cursor: default;
}

.back-btn {
  border: none;
  background: none;
  color: var(--c-blue);
  font-size: 13px;
  cursor: pointer;
  padding: 0;
}

.fc-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 24px;
}

.flip-btn,
.studied-btn {
  padding: 12px 16px;
  border-radius: var(--c-radius-md);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.flip-btn {
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  color: var(--c-text-primary);
}

.studied-btn {
  background: var(--c-teal-light);
  border: 1px solid var(--c-teal);
  color: var(--c-teal);
}

.studied-btn.active {
  background: var(--c-teal);
  color: #fff;
}

.not-found {
  padding: 40px 20px;
  text-align: center;
  color: var(--c-text-muted);
}
</style>
