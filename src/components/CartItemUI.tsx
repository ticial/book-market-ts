import { useEffect, useState } from "react";
import { CartItem } from "types/cartItem";
import Counter from "./ui/Counter/Counter";
import RemoveButton from "./ui/RemoveButton";
import { useCartStore } from "store/useCartStore";

type Props = {
  item: CartItem;
};

const CartItemUI = ({ item }: Props) => {
  const [amount, setAmount] = useState(item.amount);
  const book = item.book;
  const cart = useCartStore();
  useEffect(() => {
    cart.push(book, amount);
  }, [amount, book, cart]);
  return (
    <div className="rounded-lg border border-gray-400 bg-white/50 p-3">
      <div className="flex gap-4 flex-wrap flex-col xs:flex-row">
        <div className="flex flex-1 w-56 items-center font-bold text-red-800 hover:text-red-600">
          <a className="ml-1" href={`/books/${book.id}`}>
            {book.title}
          </a>
        </div>
        <div className="flex gap-2 sm:gap-10 items-center justify-end ">
          <Counter
            min={1}
            max={book.amount}
            value={amount}
            onChange={setAmount}
          />

          <div className="font-bold text-green-700 w-20 text-center">
            ${(book.price * amount).toFixed(2)}
          </div>
          <RemoveButton onClick={() => cart.remove(book.id)} />
        </div>
      </div>
    </div>
  );
};

export default CartItemUI;
