<template>
  <div
    v-if="layoutMode === 'split'"
    class="split-scene"
    :class="{ 'split-scene--compact': compact }"
  >
    <div class="split-panel split-front">
      <p class="face-label">{{ labels.front }}</p>
      <p v-if="badge" class="face-badge">{{ badge }}</p>
      <p class="term">{{ card.term }}</p>
    </div>
    <div class="split-panel split-back">
      <p class="face-label">{{ labels.back }}</p>
      <p v-if="badge" class="face-badge">{{ badge }}</p>
      <div v-if="card.normalSpeedUrl" class="fc-audio-controls" @click.stop>
        <div class="audio-player-wrap">
          <button type="button" class="audio-skip-btn" aria-label="-3초" @click="skipBack">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.5"/><text x="9" y="16" font-size="7" font-weight="bold" fill="currentColor" stroke="none">3</text></svg>
          </button>
          <button
            type="button"
            class="audio-play-btn"
            :aria-label="isPlaying ? '오디오 일시정지' : '오디오 재생'"
            @click="togglePlay"
          >
            <span v-if="!isPlaying" class="audio-play-icon" aria-hidden="true">▶</span>
            <span v-else class="audio-play-icon audio-pause-icon" aria-hidden="true">❚❚</span>
          </button>
          <button type="button" class="audio-skip-btn" aria-label="+3초" @click="skipForward">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-.49-3.5"/><text x="9" y="16" font-size="7" font-weight="bold" fill="currentColor" stroke="none">3</text></svg>
          </button>
          <input
            type="range"
            class="audio-seekbar"
            min="0"
            max="100"
            step="0.1"
            :value="seekValue"
            :style="{ background: `linear-gradient(to right, var(--c-blue) ${seekValue}%, var(--c-border) ${seekValue}%)` }"
            aria-label="재생 위치"
            @input="seek"
            @click.stop
          />
          <span class="audio-time-display">{{ formattedCurrentTime }} / {{ formattedDuration }}</span>
        </div>
        <audio
          ref="cardAudio"
          :src="card.normalSpeedUrl"
          preload="metadata"
          @loadedmetadata="onLoadedMetadata"
          @timeupdate="onTimeUpdate"
          @ended="onEnded"
          @play="onPlay"
          @pause="onPause"
        ></audio>
      </div>
      <p class="explanation de">{{ backExplanation }}</p>
      <p v-if="showKoOnBack && card.explanationKo" class="explanation ko">
        {{ card.explanationKo }}
      </p>
    </div>
  </div>
  <div
    v-else
    class="flip-scene"
    :class="{ 'flip-scene--interactive': interactive }"
    role="button"
    :tabindex="interactive ? 0 : -1"
    :aria-label="revealed ? '뒷면' : '앞면'"
    @click="onFlipTap"
    @keyup.enter="onFlipTap"
    @keyup.space.prevent="onFlipTap"
  >
    <div class="flip-card" :class="{ flipped: revealed }">
      <div class="flip-inner">
        <div class="flip-face flip-front">
          <p class="face-label">{{ labels.front }}</p>
          <p v-if="badge" class="face-badge">{{ badge }}</p>
          <p class="term">{{ card.term }}</p>
          <p v-if="interactive && !revealed" class="tap-hint">{{ tapHintFront }}</p>
        </div>
        <div class="flip-face flip-back">
          <p class="face-label">{{ labels.back }}</p>
          <p v-if="badge" class="face-badge">{{ badge }}</p>
          <div v-if="card.normalSpeedUrl" class="fc-audio-controls" @click.stop>
            <div class="audio-player-wrap">
              <button type="button" class="audio-skip-btn" aria-label="-3초" @click="skipBack">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.5"/><text x="9" y="16" font-size="7" font-weight="bold" fill="currentColor" stroke="none">3</text></svg>
              </button>
              <button
                type="button"
                class="audio-play-btn"
                :aria-label="isPlaying ? '오디오 일시정지' : '오디오 재생'"
                @click="togglePlay"
              >
                <span v-if="!isPlaying" class="audio-play-icon" aria-hidden="true">▶</span>
                <span v-else class="audio-play-icon audio-pause-icon" aria-hidden="true">❚❚</span>
              </button>
              <button type="button" class="audio-skip-btn" aria-label="+3초" @click="skipForward">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-.49-3.5"/><text x="9" y="16" font-size="7" font-weight="bold" fill="currentColor" stroke="none">3</text></svg>
              </button>
              <input
                type="range"
                class="audio-seekbar"
                min="0"
                max="100"
                step="0.1"
                :value="seekValue"
                :style="{ background: `linear-gradient(to right, var(--c-blue) ${seekValue}%, var(--c-border) ${seekValue}%)` }"
                aria-label="재생 위치"
                @input="seek"
                @click.stop
              />
              <span class="audio-time-display">{{ formattedCurrentTime }} / {{ formattedDuration }}</span>
            </div>
            <audio
              ref="cardAudio"
              :src="card.normalSpeedUrl"
              preload="metadata"
              @loadedmetadata="onLoadedMetadata"
              @timeupdate="onTimeUpdate"
              @ended="onEnded"
              @play="onPlay"
              @pause="onPause"
            ></audio>
          </div>
          <p class="explanation de">{{ backExplanation }}</p>
          <p v-if="showKoOnBack && card.explanationKo" class="explanation ko">
            {{ card.explanationKo }}
          </p>
          <p v-if="interactive && revealed" class="tap-hint">{{ tapHintBack }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCardBackExplanation } from "@/utils/flashcardCardResolver";

export default {
  name: "FlashcardCardPanel",
  props: {
    card: { type: Object, required: true },
    labels: {
      type: Object,
      default: () => ({ front: "앞면", back: "뒷면" }),
    },
    showKoOnBack: { type: Boolean, default: true },
    targetLang: { type: String, default: "de" },
    layoutMode: { type: String, default: "flip" },
    revealed: { type: Boolean, default: false },
    interactive: { type: Boolean, default: true },
    compact: { type: Boolean, default: false },
    tapHintFront: { type: String, default: "탭하여 답 보기" },
    tapHintBack: { type: String, default: "탭하여 앞면" },
    badge: { type: String, default: "" },
  },
  data() {
    return {
      isPlaying: false,
      currentTime: 0,
      duration: 0,
    };
  },
  computed: {
    backExplanation() {
      return getCardBackExplanation(this.card, this.targetLang);
    },
    formattedCurrentTime() {
      return this.formatTime(this.currentTime);
    },
    formattedDuration() {
      return this.formatTime(this.duration);
    },
    seekValue() {
      if (!this.duration) return 0;
      return (this.currentTime / this.duration) * 100;
    },
  },
  watch: {
    "card.id"() {
      this.resetAudio();
    },
    "card.normalSpeedUrl"() {
      this.resetAudio();
    },
  },
  methods: {
    onFlipTap() {
      if (!this.interactive || this.layoutMode === "split") return;
      this.$emit("toggle");
    },
    formatTime(sec) {
      const safe = Number.isFinite(sec) ? Math.max(0, Math.floor(sec)) : 0;
      const m = Math.floor(safe / 60);
      const s = String(safe % 60).padStart(2, "0");
      return `${m}:${s}`;
    },
    getAudioEl() {
      return this.$refs.cardAudio || null;
    },
    resetAudio() {
      const player = this.getAudioEl();
      if (player) {
        player.pause();
        player.currentTime = 0;
      }
      this.isPlaying = false;
      this.currentTime = 0;
      this.duration = 0;
    },
    togglePlay() {
      const player = this.getAudioEl();
      if (!player) return;
      if (player.paused) {
        player.play();
      } else {
        player.pause();
      }
    },
    onLoadedMetadata() {
      const player = this.getAudioEl();
      if (!player) return;
      this.duration = Number.isFinite(player.duration) ? player.duration : 0;
      this.currentTime = 0;
    },
    onTimeUpdate() {
      const player = this.getAudioEl();
      if (!player) return;
      this.currentTime = Number.isFinite(player.currentTime) ? player.currentTime : 0;
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
    seek(e) {
      const player = this.getAudioEl();
      if (!player || !this.duration) return;
      player.currentTime = (Number(e.target.value) / 100) * this.duration;
    },
    skipBack() {
      const player = this.getAudioEl();
      if (!player) return;
      player.currentTime = Math.max(0, player.currentTime - 3);
    },
    skipForward() {
      const player = this.getAudioEl();
      if (!player) return;
      player.currentTime = Math.min(this.duration, player.currentTime + 3);
    },
  },
  beforeDestroy() {
    this.resetAudio();
  },
};
</script>

<style scoped>
.flip-scene {
  perspective: 1200px;
  outline: none;
}

.flip-scene--interactive {
  cursor: pointer;
}

.flip-card {
  min-height: 340px;
  position: relative;
}

.flip-inner {
  position: relative;
  width: 100%;
  min-height: 340px;
  transition: transform 0.55s cubic-bezier(0.4, 0.2, 0.2, 1);
  transform-style: preserve-3d;
}

.flip-card.flipped .flip-inner {
  transform: rotateY(180deg);
}

.flip-face {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 28px 24px;
  text-align: center;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: var(--c-radius-lg);
  border: 1px solid var(--c-border);
  background: var(--c-surface);
  box-shadow: 0 8px 28px rgba(26, 23, 20, 0.06);
}

.flip-front {
  align-items: flex-start;
  justify-content: flex-start;
  overflow-y: auto;
  text-align: left;
}

.flip-back {
  transform: rotateY(180deg);
  background: var(--c-blue-light);
  border-color: var(--c-blue-mid);
  align-items: flex-start;
  justify-content: flex-start;
  overflow-y: auto;
}

.split-scene {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  min-height: 340px;
}

.split-scene--compact {
  min-height: 280px;
}

.split-panel {
  display: flex;
  flex-direction: column;
  padding: 24px 20px;
  border-radius: var(--c-radius-lg);
  border: 1px solid var(--c-border);
  background: var(--c-surface);
  box-shadow: 0 4px 16px rgba(26, 23, 20, 0.05);
  overflow-y: auto;
}

.split-front {
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
}

.split-back {
  background: var(--c-blue-light);
  border-color: var(--c-blue-mid);
  align-items: flex-start;
  text-align: left;
}

.face-label {
  margin: 0 0 12px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--c-text-muted);
}

.face-badge {
  margin: -6px 0 10px;
  font-size: 11px;
  font-weight: 700;
  color: var(--c-amber);
}

.term {
  margin: 0;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.55;
  color: var(--c-text-primary);
  white-space: pre-line;
  max-width: 100%;
  width: 100%;
  text-align: left;
}

.explanation {
  margin: 0 0 14px;
  font-size: 15px;
  line-height: 1.55;
  max-width: 100%;
  white-space: pre-line;
  text-align: left;
}

.explanation.de {
  color: var(--c-text-primary);
  font-weight: 500;
}

.explanation.ko {
  margin-bottom: 0;
  color: var(--c-text-secondary);
  font-size: 13px;
}

.tap-hint {
  margin: 20px 0 0;
  font-size: 11px;
  color: var(--c-text-muted);
}

.fc-audio-controls {
  width: 100%;
  margin: 0 0 14px;
}

.audio-player-wrap {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.65);
  border: 1px solid var(--c-border);
  width: 100%;
}

.audio-play-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  background: var(--c-blue);
  color: #fff;
  cursor: pointer;
}

.audio-play-btn:hover {
  opacity: 0.9;
}

.audio-play-icon {
  font-size: 11px;
  line-height: 1;
}

.audio-pause-icon {
  font-size: 10px;
  letter-spacing: -1px;
}

.audio-skip-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: var(--c-text-secondary);
  cursor: pointer;
  padding: 0;
}

.audio-skip-btn:hover {
  color: var(--c-blue);
  background: rgba(0, 0, 0, 0.06);
}

.audio-seekbar {
  flex: 1;
  min-width: 0;
  height: 4px;
  border-radius: 2px;
  border: none;
  outline: none;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
}

.audio-seekbar::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 0;
  height: 0;
  border: none;
  background: transparent;
  box-shadow: none;
}

.audio-seekbar::-moz-range-thumb {
  width: 0;
  height: 0;
  border: none;
  background: transparent;
  box-shadow: none;
}

.audio-time-display {
  flex-shrink: 0;
  font-size: 11px;
  color: var(--c-text-secondary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

@media (max-width: 640px) {
  .split-scene {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .split-panel {
    min-height: 200px;
  }
}
</style>
