import React from 'react'
import Task from "../../classes/Task"
function NewTask(name,isChecked){
  return (
    <>    
        <form action="post">
            <label >name is :
                 <input type="text" name={Task.name}></input>
            </label>
            <label >is it done:
                <input type="checkbox" isChecked={Task.isChecked}/>
            </label>
            <button type='submit'>enter neww task</button>
        </form>
    </>
  )
}

export default NewTask;