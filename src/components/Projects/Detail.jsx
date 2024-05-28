import React, { useRef, useLayoutEffect } from "react";
import styles from "./style.module.scss";
import SkillsIcon from "@/assets/icons/skills.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaGlobe } from "react-icons/fa";  // Import GitHub and Globe icons from react-icons

gsap.registerPlugin(ScrollTrigger);

function IconRow(props) {
  return (
    <div className={styles.iconRow}>
      {props.list.map((iconName, index) => (
        <div key={index} className={styles.icon}>
          {SkillsIcon[iconName] && SkillsIcon[iconName]()}
        </div>
      ))}
    </div>
  );
}

export default function Detail(props) {
  const det = useRef();

  useLayoutEffect(() => {
    gsap.set(det.current.children, { opacity: 0, y: 40 });

    var tl = gsap.timeline();
    tl.to(det.current.children, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    ScrollTrigger.create({
      trigger: det.current,
      start: "top 60%",
      end: "top top",
      duration: 1,
      animation: tl,
      scrub: true,
    });
  }, []);

  const openLiveProject = () => {
    window.open(props.data.liveLink, "_blank");
  };

  const openGitHubProject = () => {
    window.open(props.data.githubLink, "_blank");
  };

  return (
    <div ref={det} className={styles.details}>
      <div className={styles.year}>[{props.data.year}]</div>
      <div className={styles.headline} data-anm-text>
        {props.data.title}
      </div>
      <div className={styles.text}>{props.data.description}</div>
      <ul>
        {props.data.tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <IconRow list={props.data.skills} />

      <div className={styles.buttons}>
        <button className={styles.liveButton} onClick={openLiveProject}>
          <FaGlobe className={styles.icon} /> Live
        </button>
        <button className={styles.githubButton} onClick={openGitHubProject}>
          <FaGithub className={styles.icon} /> GitHub
        </button>
      </div>
    </div>
  );
}
