import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const ImageButton = styled.input`
    display: none;
`;

export const ImageLabel = styled.label`
    cursor: pointer;
`;

export const ProfileForm = styled.div`
    ${flexbox({ jc: 'center', ai: 'center' })};
    position: absolute;
    bottom: 0;
    right: 0;
    width: 28px;
    height: 28px;
    background-color: ${theme.color.navy};
    border-radius: 50%;
`;

export const ProfileImage = styled.img`
    width: 7.5rem;
    height: 7.5rem;
    border-radius: 50%;
    background-color: ${theme.color.gray};
`;

export const ImageWrapper = styled.div`
    ${flexbox({ jc: 'center' })};
    margin: 2.625rem 0 1rem 0;
    position: relative;
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
    min-width: 23.4375rem;
    min-height: 50.75rem;
    position: relative;
    background-color: ${theme.color.white};
`;
