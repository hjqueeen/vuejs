import Vue from "vue";
import Router from "vue-router";
import {
  getStoredDashboardLearner,
  setStoredDashboardLearner,
  routeSlugToLearnerId,
  learnerIdToRouteSlug,
  getDashboardLocation,
} from "@/data/bookCatalog";
import { resolveBookRouteAccess } from "@/utils/bookAccessGuard";

Vue.use(Router);

const router = new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      redirect: () => {
        const learner = getStoredDashboardLearner();
        return `/dashboard/${learnerIdToRouteSlug(learner)}`;
      },
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
      redirect: () => {
        const learner = getStoredDashboardLearner();
        return `/dashboard/${learnerIdToRouteSlug(learner)}`;
      },
    },
    {
      path: "/dashboard/:learner",
      name: "dashboard",
      component: () => import("@/views/DashboardView.vue"),
      props: true,
      beforeEnter(to, _from, next) {
        const learnerId = routeSlugToLearnerId(to.params.learner);
        if (learnerId) {
          setStoredDashboardLearner(learnerId);
          next();
          return;
        }
        next(getDashboardLocation());
      },
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
      path: "/workbook/:bookId/worksheet/:pageId",
      name: "math-worksheet",
      component: () => import("@/views/MathWorksheetView.vue"),
      props: true,
    },
    {
      path: "/flashcards/:bookId",
      name: "flashcard-hub",
      component: () => import("@/views/FlashcardHubView.vue"),
      props: true,
    },
    {
      path: "/flashcards/:bookId/c/:cardId",
      name: "flashcard-detail",
      component: () => import("@/views/FlashcardDetailView.vue"),
      props: true,
    },
    {
      path: "/flashcards/:bookId/review",
      name: "flashcard-review",
      component: () => import("@/views/FlashcardReviewView.vue"),
      props: true,
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("@/views/AdminView.vue"),
    },
    {
      path: "/bootstrap-theme-preview",
      name: "bootstrap-theme-preview",
      component: () => import("@/views/BootstrapThemePreview.vue"),
    },
    {
      path: "*",
      component: () => import("@/views/NotFoundView.vue"),
    },
  ],
});

function isBenignNavigationError(err) {
  if (!err) return false;
  if (
    err.name === "NavigationDuplicated" ||
    err.name === "NavigationCancelled" ||
    err.name === "NavigationRedirected" ||
    err.name === "NavigationAborted"
  ) {
    return true;
  }
  if (typeof err.message !== "string") return false;
  return (
    err.message.includes("Redirected") || err.message.includes("Navigation aborted")
  );
}

function patchRouterNavigation(method) {
  const original = Router.prototype[method];
  Router.prototype[method] = function patched(location, onResolve, onReject) {
    if (onResolve || onReject) {
      return original.call(this, location, onResolve, onReject);
    }
    return original.call(this, location).catch((err) => {
      if (isBenignNavigationError(err)) return err;
      return Promise.reject(err);
    });
  };
}

patchRouterNavigation("push");
patchRouterNavigation("replace");

router.beforeEach((to, from, next) => {
  resolveBookRouteAccess(to, from).then(({ allowed, abort, redirect }) => {
    if (allowed) {
      next();
      return;
    }
    if (abort) {
      next(false);
      return;
    }
    next(redirect);
  });
});

export default router;
