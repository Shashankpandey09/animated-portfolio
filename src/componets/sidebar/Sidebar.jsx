import './sidebar.scss';
import {motion} from "framer-motion";
import Links from './Links/Links';
import ToggleButton from './toggleButton/ToggleButton';
import { useState } from 'react';
const variants={
    open:{
        clipPath:"circle(1840px at 50px 50px)",
        transition:{
            type:"spring",
            stiffness:20,
        },
    },
    closed:{
        clipPath:"circle(25px at 50px 50px)",
        transition:{
            delay:0.5,
            type:'spring',
            stiffness:300,//controls speed
            damping:40,
        },
    },
};

const Sidebar = () => {
    const [open,setOpen]=useState(false);

  
  return (
    <motion.div className='sidebar' animate={open?'open':'closed'} >
        <motion.div className="bg" variants={variants}><Links setOpen={setOpen}/></motion.div>
        <ToggleButton setOpen={setOpen}/>
    </motion.div>
  )
}
export default Sidebar