<template>
  <div class="fc-review">
    <header class="rev-header">
      <button type="button" class="back-btn" @click="goHub">← 목록</button>
      <div class="rev-header-main">
        <div>
          <h1>복습 세션</h1>
          <p class="rev-desc">
            FSRS(Anki) — 선택한 언어(Deutsch/English) 카드만 복습합니다. 간격은 언어별로 따로 저장됩니다.
          </p>
        </div>
        <FlashcardLayoutToggle @change="layoutMode = $event" />
        <FlashcardTargetLangToggle
          v-if="supportsTargetLang"
          :book-id="bookId"
          @change="onTargetLangChange"
        />
      </div>
    </header>

    <div v-if="!sessionQueue.length && !finished" class="empty-state">
      <p>지금 복습할 카드가 없습니다.</p>
      <p v-if="nextDueHint" class="empty-sub">{{ nextDueHint }}</p>
      <button type="button" class="primary" @click="goHub">목록으로</button>
    </div>

    <div v-else-if="!finished" class="session-body">
      <p class="progress-text">{{ answeredCount + 1 }} / {{ sessionTotal }}</p>

      <div class="fc-body" :class="{ 'fc-body--with-writing': hasWritingPractice }">
        <FlashcardCardPanel
          :card="panelCard"
          :labels="labels"
          :show-ko-on-back="showKoOnBack && !isExampleItem"
          :target-lang="targetLang"
          :layout-mode="layoutMode"
          :revealed="revealed"
          :interactive="layoutMode === 'flip'"
          :badge="panelBadge"
          @toggle="onCardTap"
        />

        <aside v-if="hasWritingPractice" class="fc-writing-aside">
          <FlashcardWritingPractice :practice="displayMainCard.writingPractice" />
        </aside>

        <div v-if="layoutMode === 'flip' && !revealed" class="rev-actions rev-actions-slot">
          <button type="button" class="reveal-btn" @click="reveal">답 보기</button>
        </div>
        <div v-else class="rev-actions rev-actions-slot">
          <div class="grade-grid">
            <button
              v-for="grade in grades"
              :key="grade.key"
              type="button"
              class="grade-btn"
              :class="grade.key"
              @click="rate(grade.key)"
            >
              <span class="grade-name">{{ grade.name }}</span>
              <span class="grade-label">{{ grade.label }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="summary">
      <h2>복습 완료</h2>
      <p class="score">{{ sessionTotal }}장 처리</p>
      <p class="summary-sub">다음 간격에 맞춰 다시 나타납니다.</p>
      <div class="summary-actions">
        <button type="button" @click="restart">다시 하기</button>
        <button type="button" class="primary" @click="goHub">목록으로</button>
      </div>
    </div>
  </div>
</template>

<script>
import FlashcardCardPanel from "@/components/flashcard/FlashcardCardPanel.vue";
import FlashcardLayoutToggle from "@/components/flashcard/FlashcardLayoutToggle.vue";
import FlashcardTargetLangToggle from "@/components/flashcard/FlashcardTargetLangToggle.vue";
import FlashcardWritingPractice from "@/components/flashcard/FlashcardWritingPractice.vue";
import { getFlashcardBook, getCardsForBook } from "@/data/flashcardRegistry";
import { resolveFlashcardCard } from "@/utils/flashcardCardResolver";
import { formatDueLabel, getDueTimestamp } from "@/data/flashcardSrs";
import { getFlashcardLayoutMode } from "@/utils/flashcardLayout";
import {
  expandReviewItems,
  reviewItemToPanelCard,
} from "@/utils/flashcardReviewItems";
import { bookHasDualLang } from "@/utils/flashcardSrsId";
import { getFlashcardTargetLang } from "@/utils/flashcardTargetLang";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default {
  name: "FlashcardReviewView",
  components: {
    FlashcardCardPanel,
    FlashcardLayoutToggle,
    FlashcardWritingPractice,
    FlashcardTargetLangToggle,
  },
  props: {
    bookId: { type: String, required: true },
  },
  data() {
    return {
      sessionQueue: [],
      sessionTotal: 0,
      revealed: false,
      finished: false,
      nextDueHint: "",
      layoutMode: getFlashcardLayoutMode(),
      targetLang: getFlashcardTargetLang(this.bookId),
    };
  },
  computed: {
    bookMeta() {
      return getFlashcardBook(this.bookId);
    },
    supportsTargetLang() {
      return bookHasDualLang(this.bookMeta);
    },
    dualLang() {
      return bookHasDualLang(this.bookMeta);
    },
    labels() {
      if (this.bookMeta?.labelsForLang) {
        return this.bookMeta.labelsForLang(this.targetLang);
      }
      return this.bookMeta?.labels || { front: "앞면", back: "뒷면" };
    },
    showKoOnBack() {
      return this.bookMeta?.showKoOnBack !== false;
    },
    grades() {
      if (!this.currentItem) return [];
      return this.$store.getters["flashcardSrs/gradeOptions"](
        this.bookId,
        this.currentItem.id
      );
    },
    allCards() {
      return getCardsForBook(this.bookId);
    },
    currentItem() {
      return this.sessionQueue[0] || null;
    },
    isExampleItem() {
      return this.currentItem?.type === "example";
    },
    displayMainCard() {
      if (!this.currentItem) return null;
      if (this.currentItem.type === "example") {
        return (
          resolveFlashcardCard(this.currentItem.card, this.bookId, this.targetLang) ||
          this.currentItem.card
        );
      }
      return (
        resolveFlashcardCard(this.currentItem.card, this.bookId, this.targetLang) ||
        this.currentItem.card
      );
    },
    panelCard() {
      return reviewItemToPanelCard(this.currentItem, this.targetLang);
    },
    panelBadge() {
      if (!this.isExampleItem) return "";
      return `예문 · ${this.currentItem.vocabWord}`;
    },
    hasWritingPractice() {
      return (
        !this.isExampleItem &&
        this.targetLang === "de" &&
        Boolean(this.displayMainCard?.writingPractice?.attemptDe)
      );
    },
    answeredCount() {
      return this.sessionTotal - this.sessionQueue.length;
    },
  },
  created() {
    this.buildSession();
  },
  methods: {
    reviewPool() {
      const studiedIds = this.$store.getters["quizWorkbook/studiedIds"](this.bookId);
      if (studiedIds.length > 0) {
        return this.allCards.filter((c) => studiedIds.includes(c.id));
      }
      return this.allCards;
    },
    buildSession() {
      const pool = this.reviewPool();
      const items = expandReviewItems(pool, this.bookId, this.targetLang, {
        dualLang: this.dualLang,
      });
      const dueIds = this.$store.getters["flashcardSrs/dueCardIds"](
        this.bookId,
        items.map((item) => item.id)
      );
      const picked = shuffle(items.filter((item) => dueIds.includes(item.id)));

      this.sessionQueue = picked;
      this.sessionTotal = picked.length;
      this.revealed = false;
      this.finished = picked.length === 0;
      this.nextDueHint = this.buildNextDueHint(pool);
    },
    buildNextDueHint(pool) {
      if (!pool.length) return "";
      const now = Date.now();
      let nearest = null;
      const items = expandReviewItems(pool, this.bookId, this.targetLang, {
        dualLang: this.dualLang,
      });
      items.forEach((item) => {
        const schedule = this.$store.getters["flashcardSrs/getSchedule"](this.bookId, item.id);
        const dueAt = getDueTimestamp(schedule);
        if (!dueAt || dueAt <= now) return;
        if (!nearest || dueAt < nearest) nearest = dueAt;
      });
      if (!nearest) return "";
      return `다음 복습: ${formatDueLabel(nearest, now)}`;
    },
    onTargetLangChange(lang) {
      this.targetLang = lang;
      this.revealed = false;
      this.buildSession();
    },
    onCardTap() {
      if (!this.revealed) this.reveal();
    },
    reveal() {
      this.revealed = true;
    },
    async rate(gradeKey) {
      const item = this.currentItem;
      if (!item) return;

      const result = await this.$store.dispatch("flashcardSrs/rateCard", {
        bookId: this.bookId,
        cardId: item.id,
        gradeKey,
      });

      const rest = this.sessionQueue.slice(1);
      if (result?.requeueInSession) {
        this.sessionQueue = [...rest, item];
      } else {
        this.sessionQueue = rest;
      }
      this.revealed = false;

      if (this.sessionQueue.length === 0) {
        this.finished = true;
      }
    },
    restart() {
      this.buildSession();
    },
    goHub() {
      this.$router.push({ name: "flashcard-hub", params: { bookId: this.bookId } });
    },
  },
};
</script>

<style scoped>
.fc-review {
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

.rev-actions-slot {
  margin-top: 0;
}

@media (min-width: 768px) {
  .fc-review {
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

  .fc-body--with-writing .flip-scene {
    grid-area: flip;
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

  .fc-body--with-writing .rev-actions-slot {
    grid-area: actions;
  }
}

.rev-header {
  margin-bottom: 20px;
}

.rev-header-main {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-top: 8px;
}

.rev-header h1 {
  margin: 0 0 4px;
  font-size: 20px;
  font-weight: 700;
}

.rev-desc {
  margin: 0;
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

.progress-text {
  font-size: 12px;
  font-weight: 700;
  color: var(--c-text-muted);
  margin-bottom: 12px;
}

.flip-scene {
  perspective: 1200px;
  cursor: pointer;
  outline: none;
}

.flip-card {
  min-height: 320px;
  position: relative;
}

.flip-inner {
  position: relative;
  width: 100%;
  min-height: 320px;
  transition: transform 0.55s cubic-bezier(0.4, 0.2, 0.2, 1);
  transform-style: preserve-3d;
}

.flip-card.flipped .flip-inner {
  transform: rotateY(180deg);
}

.flip-face {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 28px 24px;
  text-align: center;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: var(--c-radius-lg);
  border: 1px solid var(--c-border);
  background: var(--c-surface);
  box-shadow: 0 8px 28px rgba(26, 23, 20, 0.06);
}

.flip-back {
  transform: rotateY(180deg);
  background: var(--c-blue-light);
  border-color: var(--c-blue-mid);
  align-items: flex-start;
  justify-content: flex-start;
  overflow-y: auto;
}

.face-label {
  margin: 0 0 12px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--c-text-muted);
}

.term {
  margin: 0;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.55;
  color: var(--c-text-primary);
}

.explanation {
  margin: 0 0 14px;
  font-size: 15px;
  line-height: 1.55;
  max-width: 100%;
  white-space: pre-line;
  text-align: left;
}

.explanation.de {
  color: var(--c-text-primary);
  font-weight: 500;
}

.explanation.ko {
  margin-bottom: 0;
  color: var(--c-text-secondary);
  font-size: 13px;
}

.tap-hint {
  margin: 20px 0 0;
  font-size: 11px;
  color: var(--c-text-muted);
}

.rev-actions {
  margin-top: 20px;
}

.reveal-btn {
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

.grade-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.grade-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 56px;
  padding: 12px 10px;
  border-radius: var(--c-radius-md);
  font-weight: 700;
  cursor: pointer;
  border: 1px solid var(--c-border);
  background: var(--c-surface);
}

.grade-name {
  font-size: 12px;
  font-weight: 600;
  opacity: 0.85;
}

.grade-label {
  font-size: 18px;
  letter-spacing: -0.02em;
}

.grade-btn.again {
  color: #b42318;
  border-color: rgba(180, 35, 24, 0.35);
  background: rgba(180, 35, 24, 0.06);
}

.grade-btn.hard {
  color: var(--c-amber);
  border-color: var(--c-amber-mid);
  background: var(--c-amber-light);
}

.grade-btn.good {
  color: var(--c-teal);
  border-color: var(--c-teal);
  background: var(--c-teal-light);
}

.grade-btn.easy {
  color: var(--c-blue);
  border-color: var(--c-blue-mid);
  background: var(--c-blue-light);
}

.empty-state,
.summary {
  text-align: center;
  padding: 40px 20px;
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-lg);
}

.empty-sub,
.summary-sub {
  margin: 8px 0 20px;
  font-size: 13px;
  color: var(--c-text-muted);
}

.summary h2 {
  margin: 0 0 8px;
}

.score {
  font-size: 28px;
  font-weight: 700;
  color: var(--c-teal);
  margin: 0 0 8px;
}

.summary-actions,
.empty-state button {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.summary-actions button,
.empty-state button {
  padding: 10px 20px;
  border-radius: var(--c-radius-md);
  border: 1px solid var(--c-border);
  background: var(--c-surface);
  cursor: pointer;
  font-weight: 600;
}

.summary-actions .primary,
.empty-state .primary {
  background: var(--c-blue);
  color: #fff;
  border-color: var(--c-blue);
}
</style>
