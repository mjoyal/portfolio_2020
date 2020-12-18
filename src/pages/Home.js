import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Project from '../components/Project';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Message from '../components/Message';


import {useEffect, useState} from 'react'; 
import axios from 'axios';


export default function Home (props) {
  const [loading, setLoading] = useState(true); 
  const [projects, setProjects] = useState([]);
  const [sideBar, setSideBar] = useState(false); 
  const [showMessage, setShowMessage] = useState(false); 

  useEffect(() => {
    axios.get(`https://mjoyal-portfolio-api.herokuapp.com/projects`)
      .then((response) => {
        setProjects(response.data.projects); 
        console.log(response.data.projects); 
        setLoading(false); 
      });
  }, []); 

  const handleOpen = () => {
    setSideBar(true); 
  };

  const handleClose = () => {
    setSideBar(false); 
  };

  const showModal = () => {
    setShowMessage(true);
  };

  const closeModal = () => {
    setShowMessage(false);
  };

  if(loading) {
    return null; 
  };

  const projectCard = projects.map((project) => {
    return (
      <Project
        title={project.title}
        desc={project.description}
        techStack={project.stack}
        link={project.link}
        image={project.image}
      />
    );
  });
  
  return (
    <>
    {sideBar && <Sidebar close={handleClose}/>}
    <Nav open={handleOpen}/>
    {showMessage && <Message closeMessage={closeModal}/>}
      <Header></Header>
      <main>
        <h2 className="project-title">my projects</h2>
        {projectCard}
      </main>
    <Footer showCopied={showModal}/>
    </>
  );
}




