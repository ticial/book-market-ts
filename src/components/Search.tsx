import React from "react";

const Search = ({ ...rest }) => {
    return (
        <div className="flex items-center justify-center w-full max-w-lg h-9 m-1 ">
            <input
                className="h-full rounded-l-full outline-none w-full px-4 border shadow-md bg-white/50 focus-within:bg-white/90 hover:bg-white/90   text-indigo-900 transition-colors overflow-hidden"
                placeholder="Search"
            />
            <button className="flex items-center justify-center w-20 h-full rounded-r-full shadow-md bg-slate-500 hover:bg-slate-400 text-white transition-colors font-medium">
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
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Search;
