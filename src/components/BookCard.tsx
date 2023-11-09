import React from "react";
import { Book } from "../types/book";
import BookImage from "./ui/BookImage";
import Panel from "./ui/Panel";
import ButtonsArray from "./ButtonsArray";

type Props = {
    book: Book;
    handleAuthorClick: (author: string) => void;
};

const BookCard = ({ book, handleAuthorClick }: Props) => {
    return (
        <Panel className="hover:scale-105 transition-transform p-3 ">
            <div className="h-full flex flex-col gap-3 items-center ">
                <a href={"books/" + book.id}>
                    <BookImage src={book.image} alt={book.title} />
                </a>
                <div className="h-full card-content flex flex-col justify-between justify-self-end gap-3">
                    <div className="flex flex-col justify-start gap-3">
                        <div className="flex justify-center text-center font-bold text-gray-700 items-center h-10">
                            {book.title}
                        </div>
                        <hr className="border-gray-400" />
                        <div className="flex justify-center text-center font-medium text-red-800 items-center h-10">
                            <span>
                                <ButtonsArray
                                    valuesArray={book.author.split(", ")}
                                    handleClick={handleAuthorClick}
                                />
                                {/* {book.author
                                    .split(", ")
                                    .map((author, i, array) => (
                                        <>
                                            <button
                                                key={author}
                                                onClick={(e) =>
                                                    handleAuthorClick(author)
                                                }>
                                                {author}
                                                {i + 1 < array.length && (
                                                    <span>,&nbsp;</span>
                                                )}
                                            </button>
                                        </>
                                    ))} */}
                            </span>
                        </div>
                        <div className="line-clamp-3 ml-2">
                            {book.shortDescription}
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <span className="pl-3 font-bold text-xl text-red-500">
                            ${book.price}
                        </span>
                        <a href={"books/" + book.id}>
                            <button className="px-3 py-1 rounded-md border border-slate-500 text-slate-500 hover:bg-slate-500/80 active:bg-slate-400 hover:text-white font-medium transition-colors">
                                View
                            </button>
                        </a>
                    </div>
                    {/*  */}
                </div>
            </div>
        </Panel>
    );
};

export default BookCard;
