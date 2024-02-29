import { PropsWithChildren, useState } from "react";
import useOutsideClick from "hooks/useOutsideClick";
import Button from "../Button/Button";
import styles from "./MobileMenu.module.css";

const MobileMenu = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false);
  const menu = useOutsideClick<HTMLDivElement>(() => setOpen(false));
  return (
    <div ref={menu} className="relative md:hidden">
      <Button
        onClick={() => setOpen(!open)}
        styleType={"icon"}
        icon="menu"
        color="grey"
      />
      {open && <div className={styles.menu}>{children}</div>}
    </div>
  );
};

export default MobileMenu;
