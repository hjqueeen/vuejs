const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fakeDb = {
  users: [
    { id: 1, email: "admin@demo.com", password: "admin123", role: "admin", name: "Admin Kim" },
    { id: 2, email: "user@demo.com", password: "user123", role: "member", name: "Member Lee" },
  ],
  tasks: [
    { id: 1, title: "Vuex module 리팩터링", status: "doing", assignee: "Admin Kim", dueDate: "2026-05-10" },
    { id: 2, title: "라우터 권한 가드 적용", status: "todo", assignee: "Member Lee", dueDate: "2026-05-12" },
    { id: 3, title: "API 에러 처리 패턴 정리", status: "done", assignee: "Admin Kim", dueDate: "2026-04-18" },
  ],
};

const createToken = (user) => `demo-token-${user.id}-${Date.now()}`;

export async function loginApi(payload) {
  await delay(500);
  const user = fakeDb.users.find((item) => item.email === payload.email && item.password === payload.password);
  if (!user) {
    throw new Error("이메일 또는 비밀번호가 올바르지 않습니다.");
  }
  return {
    token: createToken(user),
    user: { id: user.id, email: user.email, role: user.role, name: user.name },
  };
}

export async function fetchTasksApi() {
  await delay(400);
  return [...fakeDb.tasks];
}

export async function createTaskApi(payload) {
  await delay(350);
  const task = {
    id: Date.now(),
    title: payload.title,
    status: "todo",
    assignee: payload.assignee,
    dueDate: payload.dueDate,
  };
  fakeDb.tasks.unshift(task);
  return task;
}

export async function updateTaskStatusApi(taskId, status) {
  await delay(250);
  const task = fakeDb.tasks.find((item) => item.id === taskId);
  if (!task) throw new Error("작업을 찾을 수 없습니다.");
  task.status = status;
  return { ...task };
}
