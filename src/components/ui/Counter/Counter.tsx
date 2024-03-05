import { clamp, formatNumber } from "utils/numberUtils";
import CounterButton from "./CounterButton";
import styles from "./Counter.module.css";
import useOutsideClick from "hooks/useOutsideClick";

type Props = {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
};

const Counter = ({ min, max, value, onChange }: Props) => {
  const ref = useOutsideClick<HTMLInputElement>((ref) => {
    onChange(clamp(Number(ref.current?.value || value), min, max));
  });

  const setAmountChecked = (newValue: number) => () => {
    if (newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange(Number(e.target.value));

  return (
    <div ref={ref} className={styles.counter}>
      <CounterButton
        disabled={min >= value}
        text="-"
        onClick={setAmountChecked(value - 1)}
      />
      <input
        type="number"
        className={styles.input}
        data-testid="counter-input"
        name="counter-input"
        onChange={handleInput}
        value={formatNumber(value)}
      />
      <CounterButton
        disabled={max <= value}
        text="+"
        onClick={setAmountChecked(value + 1)}
      />
    </div>
  );
};

export default Counter;
