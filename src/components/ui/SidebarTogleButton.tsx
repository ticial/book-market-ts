import React from "react";

const SidebarTogleButton = () => {
    return (
        <button className="flex items-center justify-center w-9 h-9 m-1  text-slate-500 border-slate-500 border rounded-lg hover:bg-slate-500 hover:text-white transition-colors">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
            </svg>
        </button>
    );
};

export default SidebarTogleButton;
