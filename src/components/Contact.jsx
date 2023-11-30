import styles from "@/sass/layouts/contact.module.scss";
import { oswald } from "@/utils/fonts";
const Contact = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} ${styles.electricity__container}`}>
        <h2
          className={`${styles.title} ${oswald.className} ${styles.title__center}`}
        >
          Contact us
        </h2>
      </div>
    </section>
  );
};
export default Contact;
