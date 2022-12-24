import React, { FC } from 'react';

import * as S from './styles';

interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
    label: string;
}

const Checkbox: FC<CheckboxProps> = ({ label, ...props }) => {
    return (
        <S.CheckboxContainer>
            <S.Checkbox
                type="checkbox"
                name={`checkbox-${label}`}
                id={`checkbox-${label}`}
                {...props}
            ></S.Checkbox>
            <S.Label htmlFor={`checkbox-${label}`}>{label}</S.Label>
        </S.CheckboxContainer>
    );
};

export default Checkbox;
