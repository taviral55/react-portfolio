import React from "react";
import styles from "./style.module.css";

function ProjectCard({ projectData }) {
  return (
    <a href={projectData.url} target="_blank" className={styles.project__card}>
      <img src={projectData.img} alt="project image" />
      <h2 className={styles.project__name}>{projectData.name}</h2>
      <p className={styles.project__description}>{projectData.description}</p>
    </a>
  );
}

export default ProjectCard;
