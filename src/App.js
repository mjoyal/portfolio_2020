import Nav from './components/Nav';
import Project from './components/Project';
import Footer from './components/Footer';
import './App.css';
let temp = "A food ordering experience for a single restaurant (Taco Takeout).";

function App() {
  return (
    <>
      <Nav/>
      <Project
        title={"Taco Takeout"}
        paragraph={temp}
        techStack={"Express, Node.js, jQuery, EJS, SCSS"}
      />
      <Footer/>
    </>
  );
}

export default App;
