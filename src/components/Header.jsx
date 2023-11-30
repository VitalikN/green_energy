import Logo from "./Logo";
import styles from "@/sass/layouts/header.module.scss";
import Burger from "./Burger";
import Button from "./Button";

const Header = () => {
  return (
    <header className={`${styles.header} `}>
      <div className={`${styles.container} ${styles.container__header} `}>
        <Logo />
        <div className={styles.header__btn}>
          <Burger />
          <div className={styles.header__display}>
            <Button title={"Get in touch"} />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
