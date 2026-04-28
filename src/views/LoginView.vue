<template>
  <div class="page auth-page">
    <BaseCard :title="$t('auth.login')">
      <form class="auth-form" @submit.prevent="login">
        <input v-model.trim="email" :placeholder="$t('auth.emailPlaceholder')" />
        <input v-model="password" type="password" :placeholder="$t('auth.passwordPlaceholder')" />
        <button type="submit" :disabled="loading">{{ $t("auth.login") }}</button>
      </form>
      <p class="hint">{{ $t("auth.hint") }}</p>
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
        this.error = error.message || this.$t("auth.loginFailed");
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
