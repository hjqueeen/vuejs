<template>
  <div class="day-shell">
    <aside class="day-shell__aside">
      <DayVocabNav
        :days="navDays"
        :active-date="activeDate"
        @select-date="onSelectDate"
      />
    </aside>

    <div class="day-shell__main">
      <header class="day-shell__toolbar">
        <div class="day-shell__lang" role="group" aria-label="공부할 언어">
          <button
            v-for="mode in studyModes"
            :key="mode.id"
            type="button"
            class="day-shell__lang-btn"
            :class="{ 'day-shell__lang-btn--active': studyMode === mode.id }"
            @click="onSelectMode(mode.id)"
          >
            {{ mode.label }}
          </button>
        </div>
        <div class="day-shell__tabs" role="tablist" aria-label="보기 전환">
          <button
            type="button"
            role="tab"
            class="day-shell__tab"
            :class="{ 'day-shell__tab--active': viewMode === 'study' }"
            :aria-selected="viewMode === 'study'"
            @click="viewMode = 'study'"
          >
            단어장
          </button>
          <button
            type="button"
            role="tab"
            class="day-shell__tab"
            :class="{ 'day-shell__tab--active': viewMode === 'practice' }"
            :aria-selected="viewMode === 'practice'"
            @click="viewMode = 'practice'"
          >
            연습
          </button>
        </div>
        <p class="day-shell__pair">{{ currentPairLabel }}</p>
      </header>

      <template v-if="dayData">
        <DayVocabBody
          v-if="viewMode === 'study'"
          :day="dayData.day"
          :date="dayData.date"
          :words="dayData.words"
          :study-mode="studyMode"
          @check-change="onCheckChange"
        />
        <DayVocabPractice
          v-else
          :words="dayData.words"
          :study-mode="studyMode"
        />
      </template>
      <p v-else class="day-shell__empty">이 언어에 등록된 DAY가 없습니다.</p>
    </div>
  </div>
</template>

<script>
import DayVocabBody from "@/components/vocab-day/DayVocabBody.vue";
import DayVocabNav from "@/components/vocab-day/DayVocabNav.vue";
import DayVocabPractice from "@/components/vocab-day/DayVocabPractice.vue";
import {
  STUDY_MODES,
  getStudyMode,
  listDaysForMode,
  findDayByDate,
} from "@/data/dayVocabSample.js";

const STORAGE_MODE = "day-vocab-study-mode";
const STORAGE_DATE = "day-vocab-active-date";
const STORAGE_VIEW = "day-vocab-view-mode";
/** { [wordId]: [boolean, boolean] } */
const STORAGE_CHECKS = "day-vocab-checks";

function cloneDay(day) {
  return day ? JSON.parse(JSON.stringify(day)) : null;
}

function loadChecksMap() {
  try {
    const raw = localStorage.getItem(STORAGE_CHECKS);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function applySavedChecks(day, checksMap) {
  if (!day?.words) return day;
  day.words.forEach((word) => {
    const saved = checksMap[word.id];
    if (Array.isArray(saved) && saved.length >= 2) {
      word.checks = [!!saved[0], !!saved[1]];
    }
  });
  return day;
}

export default {
  name: "DayVocabPreviewView",
  components: { DayVocabBody, DayVocabNav, DayVocabPractice },
  data() {
    const savedMode = localStorage.getItem(STORAGE_MODE);
    const studyMode =
      STUDY_MODES.some((m) => m.id === savedMode) ? savedMode : "de-ko";
    const days = listDaysForMode(studyMode);
    const savedDate = localStorage.getItem(STORAGE_DATE);
    const activeDate =
      (savedDate && days.some((d) => d.date === savedDate) && savedDate) ||
      days[0]?.date ||
      "";
    const savedView = localStorage.getItem(STORAGE_VIEW);
    const viewMode = savedView === "practice" ? "practice" : "study";

    return {
      studyModes: STUDY_MODES,
      studyMode,
      activeDate,
      viewMode,
      /** mode → date → mutable day clone */
      dayCache: {},
      checksMap: loadChecksMap(),
    };
  },
  computed: {
    navDays() {
      return listDaysForMode(this.studyMode).map((d) => ({
        day: d.day,
        date: d.date,
        words: this.getCachedDay(d.date)?.words || d.words,
      }));
    },
    dayData() {
      if (!this.activeDate) return null;
      return this.getCachedDay(this.activeDate);
    },
    currentPairLabel() {
      return getStudyMode(this.studyMode).pairLabel;
    },
  },
  watch: {
    studyMode(mode) {
      localStorage.setItem(STORAGE_MODE, mode);
    },
    activeDate(date) {
      if (date) localStorage.setItem(STORAGE_DATE, date);
    },
    viewMode(mode) {
      localStorage.setItem(STORAGE_VIEW, mode);
    },
  },
  methods: {
    cacheKey(mode, date) {
      return `${mode}::${date}`;
    },
    persistChecks() {
      try {
        localStorage.setItem(STORAGE_CHECKS, JSON.stringify(this.checksMap));
      } catch {
        /* quota / private mode */
      }
    },
    getCachedDay(date) {
      const key = this.cacheKey(this.studyMode, date);
      if (!this.dayCache[key]) {
        const raw = findDayByDate(this.studyMode, date);
        const cloned = applySavedChecks(cloneDay(raw), this.checksMap);
        this.$set(this.dayCache, key, cloned);
      }
      return this.dayCache[key];
    },
    onSelectMode(modeId) {
      if (modeId === this.studyMode) return;
      this.studyMode = modeId;
      const days = listDaysForMode(modeId);
      this.activeDate = days[0]?.date || "";
    },
    onSelectDate(date) {
      this.activeDate = date;
    },
    onCheckChange({ wordId, checkIndex, checked }) {
      const day = this.dayData;
      if (!day) return;
      const word = day.words.find((w) => w.id === wordId);
      if (!word || !Array.isArray(word.checks)) return;
      this.$set(word.checks, checkIndex, checked);
      const next = Array.isArray(this.checksMap[wordId])
        ? [...this.checksMap[wordId]]
        : [false, false];
      next[checkIndex] = checked;
      this.$set(this.checksMap, wordId, next);
      this.persistChecks();
    },
  },
};
</script>

<style scoped>
.day-shell {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  min-height: calc(100vh - 56px);
  background: var(--c-bg);
}

.day-shell__aside {
  border-right: 1px solid var(--c-border);
  background: var(--c-surface);
  position: sticky;
  top: 0;
  align-self: start;
  max-height: calc(100vh - 56px);
  overflow-y: auto;
}

.day-shell__main {
  min-width: 0;
  padding-bottom: 48px;
}

.day-shell__toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px 16px;
  padding: 14px 22px 0;
  max-width: 720px;
  margin: 0 auto;
}

.day-shell__lang {
  display: inline-flex;
  padding: 3px;
  background: var(--c-border-subtle);
  border-radius: var(--c-radius-pill);
  border: 1px solid var(--c-border);
}

.day-shell__lang-btn {
  appearance: none;
  border: none;
  background: transparent;
  padding: 6px 14px;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--c-text-secondary);
  border-radius: var(--c-radius-pill);
  cursor: pointer;
  line-height: 1.2;
}

.day-shell__lang-btn--active {
  background: var(--c-surface);
  color: var(--c-blue);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
}

.day-shell__tabs {
  display: inline-flex;
  gap: 4px;
}

.day-shell__tab {
  appearance: none;
  border: 1px solid var(--c-border);
  background: transparent;
  padding: 6px 12px;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--c-text-secondary);
  border-radius: var(--c-radius-sm);
  cursor: pointer;
}

.day-shell__tab--active {
  border-color: var(--c-blue-mid);
  background: var(--c-blue-light);
  color: var(--c-blue);
}

.day-shell__pair {
  margin: 0;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--c-text-muted);
  margin-left: auto;
}

.day-shell__empty {
  max-width: 720px;
  margin: 40px auto;
  padding: 0 22px;
  color: var(--c-text-muted);
}

@media (max-width: 720px) {
  .day-shell {
    grid-template-columns: 1fr;
  }

  .day-shell__aside {
    position: static;
    max-height: none;
    border-right: none;
    border-bottom: 1px solid var(--c-border);
  }
}
</style>
