import Nav from './components/Nav';
import Project from './components/Project';
import Footer from './components/Footer';
import projects from './data/projects';
import './App.css';


function App() {

  const projectCard = projects.map((project) => {
    return (
      <Project
        title={project.title}
        desc={project.desc}
        techStack={project.stack}
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

export default App;
