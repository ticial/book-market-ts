import React, { useEffect, useState } from "react";
import { CartItem } from "../types/cartItem";
import Counter from "./ui/Counter";
import RemoveButton from "./ui/RemoveButton";
import { useCartStore } from "../store/useCartStore";

type Props = {
    item: CartItem;
};

const CartItemUI = ({ item }: Props) => {
    const [amount, setAmount] = useState(item.amount);
    const book = item.book;
    const cart = useCartStore();
    useEffect(() => {
        cart.push(book, amount);
    }, [amount]);
    return (
        <div className="rounded-lg border border-gray-400 bg-white/50 p-3">
            <div className="flex gap-4 items-center flex-wrap">
                <div className="w-full flex-1 font-bold text-gray-700">
                    <a href={`/books/${book.id}`}>{book.title}</a>
                </div>
                <div className="flex gap-10 items-center justify-between">
                    <Counter
                        min={1}
                        max={book.amount}
                        value={amount}
                        onChange={setAmount}
                    />

                    <div className="font-bold  text-green-700 w-20 text-center">
                        ${(book.price * amount).toFixed(2)}
                    </div>
                    <RemoveButton onClick={() => cart.remove(book.id)} />
                </div>
            </div>
        </div>
    );
};

export default CartItemUI;
