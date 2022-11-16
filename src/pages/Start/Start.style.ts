import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

const cycle = keyframes`
// 수정필요.
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY((-100% / 6) * (6 - 1));
  }
`;

export const TitleText = styled.div`
    font-size: ${theme.fontSize.display};
    font-weight: bold;
`;

export const SportWrapper = styled.div`
    height: 40px;
    overflow: hidden;
`;

export const SportUL = styled.ul`
    height: 1rem;
    animation: ${cycle} 1.5s 1s infinite forwards;
`;

export const SportLI = styled.li`
    height: 20px;
    padding: 15px 0;
    width: 10rem;
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
