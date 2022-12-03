import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const Title = styled.h1`
    color: ${theme.color.white};
    margin-left: 1rem;
`;

export const Box = styled.div`
    ${flexbox({})};
    gap: 1rem;
`;

export const Header = styled.header`
    ${flexbox({ jc: 'space-between', ai: 'center' })};
    padding: 25.5px 0 20.5px 0;
    border-bottom: 1px solid ${theme.color.lightNavy};
`;
