import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const ModalTitle = styled.h1`
    font-size: ${theme.fontSize.md};
    font-weight: bold;
`;

export const ModalDescription = styled.span`
    font-size: ${theme.fontSize.xs};
    color: ${theme.color.label};
`;

export const ModalButton = styled.button`
    width: 16.625rem;
    height: 3rem;
    border-radius: 10px;
    background-color: ${theme.color.blue};
    color: ${theme.color.white};
`;

export const ModalWrapper = styled.div`
    height: 12rem;
    ${flexbox({ dir: 'column', jc: 'space-between', ai: 'center' })};
    gap: 2rem;
    padding: 1.875rem 1.75rem 1.625rem;
`;
