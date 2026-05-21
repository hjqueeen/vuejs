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
      path: "/esd",
      name: "esd",
      component: () => import("@/components/common/StatusDisplay.vue"),
    },
        {
      path: "/approach",
      name: "approach",
      component: () => import("@/components/common/ApproachingPIS.vue"),
    },
    {
      path: "/vestibule",
      name: "vestibule-pis",
      component: () => import("@/components/common/PISDisplayBuilderIO.vue"),
    },
    {
      path: "/onboard",
      name: "onboard-display",
      component: () => import("@/views/OnboardDisplayView.vue"),
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
      path: "/workbook/:bookId",
      name: "workbook-hub",
      component: () => import("@/views/QuizWorkbookHubView.vue"),
      props: true,
    },
    {
      path: "/workbook/:bookId/q/:questionId",
      name: "workbook-question",
      component: () => import("@/views/QuizQuestionView.vue"),
      props: true,
    },
    {
      path: "/workbook/:bookId/random",
      name: "workbook-random",
      component: () => import("@/views/QuizRandomView.vue"),
      props: true,
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
