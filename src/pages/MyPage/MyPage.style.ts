import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const MoveText = styled.span`
    cursor: pointer;
`;

export const Box = styled.div`
    ${flexbox({ ai: 'center' })}
    height: 4.75rem;
    border-bottom: 1px solid ${theme.color.lightGray};
`;

export const BottomBox = styled.div`
    ${flexbox({ dir: 'column' })}
`;

export const MyPage = styled.section`
    ${flexbox({ dir: 'column' })};
    min-width: 23.4375rem;
    padding: 1.75rem 1rem 4.375rem 1rem;
    position: relative;
    background-color: ${theme.color.white};
`;
