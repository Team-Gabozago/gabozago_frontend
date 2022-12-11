import styled from '@emotion/styled';

import theme from '@/styles/theme';

export const Box = styled.div`
    padding: 1rem;
    cursor: pointer;
`;

export const SelectAreaBox = styled.section`
    width: 20.375rem;
    height: 30rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    overflow-y: auto;
    background-color: ${theme.color.white};
`;
