import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const MoveText = styled.span`
    padding: 0 1rem;
    cursor: pointer;
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
    padding: 1.75rem 0 4.375rem 0;
    position: relative;
    background-color: ${theme.color.white};
`;
