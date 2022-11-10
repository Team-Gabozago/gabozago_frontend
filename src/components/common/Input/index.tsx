import React, {
    forwardRef,
    memo,
} from 'react';

import * as S from './Input.style';

import { OverridableProps } from '@/types/abstract';


type InputProps<T extends React.ElementType> = OverridableProps<
    T,
    {
        type?: string;
        name: string;
        width?: number;
        height?: number;
        placeholder?: string;
        tabindex?: string;
        value: string;
        disabled?: boolean;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }
>;

export const Input = memo(
    forwardRef(
        <T extends React.ElementType = 'input'>(
            {
                as,
                type = 'text',
                name,
                width = 18.5,
                height = 3.25,
                placeholder,
                tabindex,
                value = '',
                disabled = false,
                onChange,
                ...restProps
            }: InputProps<T>,
            ref: React.ForwardedRef<HTMLInputElement>,
        ) => (
            <S.InputLayer
                width={width}
                height={height}
                disabled={disabled}
                active={value.length > 0}
            >
                <S.Label htmlFor={name}>
                    <span>{name}</span>
                </S.Label>
                <S.Input as={as ?? 'input'} type={type} tabindex={tabindex} ref={ref} value={value} disabled={disabled} {...restProps} autoFocus onChange={onChange} />
                <S.PlaceHolder>{placeholder}</S.PlaceHolder>
            </S.InputLayer>
        )
    ),
);

export default Input