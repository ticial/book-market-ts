import MainButton from "./ui/MainButton";
import CartButton from "./ui/CartButton";
import Userpic from "./Userpic";
import { useUserStore } from "../store/useUserStore";
import { useCartStore } from "../store/useCartStore";
import { useLocation, useNavigate } from "react-router-dom";
import MobileMenu from "./ui/MobileMenu";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useUserStore();
    const cart = useCartStore();

    return (
        <header className="h-16 flex justify-center fixed w-full transition-colors backdrop-blur bg-white/50 supports-backdrop-blur:bg-white/50 border-b border-slate-200/50 shadow-md z-50">
            <div className="container xl:max-w-screen-xl flex justify-between items-center py-2 gap-2">
                <div className="flex gap-2 items-center">
                    <div className="mx-4 text-slate-700 whitespace-nowrap font-bold  ">
                        <a href="/" className="text-2xl">
                            <span className="text-red-600">X</span>
                            -course task
                            <span className="hidden xs:inline">
                                / Pavlo Retivoi
                            </span>
                        </a>
                    </div>
                </div>

                <div className="md:hidden flex gap-2">
                    {user && (
                        <CartButton
                            count={cart.itemsAmount()}
                            onClick={() => navigate("cart")}
                        />
                    )}
                    <MobileMenu>
                        {user ? (
                            <>
                                <Userpic user={user} />
                                <MainButton
                                    onClick={() => navigate("/signout")}>
                                    Sign Out
                                </MainButton>
                            </>
                        ) : (
                            <MainButton
                                onClick={() =>
                                    navigate("/signin", {
                                        state: { from: location.pathname },
                                    })
                                }>
                                Sign In
                            </MainButton>
                        )}
                    </MobileMenu>
                </div>

                <div className="hidden md:flex gap-2">
                    {user ? (
                        <>
                            <CartButton
                                count={cart.itemsAmount()}
                                onClick={() => navigate("cart")}
                            />
                            <Userpic user={user} />
                            <MainButton onClick={() => navigate("/signout")}>
                                Sign Out
                            </MainButton>
                        </>
                    ) : (
                        <MainButton
                            onClick={() =>
                                navigate("/signin", {
                                    state: { from: location.pathname },
                                })
                            }>
                            Sign In
                        </MainButton>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
