import React from "react";
import './ramones.css';

type TRamones = {
    name: string,
    children: React.ReactNode,
};

export const Ramones: React.FC<TRamones> = ({ name, children }) => {
    
    return (
        <div className='ramones'>
            <h2 className='ramones__tag'>
                <strong>{ name }</strong>
            </h2>
            <div className='ramones__members'>
                <h3>{ children }</h3>
            </div>
        </div>
    )
};