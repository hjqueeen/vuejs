<template>
  <section class="day-vocab">
    <header class="day-vocab__header">
      <div class="day-vocab__title-row">
        <h1 class="day-vocab__title">
          <span class="day-vocab__day-label">DAY</span>
          <span class="day-vocab__day-num">{{ paddedDay }}</span>
        </h1>
        <time v-if="date" class="day-vocab__date" :datetime="date">{{ date }}</time>
      </div>
      <p class="day-vocab__meta">{{ pairLabel }} · {{ words.length }}단어</p>
      <p v-if="subtitle" class="day-vocab__subtitle">{{ subtitle }}</p>
    </header>

    <div class="day-vocab__list">
      <DayVocabEntry
        v-for="word in words"
        :key="word.id"
        :word="word"
        :study-mode="studyMode"
        @check-change="onCheckChange"
      />
    </div>
  </section>
</template>

<script>
import DayVocabEntry from "@/components/vocab-day/DayVocabEntry.vue";
import { getStudyMode } from "@/data/dayVocabSample.js";

export default {
  name: "DayVocabBody",
  components: { DayVocabEntry },
  props: {
    day: {
      type: Number,
      required: true,
    },
    /** 등록일 YYYY-MM-DD */
    date: {
      type: String,
      default: "",
    },
    words: {
      type: Array,
      default: () => [],
    },
    subtitle: {
      type: String,
      default: "",
    },
    /** de-ko | en-de */
    studyMode: {
      type: String,
      default: "de-ko",
    },
  },
  computed: {
    paddedDay() {
      return String(this.day).padStart(2, "0");
    },
    pairLabel() {
      return getStudyMode(this.studyMode).pairLabel;
    },
  },
  methods: {
    onCheckChange(payload) {
      this.$emit("check-change", payload);
    },
  },
};
</script>

<style scoped>
.day-vocab {
  --vd-gold: #e0b13a;
  --vd-blue: #1e3a6e;

  max-width: 720px;
  margin: 0 auto;
  padding: 28px 22px 48px;
  background: var(--c-surface);
}

.day-vocab__header {
  margin-bottom: 6px;
  padding-bottom: 4px;
}

.day-vocab__title-row {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 10px 14px;
}

.day-vocab__title {
  margin: 0;
  display: inline-flex;
  align-items: baseline;
  gap: 12px;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1;
}

.day-vocab__date {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--c-text-muted);
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.02em;
}

.day-vocab__day-label {
  color: var(--vd-blue);
}

.day-vocab__day-num {
  color: var(--vd-gold);
  font-size: 2.35rem;
  font-variant-numeric: tabular-nums;
  border-bottom: 3px solid var(--vd-gold);
  padding-bottom: 2px;
  line-height: 1;
}

.day-vocab__meta {
  margin: 10px 0 0;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--c-text-muted);
  letter-spacing: 0.02em;
}

.day-vocab__subtitle {
  margin: 4px 0 0;
  font-size: 0.85rem;
  color: var(--c-text-secondary);
}

.day-vocab__list {
  margin-top: 8px;
  border-top: 1px solid #e5e1d8;
}
</style>
