import React from "react";
import './card.css'

export const Card = (props: any) => {
    return (
        <div className='card__container'>
            <div className='card__body'>
                <div className='card__colorTag'>
                    {props.cardName}
                </div>
                <div className='card__content'>
                    <strong>{props.cardContent}</strong>
                </div>
            </div>
        </div>
    )
}