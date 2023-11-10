import Layout from "./Layout";
import { createBrowserRouter, redirect } from "react-router-dom";
import { fakeAuthApi } from "../api/authApi";
import SigninPage from "../pages/SigninPage";
import BookListPage from "../pages/BookListPage";
import BookPage from "../pages/BookPage";
import CartPage from "../pages/CartPage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        id: "root",
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: BookListPage,
            },
            {
                path: "books",
                Component: BookListPage,
            },
            {
                path: "books/:bookId",
                Component: BookPage,
            },
            {
                path: "signin",
                // action: loginAction,
                // loader: loginLoader,
                Component: SigninPage,
            },
            {
                path: "cart",
                // loader: protectedLoader,
                Component: CartPage,
            },
            {
                path: "/*",
                Component: ErrorPage,
            },
            {
                path: "error",
                Component: ErrorPage,
            },
        ],
    },
    {
        path: "/logout",
        async action() {
            // We signout in a "resource route" that we can hit from a fetcher.Form
            await fakeAuthApi.signout();
            return redirect("/");
        },
    },
]);

export default router;

// async function loginAction({ request }: { request: any }) {
//     let formData = await request.formData();
//     let username = formData.get("username");

//     // Validate our form inputs and return validation errors via useActionData()
//     if (!username) {
//         return {
//             error: "You must provide a username to log in",
//         };
//     }

//     try {
//         await fakeAuthApi.signin(username);
//     } catch (error) {
//         return {
//             error: "Invalid login attempt",
//         };
//     }

//     let redirectTo = formData.get("redirectTo");
//     return redirect(redirectTo || "/");
// }

// async function loginLoader() {
//     if (fakeAuthApi.isAuthenticated) {
//         return redirect("/");
//     }
//     return null;
// }

// function protectedLoader({ request }: { request: any }) {
//     if (!fakeAuthApi.isAuthenticated) {
//         let params = new URLSearchParams();
//         params.set("from", new URL(request.url).pathname);
//         return redirect("/login?" + params.toString());
//     }
//     return null;
// }
