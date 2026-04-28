<template>
  <div class="page">
    <h2>{{ $t("dashboard.title") }}</h2>
    <div class="grid">
      <BaseCard :title="$t('dashboard.totalTasks')">
        <p class="metric">{{ list.length }}</p>
      </BaseCard>
      <BaseCard :title="$t('dashboard.inProgressTasks')">
        <p class="metric">{{ groupedByStatus.doing.length }}</p>
      </BaseCard>
      <BaseCard :title="$t('dashboard.doneTasks')">
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
