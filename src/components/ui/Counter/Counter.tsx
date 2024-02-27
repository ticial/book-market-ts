import { clamp, formatNumber } from "utils/numberUtils";
import CounterButton from "./CounterButton";

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
    <div className="counter overflow-hidden rounded-lg flex h-8 font-semibold ring-1 ring-gray-300 w-fit">
      <CounterButton
        disabled={min >= value}
        text="-"
        onClick={() => setAmountChecked(value - 1)}
      />
      <input
        type="number"
        className="outline-none focus:outline-none text-center w-12 bg-white font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700"
        name="custom-input-number"
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
