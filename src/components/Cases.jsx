import Image from "next/image";
import Link from "next/link";
import { useCasesSlider } from "./hooks";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { HiArrowUpRight } from "react-icons/hi2";

import casesList from "../utils/casesList.json";

import { oswald } from "@/utils/fonts";
import styles from "@/sass/layouts/cases.module.scss";

const Cases = () => {
  const { sliderRef, slidesToShow, currentSlide, settings, next, previous } =
    useCasesSlider();

  return (
    <section className={styles.section} id="Cases">
      <div className={styles.container}>
        <div className={styles.cases__container}>
          <h2
            className={`${styles.title} ${oswald.className} ${styles.cases__title}`}
          >
            Successful cases of our company
          </h2>
          <span className={styles.chip}></span>

          <div className={styles.box__chip}>
            <p className={styles.number}>
              {currentSlide + 1}
              <span className={styles.number__chip}>/{casesList.length}</span>
            </p>

            <div>
              <span className={styles.cases__chip} onClick={previous}>
                <BsArrowLeft className={styles.cases__arrow} />
              </span>

              <span className={styles.cases__chip} onClick={next}>
                <BsArrowRight className={styles.cases__arrow} />
              </span>
            </div>
          </div>
        </div>
        <div className={styles.cases__list}>
          <Slider {...settings} ref={sliderRef}>
            {casesList.map((item, index) => (
              <div key={item.id} className={styles.cases__list__item}>
                <Image
                  className={styles.cases__img}
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  priority={item.image.priority}
                />
                <div className={styles.cases__list__container}>
                  <div className={styles.cases__list__item__container}>
                    <p className={styles.cases__list__item__title}>
                      {item.title}
                    </p>
                    <Link
                      target="_blank"
                      href={item.link}
                      className={styles.cases__list__item__chip}
                    >
                      <HiArrowUpRight
                        className={styles.cases__list__item__icon}
                      />
                    </Link>
                  </div>
                  <div className={styles.cases__list__item__box}>
                    <p className={styles.cases__list__item__box__text}>
                      {item.text}
                    </p>
                    <p className={styles.cases__list__item__box__text}>
                      {item.subject}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Cases;
