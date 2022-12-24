import Filter from '@components/Filter/Filter';
import ExtractFilterPropertiesUtil from '@utils/extract-filter-properties';
import React from 'react';

import * as S from './styles';

const Filters = () => {
    let { brands, sellers } = ExtractFilterPropertiesUtil.getFilterProperties();
    return (
        <S.FiltersWrapper>
            <Filter title="Brands" items={brands} />
            <Filter title="Sellers" items={sellers} />
            <Filter title="Price" />
        </S.FiltersWrapper>
    );
};

export default Filters;
