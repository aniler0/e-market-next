import Image from 'next/image';
import styled from 'styled-components';

export const Product = styled.div`
    width: 200px;
    height: 295px;
    background: #f5f5f5;
    border: 1px solid #ededed;
    border-radius: 16px;
    margin-bottom: 20px;
    margin-left: 30px;
`;
export const ProductImage = styled(Image)``;
export const ProductInfo = styled.div``;
export const ProductTitle = styled.h2``;
export const ProductPrice = styled.p``;
