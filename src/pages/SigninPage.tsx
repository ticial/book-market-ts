import React, { useState } from "react";
import { DEFAUL_USER_ICON } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/useUserStore";

const SigninPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const { signin } = useUserStore();
    const signinHandle = () => {
        if (lengthCheck()) {
            signin(username);
            navigate("/");
        }
    };
    const lengthCheck = () => {
        return username.length >= 4 && username.length <= 16;
    };
    return (
        <div className="flex-1 w-full h-full flex justify-center items-center">
            <div className="flex w-fit flex-col border border-gray-300 bg-white/50 shadow-lg p-5 rounded-3xl">
                <form
                    className="flex flex-col items-center justify-center w-80 gap-5"
                    action="">
                    <h1 className="mb-3 text-4xl font-extrabold text-gray-700">
                        Sign In
                    </h1>
                    <img
                        className="w-36 h-36 img-fluid bg-white rounded-full outline outline-2 outline-gray-300"
                        src={DEFAUL_USER_ICON}
                        alt="userimage"
                    />
                    <div className="flex flex-col items-center justify-center w-full gap-1">
                        <label
                            htmlFor="username"
                            className="font-medium text-lg">
                            Username
                        </label>
                        <input
                            className="h-9 rounded-full outline-none w-full px-4 border border-slate-400 bg-white/50 focus-within:bg-white/90 hover:bg-white/90   text-indigo-900 transition-colors overflow-hidden text-center"
                            placeholder="Enter username"
                            name="username"
                            type="text"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        />
                    </div>
                    <button
                        disabled={!lengthCheck()}
                        className="flex items-center justify-center w-full h-9 m-1 px-3  rounded-full bg-slate-500 hover:bg-slate-500/80 active:bg-slate-400 text-white transition-colors font-medium"
                        onClick={signinHandle}>
                        Signin
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SigninPage;
