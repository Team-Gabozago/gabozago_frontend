import React, { forwardRef, memo } from 'react';

import * as S from './Input.style';

import I from '@/components/common/Icons';
import theme from '@/styles/theme';
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
        essential?: boolean;
        disabled?: boolean;
        error?: boolean;
        success?: boolean;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        onClear: () => void;
        autoFocus?: boolean;
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
                essential = false,
                disabled = false,
                error = false,
                success = false,
                onChange,
                onClear,
                autoFocus = true,
                ...restProps
            }: InputProps<T>,
            ref: React.ForwardedRef<HTMLInputElement>
        ) => (
            <S.InputLayer
                width={width}
                height={height}
                disabled={disabled}
                active={value.length > 0}
                error={error}
                success={success}
            >
                <S.Label htmlFor={name}>
                    <S.LabelTextWrapper>
                        <span>{name}</span>
                        {essential && <S.Asterisk>*</S.Asterisk>}
                        {success && (
                            <I.Check
                                fontSize={0.375}
                                color={theme.color.blue}
                            />
                        )}
                    </S.LabelTextWrapper>
                </S.Label>
                <S.Input
                    as={as ?? 'input'}
                    type={type}
                    tabindex={tabindex}
                    ref={ref}
                    value={value}
                    disabled={disabled}
                    {...restProps}
                    autoFocus={autoFocus}
                    onChange={onChange}
                />
                <S.ClearButton type="button" onClick={onClear} tabIndex={-1}>
                    <I.Cancel
                        color={
                            error
                                ? theme.color.errorText
                                : success
                                ? theme.color.blue
                                : theme.color.gray
                        }
                    />
                </S.ClearButton>
                <S.PlaceHolder>{placeholder}</S.PlaceHolder>
            </S.InputLayer>
        )
    )
);

export default Input;
