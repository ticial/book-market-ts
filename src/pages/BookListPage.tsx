import React from "react";
import Search from "../components/Search";
import BookList from "../components/BookList";
import { books_data } from "../api/books_data";

const BookListPage = () => {
    return (
        <>
            <div className="container flex justify-center top-20 w-full mb-5">
                <Search />
            </div>
            <BookList books={books_data} />
        </>
    );
};

export default BookListPage;
