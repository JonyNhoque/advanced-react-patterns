import React, { useEffect, useState } from "react";
import SearchBar from './components/SearchBar/index';
import StatisticsDisplay from "./components/StatisticsDisplay";
import axios from "axios";
import S from './style';



const CovidTracker = () =>{
    const [query, setQuery] = useState('');
    const [newCases, setNewCases] = useState('');

    const options = {
        method: 'GET',
        url: 'https://covid-193.p.rapidapi.com/statistics',
        params: {country: `${query}`},
        headers: {
          'X-RapidAPI-Key': '327c7a2f68mshe4afadeb9a0d147p12f9d6jsne036bcd1624f',
          'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
      };

    useEffect(() => {
        axios.request(options).then(function (response) {
            const queryResponse = (response.data.response[0].cases.new);
            setNewCases(queryResponse);
        }).catch(function (error) {
            console.error(error);
        });
    }, [query]);

    return (
        <>
            <S.Header>
                <S.Title__Container>
                    <h2>Covid Tracker</h2>
                    <h4>An API integration project!</h4>
                </S.Title__Container>
                <SearchBar setQuery={setQuery}/>
            </S.Header>
            <StatisticsDisplay newCases={newCases}/>
        </>
    )
};

export default CovidTracker;