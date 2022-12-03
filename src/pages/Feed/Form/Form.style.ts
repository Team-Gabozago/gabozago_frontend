import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const LabelWrapper = styled.div``;

export const Label = styled.label``;

export const Asterisk = styled.span`
    color: ${theme.color.blue};
`;

export const ContentTextArea = styled.textarea`
    width: 20.375rem;
    height: 17.5rem;
    padding: 0.75rem 0.5rem;
    border: 1px solid ${theme.color.gray};
    border-radius: 5px;
`;

export const Form = styled.form`
    ${flexbox({ dir: 'column' })};
    gap: 1.5rem;
    padding: 1.5rem;
`;
