import React from "react";

const Task = ({ task, deleteTask, completeTask }) => {
  return (
    <div
      className='task'
      style={{ backgroundColor: task.completed ? "green" : "white" }}
    >
      <h1>{task.taskName}</h1>
      <button onClick={() => deleteTask(task.id)}> X </button>
      <button onClick={() => completeTask(task.id)}>Complete</button>
    </div>
  );
};

export default Task;
