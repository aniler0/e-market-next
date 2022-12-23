import React, { FC } from 'react';

import Filter from '@components/Filter/Filter';
import Product from '@components/Product/Product';
import Searchbar from '@components/Searchbar/Searchbar';

import * as S from './style';

interface LayoutProps {
    children: React.ReactNode;
    className?: string;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <S.LayoutWrapper>
            <S.Header>
                <S.HeaderContainer>
                    <S.Brand>MegaMark</S.Brand>
                    <Searchbar />
                </S.HeaderContainer>
            </S.Header>
            <S.MainSection>
                <S.ProductFilters>
                    <Filter />
                    <Filter />
                    <Filter />
                </S.ProductFilters>
                <S.Products>{children}</S.Products>
            </S.MainSection>
        </S.LayoutWrapper>
    );
};

export default Layout;
