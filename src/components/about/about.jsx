import React from "react";
import styles from "./style.module.css";
import heroImg from "../../assets/gallery-5.png";

function About() {
  return (
    <div className={styles.hero__container}>
        <img src={heroImg} alt="Hero section image"  className={styles.hero__image}/>
      <div className={styles.hero__content}>
        <p>
        about me "Web Development Expertise:
                        As a seasoned web developer, I am learning in creating dynamic and responsive websites. 
                        My learning modules encompasses a range of technologies including HTML, CSS, JavaScript, and PHP.
                        I am working hard on becoming proficient in working with various content management systems (CMS) 
                        like WordPress, Joomla, and Drupal, ensuring that the websites I develop are not only 
                        aesthetically pleasing but also user-friendly and SEO-optimized. 
                        My focus is on developing custom solutions tailored to meet the unique needs of each client, 
                        whether it's an e-commerce platform, an interactive portfolio, or a feature-rich corporate website."
        </p>
      </div>
    </div>
  );
}

export default About;
