import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { TypeButtonSize } from '.';

import { inlineFlexbox } from '@/styles/mixin';

const selectTypes = (size: string) => {
    switch (size) {
        case 'lg':
            return css`
                width: 21.25rem;
                height: 4rem;
            `;
        case 'md':
            return css`
                width: 7rem;
                height: 3.4375rem;
            `;
        case 'sm':
            return css`
                width: 7rem;
                height: 2rem;
            `;
        default:
            throw new Error(`${size} type is not found`);
    }
};

export const Button = styled.button<{
    size: TypeButtonSize;
    backgroundColor?: string;
}>`
    ${inlineFlexbox({ jc: 'center', ai: 'center' })}
    border-radius: 1rem;
    background-color: ${props => props.backgroundColor};
    cursor: pointer;
    ${({ size }) => selectTypes(size)};
    &:hover {
    }
    &:focus {
    }
    :disabled {
        background-color: #e9ebee;
        color: #c5c8ce;
    }
`;
