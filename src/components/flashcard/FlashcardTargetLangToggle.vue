<template>
  <div class="fc-target-lang" role="group" aria-label="공부할 언어">
    <button
      type="button"
      class="lang-btn"
      :class="{ active: lang === 'de' }"
      :aria-pressed="lang === 'de'"
      @click="setLang('de')"
    >
      Deutsch
    </button>
    <button
      type="button"
      class="lang-btn"
      :class="{ active: lang === 'en' }"
      :aria-pressed="lang === 'en'"
      @click="setLang('en')"
    >
      English
    </button>
  </div>
</template>

<script>
import { getFlashcardTargetLang, setFlashcardTargetLang } from "@/utils/flashcardTargetLang";

export default {
  name: "FlashcardTargetLangToggle",
  props: {
    bookId: { type: String, required: true },
  },
  data() {
    return { lang: getFlashcardTargetLang(this.bookId) };
  },
  methods: {
    setLang(lang) {
      this.lang = lang;
      setFlashcardTargetLang(this.bookId, lang);
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
