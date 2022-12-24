import React, { FC } from 'react';

import { ProductsDataModel } from '@models/products-data.model';

import * as S from './styles';

const Product: FC<ProductsDataModel> = ({ id, imageUrl, title, topOffers }) => {
    return (
        <S.Product>
            <S.ImageWrapper>
                <S.StyledImage src={imageUrl} alt={`${id}-image`} fill />
            </S.ImageWrapper>
            <S.ProductInfo>
                <S.ProductTitle>{title}</S.ProductTitle>
                {topOffers.map((offer, key) => (
                    <S.Offer key={key}>
                        <S.MerchantName>{offer.merchant.name}</S.MerchantName>
                        <S.ProductPrice>{offer.price} TL</S.ProductPrice>
                    </S.Offer>
                ))}
            </S.ProductInfo>
        </S.Product>
    );
};

export default Product;
