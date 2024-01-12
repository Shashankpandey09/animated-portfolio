import './portfolio.scss';
import React from 'react';
import {motion,useScroll,useSpring} from "framer-motion";
import { useRef } from 'react';


const items=[
    {
        id:1,
        title:'Pexels Clone ',
        img:"/pexels.jpg",
        desc:`In developing my Pexels clone, I honed my skills in HTML, CSS, and JavaScript, showcasing my proficiency in front-end web development. This project allowed me to master the art of designing visually appealing and responsive user interfaces, demonstrating my understanding of layout structuring, styling elements, and implementing interactive features. By incorporating JavaScript, I enhanced the user experience through dynamic functionalities, showcasing my ability to manipulate the Document Object Model (DOM) seamlessly. This project not only highlights my technical competence but also reflects my dedication to creating user-friendly and aesthetically pleasing web applications, making it a valuable addition to my portfolio`,
        link:" https://shashankpandey09.github.io/pexels-clone/",
    },
    {
        id:2,
        title:'React News App',
        img:"/pexels-news.jpg",
        desc:"Through the development of my React-based news website, I elevated my skills in modern web development. By implementing API fetching, I mastered the integration of dynamic content, showcasing my ability to create real-time updates and maintain a seamless user experience. This project underscores my proficiency in React, demonstrating my understanding of component-based architecture, state management, and the importance of responsive design. Beyond technical prowess, it reflects my commitment to delivering relevant and engaging content to users, making it a compelling showcase of my capabilities in both front-end development and user-centric design for my portfolio.",
        link:"https://shashankpandey09.github.io/unityLab/"
    },
    {
        id:3,
        title:'React Text Editor',
        img:"/pexelsText.jpg",
        desc:"In crafting my React text editor app, I delved into advanced front-end development, mastering the intricacies of state management and component interactivity. This project showcases my proficiency in React hooks, allowing users to seamlessly compose and edit text in a dynamic and user-friendly environment. The implementation of features such as real-time updates, formatting options, and an intuitive user interface reflects my commitment to delivering a polished and functional application. Through this endeavor, I not only honed my technical skills but also demonstrated my dedication to creating sophisticated and user-centric solutions, making it a standout addition to my portfolio.",
        link:"https://shashankpandey09.github.io/TextPlayer/"
    },
];

const SingleItem=({item})=>{
    const ref=useRef()
   return(
    <section  className='port'>
      <div className="container">
        <div className="wrapper">
            <div className="imageContainer">
             <img src={item.img} alt={item.title} />
            </div>
     
        <div className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target='_blank'><button>See Demo</button></a>  
        </div>
        </div>
   
      </div>
    </section>
   )
}
const Portfolio = () => {
    const ref=useRef();
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["end end","start start"],
     })
     const scaleX=useSpring(scrollYProgress,
        {stiffness:260,damping:30 ,opacity:0});
    
  return (
    <div ref={ref} className='portfolio' id='work'>
        <div className="progress">
            <h1>Featured work</h1>
            <motion.div style={{scaleX,opacity:1}} className="progress-bar"></motion.div>
        </div>
     {items.map((item)=>{
     return <SingleItem item={item} key={item.id}/>

     })}
    </div>
  )
}
export default Portfolio