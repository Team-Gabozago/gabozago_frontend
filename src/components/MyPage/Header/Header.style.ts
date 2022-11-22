import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const BackButtonWrapper = styled.div`
    cursor: pointer;
`;

export const Title = styled.h1`
    font-size: ${theme.color.lightBlack};
    margin: 0 auto;
`;

export const Header = styled.header`
    ${flexbox({ ai: 'center' })};
    padding: 1rem;
    height: 3.875rem;
    background-color: ${theme.color.navy};
    color: ${theme.color.white};
`;
