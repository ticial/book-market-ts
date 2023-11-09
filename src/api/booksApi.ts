import { Book } from "../types/book";
import { CartItem } from "../types/cartItem";
import { books_data } from "./books_data";

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

const books: Book[] = getBooks();

export const fakeBooksApi = {
    async fetchBooks(query = "", offset = 0, limit = 30) {
        await new Promise((r) => setTimeout(r, 500)); // fake delay
        let results: Book[] = [];
        const regex = new RegExp(query, "i");
        for (
            let src_i = (offset = 0);
            src_i < books.length && results.length !== limit;
            src_i++
        ) {
            const book = books[src_i];

            if (
                query === "" ||
                regex.test(book.author) ||
                regex.test(book.title) ||
                book.tags.includes(query)
            ) {
                results.push(book);
            }
        }
        return results;
    },
    async fetchBookById(id: number) {
        await new Promise((r) => setTimeout(r, 500)); // fake delay
        return books.find((book) => book.id === id);
    },
    async purchase(items: CartItem[]) {
        await new Promise((r) => setTimeout(r, 500)); // fake delay
        items.forEach((item) => {
            const book = books.find((book) => book.id === item.bookId);
            if (book) {
                book.amount -= item.amount;
                if (book.amount < 0) {
                    throw new Error(
                        "Invalid value: book.amount cannot be less than 0"
                    );
                }
            }
        });
        localStorage.setItem(BOOKS_STORAGE_KEY, JSON.stringify(books));
    },
};
