import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const MoveText = styled.span`
    padding: 0 1rem;
    user-select: none;
`;

export const MyWriteContent = styled.div`
    width: 100%;
    height: 100%;
    ${flexbox({ jc: 'space-between', ai: 'center' })}
    cursor: pointer;
    padding-right: 1.75rem;
`;

export const MoveSubContent = styled.div`
    ${flexbox({ dir: 'column' })};
    border-bottom: 1px solid ${theme.color.silver};
`;

export const Box = styled.div`
    ${flexbox({ ai: 'center' })}
    height: 4.75rem;
    border-bottom: 1px solid ${theme.color.silver};
`;

export const ButtonWrapper = styled.div`
    ${flexbox({ jc: 'center' })};
`;

export const MyPage = styled.section`
    ${flexbox({ dir: 'column' })};
    min-width: 23.4375rem;
    min-height: 50.75rem;
    position: relative;
    background-color: ${theme.color.white};
`;
