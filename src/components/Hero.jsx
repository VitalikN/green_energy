import Link from "next/link";

import { oswald, firaSans } from "@/utils/fonts";
import styles from "@/sass/layouts/hero.module.scss";
import { ButtonLearn } from "./Button";
import { Link as LinkScroll } from "react-scroll";
import { useDynamicHeight } from "./hooks";

const Hero = () => {
  const dynamicHeight = useDynamicHeight();

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.hero__container__title}>
          <h1 className={`${styles.hero__title} ${oswald.className}    `}>
            renewable energy for any task
          </h1>
          <div className={styles.hero__box__text}>
            <p className={`${styles.hero__text}  ${firaSans.className} `}>
              Development and implementation of renewable non-polluting energy
              sources, generating power generation using energy wind, sun,
              water, biomass
            </p>
            <LinkScroll
              activeClass="active"
              to="Cases"
              spy={true}
              smooth={true}
              offset={-90}
              duration={1400}
              className={styles.menu__link}
            >
              <ButtonLearn title={"Learn more"} />
            </LinkScroll>
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
