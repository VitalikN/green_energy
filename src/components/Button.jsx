import styles from "@/sass/layouts/button.module.scss";
import { BsArrowRight } from "react-icons/bs";

export const Button = ({ title }) => (
  <button className={styles.header__touch}>
    {title}
    <svg className={styles.header__touch__chip} width="14px" height="14px">
      <use href="/symbol-defs.svg#icon-arrow"></use>
    </svg>
  </button>
);

export const ButtonLearn = ({ title, type = "button" }) => (
  <button
    type={type}
    className={`${styles.hero__btn} ${
      title === "Send" ? styles.sendBtn : styles.learn
    }`}
  >
    {title}
    <span className={styles.hero__icon}>
      <BsArrowRight />
    </span>
  </button>
);
