import "../styles/Sidebar.scss";
import {useState} from 'react'; 
import {motion} from 'framer-motion'; 

export default function SideBar (props) {


const status = {
  open: {opacity: 1, width: '100%'}, 
  closed: {opacity: 0, width: 0}
};
  return (
    <motion.aside className="sidenav" variants={status} animate={props.sideBarStatus? 'open' : 'closed'} transition={{ease: 'linear'}}>
      <motion.button 
      onClick={props.close}
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      transition={{duration: 1}}
      >x</motion.button>
    <ul>
      <li><a href="documents/mackenzie-joyal-resume.pdf" target="_blank">download_resume</a></li>
      {/* <li><a href="/">endorsements</a></li> */}
      <li onClick={props.close}><a href="#contact">contact</a></li>
    </ul>
    <img src="images/computer-face.png" alt="computer face logo"/>
    </motion.aside>
  );
}