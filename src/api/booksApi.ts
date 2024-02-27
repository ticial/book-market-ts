import { Book } from "types/book";
import { CartItem } from "types/cartItem";
import { books_data } from "./books_data";

export enum PRICE_FILTER_OPTIONS {
  ANY,
  LESS15,
  BTW15AND30,
  GREATER30,
}

export enum LEVEL_FILTER_OPTIONS {
  ANY,
  BEGINNER,
  MIDDLE,
  PRO,
}

const BOOKS_STORAGE_KEY = "books";

function getBooks() {
  let storageItem = localStorage.getItem(BOOKS_STORAGE_KEY);
  if (!storageItem) {
    localStorage.setItem(BOOKS_STORAGE_KEY, JSON.stringify(books_data));
    return books_data;
  }
  try {
    return JSON.parse(storageItem);
  } catch (error) {
    console.log(error);
  }
}

function filterByPrice(book: Book, filter: PRICE_FILTER_OPTIONS) {
  switch (filter) {
    case PRICE_FILTER_OPTIONS.LESS15:
      return book.price < 15;
    case PRICE_FILTER_OPTIONS.BTW15AND30:
      return book.price >= 15 && book.price < 30;
    case PRICE_FILTER_OPTIONS.GREATER30:
      return book.price >= 30;
    default:
      return true;
  }
}

function filterByLevel(book: Book, filter: LEVEL_FILTER_OPTIONS) {
  switch (filter) {
    case LEVEL_FILTER_OPTIONS.BEGINNER:
      return book.level === "Beginner";
    case LEVEL_FILTER_OPTIONS.MIDDLE:
      return book.level === "Middle";
    case LEVEL_FILTER_OPTIONS.PRO:
      return book.level === "Pro";
    default:
      return true;
  }
}

const books: Book[] = getBooks();

export const fakeBooksApi = {
  async fetchBooks(
    query = "",
    priceFilter = PRICE_FILTER_OPTIONS.ANY,
    levelFilter = LEVEL_FILTER_OPTIONS.ANY,
    offset = 0,
    limit: number = books.length
  ) {
    await new Promise((r) => setTimeout(r, 500)); // fake delay
    let results: Book[] = [];
    let total = 0;
    const regex = new RegExp(query, "i");
    for (let i = 0; i < books.length; i++) {
      const book = books[i];

      if (
        filterByLevel(book, levelFilter) &&
        filterByPrice(book, priceFilter) &&
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
  async purchase(items: CartItem[]) {
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
