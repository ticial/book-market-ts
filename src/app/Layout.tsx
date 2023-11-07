import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import GradientBg from "../components/ui/GradientBg";

const Layout = () => {
    return (
        <>
            <GradientBg />
            <Header />
            <main className="wrapper container h-full self-center mt-20 mb-8 flex flex-col justify-center">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
