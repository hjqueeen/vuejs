<template>
  <div class="vestibule-pis">
    <div class="pis-inner">
      <div class="pis-header">
        <span class="pis-header__time">{{ time }}</span>
        <span class="pis-header__wagon">{{ wagonNumber }}</span>
      </div>

      <div class="pis-route">
        <div class="pis-route__content">
          <div class="pis-track">
            <div
              class="pis-track__visited"
              :style="{ width: trainPositionPercent + '%' }"
            ></div>
            <div class="pis-track__unvisited"></div>
          </div>

          <div class="pis-stations">
            <div
              v-for="(station, index) in stations"
              :key="index"
              class="pis-station"
              :class="`pis-station--${station.type}`"
            >
              <div class="pis-station__time-slot">
                <span v-if="station.time" class="pis-station__time">
                  {{ station.time }}
                </span>
              </div>

              <div class="pis-station__marker-slot">
                <svg
                  class="pis-station__dot"
                  viewBox="0 0 84 84"
                  width="84"
                  height="84"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    v-if="station.type === 'visited'"
                    cx="42"
                    cy="42"
                    r="28"
                    fill="#1BBD0F"
                  />
                  <circle
                    v-else-if="station.type === 'current'"
                    cx="42"
                    cy="42"
                    r="28"
                    fill="#30462B"
                  />
                  <circle
                    v-else
                    cx="42"
                    cy="42"
                    r="35"
                    fill="black"
                    stroke="#30462B"
                    stroke-width="14"
                  />
                </svg>

                <svg
                  v-if="station.type === 'visited'"
                  class="pis-train-marker"
                  viewBox="0 0 84 84"
                  width="84"
                  height="84"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Train position"
                >
                  <circle cx="42" cy="42" r="42" fill="#1BBD0F" />
                  <path
                    d="M35 59.5C34.3079 59.4999 33.6314 59.2945 33.0559 58.9099C32.4805 58.5254 32.032 57.9788 31.7672 57.3393C31.5023 56.6999 31.433 55.9963 31.568 55.3174C31.703 54.6386 32.0362 54.015 32.5255 53.5255L44.0507 42L32.5255 30.4745C32.1913 30.1517 31.9246 29.7655 31.7412 29.3385C31.5578 28.9114 31.4612 28.4522 31.4572 27.9874C31.4531 27.5227 31.5417 27.0618 31.7177 26.6317C31.8936 26.2016 32.1535 25.8108 32.4822 25.4822C32.8108 25.1535 33.2016 24.8936 33.6317 24.7177C34.0618 24.5417 34.5227 24.4531 34.9874 24.4572C35.4522 24.4612 35.9114 24.5578 36.3385 24.7412C36.7655 24.9246 37.1517 25.1913 37.4745 25.5255L51.4745 39.5255C51.7997 39.8504 52.0576 40.2361 52.2336 40.6607C52.4096 41.0853 52.5002 41.5404 52.5002 42C52.5002 42.4597 52.4096 42.9148 52.2336 43.3394C52.0576 43.7639 51.7997 44.1497 51.4745 44.4745L37.4745 58.4745C37.15 58.8001 36.7643 59.0583 36.3396 59.2343C35.915 59.4103 35.4597 59.5006 35 59.5Z"
                    fill="white"
                  />
                </svg>
              </div>

              <span class="pis-station__name">{{ station.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PISDisplayBuilderIO',

  props: {
    time: {
      type: String,
      default: 'HH:MM',
    },
    wagonNumber: {
      type: String,
      default: 'Vagn NN',
    },
    trainPositionPercent: {
      type: Number,
      default: 25,
    },
    stations: {
      type: Array,
      default: () => [
        { name: 'Katrineholm C', type: 'visited', time: null },
        { name: 'Södertälje Syd', type: 'current', time: 'HH:MM' },
        { name: 'Stockholm C', type: 'terminal', time: 'HH:MM' },
      ],
    },
  },
};
</script>

<style scoped>
.vestibule-pis {
  width: 1920px;
  height: 540px;
  background: #000;
  display: flex;
  font-family: 'SJ Sans', -apple-system, Roboto, Helvetica, sans-serif;
}

.pis-inner {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 24px;
}

.pis-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 115px;
}

.pis-header__time,
.pis-header__wagon {
  font-size: 66px;
  line-height: 99px;
  font-feature-settings: 'dlig' on;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;
}

.pis-route {
  flex: 1;
  display: flex;
  align-items: center;
}

.pis-route__content {
  position: relative;
  width: 100%;
}

/* 82px time slot + 35px top padding of track area = 117px from top of content */
.pis-track {
  position: absolute;
  left: 0;
  right: 0;
  top: 117px;
  height: 14px;
  display: flex;
  pointer-events: none;
  z-index: 0;
}

.pis-track__visited {
  background: #1bbd0f;
}

.pis-track__unvisited {
  flex: 1;
  background: #30462b;
}

.pis-stations {
  display: flex;
  width: 100%;
}

.pis-station {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
}

.pis-station--visited {
  flex: 0 0 25%;
}

.pis-station__time-slot {
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pis-station__time {
  font-size: 58px;
  line-height: 82px;
  font-feature-settings: 'dlig' on;
  color: #fff;
  font-weight: 400;
}

.pis-station__marker-slot {
  position: relative;
  width: 100%;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  overflow: visible;
}

.pis-station__dot {
  position: relative;
  z-index: 1;
  flex-shrink: 0;
}

.pis-train-marker {
  position: absolute;
  right: -42px;
  top: 0;
  z-index: 2;
  flex-shrink: 0;
}

.pis-station__name {
  font-size: 58px;
  line-height: 82px;
  font-feature-settings: 'dlig' on;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;
  text-align: center;
  align-self: stretch;
}

.pis-station--current .pis-station__name {
  color: #fff;
  font-weight: 700;
}

.pis-station--terminal .pis-station__name {
  color: #fff;
}
</style>
