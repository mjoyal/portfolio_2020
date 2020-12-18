import "../styles/Sidebar.scss";
import {motion} from 'framer-motion'; 

export default function SideBar (props) {

  return (
    <motion.aside className="sidenav" initial={{width: 0}} animate={{width: '100%'}} transition={{ease: 'easeInOut', duration: 0.1}}>
      <button onClick={props.close}>x</button>
    <ul>
      <li><a href="documents/mackenzie-joyal-resume.pdf" target="_blank">download_resume</a></li>
      {/* <li><a href="/">endorsements</a></li> */}
      <li><a href="/">contact</a></li>
    </ul>
    <img src="images/computer-face.png" alt="computer face logo"/>
    </motion.aside>
  );
}