export default {
  data() {
    return {
      hasDirtyForm: false,
    };
  },
  beforeRouteLeave(to, from, next) {
    if (!this.hasDirtyForm) {
      next();
      return;
    }
    const ok = window.confirm(this.$t("common.confirmLeave"));
    next(ok);
  },
};
