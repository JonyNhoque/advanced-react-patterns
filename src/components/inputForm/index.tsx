import React from "react";
import './index.css'

export const InputForm = (props: any) => {
    return (
    <div>
        <input id='input' type='text' placeholder={props.placeholder}>{props.inputValue}</input>
    </div>
    )
}