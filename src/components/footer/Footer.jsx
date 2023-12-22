import React from "react";
import styles from "./style.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer id="footer">&#169; copyright {currentYear} Laura Tavira.</footer>;
}

export default Footer;
