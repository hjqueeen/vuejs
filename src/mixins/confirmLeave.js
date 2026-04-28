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
    const ok = window.confirm("입력 중인 내용이 있습니다. 정말 이동할까요?");
    next(ok);
  },
};
