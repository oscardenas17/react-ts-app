import React, { ChangeEvent, FormEvent, useState } from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { Task } from '../interfaces/Task';


interface Props{
  newAddTask:  (task: Task) => void;
}


const TaskForm = ( {newAddTask}: Props) => {

const initialState ={title:'',
description:'',}
  
  const [task, setTask] = useState(initialState)

  const handleInputChange = ( {target: {name,value}} : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
   setTask({...task, [name]: value})
  }

  const handleNewTask =(e : FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    newAddTask(task)
    setTask(initialState)
  }
  
  return (
    <div className="card card-body bg-secundary text-dark">
      <h1>add Task</h1>

      <form action="" onSubmit={handleNewTask}>
        <input type="text" placeholder='Write a title' name="title" className='form-control mb-3 rounded-0 shadow-none border-0' onChange={handleInputChange} value={task.title}/>

        <textarea name="description" placeholder='Write a description' rows={2} className='form-control mb-3 border-1' onChange={handleInputChange} value={task.description}></textarea>

        <button className='btn btn-primary'>
            Save <AiOutlinePlus/>
        </button>
      </form>
    </div>
  )
}

export default TaskForm