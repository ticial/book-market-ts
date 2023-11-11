import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout";
import { useUserStore } from "../store/useUserStore";
import SigninPage from "../pages/SigninPage";
import BookListPage from "../pages/BookListPage";
import ErrorPage from "../pages/ErrorPage";
import BookPage from "../pages/BookPage";
import CartPage from "../pages/CartPage";

const Routing = () => {
    console.log("routing");
    return (
        <Routes>
            <Route path="/prometheus-x-course-task" element={<Layout />}>
                <Route path="" element={<Navigate to="books" replace />} />
                <Route path="signin" element={<SigninPage />} />
                <Route path="signout" element={<Signout />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="error" element={<ErrorPage />} />
                <Route
                    path="books"
                    element={<RequireAuth children={<BookListPage />} />}
                />
                <Route
                    path="books/:bookId"
                    element={<RequireAuth children={<BookPage />} />}
                />
                <Route
                    path="cart"
                    element={<RequireAuth children={<CartPage />} />}
                />
            </Route>
        </Routes>
    );
};

export default Routing;

const RequireAuth = ({ children }: { children: JSX.Element }) => {
    let { user } = useUserStore();
    let location = useLocation();

    if (!user) {
        return <Navigate to="signin" state={{ from: location }} replace />;
    }

    return children;
};

const Signout = () => {
    let { signout } = useUserStore();
    useEffect(() => {
        signout();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <Navigate to="signin" replace />;
};
