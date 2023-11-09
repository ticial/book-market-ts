import React from "react";

type Props = {
    children: React.ReactNode;
    onClick: () => void;
};

const MainButton = ({ children, onClick }: Props) => {
    return (
        <button
            className="flex items-center justify-center w-24 h-10 m-1 px-3  rounded-full bg-slate-500 hover:bg-slate-500/80 active:bg-slate-400 text-white transition-colors font-medium"
            onClick={onClick}>
            {children}
        </button>
    );
};

export default MainButton;
