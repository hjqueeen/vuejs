<template>
  <section class="probe-answer">
    <div class="probe-answer-head">
      <h3 class="probe-answer-title">Meine Antwort</h3>
      <span class="probe-answer-status" :class="statusClass">{{ statusLabel }}</span>
    </div>
    <label class="probe-answer-label" :for="inputId">
      독일어로 답을 적고 저장하세요. 수정·삭제도 가능합니다
      <template v-if="cloudReady"> (로컬 + 클라우드)</template>
      <template v-else> (이 기기 로컬)</template>
    </label>
    <textarea
      :id="inputId"
      ref="textarea"
      v-model="draft"
      class="probe-answer-input"
      rows="5"
      placeholder="Hier antworten…"
      :disabled="saving"
      @input="onInput"
      @blur="onBlur"
    ></textarea>
    <div class="probe-answer-actions">
      <button
        type="button"
        class="probe-save-btn"
        :disabled="saving || !dirty"
        @click="saveNow"
      >
        {{ saving ? "저장 중…" : hasSaved ? "수정 저장" : "저장" }}
      </button>
      <button
        type="button"
        class="probe-clear-btn"
        :disabled="saving || (!draft.trim() && !hasSaved)"
        @click="clearAnswer"
      >
        삭제
      </button>
    </div>
    <p v-if="errorMsg" class="probe-answer-error">{{ errorMsg }}</p>
    <p v-else-if="savedAtLabel" class="probe-answer-meta">{{ savedAtLabel }}</p>
  </section>
</template>

<script>
import {
  getProbeAnswerEntry,
  setProbeAnswer,
  deleteProbeAnswer,
} from "@/utils/flashcardProbeAnswers";
import { isSupabaseConfigured } from "@/services/supabaseClient";

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
      savedAt: "",
      dirty: false,
      justSaved: false,
      saving: false,
      errorMsg: "",
      statusTimer: null,
    };
  },
  computed: {
    inputId() {
      return `probe-answer-${this.cardId}`;
    },
    cloudReady() {
      return isSupabaseConfigured;
    },
    hasSaved() {
      return Boolean(this.savedText.trim());
    },
    statusClass() {
      if (this.saving) return "is-saving";
      if (this.errorMsg) return "is-error";
      if (this.justSaved) return "is-saved";
      if (this.dirty) return "is-dirty";
      if (this.hasSaved) return "is-saved";
      return "is-empty";
    },
    statusLabel() {
      if (this.saving) return "저장 중…";
      if (this.errorMsg) return "저장 실패";
      if (this.justSaved) return this.cloudReady ? "클라우드 저장됨" : "저장됨";
      if (this.dirty) return "수정됨 · 미저장";
      if (this.hasSaved) return "저장됨";
      return "미작성";
    },
    savedAtLabel() {
      if (!this.savedAt || !this.hasSaved) return "";
      try {
        const d = new Date(this.savedAt);
        if (Number.isNaN(d.getTime())) return "";
        return `마지막 저장: ${d.toLocaleString()}`;
      } catch {
        return "";
      }
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
    this.clearStatusTimer();
    if (this.dirty && !this.saving) {
      this.persist();
    }
  },
  methods: {
    load() {
      this.clearStatusTimer();
      const entry = getProbeAnswerEntry(this.bookId, this.cardId);
      this.draft = entry?.text || "";
      this.savedText = this.draft;
      this.savedAt = entry?.updatedAt || "";
      this.dirty = false;
      this.justSaved = false;
      this.saving = false;
      this.errorMsg = "";
    },
    onInput() {
      this.dirty = this.draft !== this.savedText;
      this.justSaved = false;
      this.errorMsg = "";
    },
    onBlur() {
      // 입력 중에는 저장하지 않음. 포커스를 뺄 때만 자동 저장.
      if (this.dirty) this.saveNow();
    },
    saveNow() {
      return this.persist();
    },
    async persist() {
      if (this.saving) return null;
      const next = this.draft;
      if (next === this.savedText && !this.dirty) return null;

      this.saving = true;
      this.errorMsg = "";
      try {
        const result = await setProbeAnswer(this.bookId, this.cardId, next);
        this.savedText = next.trim() ? next : "";
        this.savedAt = result.entry?.updatedAt || (result.deleted ? "" : this.savedAt);
        this.dirty = false;
        this.justSaved = true;
        if (!result.remoteSkipped && !result.remoteOk) {
          this.errorMsg = `로컬은 저장됨 · 클라우드 실패: ${result.error || "알 수 없음"}`;
        }
        this.$emit("saved", {
          cardId: this.cardId,
          text: this.savedText,
          answered: Boolean(this.savedText.trim()),
          deleted: result.deleted,
          remoteOk: result.remoteOk,
        });
        this.clearStatusTimer();
        this.statusTimer = setTimeout(() => {
          this.justSaved = false;
        }, 1800);
        return result;
      } finally {
        this.saving = false;
      }
    },
    async clearAnswer() {
      if (!this.draft.trim() && !this.hasSaved) return;
      if (!window.confirm("이 문항의 답안을 삭제할까요?")) return;
      this.draft = "";
      this.dirty = true;
      this.saving = true;
      this.errorMsg = "";
      try {
        const result = await deleteProbeAnswer(this.bookId, this.cardId);
        this.savedText = "";
        this.savedAt = "";
        this.dirty = false;
        this.justSaved = true;
        if (!result.remoteSkipped && !result.remoteOk) {
          this.errorMsg = `로컬은 삭제됨 · 클라우드 실패: ${result.error || "알 수 없음"}`;
        }
        this.$emit("saved", {
          cardId: this.cardId,
          text: "",
          answered: false,
          deleted: true,
          remoteOk: result.remoteOk,
        });
        this.clearStatusTimer();
        this.statusTimer = setTimeout(() => {
          this.justSaved = false;
        }, 1800);
      } finally {
        this.saving = false;
      }
    },
    clearStatusTimer() {
      if (this.statusTimer) {
        clearTimeout(this.statusTimer);
        this.statusTimer = null;
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

.probe-answer-status.is-saving {
  color: var(--c-blue-mid);
}

.probe-answer-status.is-error {
  color: #b91c1c;
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

.probe-answer-input:disabled {
  opacity: 0.7;
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

.probe-save-btn:disabled {
  opacity: 0.45;
  cursor: default;
}

.probe-clear-btn {
  border: 1px solid #f1c0c0;
  background: transparent;
  color: #b91c1c;
}

.probe-clear-btn:disabled {
  opacity: 0.4;
  cursor: default;
}

.probe-answer-error {
  margin: 8px 0 0;
  font-size: 11px;
  color: #b91c1c;
  line-height: 1.4;
}

.probe-answer-meta {
  margin: 8px 0 0;
  font-size: 11px;
  color: var(--c-text-muted);
}
</style>
