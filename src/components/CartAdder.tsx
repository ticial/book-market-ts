import React, { useState } from "react";
import Counter from "./ui/Counter";
import { Book } from "../types/book";
import { useCartStore } from "../store/useCartStore";

type Props = {
    book: Book;
};

const CartAdder = ({ book }: Props) => {
    const [amount, setAmount] = useState(1);
    const cart = useCartStore();
    const clickHandle = () => {
        cart.push(book, amount);
        setAmount(1);
    };
    return (
        <div className="flex flex-col justify-start gap-4 ">
            <div className="flex justify-between gap-4">
                <div className="text-xl">
                    <span className="font-medium text-gray-800 mr-2">
                        Price:
                    </span>
                    <span className="font-bold  text-red-500">
                        ${book.price}
                    </span>
                </div>
                <Counter
                    min={1}
                    max={book.amount}
                    value={book.amount === 0 ? 0 : amount}
                    onChange={setAmount}
                />
            </div>
            <div className="flex justify-between gap-4">
                <div className="text-xl">
                    <span className="font-medium text-gray-800 mr-2">
                        Total:
                    </span>
                    <span className="font-bold  text-red-500">
                        ${(book.price * amount).toFixed(2)}
                    </span>
                </div>
                <button
                    disabled={book.amount === 0}
                    onClick={clickHandle}
                    className="h-8 py-1 w-36 rounded-md bg-green-600 hover:bg-green-500 active:bg-green-400 text-white font-medium transition-colors">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default CartAdder;
