import styles from "./style.module.scss";
import { React, useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Name() {
  const NameChars = [

    "A",
    "a",
    "d",
    "i",
    "t",
    "y",
    "a",
    "_",
    "G",
    "u",
    "p",
    "t",
    "a",
    "_",
    "!",
    
  ];
  const wrapper = useRef();
  useLayoutEffect(() => {
    gsap.set(wrapper.current.children, { y: 400 });

    var tl = gsap.timeline();
    tl.to(wrapper.current.children, {
      y: 0,
      duration:2,
      stagger: 0.1,
      ease: "power3.out", // Easing function (you can choose a different one)
    });
  }, []);

  return (
    <div ref={wrapper} className={styles.NameW}>
      {NameChars.map((char, index) => (
        <span className={styles.NameChar} key={index}>
          {char}
        </span>
      ))}
    </div>
  );
}
