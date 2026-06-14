import { getBookById } from "@/data/books";
import {
  canLearnerAccessBook,
  getStoredDashboardLearner,
  getDashboardLocation,
} from "@/data/bookCatalog";

/** @param {import('vue-router').default} router @param {string} bookId */
export function guardBookAccess(router, bookId) {
  const book = getBookById(bookId);
  const learner = getStoredDashboardLearner();
  if (!book || !canLearnerAccessBook(book, learner)) {
    router.replace(getDashboardLocation(learner));
    return false;
  }
  return true;
}
