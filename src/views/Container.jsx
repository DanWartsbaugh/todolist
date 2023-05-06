import React, {useState} from 'react'
import Form from '../components/Form'
import Display from '../components/Display'

const Container = () => {

    const [taskList, setTaskList]= useState([])

    const addTask = (newTask) => {
        setTaskList([...taskList,newTask])
        // console.log(boxList)
    }

    const handleIsDone = (idx, updateBool)=>{
        const updatedList = [...taskList];
        updatedList[idx].isDone = updateBool;
        setTaskList(updatedList);
    }

    const handleDelete = (deleteIdx) =>{
        const filteredList = taskList.filter((eachTask, idx) => idx !== deleteIdx);
        setTaskList(filteredList);
    }

  return (
    <div>
        <Form onCreate={addTask}/>
        <Display
        taskList={taskList}
        onToggle={handleIsDone}
        onDelete={handleDelete}/>
    </div>
  )
}

export default Container