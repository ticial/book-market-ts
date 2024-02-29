import Button from "../Button/Button";
import styles from "./CartButton.module.css";

type Props = { count: number; onClick: () => void };

const CartButton = ({ count, onClick }: Props) => {
  return (
    <Button
      styleType="icon"
      rounded="full"
      color="grey"
      icon="cart"
      onClick={onClick}
      className="relative">
      {count > 0 && <p className={styles.badge}>{count}</p>}
    </Button>
  );
};

export default CartButton;
