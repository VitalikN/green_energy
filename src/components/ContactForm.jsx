import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

import { ButtonLearn } from "./Button";
import { validationSchema } from "@/validationSchema";

import styles from "@/sass/layouts/contactForm.module.scss";

const ContactForm = () => {
  const ErrorFeedback = ({ name }) => {
    return (
      <ErrorMessage name={name}>
        {(errorMessage) => <span className={styles.error}>{errorMessage}</span>}
      </ErrorMessage>
    );
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", tel: "", message: "" }}
      onSubmit={(values, { resetForm }) => {
        alert(JSON.stringify(values, null, 2));
        resetForm();
      }}
      validationSchema={validationSchema}
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <div className={styles.form__box}>
            <label className={styles.label} htmlFor="name">
              * Full name:
            </label>

            <Field
              placeholder="John Rosie"
              id="name"
              className={`${styles.input} ${
                errors.name && touched.name ? styles.errorBorder : "none"
              }`}
              type="text"
              name="name"
              error={touched.name && errors.name}
            />
            <ErrorFeedback name="name" />
          </div>
          <div className={styles.form__box}>
            <label className={styles.label} htmlFor="email">
              * E-mail:
            </label>

            <Field
              placeholder="johnrosie@gmail.com"
              id="email"
              className={`${styles.input} ${
                errors.email && touched.email ? styles.errorBorder : "none"
              }`}
              type="email"
              name="email"
              error={touched.email && errors.email}
            />

            <ErrorFeedback name="email" />
          </div>
          <div className={styles.form__box}>
            <label className={styles.label} htmlFor="tel">
              * Phone:
            </label>

            <Field
              placeholder="+380961234567"
              id="tel"
              className={`${styles.input} ${
                errors.tel && touched.tel ? styles.errorBorder : "none"
              }`}
              type="tel"
              name="tel"
              error={touched.tel && errors.tel}
            />

            <ErrorFeedback name="tel" />
          </div>

          <div className={`${styles.form__box}  ${styles.form__box__textarea}`}>
            <label className={styles.label} htmlFor="text">
              Message:
            </label>

            <Field
              className={`${styles.input} ${styles.textarea} ${
                errors.message && touched.message ? styles.errorBorder : "none"
              }`}
              placeholder="Your message"
              id="text"
              as="textarea"
              name="message"
              error={touched.message && errors.message}
            />

            <ErrorFeedback name="message" />
          </div>

          <div className={styles.btn__box}>
            <ButtonLearn title={"Send"} type={"submit"} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
