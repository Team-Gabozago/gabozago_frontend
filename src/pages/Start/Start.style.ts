import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

const sportCount = 6;

const cycle = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY((-100% / ${sportCount}) * (${sportCount} - 1));
  }
`;

export const Title = styled.div`
    font-size: ${theme.fontSize.display};
    font-weight: bold;
`;

export const SportWrapper = styled.div`
    height: 3rem;
    overflow: hidden;
`;

export const SportUL = styled.ul`
    animation: ${cycle} ${sportCount}s infinite forwards;
`;

export const SportLI = styled.li`
    ${flexbox({ ai: 'center' })}
    height: 1rem;
    padding: 1.5rem 0;
    width: 12rem;
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
    height: 100vh;
`;

export const StartWrapper = styled.section`
    ${flexbox({ dir: 'column', jc: 'space-between' })};
    height: 100vh;
    padding: 7.5rem 0 4.375rem 0;
`;
