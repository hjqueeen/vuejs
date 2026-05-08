<template>
  <section class="status-display" aria-label="Status display">
    <div class="status-display__content">
      <div class="status-display__top-row">
        <div class="status-display__carset-number">{{ carsetNumber }}</div>
        <div class="status-display__title">{{ title }}</div>
      </div>
      <div class="status-display__bottom-row">
        <div
          class="status-display__level"
          v-for="(item, index) in levels"
          :key="item.name + index"
        >
          <span class="status-display__level-label">{{ item.name }}:</span>
          <span class="status-display__level-values">
            <span class="status-display__level-values-strong">{{
              item.values
            }}</span>
            <span v-if="index !== levels.length - 1">,</span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StatusDisplay',
  props: {
    carsetNumber: {
      type: String,
      default: 'NNNN',
    },
    title: {
      type: String,
      default: '1000V, DM1',
    },
    levels: {
      type: Array,
      default: () => [
        { name: 'DM1', values: '0% 50%' },
        { name: 'M1', values: '25% 0%' },
        { name: 'T1', values: '50% 100%' },
        { name: 'T2', values: '75% 0%' },
        { name: 'M2', values: '0% 100%' },
        { name: 'DM2', values: '100%' },
      ],
    },
  },
};
</script>

<style scoped>
.status-display {
  width: 100%;
  max-width: 1048px;
  min-height: 148px;
  background: #000000;
  color: #ffffff;
  overflow: hidden;
  position: relative;
}

.status-display__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.status-display__top-row {
  display: flex;
  align-items: center;
  gap: 36px;
  min-height: 91px;
  padding: 0 0 0 8px;
}

.status-display__carset-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 100%;
  background: #ffffff;
  color: #000000;
  font-size: 65px;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
}

.status-display__title {
  flex: 1;
  font-size: 65px;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
}

.status-display__bottom-row {
  display: flex;
  align-items: center;
  padding: 8px 8px 0;
  min-height: 57px;
  flex-wrap: wrap;
  gap: 16px;
}

.status-display__level {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 45px;
  line-height: 1;
  white-space: nowrap;
}

.status-display__level-label {
  font-weight: 400;
}

.status-display__level-values-strong {
  font-weight: 700;
}
</style>
