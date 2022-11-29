import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const Title = styled.h1`
    font-size: ${theme.fontSize.sm};
    color: ${theme.color.lightBlack};
`;

export const Sport = styled.div`
    ${flexbox({ ai: 'center' })};
    padding: 0.75rem;
    height: 1.75rem;
    border-radius: 1.25rem;
    border: 1px solid ${theme.color.gray};
`;

export const SportWrapper = styled.div`
    ${flexbox({})};
    gap: 0.5rem;
`;

export const PlusSportButton = styled.button`
    width: 2rem;
    height: 1.75rem;
    border-radius: 1.25rem;
    background-color: ${theme.color.gray};
    color: ${theme.color.white};
`;

export const LikeSport = styled.div`
    ${flexbox({ dir: 'column' })};
    gap: 1.25rem;
    padding: 1.5rem 1rem;
    border-bottom: 1px solid ${theme.color.silver};
`;
