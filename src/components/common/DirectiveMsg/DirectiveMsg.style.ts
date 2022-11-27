import styled from '@emotion/styled';

import theme from '@/styles/theme';

export const DirectiveMsg = styled.span<{ active: boolean }>`
    width: 18.5rem;
    font-size: ${theme.fontSize.xs};
    color: ${props =>
        props.active ? theme.color.gray : theme.color.errorText};
`;
