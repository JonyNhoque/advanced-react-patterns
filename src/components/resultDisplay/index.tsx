import React from "react";
import './index.css'

export const ResultDisplay = (props: any) =>{

    return (
        <div id='resultDisplay__container'>
            <div id='resultDisplay__box'>
                <div id='resultDisplay__text'>
                    <p>
                        Name: {props.name}
                        Country: {props.country}
                        Bio: {props.bio}
                    </p> 
                </div>
            </div>
        </div>
    )
}