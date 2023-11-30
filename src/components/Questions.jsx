import styles from "@/sass/layouts/questions.module.scss";
import { oswald } from "@/utils/fonts";
import { useState } from "react";

import questionsData from "../../questionsData.json";

import { HiMinusSm, HiOutlinePlusSm } from "react-icons/hi";
import Button from "./Button";

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section className={styles.section}>
      <div className={`${styles.container} ${styles.questions__container}`}>
        <h2
          className={`${styles.title} ${oswald.className} ${styles.questions__title}`}
        >
          Frequently Asked Questions
        </h2>
        <ul className={styles.questions__list}>
          {questionsData.map((item, index) => (
            <li key={index} className={styles.questions__list__item}>
              <div
                className={styles.questions__list__item__icons}
                onClick={() => toggleAnswer(index)}
              >
                {activeIndex === index ? (
                  <HiMinusSm
                    className={`${styles.questions__list__item__icon} ${styles.questions__minus}`}
                  />
                ) : (
                  <HiOutlinePlusSm
                    className={styles.questions__list__item__icon}
                  />
                )}
              </div>
              <p className={styles.questions__list__item__title}>
                {item.question}
              </p>
              {activeIndex === index && (
                <p className={styles.questions__list__item__text}>
                  {item.answer}
                </p>
              )}
            </li>
          ))}
        </ul>
        <div className={styles.questions__btn}>
          <p
            className={`${styles.questions__list__item__title} ${styles.questions__answer}`}
          >
            Didn`t find the answer to your question?
          </p>
          <Button title={"Contact Us"} />
        </div>
      </div>
    </section>
  );
};

export default Questions;
