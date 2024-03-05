import { ICartItem } from "types/cartItem";
import { fakeBooksApi } from "api/booksApi";
import { IBook } from "types/book";
import { clamp } from "utils/numberUtils";
import { makeAutoObservable } from "mobx";

const STORAGE_KEY = "cart";

const getCartFromStorage = (): ICartItem[] => {
  const storageItem = localStorage.getItem(STORAGE_KEY);
  if (storageItem) {
    try {
      return JSON.parse(storageItem);
    } catch (error) {
      console.log(error);
    }
  }
  return [];
};

class CartStore {
  items = getCartFromStorage();

  constructor() {
    makeAutoObservable(this);
  }

  setItems(items: ICartItem[]) {
    this.items = items;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }

  push = (book: IBook, amount: number) => {
    const items = this.items;
    const itemIdx = items.findIndex((item) => item.book.id === book.id);
    amount = clamp(amount, 1, book.amount);
    if (itemIdx > -1) {
      if (items[itemIdx].amount === amount) {
        return;
      }
      items[itemIdx].amount = amount;
      this.setItems([...items]);
    } else {
      const cartItem = { book: book, amount };
      this.setItems([...items, cartItem]);
    }
  };

  remove = (bookId: number) => {
    this.setItems(this.items.filter((item) => item.book.id !== bookId));
  };

  itemPrice = (item: ICartItem) => (item.amount * item.book.price).toFixed(2);

  totalPrice = () =>
    this.items
      .reduce((sum, item) => (sum += item.amount * item.book.price), 0)
      .toFixed(2);

  purchase = () => {
    fakeBooksApi.purchase(this.items);
    this.items = [];
    localStorage.removeItem(STORAGE_KEY);
  };

  get itemsAmount() {
    return this.items.reduce((sum, item) => (sum += item.amount), 0);
  }

  getItem = (bookId: number) =>
    this.items.find((item) => item.book.id === bookId);
}

const cartStore = new CartStore();

export default cartStore;
