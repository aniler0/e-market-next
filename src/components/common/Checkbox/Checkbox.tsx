import React, { FC } from 'react';

import * as S from './styles';

interface CheckboxProps {
    label: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<CheckboxProps> = ({ label, handleChange }) => {
    return (
        <S.CheckboxContainer>
            <S.Checkbox
                type="checkbox"
                name={label}
                id={`checkbox-${label}`}
                onChange={handleChange}
            ></S.Checkbox>
            <S.Label htmlFor={`checkbox-${label}`}>{label}</S.Label>
        </S.CheckboxContainer>
    );
};

export default Checkbox;
