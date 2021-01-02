import "../styles/MenuButton.scss";
import {motion} from 'framer-motion'; 

export default function MenuButton (props) {

  return (
    <motion.button 
    className="menuButton" 
    onClick={props.open}
    whileHover={{ scale: 1.1 }}
    >
     <div className="hamLine hamLine1"></div>
     <div className="hamLine hamLine2"></div>
     <div className="hamLine hamLine3"></div>
    </motion.button>
  );
}