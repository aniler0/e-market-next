import React, { FC } from 'react';

import * as S from './styles';

interface FilterProps {
    title: string;
    items: string[];
}

const Filter: FC<FilterProps> = ({ title, items }) => {
    return (
        <S.FilterWrapper>
            <S.FilterTitle>{title}</S.FilterTitle>
            {items.map((item, key) => (
                <S.FilterItem key={key}>
                    <S.Checkbox
                        type="checkbox"
                        name="checkbox"
                        id="checkbox-id"
                        value="value"
                    />
                    <S.Label htmlFor="checkbox-id">{item}</S.Label>
                </S.FilterItem>
            ))}
        </S.FilterWrapper>
    );
};

export default Filter;
