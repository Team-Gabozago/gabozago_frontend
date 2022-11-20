import styled from '@emotion/styled';

import { inlineFlexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const Label = styled.label`
    color: ${theme.color.label};
    font-size: ${theme.fontSize.xs};
    cursor: pointer;
`;

export const Input = styled.input`
    height: 100%;
    background-color: ${theme.color.transparent};
    font-size: ${theme.fontSize.md};
    &:disabled {
        cursor: not-allowed;
    }
`;

export const ClearButton = styled.button<{
    error?: boolean;
    success?: boolean;
}>`
    position: absolute;
    top: 50%;
    right: 10px;
    color: ${theme.color.gray};

    ${({ error }) => error && `color: ${theme.color.errorText};`};
`;

export const PlaceHolder = styled.div`
    bottom: 8px;
    position: absolute;
    font-size: ${theme.fontSize.xs};
    color: ${theme.color.gray};

    pointer-events: none;
    transition: font-size 150ms, transform 150ms;
`;

export const InputLayer = styled.div<{
    width: number;
    height: number;
    disabled?: boolean;
    error?: boolean;
    success?: boolean;
    active?: boolean;
}>`
    ${inlineFlexbox({ dir: 'column', jc: 'center' })};
    position: relative;
    width: ${props => props.width}rem;
    height: ${props => props.height}rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid ${theme.color.gray};
    overflow: hidden;
    transform: translate3d(0, 2rem, 0);
    transition: all 300ms;

    &:focus-within {
        border-bottom: 1px solid ${theme.color.blue};
        caret-color: ${theme.color.blue};
    }

    &:focus-within button {
        color: ${theme.color.blue};
    }

    ${({ active }) =>
        active && `${PlaceHolder} { transform: translate3d(0, -3rem, 0) }`};

    ${({ disabled }) => disabled && `opacity: 0.5;`};

    ${({ error }) =>
        error &&
        `
            border-bottom: 1px solid ${theme.color.errorText} !important;
            caret-color: 1px solid ${theme.color.errorText} !important;
    `};
`;
