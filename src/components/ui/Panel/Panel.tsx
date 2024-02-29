import React from "react";
import { cn } from "utils/cn";
import styles from "./Panel.module.css";

type Props = {
  direction?: "row" | "col";
  children: React.ReactNode;
  className?: string;
};

const Panel = ({ direction = "col", children, className }: Props) => {
  return (
    <div className={cn(styles.panel, `flex-${direction}`, className)}>
      {children}
    </div>
  );
};

export default Panel;
