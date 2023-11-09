import React from "react";

type Props = {
    valuesArray: string[];
    handleClick: (value: string) => void;
};

const ButtonsArray = ({ valuesArray, handleClick }: Props) => {
    return (
        <>
            {valuesArray.map((value, i, array) => (
                <button key={value} onClick={(e) => handleClick(value)}>
                    {value}
                    {i + 1 < array.length && <span>,&nbsp;</span>}
                </button>
            ))}
        </>
    );
};

export default ButtonsArray;
