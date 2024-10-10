import React from 'react'
import { useState } from 'react';
import "./taskList.css"
import NewTask from '../newTask/newTask';
function TaskList () {
  const  [tasks, setTasks] = useState([]);
  
  const HandleTask=(newTask)=>{
    setTasks((prevTasks)=>[...prevTasks, newTask]);
  }
  return (
    <>
      <NewTask  onAddTask={HandleTask} />
      <ul className="taskList">
        {tasks.map((Task) => (
          <li>
            <p>{Task.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TaskList;