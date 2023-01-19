import React from "react";
import Task from "./Task";

function TaskList({ tasks , deleteTask}){
  return (
    <div className="tasks">
      {tasks.map((task,index) => {
        let { text, category } = task;
        return <Task 
                     key={index}
                     text={text} 
                     category={category}
                     deleteTask={deleteTask}
                     />
      })}
    </div>
  );
}

export default TaskList;