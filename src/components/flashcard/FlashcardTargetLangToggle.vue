<template>
  <div class="fc-target-lang" role="group" :aria-label="ariaLabel">
    <button
      v-for="opt in options"
      :key="opt.value"
      type="button"
      class="lang-btn"
      :class="{ active: lang === opt.value }"
      :aria-pressed="lang === opt.value"
      @click="setLang(opt.value)"
    >
      {{ opt.label }}
    </button>
  </div>
</template>

<script>
import { getFlashcardTargetLang, setFlashcardTargetLang } from "@/utils/flashcardTargetLang";

const DEFAULT_OPTIONS = [
  { value: "de", label: "Deutsch" },
  { value: "en", label: "English" },
];

export default {
  name: "FlashcardTargetLangToggle",
  props: {
    bookId: { type: String, required: true },
    /** @type {{ value: string, label: string }[]} */
    options: {
      type: Array,
      default: () => DEFAULT_OPTIONS,
    },
    ariaLabel: {
      type: String,
      default: "공부할 언어",
    },
  },
  data() {
    return {
      lang: getFlashcardTargetLang(this.bookId, this.allowedValues),
    };
  },
  computed: {
    allowedValues() {
      return this.options.map((o) => o.value);
    },
  },
  watch: {
    bookId() {
      this.lang = getFlashcardTargetLang(this.bookId, this.allowedValues);
    },
  },
  methods: {
    setLang(lang) {
      this.lang = lang;
      setFlashcardTargetLang(this.bookId, lang, this.allowedValues);
      this.$emit("change", lang);
    },
  },
};
</script>

<style scoped>
.fc-target-lang {
  display: inline-flex;
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-sm);
  overflow: hidden;
  background: var(--c-surface);
}

.lang-btn {
  padding: 6px 12px;
  border: none;
  background: transparent;
  font-size: 12px;
  font-weight: 600;
  color: var(--c-text-muted);
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.lang-btn + .lang-btn {
  border-left: 1px solid var(--c-border);
}

.lang-btn.active {
  background: var(--c-teal-light);
  color: var(--c-teal);
}
</style>
