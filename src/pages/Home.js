import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Project from '../components/Project';
import Header from '../components/Header';


import {useEffect, useState} from 'react'; 
import axios from 'axios';

// temp data

// import projects from '../data/projects';


export default function Home (props) {
  const [loading, setLoading] = useState(true); 
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`/projects`)
      .then((response) => {
        setProjects(response.data.projects); 
        console.log(response.data.projects); 
        setLoading(false); 
      });
  }, []); 

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
    <Nav/>
      <Header></Header>
      <main>
        {projectCard}
      </main>
    <Footer/>
    </>
  );
}




