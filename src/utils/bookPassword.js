export const BOOK_ACCESS_PASSWORD = "3927";

const UNLOCKED_BOOKS_KEY = "book-access-unlocked";

/** @type {((payload: { bookId: string, bookTitle: string, resolve: (ok: boolean) => void }) => void) | null} */
let promptHandler = null;

export function setBookPasswordPromptHandler(handler) {
  promptHandler = handler;
}

export function getUnlockedBookIds() {
  if (typeof sessionStorage === "undefined") return [];
  try {
    const raw = sessionStorage.getItem(UNLOCKED_BOOKS_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function isBookUnlocked(bookId) {
  return getUnlockedBookIds().includes(bookId);
}

export function unlockBook(bookId) {
  if (typeof sessionStorage === "undefined") return;
  const ids = new Set(getUnlockedBookIds());
  ids.add(bookId);
  sessionStorage.setItem(UNLOCKED_BOOKS_KEY, JSON.stringify([...ids]));
}

export function verifyBookPassword(input) {
  return String(input).trim() === BOOK_ACCESS_PASSWORD;
}

/** @param {string} bookId @param {string} [bookTitle] */
export function ensureBookUnlocked(bookId, bookTitle = "") {
  if (isBookUnlocked(bookId)) {
    return Promise.resolve(true);
  }
  if (!promptHandler) {
    return Promise.resolve(false);
  }
  return new Promise((resolve) => {
    promptHandler({ bookId, bookTitle, resolve });
  });
}

/** @param {import('vue-router').Route} route */
export function getBookIdFromRoute(route) {
  if (route.params?.bookId) return route.params.bookId;
  if (route.query?.bookId) return route.query.bookId;
  return null;
}

export function isBookRoute(route) {
  return Boolean(getBookIdFromRoute(route));
}
