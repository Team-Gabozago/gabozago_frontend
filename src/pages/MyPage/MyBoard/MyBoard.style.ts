import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const SubTitle = styled.div`
    ${flexbox({ jc: 'center', ai: 'center' })};
    padding: 1.75rem 0;
    color: ${theme.color.darkGray};
    font-size: ${theme.fontSize.xs};
`;

export const MyLikeContent = styled.div`
    padding: 0 1.75rem;
`;

export const EndPoint = styled.div`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${theme.color.gray};
`;

export const EndPointWrapper = styled.div`
    ${flexbox({ jc: 'center' })};
    width: 100%;
    margin-top: 3.75rem;
`;

export const MyLikePage = styled.section`
    ${flexbox({ dir: 'column' })};
    position: relative;
    min-width: 23.4375rem;
    height: 100vh;
    background-color: ${theme.color.navy};
`;
