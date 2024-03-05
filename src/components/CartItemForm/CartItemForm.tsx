import { memo, useState } from "react";
import Counter from "../ui/Counter/Counter";
import { IBook } from "types/book";
import { clamp } from "utils/numberUtils";
import Button from "../ui/Button/Button";
import cartStore from "store/cartStore";

type Props = {
  book: IBook;
  initialAmount?: number;
};

const CartItemForm = memo(({ book, initialAmount = 1 }: Props) => {
  const cart = cartStore;
  const item = cart.getItem(book.id);

  const [amount, setAmount] = useState(item?.amount || initialAmount);
  const isDisabled = book.amount < 1 || amount < 1 || amount > book.amount;
  const clickHandle = () => {
    let amountClamped = clamp(amount, 1, book.amount);
    if (amountClamped === amount) {
      cart.push(book, amount);
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
          max={book.amount}
          value={book.amount === 0 ? 0 : amount}
          onChange={setAmount}
        />
      </div>
      <div className="flex justify-between gap-4">
        <div className="text-xl">
          <span className="font-medium text-gray-800 mr-2">Total:</span>
          <span className="font-bold  text-red-500" data-testid="total-price">
            ${cart.itemPrice({ book, amount })}
          </span>
        </div>
        <Button
          disabled={isDisabled}
          onClick={clickHandle}
          color="green"
          className="w-32">
          {item ? "Update Cart" : "Add to Cart"}
        </Button>
      </div>
    </div>
  );
});

export default CartItemForm;
