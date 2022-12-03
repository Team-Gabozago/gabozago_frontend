import { keyframes } from '@emotion/react';

export const fadeInDown = keyframes`
    0% {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
    }
    to {
        opacity: 1;
        transform: translateZ(0);
    }
`;
