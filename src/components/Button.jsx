import styles from "@/sass/layouts/button.module.scss";

const Button = ({ title }) => (
  <button className={styles.header__touch}>
    {title}
    <svg className={styles.header__touch__chip} width="14px" height="14px">
      <use href="/symbol-defs.svg#icon-arrow"></use>
    </svg>
  </button>
);

export default Button;
