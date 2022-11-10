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
    active?: boolean;
    dragEnter?: boolean;
}>`
    ${inlineFlexbox({ dir: 'column', jc: 'center' })};
    position: relative;
    width: ${props => props.width}rem;
    height: ${props => props.height}rem;
    border-bottom: 1px solid ${theme.color.gray};
    overflow: hidden;
    transform: translate3d(0, 2rem, 0);
    transition: all 300ms;
    &:focus-within {
        border-bottom: 1px solid ${theme.color.inputFocus};
    }

    ${({ disabled }) =>
        disabled &&
        `
      opacity: 0.5;
    `};

    ${({ active }) =>
        active &&
        `${PlaceHolder} {
            transform: translate3d(0, -3rem, 0);
        }`};
`;
