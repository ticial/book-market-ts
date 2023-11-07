import Layout from "./Layout";
import { createBrowserRouter, redirect } from "react-router-dom";
import { fakeAuthProvider } from "../api/auth";
import SigninPage from "../pages/SigninPage";
import BookListPage from "../pages/BookListPage";
import BookPage from "../pages/BookPage";
import CartPage from "../pages/CartPage";

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
                path: "books/:id",
                Component: BookPage,
            },
            {
                path: "signin",
                action: loginAction,
                loader: loginLoader,
                Component: SigninPage,
            },
            {
                path: "cart",
                loader: protectedLoader,
                Component: CartPage,
            },
        ],
    },
    {
        path: "/logout",
        async action() {
            // We signout in a "resource route" that we can hit from a fetcher.Form
            await fakeAuthProvider.signout();
            return redirect("/");
        },
    },
]);

export default router;

async function loginAction({ request }: { request: any }) {
    let formData = await request.formData();
    let username = formData.get("username");

    // Validate our form inputs and return validation errors via useActionData()
    if (!username) {
        return {
            error: "You must provide a username to log in",
        };
    }

    // Sign in and redirect to the proper destination if successful.
    try {
        await fakeAuthProvider.signin(username);
    } catch (error) {
        // Unused as of now but this is how you would handle invalid
        // username/password combinations - just like validating the inputs
        // above
        return {
            error: "Invalid login attempt",
        };
    }

    let redirectTo = formData.get("redirectTo");
    return redirect(redirectTo || "/");
}

async function loginLoader() {
    if (fakeAuthProvider.isAuthenticated) {
        return redirect("/");
    }
    return null;
}

function protectedLoader({ request }: { request: any }) {
    // If the user is not logged in and tries to access `/protected`, we redirect
    // them to `/login` with a `from` parameter that allows login to redirect back
    // to this page upon successful authentication
    if (!fakeAuthProvider.isAuthenticated) {
        let params = new URLSearchParams();
        params.set("from", new URL(request.url).pathname);
        return redirect("/login?" + params.toString());
    }
    return null;
}

// function ProtectedPage() {
//     return <h3>Protected</h3>;
// }
