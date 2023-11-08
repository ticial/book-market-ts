import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Book } from "../types/book";
import { fakeBooksProvider } from "../api/books";
import CartAdder from "../components/CartAdder";
import BookImage from "../components/ui/BookImage";

const BookPage = () => {
    let { bookId } = useParams();
    const [book, setBook] = useState<Book | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fakeBooksProvider.fetchBookById(Number(bookId)).then((fetched_book) => {
            setBook(fetched_book);
            setIsLoading(false);
        });
    }, []);
    if (isLoading) {
        return <>Loading...</>;
    }

    if (!book) {
        return <>Book not found</>;
    }
    return (
        <div className="max-w-screen-xl w-full ">
            <div className="flex gap-3 flex-wrap justify-center ">
                <div className="max-w-4xl flex gap-3 flex-wrap flex-1 justify-center md:justify-stretch bg-white/50 p-3 border border-gray-300 rounded-xl shadow-lg">
                    <div className="flex flex-1 justify-center">
                        <BookImage src={book.image} alt={book.title} />
                    </div>

                    <div className="flex flex-1 justify-center">
                        <div className="h-full w-full  flex flex-col justify-between justify-self-end gap-3">
                            <div className="flex flex-col h-full justify-between gap-5 ">
                                <div className="flex flex-col justify-start gap-5 ">
                                    <div className="flex justify-center text-center font-bold text-gray-700 items-center  text-3xl mt-5">
                                        {book.title}
                                    </div>
                                    <hr className="border-gray-400" />
                                    <div className="flex flex-col gap-5 ml-10">
                                        <div className="flex items-start font-medium text-red-800 ">
                                            <span className="font-medium text-gray-800 mr-2">
                                                {book.author.includes(",")
                                                    ? "Authors"
                                                    : "Author"}
                                                :
                                            </span>
                                            {book.author}
                                        </div>
                                        <div className="flex items-start text-gray-700 ">
                                            <span className="font-medium text-gray-800 mr-2">
                                                Book level:
                                            </span>
                                            {book.level}
                                        </div>
                                        <div className="flex items-start text-gray-700  ">
                                            <span className="font-medium text-gray-800 mr-2">
                                                Tags:
                                            </span>
                                            {book.tags.join(", ")}
                                        </div>
                                        <div className="flex items-start text-gray-700  ">
                                            <span className="font-medium text-gray-800 mr-2">
                                                Amount:
                                            </span>
                                            {book.amount}
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:hidden rounded-lg border border-gray-400 bg-white/50 p-3">
                                    <CartAdder book={book} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 indent-8 leading-8 bg-white rounded-lg border border-gray-300">
                        {book.description}
                    </div>
                </div>
                <div className="hidden xl:flex w-96 h-fit p-5 flex-col rounded-lg border border-gray-300 bg-white/50 shadow-md">
                    <CartAdder book={book} />
                </div>
            </div>
        </div>
    );
};

export default BookPage;
