import styled from 'styled-components';

export const FilterWrapper = styled.div`
    padding: 14px 40px 14px 16px;
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
export const Checkbox = styled.input`
    transform: scale(1.2);
`;
export const Label = styled.label`
    padding-left: 10px;
    font-size: 14px;
    font-weight: 400;
`;
