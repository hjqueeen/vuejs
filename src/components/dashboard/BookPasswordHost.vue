<template>
  <BookPasswordDialog
    :open="Boolean(prompt)"
    :book-title="prompt ? prompt.bookTitle : ''"
    :server-error="submitError"
    @submit="onSubmit"
    @cancel="onCancel"
  />
</template>

<script>
import BookPasswordDialog from "@/components/dashboard/BookPasswordDialog.vue";
import {
  setBookPasswordPromptHandler,
  verifyBookPassword,
  unlockBook,
} from "@/utils/bookPassword";

export default {
  name: "BookPasswordHost",
  components: { BookPasswordDialog },
  data() {
    return {
      prompt: null,
      submitError: "",
    };
  },
  mounted() {
    setBookPasswordPromptHandler(this.openPrompt);
  },
  beforeDestroy() {
    setBookPasswordPromptHandler(null);
  },
  methods: {
    openPrompt(payload) {
      this.submitError = "";
      this.prompt = payload;
    },
    onSubmit(password) {
      if (!this.prompt) return;

      if (!verifyBookPassword(password)) {
        this.submitError = "비밀번호가 올바르지 않습니다.";
        return;
      }

      unlockBook(this.prompt.bookId);
      this.prompt.resolve(true);
      this.prompt = null;
      this.submitError = "";
    },
    onCancel() {
      if (!this.prompt) return;
      this.prompt.resolve(false);
      this.prompt = null;
      this.submitError = "";
    },
  },
};
</script>
