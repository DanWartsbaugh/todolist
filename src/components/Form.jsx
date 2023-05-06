import React, { useState } from 'react'

const Form = (props) => {

const [task,setTask]=useState("")
const [isDone,setIsDone]=useState(false)

const handleSubmit= (e) => {
    e.preventDefault();
    const newTask = {task}
    props.onCreate(newTask)
}


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>New task: </label>
                    <input type="text" onChange={(e) => setTask(e.target.value)} />
                </div>
                <button type="submit" style={{backgroundColor:"blue",color:"white"}}>Add task</button>

            </form>
        </div>
    )
}

export default Form