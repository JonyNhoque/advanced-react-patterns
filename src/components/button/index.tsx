import React from "react";
import './style.css'


export const ButtonRouter = (props: any) => {
    return (
        <div className='button__container'>
            <a href={props.route} className='button__body'>{props.routeName}</a>
        </div>
    )
}