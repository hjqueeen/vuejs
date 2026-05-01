<template>
  <form class="task-form" @submit.prevent="submit">
    <input v-model.trim="form.title" :placeholder="$t('tasks.form.titlePlaceholder')" @input="onDirty" />
    <input
      v-model.trim="form.assignee"
      :placeholder="$t('tasks.form.assigneePlaceholder')"
      @input="onDirty"
    />
    <input v-model="form.dueDate" type="date" @change="onDirty" />
    <button type="submit">{{ $t("tasks.form.submit") }}</button>
  </form>
</template>

<script>
export default {
  name: "TaskForm",
  data() {
    return {
      form: {
        title: "",
        assignee: "",
        dueDate: "",
      },
    };
  },
  methods: {
    onDirty() {
      this.$emit("dirty", true);
    },
    submit() {
      if (!this.form.title || !this.form.assignee || !this.form.dueDate) return;
      this.$emit("submit", { ...this.form });
      this.form = { title: "", assignee: "", dueDate: "" };
      this.$emit("dirty", false);
    },
  },
};
</script>
