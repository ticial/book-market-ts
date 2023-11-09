import { useEffect } from "react";
import { useContextSelector, useContextUpdate } from "./AppContext";
import { CartItem } from "../types/cartItem";
import { fakeBooksApi } from "../api/booksApi";

export const useCartStore = () => {
    const STORAGE_KEY = "cart";
    const cart = useContextSelector((state) => state.cart);
    const updateContext = useContextUpdate();

    useEffect(() => {
        const storageItem = localStorage.getItem(STORAGE_KEY);
        if (storageItem) {
            try {
                updateContext({ cart: JSON.parse(storageItem) });
            } catch (error) {
                console.log(error);
            }
        }
    }, []);

    const push = (bookId: number, amount: number) => {
        const itemIdx = cart.findIndex((item) => item.bookId === bookId);
        let cartItem: CartItem;
        if (itemIdx > -1) {
            cartItem = cart.splice(itemIdx, 1)[0];
            cartItem.amount += amount;
        } else {
            cartItem = { bookId: bookId, amount };
        }
        const updatedCart = [...cart, cartItem];
        updateContext({ cart: updatedCart });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCart));
    };

    const remove = (bookId: number) => {
        const updatedCart = cart.filter((item) => item.bookId !== bookId);
        updateContext({ cart: updatedCart });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCart));
    };

    const purchase = () => {
        fakeBooksApi.purchase(cart);
        updateContext({ cart: [] });
        localStorage.removeItem(STORAGE_KEY);
    };

    const itemsAmount = () =>
        cart.reduce((sum, item) => (sum += item.amount), 0);

    return { cart, push, remove, purchase, itemsAmount };
};
