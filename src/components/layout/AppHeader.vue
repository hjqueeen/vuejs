<template>
  <header class="app-header">
    <div class="header-left">
      <router-link class="home-link" to="/dashboard" :aria-label="$t('app.headerAria.dashboardHome')">
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
      <router-link class="review-link" to="/review" :aria-label="$t('app.headerAria.review')">
        <svg class="header-btn-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M8 7h13M8 12h13M8 17h13M5 7h.01M5 12h.01M5 17h.01"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
          />
        </svg>
        <span class="header-btn-text">{{ reviewLabel }}</span>
      </router-link>
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

      <div v-if="showLanguageMaskControls" class="study-translation-wrap">
        <label class="study-translation-label">
          <span class="study-translation-label-text">{{ $t("app.ebook.studyTranslationLabel") }}</span>
          <select
            class="study-translation-select"
            :value="studyTranslationLanguage"
            :aria-label="$t('app.headerAria.studyTranslationSelect')"
            @change="$emit('change-study-translation', $event.target.value)"
          >
            <option value="ko">{{ $t("app.ebook.studyTranslationKo") }}</option>
            <option value="de">{{ $t("app.ebook.studyTranslationDe") }}</option>
          </select>
        </label>
      </div>

      <div v-if="showLanguageMaskControls" class="ebook-controls">
        <button
          type="button"
          class="ghost-btn"
          :class="{ active: hideKorean }"
          :disabled="hideEnglish && !hideKorean"
          :aria-label="maskStudyLineAria"
          :aria-pressed="hideKorean"
          @click="$emit('toggle-hide-korean')"
        >
          <svg class="ghost-btn-icon" viewBox="0 0 24 24" aria-hidden="true">
            <text x="5" y="17" fill="currentColor" font-size="14" font-weight="700">가</text>
            <path d="M16 14h4M17 17h2M15 11h7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none" />
          </svg>
          <span class="ghost-btn-text">{{ maskStudyLineLabel }}</span>
        </button>
        <button
          type="button"
          class="ghost-btn"
          :class="{ active: hideEnglish }"
          :disabled="hideKorean && !hideEnglish"
          :aria-label="$t('app.headerAria.maskEnglish')"
          :aria-pressed="hideEnglish"
          @click="$emit('toggle-hide-english')"
        >
          <svg class="ghost-btn-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.85"
              d="M12 5l8 17h-2.9l-1.85-4.2H8.75L6.9 22H4L12 5zm0 9.7L9.7 9.2h4.6L12 14.7z"
            />
          </svg>
          <span class="ghost-btn-text">{{ $t('app.ebook.maskEnglishBtn') }}</span>
        </button>
      </div>

      <div v-if="isEbookRoute" class="ebook-controls">
        <button
          type="button"
          class="ghost-btn"
          :class="{ active: hideCompletedSentences }"
          :aria-label="$t('app.headerAria.hideCompleted')"
          :aria-pressed="hideCompletedSentences"
          @click="$emit('toggle-hide-completed')"
        >
          <svg class="ghost-btn-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 11l3 3L22 4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M21 12v7a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h11" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" opacity="0.9" />
          </svg>
          <span class="ghost-btn-text">{{
            hideCompletedSentences ? $t('app.ebook.hideCompletedOnBtn') : $t('app.ebook.hideCompletedBtn')
          }}</span>
        </button>
      </div>

      <div v-if="isEbookRoute" class="ebook-controls ebook-controls-toc-pages">
        <button
          type="button"
          class="ghost-btn"
          :aria-label="$t('app.headerAria.toc')"
          @click="$emit('toggle-toc')"
        >
          <svg class="ghost-btn-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 6h13M9 12h13M9 18h13M5 7h2M5 17h2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none" />
            <path d="M4 12h4" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
          <span class="ghost-btn-text">{{ showToc ? $t('app.ebook.hideToc') : $t('app.ebook.showToc') }}</span>
        </button>

        <label class="page-mode-label page-mode-label-desktop">
          <select :value="pageMode" :aria-label="$t('app.ebook.pageView')" @change="$emit('change-page-mode', $event.target.value)">
            <option value="single">{{ $t('app.ebook.singlePage') }}</option>
            <option value="double">{{ $t('app.ebook.doublePage') }}</option>
          </select>
        </label>

        <div class="page-mode-toggle-mobile" role="group" :aria-label="$t('app.headerAria.pageLayoutGroup')">
          <button
            type="button"
            class="ghost-btn page-mode-icon-btn"
            :class="{ active: pageMode === 'single' }"
            :aria-pressed="pageMode === 'single'"
            :aria-label="$t('app.headerAria.pageSingle')"
            @click="$emit('change-page-mode', 'single')"
          >
            <svg class="ghost-btn-icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="7" y="5" width="10" height="14" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.8" />
            </svg>
          </button>
          <button
            type="button"
            class="ghost-btn page-mode-icon-btn"
            :class="{ active: pageMode === 'double' }"
            :aria-pressed="pageMode === 'double'"
            :aria-label="$t('app.headerAria.pageSpread')"
            @click="$emit('change-page-mode', 'double')"
          >
            <svg class="ghost-btn-icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="4" y="5" width="7" height="14" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.6" />
              <rect x="13" y="5" width="7" height="14" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.6" />
            </svg>
          </button>
        </div>
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
    studyTranslationLanguage: { type: String, default: "ko" },
  },
  computed: {
    reviewLabel() {
      return this.$route && this.$route.path === "/review" ? this.$t("app.nav.dashboard") : this.$t("app.nav.review");
    },
    maskStudyLineLabel() {
      return this.studyTranslationLanguage === "de"
        ? this.$t("app.ebook.maskStudyTranslationDe")
        : this.$t("app.ebook.maskStudyTranslationKo");
    },
    maskStudyLineAria() {
      return this.studyTranslationLanguage === "de"
        ? this.$t("app.ebook.maskStudyTranslationDe")
        : this.$t("app.ebook.maskStudyTranslationKo");
    },
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

.page-mode-label-desktop {
  display: inline-flex;
}

.page-mode-toggle-mobile {
  display: none;
}

.page-mode-icon-btn {
  padding: 0 !important;
  min-width: 34px;
  width: 34px;
}

.page-mode-icon-btn .ghost-btn-icon {
  margin: 0 auto;
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

.study-translation-wrap {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
}

.study-translation-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin: 0;
  font-size: 12px;
  color: var(--c-text-secondary);
  white-space: nowrap;
}

.study-translation-label-text {
  display: none;
}

@media (min-width: 900px) {
  .study-translation-label-text {
    display: inline;
  }
}

.study-translation-select {
  font: inherit;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: var(--c-radius-md);
  border: 1px solid var(--c-border);
  background: var(--c-bg);
  color: var(--c-text-primary);
  cursor: pointer;
  max-width: 140px;
}

.study-translation-select:focus {
  outline: 2px solid var(--c-accent, #3b82f6);
  outline-offset: 1px;
}
</style>
