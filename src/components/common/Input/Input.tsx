import React, { FC } from 'react';

import * as S from './styles';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
    name: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
    icon,
    name,
    style,
    handleChange,
    ...props
}) => {
    return (
        <S.InputContainer style={style}>
            {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
            <S.Input name={name} onChange={handleChange} {...props} />
        </S.InputContainer>
    );
};

export default Input;
