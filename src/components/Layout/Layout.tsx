import React, { FC } from 'react';

import { Input } from '@components/common';
import Filter from '@components/Filter/Filter';
import { SearchIcon } from '@components/icons';
import ExtractFilterPropertiesUtil from '@utils/extract-filter-properties';

import * as S from './styles';

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
                    <Input
                        placeholder="Search essentials, groceries and more..."
                        icon={<SearchIcon />}
                    />
                </S.HeaderContainer>
            </S.Header>
            <S.MainSection>
                <S.ProductFilters>
                    <Filter title="Brands" items={brands} />
                    <Filter title="Sellers" items={sellers} />
                    <Filter title="Price" items={[]} />
                </S.ProductFilters>
                <S.Products>{children}</S.Products>
            </S.MainSection>
        </S.LayoutWrapper>
    );
};

export default Layout;
