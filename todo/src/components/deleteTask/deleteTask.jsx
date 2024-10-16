import React from "react";
//import "./deleteTask.css";
import deleteimg from '../../pictures/images.jpeg'
function DeleteTask({onDelete}){
    return(
        <button onClick={onDelete} className="delete-button">
            <img src={deleteimg} alt="delete" />
        </button>
    );
}
export default DeleteTask;