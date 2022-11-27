import React, { memo } from 'react';

import * as S from './Button.style';

import theme from '@/styles/theme';
import { OverridableProps } from '@/types/abstract';

export type TypeButtonSize = 'xs' | 'sm' | 'md' | 'lg';

type ButtonProps<T extends React.ElementType> = OverridableProps<
    T,
    {
        children: React.ReactNode;
        /**
         * 버튼 type
         * default size: 'md'
         */
        size?: TypeButtonSize;
        /**
         * background Color
         * (RGB 16진수 형태로 입력 Ex. #000)
         * default value : #000
         */
        backgroundColor?: string;
        backgroundImage?: string;
        disabled?: boolean;
    }
>;

const Button = memo(
    <T extends React.ElementType = 'button'>({
        children,
        size = 'md',
        backgroundColor = theme.color.white,
        backgroundImage,
        disabled = false,
        as,
        ...restProps
    }: ButtonProps<T>) => (
        <S.Button
            as={as ?? 'button'}
            type="button"
            size={size}
            backgroundColor={backgroundColor}
            backgroundImage={backgroundImage}
            disabled={disabled}
            {...restProps}
        >
            {children}
        </S.Button>
    )
);

export default Button;
