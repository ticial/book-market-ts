import Icon from "components/svg/Icon";

type Props = { count: number; onClick: () => void };

const CartButton = ({ count, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-10 h-10 m-1 relative border-slate-500 border rounded-full text-slate-500 hover:bg-slate-500/80 active:bg-slate-400 hover:text-white  transition-colors">
      {count > 0 && (
        <div className=" absolute left-6 bottom-5">
          <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
            {count}
          </p>
        </div>
      )}

      <Icon type="cart" className="w-6 h-6" />
    </button>
  );
};

export default CartButton;
