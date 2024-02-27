import Icon from "components/svg/Icon";

type Props = { onClick: () => void };

const RemoveButton = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-10 h-10 m-1 relative border-red-700 border rounded-lg text-red-700 hover:bg-red-700/80 active:bg-red-600 hover:text-white  transition-colors">
      <Icon type="delete" className="w-6 h-6" />
    </button>
  );
};

export default RemoveButton;
