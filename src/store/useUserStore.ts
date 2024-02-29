import { useEffect } from "react";
import { useContextSelector, useContextUpdate } from "./AppContext";
import { fakeAuthApi } from "api/authApi";

const STORAGE_KEY = "user";

export const useUserStore = () => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signin = async (username: string) => {
    fakeAuthApi.signin(username).then((user) => {
      updateContext({ user });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    });
  };

  const signout = async () => {
    fakeAuthApi.signout();
    updateContext({ user: null });
    localStorage.removeItem(STORAGE_KEY);
  };

  return { user, signin, signout };
};
