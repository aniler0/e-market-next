import { Input } from '@components/common';
import { SearchIcon } from '@components/icons';
import React from 'react';

import * as S from './styles';

const Header = () => {
    return (
        <S.HeaderWrapper>
            <S.HeaderContainer>
                <S.Banner>MegaMark</S.Banner>
                <Input
                    placeholder="Search essentials, groceries and more..."
                    icon={<SearchIcon />}
                />
            </S.HeaderContainer>
        </S.HeaderWrapper>
    );
};

export default Header;
