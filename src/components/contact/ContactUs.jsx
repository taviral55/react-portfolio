import React from "react";
import styles from "./style.module.css";
import contactImg from "../../assets/contact2.jpg";
import CustomInput from "../input/CustomInput";

function ContactUs() {
  return (
    <div className={styles.contact__container} id="contact">
      <div>
        <p className={styles.text}>Get in touch with us</p>
        <form className={styles.form}>
          <div className={styles.flex}>
            <CustomInput type={"text"} placeholder={"First name"} />
            <CustomInput type={"text"} placeholder={"Last name"} />
          </div>
          <CustomInput placeholder={"Email"} type={"email"} />
          <textarea
            className={styles.textarea}
            cols="30"
            rows="10"
            placeholder="Description"
          ></textarea>
          <button className={styles.btn}>Submit</button>
        </form>
      </div>
      {/* image */}
      <img src={contactImg} alt="contact image" className={styles.contact__image} />
    </div>
  );
}

export default ContactUs;
