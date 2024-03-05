import { fakeAuthApi } from "api/authApi";
import { makeAutoObservable } from "mobx";
import { IUser } from "types/user";

const STORAGE_KEY = "user";

const getUserFromStorage = () => {
  const user = localStorage.getItem(STORAGE_KEY);
  if (user) {
    try {
      return JSON.parse(user);
    } catch (error) {
      console.log(error);
    }
  }
  return null;
};

class UserStore {
  user: IUser | null = getUserFromStorage();

  constructor() {
    makeAutoObservable(this);
  }

  signin = async (username: string) => {
    fakeAuthApi.signin(username).then((user) => {
      this.user = user;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    });
  };

  signout = async () => {
    fakeAuthApi.signout();
    this.user = null;
    localStorage.removeItem(STORAGE_KEY);
  };
}

const userStore = new UserStore();

export default userStore;
