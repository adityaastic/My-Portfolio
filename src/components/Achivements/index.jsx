
'use client';
import { useState } from 'react';
import styles from './style.module.scss';
import Tiles from './Tiles.jsx';
import Descriptions from './Descriptions.jsx';

const data = [
    {
        title: "PWSKILL",
        title2: "Full Stack Developer",
        description: "Advanced MERN Stack course, endorsed by PWSKILL (PWSKILL).",
        img:"pwskill.png",
        speed: 0.5
    },
    {
        title: "MASAI",
        title2: "Solved 500+ DSA Problems ",
        description: "Solved 500+ DSA Problems on ->Masai OJ.",
        img:"masai.png",
        speed: 0.5
    },
   
    {
        title: "Hacker Rank",
        title2: "5 stare Hacker Rank",
        description: "Hacker Rank",
        img:"HackerRank-logo.png",
        speed: 0.67
    },
    {
        title: "Skill Academy",
        title2: " JAVASCRIPT",
        description: " JAVASCRIPT in Full Stack Development Career Program (ChatGPT Included).",
        img:"javascript.png",
        speed: 0.8
    },
    {
        title: "Hacker Rank",
        title2: "code challenge",
        description: "5 star in 30 Days code challenge on Hacker Rank",
        img:"HackerRank-logo.png",
        speed: 0.8
    },
    
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)
    return (
        <div className={styles.container}>
            <Tiles data={data} setSelectedProject={setSelectedProject}/>
            <Descriptions data={data} selectedProject={selectedProject}/>
        </div>
    )
}