<template>
  <section v-if="feedback && (feedback.modelDe || feedback.commentKo)" class="probe-fb">
    <div class="probe-fb-head">
      <h3 class="probe-fb-title">Feedback</h3>
      <span v-if="markLabel" class="probe-fb-mark" :class="`mark-${feedback.mark}`">
        {{ markLabel }}
      </span>
    </div>

    <div v-if="hasNoteSource" class="probe-fb-block probe-fb-source">
      <p class="probe-fb-label">수업 노트</p>
      <p v-if="feedback.noteKo" class="probe-fb-text note-ko">{{ feedback.noteKo }}</p>
      <p v-if="feedback.noteDe" class="probe-fb-text note-de">{{ feedback.noteDe }}</p>
      <button
        v-if="feedback.noteChapterId"
        type="button"
        class="probe-fb-note-btn"
        @click="$emit('open-note', feedback.noteChapterId)"
      >
        노트에서 이 부분 보기 →
      </button>
    </div>

    <div v-if="studentAnswer" class="probe-fb-block">
      <p class="probe-fb-label">Meine Antwort</p>
      <p class="probe-fb-text student">{{ studentAnswer }}</p>
    </div>

    <div v-if="feedback.modelDe" class="probe-fb-block">
      <p class="probe-fb-label">Musterlösung</p>
      <p class="probe-fb-text model">{{ feedback.modelDe }}</p>
    </div>

    <div v-if="feedback.commentKo" class="probe-fb-block">
      <p class="probe-fb-label">Kommentar</p>
      <p class="probe-fb-text comment">{{ feedback.commentKo }}</p>
    </div>
  </section>
</template>

<script>
const MARK_LABELS = {
  ok: "✓ 잘함",
  partial: "△ 보완",
  wrong: "✗ 다시",
  empty: "미작성",
};

export default {
  name: "FlashcardProbeFeedback",
  props: {
    feedback: { type: Object, default: null },
    studentAnswer: { type: String, default: "" },
  },
  computed: {
    markLabel() {
      if (!this.feedback?.mark) return "";
      return MARK_LABELS[this.feedback.mark] || this.feedback.mark;
    },
    hasNoteSource() {
      return Boolean(this.feedback?.noteKo || this.feedback?.noteDe);
    },
  },
};
</script>

<style scoped>
.probe-fb {
  margin-top: 8px;
  padding: 14px;
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-lg);
  border-left: 4px solid var(--c-blue-mid);
}

.probe-fb-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 10px;
}

.probe-fb-title {
  margin: 0;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--c-blue-mid);
}

.probe-fb-mark {
  font-size: 11px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 999px;
  background: var(--c-border-subtle);
  color: var(--c-text-secondary);
}

.probe-fb-mark.mark-ok {
  background: rgba(15, 118, 110, 0.12);
  color: var(--c-teal);
}

.probe-fb-mark.mark-partial {
  background: rgba(194, 65, 12, 0.12);
  color: #c2410c;
}

.probe-fb-mark.mark-wrong {
  background: rgba(220, 38, 38, 0.12);
  color: #dc2626;
}

.probe-fb-block + .probe-fb-block {
  margin-top: 10px;
}

.probe-fb-source {
  padding: 10px 12px;
  border-radius: 10px;
  background: rgba(45, 95, 168, 0.06);
}

.probe-fb-label {
  margin: 0 0 4px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--c-text-muted);
}

.probe-fb-text {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  white-space: pre-wrap;
}

.probe-fb-text.student {
  color: var(--c-text-secondary);
}

.probe-fb-text.model {
  color: var(--c-text-primary);
  font-weight: 500;
}

.probe-fb-text.comment {
  color: var(--c-text-primary);
}

.probe-fb-text.note-ko {
  font-weight: 600;
  color: var(--c-text-primary);
}

.probe-fb-text.note-de {
  margin-top: 2px;
  font-size: 12px;
  color: var(--c-text-secondary);
}

.probe-fb-note-btn {
  margin-top: 8px;
  border: none;
  background: none;
  padding: 0;
  color: var(--c-blue-mid);
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: underline;
}
</style>
