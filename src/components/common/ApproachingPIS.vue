<template>
  <section class="approaching-pis" aria-label="Approaching passenger information display">
    <div class="approaching-pis__header">
      <div class="approaching-pis__carriage">{{ carriage }}</div>
      <div class="approaching-pis__next">{{ nextLabel }}</div>
      <div class="approaching-pis__wc">
        <img :src="wcIcon" alt="WC" class="approaching-pis__wc-icon" />
      </div>
    </div>

    <div class="approaching-pis__station">{{ stationName }}</div>
  </section>
</template>

<script>
export default {
  name: "ApproachingPIS",
  props: {
    carriage: {
      type: String,
      default: "Vagn NN",
    },
    nextLabel: {
      type: String,
      default: "Nästa",
    },
    stationName: {
      type: String,
      default: "Stockholm C",
    },
  },
  data() {
    return {
      wcIcon:
        "https://www.figma.com/api/mcp/asset/184af41d-95db-4bd1-aede-3c7232bf33c9",
    };
  },
};
</script>

<style scoped>
.approaching-pis {
  width: 100%;
  max-width: 100%;
  background: #000000;
  color: #ffffff;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.approaching-pis__header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 115px;
}

.approaching-pis__carriage,
.approaching-pis__next {
  font-family: "SJ Sans", sans-serif;
  font-feature-settings: "dlig" 1;
  white-space: nowrap;
}

.approaching-pis__carriage {
  font-size: 66px;
  line-height: 99px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;
}

.approaching-pis__next {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 74px;
  line-height: 115px;
  font-weight: 500;
  color: #ffffff;
}

.approaching-pis__wc {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 88px;
}

.approaching-pis__wc-icon {
  display: block;
  max-width: 100%;
  height: auto;
  width: 84px;
}

.approaching-pis__station {
  font-family: "SJ Sans", sans-serif;
  font-feature-settings: "dlig" 1;
  font-size: 176px;
  line-height: 196px;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 1200px) {
  .approaching-pis__station {
    font-size: 120px;
    line-height: 130px;
  }
}

@media (max-width: 768px) {
  .approaching-pis {
    padding: 16px 20px;
  }

  .approaching-pis__header {
    min-height: auto;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  .approaching-pis__carriage {
    font-size: 48px;
    line-height: 72px;
  }

  .approaching-pis__next {
    font-size: 56px;
    line-height: 76px;
  }

  .approaching-pis__station {
    font-size: 96px;
    line-height: 108px;
  }
}
</style>
