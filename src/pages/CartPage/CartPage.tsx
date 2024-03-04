import { useCartStore } from "store/useCartStore";
import CartItem from "components/CartItem/CartItem";
import Button from "components/ui/Button/Button";
import Panel from "components/ui/Panel/Panel";

const CartPage = () => {
  const cart = useCartStore();
  const purchaseHandle = () => {
    cart.purchase();
  };

  return (
    <div className="centered">
      <Panel className="max-w-screen-md w-full p-4 gap-4  rounded-3xl">
        <h1 className="mb-3 text-4xl font-extrabold text-gray-700 text-center">
          Cart
        </h1>
        {cart.items.length === 0 ? (
          <>
            <div className="mb-3 font-medium text-gray-700 text-center">
              Empty
            </div>
            <a href="/" className="font-medium text-red-800 text-center">
              Back to catalog?
            </a>
          </>
        ) : (
          <>
            {cart.items.map((item) => (
              <CartItem key={item.book.id} item={item} />
            ))}
            <div className="flex justify-end">
              <div className="flex gap-3 justify-between items-center flex-col xs:flex-row p-3 border border-green-600 rounded-lg">
                <div className="ml-2 font-bold w-44 min-w-fit text-center xs:text-left">
                  <span className=" text-slate-700">
                    Total price: ${cart.totalPrice()}
                  </span>
                </div>

                <Button
                  type="submit"
                  color="green"
                  className="w-36"
                  onClick={purchaseHandle}>
                  Purchase
                </Button>
              </div>
            </div>
          </>
        )}
      </Panel>
    </div>
  );
};

export default CartPage;
