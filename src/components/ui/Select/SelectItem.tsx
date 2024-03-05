import Icon from "components/ui/Icon/Icon";
import styles from "./Select.module.css";

type Props = {
  value: string;
  selected: boolean;
  onClick: () => void;
};

const SelectItem = ({ value, selected, onClick }: Props) => {
  return (
    <li onClick={onClick} className={styles.option} role="option" aria-selected>
      <div className="flex items-center">
        <span className="font-normal ml-3 block truncate">{value}</span>
      </div>
      {selected && (
        <span className={styles.optionArrow}>
          <Icon type="check" className="h-5 w-5" />
        </span>
      )}
    </li>
  );
};

export default SelectItem;
