import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const Title = styled.h1`
    width: 18.5rem;
    font-size: ${theme.fontSize.title};
    font-weight: bold;
`;

export const EmailCheckButton = styled.button`
    width: 4.375rem;
    height: 1.875rem;
    border-radius: 5px;
    padding: 0.5rem;
    color: ${theme.color.white};
    background-color: ${theme.color.gray};
`;

export const EmailButtonWrapper = styled.div`
    ${flexbox({})}
    width: 18.5rem;
    margin-top: 1.5rem;
`;

export const ButtonWrapper = styled.div`
    margin-top: 2rem;
`;

export const SignupForm = styled.form`
    ${flexbox({ dir: 'column', ai: 'center' })}
    gap: 1rem;
`;

export const SignupWrapper = styled.section`
    padding: 7.5rem 0 4.375rem 0;
`;
