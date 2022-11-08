import React from 'react';
import SearchBar from './components/SearchBar';
import S from './style';

const CovidTracker = () =>{
    return (
        <S.Container>
            <S.Header>
                <S.Header__textContainer>
                    <S.Header__title>Covid Tracker</S.Header__title>
                    <S.Header__subtitle>An API integration project!</S.Header__subtitle>
                </S.Header__textContainer>
                <SearchBar />
            </S.Header>

        </S.Container>

    )
};

export default CovidTracker;