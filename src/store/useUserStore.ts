import { useEffect } from "react";
import { useContextSelector, useContextUpdate } from "./AppContext";
import { fakeAuthApi } from "../api/authApi";

export const useUserStore = () => {
    const STORAGE_KEY = "user";
    const user = useContextSelector((state) => state.user);
    const updateContext = useContextUpdate();

    useEffect(() => {
        const storageUser = localStorage.getItem(STORAGE_KEY);
        if (storageUser) {
            try {
                updateContext({ user: JSON.parse(storageUser) });
            } catch (error) {
                console.log(error);
            }
        }
    }, []);

    const signin = (username: string) => {
        fakeAuthApi.signin(username).then((user) => {
            updateContext({ user });
            localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
        });
    };

    const signout = () => {
        fakeAuthApi.signout();
        updateContext({ user: null });
        localStorage.removeItem(STORAGE_KEY);
    };

    return { user, signin, signout };
};
