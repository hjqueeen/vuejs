<template>
  <div class="rand-card">
    <p class="q-num">문제 {{ question.no }}</p>
    <h2 class="q-text">{{ question.question }}</h2>

    <ul v-if="question.choices.length" class="choices">
      <li
        v-for="choice in question.choices"
        :key="choice.key"
        class="choice"
        :class="choiceClass(choice.key)"
        @click="pick(choice.key)"
      >
        <span class="choice-key">{{ choice.key }}</span>
        <span>{{ choice.label }}</span>
      </li>
    </ul>
    <input
      v-else
      v-model="shortInput"
      type="text"
      class="short-input"
      placeholder="답 입력"
      :disabled="submitted"
      @keyup.enter="submitShort"
    />

    <button
      v-if="!question.choices.length"
      type="button"
      class="submit-btn"
      :disabled="!shortInput.trim() || submitted"
      @click="submitShort"
    >
      확인
    </button>

    <div v-if="submitted" class="feedback" :class="{ ok: isCorrect }">
      {{ isCorrect ? "정답!" : `오답 — 정답: ${displayAnswer}` }}
    </div>
    <button v-if="submitted" type="button" class="next-btn" @click="$emit('answered', isCorrect)">
      다음 →
    </button>
  </div>
</template>

<script>
export default {
  name: "QuizRandomCard",
  props: {
    question: { type: Object, required: true },
  },
  data() {
    return {
      selected: "",
      shortInput: "",
      submitted: false,
      isCorrect: false,
    };
  },
  computed: {
    displayAnswer() {
      const q = this.question;
      if (q.type === "mcq") {
        const c = q.choices.find((item) => item.key === q.answer);
        return c ? `${q.answer} ${c.label}` : q.answer;
      }
      return q.answer;
    },
  },
  watch: {
    question() {
      this.selected = "";
      this.shortInput = "";
      this.submitted = false;
      this.isCorrect = false;
    },
  },
  methods: {
    normalize(val) {
      return String(val || "")
        .trim()
        .replace(/\s+/g, "")
        .replace(/○/g, "O")
        .toUpperCase();
    },
    check(userVal) {
      const q = this.question;
      const ans = this.normalize(q.answer);
      const user = this.normalize(userVal);
      if (q.type === "ox") return user === ans;
      if (q.type === "mcq") return user === ans;
      return user === ans || ans.includes(user) || user.includes(ans);
    },
    pick(key) {
      if (this.submitted) return;
      this.selected = key;
      this.submitted = true;
      this.isCorrect = this.check(key);
    },
    submitShort() {
      if (!this.shortInput.trim() || this.submitted) return;
      this.submitted = true;
      this.isCorrect = this.check(this.shortInput);
    },
    choiceClass(key) {
      if (!this.submitted) return this.selected === key ? "selected" : "";
      if (key === this.question.answer) return "correct";
      if (key === this.selected) return "wrong";
      return "dim";
    },
  },
};
</script>

<style scoped>
.rand-card {
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-lg);
  padding: 24px;
}

.q-num {
  margin: 0 0 8px;
  font-size: 12px;
  font-weight: 700;
  color: var(--c-text-muted);
}

.q-text {
  margin: 0 0 18px;
  font-size: 16px;
  line-height: 1.6;
}

.choices {
  list-style: none;
  margin: 0 0 16px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.choice {
  display: flex;
  gap: 10px;
  padding: 12px 14px;
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-md);
  cursor: pointer;
}

.choice.selected {
  border-color: var(--c-blue);
}

.choice.correct {
  border-color: #22c55e;
  background: rgba(34, 197, 94, 0.08);
}

.choice.wrong {
  border-color: #ef4444;
}

.choice.dim {
  opacity: 0.5;
}

.choice-key {
  font-weight: 700;
}

.short-input {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-md);
  margin-bottom: 10px;
}

.submit-btn,
.next-btn {
  width: 100%;
  padding: 12px;
  font-weight: 700;
  border: none;
  border-radius: var(--c-radius-md);
  background: var(--c-blue);
  color: #fff;
  cursor: pointer;
  margin-top: 8px;
}

.submit-btn:disabled {
  opacity: 0.45;
}

.feedback {
  margin-top: 12px;
  padding: 10px;
  border-radius: var(--c-radius-md);
  font-size: 14px;
  background: rgba(239, 68, 68, 0.08);
}

.feedback.ok {
  background: rgba(34, 197, 94, 0.1);
  color: var(--c-teal);
}
</style>
