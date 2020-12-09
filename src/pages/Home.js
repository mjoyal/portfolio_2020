import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Project from '../components/Project';
import projects from '../data/projects';

export default function Home (props) {
  
  const projectCard = projects.map((project) => {
    return (
      <Project
        title={project.title}
        desc={project.desc}
        techStack={project.stack}
        link={project.link}
      />
    );
  });
  
  return (
    <>
    <Nav/>
      <main>
        {projectCard}
      </main>
    <Footer/>
    </>
  );
}




