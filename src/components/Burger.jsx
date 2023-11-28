import { useEffect, useState } from "react";

import styles from "@/sass/layouts/burger.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosClose } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";

const Burger = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }

    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    console.log("click");
  };
  return (
    <>
      <div className={styles.burger__box}>
        <div
          className={styles.burger}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <button className={styles.burger__button}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </button>
        </div>
        {menuOpen && (
          <div className={styles.menu}>
            <div className={styles.menu__box__icon} onClick={closeMenu}>
              <IoIosClose className={styles.menu__icon} />
              close
            </div>

            <nav className={styles.menu__list}>
              <Link
                href="#main"
                className={`${styles.menu__link} ${
                  pathname === "#main" ? styles.active : ""
                }`}
              >
                Main
                <GoArrowUpRight className={styles.menu__link__icon} />
              </Link>

              <Link className={styles.menu__link} href="#">
                About
                <GoArrowUpRight className={styles.menu__link__icon} />
              </Link>

              <Link className={styles.menu__link} href="#">
                Cases
                <GoArrowUpRight className={styles.menu__link__icon} />
              </Link>

              <Link className={styles.menu__link} href="#">
                FAQ
                <GoArrowUpRight className={styles.menu__link__icon} />
              </Link>

              <Link className={styles.menu__link} href="#">
                Contact Us
                <GoArrowUpRight className={styles.menu__link__icon} />
              </Link>
            </nav>
            <ul className={styles.menu__list__social__networks}>
              <li className={styles.menu__item}>
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  className={styles.menu__social__networks}
                >
                  <svg
                    className={styles.menu__social}
                    width="24px"
                    height="24px"
                  >
                    <use href="/symbol-defs.svg#icon-facebook"></use>
                  </svg>
                </Link>
              </li>
              <li className={styles.menu__item}>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/"
                  className={styles.menu__social__networks}
                >
                  <svg
                    className={styles.menu__social}
                    width="24px"
                    height="24px"
                  >
                    <use href="/symbol-defs.svg#icon-instagram"></use>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      {menuOpen && <div className={styles.overley} onClick={closeMenu}></div>}
    </>
  );
};
export default Burger;
