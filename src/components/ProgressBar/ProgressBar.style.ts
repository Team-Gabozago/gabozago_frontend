import styled from '@emotion/styled';

import theme from '@/styles/theme';

export const ProgressBarWrapper = styled.div`
    width: 375px;
    height: 0.5rem;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 0.5rem;
`;

export const Foreground = styled.div<{ width: number }>`
    width: ${props => props.width}px;
    height: 8px;
    background-color: ${theme.color.silver};
    transition: width 500ms;
`;
