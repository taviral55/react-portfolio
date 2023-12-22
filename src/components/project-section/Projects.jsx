import React from "react";
import styles from "./style.module.css";
import ProjectCard from "../project-card/ProjectCard";

const projectData = [
  {
    name: "Project 1",
    img: "Project image",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis optio officiis assumenda. Ratione assumenda aperiam, accusantium debitis mollitia earum necessitatibus ipsam temporibus sint nemo 1.",
  },
  {
    name: "Project 2",
    img: "Project image",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis optio officiis assumenda. Ratione assumenda aperiam, accusantium debitis mollitia earum necessitatibus ipsam temporibus sint nemo 2.",
  },
  {
    name: "Project 3",
    img: "Project image",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis optio officiis assumenda. Ratione assumenda aperiam, accusantium debitis mollitia earum necessitatibus ipsam temporibus sint nemo 3.",
  },
];
function Projects() {
  return (
    <div className={styles.projects__container} id="projects">
      <p>Projects</p>
      <div className={styles.projects__wrapper}>
        {projectData.map((project) => (
          <ProjectCard projectData={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
