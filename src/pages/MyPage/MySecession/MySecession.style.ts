import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const Title = styled.h1`
    font-size: ${theme.fontSize.title};
    color: ${theme.color.navy};
    font-weight: bold;
    margin-bottom: 0.5rem;
`;

export const TitleWrapper = styled.div`
    margin: 3.75rem 0 2.5rem 0;
`;

export const SubTitle = styled.p``;

export const DesUl = styled.ul`
    ${flexbox({ dir: 'column' })};
    gap: 0.75rem;
`;

export const DesLi = styled.li`
    font-size: ${theme.fontSize.xs};

    strong {
        font-weight: bold;
    }
    ::before {
        content: '• ';
        color: ${theme.color.gray};
    }
`;

export const Content = styled.div`
    background-color: ${theme.color.silver};
    border-radius: 5px;
    padding: 1.5rem;
`;

export const CheckButton = styled.button<{ isCheck: boolean }>`
    ${flexbox({ jc: 'center', ai: 'center' })}
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${props =>
        props.isCheck ? theme.color.navy : theme.color.white};
`;

export const CheckText = styled.span``;

export const CheckWrapper = styled.div`
    ${flexbox({ ai: 'center' })};
    gap: 0.5rem;
    font-size: ${theme.fontSize.xs};
    color: ${theme.color.label};
`;

export const SecessionForm = styled.form`
    ${flexbox({ dir: 'column' })};
    gap: 1rem;
    padding: 0 1.5rem;
`;

export const ButtonText = styled.span<{ isCheck: boolean }>`
    color: ${props => (props.isCheck ? theme.color.white : theme.color.black)};
`;

export const ButtonWrapper = styled.div`
    position: absolute;
    bottom: 0;
    padding-bottom: 3.25rem;
`;

export const MySecessionPage = styled.section`
    ${flexbox({ dir: 'column' })};
    min-width: 23.4375rem;
    min-height: 50.75rem;
`;
