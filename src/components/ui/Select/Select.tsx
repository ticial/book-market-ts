import Icon from "components/svg/Icon";
import useOutsideClick from "hooks/useOutsideClick";
import { useState } from "react";
import SelectItem from "./SelectItem";

export type Option = { key: number; value: string };

type Props = {
  selectedKey: number;
  options: Option[];
  onSelect: (key: number) => void;
};

const Select = ({ selectedKey, options, onSelect }: Props) => {
  const [open, setOpen] = useState(false);
  const getSelected = (key: number) =>
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
        className="relative w-full cursor-default rounded-full bg-white/50 pl-3 pr-10 text-left text-slate-700 shadow-md border border-slate-300 focus:outline-none hover:bg-white/90 focus:bg-white/90 sm:text-sm sm:leading-6 h-10"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label">
        <span className="flex items-center">
          <span className="ml-3 block truncate">{selected.value}</span>
        </span>
        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
          <Icon type="chevron-down" className="h-5 w-5 text-gray-400" />
        </span>
      </button>
      {open && (
        <ul
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-2xl bg-white py-1 text-base shadow-lg border border-slate-300 focus:outline-none sm:text-sm"
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
