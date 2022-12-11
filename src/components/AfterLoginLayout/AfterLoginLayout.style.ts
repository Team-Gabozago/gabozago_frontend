import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const AfterLoginLayout = styled.section`
    ${flexbox({ dir: 'column' })};
    width: 23.4375rem;
    height: 100vh;
    padding: 0 1.75rem;
    position: relative;
    background-color: ${theme.color.navy};
    overflow-y: auto;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;
