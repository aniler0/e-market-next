import React from 'react';

import { SearchIcon } from '@components/icons';

import * as S from './styles';

const Searchbar = () => {
    return (
        <S.SearchContainer>
            <SearchIcon />
            <S.SearchInput placeholder="Search essentials, groceries and more..." />
        </S.SearchContainer>
    );
};

export default Searchbar;
