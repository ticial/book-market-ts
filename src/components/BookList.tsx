import React from "react";
import { Book } from "../types/book";
import BookCard from "./BookCard";

type Props = {
    books: Book[];
};

const BookList = ({ books }: Props) => {
    return (
        // <div className="flex justify-center">
        <div className="flex flex-wrap justify-between gap-8 px-3">
            {books &&
                books.map((book) => <BookCard key={book.id} book={book} />)}
        </div>
        // </div>
    );
};

export default BookList;
