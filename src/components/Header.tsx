import React from "react";
import SidebarTogleButton from "./ui/SidebarTogleButton";
import MainButton from "./ui/MainButton";
import CartButton from "./ui/CartButton";
import Userpic from "./Userpic";
import { useUserStore } from "../store/useUserStore";
import { useCartStore } from "../store/useCartStore";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const { user, signout } = useUserStore();
    const cart = useCartStore();

    return (
        <header className="h-16 flex justify-center fixed w-full transition-colors backdrop-blur bg-white/50 supports-backdrop-blur:bg-white/50 border-b border-slate-900/10 shadow-md z-50">
            <div className="container xl:max-w-screen-xl flex justify-between items-center py-2 gap-2">
                <div className="flex gap-2 items-center">
                    <div className="mx-4 text-slate-700 whitespace-nowrap font-bold  ">
                        <a href="/" className="text-2xl">
                            <span className="text-red-600">X</span>
                            -course task
                            <span className="hidden sm:inline">
                                {" "}
                                / Pavlo Retivoi
                            </span>
                        </a>
                    </div>
                </div>

                <div className="md:hidden block">
                    <SidebarTogleButton />
                </div>

                <div className="hidden md:flex gap-2">
                    <CartButton
                        count={cart.itemsAmount()}
                        onClick={cart.purchase}
                    />
                    {user ? (
                        <>
                            <Userpic user={user} />
                            <MainButton onClick={signout}>Sign Out</MainButton>
                        </>
                    ) : (
                        <MainButton onClick={() => navigate("signin")}>
                            Sign In
                        </MainButton>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
