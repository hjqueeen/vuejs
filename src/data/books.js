import { publicBooks } from "./books.public.js";
import { extraBooks } from "books-private-extra";

export const books = [...extraBooks, ...publicBooks];

export const getBookById = (bookId) => books.find((book) => book.id === bookId) || books[0];
