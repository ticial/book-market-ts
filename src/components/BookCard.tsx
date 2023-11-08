import React from "react";
import { Book } from "../types/book";
import BookImage from "./ui/BookImage";
import Panel from "./ui/Panel";

type Props = { book: Book };

const BookCard = ({ book }: Props) => {
    return (
        <Panel className="hover:scale-105 transition-transform p-3">
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
                            {book.author}
                        </div>
                        <div className="line-clamp-3 ml-2">
                            {book.shortDescription}
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <span className="pl-3 font-bold text-xl text-red-500">
                            ${book.price}
                        </span>
                        <button className="px-3 py-1 rounded-md border border-slate-500 text-slate-500 hover:bg-slate-500 hover:text-white font-medium transition-colors">
                            View
                        </button>
                    </div>
                    {/*  */}
                </div>
            </div>
        </Panel>
        // <div className="bg-white/50 p-3 border border-gray-300 rounded-xl shadow-lg ">

        // </div>
    );
};

export default BookCard;
