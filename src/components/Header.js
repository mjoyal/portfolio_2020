import "../styles/Header.scss";
import {motion} from 'framer-motion'; 

export default function Header (props) {
  return (
    <header>
      <div>
      <img className="arrow" src="/images/terminal-arrow.png" alt="cursor"/>
       <h2>
        Passionate full-stack developer, 
        dedicated to learning && enthusiastic 
        about intuitive design. 
       </h2>
      <motion.img 
        className="cursor" 
        src="/images/cursor.png" 
        alt="cursor"
        // initial={{opacity: 0}}
        // animate={{opacity: 1}}
        // exit={{opacity: 0}}
        // transition={{repeat: Infinity, duration: 1.5}}

      />
      </div>
      <img src="images/computer-boy.png" alt="computer"/>
    </header>

  );
}