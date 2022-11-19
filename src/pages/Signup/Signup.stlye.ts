import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const Title = styled.h1`
    width: 18.5rem;
    font-size: ${theme.fontSize.title};
    font-weight: bold;
`;

export const TitleWrapper = styled.div`
    ${flexbox({ jc: 'center' })};
    margin-bottom: 2rem;
`;

// Email Modal Area

export const EmailModalTitle = styled.h1`
    font-size: ${theme.fontSize.md};
    font-weight: bold;
`;

export const SubEmailText = styled.span`
    font-size: ${theme.fontSize.xs};
    color: ${theme.color.label};
`;

export const EmailModalButton = styled.button`
    width: 16.625rem;
    height: 3rem;
    border-radius: 10px;
    background-color: ${theme.color.blue};
    color: ${theme.color.white};
`;

export const EmailCheckButton = styled.button`
    width: 4.375rem;
    height: 1.875rem;
    border-radius: 5px;
    padding: 0.5rem;
    color: ${theme.color.white};
    background-color: ${theme.color.gray};
`;

export const EmailModalWrapper = styled.div`
    ${flexbox({ dir: 'column', ai: 'center' })};
    gap: 2rem;
    padding: 1.875rem 1.75rem 1.625rem;
`;

export const EmailButtonWrapper = styled.div`
    ${flexbox({})}
    width: 18.5rem;
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

export const SignupWrapper = styled.section`
    padding: 7.5rem 0 4.375rem 0;
`;
