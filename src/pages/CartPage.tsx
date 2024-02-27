import { useCartStore } from "../store/useCartStore";
import CartItemUI from "../components/CartItemUI";

const CartPage = () => {
  const cart = useCartStore();
  const purchaseHandle = () => {
    cart.purchase();
  };

  return (
    <div className="flex-1 w-full h-full flex justify-center items-center">
      <div className="flex max-w-screen-md w-full flex-col border border-gray-300 bg-white/50 shadow-lg p-4 gap-4 rounded-3xl justify-center">
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
              <CartItemUI key={item.book.id} item={item} />
            ))}
            <div className="flex justify-end">
              <div className="flex gap-3 justify-between items-center flex-col xs:flex-row p-3 border border-green-600 rounded-lg">
                <div className="ml-2 font-bold w-44 min-w-fit text-center xs:text-left">
                  <span className=" text-slate-700">
                    Total price: ${cart.totalPrice().toFixed(2)}
                  </span>
                </div>
                <button
                  type="submit"
                  className=" w-36 h-9 px-3 rounded-lg bg-green-600 hover:bg-green-500 active:bg-green-400 disabled:bg-gray-300 text-white transition-colors font-medium"
                  onClick={purchaseHandle}>
                  Purchase
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
