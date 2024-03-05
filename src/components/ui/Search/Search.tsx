import React, { useEffect, useState } from "react";
import useDebounce from "hooks/useDebounce";
import Icon from "components/ui/Icon/Icon";
import styles from "./Search.module.css";
import Button from "../Button/Button";

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
    onChange(searchText.trim());
  };
  return (
    <form className={styles.form}>
      <input
        type="text"
        className={styles.input}
        placeholder="Search"
        onChange={inputHandle}
        value={searchText}
      />
      {/* <button onClick={clickHandle} className={styles.button}>
        <Icon type="search" className="w-5 h-5" />
      </button> */}
      <Button onClick={clickHandle} className="w-20" rounded="none">
        <Icon type="search" className="w-5 h-5" />
      </Button>
    </form>
  );
};

export default Search;
