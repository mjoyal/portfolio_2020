import "../styles/Nav.scss";
import MenuButton from './MenuButton';
import {motion} from 'framer-motion'; 

export default function Nav (props) {

  return (
    <nav id="home">
    <a href="/"><motion.h1 whileHover={{ scale: 1.1 }} className="logo">MACKENZIE <span>JOYAL</span></motion.h1></a>
    <ul>
      <motion.li whileHover={{ scale: 1.1 }}><a href="documents/mackenzie-joyal-resume.pdf" target="_blank">download_resume</a></motion.li>
      {/* <li><a href="/">endorsements</a></li> */}
      <motion.li whileHover={{ scale: 1.1 }} ><a href="#contact">contact</a></motion.li>
    </ul>
    <MenuButton open={props.open}/>
    </nav>
  );
}