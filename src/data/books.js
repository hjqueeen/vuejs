import { publicBooks } from "./books.public.js";
import { extraBooks } from "books-private-extra";
import { enrichBookCatalog } from "./bookCatalog.js";

export const books = [...extraBooks, ...publicBooks].map(enrichBookCatalog);

export const getBookById = (bookId) =>
  books.find((book) => book.id === bookId) || books[0];
