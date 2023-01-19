import React from "react";

function Task(props){
  function handleClick(){
    props.deleteTask(props.text);
  }

  return (
    <div className="task">
      <div className="label">{props.category}</div>
      <div className="text">{props.text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;