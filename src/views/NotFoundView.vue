<template>
  <div class="page">
    <h2>404</h2>
    <p>요청하신 페이지를 찾을 수 없습니다.</p>
    <router-link to="/dashboard">대시보드로 이동</router-link>
  </div>
</template>

<script>
export default {
  name: "NotFoundView",
};
</script>
