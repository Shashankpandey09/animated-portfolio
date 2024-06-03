import './portfolio.scss';
import React from 'react';
import {motion,useScroll,useSpring} from "framer-motion";
import { useRef } from 'react';


const items=[
    {
        id:1,
        title:'Netflix-Gpt',
        img:"https://www.missioncriticalmagazine.com/ext/resources/2023/10/CHatgpt.jpg?1697059739",
        desc:`I developed a Netflix UI clone featuring a sleek, responsive design built with React.js and styled using Tailwind CSS. The project includes secure backend authentication using Firebase, enabling user registration, login, and logout functionalities. Additionally, I integrated OpenAI's GPT-3 for an advanced search feature that provides intelligent content recommendations based on user queries. Key technologies used are React.js for the frontend, Firebase for authentication, and the GPT-3 API for the search functionality. This project showcases my ability to create dynamic user interfaces, implement secure authentication, and enhance user experience with AI-powered features.`,
        link:" https://shopping-app-rosy-gamma.vercel.app/",
        gitLink:" https://github.com/Shashankpandey09/Netflix-GPT"
    },
    {
        id:2,
        title:'E-commerce Website',
        img:"https://www.hostgator.com/blog/wp-content/uploads/2020/08/Types-of-eCommerce-Websites-1024x538.jpg",
        desc:"I developed an e-commerce website using React and Redux for state management, creating a dynamic and responsive user interface. The project features secure backend authentication using Firebase, allowing users to register, log in, and log out seamlessly. Key technologies include React.js for the frontend, Redux for efficient state management, and Firebase for authentication. This project demonstrates my proficiency in building scalable web applications, implementing robust user authentication, and managing complex state with Redux.",
        link:"https://shashankpandey09.github.io/unityLab/",
        gitLink:"https://github.com/Shashankpandey09/shopping-app "
    },
    {
        id:3,
        title:'React Text Editor',
        img:"/pexelsText.jpg",
        desc:"In crafting my React text editor app, I delved into advanced front-end development, mastering the intricacies of state management and component interactivity. This project showcases my proficiency in React hooks, allowing users to seamlessly compose and edit text in a dynamic and user-friendly environment. The implementation of features such as real-time updates, formatting options, and an intuitive user interface reflects my commitment to delivering a polished and functional application. Through this endeavor, I not only honed my technical skills but also demonstrated my dedication to creating sophisticated and user-centric solutions, making it a standout addition to my portfolio.",
        link:"https://shashankpandey09.github.io/TextPlayer/",
        gitLink:"https://github.com/Shashankpandey09/TextPlayer "
    },
];

const SingleItem=({item})=>{
    const ref=useRef()
   return(
    <section className="item-section">
    <div className="container">
      <div className="wrapper">
        <div className="imageContainer">
          <img src={item.img} alt={item.title} />
        </div>
        <div className="textContainer">
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <div className="buttonsContainer">
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="demoButton">
              <button>See Demo</button>
            </a>
            <a href={item.gitLink} target="_blank" rel="noopener noreferrer" className="githubButton">
              <button>GitHub</button>
            </a>
          </div>
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