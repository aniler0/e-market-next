import React from 'react';

import * as S from './styles';

const Product = () => {
    return (
        <S.Product>
            {/* <S.ProductImage /> */}
            <S.ProductInfo>
                <S.ProductTitle>Product Title</S.ProductTitle>
                <S.ProductPrice>$ 19.99</S.ProductPrice>
            </S.ProductInfo>
        </S.Product>
    );
};

export default Product;
