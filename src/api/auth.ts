import { User } from "../types/user";

export const fakeAuthProvider = {
    isAuthenticated: false,
    async signin(username: string) {
        await new Promise((r) => setTimeout(r, 500)); // fake delay
        fakeAuthProvider.isAuthenticated = true;
        const user: User = {
            username,
            image: "https://prometheus-platform.github.io/Example_of_course_project_2/static/media/avatar.0d14c6999b4a5c8e86a7.png",
        };
        console.log("signin: " + username);
        localStorage.setItem("user", JSON.stringify(user));
        return user;
    },
    async signout() {
        await new Promise((r) => setTimeout(r, 500)); // fake delay
        fakeAuthProvider.isAuthenticated = false;

        console.log("signout");
        localStorage.removeItem("user");
    },
};
