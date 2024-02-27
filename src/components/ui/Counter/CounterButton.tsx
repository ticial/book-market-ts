type Props = {
  text: string;
  disabled: boolean;
  onClick: () => void;
};

const CounterButton = ({ text, disabled, onClick }: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="min-w-fit w-8 bg-slate-500 text-white hover:bg-slate-500/80 disabled:bg-gray-300 active:bg-slate-400 transition-colors">
      {text}
    </button>
  );
};

export default CounterButton;
