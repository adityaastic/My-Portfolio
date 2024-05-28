"use client";
import { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Degree(props) {
  return (
    <div className={styles.Degree}>
      <div className={styles.year}>[{props.data.year}]</div>
      <div className={styles.title}>{props.data.title}</div>
      <div className={styles.desc}>&#x2022; {props.data.description}</div>
      <div className={styles.inst}>
        {props.data.institue} <br /> <span>{props.data.loc}</span>
      </div>
    </div>
  );
}

export default function Education(props) {
  const cont = useRef();
  const wrap = useRef();

  const Degrees = [
    {
      title: "Bachelours",
      description: "Bachelor of Science in Mathematics.",
      year: "2019 - 2023",
      institue: "DDU University",
      loc: "Gorakhpur",
    },
    {
      title: "Diploma in Pharmacy",
      description: "Pharmacy",
      year: "2019 - 2021",
      institue: "KIIMS",
      loc: "Dehradun",
    },
    {
      title: "Intermediate",
      description: "PCM",
      year: "2017 - 2019",
      institue: "P.G.S.School",
      loc: "Captainganj",
    },
  ];

  useEffect(() => {
    gsap.set(wrap.current.children, { x: 200, opacity:0, });

    var tl = gsap.timeline();
    tl.to(wrap.current.children[0], {
      x: 0,
      opacity:1,
      duration:2,
      ease: "ease", // Easing function (you can choose a different one)
    }).to(wrap.current.children[1], {
      x: 0,
      opacity:1,
      duration:2,
      ease: "ease", // Easing function (you can choose a different one)
    },">").to(wrap.current.children[2], {
      x: 0,
      opacity:1,
      duration:2,
      ease: "ease", // Easing function (you can choose a different one)
    },">");

    ScrollTrigger.create({
      trigger: cont.current,
      start: "top 50%",
      end: "bottom 100%",
      animation: tl,
      scrub: true,
    });
  }, []);

  return (
    <div ref={cont} id="Education" className={styles.container}>
      <div className={styles.heading}>
        <h1>Education <span>.</span></h1>
        <p className={styles.btnText}>Graduated</p>
      </div>
      <div ref={wrap} className={styles.wrapper}>
        {Degrees.map((item, i) => (
          <Degree key={i} data={item} />
        ))}
      </div>
    </div>
  );
}
