<template>
  <div class="page">
    <h2>작업관리</h2>
    <BaseCard title="새 작업 등록">
      <TaskForm @submit="submitCreateTask" @dirty="onDirtyChange" />
    </BaseCard>
    <BaseCard title="작업 리스트">
      <p v-if="isLoading">불러오는 중...</p>
      <table v-else class="task-table">
        <thead>
          <tr>
            <th>제목</th>
            <th>담당자</th>
            <th>마감일</th>
            <th>상태</th>
            <th>변경</th>
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
                <option value="todo">할 일</option>
                <option value="doing">진행 중</option>
                <option value="done">완료</option>
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
      this.notify("작업이 등록되었습니다.");
    },
    async changeStatus(taskId, status) {
      await this.updateStatus({ taskId, status });
      this.notify("상태가 변경되었습니다.");
    },
  },
};
</script>
