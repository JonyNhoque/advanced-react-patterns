import React from "react";
import { useState } from "react";
import { AddButton } from "../AddButton/AddButton";

export const AddTaskForm = (props: any) => {

    const [taskBody, setTaskBody] = useState('')
    const handleTaskBody = (e: any) =>{
        setTaskBody(e.currentTarget.value)
    }

    return(
        <div className='addTask__container'>
            <input className='addTask__input' placeholder="Nova tarefa" onChange={handleTaskBody}></input>
            <AddButton name='Adicionar' addFunc={() => props.submitHandler(taskBody)}/>
        </div>
    )
}