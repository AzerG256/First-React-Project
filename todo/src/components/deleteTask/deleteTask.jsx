import React from "react";
function DeleteTask({onDelete}){
    return(
        <button onclick={onDelete} className="delete-button">Delete</button>
    );
}
export default DeleteTask;