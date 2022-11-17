import styled from '@emotion/styled';

import theme from '@/styles/theme';

export const DirectiveMsg = styled.span<{ active: boolean }>`
    width: 100%;
    margin-top: 1.6rem;
    font-size: ${theme.fontSize.xs};
    color: ${props =>
        props.active ? theme.color.gray : theme.color.errorText};
`;
