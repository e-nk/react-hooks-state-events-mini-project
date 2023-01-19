import React, { useState } from "react";

function NewTaskForm(props) {

  const { categories, onTaskFormSubmit } = props;
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function handleAddChange(e){
    let task = e.target.value;
    task !== "" || " " ? setText(task) : alert("Cant submit emty task")
  }

  function handleAddCategory(e){
    let category = e.target.value;
    setCategory(category);
  }


  function handleSubmit(e){
    e.preventDefault();
    onTaskFormSubmit({ text ,category });
    setText("");
    setCategory("Code");
  }

  const removeAllCategory = categories.filter((category) => category !== "All")

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleAddChange}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleAddCategory}>
         {removeAllCategory.map((category,index) => {
          return (
            <option key={index}>
              {category}
            </option>
          )
         })}
        </select>
      </label>

      <input type="submit" value="Add task" onClick={handleSubmit}/>
    </form>
  );
}

export default NewTaskForm;