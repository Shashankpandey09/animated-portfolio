import './skills.scss';
import React from 'react';
import { useEffect ,useRef} from 'react';
import { motion, stagger, useAnimation, useInView,useScroll } from 'framer-motion';

const Skills = () => {
    const ref=useRef()
   const {scrollYProgress}= useScroll({
        target:ref,
        offset:['0 1', '1.2 1'],
    })

    return (
        <div 
            className='skills'  
         
        >
            <motion.div className="cont" ref={ref} style={{opacity:scrollYProgress,scrollBehavior:'smooth',transition:{staggerChildren:1,stiffness:20,duration:1}}}>
            <div className="text">
                <p>I am a versatile web developer proficient in HTML, CSS, and JavaScript, creating interactive and responsive web interfaces. With expertise in React.js, I specialize in building scalable and modular web applications, ensuring an efficient and user-friendly experience. My design skills extend to Bootstrap and Tailwind CSS, allowing me to create visually appealing and responsive layouts that adapt seamlessly to various devices.

                In addition to these, I streamline my CSS workflow with Sass, enabling the development of clean and maintainable styles. This meticulous approach ensures not only aesthetic excellence but also code sustainability. Currently, I am expanding my toolkit with Next.js, a React framework for server-side rendering and optimized web applications, aiming to enhance performance and user engagement.

                Committed to delivering high-quality solutions, I thrive on staying updated with the latest industry trends and technologies. My passion for creating seamless digital experiences, coupled with my dedication to detail, positions me as an ideal candidate for contributing my skills to innovative and impactful projects.</p>
            </div>
            <div className="image">
                <img src="/html.png" alt="html" />
                <img src="/css.png" alt="css" />
                <img src="/javascript.png" alt="javascript" />
                <img src="/React-icon.svg.png" alt="react" />
                <img src="/bootstrap.png" alt="bootstrap" />
                <img src="/tailwind.png" alt="tailwind" />
            </div>
            </motion.div>
          
        </div>
    );
}

export default Skills;
