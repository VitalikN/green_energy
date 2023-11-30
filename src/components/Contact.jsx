import { oswald } from "@/utils/fonts";
import Network from "./Network";
import styles from "@/sass/layouts/contact.module.scss";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} ${styles.contact__container}`}>
        <h2
          className={`${styles.title} ${oswald.className} ${styles.title__center} ${styles.contact__title}`}
        >
          Contact us
        </h2>
        <div className={styles.contact__box}>
          <Network />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
export default Contact;
