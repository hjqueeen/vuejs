<template>
  <div class="page">
    <h2>404</h2>
    <p>{{ $t("notFound.message") }}</p>
    <router-link to="/dashboard">{{ $t("notFound.toDashboard") }}</router-link>
  </div>
</template>

<script>
export default {
  name: "NotFoundView",
};
</script>
