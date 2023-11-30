import Link from "next/link";

import styles from "@/sass/layouts/network.module.scss";

const Network = () => {
  return (
    <ul className={styles.network__list}>
      <li className={styles.network__list__item}>
        <p className={styles.network__list__item__title}>Phone:</p>
        <Link
          className={`${styles.network__list__item__link} ${styles.network__tel}`}
          href="tel:+380981234567"
        >
          <svg className={styles.network__social} width="24px" height="24px">
            <use href="/symbol-defs.svg#icon-call"></use>
          </svg>
          38 (098) 12 34 567
        </Link>
        <Link
          className={styles.network__list__item__link}
          href="tel:+380981234567"
        >
          <svg className={styles.network__social} width="24px" height="24px">
            <use href="/symbol-defs.svg#icon-call"></use>
          </svg>
          38 (098) 12 34 567
        </Link>
      </li>

      <li className={styles.network__list__item}>
        <p className={styles.network__list__item__title}>E-mail:</p>
        <Link
          className={styles.network__list__item__link}
          target="_blank"
          href="mailto:office@ecosolution.com"
        >
          <svg className={styles.network__social} width="24px" height="24px">
            <use href="/symbol-defs.svg#icon-sms"></use>
          </svg>
          office@ecosolution.com
        </Link>
      </li>
      <li className={styles.network__list__item}>
        <p className={styles.network__list__item__title}>Address:</p>
        <Link
          className={styles.network__list__item__link}
          target="_blank"
          href="https://maps.app.goo.gl/AyT3DNC4Cco23Xoy7"
        >
          <svg className={styles.network__social} width="24px" height="24px">
            <use href="/symbol-defs.svg#icon-map"></use>
          </svg>
          79005, Ukraine, Lviv street. Shota Rustaveli, 7
        </Link>
      </li>
      <li className={`${styles.network__list__item} `}>
        <p
          className={`${styles.network__list__item__title} ${styles.network__title__social}`}
        >
          Social Networks:
        </p>
        <div className={` ${styles.network__social__box}`}>
          <Link
            className={`${styles.network__list__item__link} ${styles.network__social__chip}`}
            href="https://www.facebook.com/"
            target="_blank"
          >
            <svg className={styles.network__social} width="24px" height="24px">
              <use href="/symbol-defs.svg#icon-facebook"></use>
            </svg>
          </Link>
          <Link
            className={`${styles.network__list__item__link} ${styles.network__social__chip}`}
            target="_blank"
            href="https://www.instagram.com/"
          >
            <svg className={styles.network__social} width="24px" height="24px">
              <use href="/symbol-defs.svg#icon-instagram"></use>
            </svg>
          </Link>
        </div>
      </li>
    </ul>
  );
};
export default Network;
