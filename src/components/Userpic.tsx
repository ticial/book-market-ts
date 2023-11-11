import React from "react";
import { User } from "../types/user";

type Props = {
    user: User;
};

const Userpic = ({ user }: Props) => {
    return (
        <div className="flex h-10 items-center  m-1 rounded-full border border-slate-400 bg-slate-50/50 hover:bg-slate-50/90 text-slate-800 transition-colors">
            <span className="px-4 font-medium">{user.username}</span>
            <span className=" rounded-full w-12">
                <img
                    className="w-12 h-12 img-fluid bg-white rounded-full outline outline-2 outline-gray-300"
                    src={user.image}
                    alt="userimage"
                />
            </span>
        </div>
    );
};

export default Userpic;
