import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const Title = styled.h1`
    width: 18.5rem;
    font-size: ${theme.fontSize.title};
    font-weight: bold;
`;

export const ButtonWrapper = styled.div`
    margin-top: 2rem;
`;

export const SignupForm = styled.form`
    ${flexbox({ dir: 'column', ai: 'center' })}
    gap: 1rem;
`;

export const SignupWrapper = styled.section`
    padding: 2rem;
`;
