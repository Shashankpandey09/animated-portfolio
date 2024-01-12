import './navbar.scss';
import {motion} from 'framer-motion';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}}  transition={{duration:0.5}}>Shashank Pandey</motion.span>
            <div className="social">
                <a href="https://github.com/Shashankpandey09?tab=repositories" target='_blank'><img style={{height:'20px',width:'20px'}} src='/git.webp' alt=''/></a>
                <a href="https://www.linkedin.com/in/shashank-pandey-709b15227" target='_blank'><img src='/linkedin.png' alt=''/></a>
                 
            </div>
        </div>
    </div>
  )
}
export default Navbar