import React, { useState } from "react";
import useOutsideClick from "src/hooks/useOutsideClick";

const MobileMenu = ({ children }: { children: React.ReactNode }) => {
    const [open, setOpen] = useState(false);
    const menu = useOutsideClick<HTMLDivElement>(() => setOpen(false));
    return (
        <div className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-center w-10 h-10 m-1  text-slate-500 border-slate-500 border rounded-lg hover:bg-slate-500 active:bg-slate-400 hover:text-white transition-colors">
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
            {open && (
                <div
                    ref={menu}
                    className="absolute right-0 z-10 mt-1 w-fit overflow-visible flex flex-col items-end gap-3  rounded-3xl bg-white p-3 text-base shadow-lg border border-slate-300 focus:outline-none sm:text-sm">
                    {children}
                </div>
            )}
        </div>
    );
};

export default MobileMenu;
