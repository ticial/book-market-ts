type Props = {
  valuesArray: string[];
  handleClick: (value: string) => void;
};

const LinksArray = ({ valuesArray, handleClick }: Props) => {
  return (
    <>
      {valuesArray.map((value, i, array) => (
        <button key={value} onClick={() => handleClick(value)}>
          <span className="link">{value}</span>
          {i + 1 < array.length && <span>,&nbsp;</span>}
        </button>
      ))}
    </>
  );
};

export default LinksArray;
