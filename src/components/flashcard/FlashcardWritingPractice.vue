<template>
  <section v-if="practice && practice.attemptDe" class="fc-writing">
    <h3 class="fc-writing-title">Schreibübung</h3>

    <div class="fc-writing-block">
      <p class="fc-writing-label">Mein Versuch</p>
      <p class="fc-writing-attempt">{{ practice.attemptDe }}</p>
    </div>

    <ul v-if="practice.feedback && practice.feedback.length" class="fc-feedback-list">
      <li v-for="(item, idx) in practice.feedback" :key="idx" class="fc-feedback-item">
        <p class="fc-feedback-row">
          <span class="mark">{{ item.mark }}</span>
          <span class="arrow">→</span>
          <span class="fix">{{ item.fix }}</span>
        </p>
        <p v-if="item.noteKo" class="fc-feedback-note">{{ item.noteKo }}</p>
      </li>
    </ul>

    <p v-if="practice.practicedAt" class="fc-practiced-at">{{ practice.practicedAt }}</p>
  </section>
</template>

<script>
export default {
  name: "FlashcardWritingPractice",
  props: {
    practice: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style scoped>
.fc-writing {
  margin-top: 16px;
  padding: 18px 16px;
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-lg);
  border-left: 4px solid var(--c-teal);
}

@media (min-width: 768px) {
  .fc-writing {
    padding: 22px 24px;
  }

  .fc-writing-attempt,
  .fc-feedback-row {
    font-size: 14px;
  }
}

.fc-writing-title {
  margin: 0 0 14px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--c-teal);
}

.fc-writing-block {
  margin-bottom: 14px;
}

.fc-writing-label {
  margin: 0 0 8px;
  font-size: 11px;
  font-weight: 700;
  color: var(--c-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.fc-writing-attempt {
  margin: 0;
  font-size: 14px;
  line-height: 1.55;
  color: var(--c-text-secondary);
  white-space: pre-line;
}

.fc-feedback-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.fc-feedback-item {
  padding: 10px 12px;
  background: var(--c-amber-light);
  border-radius: var(--c-radius-sm);
  border-left: 3px solid var(--c-amber);
}

.fc-feedback-row {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 6px;
}

.mark {
  color: #b42318;
  text-decoration: line-through;
  text-decoration-color: rgba(180, 35, 24, 0.45);
}

.arrow {
  color: var(--c-text-muted);
  font-weight: 700;
}

.fix {
  color: var(--c-text-primary);
  font-weight: 600;
}

.fc-feedback-note {
  margin: 6px 0 0;
  font-size: 12px;
  color: var(--c-text-muted);
  line-height: 1.45;
}

.fc-practiced-at {
  margin: 12px 0 0;
  font-size: 11px;
  color: var(--c-text-muted);
}
</style>
