import classNames from 'classnames';

export default function Button (props) {
let buttonClass = classNames('button', 
  {'button--confirm': props.confirm}, 
  {'button--danger': props.danger
 }); // change this (leaving for reference)
  
  return (
    <button
     className={buttonClass}
    //  onClick= {props.onClick}
    >
    {props.name}
    </button>
  );
}