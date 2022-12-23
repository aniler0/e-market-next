import Image from 'next/image';
import styled from 'styled-components';

export const Product = styled.div`
    background-color: rgb(255, 255, 255);
    padding: 10px;
    border-radius: 4px;
    height: 330px;
    width: 200px;
    max-width: 300px;
    transition: all 0.4s ease 0s;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(51 76 103) 0px 4px 12px -5px;
    }
`;

export const ImageWrapper = styled.div`
    width: 80%;
    margin: 10px auto;
    position: relative;

    > div {
        position: unset !important;
    }
`;

export const StyledImage = styled(Image)`
    object-fit: scale-down;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
`;

export const Offer = styled.div`
    margin-top: 4px;
    margin-bottom: 4px;
    transition: all 0.4s ease 0s;
    :hover {
        padding-left: 9px;
        background-color: rgb(245, 245, 245);
    }
`;
export const ProductInfo = styled.div``;
export const ProductTitle = styled.h2`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    text-align: left;
    margin: 0 auto;
    font-weight: bolder;
    color: rgb(62, 65, 69);
    text-decoration: none;
    display: inline-block;
    height: 35px;
    line-height: 16px;
`;
export const MerchantName = styled.h2`
    width: 100%;
    height: 15px;
    font-size: 11px;
    font-weight: 600;
    text-align: left;
    margin-right: 10px;
    color: rgb(73, 144, 226);
`;
export const ProductPrice = styled.p`
    font-size: 15px;
    font-weight: bold;
    text-align: left;
    color: rgb(62, 65, 69);
`;
