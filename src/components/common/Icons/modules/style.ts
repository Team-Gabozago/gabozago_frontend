import styled from '@emotion/styled';

import theme from '@/styles/theme';

/**
 * path 1개
 */
export const Icon = styled.i<{
    fontSize?: number;
    color?: string;
}>`
    ${({ fontSize }) => `font-size: ${fontSize}rem`};
    ${({ color }) => `color: ${color}`};
`;

/**
 * Logo
 * color: #14142b
 */
export const Logo = styled.i<{ fontSize: number }>`
    color: ${theme.color.black};
    font-size: ${({ fontSize }) => fontSize}rem;
`;