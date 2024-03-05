import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./CartButton.module.css";

type Props = { count: number };

const CartButton = ({ count }: Props) => {
  return (
    <Link to="/cart">
      <Button
        styleType="icon"
        rounded="full"
        color="grey"
        icon="cart"
        className="relative">
        {count > 0 && <p className={styles.badge}>{count}</p>}
      </Button>
    </Link>
  );
};

export default CartButton;
