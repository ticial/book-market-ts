import React from "react";
import SidebarTogleButton from "./ui/SidebarTogleButton";
import MainButton from "./ui/MainButton";
import { fakeAuthProvider } from "../api/auth";
import CartButton from "./ui/CartButton";
import { useContextSelector, useContextUpdate } from "../store/AppContext";
import Userpic from "./Userpic";

const Header = () => {
    const user = useContextSelector((state) => state.user);
    const cart = useContextSelector((state) => state.cart);
    const updateContext = useContextUpdate();
    const signinClick = () => {
        fakeAuthProvider.signin("test").then((user) => {
            updateContext({ user });
        });
    };
    const signoutClick = () => {
        fakeAuthProvider.signout();
        updateContext({ user: null });
    };

    return (
        <header className=" flex justify-center fixed w-full transition-colors backdrop-blur bg-white/50 supports-backdrop-blur:bg-white/50 border-b border-slate-900/10 shadow-md z-50">
            <div className="container max-w-screen-xl flex justify-between items-center py-2 px-3 gap-2">
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
                    <CartButton count={cart.length} />
                    {user ? (
                        <>
                            <Userpic user={user} />
                            <MainButton onClick={signoutClick}>
                                Sign Out
                            </MainButton>
                        </>
                    ) : (
                        <MainButton onClick={signinClick}>Sign In</MainButton>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
