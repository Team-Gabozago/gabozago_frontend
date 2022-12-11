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

export const NotFoundArea = styled.div`
    ${flexbox({ jc: 'center', ai: 'center' })};
    height: 100%;
    line-height: 1.5rem;
    color: ${theme.color.silver};
    font-size: ${theme.fontSize.xs};
`;

export const HomePage = styled.section``;
