import styled from '@emotion/styled';

import { ProgressBarprops } from '.';

export const ProgressBarWrapper = styled.div`
    width: 375px;
    height: 0.5rem;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 0.5rem;
`;

export const Foreground = styled.div<{
    width: number;
    backgroundColor: string;
    backgroundImage: string;
}>`
    width: ${({ width }: ProgressBarprops) => width}px;
    height: 8px;
    background-color: ${({ backgroundColor }: ProgressBarprops) =>
        backgroundColor};
    background-image: ${({ backgroundImage }: ProgressBarprops) =>
        backgroundImage};
    transition: width 500ms;
`;
