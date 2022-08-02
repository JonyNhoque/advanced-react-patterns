import React from "react";
import './card.css'

type TCard = {
    cardName: string,
    children: React.ReactNode
}

export const Card:React.FC<TCard> = ({ cardName, children }) => {
    return (
        <div className='card__container'>
            <div className='card__body'>
                <div className='card__colorTag'>
                    {cardName}
                </div>
                <div className='card__content'>
                    {children}
                </div>
            </div>
        </div>
    )
}