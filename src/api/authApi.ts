import { User } from "types/user";

export const DEFAUL_USER_ICON =
  "https://prometheus-platform.github.io/Example_of_course_project_2/static/media/avatar.0d14c6999b4a5c8e86a7.png";

export const fakeAuthApi = {
  isAuthenticated: false,
  async signin(username: string) {
    await new Promise((r) => setTimeout(r, 500)); // fake delay
    fakeAuthApi.isAuthenticated = true;
    const user: User = {
      username,
      image: DEFAUL_USER_ICON,
    };
    return user;
  },
  async signout() {
    await new Promise((r) => setTimeout(r, 500)); // fake delay
    fakeAuthApi.isAuthenticated = false;
  },
};
