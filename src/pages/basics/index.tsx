import React from "react";
import './index.css'
import { Card } from "./Card/Card";
import { Ramones } from "./Ramones/Ramones";
import { RamonesMembers } from "./Ramones/RamonesMembros";


export const Basics = () => {
    return (
        <div className='basics__container'>
            <div className='basics__body'>
                <Card cardName='# 01 - Componente com filhos'>
                    <Ramones name='RAMONES'>
                        <RamonesMembers memberName='Joey ' />
                        <RamonesMembers memberName='Johnny '/>
                        <RamonesMembers memberName='Dee Dee '/>
                        <RamonesMembers memberName='Tommy '/>
                    </ Ramones>
                </Card>
            </div>
        </div>
    )
}