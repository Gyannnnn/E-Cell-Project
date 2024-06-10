import React from 'react';
import '../Task/Task.css';
import { RiDeleteBin5Line } from "react-icons/ri";

const Task = ({ title, description, deleteTask }) => {
  return (
    <div id="task">
      <div>
        <h3>{title}</h3>
        <h5>{description}</h5>
      </div>
      <RiDeleteBin5Line className='btn' onClick={deleteTask} />
    </div>
  );
};

export default Task;
