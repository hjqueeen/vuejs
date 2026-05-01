<template>
  <div v-if="chapter" class="grammar-page">
    <header class="grammar-header">
      <div class="grammar-header-left">
        <span class="grammar-chip">{{ chapter.chip }}</span>
        <h2>{{ chapter.title }}</h2>
      </div>
      <p class="grammar-subtitle">{{ chapter.subtitle }}</p>
    </header>

    <div class="grammar-body">
      <section class="grammar-grid">
        <article class="grammar-card grammar-card--accent">
          <h3>{{ chapter.focusTitle }}</h3>
          <p class="example-en">{{ chapter.focusEn }}</p>
          <p class="example-ko">{{ chapter.focusKo }}</p>
          <ul class="focus-points">
            <li v-for="(point, idx) in chapter.points" :key="`point-${idx}`">{{ point }}</li>
          </ul>
        </article>

        <article class="grammar-card">
          <h3>{{ chapter.structureTitle }}</h3>
          <p class="pattern">{{ chapter.structurePattern }}</p>
          <p class="example-en">{{ chapter.structureExample }}</p>
          <p class="note">{{ chapter.structureNote }}</p>
        </article>
      </section>

      <article class="grammar-card grammar-card--examples">
        <h3>{{ chapter.examplesTitle }}</h3>
        <div class="examples-grid">
          <div v-for="(example, idx) in chapter.examples" :key="`example-${idx}`" class="example-item">
            <p class="example-en">{{ example.en }}</p>
            <p class="example-ko">{{ example.ko }}</p>
          </div>
        </div>
      </article>

      <article class="grammar-card grammar-card--summary">
        <h3>한 줄 정리</h3>
        <p class="summary">{{ chapter.summary }}</p>
      </article>
    </div>
  </div>
</template>

<script>
import { getGrammarChapterById } from "@/data/grammarChapters";

export default {
  name: "GrammarChapterView",
  props: {
    grammarId: { type: String, default: "" },
  },
  computed: {
    resolvedGrammarId() {
      return this.grammarId || this.$route.params.grammarId;
    },
    chapter() {
      return getGrammarChapterById(this.resolvedGrammarId);
    },
  },
};
</script>

<style scoped>
.grammar-page {
  display: flex;
  flex-direction: column;
  gap: 0;
  font-size: 14px;
  color: var(--c-text-primary);
  -webkit-font-smoothing: antialiased;
}

/* ─── Header ── */
.grammar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 20px;
  background: var(--c-surface);
  border-bottom: 1px solid var(--c-border-subtle);
  flex-wrap: wrap;
}

.grammar-header-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.grammar-chip {
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
  white-space: nowrap;
}

.grammar-header h2 {
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  color: var(--c-text-primary);
  letter-spacing: -0.3px;
}

.grammar-subtitle {
  margin: 0;
  font-size: 12px;
  color: var(--c-text-muted);
  line-height: 1.5;
}

/* ─── Body ── */
.grammar-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px 20px;
}

/* ─── Grid ── */
.grammar-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

/* ─── Card ── */
.grammar-card {
  background: var(--c-surface);
  border: 1px solid var(--c-border-subtle);
  border-radius: var(--c-radius-lg);
  padding: 16px 18px;
  overflow: hidden;
}

.grammar-card h3 {
  margin: 0 0 10px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--c-text-secondary);
  padding-bottom: 8px;
  border-bottom: 1px solid var(--c-border-subtle);
}

.grammar-card--accent {
  background: var(--c-blue-light);
  border-color: var(--c-blue-mid);
}

.grammar-card--accent h3 {
  color: var(--c-blue);
  border-bottom-color: var(--c-blue-mid);
}

.grammar-card--summary {
  background: var(--c-amber-light);
  border-color: var(--c-amber-mid);
}

.grammar-card--summary h3 {
  color: var(--c-amber);
  border-bottom-color: var(--c-amber-mid);
}

/* ─── Content ── */
.example-en {
  margin: 0 0 4px;
  color: var(--c-text-primary);
  font-weight: 600;
  font-size: 14px;
  line-height: 1.6;
}

.example-ko {
  margin: 0 0 10px;
  color: var(--c-text-secondary);
  font-size: 13px;
  line-height: 1.55;
}

.pattern {
  margin: 0 0 8px;
  font-family: "SFMono-Regular", Menlo, Monaco, Consolas, monospace;
  font-size: 13px;
  color: var(--c-blue);
  background: rgba(45, 95, 168, 0.06);
  border-radius: var(--c-radius-sm);
  padding: 6px 10px;
}

.note {
  margin: 8px 0 0;
  color: var(--c-text-secondary);
  font-size: 12px;
  line-height: 1.55;
}

.focus-points {
  margin: 8px 0 0;
  padding-left: 16px;
  display: grid;
  gap: 4px;
}

.focus-points li {
  font-size: 13px;
  color: var(--c-blue);
  line-height: 1.55;
}

/* ─── Examples ── */
.grammar-card--examples h3 {
  margin-bottom: 12px;
}

.examples-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.example-item {
  border-left: 2px solid var(--c-border);
  padding-left: 10px;
}

.summary {
  margin: 0;
  color: var(--c-amber);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.6;
}

@media (max-width: 600px) {
  .grammar-grid,
  .examples-grid {
    grid-template-columns: 1fr;
  }
}
</style>
