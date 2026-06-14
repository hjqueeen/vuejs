import { books } from "@/data/books";
import {
  canLearnerAccessBook,
  getStoredDashboardLearner,
  getDashboardLocation,
} from "@/data/bookCatalog";
import { ensureBookUnlocked, getBookIdFromRoute } from "@/utils/bookPassword";

function findBook(bookId) {
  return books.find((book) => book.id === bookId);
}

/** @param {import('vue-router').default} router @param {string} bookId */
export function guardBookAccess(router, bookId) {
  const book = findBook(bookId);
  const learner = getStoredDashboardLearner();
  if (!book || !canLearnerAccessBook(book, learner)) {
    router.replace(getDashboardLocation(learner));
    return false;
  }
  return true;
}

/** @param {import('vue-router').Route} to @param {import('vue-router').Route} [from] */
export async function resolveBookRouteAccess(to, from) {
  const bookId = getBookIdFromRoute(to);
  if (!bookId) {
    return { allowed: true };
  }

  const book = findBook(bookId);
  const learner = getStoredDashboardLearner();
  if (!book || !canLearnerAccessBook(book, learner)) {
    return { allowed: false, redirect: getDashboardLocation(learner) };
  }

  const unlocked = await ensureBookUnlocked(bookId, book.title);
  if (!unlocked) {
    const canAbort = from.matched.length > 0;
    return canAbort
      ? { allowed: false, abort: true }
      : { allowed: false, redirect: getDashboardLocation(learner) };
  }

  return { allowed: true };
}

export { getBookIdFromRoute };
