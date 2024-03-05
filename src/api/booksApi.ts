import { IBook } from "types/book";
import { ICartItem } from "types/cartItem";
import { booksData } from "./booksData";

export enum PRICE_FILTER_OPTIONS {
  ANY = "any",
  LESS15 = "less15",
  BTW15AND30 = "btw15and30",
  GREATER30 = "greater30",
}

export enum LEVEL_FILTER_OPTIONS {
  ANY = "any",
  BEGINNER = "beginner",
  MIDDLE = "middle",
  PRO = "pro",
}

const BOOKS_STORAGE_KEY = "books";

// like a database
function getBooks() {
  let storageItem = localStorage.getItem(BOOKS_STORAGE_KEY);
  if (!storageItem) {
    localStorage.setItem(BOOKS_STORAGE_KEY, JSON.stringify(booksData));
    return booksData;
  }
  try {
    return JSON.parse(storageItem);
  } catch (error) {
    console.log(error);
  }
}

const books: IBook[] = getBooks();

const PRICE_FILTER = {
  [PRICE_FILTER_OPTIONS.ANY]: () => true,
  [PRICE_FILTER_OPTIONS.LESS15]: (book: IBook) => book.price < 15,
  [PRICE_FILTER_OPTIONS.BTW15AND30]: (book: IBook) =>
    book.price >= 15 && book.price < 30,
  [PRICE_FILTER_OPTIONS.GREATER30]: (book: IBook) => book.price >= 30,
};

const LEVEL_FILTER = {
  [LEVEL_FILTER_OPTIONS.ANY]: () => true,
  [LEVEL_FILTER_OPTIONS.BEGINNER]: (book: IBook) => book.level === "Beginner",
  [LEVEL_FILTER_OPTIONS.MIDDLE]: (book: IBook) => book.level === "Middle",
  [LEVEL_FILTER_OPTIONS.PRO]: (book: IBook) => book.level === "Pro",
};

export const fakeBooksApi = {
  async fetchBooks(
    query = "",
    priceFilter = PRICE_FILTER_OPTIONS.ANY,
    levelFilter = LEVEL_FILTER_OPTIONS.ANY,
    offset = 0,
    limit: number = books.length
  ) {
    await new Promise((r) => setTimeout(r, 500)); // fake delay
    let results: IBook[] = [];
    let total = 0;
    const regex = new RegExp(query, "i");
    for (let i = 0; i < books.length; i++) {
      const book = books[i];

      if (
        PRICE_FILTER[priceFilter](book) &&
        LEVEL_FILTER[levelFilter](book) &&
        (query === "" ||
          regex.test(book.author) ||
          regex.test(book.title) ||
          book.tags.includes(query))
      ) {
        if (i >= offset && i < offset + limit) results.push(book);
        total++;
      }
    }

    return { results, total };
  },
  async fetchBookById(id: number) {
    await new Promise((r) => setTimeout(r, 500)); // fake delay
    return books.find((book) => book.id === id);
  },
  async purchase(items: ICartItem[]) {
    await new Promise((r) => setTimeout(r, 500)); // fake delay
    items.forEach((item) => {
      const book = books.find((book) => book.id === item.book.id);
      if (book) {
        book.amount -= item.amount;
        if (book.amount < 0) {
          throw new Error("Invalid value: book.amount cannot be less than 0");
        }
      }
    });
    localStorage.setItem(BOOKS_STORAGE_KEY, JSON.stringify(books));
  },
};
