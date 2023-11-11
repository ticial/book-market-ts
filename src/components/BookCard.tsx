import React from "react";
import { Book } from "../types/book";
import BookImage from "./ui/BookImage";
import Panel from "./ui/Panel";
import LinksArray from "./LinksArray";
import { Link } from "react-router-dom";

type Props = {
    book: Book;
    handleAuthorClick: (author: string) => void;
};

const BookCard = ({ book, handleAuthorClick }: Props) => {
    return (
        <Panel className="hover:scale-105 transition-transform p-3 ">
            <div className="h-full flex flex-col gap-3 items-center ">
                <Link to={"books/" + book.id} state={book}>
                    <BookImage src={book.image} alt={book.title} />
                </Link>
                <div className="h-full card-content flex flex-col justify-between justify-self-end gap-3">
                    <div className="flex flex-col justify-start gap-3">
                        <div className="flex justify-center font-bold text-gray-700 items-center h-10 ">
                            <div className=" text-center ">{book.title}</div>
                        </div>
                        <hr className="border-gray-400" />
                        <div className="flex justify-center text-center items-center h-10">
                            <span>
                                <LinksArray
                                    valuesArray={book.author.split(", ")}
                                    handleClick={handleAuthorClick}
                                />
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
                        <Link to={"books/" + book.id} state={book}>
                            <button className="px-3 py-1 rounded-md border border-slate-500 text-slate-500 hover:bg-slate-500/80 active:bg-slate-400 hover:text-white font-medium transition-colors">
                                View
                            </button>
                        </Link>
                    </div>
                    {/*  */}
                </div>
            </div>
        </Panel>
    );
};

export default BookCard;
