import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("@/views/DashboardView.vue"),
    },
    {
      path: "/tasks",
      name: "tasks",
      component: () => import("@/views/TasksView.vue"),
    },
    {
      path: "/sentences/:sentenceId",
      name: "sentence-detail",
      component: () => import("@/views/SentenceDetailView.vue"),
    },
    {
      path: "/paragraphs/:paragraphId",
      name: "paragraph-detail",
      component: () => import("@/views/ParagraphDetailView.vue"),
    },
    {
      path: "/review",
      name: "review",
      component: () => import("@/views/ReviewView.vue"),
    },
    {
      path: "/grammar/:grammarId",
      name: "grammar-chapter",
      component: () => import("@/views/GrammarChapterView.vue"),
    },
    {
      path: "/quiz/:quizId",
      name: "quiz-chapter",
      component: () => import("@/views/QuizChapterView.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("@/views/AdminView.vue"),
    },
    {
      path: "*",
      component: () => import("@/views/NotFoundView.vue"),
    },
  ],
});

export default router;
