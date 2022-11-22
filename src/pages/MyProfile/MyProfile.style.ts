import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const ProfileImage = styled.img`
    width: 7.5rem;
    height: 7.5rem;
    border-radius: 50%;
`;

export const ImageWrapper = styled.div`
    ${flexbox({ jc: 'center' })};
    margin: 2.625rem 0 1rem 0;
`;

export const EditForm = styled.form`
    ${flexbox({ dir: 'column', ai: 'center' })};
    gap: 1rem;
`;

export const ButtonWrapper = styled.div`
    margin-top: 5.5rem;
`;

export const MyProfile = styled.section`
    ${flexbox({ dir: 'column' })};
    min-height: 50.75rem;
    min-width: 23.4375rem;
    padding: 1.75rem 0 4.375rem 0;
    position: relative;
    background-color: ${theme.color.white};
`;
