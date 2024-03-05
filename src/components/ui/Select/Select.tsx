import Icon from "components/ui/Icon/Icon";
import useOutsideClick from "hooks/useOutsideClick";
import { useState } from "react";
import SelectItem from "./SelectItem";
import styles from "./Select.module.css";

export type Option = { key: string; value: string };

type Props = {
  selectedKey: string;
  options: Option[];
  onSelect: (key: string) => void;
};

const Select = ({ selectedKey, options, onSelect }: Props) => {
  const [open, setOpen] = useState(false);
  const getSelected = (key: string) =>
    options.find((option) => option.key === key) || options[0];
  const [selected, setSelected] = useState<Option>(getSelected(selectedKey));
  const clickItemHandle = (option: Option) => {
    setSelected(option);
    setOpen(false);
    onSelect(option.key);
  };
  const menu = useOutsideClick<HTMLDivElement>(() => setOpen(false));

  return (
    <div ref={menu} className="relative w-36 ">
      <button
        onClick={() => setOpen(!open)}
        type="button"
        className={styles.selected}
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label">
        <span className="flex items-center">
          <span className="ml-3 block truncate">{selected.value}</span>
        </span>
        <span className={styles.selectedArrow}>
          <Icon type="chevron-down" className="h-5 w-5 text-gray-400" />
        </span>
      </button>
      {open && (
        <ul
          className={styles.options}
          tabIndex={-1}
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3">
          {options.map((option) => (
            <SelectItem
              key={option.key}
              value={option.value}
              selected={option.key === selectedKey}
              onClick={() => clickItemHandle(option)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
