import React from "react";
import './style.css'

type TButtonProps = {
    routeName: string,
    route: string
}


export const ButtonRouter = ({route, routeName}: TButtonProps) => {
    return (
        <div className='button__container'>
            <a href={route} className='button__body'>{routeName}</a>
        </div>
    )
};