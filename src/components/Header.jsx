import Logo from "./Logo";
import styles from "@/sass/layouts/header.module.scss";
import Burger from "./Burger";
import { Button } from "./Button";

import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";

const Header = () => {
  return (
    <header className={`${styles.header} `}>
      <div className={`${styles.container} ${styles.container__header} `}>
        <Logo />
        <div className={styles.header__btn}>
          <Burger />
          <div className={styles.header__display}>
            <LinkScroll
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={-30}
              duration={1700}
              className={styles.menu__link}
            >
              <Button title={"Get in touch"} />
            </LinkScroll>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
