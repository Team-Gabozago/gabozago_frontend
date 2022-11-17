import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const Title = styled.div`
    font-size: ${theme.fontSize.lg};
    font-weight: bold;
`;

export const TitleWrppaer = styled.div`
    ${flexbox({ dir: 'column' })};
    gap: 0.5rem;
`;

export const LoginForm = styled.form`
    ${flexbox({ dir: 'column', ai: 'center' })};
    gap: 1rem;
    width: 18.5rem;
    margin-top: 5.375rem;
`;

export const ButtonWrapper = styled.div`
    margin-top: 4rem;
`;

export const LoginWrapper = styled.section`
    ${flexbox({ dir: 'column' })};
    padding: 7.5rem 0 4.375rem 0;
`;
