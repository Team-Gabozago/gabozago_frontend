import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const LikeAddButton = styled.button`
    width: 6.125rem;
    height: 2.125rem;
    background-color: ${theme.color.silver};
    font-size: ${theme.fontSize.xs};
    font-weight: bold;
    border-radius: 20px;
`;

export const Title = styled.h1`
    color: ${theme.color.silver};
    font-size: ${theme.fontSize.title};
    margin: 2rem 0 1.25rem 0;
    font-family: 'GangwonEduPower';
    font-weight: bold;
    line-height: 2.2rem;
`;

export const SportWrapper = styled.div`
    ${flexbox({})};
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: 3rem;
`;

export const SportButton = styled.button<{ clicked: boolean }>`
    padding: 0 0.75rem;
    height: 1.75rem;
    border-radius: 1.25rem;
    color: ${theme.color.silver};
    font-size: ${theme.fontSize.xs};
    border: 1px solid
        ${props => (props.clicked ? theme.color.blue : theme.color.gray)};
    background-color: ${props => props.clicked && theme.color.blue};
`;

export const PlusSportButton = styled.button`
    width: 2rem;
    height: 1.75rem;
    border-radius: 20px;
    background-color: ${theme.color.lightNavy};
`;

export const NoLikeText = styled.span`
    text-align: center;
    color: ${theme.color.silver};
    font-size: ${theme.fontSize.xs};
    line-height: 1.2rem;
    margin-bottom: 1rem;
`;

export const NoLikeContent = styled.div`
    ${flexbox({ dir: 'column', jc: 'center', ai: 'center' })};
    height: 100%;
`;

export const Contents = styled.div`
    width: 23.4375rem;
    padding: 0 1.75rem;
`;

export const LikePage = styled.section`
    ${flexbox({ dir: 'column' })};
    min-width: 23.4375rem;
    height: 100vh;
    background-color: ${theme.color.navy};
`;
