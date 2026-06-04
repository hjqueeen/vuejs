<template>
  <section v-if="items && items.length" class="fc-vocab" :class="{ compact }">
    <h3 class="fc-vocab-title">추가 단어</h3>
    <article v-for="(item, idx) in items" :key="idx" class="fc-vocab-item">
      <p class="fc-vocab-word">{{ item.word }}</p>
      <p class="fc-vocab-meaning">{{ item.meaning }}</p>
      <ul v-if="item.examples && item.examples.length" class="fc-vocab-examples">
        <li v-for="(ex, exIdx) in item.examples" :key="exIdx">
          <p class="ex-de">{{ ex.de }}</p>
          <p v-if="ex.ko" class="ex-ko">{{ ex.ko }}</p>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
export default {
  name: "FlashcardVocabulary",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    compact: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.fc-vocab {
  margin-top: 24px;
  padding: 18px 16px;
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-lg);
}

.fc-vocab.compact {
  margin-top: 16px;
  padding: 0;
  width: 100%;
  background: transparent;
  border: none;
  border-radius: 0;
  text-align: left;
}

.fc-vocab.compact .fc-vocab-examples li {
  background: rgba(255, 255, 255, 0.55);
}

.fc-vocab-title {
  margin: 0 0 14px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--c-amber);
}

.fc-vocab-item + .fc-vocab-item {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--c-border-subtle);
}

.fc-vocab-word {
  margin: 0 0 6px;
  font-size: 17px;
  font-weight: 700;
  color: var(--c-text-primary);
}

.fc-vocab-meaning {
  margin: 0 0 12px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--c-text-secondary);
  white-space: pre-line;
}

.fc-vocab-examples {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.fc-vocab-examples li {
  padding: 10px 12px;
  background: var(--c-blue-light);
  border-radius: var(--c-radius-sm);
  border-left: 3px solid var(--c-blue);
}

.ex-de {
  margin: 0 0 4px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--c-text-primary);
}

.ex-ko {
  margin: 0;
  font-size: 13px;
  line-height: 1.45;
  color: var(--c-text-muted);
}
</style>
