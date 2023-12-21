"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../../shared/Button/Button";
import styles from "./ContactSection.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactSection = () => {
  const [count, setCount] = useState(35000);
  const totalTime = 20 * 1000; // total time in milliseconds
  const startCount = 35000;

  useEffect(() => {
    const decrementAmount = startCount / ((totalTime / 1000) * 60); // 60 frames per second

    const interval = setInterval(() => {
      setCount((prevCount) => Math.max(prevCount - decrementAmount, 0));
    }, 1000 / 60); // 60 frames per second for a smoother countdown

    if (count <= 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [count, totalTime]);

  // Helper function to format the count with a period as the thousands separator
  const formatCount = (number: any) => {
    const numberStr = Math.floor(number).toString();
    return numberStr.length > 3
      ? numberStr.slice(0, numberStr.length - 3) +
          "." +
          numberStr.slice(numberStr.length - 3)
      : numberStr;
  };

  return (
    <section id="contact" className={styles.contactBox}>
      <div className={styles.contactWrapper}>
        <div className={styles.contactTextWrapper}>
          <p className={styles.contactCounter}>
            <span className={styles.contactCounter_number}>
              {formatCount(count)}
            </span>
            <span>+ Already joined</span>
          </p>
          <h2 className={styles.contactHeader}>
            Stay up-to-date with what we&apos;re doing
          </h2>
        </div>
        <div className={styles.contactFormWrapper}>
          <div className={styles.contactFormInputBox}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Whoops, make sure it's an email")
        .required("Email is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      // You can send values to the server here
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.contactForm}>
      <div className={styles.contactFormInputBox}>
        <input
          id="email"
          type="email"
          placeholder="Enter your email address"
          className={`${styles.contactFormInput} ${
            formik.touched.email && formik.errors.email
              ? styles.contactFormInput_error
              : ""
          }`}
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <Image
            src="/assets/icon-error.svg"
            alt="error icon"
            width={20}
            height={20}
            className={styles.contactFormInputErrorIcon}
          />
        ) : null}
        {formik.touched.email && formik.errors.email ? (
          <div className={styles.contactFormError}>{formik.errors.email}</div>
        ) : null}
      </div>
      <div className={styles.contactFormButtonBox}>
        <Button
          type="submit"
          buttonText="Contact Us"
          variant="secondaryButton"
          fullWidth
        />
      </div>
    </form>
  );
};

export default ContactSection;
