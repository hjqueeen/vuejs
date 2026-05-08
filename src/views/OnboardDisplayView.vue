<template>
  <div class="onboard-display-page">
    <h1 class="onboard-display-page__title">Onboard display</h1>
    <OnboardDisplay
      time="HH:MM"
      carriage="Vagn NN"
      start-station="Katrineholm C"
      active-station="Södertälje Syd"
      end-station="Stockholm C"
    />
  </div>
</template>

<script>
import OnboardDisplay from "@/components/common/OnboardDisplay.vue";

export default {
  name: "OnboardDisplayView",
  components: {
    OnboardDisplay,
  },
};
</script>

<style scoped>
.onboard-display-page {
  max-width: 1080px;
  margin: 0 auto;
  padding: 24px 16px 40px;
}

.onboard-display-page__title {
  margin: 0 0 24px;
  font-size: 22px;
  font-weight: 700;
  color: var(--c-text-primary);
}
</style>
