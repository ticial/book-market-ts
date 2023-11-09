import React from "react";

type Props = { count: number; onClick: () => void };

const CartButton = ({ count, onClick }: Props) => {
    return (
        <button
            onClick={onClick}
            className="flex items-center justify-center w-10 h-10 m-1 relative border-slate-500 border rounded-full text-slate-500 hover:bg-slate-500/80 active:bg-slate-400 hover:text-white  transition-colors">
            {count > 0 && (
                <div className=" absolute left-6 bottom-5">
                    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                        {count}
                    </p>
                </div>
            )}

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
            </svg>
        </button>
    );
};

export default CartButton;
