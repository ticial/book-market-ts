import { cn } from "utils/cn";
import styles from "./Button.module.css";
import Icon, { IconType } from "../Icon/Icon";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: "text" | "icon" | "circle";
  color?: "greyFilled" | "grey" | "red" | "green";
  rounded?: "none" | "lg" | "full";
  size?: number;
  icon?: IconType;
  className?: string;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  styleType = "text",
  color = "greyFilled",
  className,
  rounded = "lg",
  size = 10,
  children,
  icon,
  onClick,
  ...rest
}: Props) => {
  return (
    <button
      {...rest}
      className={cn(
        className,
        styles[styleType],
        styles[color],
        `rounded-${rounded}`,
        `h-${size}`
      )}
      onClick={onClick}>
      {icon && <Icon type={icon} />}
      {children}
    </button>
  );
};

export default Button;
