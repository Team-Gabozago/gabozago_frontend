import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const ButtonText = styled.span<{ color: string }>`
    color: ${props => props.color};
`;

export const PasswordForm = styled.form`
    ${flexbox({ dir: 'column', ai: 'center' })};
    gap: 1rem;
    margin-top: 3.125rem;
`;

export const ButtonWrapper = styled.div`
    position: absolute;
    bottom: 0;
    padding-bottom: 3.25rem;
`;

export const PasswordPage = styled.section`
    ${flexbox({ dir: 'column' })};
    position: relative;
    min-width: 23.4375rem;
    min-height: 50.75rem;
    background-color: ${theme.color.white};
`;
