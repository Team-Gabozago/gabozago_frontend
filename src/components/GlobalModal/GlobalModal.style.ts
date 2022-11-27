import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    background-color: #000;
    opacity: 0.6;
`;

const selectSize = (size: string) => {
    switch (size) {
        case 'small':
            return css`
                width: 20rem;
                height: 12rem;
            `;
        case 'medium':
            return css`
                width: 20rem;
                height: 28.25rem;
            `;
        case 'large':
            return css`
                width: 32rem;
                height: 40rem;
            `;
        default:
            throw new Error(`${size} type is not found`);
    }
};

export const GlobalModal = styled.section<{ size: string }>`
    ${({ size }) => selectSize(size)}
    ${flexbox({ dir: 'column', ai: 'center' })}
  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${theme.color.white};
    z-index: 999;
    border-radius: 10px;
`;
