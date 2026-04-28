<template>
  <div class="page auth-page">
    <BaseCard title="로그인">
      <form class="auth-form" @submit.prevent="login">
        <input v-model.trim="email" placeholder="email" />
        <input v-model="password" type="password" placeholder="password" />
        <button type="submit" :disabled="loading">로그인</button>
      </form>
      <p class="hint">admin@demo.com / admin123 또는 user@demo.com / user123</p>
      <p v-if="error" class="error-text">{{ error }}</p>
    </BaseCard>
  </div>
</template>

<script>
import BaseCard from "@/components/common/BaseCard.vue";

export default {
  name: "LoginView",
  components: { BaseCard },
  data() {
    return {
      email: "admin@demo.com",
      password: "admin123",
      loading: false,
      error: "",
    };
  },
  methods: {
    async login() {
      this.loading = true;
      this.error = "";
      try {
        await this.$store.dispatch("auth/login", {
          email: this.email,
          password: this.password,
        });
        const redirect = this.$route.query.redirect || "/dashboard";
        this.$router.replace(redirect);
      } catch (error) {
        this.error = error.message || "로그인 실패";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
