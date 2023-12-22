import React from "react";
import styles from "./style.module.css";
import img from "../../assets/project_img.png";

function ProjectCard({ projectData }) {
  return (
    <a href="https://www.google.com" target="_blank" className={styles.project__card}>
      <img src={img} alt="project image" />
      <h2 className={styles.project__name}>{projectData.name}</h2>
      <p className={styles.project__description}>{projectData.description}</p>
    </a>
  );
}

export default ProjectCard;
project - 2