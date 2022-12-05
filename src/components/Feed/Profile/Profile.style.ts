import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const ProfileSubText = styled.span`
    color: ${theme.color.label};
    font-size: ${theme.fontSize.xs};
`;

export const ProfileImg = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
`;

export const ProfileContent = styled.div`
    ${flexbox({ dir: 'column' })};
    gap: 0.2rem;
`;

export const ProfileContainer = styled.div`
    ${flexbox({})};
    gap: 0.5rem;
`;
