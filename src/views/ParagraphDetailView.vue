<template>
  <div class="paragraph-page">
    <p v-if="!paragraph">{{ $t("ebook.notFoundSentence") }}</p>
    <template v-else>
      <header class="para-header">
        <div class="header-left">
          <span class="para-chip">Paragraph</span>
          <h2>{{ paragraph.title }}</h2>
        </div>
        <div v-if="paragraph.normalSpeedUrl" class="para-audio-controls">
          <div class="audio-player-wrap">
            <button
              type="button"
              class="audio-play-btn"
              :aria-label="isPlaying ? '오디오 일시정지' : '오디오 재생'"
              @click="togglePlay"
            >
              <span v-if="!isPlaying" class="audio-play-icon" aria-hidden="true">▶</span>
              <span v-else class="audio-play-icon audio-pause-icon" aria-hidden="true">❚❚</span>
            </button>
            <span class="audio-time-display">{{ formattedCurrentTime }} / {{ formattedDuration }}</span>
          </div>
          <audio
            ref="paragraphAudio"
            :src="paragraph.normalSpeedUrl"
            preload="metadata"
            @loadedmetadata="onLoadedMetadata"
            @timeupdate="onTimeUpdate"
            @ended="onEnded"
            @play="onPlay"
            @pause="onPause"
          ></audio>
        </div>
      </header>

      <section v-if="resolvedViewMode === 'overview'" class="para-body">
        <div class="para-text-box">
          <p v-if="!hideEnglish" class="para-en">{{ paragraph.englishText }}</p>
          <p v-if="!hideKorean" class="para-ko">{{ paragraphStudyTranslation }}</p>
        </div>
        <a
          v-if="paragraph.sourceUrl"
          :href="paragraph.sourceUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="para-source-link"
        >
          <svg class="para-source-icon" viewBox="0 0 20 20" fill="none">
            <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" stroke="currentColor" stroke-width="1.5"/>
            <path d="M8 7l-.8-2C9.16 4.36 11.2 4.6 12.8 5.8c1.6 1.2 2.4 3 2 4.8l-1.6-.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M7.5 13.5c.83.67 1.9 1 3 1 .53 0 1.04-.09 1.5-.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <polygon points="8,8.5 13,11 8,13.5" fill="currentColor" opacity="0.8"/>
          </svg>
          <span>{{ paragraph.sourceLabel || '원본 영상 보기' }}</span>
          <svg class="para-source-external" viewBox="0 0 12 12" fill="none">
            <path d="M5 2H2a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V7" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
            <path d="M8 1h3v3M11 1L6.5 5.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </section>

      <section v-else class="para-body">
        <div class="sentences-block">
          <h3 class="sentences-title"><span class="block-dot"></span>문단 구성 문장</h3>
          <ol class="sentences-list">
            <li
              v-for="(item, index) in paragraphSentences"
              :key="item.id"
              class="sentence-item-link"
              @click="goToSentenceDetail(item.id)"
            >
              <span class="sentence-no">{{ index + 1 }}</span>
              <div class="sentence-texts">
                <p v-if="!hideEnglish" class="sent-en">{{ item.originalText }}</p>
                <p v-if="!hideKorean" class="sent-ko">{{ sentenceStudyLine(item) }}</p>
              </div>
              <span class="sentence-arrow" aria-hidden="true">›</span>
            </li>
          </ol>
        </div>
      </section>
    </template>
  </div>
</template>

<script>
import { paragraphs, sentences } from "@/data/englishLearningDb";
import { pickStudyTranslation } from "@/utils/studyTranslation";

export default {
  name: "ParagraphDetailView",
  props: {
    paragraphId: { type: String, default: "" },
    viewMode: { type: String, default: "" },
  },
  data() {
    return {
      isPlaying: false,
      currentTime: 0,
      duration: 0,
    };
  },
  computed: {
    resolvedParagraphId() {
      return this.paragraphId || this.$route.params.paragraphId;
    },
    resolvedViewMode() {
      return this.viewMode || this.$route.query.section || "overview";
    },
    paragraph() {
      return paragraphs.find((item) => item.id === this.resolvedParagraphId) || null;
    },
    paragraphSentences() {
      if (!this.paragraph) return [];
      const map = new Map(sentences.map((item) => [item.id, item]));
      return this.paragraph.sentenceIds
        .map((id) => map.get(id))
        .filter(Boolean)
        .filter(
          (item) =>
            !this.hideCompletedSentences ||
            !this.$store.getters["ui/isSentenceCompleted"](item.id)
        );
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
    paragraphStudyTranslation() {
      return pickStudyTranslation(this.paragraph, this.studyTranslationLanguage);
    },
    hideCompletedSentences() {
      return this.$store.getters["ui/hideCompletedSentences"];
    },
    formattedCurrentTime() {
      return this.formatTime(this.currentTime);
    },
    formattedDuration() {
      return this.formatTime(this.duration);
    },
  },
  methods: {
    sentenceStudyLine(sentence) {
      return pickStudyTranslation(sentence, this.studyTranslationLanguage);
    },
    goToSentenceDetail(sentenceId) {
      if (!sentenceId) return;
      this.$router.push({
        name: "sentence-detail",
        params: { sentenceId },
        query: { ...this.$route.query },
      });
    },
    formatTime(sec) {
      const safe = Number.isFinite(sec) ? Math.max(0, Math.floor(sec)) : 0;
      const m = Math.floor(safe / 60);
      const s = String(safe % 60).padStart(2, "0");
      return `${m}:${s}`;
    },
    togglePlay() {
      const p = this.$refs.paragraphAudio;
      if (!p) return;
      if (p.paused) {
        p.play();
      } else {
        p.pause();
      }
    },
    onLoadedMetadata() {
      const p = this.$refs.paragraphAudio;
      if (!p) return;
      this.duration = Number.isFinite(p.duration) ? p.duration : 0;
      this.currentTime = 0;
    },
    onTimeUpdate() {
      const p = this.$refs.paragraphAudio;
      if (!p) return;
      this.currentTime = Number.isFinite(p.currentTime) ? p.currentTime : 0;
    },
    onEnded() {
      this.isPlaying = false;
      this.currentTime = 0;
    },
    onPlay() {
      this.isPlaying = true;
    },
    onPause() {
      this.isPlaying = false;
    },
    playAudio() {
      if (!this.paragraph || !this.$refs.paragraphAudio) return;
      this.$refs.paragraphAudio.play();
    },
  },
};
</script>

<style scoped>
.paragraph-page {
  font-size: 14px;
  color: var(--c-text-primary);
  background: var(--c-bg);
  padding: 0 0 32px;
  line-height: 1.6;
  height: 100%;
  overflow-y: auto;
  -webkit-font-smoothing: antialiased;
}

/* ─── Header ── */
.para-header {
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
}

.para-chip {
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
  white-space: nowrap;
}

.para-header h2 {
  font-size: 15px;
  font-weight: 700;
  color: var(--c-text-primary);
  margin: 0;
  letter-spacing: -0.3px;
}

/* ─── Audio ── */
.para-audio-controls {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
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
  background: var(--c-blue);
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  transition: filter 0.15s, transform 0.1s;
}

.audio-play-btn:hover {
  filter: brightness(1.08);
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
  color: var(--c-text-primary);
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.02em;
}

/* ─── Body ── */
.para-body {
  padding: 20px 20px;
}

/* ─── Overview ── */
.para-text-box {
  background: var(--c-surface);
  border: 1px solid var(--c-border-subtle);
  border-left: 3px solid var(--c-amber);
  border-radius: var(--c-radius-lg);
  padding: 20px 22px;
}

.para-source-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-top: 12px;
  padding: 5px 11px;
  border-radius: var(--c-radius-pill);
  border: 1.5px solid #ef4444;
  background: #fff1f2;
  color: #dc2626;
  font-size: 11px;
  font-weight: 700;
  text-decoration: none;
  transition: filter 0.15s;
}

html[data-theme="dark"] .para-source-link {
  border-color: #f87171;
  background: rgba(239, 68, 68, 0.12);
  color: #f87171;
}

.para-source-link:hover {
  filter: brightness(0.93);
}

.para-source-icon {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}

.para-source-external {
  width: 9px;
  height: 9px;
  opacity: 0.7;
  flex-shrink: 0;
}

.para-en {
  font-size: 15px;
  font-weight: 500;
  color: var(--c-text-primary);
  line-height: 1.8;
  margin: 0 0 12px;
  letter-spacing: -0.1px;
}

.para-ko {
  font-size: 13px;
  color: var(--c-text-secondary);
  line-height: 1.7;
  margin: 0;
  padding-top: 12px;
  border-top: 1px solid var(--c-border-subtle);
}

/* ─── Sentences view ── */
.sentences-block {
  background: var(--c-surface);
  border: 1px solid var(--c-border-subtle);
  border-radius: var(--c-radius-lg);
  overflow: hidden;
}

.sentences-title {
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

.sentences-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
}

.sentences-list > li {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 14px 16px;
  border-bottom: 1px solid var(--c-border-subtle);
}

.sentences-list > li:last-child {
  border-bottom: none;
}

.sentence-item-link {
  cursor: pointer;
  transition: background 0.13s;
}

.sentence-item-link:hover {
  background: var(--c-border-subtle);
}

.sentence-item-link:active {
  background: var(--c-blue-light);
}

.sentence-arrow {
  font-size: 20px;
  color: var(--c-text-muted);
  flex-shrink: 0;
  line-height: 1;
  align-self: center;
  margin-left: auto;
}

.sentence-no {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--c-border-subtle);
  color: var(--c-text-muted);
  font-size: 11px;
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 2px;
}

.sentence-texts {
  flex: 1;
  min-width: 0;
}

.sent-en {
  font-size: 14px;
  font-weight: 500;
  color: var(--c-text-primary);
  line-height: 1.65;
  margin: 0 0 5px;
  letter-spacing: -0.1px;
}

.sent-ko {
  font-size: 12px;
  color: var(--c-text-secondary);
  line-height: 1.55;
  margin: 0;
}
</style>
