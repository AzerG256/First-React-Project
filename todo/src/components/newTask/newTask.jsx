import React from 'react'
import { useState } from 'react';
function NewTask({onAddTask}){
    const [task,setTask] =useState({name:'',isChecked:false});
    const handleInput=(e)=>{
        const {name,value,type,isChecked}=e.target;
        setTask(
            (prevTask) => ({...prevTask,[name]: type === 'checkbox' ? isChecked : value,})
        );
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (task.name.trim() === '') {
            alert('Task name cannot be empty!');
            return;
          }
        onAddTask(task);
        setTask({name:'',isChecked:false});
    }
  return (
   <>
   <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter the name of your task" name="name" value={task.name} onChange={handleInput}/>
        <input type="checkbox" name="isChecked" checked={task.isChecked} onChange={handleInput}/>
        <button type="submit" >Add Task</button>
   </form>
   </>
  )
}

export default NewTask;