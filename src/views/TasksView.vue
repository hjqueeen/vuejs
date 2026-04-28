<template>
  <div class="page">
    <h2>{{ $t("tasks.title") }}</h2>
    <BaseCard :title="$t('tasks.newTask')">
      <TaskForm @submit="submitCreateTask" @dirty="onDirtyChange" />
    </BaseCard>
    <BaseCard :title="$t('tasks.list')">
      <p v-if="isLoading">{{ $t("tasks.loading") }}</p>
      <table v-else class="task-table">
        <thead>
          <tr>
            <th>{{ $t("tasks.fields.title") }}</th>
            <th>{{ $t("tasks.fields.assignee") }}</th>
            <th>{{ $t("tasks.fields.dueDate") }}</th>
            <th>{{ $t("tasks.fields.status") }}</th>
            <th>{{ $t("tasks.fields.change") }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in list" :key="task.id">
            <td>{{ task.title }}</td>
            <td>{{ task.assignee }}</td>
            <td>{{ task.dueDate | formatDate }}</td>
            <td>{{ task.status | statusLabel }}</td>
            <td>
              <select :value="task.status" @change="changeStatus(task.id, $event.target.value)">
                <option value="todo">{{ $t("common.status.todo") }}</option>
                <option value="doing">{{ $t("common.status.doing") }}</option>
                <option value="done">{{ $t("common.status.done") }}</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </BaseCard>
    <p v-if="toast" class="toast">{{ toast }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BaseCard from "@/components/common/BaseCard.vue";
import TaskForm from "@/components/tasks/TaskForm.vue";
import confirmLeave from "@/mixins/confirmLeave";

export default {
  name: "TasksView",
  components: { BaseCard, TaskForm },
  mixins: [confirmLeave],
  computed: {
    ...mapGetters("tasks", ["list", "isLoading"]),
    ...mapGetters("ui", ["toast"]),
  },
  created() {
    this.fetchList();
  },
  methods: {
    ...mapActions("tasks", ["fetchList", "createTask", "updateStatus"]),
    ...mapActions("ui", ["notify"]),
    onDirtyChange(value) {
      this.hasDirtyForm = value;
    },
    async submitCreateTask(payload) {
      await this.createTask(payload);
      this.notify(this.$t("tasks.created"));
    },
    async changeStatus(taskId, status) {
      await this.updateStatus({ taskId, status });
      this.notify(this.$t("tasks.statusChanged"));
    },
  },
};
</script>
