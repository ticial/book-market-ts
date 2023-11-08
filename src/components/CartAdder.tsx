import React, { useState } from "react";
import Counter from "./ui/Counter";
import { Book } from "../types/book";
import { useContextSelector, useContextUpdate } from "../store/AppContext";
import { CartItem } from "../types/cartItem";

type Props = {
    book: Book;
};

const CartAdder = ({ book }: Props) => {
    const [amount, setAmount] = useState(1);
    const cart = useContextSelector((state) => state.cart);
    const updateContext = useContextUpdate();
    const clickHandle = () => {
        const itemIdx = cart.findIndex((item) => item.bookId === book.id);
        let cartItem: CartItem;
        if (itemIdx > -1) {
            cartItem = cart.splice(itemIdx, 1)[0];
            cartItem.amount += amount;
        } else {
            cartItem = { bookId: book.id, amount };
        }
        updateContext({ cart: [...cart, cartItem] });
        setAmount(1);
    };
    return (
        <div className="flex flex-col justify-start gap-5 ">
            <div className="flex justify-between gap-3">
                <div className="font-bold text-xl text-red-500">
                    <span className="font-medium text-gray-800 mr-2">
                        Price:
                    </span>
                    ${book.price}
                </div>
                <Counter
                    min={1}
                    max={book.amount}
                    value={book.amount === 0 ? 0 : 1}
                    onChange={setAmount}
                />
            </div>
            <div className="flex justify-between gap-3">
                <div className="font-bold text-xl text-red-500">
                    <span className="font-medium text-gray-800 mr-2">
                        Total:
                    </span>
                    ${book.price * amount}
                </div>
                <button
                    disabled={book.amount === 0}
                    onClick={clickHandle}
                    className="px-3 py-1 w-36 rounded-md bg-green-600 hover:bg-green-500 text-white font-medium transition-colors">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default CartAdder;
