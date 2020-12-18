import "../styles/Message.scss";


export default function Message (props) {
  return (
    <div className="modal">
      <article className="message">
        <h3>mackenzie.joyal@gmail.com has been copied to your clipboard!</h3>
        <button onClick={props.closeMessage}>x</button>
      </article>
    </div>
  );
}