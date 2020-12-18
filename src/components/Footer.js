import "../styles/Footer.scss";

export default function Footer (props) {
  return (
    <footer>
      <h2>say_hi()!</h2>
      <div>
        <a href={"https://github.com/mjoyal"} target="_blank">
          <img src="images/github-white.png" alt="github icon"/>
        </a>
        <a href={"https://www.linkedin.com/in/mackenziejoyal/"} target="_blank">
        <img src="images/linkedin-white.png" alt="linkedin icon"/>
        </a>
        <img src="images/email-white.png" alt="email icon" onClick={props.showCopied}/>
      </div>
    </footer>
  );
}