import { responseEncoding } from "axios";
import React from "react";
import S from "./style";

type TStatistics = {
    newCases?: string;
    
};

const StatisticsDisplay: React.FC<TStatistics> = ({ newCases }) => {

    return (
        <S.StatisticsDisplay>
            <S.Title> novos casos: </S.Title>
            <S.ResponseDisplay> {newCases} </S.ResponseDisplay>
        </S.StatisticsDisplay>
    )
};

export default StatisticsDisplay