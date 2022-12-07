import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const Comment = styled.div`
    width: 20.375rem;
    height: 9.25rem;
    border-bottom: 1px solid ${theme.color.silver};
`;

export const CommentList = styled.div`
    ${flexbox({ dir: 'column' })};
`;
