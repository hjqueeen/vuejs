<template>
  <header class="app-header">
    <div class="header-left">
      <router-link class="home-link" to="/dashboard" aria-label="홈으로 이동" title="홈으로 이동">
        <svg class="home-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M3 10.5L12 3l9 7.5M5.5 9.5V20h13V9.5M9.5 20v-5.5h5V20"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
      <div class="header-divider"></div>
      <router-link class="review-link" to="/review">복습노트</router-link>
    </div>

    <div class="header-right">
      <button type="button" class="dark-mode-btn" :aria-label="darkMode ? '라이트 모드로 전환' : '다크 모드로 전환'" @click="$emit('toggle-dark-mode')">
        <svg v-if="!darkMode" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
        <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      </button>

      <div v-if="showLanguageMaskControls" class="ebook-controls">
        <button
          type="button"
          class="ghost-btn"
          :class="{ active: hideKorean }"
          :disabled="hideEnglish && !hideKorean"
          @click="$emit('toggle-hide-korean')"
        >
          한국어 가리기
        </button>
        <button
          type="button"
          class="ghost-btn"
          :class="{ active: hideEnglish }"
          :disabled="hideKorean && !hideEnglish"
          @click="$emit('toggle-hide-english')"
        >
          영어 가리기
        </button>
      </div>

      <div v-if="isEbookRoute" class="ebook-controls">
        <button
          type="button"
          class="ghost-btn"
          :class="{ active: hideCompletedSentences }"
          @click="$emit('toggle-hide-completed')"
        >
          {{ hideCompletedSentences ? "완료 숨김 ON" : "완료 숨기기" }}
        </button>
      </div>

      <div v-if="isEbookRoute" class="ebook-controls">
        <button type="button" class="ghost-btn" @click="$emit('toggle-toc')">
          {{ showToc ? $t("app.ebook.hideToc") : $t("app.ebook.showToc") }}
        </button>
        <label class="page-mode-label">
          <select :value="pageMode" @change="$emit('change-page-mode', $event.target.value)">
            <option value="single">{{ $t("app.ebook.singlePage") }}</option>
            <option value="double">{{ $t("app.ebook.doublePage") }}</option>
          </select>
        </label>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    isEbookRoute: { type: Boolean, default: false },
    showLanguageMaskControls: { type: Boolean, default: false },
    showToc: { type: Boolean, default: true },
    pageMode: { type: String, default: "single" },
    hideEnglish: { type: Boolean, default: false },
    hideKorean: { type: Boolean, default: false },
    hideCompletedSentences: { type: Boolean, default: false },
    darkMode: { type: Boolean, default: false },
  },
};
</script>

<style scoped>
.header-divider {
  width: 1px;
  height: 18px;
  background: var(--c-border);
}

.page-mode-label {
  display: inline-flex;
  align-items: center;
}

.dark-mode-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-md);
  background: transparent;
  color: var(--c-text-secondary);
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s, color 0.15s;
}

.dark-mode-btn:hover {
  background: var(--c-border-subtle);
  color: var(--c-text-primary);
}

.dark-mode-btn svg {
  width: 16px;
  height: 16px;
}
</style>
