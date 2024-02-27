import Icon from "components/svg/Icon";

type Props = {
  value: string;
  selected: boolean;
  onClick: () => void;
};

const SelectItem = ({ value, selected, onClick }: Props) => {
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
          <Icon type="check" className="h-5 w-5" />
        </span>
      )}
    </li>
  );
};

export default SelectItem;
