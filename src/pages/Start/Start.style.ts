import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const Title = styled.h1``;

export const TitleText = styled.div`
    font-size: ${theme.fontSize.display};
    font-weight: bold;
`;

export const TitleWrppaer = styled.div`
    ${flexbox({ dir: 'column' })};
    gap: 1.5rem;
`;

export const ButtonWrapper = styled.div`
    ${flexbox({ dir: 'column' })};
    gap: 0.5rem;
`;

export const LogoWrapper = styled.section`
    ${flexbox({ dir: 'column', ai: 'center', jc: 'center' })};
    width: 100vw;
    height: 100vh;
`;

export const StartWrapper = styled.section`
    ${flexbox({ dir: 'column', jc: 'space-between' })};
    height: 100vh;
    padding: 7.5rem 0 4.375rem 0;
`;
