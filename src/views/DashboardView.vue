<template>
  <div class="page">
    <h2>대시보드</h2>
    <div class="grid">
      <BaseCard title="전체 작업 수">
        <p class="metric">{{ list.length }}</p>
      </BaseCard>
      <BaseCard title="진행중 작업">
        <p class="metric">{{ groupedByStatus.doing.length }}</p>
      </BaseCard>
      <BaseCard title="완료 작업">
        <p class="metric">{{ groupedByStatus.done.length }}</p>
      </BaseCard>
    </div>
    <LearningPanel />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BaseCard from "@/components/common/BaseCard.vue";
import LearningPanel from "@/components/learning/LearningPanel.vue";

export default {
  name: "DashboardView",
  components: { BaseCard, LearningPanel },
  computed: {
    ...mapGetters("tasks", ["list", "groupedByStatus"]),
  },
  created() {
    if (!this.list.length) {
      this.$store.dispatch("tasks/fetchList");
    }
  },
};
</script>
