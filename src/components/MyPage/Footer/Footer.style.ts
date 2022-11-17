import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const Footer = styled.footer`
    ${flexbox({ ai: 'center' })};
    gap: 1rem;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 23.4375rem;
    height: 3.5rem;
    padding: 0 2.25rem;
    background-color: ${theme.color.lightGray};
`;
