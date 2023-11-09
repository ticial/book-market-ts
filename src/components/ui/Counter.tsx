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
    return (
        <div className="counter overflow-hidden rounded-lg flex h-8 font-semibold border border-gray-300 w-fit">
            <button
                onClick={() => setAmountChecked(value - 1)}
                className="w-10 bg-slate-500 text-white hover:bg-slate-500/80 active:bg-slate-400 transition-colors">
                -
            </button>
            <input
                type="number"
                className="outline-none focus:outline-none text-center w-16 bg-white font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700"
                name="custom-input-number"
                onChange={(e) => setAmountChecked(Number(e.target.value))}
                value={value}
            />
            <button
                onClick={() => setAmountChecked(value + 1)}
                className="w-10 bg-slate-500 text-white hover:bg-slate-400/80 active:bg-slate-400 transition-colors">
                +
            </button>
        </div>
    );
};

export default Counter;
