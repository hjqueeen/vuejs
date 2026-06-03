<template>
  <div v-if="card" class="flashcard-detail">
    <header class="fc-nav">
      <button type="button" class="back-btn" @click="goHub">← 목록</button>
      <span class="fc-index">{{ cardIndex + 1 }} / {{ totalCards }}</span>
      <div class="fc-nav-btns">
        <button type="button" :disabled="!prevId" @click="goSibling(prevId)">‹</button>
        <button type="button" :disabled="!nextId" @click="goSibling(nextId)">›</button>
      </div>
    </header>

    <div
      ref="flipScene"
      class="flip-scene"
      :style="sceneStyle"
      role="button"
      tabindex="0"
      :aria-label="flipped ? '뒷면 — 다시 뒤집기' : '앞면 — 카드 뒤집기'"
      @click="toggleFlip"
      @keyup.enter="toggleFlip"
      @keyup.space.prevent="toggleFlip"
    >
      <div class="flip-card" :class="{ flipped }">
        <div class="flip-inner" :style="{ height: sceneHeight + 'px' }">
          <div ref="frontFace" class="flip-face flip-front">
            <p class="face-label">Begriff</p>
            <h2 class="term">{{ card.term }}</h2>
            <p class="tap-hint">탭하여 뒤집기</p>
          </div>
          <div ref="backFace" class="flip-face flip-back" :class="{ 'is-scrollable': backScrollable }">
            <div class="flip-back-content">
              <p class="face-label">Erklärung</p>
              <p class="explanation de">{{ card.explanationDe }}</p>
              <p class="explanation ko">{{ card.explanationKo }}</p>
              <p class="tap-hint">탭하여 앞면</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="fc-actions">
      <button type="button" class="flip-btn" @click="toggleFlip">
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
  <div v-else class="not-found">카드를 찾을 수 없습니다.</div>
</template>

<script>
import {
  WAERME_KARTEIKARTEN_BOOK_ID,
  waermeKarteikarten,
  getWaermeCardById,
} from "@/data/waermeKarteikartenContent";

function cardsForBook(bookId) {
  if (bookId === WAERME_KARTEIKARTEN_BOOK_ID) return waermeKarteikarten;
  return [];
}

export default {
  name: "FlashcardDetailView",
  props: {
    bookId: { type: String, required: true },
    cardId: { type: String, required: true },
  },
  data() {
    return {
      flipped: false,
      sceneHeight: 360,
      maxSceneHeight: 600,
      minSceneHeight: 360,
      backScrollable: false,
      resizeObserver: null,
    };
  },
  computed: {
    allCards() {
      return cardsForBook(this.bookId);
    },
    card() {
      if (this.bookId === WAERME_KARTEIKARTEN_BOOK_ID) {
        return getWaermeCardById(this.cardId);
      }
      return null;
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
    sceneStyle() {
      return {
        height: `${this.sceneHeight}px`,
        maxHeight: `${this.maxSceneHeight}px`,
      };
    },
  },
  mounted() {
    this.syncSceneHeight();
    window.addEventListener("resize", this.syncSceneHeight);
    if (typeof ResizeObserver !== "undefined") {
      this.resizeObserver = new ResizeObserver(() => this.syncSceneHeight());
      this.$nextTick(() => {
        if (this.$refs.backFace) this.resizeObserver.observe(this.$refs.backFace);
        if (this.$refs.frontFace) this.resizeObserver.observe(this.$refs.frontFace);
      });
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.syncSceneHeight);
    this.resizeObserver?.disconnect();
  },
  watch: {
    cardId() {
      this.flipped = false;
      this.$nextTick(() => this.syncSceneHeight());
    },
    flipped() {
      this.$nextTick(() => this.syncSceneHeight());
    },
    card() {
      this.$nextTick(() => this.syncSceneHeight());
    },
  },
  methods: {
    getViewportLimits() {
      const root = this.$el;
      if (!root || typeof window === "undefined") {
        return { minH: 360, maxH: 600 };
      }

      const nav = root.querySelector(".fc-nav");
      const actions = root.querySelector(".fc-actions");
      const top = root.getBoundingClientRect().top;
      const chrome =
        (nav?.offsetHeight || 0) +
        (actions?.offsetHeight || 0) +
        48;

      const available = Math.max(280, window.innerHeight - top - chrome);
      const minH = Math.round(window.innerHeight * 0.5);
      const maxH = available;

      return {
        minH: Math.min(minH, maxH),
        maxH,
      };
    },
    measureFace(faceEl) {
      if (!faceEl || !this.$refs.flipScene) return 280;

      const width = this.$refs.flipScene.clientWidth || faceEl.clientWidth;
      const clone = faceEl.cloneNode(true);
      clone.style.cssText = [
        "position:fixed",
        "left:-9999px",
        "top:0",
        "visibility:hidden",
        "pointer-events:none",
        `width:${width}px`,
        "height:auto",
        "max-height:none",
        "overflow:visible",
      ].join(";");
      document.body.appendChild(clone);
      const height = clone.scrollHeight;
      document.body.removeChild(clone);
      return height;
    },
    syncSceneHeight() {
      this.$nextTick(() => {
        const front = this.$refs.frontFace;
        const back = this.$refs.backFace;
        if (!front || !back) return;

        const { minH, maxH } = this.getViewportLimits();
        this.minSceneHeight = minH;
        this.maxSceneHeight = maxH;

        const frontH = this.measureFace(front);
        const backH = this.measureFace(back);
        const contentH = this.flipped ? backH : frontH;
        const targetH = Math.max(contentH, minH);

        this.backScrollable = this.flipped && targetH > maxH;
        this.sceneHeight = Math.min(targetH, maxH);
      });
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

.fc-nav {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.fc-index {
  flex: 1;
  text-align: center;
  font-size: 13px;
  color: var(--c-text-muted);
  font-weight: 600;
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

.flip-scene {
  perspective: 1200px;
  cursor: pointer;
  outline: none;
  width: 100%;
  transition: height 0.35s ease;
}

.flip-card {
  height: 100%;
  position: relative;
}

.flip-inner {
  position: relative;
  width: 100%;
  transition: transform 0.55s cubic-bezier(0.4, 0.2, 0.2, 1), height 0.35s ease;
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
  padding: 28px 24px;
  text-align: center;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: var(--c-radius-lg);
  border: 1px solid var(--c-border);
  background: var(--c-surface);
  box-shadow: 0 8px 28px rgba(26, 23, 20, 0.06);
  box-sizing: border-box;
  overflow: hidden;
}

.flip-front {
  align-items: center;
  justify-content: center;
}

.flip-back {
  transform: rotateY(180deg);
  background: var(--c-blue-light);
  border-color: var(--c-blue-mid);
  align-items: stretch;
  justify-content: flex-start;
}

.flip-back.is-scrollable {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.flip-back-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
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
  font-size: 22px;
  font-weight: 700;
  line-height: 1.35;
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
  color: var(--c-text-secondary);
  font-size: 14px;
}

.tap-hint {
  margin: 20px 0 0;
  font-size: 11px;
  color: var(--c-text-muted);
  flex-shrink: 0;
}

.flip-back .tap-hint {
  margin-top: auto;
  padding-top: 16px;
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
