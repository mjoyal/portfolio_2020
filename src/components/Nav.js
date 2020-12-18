import "../styles/Nav.scss";


export default function Nav (props) {

  return (
    <nav>
    <a href="/"><h1 className="logo">MACKENZIE <span>JOYAL</span></h1></a>
    <ul>
      <li><a href="documents/mackenzie-joyal-resume.pdf" target="_blank">download_resume</a></li>
      {/* <li><a href="/">endorsements</a></li> */}
      <li><a href="/">contact</a></li>
    </ul>
    <img src="images/hamburger-button.png" alt="menu button" onClick={props.open}/>
    </nav>
  );
}