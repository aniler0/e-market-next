import React, { FC } from 'react';

import Filter from '@components/Filter/Filter';
import Product from '@components/Product/Product';
import Searchbar from '@components/Searchbar/Searchbar';
import { ExtractFilterPropertiesUtil } from '@utils/extract-filter-properties';

import * as S from './style';

interface LayoutProps {
    children: React.ReactNode;
    className?: string;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    let { brands, sellers } = ExtractFilterPropertiesUtil.getFilterProperties();
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
                    <Filter title="Brands" items={brands} />
                    <Filter title="Sellers" items={sellers} />
                </S.ProductFilters>
                <S.Products>{children}</S.Products>
            </S.MainSection>
        </S.LayoutWrapper>
    );
};

export default Layout;
