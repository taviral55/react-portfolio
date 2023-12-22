import React from "react";
import styles from "./style.module.css";

function CustomInput({ type, placeholder }) {
  return <input type={type} placeholder={placeholder} className={styles.custom__input} />;
}

export default CustomInput;
