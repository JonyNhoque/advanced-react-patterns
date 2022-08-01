import React from "react";
import { Task } from "../Task/Task"

export const TaskRow = (props: any) => {

    return (
        <div>
            <Task taskHandler={props.task} />
        </div>
    )
}