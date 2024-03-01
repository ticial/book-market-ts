import { clamp, formatNumber } from "utils/numberUtils";
import CounterButton from "./CounterButton";
import styles from "./Counter.module.css";

type Props = {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
};

const Counter = ({ min, max, value, onChange }: Props) => {
  const setAmountChecked = (newValue: number) => {
    if (newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };
  const blurHandle = () => {
    onChange(clamp(value, min, max));
  };

  return (
    <div className={styles.counter}>
      <CounterButton
        disabled={min >= value}
        text="-"
        onClick={() => setAmountChecked(value - 1)}
      />
      <input
        type="number"
        className={styles.input}
        data-testid="counter-input"
        name="counter-input"
        onChange={(e) => onChange(Number(e.target.value))}
        value={formatNumber(value)}
        onBlur={blurHandle}
      />
      <CounterButton
        disabled={max <= value}
        text="+"
        onClick={() => setAmountChecked(value + 1)}
      />
    </div>
  );
};

export default Counter;
