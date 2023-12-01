import { oswald } from "@/utils/fonts";
import styles from "@/sass/layouts/mainCompany.module.scss";
import Image from "next/image";

const MainCompany = () => {
  return (
    <section className={styles.section} id="About">
      <div className={styles.container} id="main">
        <div className={styles.mainCompany__container__title}>
          <h2
            className={`${styles.title} ${oswald.className} ${styles.mainCompany__title}`}
          >
            Main values of our company
          </h2>
          <span className={styles.chip}></span>
          <p className={styles.mainCompany__text}>
            EcoSolution envisions a world where sustainable energy solutions
            power a brighter and cleaner future for all. We aspire to be at the
            forefront of the global shift towards renewable energy, leading the
            way in innovative technologies that harness the power of nature to
            meet the world`s energy needs.
          </p>
        </div>
        <ul className={styles.mainCompany__list}>
          <li className={`${styles.mainCompany__list__item} ${styles.item1}`}>
            <div className={styles.mainCompany__list__item__box}>
              <svg
                className={styles.mainCompany__svg}
                width="16px"
                height="16px"
              >
                <use href="/symbol-defs.svg#icon-maximize-circle"></use>
              </svg>
              <h3
                className={`${styles.mainCompany__list__item__title} ${oswald.className}`}
              >
                Openness
              </h3>
            </div>
            <p className={styles.mainCompany__list__item__text}>
              to the world, people, new ideas and projects
            </p>
          </li>
          <li className={`${styles.mainCompany__list__item} ${styles.item2}`}>
            <div className={styles.mainCompany__list__item__box}>
              <svg
                className={styles.mainCompany__svg}
                width="16px"
                height="16px"
              >
                <use href="/symbol-defs.svg#icon-global-edit"></use>
              </svg>
              <h3
                className={`${styles.mainCompany__list__item__title} ${oswald.className}`}
              >
                Responsibility
              </h3>
            </div>
            <p className={styles.mainCompany__list__item__text}>
              we are aware that the results of our work have an impact on our
              lives and the lives of future generations
            </p>
          </li>
          <li className={`${styles.mainCompany__item} ${styles.item3}`}>
            <Image
              className={styles.mainCompany__img}
              src="/wind-farms.png"
              alt="vnv"
              width="346"
              height="234"
              priority={true}
            />
          </li>
          <li className={`${styles.mainCompany__item} ${styles.item4}`}>
            <Image
              className={styles.mainCompany__img}
              src="/man-worker.png"
              alt="vnv"
              width="346"
              height="234"
              priority={true}
            />
          </li>
          <li className={`${styles.mainCompany__list__item} ${styles.item5}`}>
            <div className={styles.mainCompany__list__item__box}>
              <svg
                className={styles.mainCompany__svg}
                width="16px"
                height="16px"
              >
                <use href="/symbol-defs.svg#icon-cpu-charge"></use>
              </svg>
              <h3
                className={`${styles.mainCompany__list__item__title} ${oswald.className}`}
              >
                Innovation
              </h3>
            </div>
            <p className={styles.mainCompany__list__item__text}>
              we use the latest technology to implement non-standard solutions
            </p>
          </li>
          <li className={`${styles.mainCompany__list__item} ${styles.item6}`}>
            <div className={styles.mainCompany__list__item__box}>
              <svg
                className={styles.mainCompany__svg}
                width="16px"
                height="16px"
              >
                <use href="/symbol-defs.svg#icon-ranking"></use>
              </svg>
              <h3
                className={`${styles.mainCompany__list__item__title} ${oswald.className}`}
              >
                Quality
              </h3>
            </div>
            <p className={styles.mainCompany__list__item__text}>
              we do not strive to be the first among others, but we want to be
              the best in our business
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default MainCompany;
