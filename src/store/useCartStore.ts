import { useEffect } from "react";
import { useContextSelector, useContextUpdate } from "./AppContext";
import { CartItem } from "../types/cartItem";
import { fakeBooksApi } from "../api/booksApi";
import { Book } from "../types/book";

const STORAGE_KEY = "cart";

export const useCartStore = () => {
    const items = useContextSelector((state) => state.cart);
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const push = (book: Book, amount: number) => {
        const itemIdx = items.findIndex((item) => item.book.id === book.id);
        let updatedCart: CartItem[];
        if (itemIdx > -1) {
            if (items[itemIdx].amount === amount) {
                return;
            }
            items[itemIdx].amount = amount;
            updatedCart = [...items];
        } else {
            const cartItem = { book: book, amount };
            updatedCart = [...items, cartItem];
        }
        updateContext({ cart: updatedCart });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCart));
    };

    const remove = (bookId: number) => {
        const updatedCart = items.filter((item) => item.book.id !== bookId);
        updateContext({ cart: updatedCart });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCart));
    };

    const totalPrice = () =>
        items.reduce((sum, item) => (sum += item.amount * item.book.price), 0);

    const purchase = () => {
        fakeBooksApi.purchase(items);
        updateContext({ cart: [] });
        localStorage.removeItem(STORAGE_KEY);
    };

    const itemsAmount = () =>
        items.reduce((sum, item) => (sum += item.amount), 0);

    const getItem = (bookId: number) =>
        items.find((item) => item.book.id === bookId);

    return { items, push, remove, purchase, itemsAmount, totalPrice, getItem };
};
