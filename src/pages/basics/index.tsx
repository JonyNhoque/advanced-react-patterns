import React from "react";
import './index.css'
import { Card } from "./Card/Card";

export const Basics = () => {
    return (
        <div className='basics__container'>
            <div className='basics__body'>
                <Card cardName='# 01 - Componente com filhos' />
            </div>
        </div>
    )
}