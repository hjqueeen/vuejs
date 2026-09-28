<template>
  <section v-if="rows.length" class="probe-mgr">
    <div class="probe-mgr-head">
      <h3 class="probe-mgr-title">내 답안 관리</h3>
      <span class="probe-mgr-count">{{ rows.length }}문항</span>
    </div>
    <ul class="probe-mgr-list">
      <li v-for="row in rows" :key="row.cardId" class="probe-mgr-item">
        <div class="probe-mgr-item-top">
          <button type="button" class="probe-mgr-q" @click="$emit('open-card', row.cardId)">
            <span class="probe-mgr-no">{{ row.index }}</span>
            <span class="probe-mgr-q-text">{{ row.question }}</span>
          </button>
          <div class="probe-mgr-item-actions">
            <button
              type="button"
              class="probe-mgr-btn"
              :aria-expanded="editingId === row.cardId"
              @click="toggleEdit(row)"
            >
              {{ editingId === row.cardId ? "접기" : "수정" }}
            </button>
            <button
              type="button"
              class="probe-mgr-btn danger"
              :disabled="busyId === row.cardId"
              @click="remove(row)"
            >
              삭제
            </button>
          </div>
        </div>
        <p v-if="editingId !== row.cardId" class="probe-mgr-preview">{{ row.text }}</p>
        <div v-else class="probe-mgr-edit">
          <textarea
            v-model="editDraft"
            class="probe-mgr-textarea"
            rows="4"
            :disabled="busyId === row.cardId"
          ></textarea>
          <div class="probe-mgr-edit-actions">
            <button
              type="button"
              class="probe-mgr-btn primary"
              :disabled="busyId === row.cardId || !editDirty"
              @click="saveEdit(row)"
            >
              {{ busyId === row.cardId ? "저장 중…" : "저장" }}
            </button>
            <button
              type="button"
              class="probe-mgr-btn"
              :disabled="busyId === row.cardId"
              @click="cancelEdit"
            >
              취소
            </button>
          </div>
        </div>
      </li>
    </ul>
    <p v-if="message" class="probe-mgr-msg" :class="{ err: messageIsError }">{{ message }}</p>
  </section>
</template>

<script>
import {
  listProbeAnswers,
  setProbeAnswer,
  deleteProbeAnswer,
} from "@/utils/flashcardProbeAnswers";

export default {
  name: "FlashcardProbeAnswerManager",
  props: {
    bookId: { type: String, required: true },
    cards: { type: Array, default: () => [] },
    /** parent answerTick — 목록 새로고침용 */
    refreshKey: { type: [Number, String], default: 0 },
  },
  data() {
    return {
      editingId: null,
      editDraft: "",
      editOriginal: "",
      busyId: null,
      message: "",
      messageIsError: false,
    };
  },
  computed: {
    rows() {
      void this.refreshKey;
      const listed = listProbeAnswers(this.bookId, this.cards);
      return listed.map((row) => {
        const idx = this.cards.findIndex((c) => c.id === row.cardId);
        const card = row.card;
        return {
          ...row,
          index: idx >= 0 ? idx + 1 : "·",
          question:
            card?.termDe ||
            card?.term ||
            card?.termKo ||
            row.cardId,
        };
      });
    },
    editDirty() {
      return this.editDraft !== this.editOriginal;
    },
  },
  methods: {
    toggleEdit(row) {
      if (this.editingId === row.cardId) {
        this.cancelEdit();
        return;
      }
      this.editingId = row.cardId;
      this.editDraft = row.text;
      this.editOriginal = row.text;
      this.message = "";
    },
    cancelEdit() {
      this.editingId = null;
      this.editDraft = "";
      this.editOriginal = "";
    },
    async saveEdit(row) {
      if (!this.editDirty) return;
      const text = this.editDraft;
      if (!String(text).trim()) {
        await this.remove(row, { skipConfirm: false });
        return;
      }
      this.busyId = row.cardId;
      this.message = "";
      try {
        const result = await setProbeAnswer(this.bookId, row.cardId, text);
        this.editingId = null;
        this.editDraft = "";
        this.editOriginal = "";
        if (!result.remoteSkipped && !result.remoteOk) {
          this.messageIsError = true;
          this.message = `로컬 저장됨 · 클라우드 실패: ${result.error || ""}`;
        } else {
          this.messageIsError = false;
          this.message = result.remoteOk ? "수정 저장됨 (클라우드)" : "수정 저장됨";
        }
        this.$emit("changed");
      } finally {
        this.busyId = null;
      }
    },
    async remove(row, opts = {}) {
      if (
        !opts.skipConfirm &&
        !window.confirm(`「${row.question}」답안을 삭제할까요?`)
      ) {
        return;
      }
      this.busyId = row.cardId;
      this.message = "";
      try {
        const result = await deleteProbeAnswer(this.bookId, row.cardId);
        if (this.editingId === row.cardId) this.cancelEdit();
        if (!result.remoteSkipped && !result.remoteOk) {
          this.messageIsError = true;
          this.message = `로컬 삭제됨 · 클라우드 실패: ${result.error || ""}`;
        } else {
          this.messageIsError = false;
          this.message = result.remoteOk ? "삭제됨 (클라우드)" : "삭제됨";
        }
        this.$emit("changed");
      } finally {
        this.busyId = null;
      }
    },
  },
};
</script>

<style scoped>
.probe-mgr {
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px dashed var(--c-border);
}

.probe-mgr-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 10px;
}

.probe-mgr-title {
  margin: 0;
  font-size: 13px;
  font-weight: 700;
  color: var(--c-text-primary);
}

.probe-mgr-count {
  font-size: 12px;
  color: var(--c-text-muted);
  font-weight: 600;
}

.probe-mgr-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.probe-mgr-item {
  padding: 10px 12px;
  border: 1px solid var(--c-border);
  border-radius: 12px;
  background: var(--c-bg, #fff);
}

.probe-mgr-item-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
}

.probe-mgr-q {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  border: none;
  background: transparent;
  padding: 0;
  text-align: left;
  cursor: pointer;
  color: inherit;
  font: inherit;
}

.probe-mgr-no {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  border-radius: 999px;
  background: rgba(45, 95, 168, 0.1);
  color: var(--c-blue-mid);
  font-size: 11px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 1px;
}

.probe-mgr-q-text {
  font-size: 13px;
  font-weight: 600;
  line-height: 1.4;
  color: var(--c-text-primary);
}

.probe-mgr-item-actions {
  display: flex;
  flex-shrink: 0;
  gap: 6px;
}

.probe-mgr-btn {
  border: 1px solid var(--c-border);
  border-radius: 999px;
  padding: 4px 10px;
  background: transparent;
  color: var(--c-text-secondary);
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
}

.probe-mgr-btn.primary {
  border: none;
  background: var(--c-teal);
  color: #fff;
}

.probe-mgr-btn.danger {
  border-color: #f1c0c0;
  color: #b91c1c;
}

.probe-mgr-btn:disabled {
  opacity: 0.45;
  cursor: default;
}

.probe-mgr-preview {
  margin: 8px 0 0;
  font-size: 13px;
  line-height: 1.45;
  color: var(--c-text-secondary);
  white-space: pre-wrap;
  word-break: break-word;
}

.probe-mgr-edit {
  margin-top: 8px;
}

.probe-mgr-textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  min-height: 88px;
  padding: 8px 10px;
  border: 1px solid var(--c-border);
  border-radius: 10px;
  background: var(--c-surface);
  color: var(--c-text-primary);
  font: inherit;
  font-size: 13px;
  line-height: 1.45;
  resize: vertical;
}

.probe-mgr-edit-actions {
  display: flex;
  gap: 6px;
  margin-top: 8px;
}

.probe-mgr-msg {
  margin: 10px 0 0;
  font-size: 12px;
  color: var(--c-teal);
  font-weight: 600;
}

.probe-mgr-msg.err {
  color: #b91c1c;
}
</style>
