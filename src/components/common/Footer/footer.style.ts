import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const Footer = styled.footer`
    width: 100%;
    max-width: 375px;
    height: 3.5rem;
    position: fixed;
    bottom: 0;
    border-radius: 10px 10px 0 0;
    background-color: ${theme.color.darkGray};
`;

export const LinkUl = styled.ul`
    ${flexbox({ ai: 'center' })};
    height: 100%;
    li {
        flex: 1;
        text-align: center;
    }
`;
