import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Panel = ({ children, className = "" }: Props) => {
  return (
    <div
      className={
        "flex w-fit flex-col rounded-lg border border-gray-300 bg-white/50 shadow-lg" +
        " " +
        className
      }>
      {children}
    </div>
  );
};

export default Panel;
