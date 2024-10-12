import React from 'react'
import { useState } from 'react';
import "./taskList.css"
import NewTask from '../newTask/newTask';
function TaskList () {
  const  [tasks, setTasks] = useState([]);
  const HandleTask=(newTask)=>{
    setTasks((prevTasks)=>[...prevTasks, newTask]);
  };
  return (
    <>
      <NewTask  onAddTask={HandleTask} />
      <ul className="taskList">
        {tasks.map((Task) => (
          <ol>
            <details >
              <summary>{Task.name}</summary>
              <p>{Task.description}</p>
              <p>{Task.date}</p>
              </details>
          </ol>
        ))}
      </ul>
    </>
  )
}

export default TaskList;