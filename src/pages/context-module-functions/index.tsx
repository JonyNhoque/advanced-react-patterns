import React from "react";
import { InputForm } from "../../components/inputForm";
import { ResultDisplay } from "../../components/resultDisplay";
import './style.css'

export const ContextModule = () => {
    
    return (
        <div id='contextModule__container'>
            <div id='contextModule__box'>
                <span id='contextModule__header'>
                    <h2>Context Module Function</h2>
                </span>
                <div id='contextModule__body'>
                    <div id='contextModule__inputBox'>
                        <InputForm placeholder='Name'></InputForm>
                        <InputForm placeholder='Country'></InputForm>
                        <InputForm id='inputForm_bio' placeholder='Bio'></InputForm>
                    </div>
                    <div id='contextModule__result'>
                        <ResultDisplay />
                    </div>
                </div>
            </div>
        </div>
    )
}