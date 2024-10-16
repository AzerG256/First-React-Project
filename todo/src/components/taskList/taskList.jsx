import React from 'react'
import { useState } from 'react';
import "./taskList.css"
import NewTask from '../newTask/newTask';
import DeleteTask from '../deleteTask/deleteTask';
function TaskList () {
  const  [tasks, setTasks] = useState([]);
  const HandleTask=(newTask)=>{
    setTasks((prevTasks)=>[...prevTasks, newTask]);
  };
  const HandleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
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
          <li key={Task.id}>
            <details>
              <summary className='task'>
                  <input type="checkbox" />
                  <strong className='nameT'>{Task.name}</strong>
                  <DeleteTask  onDelete={() => HandleDelete(Task.id)} />
              </summary>
              <p>{Task.description}</p>
              <p>{Task.date}</p>
              <p>Days until task: {getDateDifference(Task.date)}</p>
            </details>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TaskList;