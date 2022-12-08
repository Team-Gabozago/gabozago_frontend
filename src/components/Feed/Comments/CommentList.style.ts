import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const Comment = styled.div`
    width: 20.375rem;
    height: 9.25rem;
    border-bottom: 1px solid ${theme.color.silver};
`;

export const Content = styled.div`
    padding: 0.75rem 0;
`;

export const ButtonWrapper = styled.div`
    ${flexbox({})};
    gap: 1rem;
`;

export const Button = styled.button`
    font-size: ${theme.fontSize.xs};
    color: ${theme.color.label};
`;

export const Header = styled.header`
    ${flexbox({ jc: 'space-between', ai: 'center' })};
`;

export const CommentList = styled.div`
    ${flexbox({ dir: 'column' })};
    gap: 1.5rem;
`;
