import React, { useState } from "react";
import './index.css'

export const Task = (props: any) => {

    return(
        <div className='task__container'>
            <div className='task__body'>
                {props.taskHandler}
            </div>
        </div>
    )
}