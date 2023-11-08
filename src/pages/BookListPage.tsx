import React, { useEffect, useState } from "react";
import Search from "../components/ui/Search";
import BookCard from "../components/BookCard";
import { Book } from "../types/book";
import { fakeBooksProvider } from "../api/books";

const BookListPage = () => {
    const [searchText, setSearchText] = useState("");
    const [books, setBooks] = useState<Book[]>([]);
    const getQueryBooks = (query: string) => {
        fakeBooksProvider.fetchBooks(query).then((fetched_books) => {
            setBooks(fetched_books);
        });
    };
    const searchChangeHandle = (query: string) => {
        setSearchText(query);
        getQueryBooks(query);
    };
    useEffect(() => {
        getQueryBooks(searchText);
    }, []);

    return (
        <>
            <div className=" flex justify-center top-20 w-full mb-8">
                <Search onChange={searchChangeHandle} />
            </div>
            <div className="flex flex-wrap justify-center gap-5 md:gap-8">
                {books.length > 0 &&
                    books.map((book) => <BookCard key={book.id} book={book} />)}
            </div>
        </>
    );
};

export default BookListPage;
