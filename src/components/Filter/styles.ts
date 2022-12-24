import styled from 'styled-components';

export const FilterWrapper = styled.div`
    padding: 14px 16px;
    border-bottom: 1px solid #e6e6e6;
    &:last-child {
        border-bottom: none;
    }
`;
export const FilterTitle = styled.h3`
    color: #141414;
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: normal;
    text-transform: none;
`;
export const FilterItem = styled.div`
    display: flex;
    align-items: center;
`;

export const PriceFilter = styled.div``;
export const Button = styled.button`
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid black;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    :hover {
        background-color: #f3f9fb;
    }
    :active {
        background-color: #cfe8ff;
    }
`;
