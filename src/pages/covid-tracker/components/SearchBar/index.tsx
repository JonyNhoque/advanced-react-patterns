import React, { useState } from "react";
import S from "./style";

type TSearchBarQuery = {
    setQuery: (query: string) => void
}

const SearchBar: React.FC <TSearchBarQuery> = ({setQuery}) => {

    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchQuery = (e: any) => {
        setSearchQuery(e.currentTarget.value);
    };

    const handleSearch = () => {
        setQuery(searchQuery);
    };

    return (
        <S.SearchBar>
            <S.Input placeholder="Procurar por país" onChange={handleSearchQuery}/>
            <S.SearchButton onClick={() => handleSearch()}>Buscar</S.SearchButton>
        </S.SearchBar>
    )
};

export default SearchBar;