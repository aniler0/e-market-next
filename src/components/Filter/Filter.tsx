import { Checkbox, Input } from '@components/common';
import React, { FC } from 'react';

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
                <S.PriceFilter>
                    <Input
                        placeholder="Min. Price"
                        style={{ marginBottom: '8px' }}
                    />
                    <Input
                        placeholder="Max. Price"
                        style={{ marginBottom: '8px' }}
                    />
                    <S.Button>Apply</S.Button>
                </S.PriceFilter>
            )}
        </S.FilterWrapper>
    );
};

export default Filter;
