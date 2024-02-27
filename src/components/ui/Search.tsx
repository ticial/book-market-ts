import React, { useEffect, useState } from "react";
import useDebounce from "hooks/useDebounce";
import Icon from "components/svg/Icon";

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
        <Icon type="search" className="w-5 h-5" />
      </button>
    </form>
  );
};

export default Search;
