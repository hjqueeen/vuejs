<template>
  <div v-if="question" class="quiz-question-page">
    <header class="q-header">
      <button type="button" class="back-btn" @click="goHub">← 목록</button>
      <div class="q-meta">
        <span class="mode-chip" :class="mode">{{ mode === 'study' ? '공부' : '테스트' }}</span>
        <span class="q-num">문제 {{ question.no }}</span>
        <span v-if="isStudied" class="studied-badge">공부함</span>
      </div>
      <div class="q-nav">
        <button type="button" :disabled="!prevId" @click="goSibling(prevId)">‹ 이전</button>
        <button type="button" :disabled="!nextId" @click="goSibling(nextId)">다음 ›</button>
      </div>
    </header>

    <section class="q-card">
      <h2 class="q-text">{{ question.question }}</h2>

      <ul v-if="question.choices.length" class="choices">
        <li
          v-for="choice in question.choices"
          :key="choice.key"
          class="choice"
          :class="choiceClass(choice.key)"
          @click="selectChoice(choice.key)"
        >
          <span class="choice-key">{{ choice.key }}</span>
          <span>{{ choice.label }}</span>
        </li>
      </ul>

      <div v-else class="short-answer">
        <input
          v-model="shortInput"
          type="text"
          class="short-input"
          placeholder="답을 입력하세요"
          :disabled="submitted && mode === 'test'"
          @keyup.enter="submitAnswer"
        />
      </div>

      <div v-if="mode === 'study'" class="study-actions">
        <button type="button" class="reveal-btn" @click="showAnswer = !showAnswer">
          {{ showAnswer ? "답 숨기기" : "답·해설 보기" }}
        </button>
        <button type="button" class="mark-studied-btn" :class="{ active: isStudied }" @click="markStudied">
          {{ isStudied ? "✓ 공부 완료" : "공부 완료로 표시" }}
        </button>
        <button
          v-if="isStudied"
          type="button"
          class="to-test-btn"
          @click="switchMode('test')"
        >
          테스트 하기 →
        </button>
      </div>

      <div v-else class="test-actions">
        <button
          type="button"
          class="submit-btn"
          :disabled="!canSubmit || submitted"
          @click="submitAnswer"
        >
          정답 확인
        </button>
      </div>

      <div v-if="showResult" class="result-box" :class="{ correct: isCorrect, wrong: !isCorrect }">
        <p class="result-label">{{ isCorrect ? "정답입니다!" : "오답입니다" }}</p>
        <p><strong>정답:</strong> {{ displayAnswer }}</p>
        <p v-if="question.explanation" class="explanation"><strong>해설:</strong> {{ question.explanation }}</p>
        <button v-if="mode === 'test' && !isCorrect" type="button" class="retry-btn" @click="retry">다시 풀기</button>
      </div>

      <div v-if="mode === 'study' && showAnswer" class="answer-box">
        <p><strong>정답:</strong> {{ displayAnswer }}</p>
        <p v-if="question.explanation" class="explanation"><strong>해설:</strong> {{ question.explanation }}</p>
      </div>
    </section>
  </div>
  <div v-else class="not-found">문제를 찾을 수 없습니다.</div>
</template>

<script>
import { getQuizWorkbookContent, getQuizQuestionById } from "@/data/quizWorkbookRegistry";

export default {
  name: "QuizQuestionView",
  props: {
    bookId: { type: String, required: true },
    questionId: { type: String, required: true },
  },
  data() {
    return {
      selected: "",
      shortInput: "",
      showAnswer: false,
      submitted: false,
      isCorrect: false,
    };
  },
  computed: {
    mode() {
      return this.$route.query.mode === "test" ? "test" : "study";
    },
    workbookContent() {
      return getQuizWorkbookContent(this.bookId);
    },
    question() {
      return getQuizQuestionById(this.bookId, this.questionId);
    },
    isStudied() {
      return this.$store.getters["quizWorkbook/isStudied"](this.bookId, this.questionId);
    },
    displayAnswer() {
      if (!this.question) return "";
      const q = this.question;
      if (q.type === "mcq") {
        const c = q.choices.find((item) => item.key === q.answer);
        return c ? `${q.answer} ${c.label}` : q.answer;
      }
      return q.answer;
    },
    showResult() {
      return this.mode === "test" && this.submitted;
    },
    canSubmit() {
      if (!this.question) return false;
      if (this.question.choices.length) return Boolean(this.selected);
      return Boolean(this.shortInput.trim());
    },
    orderedIds() {
      return (this.workbookContent?.questions || []).map((q) => q.id);
    },
    currentIndex() {
      return this.orderedIds.indexOf(this.questionId);
    },
    prevId() {
      const i = this.currentIndex;
      return i > 0 ? this.orderedIds[i - 1] : null;
    },
    nextId() {
      const i = this.currentIndex;
      return i >= 0 && i < this.orderedIds.length - 1 ? this.orderedIds[i + 1] : null;
    },
  },
  watch: {
    questionId() {
      this.resetState();
    },
    "$route.query.mode"() {
      this.resetState();
    },
  },
  methods: {
    resetState() {
      this.selected = "";
      this.shortInput = "";
      this.showAnswer = false;
      this.submitted = false;
      this.isCorrect = false;
    },
    normalize(val) {
      return String(val || "")
        .trim()
        .replace(/\s+/g, "")
        .replace(/○/g, "O")
        .toUpperCase();
    },
    checkAnswer(userVal) {
      const q = this.question;
      if (!q) return false;
      const ans = this.normalize(q.answer);
      const user = this.normalize(userVal);
      if (q.type === "ox") {
        return user === ans;
      }
      if (q.type === "mcq") {
        return user === ans || user === this.normalize(q.answer.replace(/[①②③④⑤⑥]/, ""));
      }
      return user === ans || ans.includes(user) || user.includes(ans);
    },
    selectChoice(key) {
      if (this.mode === "test" && this.submitted) return;
      this.selected = key;
      if (this.mode === "study") return;
    },
    submitAnswer() {
      const userVal = this.question.choices.length ? this.selected : this.shortInput;
      if (!userVal) return;
      this.submitted = true;
      this.isCorrect = this.checkAnswer(userVal);
      if (this.isCorrect) {
        this.$store.dispatch("quizWorkbook/recordTest", {
          bookId: this.bookId,
          questionId: this.questionId,
          passed: true,
        });
      }
    },
    retry() {
      this.selected = "";
      this.shortInput = "";
      this.submitted = false;
      this.isCorrect = false;
    },
    choiceClass(key) {
      if (this.mode === "study") {
        return this.selected === key ? "selected" : "";
      }
      if (!this.submitted) {
        return this.selected === key ? "selected" : "";
      }
      const correct = this.question.answer;
      if (key === correct) return "correct";
      if (key === this.selected && key !== correct) return "wrong";
      return "dim";
    },
    markStudied() {
      if (!this.isStudied) {
        this.$store.dispatch("quizWorkbook/markStudied", {
          bookId: this.bookId,
          questionId: this.questionId,
        });
      } else {
        this.$store.dispatch("quizWorkbook/toggleStudied", {
          bookId: this.bookId,
          questionId: this.questionId,
        });
      }
    },
    switchMode(mode) {
      this.$router.replace({
        name: "workbook-question",
        params: { bookId: this.bookId, questionId: this.questionId },
        query: { mode },
      });
    },
    goHub() {
      this.$router.push({ name: "workbook-hub", params: { bookId: this.bookId } });
    },
    goSibling(id) {
      if (!id) return;
      this.$router.push({
        name: "workbook-question",
        params: { bookId: this.bookId, questionId: id },
        query: { mode: this.mode },
      });
    },
  },
};
</script>

<style scoped>
.quiz-question-page {
  max-width: 640px;
  margin: 0 auto;
  padding-bottom: 40px;
}

.q-header {
  margin-bottom: 20px;
}

.back-btn {
  border: none;
  background: none;
  color: var(--c-blue);
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  padding: 0;
  margin-bottom: 10px;
}

.q-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.mode-chip {
  font-size: 10px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: var(--c-radius-pill);
}

.mode-chip.study {
  background: rgba(45, 143, 111, 0.15);
  color: var(--c-teal);
}

.mode-chip.test {
  background: rgba(45, 95, 168, 0.15);
  color: var(--c-blue);
}

.q-num {
  font-size: 14px;
  font-weight: 700;
}

.studied-badge {
  font-size: 11px;
  color: var(--c-teal);
  font-weight: 600;
}

.q-nav {
  display: flex;
  gap: 8px;
  margin-top: 10px;
}

.q-nav button {
  font-size: 12px;
  padding: 6px 12px;
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-pill);
  background: var(--c-surface);
  cursor: pointer;
}

.q-nav button:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.q-card {
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-lg);
  padding: 24px;
}

.q-text {
  margin: 0 0 20px;
  font-size: 16px;
  line-height: 1.65;
  font-weight: 600;
}

.choices {
  list-style: none;
  margin: 0 0 20px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.choice {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 14px;
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-md);
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
}

.choice:hover:not(.correct):not(.wrong):not(.dim) {
  border-color: var(--c-blue-mid);
}

.choice.selected {
  border-color: var(--c-blue);
  background: rgba(45, 95, 168, 0.06);
}

.choice.correct {
  border-color: #22c55e;
  background: rgba(34, 197, 94, 0.08);
}

.choice.wrong {
  border-color: #ef4444;
  background: rgba(239, 68, 68, 0.06);
}

.choice.dim {
  opacity: 0.55;
}

.choice-key {
  font-weight: 700;
  flex-shrink: 0;
}

.short-input {
  width: 100%;
  padding: 12px 14px;
  font-size: 15px;
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-md);
  margin-bottom: 16px;
}

.study-actions,
.test-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.reveal-btn,
.mark-studied-btn,
.to-test-btn,
.submit-btn,
.retry-btn {
  font-size: 13px;
  font-weight: 600;
  padding: 10px 16px;
  border-radius: var(--c-radius-md);
  border: 1px solid var(--c-border);
  background: var(--c-surface);
  cursor: pointer;
}

.mark-studied-btn.active {
  border-color: var(--c-teal);
  color: var(--c-teal);
  background: rgba(45, 143, 111, 0.1);
}

.to-test-btn,
.submit-btn {
  background: var(--c-blue);
  color: #fff;
  border-color: var(--c-blue);
}

.submit-btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.result-box,
.answer-box {
  padding: 16px;
  border-radius: var(--c-radius-md);
  font-size: 14px;
  line-height: 1.6;
}

.result-box.correct,
.answer-box {
  background: rgba(34, 197, 94, 0.08);
  border: 1px solid rgba(34, 197, 94, 0.35);
}

.result-box.wrong {
  background: rgba(239, 68, 68, 0.06);
  border: 1px solid rgba(239, 68, 68, 0.35);
}

.result-label {
  font-weight: 700;
  margin: 0 0 8px;
}

.explanation {
  margin: 10px 0 0;
  color: var(--c-text-secondary);
}

.not-found {
  text-align: center;
  padding: 40px;
  color: var(--c-text-muted);
}
</style>
