import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const ProfileImage = styled.img`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: #d9d9d9;
`;

export const ProfileDetail = styled.div`
    ${flexbox({})};
    gap: 0.5rem;
`;

export const ProfileEmailText = styled.span`
    color: ${theme.color.lightGray};
`;

export const ProfileContent = styled.div`
    ${flexbox({ dir: 'column', jc: 'center' })};
    gap: 0.5rem;
`;

export const Profile = styled.div`
    ${flexbox({})};
    gap: 1rem;
    padding: 20px 1rem;
    border-bottom: 1px solid ${theme.color.silver};
`;
