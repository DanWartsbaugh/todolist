import React from 'react'

const Display = (props) => {
  return (
    <ul>{props.taskList.map((eachTask, idx) => (
        <li key={idx} style={eachTask.isDone?{textDecoration:"line-through",listStyle:"none"}:{textDecoration:"none",listStyle:"none"} }> 
        {eachTask.task}
        <input type="checkbox" checked={eachTask.isDone}
        onChange={(e)=>props.onToggle(idx,e.target.checked)} />
        <button style={{backgroundColor:"black", color:"white"}}onClick={()=>props.onDelete(idx)}>Delete task</button></li>
        )
  )}
</ul>)
}

export default Display