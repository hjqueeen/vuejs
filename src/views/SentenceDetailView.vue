<template>
  <div class="page sentence-page">
    <p v-if="!detail">{{ $t("ebook.notFoundSentence") }}</p>
    <template v-else>
      <header class="study-header">
        <div class="header-left">
          <span class="study-chip">Study</span>
          <h2>핵심 문장</h2>
          <div class="read-check-group">
            <input type="checkbox" :checked="isReadStepChecked(1)" @change="toggleReadStep(1)" />
            <input type="checkbox" :checked="isReadStepChecked(2)" @change="toggleReadStep(2)" />
            <input type="checkbox" :checked="isReadStepChecked(3)" @change="toggleReadStep(3)" />
          </div>
          <label class="complete-check flag-toggle">
            <input type="checkbox" :checked="sentenceCompleted" @change="toggleCompleted" />
            <span class="flag-toggle-text">학습 완료</span>
          </label>
        </div>
        <div v-if="detail.audio" class="study-audio-controls">
          <div class="audio-mode-toggle">
            <button
              type="button"
              class="audio-mode-btn"
              :class="{ active: audioMode === 'normal' }"
              @click="setAudioMode('normal')"
            >
              일반
            </button>
            <button
              type="button"
              class="audio-mode-btn"
              :class="{ active: audioMode === 'slow' }"
              @click="setAudioMode('slow')"
            >
              느리게
            </button>
          </div>
          <div class="audio-player-wrap">
            <button type="button" class="audio-play-btn" :aria-label="isAudioPlaying ? '오디오 일시정지' : '오디오 재생'" @click="toggleAudioPlayback">
              <span v-if="!isAudioPlaying" class="audio-play-icon" aria-hidden="true">▶</span>
              <span v-else class="audio-play-icon audio-pause-icon" aria-hidden="true">❚❚</span>
            </button>
            <span class="audio-time-display">{{ formattedCurrentTime }} / {{ formattedDuration }}</span>
          </div>
          <audio
            ref="sentenceAudio"
            :src="currentAudioSrc"
            preload="metadata"
            @loadedmetadata="onAudioLoadedMetadata"
            @timeupdate="onAudioTimeUpdate"
            @ended="onAudioEnded"
            @play="onAudioPlay"
            @pause="onAudioPause"
          ></audio>
        </div>
      </header>

      <section class="core-sentence-box">
        <span class="sentence-index">{{ pageNumber }}</span>
        <div class="sentence-text-wrap">
          <div class="sentence-english-row">
            <p v-if="!hideEnglish" class="sentence-original" :class="{ 'sentence-original--hidden': !sentenceTextVisible }">{{ detail.sentence.originalText }}</p>
            <button
              type="button"
              class="sentence-toggle-btn"
              :class="{ 'sentence-toggle-btn--hidden': !sentenceTextVisible }"
              :aria-label="sentenceTextVisible ? '문장 숨기기' : '문장 보기'"
              :title="sentenceTextVisible ? '문장 숨기기' : '문장 보기'"
              @click="sentenceTextVisible = !sentenceTextVisible"
            >
              <svg v-if="sentenceTextVisible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd"/><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.064 7 9.542 7 .847 0 1.669-.105 2.454-.303z"/></svg>
            </button>
          </div>
          <p v-if="!hideKorean" class="sentence-translation">{{ sentenceStudyTranslation }}</p>
        </div>
      </section>

      <div class="study-layout">
        <div class="study-main">
          <article v-if="expressionsVisible.length" class="study-block">
            <h3><span class="block-dot"></span>핵심 표현</h3>
            <ul class="sentence-list">
              <li v-for="expr in expressionsVisible" :key="expr.id">
                <div class="review-item-row">
                  <strong v-if="!hideEnglish">{{ expr.expression }}</strong>
                  <span class="review-check-group">
                    <label class="flag-toggle">
                      <input type="checkbox" :checked="isChecked('expression', expr.id, 'review')" @change="toggleReview('expression', expr, 'review')" />
                      <span class="flag-toggle-text">복습</span>
                    </label>
                    <label class="flag-toggle">
                      <input type="checkbox" :checked="isChecked('expression', expr.id, 'done')" @change="toggleReview('expression', expr, 'done')" />
                      <span class="flag-toggle-text">완료</span>
                    </label>
                  </span>
                </div>
                <span v-if="!hideKorean" class="expr-meaning">{{ expr.meaning }}</span>
                <span
                  v-if="!hideKorean && expr.usageNote && !expr.usageNote.includes('확장:')"
                  class="expr-meaning"
                >
                  {{ expr.usageNote }}
                </span>
              </li>
            </ul>
          </article>

          <article v-if="expansionExamples.length" class="study-block">
            <h3><span class="block-dot block-dot--teal"></span>확장 문장</h3>
            <ul class="sentence-list">
              <li v-for="(example, idx) in expansionExamples" :key="`exp-${idx}`" class="expansion-item">
                <div class="chunk-row">
                  <div class="chunk-content">
                    <p v-if="!hideEnglish">{{ example.en }}</p>
                    <p v-if="!hideKorean" class="quiz-answer">{{ example.ko }}</p>
                  </div>
                  <span class="review-check-group chunk-checks">
                    <label class="flag-toggle">
                      <input type="checkbox" :checked="isChecked('expression', example.id, 'review')" @change="toggleReview('expression', example, 'review')" />
                      <span class="flag-toggle-text">복습</span>
                    </label>
                    <label class="flag-toggle">
                      <input type="checkbox" :checked="isChecked('expression', example.id, 'done')" @change="toggleReview('expression', example, 'done')" />
                      <span class="flag-toggle-text">완료</span>
                    </label>
                  </span>
                </div>
              </li>
            </ul>
          </article>

          <article v-if="chunksVisible.length" class="study-block">
            <h3><span class="block-dot block-dot--amber"></span>문법 포인트</h3>
            <ul class="sentence-list">
              <li v-for="chunk in chunksVisible" :key="chunk.id">
                <div class="chunk-row">
                  <div class="chunk-content">
                    <div v-if="!hideEnglish" class="structure-title-wrap">
                      <strong>{{ chunk.chunkText }}</strong>
                      <button
                        v-if="grammarRouteForChunk(chunk)"
                        type="button"
                        class="grammar-link-btn"
                        title="문법 설명으로 이동"
                        aria-label="문법 설명으로 이동"
                        @click="goToGrammar(chunk)"
                      >
                        <span class="grammar-link-icon" aria-hidden="true">✦</span>
                        <span>문법설명</span>
                      </button>
                    </div>
                    <span v-if="!hideKorean" class="chunk-meaning">{{ chunk.meaning }}</span>
                  </div>
                </div>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { pickStudyTranslation } from "@/utils/studyTranslation";

export default {
  name: "SentenceDetailView",
  data() {
    return {
      audioMode: "normal",
      isAudioPlaying: false,
      audioCurrentTime: 0,
      audioDuration: 0,
      sentenceTextVisible: true,
    };
  },
  props: {
    sentenceId: {
      type: String,
      default: "",
    },
  },
  computed: {
    resolvedSentenceId() {
      return this.sentenceId || this.$route.params.sentenceId;
    },
    detail() {
      return this.$store.getters["sentences/detailById"](this.resolvedSentenceId);
    },
    pageNumber() {
      const raw = String(this.resolvedSentenceId || "");
      const bookScoped = raw.match(/-s(\d+)$/);
      if (bookScoped) return bookScoped[1];
      const legacy = raw.match(/^s(\d+)$/i);
      if (legacy) return legacy[1];
      return raw;
    },
    hideEnglish() {
      return this.$store.getters["ui/hideEnglish"];
    },
    hideKorean() {
      return this.$store.getters["ui/hideKorean"];
    },
    studyTranslationLanguage() {
      return this.$store.getters["ui/studyTranslationLanguage"];
    },
    sentenceStudyTranslation() {
      if (!this.detail) return "";
      return pickStudyTranslation(this.detail.sentence, this.studyTranslationLanguage);
    },
    sentenceCompleted() {
      if (!this.detail) return false;
      return this.$store.getters["ui/isSentenceCompleted"](this.detail.sentence.id);
    },
    hideCompletedItems() {
      return this.$store.getters["ui/hideCompletedSentences"];
    },
    chunksVisible() {
      if (!this.detail) return [];
      if (!this.hideCompletedItems) return this.detail.chunks;
      const done = this.$store.getters["review/isFlagged"];
      return this.detail.chunks.filter((c) => !done("structure", c.id, "done"));
    },
    expressionsVisible() {
      if (!this.detail) return [];
      if (!this.hideCompletedItems) return this.detail.expressions;
      const done = this.$store.getters["review/isFlagged"];
      return this.detail.expressions.filter((e) => !done("expression", e.id, "done"));
    },
    currentAudioSrc() {
      if (!this.detail?.audio) return "";
      if (this.audioMode === "slow") {
        return this.detail.audio.slowSpeedUrl || this.detail.audio.normalSpeedUrl || "";
      }
      return this.detail.audio.normalSpeedUrl || this.detail.audio.slowSpeedUrl || "";
    },
    formattedCurrentTime() {
      return this.formatAudioTime(this.audioCurrentTime);
    },
    formattedDuration() {
      return this.formatAudioTime(this.audioDuration);
    },
    expansionExamples() {
      if (!this.detail) return [];
      if (Array.isArray(this.detail.expansionExamples) && this.detail.expansionExamples.length) {
        return this.detail.expansionExamples.map((item) => ({
          ...item,
          expression: item.en,
          meaning: item.ko,
        }));
      }

      // Backward compatibility: parse legacy "usageNote: 확장: ..." format.
      if (!this.expressionsVisible.length) return [];
      const result = [];
      const seen = new Set();
      this.expressionsVisible.forEach((expr) => {
        const note = expr.usageNote || "";
        if (!note.includes("확장:")) return;
        const raw = note.replace("확장:", "").trim();
        raw
          .split("/")
          .map((item) => item.trim())
          .filter(Boolean)
          .forEach((item, idx) => {
            const [en, ko] = item.split("=");
            const cleanEn = (en || "").trim();
            const cleanKo = (ko || "").trim();
            if (!cleanEn) return;
            const dedupeKey = `${cleanEn}|||${cleanKo}`;
            if (seen.has(dedupeKey)) return;
            seen.add(dedupeKey);
            result.push({
              id: `${expr.id}-exp-${idx}`,
              expression: cleanEn,
              en: cleanEn,
              meaning: cleanKo,
              ko: cleanKo,
            });
          });
      });
      return result;
    },
  },
  watch: {
    resolvedSentenceId() {
      this.audioMode = "normal";
      this.sentenceTextVisible = true;
      this.isAudioPlaying = false;
      this.audioCurrentTime = 0;
      this.audioDuration = 0;
      this.$nextTick(() => this.applyAudioRate());
    },
  },
  methods: {
    grammarRouteForChunk(chunk) {
      if (!chunk || !chunk.id || !this.detail) return null;
      if (this.detail.sentence.id === "s2" && chunk.id === "c2-4") {
        return {
          name: "grammar-chapter",
          params: { grammarId: "past-participle-postmodifier" },
          query: { bookId: this.$route.query.bookId },
        };
      }
      if (this.detail.sentence.id === "s23" && chunk.id === "c23-1") {
        return {
          name: "grammar-chapter",
          params: { grammarId: "regarding-usage" },
          query: { bookId: this.$route.query.bookId },
        };
      }
      return null;
    },
    goToGrammar(chunk) {
      const route = this.grammarRouteForChunk(chunk);
      if (!route) return;
      this.$router.push(route);
    },
    isChecked(type, id, flag) {
      if (!id) return false;
      return this.$store.getters["review/isFlagged"](type, id, flag);
    },
    toggleReview(type, payload, flag) {
      if (!this.detail || !payload || !payload.id) return;
      const text = payload.chunkText || payload.expression || payload.word || "";
      const meaning = payload.meaning || "";
      this.$store.dispatch("review/toggleItemFlag", {
        flag,
        item: {
          type,
          id: payload.id,
          sentenceId: this.detail.sentence.id,
          sentenceText: this.detail.sentence.originalText,
          text,
          meaning,
        },
      });
    },
    toggleCompleted() {
      if (!this.detail) return;
      this.$store.dispatch("ui/toggleSentenceCompleted", this.detail.sentence.id);
    },
    isReadStepChecked(step) {
      if (!this.detail) return false;
      return this.$store.getters["ui/isSentenceReadStepChecked"](this.detail.sentence.id, step);
    },
    toggleReadStep(step) {
      if (!this.detail) return;
      this.$store.dispatch("ui/toggleSentenceReadStep", {
        sentenceId: this.detail.sentence.id,
        step,
      });
    },
    setAudioMode(mode) {
      if (!["normal", "slow"].includes(mode)) return;
      this.audioMode = mode;
      this.isAudioPlaying = false;
      this.audioCurrentTime = 0;
      const player = this.$refs.sentenceAudio;
      if (player) player.pause();
      this.applyAudioRate();
    },
    formatAudioTime(sec) {
      const safe = Number.isFinite(sec) ? Math.max(0, Math.floor(sec)) : 0;
      const m = Math.floor(safe / 60);
      const s = String(safe % 60).padStart(2, "0");
      return `${m}:${s}`;
    },
    onAudioLoadedMetadata() {
      const player = this.$refs.sentenceAudio;
      if (!player) return;
      this.audioDuration = Number.isFinite(player.duration) ? player.duration : 0;
      this.audioCurrentTime = Number.isFinite(player.currentTime) ? player.currentTime : 0;
      this.applyAudioRate();
    },
    onAudioTimeUpdate() {
      const player = this.$refs.sentenceAudio;
      if (!player) return;
      this.audioCurrentTime = Number.isFinite(player.currentTime) ? player.currentTime : 0;
    },
    onAudioEnded() {
      this.isAudioPlaying = false;
      this.audioCurrentTime = 0;
    },
    onAudioPlay() {
      this.isAudioPlaying = true;
    },
    onAudioPause() {
      this.isAudioPlaying = false;
    },
    toggleAudioPlayback() {
      const player = this.$refs.sentenceAudio;
      if (!player) return;
      if (player.paused) {
        player.play();
      } else {
        player.pause();
      }
    },
    applyAudioRate() {
      const player = this.$refs.sentenceAudio;
      if (!player) return;
      player.playbackRate = this.audioMode === "slow" ? 0.85 : 1;
    },
    playAudio() {
      if (!this.detail || !this.detail.audio || !this.$refs.sentenceAudio) return;
      const player = this.$refs.sentenceAudio;
      player.src = this.currentAudioSrc;
      player.play();
    },
  },
};
</script>

<style scoped>
/* ─── Design Tokens ───────────────────────────────────────────────── */
.sentence-page {
  font-family: "Pretendard Variable", "Pretendard", -apple-system, "Apple SD Gothic Neo",
    "Noto Sans KR", sans-serif;
  background: var(--c-bg);
  color: var(--c-text-primary);
  padding: 0 0 32px;
  font-size: 14px;
  height: 100%;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

/* ─── Header ──────────────────────────────────────────────────────── */
.study-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 20px;
  background: var(--c-surface);
  border-bottom: 1px solid var(--c-border-subtle);
  flex-wrap: wrap;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.study-chip {
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: var(--c-radius-sm);
  background: var(--c-amber-light);
  border: 1px solid var(--c-amber-mid);
  color: var(--c-amber);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.study-header h2 {
  font-size: 15px;
  font-weight: 700;
  color: var(--c-text-primary);
  margin: 0;
  letter-spacing: -0.3px;
}

/* ─── Read steps ───────────────────────────────────────────────────── */
.read-check-group {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

/* ─── Checkbox base ────────────────────────────────────────────────── */
.sentence-page input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  margin: 0;
  border: 1.5px solid var(--c-border);
  border-radius: 4px;
  background: var(--c-surface);
  display: inline-grid;
  place-content: center;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s, transform 0.1s;
  flex-shrink: 0;
}

.sentence-page input[type="checkbox"]::before {
  content: "";
  width: 9px;
  height: 9px;
  transform: scale(0);
  transition: transform 0.12s ease-in-out;
  clip-path: polygon(14% 52%, 0 66%, 41% 100%, 100% 24%, 86% 10%, 40% 70%);
  background: #fff;
}

.sentence-page input[type="checkbox"]:checked {
  border-color: var(--c-blue);
  background: var(--c-blue);
}

.sentence-page input[type="checkbox"]:checked::before {
  transform: scale(1);
}

.sentence-page input[type="checkbox"]:hover {
  border-color: var(--c-blue-mid);
}

.sentence-page input[type="checkbox"]:active {
  transform: scale(0.853);
}

.sentence-page input[type="checkbox"]:focus-visible {
  outline: 2px solid var(--c-blue-mid);
  outline-offset: 2px;
}

/* ─── Flag toggle (복습/완료/학습완료) ──────────────────────────────── */
.flag-toggle {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.flag-toggle input {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: 0;
  padding: 0;
  border: 0;
  opacity: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  overflow: hidden;
}

.flag-toggle-text {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 26px;
  padding: 0 11px;
  border-radius: var(--c-radius-pill);
  border: 1px solid var(--c-border);
  background: var(--c-surface);
  color: var(--c-text-secondary);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.1px;
  cursor: pointer;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
  white-space: nowrap;
}

.flag-toggle-text::after {
  content: "✓";
  font-size: 11px;
  font-weight: 700;
  color: var(--c-blue);
  visibility: hidden;
  width: 0;
  overflow: hidden;
  transition: width 0.12s;
}

.flag-toggle input:checked + .flag-toggle-text {
  background: var(--c-blue-light);
  color: var(--c-blue);
  border-color: var(--c-blue-mid);
}

.flag-toggle input:checked + .flag-toggle-text::after {
  visibility: visible;
  width: auto;
}

.flag-toggle input:focus-visible + .flag-toggle-text {
  outline: 2px solid var(--c-blue-mid);
  outline-offset: 2px;
}

.complete-check {
  margin-left: 2px;
}

/* ─── Audio controls ───────────────────────────────────────────────── */
.study-audio-controls {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.audio-mode-toggle {
  display: inline-flex;
  border-radius: var(--c-radius-sm);
  border: 1px solid var(--c-border);
  overflow: hidden;
  background: var(--c-bg);
}

.audio-mode-btn {
  border: none;
  background: transparent;
  color: var(--c-text-secondary);
  padding: 5px 13px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.15s, color 0.15s;
}

.audio-mode-btn.active {
  background: var(--c-text-primary);
  color: #fff;
}

.audio-player-wrap {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 5px 12px 5px 6px;
  border-radius: var(--c-radius-pill);
  border: 1px solid var(--c-border);
  background: var(--c-surface);
}

.audio-play-btn {
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 50%;
  background: var(--c-text-primary);
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  transition: background 0.15s, transform 0.1s;
}

.audio-play-btn:hover {
  background: var(--c-blue);
}

.audio-play-btn:active {
  transform: scale(0.853);
}

.audio-play-icon {
  font-size: 11px;
  line-height: 1;
  margin-left: 1px;
}

.audio-pause-icon {
  font-size: 9px;
  letter-spacing: -2px;
  margin-left: 0;
}

.audio-time-display {
  font-size: 12px;
  font-weight: 500;
  color: var(--c-text-secondary);
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.02em;
}

/* ─── Core sentence box ────────────────────────────────────────────── */
.core-sentence-box {
  position: relative;
  margin: 16px 20px;
  padding: 20px 22px 20px 28px;
  background: var(--c-surface);
  border: 1px solid var(--c-border-subtle);
  border-left: 3px solid var(--c-amber);
  border-radius: var(--c-radius-lg);
}

.sentence-index {
  position: absolute;
  top: -11px;
  left: 20px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--c-amber);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0;
}

.sentence-text-wrap {
  flex: 1;
}

.sentence-english-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 0;
}

.sentence-english-row .sentence-original {
  flex: 1;
  margin-bottom: 10px;
}

.sentence-toggle-btn {
  margin-bottom: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: var(--c-text-secondary);
  cursor: pointer;
  padding: 0;
  transition: color 0.15s, background 0.15s;
}

.sentence-toggle-btn:hover {
  background: var(--c-border-subtle);
  color: var(--c-text-primary);
}

.sentence-toggle-btn svg {
  width: 15px;
  height: 15px;
  display: block;
}

.sentence-toggle-btn--hidden {
  color: var(--c-amber);
}

.sentence-original {
  font-size: 15px;
  font-weight: 500;
  color: var(--c-text-primary);
  line-height: 1.7;
  margin: 0 0 10px;
  letter-spacing: -0.1px;
}

.sentence-original--hidden {
  visibility: hidden;
}

.sentence-translation {
  font-size: 13px;
  color: var(--c-text-secondary);
  line-height: 1.65;
  margin: 0;
  padding-top: 10px;
  border-top: 1px solid var(--c-border-subtle);
}

/* ─── Study layout ─────────────────────────────────────────────────── */
.study-layout {
  padding: 0 20px;
}

.study-main {
  display: grid;
  gap: 8px;
}

/* ─── Study block ──────────────────────────────────────────────────── */
.study-block {
  background: var(--c-surface);
  border: 1px solid var(--c-border-subtle);
  border-radius: var(--c-radius-lg);
  overflow: hidden;
}

.study-block h3 {
  display: flex;
  align-items: center;
  gap: 7px;
  margin: 0;
  padding: 11px 16px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--c-text-secondary);
  background: var(--c-bg);
  border-bottom: 1px solid var(--c-border-subtle);
}

.block-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--c-blue);
  flex-shrink: 0;
}

.block-dot--amber {
  background: var(--c-amber);
}

.block-dot--teal {
  background: var(--c-teal);
}

/* ─── Sentence list ────────────────────────────────────────────────── */
.sentence-list {
  display: grid;
  list-style: none;
  margin: 0;
  padding: 0;
}

.sentence-list > li {
  padding: 12px 16px;
  border-bottom: 1px solid var(--c-border-subtle);
}

.sentence-list > li:last-child {
  border-bottom: none;
}

.review-item-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.review-item-row strong {
  font-size: 17px;
  font-weight: 600;
  color: var(--c-text-primary);
  letter-spacing: -0.15px;
  line-height: 1.45;
  flex: 1;
  min-width: 0;
}

.expr-meaning {
  display: block;
  margin-top: 4px;
  font-size: 10px;
  color: var(--c-text-secondary);
  line-height: 1.55;
}

.review-check-group {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
}

/* ─── Chunks ────────────────────────────────────────────────────────── */
.chunk-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.chunk-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  min-width: 0;
}

.chunk-content strong {
  font-size: 14px;
  font-weight: 600;
  color: var(--c-text-primary);
  letter-spacing: -0.1px;
}

.chunk-meaning {
  display: block;
  margin-top: 4px;
  color: var(--c-text-secondary);
  font-size: 12px;
  line-height: 1.55;
}

.chunk-checks {
  flex-shrink: 0;
  align-self: center;
}

/* ─── Structure title wrap + grammar link ──────────────────────────── */
.structure-title-wrap {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  flex-wrap: wrap;
}

.grammar-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 9px;
  border-radius: var(--c-radius-pill);
  border: 1px solid var(--c-amber-mid);
  background: var(--c-amber-light);
  color: var(--c-amber);
  font-size: 11px;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  letter-spacing: 0.02em;
  transition: background 0.14s, border-color 0.14s, transform 0.1s;
  white-space: nowrap;
}

.grammar-link-btn:hover {
  filter: brightness(0.95);
}

.grammar-link-btn:active {
  transform: scale(0.855);
}

.grammar-link-icon {
  font-size: 9px;
  opacity: 0.8;
}

/* ─── Expansion items ──────────────────────────────────────────────── */
.expansion-item p {
  margin: 2px 0;
  font-size: 14px;
  color: var(--c-text-primary);
}

.expansion-item .quiz-answer {
  font-size: 12px;
  color: var(--c-text-secondary);
  margin-top: 3px;
}
</style>
<template>
  <div class="page sentence-page">
    <p v-if="!detail">{{ $t("ebook.notFoundSentence") }}</p>
    <template v-else>
      <header class="study-header">
        <span class="study-chip">Study</span>
        <h2>핵심 문장</h2>
        <div class="read-check-group">
          <input type="checkbox" :checked="isReadStepChecked(1)" @change="toggleReadStep(1)" />
          <input type="checkbox" :checked="isReadStepChecked(2)" @change="toggleReadStep(2)" />
          <input type="checkbox" :checked="isReadStepChecked(3)" @change="toggleReadStep(3)" />
        </div>
        <label class="complete-check flag-toggle">
          <input type="checkbox" :checked="sentenceCompleted" @change="toggleCompleted" />
          <span class="flag-toggle-text">학습 완료</span>
        </label>
        <div v-if="detail.audio" class="study-audio-controls">
          <div class="audio-mode-toggle">
            <button
              type="button"
              class="audio-mode-btn"
              :class="{ active: audioMode === 'normal' }"
              @click="setAudioMode('normal')"
            >
              일반
            </button>
            <button
              type="button"
              class="audio-mode-btn"
              :class="{ active: audioMode === 'slow' }"
              @click="setAudioMode('slow')"
            >
              느리게
            </button>
          </div>
          <button type="button" class="audio-play-btn" :aria-label="isAudioPlaying ? '오디오 일시정지' : '오디오 재생'" @click="toggleAudioPlayback">
            <span v-if="!isAudioPlaying" class="audio-play-icon" aria-hidden="true">▶</span>
            <span v-else class="audio-play-icon audio-pause-icon" aria-hidden="true">❚❚</span>
          </button>
          <span class="audio-time-display">{{ formattedCurrentTime }} / {{ formattedDuration }}</span>
          <audio
            ref="sentenceAudio"
            :src="currentAudioSrc"
            preload="metadata"
            @loadedmetadata="onAudioLoadedMetadata"
            @timeupdate="onAudioTimeUpdate"
            @ended="onAudioEnded"
            @play="onAudioPlay"
            @pause="onAudioPause"
          ></audio>
        </div>
      </header>

      <section class="core-sentence-box">
        <span class="sentence-index">{{ pageNumber }}</span>
        <div class="sentence-text-wrap">
          <div class="sentence-english-row">
            <p v-if="!hideEnglish" class="sentence-original" :class="{ 'sentence-original--hidden': !sentenceTextVisible }">{{ detail.sentence.originalText }}</p>
            <button
              type="button"
              class="sentence-toggle-btn"
              :class="{ 'sentence-toggle-btn--hidden': !sentenceTextVisible }"
              :aria-label="sentenceTextVisible ? '문장 숨기기' : '문장 보기'"
              :title="sentenceTextVisible ? '문장 숨기기' : '문장 보기'"
              @click="sentenceTextVisible = !sentenceTextVisible"
            >
              <svg v-if="sentenceTextVisible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd"/><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.064 7 9.542 7 .847 0 1.669-.105 2.454-.303z"/></svg>
            </button>
          </div>
          <p v-if="!hideKorean" class="sentence-translation">{{ sentenceStudyTranslation }}</p>
        </div>
      </section>

      <div class="study-layout">
        <div class="study-main">
          <article v-if="expressionsVisible.length" class="study-block">
            <h3>핵심 표현</h3>
            <ul class="sentence-list">
              <li v-for="expr in expressionsVisible" :key="expr.id">
                <div class="review-item-row">
                  <strong v-if="!hideEnglish">{{ expr.expression }}</strong>
                  <span class="review-check-group">
                    <label class="flag-toggle">
                      <input type="checkbox" :checked="isChecked('expression', expr.id, 'review')" @change="toggleReview('expression', expr, 'review')" />
                      <span class="flag-toggle-text">복습</span>
                    </label>
                    <label class="flag-toggle">
                      <input type="checkbox" :checked="isChecked('expression', expr.id, 'done')" @change="toggleReview('expression', expr, 'done')" />
                      <span class="flag-toggle-text">완료</span>
                    </label>
                  </span>
                </div>
                <span v-if="!hideKorean">{{ expr.meaning }}</span>
                <span
                  v-if="!hideKorean && expr.usageNote && !expr.usageNote.includes('확장:')"
                  class="expr-meaning"
                >
                  {{ expr.usageNote }}
                </span>
              </li>
            </ul>
          </article>

          <article v-if="expansionExamples.length" class="study-block">
            <h3>확장 문장</h3>
            <ul class="sentence-list">
              <li v-for="(example, idx) in expansionExamples" :key="`exp-${idx}`" class="expansion-item">
                <div class="chunk-row">
                  <div class="chunk-content">
                    <p v-if="!hideEnglish">{{ example.en }}</p>
                    <p v-if="!hideKorean" class="quiz-answer">{{ example.ko }}</p>
                  </div>
                  <span class="review-check-group chunk-checks">
                    <label class="flag-toggle">
                      <input type="checkbox" :checked="isChecked('expression', example.id, 'review')" @change="toggleReview('expression', example, 'review')" />
                      <span class="flag-toggle-text">복습</span>
                    </label>
                    <label class="flag-toggle">
                      <input type="checkbox" :checked="isChecked('expression', example.id, 'done')" @change="toggleReview('expression', example, 'done')" />
                      <span class="flag-toggle-text">완료</span>
                    </label>
                  </span>
                </div>
              </li>
            </ul>
          </article>

          <article v-if="chunksVisible.length" class="study-block">
            <h3>문법 포인트</h3>
            <ul class="sentence-list">
              <li v-for="chunk in chunksVisible" :key="chunk.id">
                <div class="chunk-row">
                  <div class="chunk-content">
                    <div v-if="!hideEnglish" class="structure-title-wrap">
                      <strong>{{ chunk.chunkText }}</strong>
                      <button
                        v-if="grammarRouteForChunk(chunk)"
                        type="button"
                        class="grammar-link-btn"
                        title="문법 설명으로 이동"
                        aria-label="문법 설명으로 이동"
                        @click="goToGrammar(chunk)"
                      >
                        <span class="grammar-link-icon" aria-hidden="true">✦</span>
                        <span>문법설명</span>
                      </button>
                    </div>
                    <span v-if="!hideKorean" class="chunk-meaning">{{ chunk.meaning }}</span>
                  </div>
                </div>
              </li>
            </ul>
          </article>
        </div>
      </div>

      <!--
      <section v-if="detail.quizzes && detail.quizzes.length" class="practice-box">
        <h3>{{ $t("ebook.sections.quiz") }}</h3>
        <ol>
          <li v-for="quiz in detail.quizzes" :key="quiz.id">
            <p>{{ quiz.question }}</p>
            <p class="quiz-answer">{{ $t("ebook.answer") }}: {{ quiz.answer }}</p>
          </li>
        </ol>
      </section>
      -->

    </template>
  </div>
</template>

<script>
import { pickStudyTranslation } from "@/utils/studyTranslation";

export default {
  name: "SentenceDetailView",
  data() {
    return {
      audioMode: "normal",
      isAudioPlaying: false,
      audioCurrentTime: 0,
      audioDuration: 0,
      sentenceTextVisible: true,
    };
  },
  props: {
    sentenceId: {
      type: String,
      default: "",
    },
  },
  computed: {
    resolvedSentenceId() {
      return this.sentenceId || this.$route.params.sentenceId;
    },
    detail() {
      return this.$store.getters["sentences/detailById"](this.resolvedSentenceId);
    },
    pageNumber() {
      const raw = String(this.resolvedSentenceId || "");
      const bookScoped = raw.match(/-s(\d+)$/);
      if (bookScoped) return bookScoped[1];
      const legacy = raw.match(/^s(\d+)$/i);
      if (legacy) return legacy[1];
      return raw;
    },
    hideEnglish() {
      return this.$store.getters["ui/hideEnglish"];
    },
    hideKorean() {
      return this.$store.getters["ui/hideKorean"];
    },
    studyTranslationLanguage() {
      return this.$store.getters["ui/studyTranslationLanguage"];
    },
    sentenceStudyTranslation() {
      if (!this.detail) return "";
      return pickStudyTranslation(this.detail.sentence, this.studyTranslationLanguage);
    },
    sentenceCompleted() {
      if (!this.detail) return false;
      return this.$store.getters["ui/isSentenceCompleted"](this.detail.sentence.id);
    },
    hideCompletedItems() {
      return this.$store.getters["ui/hideCompletedSentences"];
    },
    chunksVisible() {
      if (!this.detail) return [];
      if (!this.hideCompletedItems) return this.detail.chunks;
      const done = this.$store.getters["review/isFlagged"];
      return this.detail.chunks.filter((c) => !done("structure", c.id, "done"));
    },
    expressionsVisible() {
      if (!this.detail) return [];
      if (!this.hideCompletedItems) return this.detail.expressions;
      const done = this.$store.getters["review/isFlagged"];
      return this.detail.expressions.filter((e) => !done("expression", e.id, "done"));
    },
    currentAudioSrc() {
      if (!this.detail?.audio) return "";
      if (this.audioMode === "slow") {
        return this.detail.audio.slowSpeedUrl || this.detail.audio.normalSpeedUrl || "";
      }
      return this.detail.audio.normalSpeedUrl || this.detail.audio.slowSpeedUrl || "";
    },
    formattedCurrentTime() {
      return this.formatAudioTime(this.audioCurrentTime);
    },
    formattedDuration() {
      return this.formatAudioTime(this.audioDuration);
    },
    expansionExamples() {
      if (!this.detail) return [];
      if (Array.isArray(this.detail.expansionExamples) && this.detail.expansionExamples.length) {
        return this.detail.expansionExamples.map((item) => ({
          ...item,
          expression: item.en,
          meaning: item.ko,
        }));
      }

      // Backward compatibility: parse legacy "usageNote: 확장: ..." format.
      if (!this.expressionsVisible.length) return [];
      const result = [];
      const seen = new Set();
      this.expressionsVisible.forEach((expr) => {
        const note = expr.usageNote || "";
        if (!note.includes("확장:")) return;
        const raw = note.replace("확장:", "").trim();
        raw
          .split("/")
          .map((item) => item.trim())
          .filter(Boolean)
          .forEach((item, idx) => {
            const [en, ko] = item.split("=");
            const cleanEn = (en || "").trim();
            const cleanKo = (ko || "").trim();
            if (!cleanEn) return;
            const dedupeKey = `${cleanEn}|||${cleanKo}`;
            if (seen.has(dedupeKey)) return;
            seen.add(dedupeKey);
            result.push({
              id: `${expr.id}-exp-${idx}`,
              expression: cleanEn,
              en: cleanEn,
              meaning: cleanKo,
              ko: cleanKo,
            });
          });
      });
      return result;
    },
  },
  watch: {
    resolvedSentenceId() {
      this.audioMode = "normal";
      this.sentenceTextVisible = true;
      this.isAudioPlaying = false;
      this.audioCurrentTime = 0;
      this.audioDuration = 0;
      this.$nextTick(() => this.applyAudioRate());
    },
  },
  methods: {
    grammarRouteForChunk(chunk) {
      if (!chunk || !chunk.id || !this.detail) return null;
      if (this.detail.sentence.id === "s2" && chunk.id === "c2-4") {
        return {
          name: "grammar-chapter",
          params: { grammarId: "past-participle-postmodifier" },
          query: { bookId: this.$route.query.bookId },
        };
      }
      if (this.detail.sentence.id === "s23" && chunk.id === "c23-1") {
        return {
          name: "grammar-chapter",
          params: { grammarId: "regarding-usage" },
          query: { bookId: this.$route.query.bookId },
        };
      }
      return null;
    },
    goToGrammar(chunk) {
      const route = this.grammarRouteForChunk(chunk);
      if (!route) return;
      this.$router.push(route);
    },
    isChecked(type, id, flag) {
      if (!id) return false;
      return this.$store.getters["review/isFlagged"](type, id, flag);
    },
    toggleReview(type, payload, flag) {
      if (!this.detail || !payload || !payload.id) return;
      const text = payload.chunkText || payload.expression || payload.word || "";
      const meaning = payload.meaning || "";
      this.$store.dispatch("review/toggleItemFlag", {
        flag,
        item: {
          type,
          id: payload.id,
          sentenceId: this.detail.sentence.id,
          sentenceText: this.detail.sentence.originalText,
          text,
          meaning,
        },
      });
    },
    toggleCompleted() {
      if (!this.detail) return;
      this.$store.dispatch("ui/toggleSentenceCompleted", this.detail.sentence.id);
    },
    isReadStepChecked(step) {
      if (!this.detail) return false;
      return this.$store.getters["ui/isSentenceReadStepChecked"](this.detail.sentence.id, step);
    },
    toggleReadStep(step) {
      if (!this.detail) return;
      this.$store.dispatch("ui/toggleSentenceReadStep", {
        sentenceId: this.detail.sentence.id,
        step,
      });
    },
    setAudioMode(mode) {
      if (!["normal", "slow"].includes(mode)) return;
      this.audioMode = mode;
      this.isAudioPlaying = false;
      this.audioCurrentTime = 0;
      const player = this.$refs.sentenceAudio;
      if (player) player.pause();
      this.applyAudioRate();
    },
    formatAudioTime(sec) {
      const safe = Number.isFinite(sec) ? Math.max(0, Math.floor(sec)) : 0;
      const m = Math.floor(safe / 60);
      const s = String(safe % 60).padStart(2, "0");
      return `${m}:${s}`;
    },
    onAudioLoadedMetadata() {
      const player = this.$refs.sentenceAudio;
      if (!player) return;
      this.audioDuration = Number.isFinite(player.duration) ? player.duration : 0;
      this.audioCurrentTime = Number.isFinite(player.currentTime) ? player.currentTime : 0;
      this.applyAudioRate();
    },
    onAudioTimeUpdate() {
      const player = this.$refs.sentenceAudio;
      if (!player) return;
      this.audioCurrentTime = Number.isFinite(player.currentTime) ? player.currentTime : 0;
    },
    onAudioEnded() {
      this.isAudioPlaying = false;
      this.audioCurrentTime = 0;
    },
    onAudioPlay() {
      this.isAudioPlaying = true;
    },
    onAudioPause() {
      this.isAudioPlaying = false;
    },
    toggleAudioPlayback() {
      const player = this.$refs.sentenceAudio;
      if (!player) return;
      if (player.paused) {
        player.play();
      } else {
        player.pause();
      }
    },
    applyAudioRate() {
      const player = this.$refs.sentenceAudio;
      if (!player) return;
      player.playbackRate = this.audioMode === "slow" ? 0.85 : 1;
    },
    playAudio() {
      if (!this.detail || !this.detail.audio || !this.$refs.sentenceAudio) return;
      const player = this.$refs.sentenceAudio;
      player.src = this.currentAudioSrc;
      player.play();
    },
  },
};
</script>

<style scoped>
.study-layout {
  grid-template-columns: minmax(0, 1fr);
  gap: 16px;
  font-size: 15px;
}

.study-main {
  display: grid;
  gap: 10px;
}

.study-block {
  background: transparent;
  border: 0;
  border-radius: 0;
  padding: 8px 12px;
  box-shadow: none;
}

.study-block h3 {
  margin: 0 0 8px;
  padding: 6px 10px;
  border-radius: 8px;
  background: var(--c-amber-light);
  border-bottom: 0;
  font-size: 16px;
  font-weight: 800;
  color: var(--c-amber);
  letter-spacing: 0.1px;
}

.sentence-list {
  display: grid;
  gap: 8px;
}

.sentence-list > li {
  padding: 6px 0;
  border: 0;
  border-radius: 0;
  background: transparent;
}

.sentence-page input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  width: 15px;
  height: 15px;
  margin: 0;
  border: 1.5px solid var(--c-blue-mid);
  border-radius: 4px;
  background: var(--c-surface);
  display: inline-grid;
  place-content: center;
  cursor: pointer;
  transition: border-color 0.15s ease, background 0.15s ease, box-shadow 0.15s ease, transform 0.12s ease;
}

.sentence-page input[type="checkbox"]::before {
  content: "";
  width: 13px;
  height: 13px;
  transform: scale(0);
  transition: transform 0.12s ease-in-out;
  clip-path: polygon(14% 52%, 0 66%, 41% 100%, 100% 24%, 86% 10%, 40% 70%);
  background: #ffffff;
}

.sentence-page input[type="checkbox"]:checked {
  border-color: var(--c-blue);
  background: var(--c-blue);
}

.sentence-page input[type="checkbox"]:checked::before {
  transform: scale(1);
}

.sentence-page input[type="checkbox"]:hover {
  border-color: var(--c-blue-mid);
}

.sentence-page input[type="checkbox"]:active {
  transform: translateY(1px);
}

.sentence-page input[type="checkbox"]:focus-visible {
  outline: 2px solid #92b1e8;
  outline-offset: 1px;
}

.sentence-page label {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.review-check-group {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.flag-toggle {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.flag-toggle input {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: 0;
  padding: 0;
  border: 0;
  opacity: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  overflow: hidden;
}

.flag-toggle-text {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  min-height: 26px;
  padding: 0 10px;
  border-radius: 999px;
  border: 1px solid var(--c-border);
  background: transparent;
  color: var(--c-text-primary);
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.2px;
  transition: background-color 0.16s ease, color 0.16s ease, border-color 0.16s ease;
  cursor: pointer;
}

.flag-toggle-text::after {
  content: "✓";
  color: var(--c-blue);
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
  visibility: hidden;
}

.flag-toggle input:checked + .flag-toggle-text {
  background: var(--c-blue-light);
  color: var(--c-blue);
  border-color: var(--c-blue-mid);
}

.flag-toggle input:checked + .flag-toggle-text::after {
  visibility: visible;
}

.flag-toggle input:focus-visible + .flag-toggle-text {
  border-color: var(--c-blue-mid);
}

.read-check-group {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  margin-right: 1px;
  color: var(--c-text-secondary);
  font-size: 11px;
}

.audio-mode-toggle {
  display: inline-flex;
  gap: 0;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--c-blue-mid);
  background: var(--c-blue-light);
  margin-right: 6px;
}

.audio-mode-btn {
  border: 0;
  background: transparent;
  color: var(--c-text-primary);
  padding: 5px 12px;
  font-size: 13px;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
}

.audio-mode-btn.active {
  background: var(--c-blue);
  color: #ffffff;
}

.study-audio-controls {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.audio-player {
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--c-surface);
  border: 0.5px solid var(--c-border);
  border-radius: 20px;
  padding: 4px 10px;
  font-size: 11px;
  color: var(--c-text-secondary);
}

.audio-play-btn {
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: 999px;
  background: var(--c-blue);
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
}

.audio-play-icon {
  font-size: 12px;
  line-height: 1;
}

.audio-pause-icon {
  font-size: 10px;
  letter-spacing: -2px;
}

.audio-time-display {
  font-size: 13px;
  font-weight: 500;
  color: var(--c-text-primary);
  letter-spacing: -0.1px;
}

.read-check-title {
  font-size: 11px;
  color: var(--c-text-secondary);
}

.read-check-group label {
  display: inline-flex;
  align-items: center;
  gap: 2px;
}

.read-check-group input,
.complete-check input {
  margin: 0;
}

.complete-check {
  margin-left: 0;
  background: transparent;
  padding: 0;
  border-radius: 0;
  gap: 0;
}

.structure-title-wrap {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.chunk-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.chunk-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  min-width: 0;
}

.chunk-meaning {
  display: inline-block;
  margin-top: 5px;
  color: var(--c-text-secondary);
  font-size: 13px;
}

.chunk-checks {
  flex-shrink: 0;
  align-self: center;
}

.expansion-item p {
  margin: 2px 0;
}

.expansion-item {
  background: transparent;
}

.expansion-item .quiz-answer {
  color: var(--c-text-secondary);
  font-size: 13px;
}

.grammar-link-btn {
  border: 1px solid var(--c-blue-mid);
  background: var(--c-blue-light);
  color: var(--c-blue);
  border-radius: 999px;
  padding: 2px 10px;
  font-size: 12px;
  line-height: 1.35;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  justify-content: flex-start;
  cursor: pointer;
  transition: transform 0.15s ease, border-color 0.15s ease, background 0.15s ease;
}

.grammar-link-btn:hover {
  border-color: var(--c-blue);
  filter: brightness(0.95);
}

.grammar-link-btn:active {
  transform: translateY(0);
}

.grammar-link-icon {
  font-size: 10px;
  color: var(--c-blue);
}

.grammar-link-arrow {
  font-size: 11px;
}
</style>
