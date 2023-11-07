import { books_data } from "./books_data";

export const fakeBooksProvider = {
    async fetchBooks(query = "", offset = 0, limit = 30) {
        await new Promise((r) => setTimeout(r, 500)); // fake delay
        let results = [];
        const regex = new RegExp(query, "i");
        for (
            let src_i = (offset = 0);
            src_i < books_data.length || results.length !== limit;
            src_i++
        ) {
            const book = books_data[src_i];
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
};
