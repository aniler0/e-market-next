import React, { FC } from 'react';

import * as S from './styles';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
}

const Input: FC<InputProps> = ({ icon, style, ...props }) => {
    return (
        <S.InputContainer style={style}>
            {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
            <S.Input {...props} />
        </S.InputContainer>
    );
};

export default Input;
