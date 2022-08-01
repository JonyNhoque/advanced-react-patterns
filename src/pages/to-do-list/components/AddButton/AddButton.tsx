import React from "react"

export const AddButton = (props: any) => {
    return(
        <button type='submit' onClick={props.addFunc}>{props.name}</button>
    )
}