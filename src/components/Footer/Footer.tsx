import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        className={styles.link}
        href="https://prometheus.org.ua/"
        target="_blank"
        rel="noreferrer">
        Виконано в Prometheus © 2023
      </a>
    </footer>
  );
};

export default Footer;
