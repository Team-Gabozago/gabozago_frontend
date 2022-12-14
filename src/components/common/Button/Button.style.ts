import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { TypeButtonSize } from '.';

import { inlineFlexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

interface ButtonProps {
    size: TypeButtonSize;
    backgroundColor?: string;
    backgroundImage?: string;
}

const selectTypes = (size: string) => {
    switch (size) {
        case 'lg':
            return css`
                width: 21.25rem;
                height: 4rem;
            `;
        case 'md':
            return css`
                width: 20.375rem;
                height: 3.25rem;
            `;
        case 'sm':
            return css`
                width: 7.75rem;
                height: 3rem;
            `;
        case 'xs':
            return css`
                width: 4rem;
                height: 1.875rem;
            `;
        default:
            throw new Error(`${size} type is not found`);
    }
};

export const Button = styled.button<{
    size: TypeButtonSize;
    backgroundColor?: string;
    backgroundImage?: string;
}>`
    ${inlineFlexbox({ jc: 'center', ai: 'center' })}
    border-radius: 3.125rem;
    background-color: ${({ backgroundColor }: ButtonProps) => backgroundColor};
    background-image: ${({ backgroundImage }: ButtonProps) => backgroundImage};
    cursor: 'pointer';
    ${({ size }: ButtonProps) => selectTypes(size)};
    &:hover {
    }
    &:focus {
    }
    :disabled {
        background-color: ${theme.color.white};
        color: ${theme.color.black};
        border: 1px solid ${theme.color.gray};
    }
`;
