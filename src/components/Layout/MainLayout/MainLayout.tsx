import React, { FC } from 'react';

import Filters from '../Filters/Filters';
import Header from '../Header/Header';
import * as S from './styles';

interface MainLayoutProps {
    children: React.ReactNode;
    className?: string;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return (
        <S.LayoutWrapper>
            <Header />
            <S.MainSection>
                <Filters />
                <S.Products>{children}</S.Products>
            </S.MainSection>
        </S.LayoutWrapper>
    );
};

export default MainLayout;
