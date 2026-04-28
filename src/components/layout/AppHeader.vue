<template>
  <header class="app-header">
    <div class="header-left">
      <strong>{{ $t("app.title") }}</strong>
      <nav v-if="isLoggedIn">
        <router-link to="/dashboard">{{ $t("app.nav.dashboard") }}</router-link>
        <router-link to="/tasks">{{ $t("app.nav.tasks") }}</router-link>
        <router-link v-permission="'admin'" to="/admin">{{ $t("app.nav.admin") }}</router-link>
      </nav>
    </div>
    <div class="header-right">
      <label>
        {{ $t("app.language") }}
        <select :value="$i18n.locale" @change="changeLocale($event.target.value)">
          <option v-for="item in locales" :key="item.value" :value="item.value">
            {{ item.label }}
          </option>
        </select>
      </label>
      <span v-if="user">{{ user.name }} ({{ roleLabel(user.role) }})</span>
      <button v-if="isLoggedIn" @click="logout">{{ $t("app.logout") }}</button>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import { setLocale } from "@/i18n";

export default {
  name: "AppHeader",
  data() {
    return {
      locales: [
        { value: "ko", label: "한국어" },
        { value: "de", label: "Deutsch" },
        { value: "en", label: "English" },
      ],
    };
  },
  computed: {
    ...mapGetters("auth", ["isLoggedIn", "user"]),
  },
  methods: {
    changeLocale(locale) {
      setLocale(locale);
    },
    roleLabel(role) {
      return this.$t(`common.role.${role}`);
    },
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.push({ name: "login" });
    },
  },
};
</script>
