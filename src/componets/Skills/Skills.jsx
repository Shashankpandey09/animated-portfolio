import './skills.scss';
import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

const Skills = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1.2 1'],
    });

    return (
        <section className="skills">
            <div className="container">
                <h2 className="section-heading" style={{ textAlign: "center", fontSize: "4rem", textTransform: "uppercase" }}>Skills</h2>
                <div className="skills-container" ref={ref}>
                    <motion.div className="cont" style={{ opacity: scrollYProgress, transition: { duration: 1 } }}>
                        <motion.div className="text" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1 }}>
                            <p>
                                As a versatile web developer, I craft interactive and responsive web interfaces with proficiency in HTML, CSS, and JavaScript. My expertise in React.js empowers me to build scalable and modular web applications, ensuring an efficient user experience. I leverage frameworks like Bootstrap and Tailwind CSS to create visually captivating layouts that seamlessly adapt to various devices.
                            </p>
                            <p>
                                With a keen eye for design, I meticulously streamline my CSS workflow using Sass, fostering the development of clean and maintainable styles. Currently, I'm enriching my toolkit with Next.js, a React framework for server-side rendering and optimized web applications, aimed at enhancing performance and user engagement.
                            </p>
                            <p>
                                Committed to delivering high-quality solutions, I stay abreast of the latest industry trends and technologies. My passion for crafting seamless digital experiences, coupled with my unwavering attention to detail, positions me as an ideal candidate to contribute my skills to innovative and impactful projects.
                            </p>
                        </motion.div>
                        <motion.div className="image" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
                            <img src="/html.png" alt="HTML" />
                            <img src="/css.png" alt="CSS" />
                            <img src="/javascript.png" alt="JavaScript" />
                            <img src="/React-icon.svg.png" alt="React" />
                            <img src="/bootstrap.png" alt="Bootstrap" />
                            <img src="/tailwind.png" alt="Tailwind CSS" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
