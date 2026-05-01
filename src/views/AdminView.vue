<template>
  <div class="page">
    <h2>{{ $t("admin.title") }}</h2>
    <BaseCard :title="$t('admin.cardTitle')">
      <ul>
        <li>{{ $t("admin.items.rbac") }}</li>
        <li>{{ $t("admin.items.directive") }}</li>
        <li>{{ $t("admin.items.modular") }}</li>
      </ul>
    </BaseCard>
  </div>
</template>

<script>
import BaseCard from "@/components/common/BaseCard.vue";

export default {
  name: "AdminView",
  components: { BaseCard },
};
</script>
