import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const CommentTotalText = styled.span`
    padding-top: 0.75rem;
    border-top: 1px solid ${theme.color.gray};
    font-size: ${theme.fontSize.xs};
    color: ${theme.color.label};
`;

export const CommentImg = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
`;

export const CommentInput = styled.input`
    width: 20.375rem;
    padding: 0.8rem;
    border-bottom: 1px solid ${theme.color.gray};
`;

export const CommentAddButton = styled.button`
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;
    color: ${theme.color.gray};
`;

export const CreateComment = styled.div`
    ${flexbox({ ai: 'center' })};
    gap: 1.5rem;
    position: relative;
    margin-top: 2rem;
`;
