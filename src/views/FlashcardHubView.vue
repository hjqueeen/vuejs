<template>
  <div class="flashcard-hub">
    <header class="fc-header">
      <button type="button" class="back-btn" @click="goDashboard">← 서재</button>
      <div class="fc-header-main">
        <div>
          <h1>{{ book.title }}</h1>
          <p class="fc-sub">{{ book.subtitle }}</p>
        </div>
        <FlashcardLayoutToggle @change="layoutMode = $event" />
        <FlashcardTargetLangToggle
          v-if="supportsTargetLang"
          :book-id="bookId"
          @change="onTargetLangChange"
        />
      </div>
      <p class="fc-progress">
        공부함 {{ studiedCount }} / {{ cards.length }}
        <span v-if="studiedCount">({{ studiedPercent }}%)</span>
        · 복습 대기 {{ dueCount }}장
        <span v-if="dualLang">({{ targetLang === "en" ? "English" : "Deutsch" }})</span>
      </p>
    </header>

    <section class="review-panel">
      <button type="button" class="review-btn" :disabled="dueCount < 1" @click="goReview">
        Anki 복습 시작
        <small v-if="dueCount < 1">(복습할 카드가 없습니다)</small>
        <small v-else>(복습 대기 {{ dueCount }}장 · FSRS)</small>
      </button>
    </section>

    <p class="fc-hint">{{ bookHint }}</p>

    <a
      v-if="bookSourceUrl && !cardSections.length"
      :href="bookSourceUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="fc-source-link"
    >
      <span>{{ bookSourceLabel }}</span>
      <span class="fc-source-external" aria-hidden="true">↗</span>
    </a>

    <div v-if="cardSections.length" class="fc-sections">
      <section
        v-for="section in cardSections"
        :key="section.id"
        class="fc-section"
        :class="{ 'fc-section--collapsed': !isSectionOpen(section.id) }"
      >
        <button
          type="button"
          class="fc-section-title"
          :aria-expanded="isSectionOpen(section.id)"
          @click="toggleSection(section.id)"
        >
          <span class="fc-section-title-main">
            <span class="block-dot"></span>
            <span class="fc-section-label">{{ section.title }}</span>
            <span class="fc-section-count">{{ section.cards.length }}장</span>
          </span>
          <span class="fc-chevron" aria-hidden="true"></span>
        </button>
        <div v-show="isSectionOpen(section.id)" class="fc-section-body">
          <a
            v-if="section.sourceUrl"
            :href="section.sourceUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="fc-source-link fc-section-source"
            @click.stop
          >
            <span>{{ section.sourceLabel || "원본 영상 보기" }}</span>
            <span class="fc-source-external" aria-hidden="true">↗</span>
          </a>
          <ol class="fc-list">
            <li v-for="card in section.cards" :key="card.id" class="fc-row">
              <span class="fc-no" :class="rowClass(card.id)">{{ cardIndex(card.id) + 1 }}</span>
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
      </section>
    </div>

    <ol v-else class="fc-list">
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
import FlashcardLayoutToggle from "@/components/flashcard/FlashcardLayoutToggle.vue";
import FlashcardTargetLangToggle from "@/components/flashcard/FlashcardTargetLangToggle.vue";
import { expandReviewItems } from "@/utils/flashcardReviewItems";
import { bookHasDualLang, withLangSrsId } from "@/utils/flashcardSrsId";
import { getFlashcardLayoutMode } from "@/utils/flashcardLayout";
import { getFlashcardTargetLang } from "@/utils/flashcardTargetLang";
import {
  getFlashcardSectionState,
  setFlashcardSectionState,
} from "@/utils/flashcardSectionState";

export default {
  name: "FlashcardHubView",
  components: { FlashcardLayoutToggle, FlashcardTargetLangToggle },
  props: {
    bookId: { type: String, required: true },
  },
  data() {
    return {
      layoutMode: getFlashcardLayoutMode(),
      targetLang: getFlashcardTargetLang(this.bookId),
      expandedSections: {},
    };
  },
  watch: {
    cardSections: {
      immediate: true,
      handler(sections) {
        const sectionIds = sections.map((section) => section.id);
        if (!sectionIds.length) return;
        this.expandedSections = getFlashcardSectionState(this.bookId, sectionIds);
      },
    },
  },
  computed: {
    book() {
      return getBookById(this.bookId);
    },
    bookMeta() {
      return getFlashcardBook(this.bookId);
    },
    supportsTargetLang() {
      return bookHasDualLang(this.bookMeta);
    },
    dualLang() {
      return bookHasDualLang(this.bookMeta);
    },
    bookHint() {
      if (this.bookMeta?.hintForLang) {
        return this.bookMeta.hintForLang(this.targetLang);
      }
      return this.bookMeta?.hint || "카드를 눌러 앞면과 뒷면을 뒤집으며 외우세요.";
    },
    bookSourceUrl() {
      return this.bookMeta?.sourceUrl || "";
    },
    bookSourceLabel() {
      return this.bookMeta?.sourceLabel || "원본 영상 보기";
    },
    cards() {
      return getCardsForBook(this.bookId);
    },
    cardSections() {
      const sections = this.bookMeta?.sections;
      if (!sections?.length) return [];
      const cardMap = new Map(this.cards.map((card) => [card.id, card]));
      return sections
        .map((section) => ({
          id: section.id,
          title: section.title,
          sourceUrl: section.sourceUrl,
          sourceLabel: section.sourceLabel,
          cards: section.cardIds
            .map((id) => cardMap.get(id))
            .filter(Boolean),
        }))
        .filter((section) => section.cards.length > 0);
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
      return expandReviewItems(this.reviewPool, this.bookId, this.targetLang, {
        dualLang: this.dualLang,
      }).map((item) => item.id);
    },
    dueCount() {
      return this.$store.getters["flashcardSrs/dueCount"](this.bookId, this.cardIds);
    },
  },
  methods: {
    isSectionOpen(sectionId) {
      return this.expandedSections[sectionId] === true;
    },
    toggleSection(sectionId) {
      const next = {
        ...this.expandedSections,
        [sectionId]: !this.isSectionOpen(sectionId),
      };
      this.expandedSections = next;
      setFlashcardSectionState(
        this.bookId,
        next,
        this.cardSections.map((section) => section.id),
      );
    },
    cardIndex(cardId) {
      return this.cards.findIndex((card) => card.id === cardId);
    },
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
      const srsId = withLangSrsId(cardId, this.targetLang, this.dualLang);
      return this.$store.getters["flashcardSrs/dueLabel"](this.bookId, srsId);
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
    onTargetLangChange(lang) {
      this.targetLang = lang;
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

@media (min-width: 768px) {
  .flashcard-hub {
    max-width: 1240px;
    padding: 8px 24px 48px;
  }
}

.fc-header {
  margin-bottom: 20px;
}

.fc-header-main {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-top: 8px;
}

.fc-header h1 {
  margin: 0 0 4px;
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

.fc-source-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin: 0 0 16px;
  padding: 5px 11px;
  border-radius: var(--c-radius-pill);
  border: 1.5px solid #ef4444;
  background: #fff1f2;
  color: #dc2626;
  font-size: 11px;
  font-weight: 700;
  text-decoration: none;
  transition: filter 0.15s;
}

html[data-theme="dark"] .fc-source-link {
  border-color: #f87171;
  background: rgba(239, 68, 68, 0.12);
  color: #f87171;
}

.fc-source-link:hover {
  filter: brightness(0.93);
}

.fc-source-external {
  font-size: 10px;
  opacity: 0.75;
}

.back-btn {
  border: none;
  background: none;
  color: var(--c-blue);
  font-size: 13px;
  cursor: pointer;
  padding: 0;
}

.fc-sections {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.fc-section {
  background: var(--c-surface);
  border: 1px solid var(--c-border-subtle);
  border-radius: var(--c-radius-lg);
  overflow: hidden;
}

.fc-section-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  margin: 0;
  padding: 11px 16px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--c-text-secondary);
  background: var(--c-bg);
  border: none;
  border-bottom: 1px solid var(--c-border-subtle);
  cursor: pointer;
  text-align: left;
  transition: background 0.15s;
}

.fc-section--collapsed .fc-section-title {
  border-bottom: none;
}

.fc-section-title:hover {
  background: var(--c-border-subtle);
}

.fc-section-title-main {
  display: flex;
  align-items: center;
  gap: 7px;
  min-width: 0;
}

.fc-section-label {
  letter-spacing: 0.06em;
}

.fc-section-count {
  flex-shrink: 0;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0;
  text-transform: none;
  color: var(--c-text-muted);
  padding: 2px 7px;
  border-radius: var(--c-radius-pill);
  background: var(--c-border-subtle);
}

.fc-chevron {
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  border-right: 2px solid var(--c-text-muted);
  border-bottom: 2px solid var(--c-text-muted);
  transform: rotate(45deg);
  transition: transform 0.2s ease;
  margin-top: -3px;
}

.fc-section-title[aria-expanded="true"] .fc-chevron {
  transform: rotate(-135deg);
  margin-top: 3px;
}

.fc-section-body .fc-list {
  padding: 10px 12px 12px;
}

.fc-section-source {
  margin: 10px 12px 0;
}

.block-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--c-blue);
  flex-shrink: 0;
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
