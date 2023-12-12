import React, { useEffect } from "react";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout";
import { useUserStore } from "../store/useUserStore";
import SigninPage from "../pages/SigninPage";
import BookListPage from "../pages/BookListPage";
import ErrorPage from "../pages/ErrorPage";
import BookPage from "../pages/BookPage";
import CartPage from "../pages/CartPage";

const Routing = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/books" replace />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/books" element={<BookListPage />} />
        <Route path="/books/:bookId" element={<BookPage />} />
        <Route element={<RequireAuth />}>
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Routing;

const RequireAuth = () => {
  let { user } = useUserStore();
  let location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

const Signout = () => {
  let { signout } = useUserStore();
  useEffect(() => {
    signout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Navigate to="/signin" replace />;
};
