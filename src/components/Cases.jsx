import { useEffect, useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { HiArrowUpRight } from "react-icons/hi2";

import casesList from "../../casesList.json";

import { oswald } from "@/utils/fonts";
import styles from "@/sass/layouts/cases.module.scss";

const Cases = () => {
  const [dynamicHeight, setDynamicHeight] = useState(168);
  const [dynamicWidth, setDynamicWidth] = useState(1280);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;

      const w0 = 360,
        h0 = 168;
      const w1 = 768,
        h1 = 168;
      const w2 = 1280,
        h2 = 339;

      let calculatedWidth, calculatedHeight;

      if (w <= w0) {
        calculatedWidth = 320;
        calculatedHeight = h0;
      } else if (w <= w1) {
        calculatedWidth = w;
        calculatedHeight = h0 + ((w - w0) * (h1 - h0)) / (w1 - w0);
      } else if (w <= w2) {
        calculatedWidth = w;
        calculatedHeight = h1 + ((w - w1) * (h2 - h1)) / (w2 - w1);
      } else {
        calculatedWidth = w2;
        calculatedHeight = h2;
      }

      setDynamicHeight(calculatedHeight);
      setDynamicWidth(calculatedWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className={styles.section}>
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
              01 <span className={styles.number__chip}>/05</span>
            </p>

            <div>
              <span className={styles.cases__chip}>
                <BsArrowLeft className={styles.cases__arrow} />
              </span>

              <span className={styles.cases__chip}>
                <BsArrowRight className={styles.cases__arrow} />
              </span>
            </div>
          </div>
        </div>
        <div className={styles.cases__list}>
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
            loop={true}
            spaceBetween={10}
            slidesPerView={1}
          >
            {casesList.map((item, index) => (
              <SwiperSlide key={index}>
                <div key={item.id} className={styles.cases__list__item}>
                  <Image
                    className={styles.cases__img}
                    src={item.image.src}
                    alt={item.image.alt}
                    width={dynamicWidth}
                    height={dynamicHeight}
                    priority={item.image.priority}
                  />
                  <div className={styles.cases__list__item__container}>
                    <p className={styles.cases__list__item__title}>
                      {item.title}
                    </p>
                    <span className={styles.cases__list__item__chip}>
                      <HiArrowUpRight
                        className={styles.cases__list__item__icon}
                      />
                    </span>
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Cases;
