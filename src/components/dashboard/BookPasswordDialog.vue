<template>
  <transition name="book-password-fade">
    <div
      v-if="open"
      class="book-password-dialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="book-password-title"
      @click.self="$emit('cancel')"
    >
      <form class="book-password-panel" @submit.prevent="submit">
        <h2 id="book-password-title" class="book-password-title">책 열기</h2>
        <p v-if="bookTitle" class="book-password-sub">{{ bookTitle }}</p>
        <p class="book-password-desc">비밀번호를 입력하세요.</p>

        <input
          ref="passwordInput"
          v-model="password"
          class="book-password-input"
          type="password"
          inputmode="numeric"
          autocomplete="off"
          placeholder="비밀번호"
          :aria-invalid="Boolean(error)"
        />
        <p v-if="displayError" class="book-password-error" role="alert">{{ displayError }}</p>

        <div class="book-password-actions">
          <button type="button" class="book-password-btn" @click="$emit('cancel')">
            취소
          </button>
          <button type="submit" class="book-password-btn book-password-btn--primary">
            열기
          </button>
        </div>
      </form>
    </div>
  </transition>
</template>

<script>
export default {
  name: "BookPasswordDialog",
  props: {
    open: { type: Boolean, default: false },
    bookTitle: { type: String, default: "" },
    serverError: { type: String, default: "" },
  },
  data() {
    return {
      password: "",
      error: "",
    };
  },
  computed: {
    displayError() {
      return this.serverError || this.error;
    },
  },
  watch: {
    open(value) {
      if (!value) {
        this.password = "";
        this.error = "";
        return;
      }
      this.error = "";
      this.$nextTick(() => {
        this.$refs.passwordInput?.focus();
      });
    },
    password() {
      this.error = "";
    },
  },
  mounted() {
    document.addEventListener("keydown", this.onKeydown);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.onKeydown);
  },
  methods: {
    onKeydown(e) {
      if (!this.open) return;
      if (e.key === "Escape") this.$emit("cancel");
    },
    submit() {
      if (!this.password.trim()) {
        this.error = "비밀번호를 입력하세요.";
        return;
      }
      this.error = "";
      this.$emit("submit", this.password);
    },
  },
};
</script>

<style scoped>
.book-password-dialog {
  position: fixed;
  inset: 0;
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: rgba(15, 23, 42, 0.45);
}

.book-password-panel {
  width: min(100%, 360px);
  padding: 24px;
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-lg);
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.18);
}

.book-password-title {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: var(--c-text-primary);
}

.book-password-sub {
  margin: 8px 0 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--c-text-secondary);
}

.book-password-desc {
  margin: 12px 0 0;
  font-size: 13px;
  color: var(--c-text-muted);
}

.book-password-input {
  display: block;
  width: 100%;
  margin-top: 16px;
  padding: 10px 12px;
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-md);
  background: var(--c-bg);
  color: var(--c-text-primary);
  font-size: 16px;
}

.book-password-input:focus {
  outline: 2px solid var(--c-blue-mid);
  outline-offset: 1px;
}

.book-password-error {
  margin: 8px 0 0;
  font-size: 12px;
  color: #c0392b;
}

.book-password-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 20px;
}

.book-password-btn {
  padding: 8px 14px;
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-md);
  background: var(--c-surface);
  color: var(--c-text-secondary);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}

.book-password-btn--primary {
  background: var(--c-blue);
  border-color: var(--c-blue);
  color: #fff;
}

.book-password-fade-enter-active,
.book-password-fade-leave-active {
  transition: opacity 0.2s ease;
}

.book-password-fade-enter,
.book-password-fade-leave-to {
  opacity: 0;
}
</style>
