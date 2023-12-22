import React from "react";
import styles from "./style.module.css";
import heroImg from "../../assets/hero.jpg";

function Hero() {
  return (
    <div className={styles.hero__container}>
      <div className={styles.hero__content}>
        <h2>Laura Tavira</h2>
        <h1>
        Hi I'm Laura Tavira <br />
marketing PC
        </h1>
      </div>
      <img src={heroImg} alt="Hero section image"  className={styles.hero__image}/>
    </div>
  );
}

export default Hero;
