import "../styles/Project.scss";

export default function Project (props) {

  const text = props.desc; 
  const paragraphs = text.split('\n').map(paragraph => <p>{paragraph}</p>)



  return (
    <article>
    <img className="project-image" src={`${props.image}`} alt=""/>
    <aside>
      <div className="space">
        <h1>{props.title}</h1>
        <div className="underline"></div>
        <p>{props.desc}</p>
        <h3><span>{"{"}</span> Stack <span>{"}"}</span></h3>
        <p>{props.techStack}</p>
        <a href={props.link} target="_blank">
          <img src="/github-logo.png" alt="Github Logo" height="40"></img>
        </a>
      </div>
    </aside>
    </article>
  );
}