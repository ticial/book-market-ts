import { useEffect } from "react";
import { useContextSelector, useContextUpdate } from "./AppContext";
import { ICartItem } from "types/cartItem";
import { fakeBooksApi } from "api/booksApi";
import { IBook } from "types/book";
import { clamp } from "utils/numberUtils";

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

  const push = (book: IBook, amount: number) => {
    const itemIdx = items.findIndex((item) => item.book.id === book.id);
    amount = clamp(amount, 1, book.amount);
    let updatedCart: ICartItem[];
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

  const itemPrice = (item: ICartItem) =>
    (item.amount * item.book.price).toFixed(2);

  const totalPrice = () =>
    items
      .reduce((sum, item) => (sum += item.amount * item.book.price), 0)
      .toFixed(2);

  const purchase = () => {
    fakeBooksApi.purchase(items);
    updateContext({ cart: [] });
    localStorage.removeItem(STORAGE_KEY);
  };

  const itemsAmount = () =>
    items.reduce((sum, item) => (sum += item.amount), 0);

  const getItem = (bookId: number) =>
    items.find((item) => item.book.id === bookId);

  return {
    items,
    push,
    remove,
    purchase,
    itemsAmount,
    totalPrice,
    getItem,
    itemPrice,
  };
};
