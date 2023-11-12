import React, { useEffect, useState } from "react";
import useDebounce from "src/hooks/useDebounce";

type Props = {
    value: string;
    onChange: (query: string) => void;
};

const Search = ({ value, onChange }: Props) => {
    const [searchText, setSearchText] = useState("");
    const debounce = useDebounce(500);

    useEffect(() => {
        setSearchText(value);
    }, [value]);

    const inputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setSearchText(text);
        debounce(() => onChange(text.trim()));
    };

    const clickHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onChange(searchText.trim());
    };
    return (
        <form className="flex items-center justify-center w-full h-10 ">
            <input
                type="text"
                className="h-full rounded-l-full outline-none w-full px-4 border border-slate-300 shadow-md bg-white/50 focus-within:bg-white/90 hover:bg-white/90   text-slate-900 transition-colors overflow-hidden"
                placeholder="Search"
                onChange={inputHandle}
                value={searchText}
            />
            <button
                type="submit"
                onClick={clickHandle}
                className="flex items-center justify-center w-20 h-full rounded-r-full shadow-md bg-slate-500 hover:bg-slate-500/80 active:bg-slate-400 text-white transition-colors font-medium">
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
        </form>
    );
};

export default Search;
