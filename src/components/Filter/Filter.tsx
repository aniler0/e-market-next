import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';

import { Checkbox, Input } from '@components/common';
import { FilterStateType, PriceModel } from '@models/active-filters.model';
import ActiveFiltersUtil from '@utils/add-active-filter';

import * as S from './styles';

interface FilterProps {
    title: string;
    items?: string[];
}

let activeFilters = ActiveFiltersUtil.getActiveFilters();
let prices = {};

const Filter: FC<FilterProps> = ({ title, items }) => {
    const { addActiveFilter } = ActiveFiltersUtil;
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (title === 'Price') {
            if (name === 'minPrice') {
                prices = {
                    ...prices,
                    min: value.length > 0 ? +value : null,
                };
            } else if (name === 'maxPrice') {
                prices = {
                    ...prices,
                    max: value.length > 0 ? +value : null,
                };
            }
        } else {
            addActiveFilter(title, name, activeFilters as FilterStateType);
        }
    };
    const handleOnClick = () => {
        addActiveFilter(
            title,
            prices as PriceModel,
            activeFilters as FilterStateType,
        );
    };

    return (
        <S.FilterWrapper>
            <S.FilterTitle>{title}</S.FilterTitle>
            {items ? (
                items.map((item, key) => (
                    <Checkbox
                        key={key}
                        label={item}
                        handleChange={handleChange}
                    />
                ))
            ) : (
                <S.PriceFilter>
                    <Input
                        handleChange={handleChange}
                        name="minPrice"
                        placeholder="Min. Price"
                        style={{ marginBottom: '8px' }}
                    />
                    <Input
                        name="maxPrice"
                        handleChange={handleChange}
                        placeholder="Max. Price"
                        style={{ marginBottom: '8px' }}
                    />
                    <S.Button onClick={handleOnClick}>Apply</S.Button>
                </S.PriceFilter>
            )}
        </S.FilterWrapper>
    );
};

export default Filter;
