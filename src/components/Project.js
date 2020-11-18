export default function Project (props) {
  return (
    <>
    <h2>{props.title}</h2>
    <p>{props.paragraph}</p>
    <h3>{"{Stack}"}</h3>
    <p>{props.techStack}</p>
    </>
  );
}