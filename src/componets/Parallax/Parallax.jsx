import './parallax.scss';
import { useRef } from 'react';
import {motion,useScroll,useTransform} from "framer-motion"
const Parallax = ({type}) => {
  const ref=useRef(null);

  const {scrollYProgress}=useScroll({
    target:ref,
    offset:['start start','end start'],

  })
  const yText=useTransform(scrollYProgress,[0,1],["0%","120%"]);
  const xPlanet=useTransform(scrollYProgress,[0,1],["0%","50%"]);

  return (
    <motion.div ref={ref} className='parallax' style={{background:type==="skills" ? "linear-gradient(180deg, #111132,#0c0c1d)":"linear-gradient(180deg, #111132,#505064)",zIndex:"-11"}}>
        <motion.h1 style={{y:yText}}>{type==="skills" ? "what We Do?":"What We Did"}</motion.h1>
        <motion.div className="mountains" ></motion.div>
        <motion.div  className="planets" style={{backgroundImage:type==="skills"?"url(/planets.png)":"url(/sun.png)",y:yText,transition:"1s"}}></motion.div>
        <motion.div style={{x:xPlanet,transition:"1.2s"}} className="stars"></motion.div>
    </motion.div>
  )
}
export default Parallax