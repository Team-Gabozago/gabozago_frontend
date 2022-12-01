import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const HomePage = styled.section`
    ${flexbox({ dir: 'column' })};
    min-width: 23.4375rem;
    height: 100vh;
    font-size: ${theme.fontSize.lg};
    background-color: ${theme.color.navy};
`;
