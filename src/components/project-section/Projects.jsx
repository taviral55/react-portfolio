import React from "react";
import styles from "./style.module.css";
import ProjectCard from "../project-card/ProjectCard";
import img_1 from "../../assets/project-1.jpeg";
import img_2 from "../../assets/project-2.jpeg";
import img_3 from "../../assets/project-3.jpeg";

const projectData = [
  {
    url: "https://taviral55.github.io/weather-dashboard/",
    name: "Weather Dashboard",
    img: img_1,
    description:
      "this app allows you to see the weather for the next five days, for  the location of you specify.",
  },
  {
    url: "https://powerful-lake-11518-7c1ad9391417.herokuapp.com/",
    name: "Note Tracker",
    img: img_2,
    description:
      "this app allows you to save your important information in a secure place where you can easily have access to them.",
  },
  {
    url: "https://taviral55.github.io/code-quiz/",
    name: "Quiz Module",
    img:img_3,
    description:
      "This quiz allows you to see how much you know about stlye.css coding",
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
