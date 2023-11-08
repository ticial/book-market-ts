import React from "react";
import { Book } from "../types/book";
import BookCard from "./BookCard";

type Props = {
    books: Book[];
};

const BookList = ({ books }: Props) => {
    return (
        <div className="flex flex-wrap justify-center gap-5 md:gap-8">
            {books &&
                books.map((book) => <BookCard key={book.id} book={book} />)}
        </div>
    );
};

export default BookList;
