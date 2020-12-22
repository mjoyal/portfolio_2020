import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Project from '../components/Project';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Message from '../components/Message';
import Skills from '../components/Skills';
import Endorsements from '../components/Endorsements';


import {useEffect, useState} from 'react'; 
import axios from 'axios';


export default function Home (props) {
  const [loading, setLoading] = useState(true); 
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]); 
  const [endorsements, setEndorsements] = useState([]); 
  const [sideBar, setSideBar] = useState(false); 
  const [showMessage, setShowMessage] = useState(false); 

  useEffect(() => {
    const baseURL = `https://mjoyal-portfolio-api.herokuapp.com`; 
    const projects = axios.get(`${baseURL}/projects`); 
    const skills = axios.get(`${baseURL}/skills`); 
    const endorsements = axios.get(`${baseURL}/endorsements`);
    const promises = [projects, skills, endorsements]; 
    Promise.all(promises)
      .then((response) => {
        setProjects(response[0].data.projects); 
        setSkills(response[1].data.skills); 
        console.log(response[1].data.skills);
        setEndorsements(response[2].data.endorsements); 
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
        {/* <Skills skills={skills}/>
        <Endorsements endorsements={endorsements}/> */}
        <a href="#nav">scroll to top</a>
      </main>
    <Footer showCopied={showModal}/>
    </>
  );
}




