import { useState } from "react";
import Counter from "../ui/Counter/Counter";
import { IBook } from "types/book";
import { useCartStore } from "store/useCartStore";
import { clamp } from "utils/numberUtils";
import Button from "../ui/Button/Button";

type Props = {
  book: IBook;
  initialAmount?: number;
};

const CartItemForm = ({ book, initialAmount = 1 }: Props) => {
  const cart = useCartStore();
  const item = cart.getItem(book.id);
  const [amount, setAmount] = useState(initialAmount);
  const clickHandle = () => {
    let amountClamped = clamp(amount, 1, book.amount);
    if (amountClamped === amount) {
      cart.push(book, item ? item.amount + amount : amount);
      setAmount(1);
    } else {
      setAmount(amountClamped);
    }
  };
  return (
    <div className="flex flex-col justify-start gap-4 ">
      <div className="flex justify-between gap-4">
        <div className="text-xl">
          <span className="font-medium text-gray-800 mr-2">Price:</span>
          <span className="font-bold  text-red-500">${book.price}</span>
        </div>
        <Counter
          min={1}
          max={item ? book.amount - item.amount : book.amount}
          value={book.amount === 0 ? 0 : amount}
          onChange={setAmount}
        />
      </div>
      <div className="flex justify-between gap-4">
        <div className="text-xl">
          <span className="font-medium text-gray-800 mr-2">Total:</span>
          <span className="font-bold  text-red-500" data-testid="total-price">
            ${(book.price * amount).toFixed(2)}
          </span>
        </div>
        <Button
          disabled={book.amount <= 0 || amount === 0 || amount > book.amount}
          onClick={clickHandle}
          color="green"
          className="w-32">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default CartItemForm;
