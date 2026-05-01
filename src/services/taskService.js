import { createTaskApi, fetchTasksApi, updateTaskStatusApi } from "@/services/mockApi";

export const taskService = {
  fetchList() {
    return fetchTasksApi();
  },
  create(payload) {
    return createTaskApi(payload);
  },
  updateStatus(taskId, status) {
    return updateTaskStatusApi(taskId, status);
  },
};
