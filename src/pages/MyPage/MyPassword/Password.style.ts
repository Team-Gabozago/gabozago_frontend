import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';

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
    bottom: 5rem;
`;

export const PasswordPage = styled.section``;
