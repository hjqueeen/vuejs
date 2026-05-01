<template>
  <div class="review-page">
    <header class="review-header">
      <div class="review-header-left">
        <span class="review-chip">Review</span>
        <h2>복습 체크 모음</h2>
      </div>
      <button
        type="button"
        class="clear-btn"
        :disabled="!selectedCount"
        @click="clearAll"
      >
        전체 해제
      </button>
    </header>

    <div class="review-summary">
      <span class="summary-count">{{ visibleSelectedCount }}개</span>
      <span class="summary-desc">문장 구조, 핵심 표현, 오늘의 표현, 핵심 단어 중 체크한 항목을 복습합니다.</span>
    </div>

    <p v-if="!selectedCount" class="hint-msg">아직 체크한 항목이 없습니다. 문장 학습 페이지에서 체크해 주세요.</p>
    <p v-else-if="!visibleSelectedCount" class="hint-msg">완료 숨기기가 켜져 있어 표시할 항목이 없습니다.</p>

    <div v-else class="review-layout">
      <article v-if="groupedVisible.structure.length" class="review-block">
        <h3><span class="block-dot block-dot--amber"></span>문장 구조</h3>
        <ul class="review-list">
          <li v-for="item in groupedVisible.structure" :key="`${item.type}:${item.id}`">
            <div class="review-item-row">
              <strong v-if="!hideEnglish">{{ item.text }}</strong>
              <span class="review-check-group">
                <label class="flag-toggle">
                  <input type="checkbox" :checked="item.review" @change="toggle(item, 'review')" />
                  <span class="flag-toggle-text">복습</span>
                </label>
                <label class="flag-toggle">
                  <input type="checkbox" :checked="item.done" @change="toggle(item, 'done')" />
                  <span class="flag-toggle-text">완료</span>
                </label>
              </span>
            </div>
            <span v-if="!hideKorean" class="item-meaning">{{ item.meaning }}</span>
          </li>
        </ul>
      </article>

      <article v-if="groupedVisible.expression.length" class="review-block">
        <h3><span class="block-dot"></span>핵심 표현</h3>
        <ul class="review-list">
          <li v-for="item in groupedVisible.expression" :key="`${item.type}:${item.id}`">
            <div class="review-item-row">
              <strong v-if="!hideEnglish">{{ item.text }}</strong>
              <span class="review-check-group">
                <label class="flag-toggle">
                  <input type="checkbox" :checked="item.review" @change="toggle(item, 'review')" />
                  <span class="flag-toggle-text">복습</span>
                </label>
                <label class="flag-toggle">
                  <input type="checkbox" :checked="item.done" @change="toggle(item, 'done')" />
                  <span class="flag-toggle-text">완료</span>
                </label>
              </span>
            </div>
            <span v-if="!hideKorean" class="item-meaning">{{ item.meaning }}</span>
          </li>
        </ul>
      </article>

      <article v-if="groupedVisible.tip.length" class="review-block">
        <h3><span class="block-dot block-dot--teal"></span>오늘의 표현</h3>
        <ul class="review-list">
          <li v-for="item in groupedVisible.tip" :key="`${item.type}:${item.id}`">
            <div class="review-item-row">
              <strong v-if="!hideEnglish">{{ item.text }}</strong>
              <span class="review-check-group">
                <label class="flag-toggle">
                  <input type="checkbox" :checked="item.review" @change="toggle(item, 'review')" />
                  <span class="flag-toggle-text">복습</span>
                </label>
                <label class="flag-toggle">
                  <input type="checkbox" :checked="item.done" @change="toggle(item, 'done')" />
                  <span class="flag-toggle-text">완료</span>
                </label>
              </span>
            </div>
            <span v-if="!hideKorean" class="item-meaning">{{ item.meaning }}</span>
          </li>
        </ul>
      </article>

      <article v-if="groupedVisible.vocabulary.length" class="review-block">
        <h3><span class="block-dot block-dot--amber"></span>핵심 단어</h3>
        <ul class="review-list">
          <li v-for="item in groupedVisible.vocabulary" :key="`${item.type}:${item.id}`">
            <div class="review-item-row">
              <strong v-if="!hideEnglish">{{ item.text }}</strong>
              <span class="review-check-group">
                <label class="flag-toggle">
                  <input type="checkbox" :checked="item.review" @change="toggle(item, 'review')" />
                  <span class="flag-toggle-text">복습</span>
                </label>
                <label class="flag-toggle">
                  <input type="checkbox" :checked="item.done" @change="toggle(item, 'done')" />
                  <span class="flag-toggle-text">완료</span>
                </label>
              </span>
            </div>
            <span v-if="!hideKorean" class="item-meaning">{{ item.meaning }}</span>
          </li>
        </ul>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewView",
  computed: {
    grouped() {
      return this.$store.getters["review/selectedByCategory"];
    },
    hideCompletedItems() {
      return this.$store.getters["ui/hideCompletedSentences"];
    },
    groupedVisible() {
      const g = this.grouped;
      if (!this.hideCompletedItems) return g;
      const dropDone = (arr) => (arr || []).filter((i) => !i.done);
      return {
        structure: dropDone(g.structure),
        expression: dropDone(g.expression),
        tip: dropDone(g.tip),
        vocabulary: dropDone(g.vocabulary),
      };
    },
    selectedCount() {
      return this.$store.getters["review/selectedCount"];
    },
    visibleSelectedCount() {
      const v = this.groupedVisible;
      return v.structure.length + v.expression.length + v.tip.length + v.vocabulary.length;
    },
    hideEnglish() {
      return this.$store.getters["ui/hideEnglish"];
    },
    hideKorean() {
      return this.$store.getters["ui/hideKorean"];
    },
  },
  methods: {
    toggle(item, flag) {
      this.$store.dispatch("review/toggleItemFlag", { item, flag });
    },
    clearAll() {
      this.$store.dispatch("review/clearAll");
    },
  },
};
</script>

<style scoped>
.review-page {
  max-width: 720px;
  margin: 0 auto;
  padding: 0 0 32px;
  font-size: 14px;
  color: var(--c-text-primary);
  -webkit-font-smoothing: antialiased;
}

/* ─── Header ── */
.review-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 20px;
  background: var(--c-surface);
  border-bottom: 1px solid var(--c-border-subtle);
  margin-bottom: 0;
}

.review-header-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.review-chip {
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: var(--c-radius-sm);
  background: var(--c-blue-light);
  border: 1px solid var(--c-blue-mid);
  color: var(--c-blue);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.review-header h2 {
  font-size: 15px;
  font-weight: 700;
  color: var(--c-text-primary);
  margin: 0;
  letter-spacing: -0.3px;
}

.clear-btn {
  height: 30px;
  padding: 0 14px;
  border-radius: var(--c-radius-pill);
  border: 1px solid var(--c-border);
  background: var(--c-surface);
  color: var(--c-text-secondary);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.15s, border-color 0.15s, color 0.15s;
}

.clear-btn:hover:not(:disabled) {
  background: #fef2f2;
  border-color: #fca5a5;
  color: #dc2626;
  transform: none;
}

/* ─── Summary ── */
.review-summary {
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding: 12px 20px;
  border-bottom: 1px solid var(--c-border-subtle);
}

.summary-count {
  font-size: 20px;
  font-weight: 700;
  color: var(--c-blue);
  letter-spacing: -0.5px;
}

.summary-desc {
  font-size: 12px;
  color: var(--c-text-muted);
  line-height: 1.5;
}

.hint-msg {
  padding: 24px 20px;
  color: var(--c-text-muted);
  font-size: 13px;
  margin: 0;
}

/* ─── Layout ── */
.review-layout {
  padding: 16px 20px;
  display: grid;
  gap: 10px;
}

/* ─── Block ── */
.review-block {
  background: var(--c-surface);
  border: 1px solid var(--c-border-subtle);
  border-radius: var(--c-radius-lg);
  overflow: hidden;
}

.review-block h3 {
  display: flex;
  align-items: center;
  gap: 7px;
  margin: 0;
  padding: 10px 16px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--c-text-secondary);
  background: var(--c-bg);
  border-bottom: 1px solid var(--c-border-subtle);
}

.block-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--c-blue);
  flex-shrink: 0;
}

.block-dot--amber { background: var(--c-amber); }
.block-dot--teal  { background: var(--c-teal); }

/* ─── List ── */
.review-list {
  display: grid;
  list-style: none;
  margin: 0;
  padding: 0;
}

.review-list > li {
  padding: 12px 16px;
  border-bottom: 1px solid var(--c-border-subtle);
}

.review-list > li:last-child {
  border-bottom: none;
}

.review-item-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.review-item-row strong {
  font-size: 14px;
  font-weight: 600;
  color: var(--c-text-primary);
  flex: 1;
  min-width: 0;
}

.item-meaning {
  display: block;
  margin-top: 4px;
  font-size: 12px;
  color: var(--c-text-secondary);
}

.review-check-group {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
}

/* ─── Flag toggle ── */
.flag-toggle {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.flag-toggle input {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: 0;
  padding: 0;
  border: 0;
  opacity: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  overflow: hidden;
}

.flag-toggle-text {
  display: inline-flex;
  align-items: center;
  height: 26px;
  padding: 0 11px;
  border-radius: var(--c-radius-pill);
  border: 1px solid var(--c-border);
  background: var(--c-surface);
  color: var(--c-text-secondary);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
}

.flag-toggle-text::after {
  content: "✓";
  font-size: 11px;
  font-weight: 700;
  color: var(--c-blue);
  opacity: 0;
  width: 0;
  overflow: hidden;
  transition: width 0.12s, opacity 0.12s;
}

.flag-toggle input:checked + .flag-toggle-text {
  background: var(--c-blue-light);
  color: var(--c-blue);
  border-color: var(--c-blue-mid);
}

.flag-toggle input:checked + .flag-toggle-text::after {
  opacity: 1;
  width: auto;
}
</style>
