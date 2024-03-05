import Button from "../ui/Button/Button";
import CartButton from "../ui/CartButton/CartButton";
import Userpic from "../Userpic/Userpic";
import { useLocation, useNavigate } from "react-router-dom";
import MobileMenu from "../ui/MobileMenu/MobileMenu";
import { Link } from "react-router-dom";
import userStore from "store/userStore";
import { observer } from "mobx-react-lite";
import cartStore from "store/cartStore";

const Header = observer(() => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = userStore;
  const { itemsAmount } = cartStore;

  const buttonsGroup = () => (
    <>
      {user ? (
        <>
          <Userpic user={user} />
          <Button rounded="full" onClick={() => navigate("/signout")}>
            Sign Out
          </Button>
        </>
      ) : (
        <Button
          rounded="full"
          onClick={() =>
            navigate("/signin", {
              state: {
                from: location.pathname !== "/signin" && location.pathname,
              },
            })
          }>
          Sign In
        </Button>
      )}
    </>
  );

  return (
    <header className="h-16 flex justify-center fixed w-full backdrop-blur bg-white/50 supports-backdrop-blur:bg-white/50 border-b border-slate-200/50 shadow-md z-50">
      <div className="container xl:max-w-screen-xl flex justify-between items-center py-2 gap-2">
        <div className="flex gap-2 items-center">
          <div className="mx-4 text-slate-700 whitespace-nowrap font-bold  ">
            <Link to="/books" className="text-2xl">
              <span className="text-red-600">X</span>
              -course task
              <span className="hidden xs:inline">/ Pavlo Retivoi</span>
            </Link>
          </div>
        </div>

        <div className="flex gap-4 items-center px-2">
          {user && <CartButton count={itemsAmount} />}
          <MobileMenu>{buttonsGroup()}</MobileMenu>

          <div className="hidden md:flex gap-4 items-center">
            {buttonsGroup()}
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header;
