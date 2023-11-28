import Logo from "./Logo";
import styles from "@/sass/layouts/header.module.scss";
import Burger from "./Burger";

const Header = () => {
  return (
    <header className={`${styles.header} `}>
      <div className={`${styles.container} ${styles.container__header} `}>
        <Logo />
        <div className={styles.header__btn}>
          <Burger />
          <button className={styles.header__touch}>
            Get in touch
            <svg
              className={styles.header__touch__chip}
              width="14px"
              height="14px"
            >
              <use href="/symbol-defs.svg#icon-arrow"></use>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
