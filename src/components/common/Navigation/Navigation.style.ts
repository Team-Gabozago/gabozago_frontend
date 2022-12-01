import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const NaviUL = styled.ul`
    ${flexbox({ jc: 'space-between' })};
    padding: 0 5.75rem;
`;

export const NaviText = styled.span`
    margin-left: 3px;
`;

export const NaviBorder = styled.div<{ clickedValue: boolean }>`
    width: 20px;
    height: 2px;
    margin: 0.5rem auto 0;
    background-color: ${props =>
        props.clickedValue ? theme.color.greenSpeech : theme.color.lightNavy};
`;

export const NaviLi = styled.li<{ clickedValue: boolean }>`
    color: ${props =>
        props.clickedValue ? theme.color.greenSpeech : theme.color.lightNavy};
    font-size: ${theme.fontSize.xs};
    cursor: pointer;
`;

export const Navigation = styled.nav`
    margin-bottom: 0.75rem;
`;
