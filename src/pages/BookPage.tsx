import React, { useEffect, useState } from "react";
import { createSearchParams, useNavigate, useParams } from "react-router-dom";
import { Book } from "../types/book";
import { fakeBooksApi } from "../api/booksApi";
import CartItemForm from "../components/CartItemForm";
import BookImage from "../components/ui/BookImage";
import ButtonsArray from "../components/ButtonsArray";
import ErrorPage from "./ErrorPage";

const BookPage = () => {
    const navigate = useNavigate();
    const { bookId } = useParams();
    const [book, setBook] = useState<Book | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fakeBooksApi.fetchBookById(Number(bookId)).then((fetched_book) => {
            setBook(fetched_book);
            setIsLoading(false);
        });
    }, [bookId]);
    const handleSetQuery = (query: string) => {
        navigate({
            pathname: "/books",
            search: createSearchParams({
                q: query,
            }).toString(),
        });
    };

    if (isLoading) {
        return <>Loading...</>;
    }

    if (!book) {
        return <ErrorPage />;
    }
    return (
        <div className="container flex gap-4 flex-wrap justify-center ">
            <div className=" flex gap-4 flex-wrap flex-1 justify-center md:justify-stretch bg-white/50 p-4 border border-gray-300 rounded-xl shadow-lg">
                <div className="flex flex-1 justify-center">
                    <BookImage src={book.image} alt={book.title} />
                </div>

                <div className="flex flex-1 justify-center">
                    <div className="h-full w-full  flex flex-col justify-between justify-self-end gap-4">
                        <div className="flex flex-col h-full justify-between gap-4 ">
                            <div className="flex flex-col justify-start gap-4 ">
                                <h1 className="flex justify-center text-center font-bold text-gray-700 items-center  text-3xl mt-4">
                                    {book.title}
                                </h1>
                                <hr className="border-gray-400" />
                                <div className="flex flex-col gap-4 ml-4">
                                    <div className="flex items-start  ">
                                        <span className="font-medium text-gray-800 mr-2">
                                            {book.author.includes(",")
                                                ? "Authors"
                                                : "Author"}
                                            :
                                        </span>
                                        <span className="font-medium text-red-800">
                                            <ButtonsArray
                                                valuesArray={book.author.split(
                                                    ", "
                                                )}
                                                handleClick={handleSetQuery}
                                            />
                                        </span>
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
                                        <span className="font-medium text-red-800">
                                            <ButtonsArray
                                                valuesArray={book.tags}
                                                handleClick={handleSetQuery}
                                            />
                                        </span>
                                    </div>
                                    <div className="flex items-start text-gray-700  ">
                                        <span className="font-medium text-gray-800 mr-2">
                                            Amount:
                                        </span>
                                        {book.amount}
                                    </div>
                                </div>
                            </div>
                            <div className="xl:hidden rounded-lg border border-gray-400 bg-white/50 p-4">
                                <CartItemForm book={book} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-5 indent-8 leading-8 bg-white rounded-lg border border-gray-300">
                    {book.description}
                </div>
            </div>
            <div className="hidden xl:flex w-96 h-fit p-4 flex-col rounded-lg border border-gray-300 bg-white/50 shadow-md">
                <CartItemForm book={book} />
            </div>
        </div>
    );
};

export default BookPage;
