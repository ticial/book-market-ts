import { fireEvent, render, screen } from "@testing-library/react";
import { booksData } from "api/booksData";
import CartItemForm from "components/CartItemForm/CartItemForm";

const mockBook = booksData[0];

const renderCartItemForm = (amount = 1) => {
  return render(<CartItemForm book={mockBook} initialAmount={amount} />);
};

test("amount state updates correctly when increased by 1", () => {
  renderCartItemForm();
  const plusButton = screen.getByText("+");
  fireEvent.click(plusButton);
  const input = screen.getByTestId("counter-input") as HTMLInputElement;
  expect(input.value).toBe("2");
});

test("amount state updates correctly when the maximum value is increased by 1", () => {
  renderCartItemForm(mockBook.amount);
  const plusButton = screen.getByText("+");
  fireEvent.click(plusButton);
  const input = screen.getByTestId("counter-input") as HTMLInputElement;
  expect(input.value).toBe("" + mockBook.amount);
});

test("amount state updates correctly when decreased by 1", () => {
  renderCartItemForm(2);
  const minusButton = screen.getByText("-");
  const input = screen.getByTestId("counter-input") as HTMLInputElement;
  fireEvent.click(minusButton);
  expect(input.value).toBe("1");
});

test("amount state updates correctly when the minimum value is decreased by 1", () => {
  renderCartItemForm(1);
  const minusButton = screen.getByText("-");
  fireEvent.click(minusButton);
  const input = screen.getByTestId("counter-input") as HTMLInputElement;
  expect(input.value).toBe("1");
});

test("price state updates correctly when changed amount by 1", () => {
  renderCartItemForm();
  const plusButton = screen.getByText("+");
  const totalSpan = screen.getByTestId("total-price");
  expect(totalSpan.textContent).toBe("$10.99");
  fireEvent.click(plusButton);
  expect(totalSpan.textContent).toBe("$21.98");
});
