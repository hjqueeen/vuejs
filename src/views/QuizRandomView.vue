<template>
  <div class="quiz-random">
    <header class="rand-header">
      <button type="button" class="back-btn" @click="goHub">← 목록</button>
      <h1>랜덤 퀴즈</h1>
      <p class="rand-desc">공부한 문제 중 {{ sessionQuestions.length }}문제</p>
    </header>

    <div v-if="!finished" class="session-body">
      <p class="progress-text">{{ currentIndex + 1 }} / {{ sessionQuestions.length }}</p>
      <QuizRandomCard
        v-if="currentQuestion"
        :question="currentQuestion"
        @answered="onAnswered"
      />
    </div>

    <div v-else class="summary">
      <h2>퀴즈 완료</h2>
      <p class="score">{{ correctCount }} / {{ sessionQuestions.length }} 정답</p>
      <div class="summary-actions">
        <button type="button" @click="restart">다시 하기</button>
        <button type="button" class="primary" @click="goHub">목록으로</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getQuizWorkbookContent } from "@/data/quizWorkbookRegistry";
import QuizRandomCard from "@/components/quiz/QuizRandomCard.vue";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default {
  name: "QuizRandomView",
  components: { QuizRandomCard },
  props: {
    bookId: { type: String, required: true },
  },
  data() {
    return {
      sessionQuestions: [],
      currentIndex: 0,
      correctCount: 0,
      finished: false,
    };
  },
  computed: {
    currentQuestion() {
      return this.sessionQuestions[this.currentIndex] || null;
    },
  },
  created() {
    this.buildSession();
  },
  methods: {
    buildSession() {
      const studiedIds = this.$store.getters["quizWorkbook/studiedIds"](this.bookId);
      const questions = getQuizWorkbookContent(this.bookId)?.questions || [];
      const pool = questions.filter((q) => studiedIds.includes(q.id));
      const picked = shuffle(pool).slice(0, Math.min(10, pool.length));
      this.sessionQuestions = picked;
      this.currentIndex = 0;
      this.correctCount = 0;
      this.finished = picked.length === 0;
    },
    onAnswered(correct) {
      if (correct) this.correctCount += 1;
      if (this.currentIndex >= this.sessionQuestions.length - 1) {
        this.finished = true;
      } else {
        this.currentIndex += 1;
      }
    },
    restart() {
      this.buildSession();
    },
    goHub() {
      this.$router.push({ name: "workbook-hub", params: { bookId: this.bookId } });
    },
  },
};
</script>

<style scoped>
.quiz-random {
  max-width: 640px;
  margin: 0 auto;
  padding-bottom: 40px;
}

.rand-header {
  margin-bottom: 24px;
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

.rand-header h1 {
  margin: 0;
  font-size: 20px;
}

.rand-desc {
  margin: 6px 0 0;
  font-size: 13px;
  color: var(--c-text-muted);
}

.progress-text {
  font-size: 12px;
  font-weight: 700;
  color: var(--c-text-muted);
  margin-bottom: 12px;
}

.summary {
  text-align: center;
  padding: 40px 20px;
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-lg);
}

.summary h2 {
  margin: 0 0 8px;
}

.score {
  font-size: 28px;
  font-weight: 700;
  color: var(--c-blue);
  margin: 0 0 24px;
}

.summary-actions {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.summary-actions button {
  padding: 10px 20px;
  border-radius: var(--c-radius-md);
  border: 1px solid var(--c-border);
  background: var(--c-surface);
  cursor: pointer;
  font-weight: 600;
}

.summary-actions .primary {
  background: var(--c-blue);
  color: #fff;
  border-color: var(--c-blue);
}
</style>
