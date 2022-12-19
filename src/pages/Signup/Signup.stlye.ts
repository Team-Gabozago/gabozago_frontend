import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const Title = styled.h1`
    width: 18.5rem;
    font-size: ${theme.fontSize.title};
    font-family: 'Spoqa-Han-Sans-Neo';
    font-weight: bold;
`;

export const TitleWrapper = styled.div`
    ${flexbox({ jc: 'center' })};
    margin-bottom: 2rem;
`;

export const EmailCheckButton = styled.button`
    width: 4.375rem;
    height: 1.875rem;
    border-radius: 5px;
    padding: 0.5rem;
    font-size: ${theme.fontSize.xs};
    color: ${theme.color.white};
    background-color: ${theme.color.gray};
`;

export const EmailButtonWrapper = styled.div`
    ${flexbox({})}
    width: 18.5rem;
    margin-bottom: 1rem;
`;

export const ButtonText = styled.span<{ color: string }>`
    color: ${props => props.color};
`;

export const ButtonWrapper = styled.div`
    margin-top: 2rem;
`;

export const SignupForm = styled.form`
    ${flexbox({ dir: 'column', ai: 'center' })}
    gap: 1rem;
`;

export const ContentWrapper = styled.div`
    padding: 7.5rem 0 4.375rem 0.75rem;
`;

export const SignupWrapper = styled.section``;
