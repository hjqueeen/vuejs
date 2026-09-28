<template>
  <section v-if="latest || attempts.length" class="probe-score">
    <div v-if="latest" class="probe-score-summary">
      <div class="probe-score-main">
        <p class="probe-score-label">최근 채점</p>
        <p class="probe-score-pct">
          {{ latest.scorePercent }}%
          <span class="probe-score-pts"
            >({{ formatPts(latest.scorePoints) }} / {{ latest.scoreMax }}점)</span
          >
        </p>
        <p class="probe-score-meta">
          {{ formatWhen(latest.submittedAt) }} · 작성
          {{ latest.answeredCount }}/{{ latest.totalCount }}
        </p>
      </div>
      <ul class="probe-score-marks">
        <li class="ok">잘함 {{ latest.markOk }}</li>
        <li class="partial">보완 {{ latest.markPartial }}</li>
        <li class="wrong">다시 {{ latest.markWrong }}</li>
        <li class="empty">미채점 {{ latest.markEmpty }}</li>
      </ul>
    </div>

    <div v-if="attempts.length" class="probe-history">
      <h3 class="probe-history-title">풀이 기록</h3>
      <ol class="probe-history-list">
        <li v-for="(a, idx) in attempts" :key="a.id" class="probe-history-item">
          <div class="probe-history-row">
            <span class="probe-history-idx">#{{ attempts.length - idx }}</span>
            <span class="probe-history-pct">{{ a.scorePercent }}%</span>
            <span class="probe-history-detail">
              {{ formatPts(a.scorePoints) }}/{{ a.scoreMax }} · ✓{{ a.markOk }}
              △{{ a.markPartial }} ✗{{ a.markWrong }}
            </span>
            <span class="probe-history-when">{{ formatWhen(a.submittedAt) }}</span>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script>
export default {
  name: "FlashcardProbeScorePanel",
  props: {
    latest: { type: Object, default: null },
    attempts: { type: Array, default: () => [] },
  },
  methods: {
    formatPts(n) {
      const v = Number(n) || 0;
      return Number.isInteger(v) ? String(v) : v.toFixed(1);
    },
    formatWhen(iso) {
      if (!iso) return "";
      try {
        const d = new Date(iso);
        if (Number.isNaN(d.getTime())) return "";
        return d.toLocaleString();
      } catch {
        return "";
      }
    },
  },
};
</script>

<style scoped>
.probe-score {
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px dashed var(--c-border);
}

.probe-score-summary {
  display: flex;
  flex-wrap: wrap;
  gap: 14px 20px;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 14px;
}

.probe-score-label {
  margin: 0 0 2px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--c-text-muted);
}

.probe-score-pct {
  margin: 0;
  font-size: 28px;
  font-weight: 800;
  line-height: 1.15;
  color: var(--c-teal);
}

.probe-score-pts {
  font-size: 14px;
  font-weight: 600;
  color: var(--c-text-secondary);
}

.probe-score-meta {
  margin: 4px 0 0;
  font-size: 12px;
  color: var(--c-text-muted);
}

.probe-score-marks {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px 12px;
  font-size: 12px;
  font-weight: 700;
}

.probe-score-marks .ok {
  color: var(--c-teal);
}
.probe-score-marks .partial {
  color: #c2410c;
}
.probe-score-marks .wrong {
  color: #dc2626;
}
.probe-score-marks .empty {
  color: var(--c-text-muted);
}

.probe-history-title {
  margin: 0 0 8px;
  font-size: 13px;
  font-weight: 700;
  color: var(--c-text-primary);
}

.probe-history-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 220px;
  overflow: auto;
}

.probe-history-item {
  padding: 8px 10px;
  border: 1px solid var(--c-border);
  border-radius: 10px;
  background: var(--c-bg, #fff);
}

.probe-history-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 10px;
  font-size: 12px;
}

.probe-history-idx {
  font-weight: 700;
  color: var(--c-text-muted);
}

.probe-history-pct {
  font-weight: 800;
  color: var(--c-teal);
  min-width: 48px;
}

.probe-history-detail {
  color: var(--c-text-secondary);
  flex: 1;
  min-width: 120px;
}

.probe-history-when {
  color: var(--c-text-muted);
  font-size: 11px;
}
</style>
