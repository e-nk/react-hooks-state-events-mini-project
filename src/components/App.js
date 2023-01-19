import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks,setTasks] = useState(TASKS);
  const [category, setCategory ] = useState("All");

  const displayTaskCategories = tasks.filter((task) => 
    category === "All" || task.category === category
  )
  
  function removeTask(taskText){
    setTasks(tasks.filter((task) => task.text !== taskText))
  }

  function addTask(anotherTask){
    setTasks([...tasks,anotherTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} handleSelectedCategory={setCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addTask}/>
      <TaskList tasks={displayTaskCategories} deleteTask={removeTask} />
    </div>
  );
}

export default App;