import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import styles from "@/sass/layouts/contactForm.module.scss";
import { ButtonLearn } from "./Button";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Minimum length is 2 characters")
    .matches(/^[A-Za-z\s]+$/, "Wrong Fullname")
    .required("Please fill in"),
  email: Yup.string()
    .email("Wrong Email")
    .matches(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/, "Wrong Email")
    .required("Please fill in"),

  tel: Yup.string()
    .required("Enter a phone number")
    .matches(/^(\+380|0)[3-9][0-9]\d{7}$/, "Wrong Phone"),
  message: Yup.string(),
});

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
