import './hero.scss'
import {motion} from "framer-motion";
const textVariants={
  initial:{
    x:-500,
    opacity:0,

  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1,
    },
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity,
    },
  }
};
const sliderVariants={
  initial:{
    x:0,
  },
  animate:{
    x:"-120%",
    transition:{
      repeat:Infinity,
      duration:12,
      repeatType:"mirror",
   
      ease: "easeInOut" 
      

    },
  },
};
const Hero = () => {
  return (
    <div className='hero'>
      <div className="wrapper">
      <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
        <motion.h2 variants={textVariants} initial="initial" animate="animate">  SHASHANK PANDEY</motion.h2>
        <motion.h1 variants={textVariants} initial="initial" animate="animate" >Frontend Developer</motion.h1>
        <motion.div className="buttons" variants={textVariants} >
        <motion.a href="#work"><button  variants={textVariants}  >See Latest Work</button></motion.a> 
         <motion.a href="#contact"><button style={{backgroundColor:'white',color:'black'}}  variants={textVariants}  >Contact ME</button></motion.a> 
        </motion.div>
        <motion.img  variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
      </motion.div>
      </div>
     <motion.div className="textslider" variants={sliderVariants} initial="initial" animate="animate">
  Frontend Developer
     </motion.div>
        <div className="imgContainer">
            <img src="/hero.png" alt="" />
        </div>
    </div>
  )
}
export default Hero