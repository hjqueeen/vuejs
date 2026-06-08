<template>
  <div class="fc-layout-toggle" role="group" aria-label="카드 표시 방식">
    <button
      type="button"
      class="layout-btn"
      :class="{ active: mode === 'flip' }"
      :aria-pressed="mode === 'flip'"
      @click="setMode('flip')"
    >
      앞·뒤
    </button>
    <button
      type="button"
      class="layout-btn"
      :class="{ active: mode === 'split' }"
      :aria-pressed="mode === 'split'"
      @click="setMode('split')"
    >
      나란히
    </button>
  </div>
</template>

<script>
import { getFlashcardLayoutMode, setFlashcardLayoutMode } from "@/utils/flashcardLayout";

export default {
  name: "FlashcardLayoutToggle",
  data() {
    return { mode: getFlashcardLayoutMode() };
  },
  methods: {
    setMode(mode) {
      this.mode = mode;
      setFlashcardLayoutMode(mode);
      this.$emit("change", mode);
    },
  },
};
</script>

<style scoped>
.fc-layout-toggle {
  display: inline-flex;
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-sm);
  overflow: hidden;
  background: var(--c-surface);
}

.layout-btn {
  padding: 6px 12px;
  border: none;
  background: transparent;
  font-size: 12px;
  font-weight: 600;
  color: var(--c-text-muted);
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.layout-btn + .layout-btn {
  border-left: 1px solid var(--c-border);
}

.layout-btn.active {
  background: var(--c-blue-light);
  color: var(--c-blue);
}
</style>
