import React, { FC } from 'react';

import * as S from './styles';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
}

const Input: FC<InputProps> = ({ icon, ...props }) => {
    return (
        <S.InputContainer>
            {icon}
            <S.Input {...props} />
        </S.InputContainer>
    );
};

export default Input;
