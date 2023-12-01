import Link from "next/link";
import Logo from "./Logo";
import { BsArrowRight } from "react-icons/bs";
import { Link as LinkScroll } from "react-scroll";

import styles from "@/sass/layouts/footer.module.scss";
import { firaSans } from "@/utils/fonts";
const Footer = () => {
  return (
    <footer className={`${styles.footer} ${firaSans.className}`}>
      <div className={`${styles.container} ${styles.footer__container}`}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.footer__arrow__box}>
          <LinkScroll
            activeClass="active"
            to="main"
            spy={true}
            smooth={true}
            offset={-120}
            duration={1700}
          >
            <span
              className={`${styles.footer__icon__chip} ${styles.footer__chip}`}
            >
              <BsArrowRight className={styles.footer__icon} />
            </span>
          </LinkScroll>
        </div>
        <div className={styles.footer__box}>
          <Link
            className={`${styles.footer__list__item__link} ${styles.footer__social__chip}`}
            href="https://www.facebook.com/"
            target="_blank"
          >
            <svg className={styles.footer__social} width="24px" height="24px">
              <use href="/symbol-defs.svg#icon-facebook"></use>
            </svg>
          </Link>
          <Link
            className={`${styles.footer__list__item__link} ${styles.footer__social__chip}`}
            target="_blank"
            href="https://www.instagram.com/"
          >
            <svg className={styles.footer__social} width="24px" height="24px">
              <use href="/symbol-defs.svg#icon-instagram"></use>
            </svg>
          </Link>
        </div>
        <div className={styles.footer__link__map__box}>
          <Link
            className={`${styles.footer__link} ${styles.link1}`}
            target="_blank"
            href="https://maps.app.goo.gl/AyT3DNC4Cco23Xoy7"
          >
            79005, Ukraine, Lviv street. Shota Rustaveli, 7
          </Link>
          <Link
            className={`${styles.footer__link} ${styles.link2}`}
            target="_blank"
            href="mailto:office@ecosolution.com"
          >
            office@ecosolution.com
          </Link>
          <Link href="#" className={`${styles.footer__link} ${styles.link3}`}>
            ecosolution &#169; 2023
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
