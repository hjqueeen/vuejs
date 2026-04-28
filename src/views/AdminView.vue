<template>
  <div class="page">
    <h2>관리자 페이지</h2>
    <BaseCard title="운영 기능">
      <ul>
        <li>권한 기반 접근 제어(meta.requiredRole)</li>
        <li>커스텀 디렉티브(v-permission)</li>
        <li>대규모 프로젝트에서의 기능 모듈 분리 패턴</li>
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
