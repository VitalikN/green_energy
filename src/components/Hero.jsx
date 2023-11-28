import Link from "next/link";

import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

import { oswald, firaSans } from "@/utils/fonts";
import styles from "@/sass/layouts/hero.module.scss";

const Hero = () => {
  const [dynamicHeight, setDynamicHeight] = useState(200);

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = Math.min(window.innerWidth, 1280);

      const w1 = 360,
        h1 = 200;
      const w2 = 768,
        h2 = 348;
      const w3 = 1280,
        h3 = 524;

      let calculatedHeight;

      if (viewportWidth <= w1) {
        calculatedHeight = h1;
      } else if (viewportWidth <= w2) {
        calculatedHeight = h1 + ((viewportWidth - w1) * (h2 - h1)) / (w2 - w1);
      } else if (viewportWidth <= w3) {
        calculatedHeight = h2 + ((viewportWidth - w2) * (h3 - h2)) / (w3 - w2);
      } else {
        calculatedHeight = h3;
      }
      setDynamicHeight(calculatedHeight);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.hero__container__title}>
          <h1 className={`${styles.hero__title} ${oswald.className}    `}>
            renewable energy for any task
          </h1>
          <div>
            <p className={`${styles.hero__text}  ${firaSans.className} `}>
              Development and implementation of renewable non-polluting energy
              sources, generating power generation using energy wind, sun,
              water, biomass
            </p>
            <button className={styles.hero__btn}>
              Learn more
              <span className={styles.hero__icon}>
                <BsArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div className={styles.hero__box__link}>
          <Link
            className={styles.hero__link}
            target="_blank"
            href="https://maps.app.goo.gl/AyT3DNC4Cco23Xoy7"
          >
            79005, Ukraine, Lviv street. Shota Rustaveli, 7
          </Link>
          <div className={styles.hero__box}>
            <Link
              className={styles.hero__link}
              target="_blank"
              href="mailto:office@ecosolution.com"
            >
              office@ecosolution.com
            </Link>
            <Link
              href="#"
              className={`${styles.hero__link} ${styles.ecosolution}`}
            >
              ecosolution &#169; 2023
            </Link>
          </div>
        </div>

        <div
          className={styles.hero__overley}
          style={{ height: `${dynamicHeight}px` }}
        ></div>
      </div>
    </section>
  );
};
export default Hero;
