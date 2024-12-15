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
                <h2 className="section-heading">
                    Skills
                </h2>
                <div className="skills-container" ref={ref}>
                    <motion.div className="cont" style={{ opacity: scrollYProgress, transition: { duration: 1 } }}>
                        <motion.div className="text" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 50 }}>
                            <p>
                                As a versatile web developer, I craft interactive and responsive web interfaces with proficiency in HTML, CSS, and JavaScript. My expertise in React.js empowers me to build scalable and modular web applications, ensuring an efficient user experience.
                            </p>
                            <p>
                                With a keen eye for design, I streamline my CSS workflow using Sass, fostering the development of clean and maintainable styles. Currently, I'm enriching my toolkit with Next.js, a React framework for server-side rendering and optimized web applications.
                            </p>
                            <p>
                                Committed to delivering high-quality solutions, I stay abreast of the latest industry trends. My passion for crafting seamless digital experiences positions me as an ideal candidate to contribute to innovative and impactful projects.
                            </p>
                        </motion.div>
                        <motion.div className="image" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
                            <motion.img src="/html.png" alt="HTML" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }} />
                            <motion.img src="/css.png" alt="CSS" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }} />
                            <motion.img src="/javascript.png" alt="JavaScript" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }} />
                            <motion.img src="/React-icon.svg.png" alt="React" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }} />
                            <motion.img src="/bootstrap.png" alt="Bootstrap" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }} />
                            <motion.img src="/tailwind.png" alt="Tailwind CSS" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }} />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Skills;

