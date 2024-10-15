import React from 'react'
import { useState } from 'react';
import "./taskList.css"
import NewTask from '../newTask/newTask';
function TaskList () {
  const  [tasks, setTasks] = useState([]);
  const HandleTask=(newTask)=>{
    setTasks((prevTasks)=>[...prevTasks, newTask]);
  };
  const getDateDifference = (taskDate) => {
    const today = new Date();
    const date = new Date(taskDate);
    const differenceInTime = date.getTime() - today.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  };

  return (
    <>
      <NewTask onAddTask={HandleTask}  />
      <ul className={`taskList ${tasks.length === 0 ? 'hidden' : ''}`}>
        {tasks.map((Task) => (
          <ol key={Task.name}>
            <details>
              <summary>
                <strong>{Task.name}</strong>
              </summary>
              <p>{Task.description}</p>
              <p>{Task.date}</p>
              <p>Days until task: {getDateDifference(Task.date)}</p>
            </details>
          </ol>
        ))}
      </ul>
    </>
  )
}

export default TaskList;