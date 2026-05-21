<template>
  <section class="onboard-display" aria-label="Onboard display">
    <div class="onboard-display__header">
      <span class="onboard-display__time">{{ time }}</span>
      <span class="onboard-display__carriage">{{ carriage }}</span>
    </div>

    <div class="onboard-display__route">
      <div class="onboard-display__line">
        <span
          class="onboard-display__segment onboard-display__segment--complete"
        />
        <span
          class="onboard-display__segment onboard-display__segment--inactive"
        />
        <span
          class="onboard-display__segment onboard-display__segment--inactive"
        />
      </div>
      <div class="onboard-display__marker" aria-hidden="true"></div>
      <div class="onboard-display__arrow" aria-hidden="true">→</div>
    </div>

    <div class="onboard-display__stations">
      <span class="onboard-display__station onboard-display__station--muted">{{
        startStation
      }}</span>
      <span class="onboard-display__station onboard-display__station--active">{{
        activeStation
      }}</span>
      <span class="onboard-display__station onboard-display__station--muted">{{
        endStation
      }}</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PISDisplayMCP',
  props: {
    time: {
      type: String,
      default: 'HH:MM',
    },
    carriage: {
      type: String,
      default: 'Vagn NN',
    },
    startStation: {
      type: String,
      default: 'Katrineholm C',
    },
    activeStation: {
      type: String,
      default: 'Södertälje Syd',
    },
    endStation: {
      type: String,
      default: 'Stockholm C',
    },
  },
};
</script>

<style scoped>
.onboard-display {
  width: 100%;
  max-width: 1048px;
  margin: 0 auto;
  padding: 24px 20px;
  background: #000000;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.onboard-display__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.onboard-display__time,
.onboard-display__carriage {
  font-family: 'SJ Sans', sans-serif;
  font-feature-settings: 'dlig' 1;
  font-size: 66px;
  line-height: 99px;
  letter-spacing: 0;
  white-space: nowrap;
}

.onboard-display__time {
  color: rgba(255, 255, 255, 0.6);
}

.onboard-display__route {
  position: relative;
  width: 100%;
  min-height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.onboard-display__line {
  position: absolute;
  inset: 50px 56px 0;
  display: flex;
  height: 14px;
  border-radius: 999px;
  overflow: hidden;
  background: #30462b;
}

.onboard-display__segment {
  display: block;
}

.onboard-display__segment--complete {
  width: 40%;
  background: #1bbd0f;
}

.onboard-display__segment--inactive {
  flex: 1;
  background: #30462b;
}

.onboard-display__marker {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 84px;
  height: 84px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: #1bbd0f;
  box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.08);
}

.onboard-display__arrow {
  position: absolute;
  right: 0;
  top: 50%;
  width: 84px;
  height: 84px;
  transform: translateY(-50%);
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #1bbd0f;
  font-size: 32px;
  line-height: 1;
  color: #ffffff;
}

.onboard-display__stations {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  text-align: center;
}

.onboard-display__station {
  font-family: 'SJ Sans', sans-serif;
  font-size: 58px;
  line-height: 82px;
  letter-spacing: 0;
  white-space: nowrap;
}

.onboard-display__station--muted {
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;
}

.onboard-display__station--active {
  color: #ffffff;
  font-weight: 700;
}
</style>
