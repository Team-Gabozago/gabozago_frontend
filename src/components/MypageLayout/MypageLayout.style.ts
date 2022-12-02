import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const MypageLayout = styled.section`
    ${flexbox({ dir: 'column' })};
    width: 23.4375rem;
    height: 100vh;
    position: relative;
    background-color: ${theme.color.white};
`;
