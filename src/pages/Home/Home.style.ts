import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const Title = styled.h1`
    color: ${theme.color.silver};
    font-size: ${theme.fontSize.title};
    margin: 2rem 0 1.25rem 0;
    font-family: 'GangwonEduPower';
    font-weight: bold;
    line-height: 2.2rem;
`;

export const Contents = styled.div`
    width: 23.4375rem;
    padding: 0 1.75rem;
`;

export const HomePage = styled.section`
    ${flexbox({ dir: 'column' })};
    min-width: 23.4375rem;
    height: 100vh;
    font-size: ${theme.fontSize.lg};
    background-color: ${theme.color.navy};
`;
