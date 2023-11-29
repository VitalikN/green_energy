import styles from "@/sass/layouts/electricity.module.scss";
import { oswald } from "@/utils/fonts";
import { useEffect, useState } from "react";

const Electricity = () => {
  const [count, setCount] = useState(1134147814);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <section className={styles.section}>
      <div className={`${styles.container} ${styles.electricity__container}`}>
        <h2
          className={`${styles.title} ${oswald.className} ${styles.title__center}`}
        >
          Electricity we produced for all time
        </h2>

        <span className={styles.electricity__chip}></span>
        <p
          className={`${styles.electricity__text} ${oswald.className} ${styles.text__center}`}
        >
          {count.toLocaleString().replace(/,/g, ".")}
          <span className={styles.electricity__chip__kWh}>kWh</span>
        </p>
      </div>
    </section>
  );
};
export default Electricity;
