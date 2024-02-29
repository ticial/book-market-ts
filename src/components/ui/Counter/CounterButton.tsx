import Button from "../Button/Button";
import styles from "./Counter.module.css";

type Props = {
  text: string;
  disabled: boolean;
  onClick: () => void;
};

const CounterButton = ({ text, disabled, onClick }: Props) => {
  return (
    <Button
      disabled={disabled}
      size={9}
      rounded="none"
      onClick={onClick}
      className="w-9">
      {text}
    </Button>
  );
};

export default CounterButton;
