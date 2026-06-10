<template>
  <section
    v-if="visible"
    class="fc-vocab"
    :class="{ compact, 'fc-vocab--ko-only': examplesKoOnly }"
  >
    <h3 class="fc-vocab-title">{{ examplesKoOnly ? "예문" : "추가 단어" }}</h3>

    <ul v-if="examplesKoOnly" class="fc-vocab-examples">
      <li v-for="(ko, idx) in koOnlyExamples" :key="idx">
        <p class="ex-ko ex-ko--primary">{{ ko }}</p>
      </li>
    </ul>

    <template v-else>
      <article v-for="(item, idx) in items" :key="idx" class="fc-vocab-item">
        <p class="fc-vocab-word">{{ displayWord(item) }}</p>
        <p class="fc-vocab-meaning">{{ displayMeaning(item) }}</p>
        <ul v-if="item.examples && item.examples.length" class="fc-vocab-examples">
          <li v-for="(ex, exIdx) in item.examples" :key="exIdx">
            <p v-if="displayExampleTarget(ex)" class="ex-target">{{ displayExampleTarget(ex) }}</p>
            <p v-if="ex.ko" class="ex-ko">{{ ex.ko }}</p>
          </li>
        </ul>
      </article>
    </template>
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
    examplesKoOnly: {
      type: Boolean,
      default: false,
    },
    targetLang: {
      type: String,
      default: "de",
    },
  },
  methods: {
    displayWord(item) {
      if (this.targetLang === "en") return item.wordEn || item.word;
      return item.word;
    },
    displayMeaning(item) {
      if (this.targetLang === "en") {
        if (item.meaningEn) return item.meaningEn;
        const sep = item.meaning?.indexOf(" · ");
        return sep >= 0 ? item.meaning.slice(sep + 3) : item.meaning;
      }
      return item.meaning;
    },
    displayExampleTarget(ex) {
      if (this.targetLang === "en") return ex.en || ex.de;
      return ex.de;
    },
  },
  computed: {
    koOnlyExamples() {
      return this.items.flatMap((item) =>
        (item.examples || []).filter((ex) => ex.ko).map((ex) => ex.ko)
      );
    },
    visible() {
      if (!this.items?.length) return false;
      return this.examplesKoOnly ? this.koOnlyExamples.length > 0 : true;
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

.fc-vocab--ko-only .fc-vocab-examples {
  margin-top: 0;
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

.ex-target {
  margin: 0 0 4px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--c-text-primary);
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

.ex-ko--primary {
  font-size: 14px;
  line-height: 1.5;
  color: var(--c-text-primary);
}
</style>
