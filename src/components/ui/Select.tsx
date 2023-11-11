import React, { useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";

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
                    <span className="ml-3 block truncate">
                        {selected.value}
                    </span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                    <svg
                        className="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                            fillRule="evenodd"
                            d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
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

const SelectItem = ({
    value,
    selected,
    onClick,
}: {
    value: string;
    selected: boolean;
    onClick: () => void;
}) => {
    return (
        <li
            onClick={onClick}
            className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9 hover:bg-slate-200"
            role="option"
            aria-selected>
            <div className="flex items-center">
                <span className="font-normal ml-3 block truncate">{value}</span>
            </div>
            {selected && (
                <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                    <svg
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>
            )}
        </li>
    );
};

export default Select;
