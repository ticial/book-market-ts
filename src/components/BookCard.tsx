import React from "react";
import { Book } from "../types/book";

type Props = { book: Book };

const BookCard = ({ book }: Props) => {
    return (
        <div className="bg-gray-200/50 p-3 border border-gray-200 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <div className="h-full flex flex-col gap-3  items-center ">
                <div className="card-image border border-gray-400 justify-self-start">
                    <a href={"/" + book.id}>
                        {book.image ? (
                            <img
                                className=""
                                src={book.image}
                                alt={book.title}
                            />
                        ) : (
                            <img
                                className=""
                                src={
                                    "https://prometheus-platform.github.io/Example_of_course_project_2/static/media/imageNotFound.298b98203c3825c61303.png"
                                }
                                width={250}
                                height={328}
                                alt={book.title}
                            />
                        )}
                    </a>
                </div>

                <div className="h-full card-content flex flex-col justify-between justify-self-end gap-3">
                    <div className="flex justify-center text-center font-bold text-gray-700 items-center">
                        {book.title}
                    </div>
                    <hr className="border-gray-400" />
                    <div className="flex justify-center text-center font-medium text-gray-500 items-start">
                        {book.author}
                    </div>
                    <div className="flex justify-between">
                        <span className="pl-3 font-bold text-xl text-red-500">
                            ${book.price}
                        </span>
                        <button className="px-3 py-1 rounded-md border border-slate-500 text-slate-500 hover:bg-slate-500 hover:text-white font-medium transition-colors">
                            View
                        </button>
                    </div>
                    {/* <div>{book.shortDescription}</div> */}
                </div>
            </div>
        </div>
    );
};

export default BookCard;
