import { useEffect, useRef } from "react";
import styles from "./GradientBg.module.css";

const GradientBg = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (element && element.parentElement) {
      element.style.height = element.parentElement.style.height;
    }
  }, [ref]);

  return (
    <div className={styles.bg} ref={ref}>
      <div className={styles.gradient}></div>
    </div>
  );
};

export default GradientBg;
