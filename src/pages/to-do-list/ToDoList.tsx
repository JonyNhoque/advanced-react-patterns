import React, { useState } from "react"
import { AddTaskForm } from "./components/AddTaskForm/AddTaskForm"
import { TaskRow } from "./components/TaskRow/TaskRow"
import './toDoList.css'

export const ToDoList = () => {

    const [taskMsg, setTaskMsg] = useState('')
    const getData = (taskBody: string) => {
        setTaskMsg(taskBody)
    }
    const [taskRow, setTaskRow] = useState([]);

    return(
        <div className='toDo__app'>
            <div className='toDo__header'>
                <h1 className='toDo__Tile'>Lista de tarefas</h1>
                <AddTaskForm submitHandler={getData}/>
            </div>
            <div className='toDo__taskContainer'>
                <div className='toDo__task'>
                    {taskRow.map((key: any) => {
                        return(
                            <div key={key}>
                                {taskMsg}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}