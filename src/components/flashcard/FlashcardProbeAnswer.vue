<template>
  <section class="probe-answer">
    <div class="probe-answer-head">
      <h3 class="probe-answer-title">Meine Antwort</h3>
      <span class="probe-answer-status" :class="statusClass">{{ statusLabel }}</span>
    </div>
    <label class="probe-answer-label" :for="inputId">
      독일어로 답을 적어 보세요 (로컬에만 저장됩니다)
    </label>
    <textarea
      :id="inputId"
      ref="textarea"
      v-model="draft"
      class="probe-answer-input"
      rows="5"
      placeholder="Hier antworten…"
      @input="onInput"
      @blur="saveNow"
    ></textarea>
    <div class="probe-answer-actions">
      <button type="button" class="probe-save-btn" @click="saveNow">저장</button>
      <button
        type="button"
        class="probe-clear-btn"
        :disabled="!draft.trim()"
        @click="clearAnswer"
      >
        지우기
      </button>
    </div>
  </section>
</template>

<script>
import {
  getProbeAnswer,
  setProbeAnswer,
} from "@/utils/flashcardProbeAnswers";

export default {
  name: "FlashcardProbeAnswer",
  props: {
    bookId: { type: String, required: true },
    cardId: { type: String, required: true },
  },
  data() {
    return {
      draft: "",
      savedText: "",
      dirty: false,
      justSaved: false,
      saveTimer: null,
    };
  },
  computed: {
    inputId() {
      return `probe-answer-${this.cardId}`;
    },
    statusClass() {
      if (this.justSaved) return "is-saved";
      if (this.dirty) return "is-dirty";
      if (this.savedText.trim()) return "is-saved";
      return "is-empty";
    },
    statusLabel() {
      if (this.justSaved) return "저장됨";
      if (this.dirty) return "저장 안 됨";
      if (this.savedText.trim()) return "저장됨";
      return "미작성";
    },
  },
  watch: {
    cardId: {
      immediate: true,
      handler() {
        this.load();
      },
    },
    bookId() {
      this.load();
    },
  },
  beforeDestroy() {
    this.clearTimer();
    if (this.dirty) this.persist();
  },
  methods: {
    load() {
      this.clearTimer();
      const text = getProbeAnswer(this.bookId, this.cardId);
      this.draft = text;
      this.savedText = text;
      this.dirty = false;
      this.justSaved = false;
    },
    onInput() {
      this.dirty = this.draft !== this.savedText;
      this.justSaved = false;
      this.clearTimer();
      this.saveTimer = setTimeout(() => this.persist(), 600);
    },
    saveNow() {
      this.clearTimer();
      this.persist();
    },
    persist() {
      setProbeAnswer(this.bookId, this.cardId, this.draft);
      this.savedText = this.draft;
      this.dirty = false;
      this.justSaved = true;
      this.$emit("saved", {
        cardId: this.cardId,
        text: this.draft,
        answered: Boolean(this.draft.trim()),
      });
      setTimeout(() => {
        this.justSaved = false;
      }, 1500);
    },
    clearAnswer() {
      this.draft = "";
      this.clearTimer();
      this.persist();
    },
    clearTimer() {
      if (this.saveTimer) {
        clearTimeout(this.saveTimer);
        this.saveTimer = null;
      }
    },
  },
};
</script>

<style scoped>
.probe-answer {
  margin-top: 4px;
  padding: 14px 14px 12px;
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-lg);
  border-left: 4px solid var(--c-teal);
}

.probe-answer-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 8px;
}

.probe-answer-title {
  margin: 0;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--c-teal);
}

.probe-answer-status {
  font-size: 11px;
  font-weight: 600;
  color: var(--c-text-muted);
}

.probe-answer-status.is-dirty {
  color: #c2410c;
}

.probe-answer-status.is-saved {
  color: var(--c-teal);
}

.probe-answer-label {
  display: block;
  margin-bottom: 8px;
  font-size: 12px;
  color: var(--c-text-secondary);
}

.probe-answer-input {
  display: block;
  width: 100%;
  box-sizing: border-box;
  min-height: 110px;
  padding: 10px 12px;
  border: 1px solid var(--c-border);
  border-radius: 10px;
  background: var(--c-bg, #fff);
  color: var(--c-text-primary);
  font: inherit;
  font-size: 14px;
  line-height: 1.5;
  resize: vertical;
}

.probe-answer-input:focus {
  outline: none;
  border-color: var(--c-blue-mid);
  box-shadow: 0 0 0 3px rgba(45, 95, 168, 0.15);
}

.probe-answer-actions {
  display: flex;
  gap: 8px;
  margin-top: 10px;
}

.probe-save-btn,
.probe-clear-btn {
  border-radius: 999px;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
}

.probe-save-btn {
  border: none;
  background: var(--c-teal);
  color: #fff;
}

.probe-clear-btn {
  border: 1px solid var(--c-border);
  background: transparent;
  color: var(--c-text-secondary);
}

.probe-clear-btn:disabled {
  opacity: 0.4;
  cursor: default;
}
</style>
