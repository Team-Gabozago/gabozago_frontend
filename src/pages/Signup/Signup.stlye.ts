import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const Title = styled.h1`
    width: 100%;
    font-size: ${theme.fontSize.title};
    font-weight: bold;
`;

export const ButtonWrapper = styled.div`
    margin-top: 2rem;
`;

export const SignupWrapper = styled.section`
    ${flexbox({ dir: 'column', ai: 'center' })}
    gap: 1rem;
    width: 375px;
    height: 812px;
    padding: 2rem;
`;
