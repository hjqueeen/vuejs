<template>
  <header class="app-header">
    <div class="header-left">
      <strong>Vue2 Learning Project</strong>
      <nav v-if="isLoggedIn">
        <router-link to="/dashboard">대시보드</router-link>
        <router-link to="/tasks">작업관리</router-link>
        <router-link v-permission="'admin'" to="/admin">관리자</router-link>
      </nav>
    </div>
    <div class="header-right">
      <span v-if="user">{{ user.name }} ({{ user.role }})</span>
      <button v-if="isLoggedIn" @click="logout">로그아웃</button>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AppHeader",
  computed: {
    ...mapGetters("auth", ["isLoggedIn", "user"]),
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.push({ name: "login" });
    },
  },
};
</script>
