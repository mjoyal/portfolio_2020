import "../styles/Skills.scss";


export default function Skills (props) {
  const splitList = (stringList) => {
    const skillsArray = stringList.split(","); 
    const singleItem = skillsArray.map((skill) => {
      return (
        <li>{`> ${skill}`}</li>
      );
    });
    return singleItem; 
  }; 
  const section = props.skills.map((section, index) => {
    return(
      <>
        <h2>{section.title}</h2>
        <ul>{splitList(section.skills)}</ul>
      </>
    );
  });

  return (
    <section>
      <h1><span>{"{"}</span>skills<span>{"}"}</span></h1>
      {section}
    </section>
  );
}