import React from "react";
import styles from "./style.module.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      <ul className={styles.nav__list}>
        <li>
          <a href="#home"> Home</a>
        </li>
        <li>
          {" "}
          <a href="#projects">My projects</a>
        </li>
        <li>
          {" "}
          <a href="#contact">Contact me</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
