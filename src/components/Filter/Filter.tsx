import React, { FC } from 'react';

import { Checkbox, Input } from '@components/common';

import * as S from './styles';

interface FilterProps {
    title: string;
    items?: string[];
}

const Filter: FC<FilterProps> = ({ title, items }) => {
    return (
        <S.FilterWrapper>
            <S.FilterTitle>{title}</S.FilterTitle>
            {items ? (
                items.map((item, key) => <Checkbox key={key} label={item} />)
            ) : (
                <Input />
            )}
        </S.FilterWrapper>
    );
};

export default Filter;
