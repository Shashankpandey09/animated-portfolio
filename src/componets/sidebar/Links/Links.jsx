import {motion} from "framer-motion"
const variants ={
    open:{
        transition:{
            staggerChildren:0.2,
        },},
        closed:{transition:{
            staggerChildren:0.05,
            staggerDirection:-1,
        },},
   
};
const itemVariants ={
    open:{y:0,opacity:1,},
       
        closed:{
            y:50,
            opacity:0,
      },
    }

const Links = ({setOpen}) => {
    const items=["Homepage","skills","Portfolio","contact","About"];
  return (
    <motion.div  className="links" variants={variants}>
     {items.map((item)=>{
        return<motion.a href={`#${item}`} whileHover={{scale:1.2}} whileTap={{scale:0.95}} onClick={()=>setOpen(prev=>!prev)} key={item} style={{color:"black"}} variants={itemVariants}>{item}  </motion.a>
     })}
   </motion.div>
  )
}
export default Links;