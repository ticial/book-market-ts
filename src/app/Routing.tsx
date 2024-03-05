import { useEffect } from "react";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout";
import SigninPage from "pages/SigninPage/SigninPage";
import BookListPage from "pages/BookListPage/BookListPage";
import ErrorPage from "pages/ErrorPage/ErrorPage";
import BookPage from "pages/BookPage/BookPage";
import CartPage from "pages/CartPage/CartPage";
import userStore from "store/userStore";
import { observer } from "mobx-react-lite";

const Routing = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/books" replace />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signout" element={<Signout />} />
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

const RequireAuth = observer(() => {
  // let { user } = useUserStore();
  let { user } = userStore;
  let location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
});

const Signout = observer(() => {
  // let { signout } = useUserStore();
  let { signout } = userStore;
  useEffect(() => {
    signout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Navigate to="/signin" replace />;
});
