<template>
  <div v-if="page" class="math-worksheet">
    <header class="ws-header">
      <button type="button" class="back-btn" @click="goDashboard">← 서재</button>
      <div class="ws-title-block">
        <p class="ws-eyebrow">Mathe · Klasse 8</p>
        <h1>{{ page.section }} {{ page.title }}</h1>
        <p class="ws-sub">{{ page.titleKo }}</p>
      </div>
      <div class="ws-actions">
        <button type="button" class="btn-primary" @click="showAnswers ? hideAnswers() : openPinDialog()">
          {{ showAnswers ? "정답 숨기기" : "정답 확인" }}
        </button>
        <button v-if="showAnswers" type="button" class="btn-secondary" @click="resetAll">다시 풀기</button>
      </div>
    </header>

    <!-- PIN 다이얼로그 -->
    <transition name="dialog-fade">
      <div v-if="pinDialogOpen" class="pin-overlay" @click.self="closePinDialog">
        <div class="pin-box">
          <p class="pin-title">비밀번호를 입력하세요</p>
          <input
            ref="pinInput"
            v-model="pinValue"
            type="password"
            inputmode="numeric"
            maxlength="10"
            class="pin-input"
            placeholder="••••"
            @keyup.enter="submitPin"
          />
          <p v-if="pinError" class="pin-error">비밀번호가 틀렸습니다.</p>
          <div class="pin-actions">
            <button type="button" class="btn-secondary" @click="closePinDialog">취소</button>
            <button type="button" class="btn-primary" @click="submitPin">확인</button>
          </div>
        </div>
      </div>
    </transition>

    <article
      v-for="exercise in page.exercises"
      :key="exercise.id"
      class="exercise-block"
    >
      <header class="exercise-head">
        <span class="exercise-no">{{ exercise.no }}</span>
        <div>
          <p class="exercise-instruction">{{ exercise.instructionDe }}</p>
          <p class="exercise-instruction-ko">{{ exercise.instructionKo }}</p>
        </div>
      </header>

      <!-- 25: 괄호 풀기 + 직사각형 -->
      <div v-if="exercise.type === 'expand-rectangle'" class="expand-grid">
        <div
          v-for="item in exercise.items"
          :key="item.id"
          class="expand-item"
        >
          <p class="item-label">{{ item.label }} {{ item.expression }} =</p>
          <div class="expand-body">
            <div class="rect-wrap" aria-hidden="true">

              <!--
                outerW = 가로(폭) 고정값  → 라벨은 직사각형 아래(가로 치수선)
                parts  = 세로(높이) 분할  → 구분선은 가로(수평), 라벨은 직사각형 오른쪽
                예: 5(x + 3y)  →  폭=5(아래), 높이=x+3y(오른쪽 눈금)
              -->
              <!--
                outerW + 덧셈: 높이를 균등 분할, 각 구간을 오른쪽 치수선으로 표시
                outerW + 뺄셈: 전체높이(parts[0])는 외부 큰 치수선, 뺄 구간(parts[1])은 내부 작은 치수선
              -->

              <!-- outerW + 덧셈 -->
              <svg
                v-if="item.diagram.outerW && !item.diagram.parts.some(p => p.sign === '−')"
                class="rect-svg"
                viewBox="0 0 210 145"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  v-for="(part, pi) in item.diagram.parts" :key="'bg'+pi"
                  x="20" :y="12 + pOffset(item.diagram.parts, 100, pi)"
                  width="130" :height="pSize(item.diagram.parts, 100, pi)"
                  fill="rgba(45,95,168,0.05)"
                />
                <rect x="20" y="12" width="130" height="100" rx="2" fill="none" stroke="#2d5fa8" stroke-width="2"/>
                <!-- outerW 치수선 아래 -->
                <line x1="20" y1="122" x2="150" y2="122" stroke="#2d5fa8" stroke-width="1.5"/>
                <line x1="20" y1="116" x2="20" y2="128" stroke="#2d5fa8" stroke-width="1.2"/>
                <line x1="150" y1="116" x2="150" y2="128" stroke="#2d5fa8" stroke-width="1.2"/>
                <text x="85" y="139" text-anchor="middle" font-size="13" font-weight="700" fill="#2d5fa8">{{ item.diagram.outerW }}</text>
                <!-- 구분선 -->
                <line v-for="(part, pi) in item.diagram.parts.slice(0,-1)" :key="'div'+pi"
                  x1="20" :y1="12 + pOffset(item.diagram.parts, 100, pi+1)"
                  x2="150" :y2="12 + pOffset(item.diagram.parts, 100, pi+1)"
                  stroke="#2d5fa8" stroke-width="1" stroke-dasharray="5 3"/>
                <!-- 오른쪽 치수선 -->
                <line v-for="(part, pi) in item.diagram.parts" :key="'rl'+pi"
                  x1="162" :y1="12 + pOffset(item.diagram.parts,100,pi)+3"
                  x2="162" :y2="12 + pOffset(item.diagram.parts,100,pi)+pSize(item.diagram.parts,100,pi)-3"
                  stroke="#888" stroke-width="1"/>
                <line v-for="(part, pi) in item.diagram.parts" :key="'rt1'+pi"
                  x1="158" x2="166"
                  :y1="12 + pOffset(item.diagram.parts,100,pi)+3"
                  :y2="12 + pOffset(item.diagram.parts,100,pi)+3"
                  stroke="#888" stroke-width="1"/>
                <line v-for="(part, pi) in item.diagram.parts" :key="'rt2'+pi"
                  x1="158" x2="166"
                  :y1="12 + pOffset(item.diagram.parts,100,pi)+pSize(item.diagram.parts,100,pi)-3"
                  :y2="12 + pOffset(item.diagram.parts,100,pi)+pSize(item.diagram.parts,100,pi)-3"
                  stroke="#888" stroke-width="1"/>
                <text v-for="(part, pi) in item.diagram.parts" :key="'rlbl'+pi"
                  x="180" :y="12 + pOffset(item.diagram.parts,100,pi)+pSize(item.diagram.parts,100,pi)/2+5"
                  text-anchor="middle" font-size="12" font-weight="600" fill="#333">{{ part.len }}</text>
              </svg>

              <!-- outerW + 뺄셈: parts[0]=전체높이, parts[1]=뺄 구간 -->
              <svg
                v-else-if="item.diagram.outerW && item.diagram.parts.some(p => p.sign === '−')"
                class="rect-svg"
                viewBox="0 0 220 145"
                xmlns="http://www.w3.org/2000/svg"
              >
                <!-- 배경 -->
                <rect x="20" y="12" width="130" height="100" rx="2" fill="rgba(45,95,168,0.05)"/>
                <!-- 외곽선 -->
                <rect x="20" y="12" width="130" height="100" rx="2" fill="none" stroke="#2d5fa8" stroke-width="2"/>
                <!-- 구분선 (아래 28%에서) -->
                <line x1="20" y1="84" x2="150" y2="84" stroke="#2d5fa8" stroke-width="1" stroke-dasharray="5 3"/>
                <!-- outerW 치수선 아래 -->
                <line x1="20" y1="122" x2="150" y2="122" stroke="#2d5fa8" stroke-width="1.5"/>
                <line x1="20" y1="116" x2="20" y2="128" stroke="#2d5fa8" stroke-width="1.2"/>
                <line x1="150" y1="116" x2="150" y2="128" stroke="#2d5fa8" stroke-width="1.2"/>
                <text x="85" y="139" text-anchor="middle" font-size="13" font-weight="700" fill="#2d5fa8">{{ item.diagram.outerW }}</text>
                <!-- 외부 치수선 (전체 높이 = parts[0].len) -->
                <line x1="163" y1="12" x2="163" y2="112" stroke="#2d5fa8" stroke-width="1.5"/>
                <line x1="158" y1="12" x2="168" y2="12" stroke="#2d5fa8" stroke-width="1.2"/>
                <line x1="158" y1="112" x2="168" y2="112" stroke="#2d5fa8" stroke-width="1.2"/>
                <text x="178" y="66" text-anchor="middle" font-size="12" font-weight="700"
                  fill="#2d5fa8" transform="rotate(90 178 66)">{{ item.diagram.parts[0].len }}</text>
                <!-- 내부 치수선 (뺄 구간 = parts.find(sign−).len) -->
                <line x1="176" y1="84" x2="176" y2="112" stroke="#c0392b" stroke-width="1.5"/>
                <line x1="171" y1="84" x2="181" y2="84" stroke="#c0392b" stroke-width="1.2"/>
                <line x1="171" y1="112" x2="181" y2="112" stroke="#c0392b" stroke-width="1.2"/>
                <text x="192" y="98" text-anchor="middle" font-size="12" font-weight="700" fill="#c0392b">{{ item.diagram.parts.find(p => p.sign === '−').len }}</text>
              </svg>

              <!--
                outerH = 세로(높이) 고정값  → 라벨은 직사각형 왼쪽(세로 치수선, 회전)
                parts  = 가로(폭) 분할      → 구분선은 세로(수직), 라벨은 직사각형 아래
                예: 2x(3y + 4)  →  높이=2x(왼쪽), 폭=3y+4(아래 눈금)
              -->
              <!-- outerH + 덧셈 -->
              <svg
                v-else-if="!item.diagram.outerW && !item.diagram.parts.some(p => p.sign === '−')"
                class="rect-svg"
                viewBox="0 0 215 145"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect v-for="(part, pi) in item.diagram.parts" :key="'bg'+pi"
                  :x="36 + pOffset(item.diagram.parts,130,pi)" y="12"
                  :width="pSize(item.diagram.parts,130,pi)" height="100"
                  fill="rgba(45,143,111,0.05)"/>
                <rect x="36" y="12" width="130" height="100" rx="2" fill="none" stroke="#2d8f6f" stroke-width="2"/>
                <!-- outerH 치수선 왼쪽 -->
                <line x1="24" y1="12" x2="24" y2="112" stroke="#2d8f6f" stroke-width="1.5"/>
                <line x1="18" y1="12" x2="30" y2="12" stroke="#2d8f6f" stroke-width="1.2"/>
                <line x1="18" y1="112" x2="30" y2="112" stroke="#2d8f6f" stroke-width="1.2"/>
                <text x="12" y="62" text-anchor="middle" font-size="13" font-weight="700"
                  fill="#2d8f6f" transform="rotate(-90 12 62)">{{ item.diagram.outerH }}</text>
                <!-- 구분선 -->
                <line v-for="(part, pi) in item.diagram.parts.slice(0,-1)" :key="'div'+pi"
                  :x1="36 + pOffset(item.diagram.parts,130,pi+1)" y1="12"
                  :x2="36 + pOffset(item.diagram.parts,130,pi+1)" y2="112"
                  stroke="#2d8f6f" stroke-width="1" stroke-dasharray="5 3"/>
                <!-- 아래쪽 치수선 -->
                <line v-for="(part, pi) in item.diagram.parts" :key="'bl'+pi"
                  :x1="36 + pOffset(item.diagram.parts,130,pi)+3" y1="124"
                  :x2="36 + pOffset(item.diagram.parts,130,pi)+pSize(item.diagram.parts,130,pi)-3" y2="124"
                  stroke="#888" stroke-width="1"/>
                <line v-for="(part, pi) in item.diagram.parts" :key="'bt1'+pi"
                  :x1="36 + pOffset(item.diagram.parts,130,pi)+3" y1="119"
                  :x2="36 + pOffset(item.diagram.parts,130,pi)+3" y2="129"
                  stroke="#888" stroke-width="1"/>
                <line v-for="(part, pi) in item.diagram.parts" :key="'bt2'+pi"
                  :x1="36 + pOffset(item.diagram.parts,130,pi)+pSize(item.diagram.parts,130,pi)-3" y1="119"
                  :x2="36 + pOffset(item.diagram.parts,130,pi)+pSize(item.diagram.parts,130,pi)-3" y2="129"
                  stroke="#888" stroke-width="1"/>
                <text v-for="(part, pi) in item.diagram.parts" :key="'blbl'+pi"
                  :x="36 + pOffset(item.diagram.parts,130,pi)+pSize(item.diagram.parts,130,pi)/2"
                  y="141" text-anchor="middle" font-size="12" font-weight="600" fill="#333">{{ part.len }}</text>
              </svg>

              <!-- outerH + 뺄셈: parts[0]=전체폭, parts[1]=뺄 구간 -->
              <svg
                v-else
                class="rect-svg"
                viewBox="0 0 215 155"
                xmlns="http://www.w3.org/2000/svg"
              >
                <!-- 배경 -->
                <rect x="36" y="12" width="130" height="100" rx="2" fill="rgba(45,143,111,0.05)"/>
                <!-- 외곽선 -->
                <rect x="36" y="12" width="130" height="100" rx="2" fill="none" stroke="#2d8f6f" stroke-width="2"/>
                <!-- 구분선 -->
                <line x1="130" y1="12" x2="130" y2="112" stroke="#2d8f6f" stroke-width="1" stroke-dasharray="5 3"/>
                <!-- outerH 치수선 왼쪽 -->
                <line x1="24" y1="12" x2="24" y2="112" stroke="#2d8f6f" stroke-width="1.5"/>
                <line x1="18" y1="12" x2="30" y2="12" stroke="#2d8f6f" stroke-width="1.2"/>
                <line x1="18" y1="112" x2="30" y2="112" stroke="#2d8f6f" stroke-width="1.2"/>
                <text x="12" y="62" text-anchor="middle" font-size="13" font-weight="700"
                  fill="#2d8f6f" transform="rotate(-90 12 62)">{{ item.diagram.outerH }}</text>
                <!-- 외부 치수선 — 전체 폭(2y), 직사각형 바로 아래 -->
                <line x1="36" y1="122" x2="166" y2="122" stroke="#2d8f6f" stroke-width="1.5"/>
                <line x1="36" y1="116" x2="36" y2="128" stroke="#2d8f6f" stroke-width="1.2"/>
                <line x1="166" y1="116" x2="166" y2="128" stroke="#2d8f6f" stroke-width="1.2"/>
                <text x="101" y="138" text-anchor="middle" font-size="12" font-weight="700" fill="#2d8f6f">{{ item.diagram.parts[0].len }}</text>
                <!-- 내부 치수선 — 뺄 구간(x), 한 단 더 아래 -->
                <line x1="130" y1="144" x2="166" y2="144" stroke="#c0392b" stroke-width="1.5"/>
                <line x1="130" y1="138" x2="130" y2="150" stroke="#c0392b" stroke-width="1.2"/>
                <line x1="166" y1="138" x2="166" y2="150" stroke="#c0392b" stroke-width="1.2"/>
                <text x="148" y="155" text-anchor="middle" font-size="12" font-weight="700" fill="#c0392b">{{ item.diagram.parts.find(p => p.sign === '−').len }}</text>
              </svg>
            </div>
            <input
              v-model="answers[key(exercise.id, item.id)]"
              type="text"
              class="math-input"
              placeholder="전개 결과"
              spellcheck="false"
            />
          </div>
          <p v-if="showAnswers" class="answer-reveal">= {{ item.answer }}</p>
        </div>
      </div>

      <!-- 26: 값이 같은 항 연결 -->
      <div v-else-if="exercise.type === 'match'" class="match-block">
        <div class="match-row match-row--top">
          <div
            v-for="(item, idx) in exercise.top"
            :key="item.id"
            class="match-cell"
          >
            <span class="match-idx">{{ idx + 1 }}</span>
            <span class="match-expr">{{ item.expr }}</span>
            <select
              v-model="answers[key(exercise.id, item.id)]"
              class="match-select"
            >
              <option value="">—</option>
              <option
                v-for="bot in exercise.bottom"
                :key="bot.id"
                :value="bot.id"
              >
                {{ bot.letter }}
              </option>
            </select>
            <span v-if="showAnswers" class="answer-reveal">→ {{ exercise.bottom.find(b => b.id === exercise.answers[item.id])?.letter }}</span>
          </div>
        </div>
        <div class="match-row match-row--bottom">
          <div
            v-for="bot in exercise.bottom"
            :key="bot.id"
            class="match-cell match-cell--bottom"
          >
            <span class="match-letter">{{ bot.letter }}</span>
            <span class="match-expr">{{ bot.expr }}</span>
          </div>
        </div>
      </div>

      <!-- 27: 빈칸 채우기 -->
      <ol v-else-if="exercise.type === 'fill-blank'" class="fill-list">
        <li
          v-for="item in exercise.items"
          :key="item.id"
          class="fill-item"
        >
          <span class="item-label">{{ item.label }}</span>
          <span class="fill-line">
            <template v-for="(part, pi) in item.parts">
              <span v-if="part.type === 'text'" :key="pi" class="fill-text">{{ part.value }}</span>
              <span v-else-if="part.type === 'frac'" :key="'frac' + pi" class="frac">
                <span class="frac-num">{{ part.num }}</span>
                <span class="frac-den">{{ part.den }}</span>
              </span>
              <input
                v-else
                :key="part.id"
                v-model="answers[key(exercise.id, part.id)]"
                type="text"
                class="fill-input"
                :style="{ width: part.width || '6ch' }"
                spellcheck="false"
              />
            </template>
          </span>
          <p v-if="showAnswers" class="answer-reveal">
            <span v-for="part in item.parts.filter(p => p.type === 'blank')" :key="part.id" class="answer-token">{{ part.answer }}</span>
          </p>
        </li>
      </ol>
    </article>
  </div>
  <div v-else class="not-found">페이지를 찾을 수 없습니다.</div>
</template>

<script>
import { getBookById } from "@/data/books";
import { MATH_QUIZ_BOOK_ID, getMathWorksheetPageById } from "@/data/mathQuizContent";
import { guardBookAccess } from "@/utils/bookAccessGuard";
import { getDashboardLocation } from "@/data/bookCatalog";

export default {
  name: "MathWorksheetView",
  props: {
    bookId: { type: String, required: true },
    pageId: { type: String, required: true },
  },
  data() {
    return {
      answers: {},
      showAnswers: false,
      pinDialogOpen: false,
      pinValue: "",
      pinError: false,
    };
  },
  computed: {
    book() {
      return getBookById(this.bookId);
    },
    page() {
      return getMathWorksheetPageById(this.pageId);
    },
  },
  watch: {
    pageId() {
      this.answers = {};
      this.showAnswers = false;
    },
  },
  created() {
    guardBookAccess(this.$router, this.bookId);
    if (this.bookId !== MATH_QUIZ_BOOK_ID) {
      this.$router.replace({ name: "workbook-hub", params: { bookId: this.bookId } });
    }
  },
  methods: {
    key(exerciseId, itemId) {
      return `${exerciseId}::${itemId}`;
    },
    /** 뺄셈 항은 30%, 덧셈 항은 70% (2-part 기준) */
    pSize(parts, totalLen, idx) {
      const hasMinus = parts.some(p => p.sign === "−");
      if (!hasMinus) return totalLen / parts.length;
      return parts[idx].sign === "−" ? totalLen * 0.28 : totalLen * 0.72;
    },
    /** idx번째 파트까지의 누적 오프셋 */
    pOffset(parts, totalLen, idx) {
      let off = 0;
      for (let i = 0; i < idx; i++) off += this.pSize(parts, totalLen, i);
      return off;
    },
    openPinDialog() {
      this.pinValue = "";
      this.pinError = false;
      this.pinDialogOpen = true;
      this.$nextTick(() => this.$refs.pinInput?.focus());
    },
    closePinDialog() {
      this.pinDialogOpen = false;
      this.pinValue = "";
      this.pinError = false;
    },
    submitPin() {
      if (this.pinValue === "0127") {
        this.showAnswers = true;
        this.closePinDialog();
      } else {
        this.pinError = true;
        this.pinValue = "";
        this.$nextTick(() => this.$refs.pinInput?.focus());
      }
    },
    hideAnswers() {
      this.showAnswers = false;
    },
    resetAll() {
      this.answers = {};
      this.showAnswers = false;
    },
    goDashboard() {
      this.$router.push(getDashboardLocation());
    },
  },
};
</script>

<style scoped>
.math-worksheet {
  max-width: 820px;
  margin: 0 auto;
  padding: 8px 16px 56px;
  font-size: 15px;
  line-height: 1.55;
}

.ws-header {
  margin-bottom: 28px;
}

.back-btn {
  border: none;
  background: none;
  color: var(--c-blue);
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  padding: 0;
  margin-bottom: 12px;
}

.ws-eyebrow {
  margin: 0 0 4px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-amber);
}

.ws-title-block h1 {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
}

.ws-sub {
  margin: 6px 0 0;
  font-size: 13px;
  color: var(--c-text-muted);
}

.ws-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.btn-primary,
.btn-secondary {
  font-size: 13px;
  font-weight: 600;
  padding: 10px 16px;
  border-radius: var(--c-radius-md);
  cursor: pointer;
  border: 1px solid var(--c-border);
  background: var(--c-surface);
}

.btn-primary {
  background: var(--c-blue);
  color: #fff;
  border-color: var(--c-blue);
}

.score-banner {
  margin-bottom: 24px;
  padding: 14px 18px;
  border-radius: var(--c-radius-md);
  font-size: 18px;
  font-weight: 700;
  text-align: center;
}

.score-banner--full {
  background: rgba(34, 197, 94, 0.12);
  color: #15803d;
  border: 1px solid rgba(34, 197, 94, 0.35);
}

.score-banner--good {
  background: rgba(45, 95, 168, 0.1);
  color: var(--c-blue);
  border: 1px solid rgba(45, 95, 168, 0.3);
}

.score-banner--low {
  background: rgba(239, 68, 68, 0.08);
  color: #b91c1c;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.exercise-block {
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-lg);
  padding: 20px 22px 24px;
  margin-bottom: 24px;
}

.exercise-head {
  display: flex;
  gap: 14px;
  margin-bottom: 20px;
  align-items: flex-start;
}

.exercise-no {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: var(--c-blue-light);
  color: var(--c-blue);
  font-weight: 800;
  font-size: 15px;
}

.exercise-instruction {
  margin: 0;
  font-weight: 600;
  font-size: 15px;
}

.exercise-instruction-ko {
  margin: 4px 0 0;
  font-size: 13px;
  color: var(--c-text-muted);
}

.expand-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 24px;
}

@media (max-width: 640px) {
  .expand-grid {
    grid-template-columns: 1fr;
  }
}

.expand-item {
  position: relative;
  padding: 12px;
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-md);
}

.expand-item.item--correct {
  border-color: rgba(34, 197, 94, 0.5);
  background: rgba(34, 197, 94, 0.05);
}

.expand-item.item--wrong {
  border-color: rgba(239, 68, 68, 0.45);
  background: rgba(239, 68, 68, 0.04);
}

.item-label {
  margin: 0 0 10px;
  font-weight: 600;
}

.expand-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.rect-wrap {
  color: var(--c-text-secondary);
}

.rect-svg {
  width: 100%;
  max-width: 180px;
  height: auto;
  display: block;
}

.math-input {
  width: 100%;
  padding: 8px 10px;
  font-size: 15px;
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-md);
  font-family: inherit;
}

.match-block {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.match-row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
}

@media (max-width: 700px) {
  .match-row {
    grid-template-columns: 1fr 1fr;
  }
}

.match-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 10px 8px;
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-md);
  text-align: center;
  font-size: 13px;
}


.match-idx,
.match-letter {
  font-weight: 800;
  color: var(--c-blue);
}

.match-expr {
  line-height: 1.35;
  word-break: break-word;
}

.match-select {
  width: 100%;
  max-width: 64px;
  padding: 4px;
  font-size: 13px;
  border: 1px solid var(--c-border);
  border-radius: 6px;
}

.match-hint {
  margin: 4px 0 0;
}

.fill-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.fill-item {
  padding: 10px 0;
  border-bottom: 1px dashed var(--c-border);
}

.fill-item:last-child {
  border-bottom: none;
}


.fill-line {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2px 0;
  font-size: 15px;
}

.fill-text {
  white-space: pre;
}

.frac {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
  margin: 0 2px;
  line-height: 1.1;
  font-size: 0.9em;
}

.frac-num {
  border-bottom: 1.5px solid currentColor;
  padding: 0 4px 2px;
  text-align: center;
}

.frac-den {
  padding: 2px 4px 0;
  text-align: center;
}

.fill-input {
  padding: 2px 6px;
  margin: 0 2px;
  font-size: 15px;
  border: none;
  border-bottom: 2px dotted var(--c-text-secondary);
  background: rgba(45, 95, 168, 0.06);
  font-family: inherit;
  min-width: 3ch;
}

.answer-reveal {
  margin: 8px 0 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--c-blue);
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.answer-token {
  background: rgba(45, 95, 168, 0.1);
  border: 1px solid rgba(45, 95, 168, 0.25);
  border-radius: 4px;
  padding: 1px 7px;
}

.not-found {
  text-align: center;
  padding: 48px;
  color: var(--c-text-muted);
}

/* PIN 다이얼로그 */
.pin-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
}

.pin-box {
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-lg);
  padding: 28px 28px 24px;
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.pin-title {
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
}

.pin-input {
  width: 100%;
  padding: 10px 14px;
  font-size: 22px;
  text-align: center;
  letter-spacing: 6px;
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-md);
  font-family: inherit;
  box-sizing: border-box;
}

.pin-input:focus {
  outline: none;
  border-color: var(--c-blue);
}

.pin-error {
  margin: 0;
  font-size: 13px;
  color: #dc2626;
  text-align: center;
}

.pin-actions {
  display: flex;
  gap: 8px;
}

.pin-actions button {
  flex: 1;
}

.dialog-fade-enter-active,
.dialog-fade-leave-active {
  transition: opacity 0.15s;
}
.dialog-fade-enter,
.dialog-fade-leave-to {
  opacity: 0;
}
</style>
