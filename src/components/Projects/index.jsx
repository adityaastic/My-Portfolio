import { React, useRef, useEffect, useLayoutEffect } from "react";
import styles from "./style.module.scss";
import { photoAnm, detailAnm } from "./animation.js";
import Detail from "./Detail.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function index() {
  const gallery = useRef(null);
  const left = useRef(null);
  const details = useRef(null);
  const right = useRef(null);
  const photo = useRef(null);

  useLayoutEffect(() => {

    ScrollTrigger.create({
      trigger: gallery.current,
      start: "top top",
      end: "bottom bottom",
      pin: right.current,
      animation: photoAnm(photo),
      scrub: true,
    });
    
    // ScrollTrigger.create({
    //   trigger: left.current,
    //   start: "top top",
    //   end: "bottom bottom",
    //   pin: left.current,
    //   animation: detailAnm(details),
    //   scrub: true,
    // });

  }, []);

  
  const projects = [
    {
      title: "Moonflix ",
      description: "Moonflix is a user-friendly platform for movie and TV series fans, enhancing viewing and browsing with features like:",
      year: "2023",
      tasks: ["Light / Dark theme- Sign up / Sign in","Save movie to Favorite list (Remove favorite item","Write review for movie (Delete review)", "Search movies / tv series / people"],
      skills: ["html","css","js","react","python"],
      liveLink: "https://example.com/live",
      githubLink: "https://github.com/example/repo"
    },
    {
      title: "Clothify",
      description: "A professional clothing website offering a seamless user experience and efficient admin management.",
      year: "2023",
      tasks: ["User Features:- Product Carousel,Product Categories,","Pagination,Filter & Sort Products,Product Details & Reviews","Order History,Order Tracking", "Admin Features:- Manage Orders,Create & Delete Products"],
      skills: ["html","css","js","mvc","sql"],
      liveLink: "https://example.com/live",
      githubLink: "https://github.com/example/repo"
    },{
      title: "EXTRAMARKS : Learning Management System",
      description: "Create a UI for trading of stokes, bitcoins and NFTs. Give update on price and value in market.",
      year: "2022",
      tasks: ["USER:: Authentication,Authorization,Registration","View Course,Edit User Profile,Forget password,","Purchase & Cancel Course notification through mail","Contact Us,Feedback","Admin Dashboard: Add Course,Add Lecture,Delete Lecture,order details","Razorpay Payment Gateway,Get payment notification on email"],
      skills: ["figma","ai"],
      liveLink: "https://example.com/live",
      githubLink: "https://github.com/example/repo"
    },
    {
      title: "NetflixGPT",
      description: "🚀 Presenting hashtag#NetflixGPT Your Ultimate Movie Companion! 🚀.",
      year: "2023",
      tasks: ["Account Management","Smart Search with OpenAI","Login with Email & Password with firebase", "Responsive Design"],
      skills: ["html","css","js"],
      liveLink: "https://example.com/live",
      githubLink: "https://github.com/example/repo"
    },
    
  ];

  return (
    <>
      <div ref={gallery} id="Projects" className={styles.gallery}>
        <div ref={left} className={styles.left}>
          <div className={styles.Heading}>
            <h1>
              projects <span>.</span>
            </h1>
          </div>
          <div ref={details} className={styles.detailsWrapper}>
  
            {projects.map((item, i) => (
                      <Detail key={i} data={item}
                    />
                    ))}

          </div>
        </div>

        <div ref={right} className={styles.right}>
      <div className={styles.blobS}></div>

          <div ref={photo} className={styles.photos}>
          {projects.map((item, i) => (
                      <div data-num={i} key={i} className={styles.photo}></div>
                    ))}
            
          </div>
        </div>
      </div>
    </>
  );
}
