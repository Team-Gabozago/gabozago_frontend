import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const Title = styled.h1`
    font-size: ${theme.fontSize.md};
    font-weight: bold;
    margin-bottom: 1.75rem;
    color: #626272;
`;

export const SubTitle = styled.h4`
    font-size: ${theme.fontSize.xs};
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: #626272;
`;

export const SportTag = styled.div`
    ${flexbox({ ai: 'center' })};
    position: relative;
    padding: 0.5rem 0.75rem;
    max-width: 4.25rem;
    height: 1.75rem;
    border-radius: 1.25rem;
    font-size: ${theme.fontSize.xs};
    border: 1px solid ${theme.color.gray};
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const SportMinusButton = styled.button`
    ${flexbox({ jc: 'center', ai: 'center' })};
    width: 12px;
    height: 12px;
    color: ${theme.color.white};
    background-color: ${theme.color.gray};
    border-radius: 50%;
    position: absolute;
    top: -3px;
    right: -3px;
    cursor: pointer;
`;

export const SportWrapper = styled.div`
    ${flexbox({})};
    gap: 0.5rem;
    position: relative;
`;

export const CurrentLikeSport = styled.div`
    ${flexbox({ dir: 'column' })};
    height: 4rem;
    text-align: center;
    margin-bottom: 1.25rem;
`;

export const SearchInput = styled.input`
    width: 16.625rem;
    padding: 0.5rem 0 0.5rem 0.5rem;
    border-bottom: 1px solid ${theme.color.lightGray};
    ::placeholder {
        color: ${theme.color.gray};
    }
`;

export const KeywordPlustButton = styled.button`
    width: 1.5rem;
    height: 1.5rem;
    color: ${theme.color.white};
    background-color: ${theme.color.gray};
    border-radius: 50%;
`;

export const KeywordBox = styled.div`
    ${flexbox({ jc: 'space-between', ai: 'center' })};
    padding: 10px 1rem;
    border-bottom: 1px solid ${theme.color.silver};
`;

export const SearchContent = styled.div`
    height: 8rem;
    overflow-y: auto;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const SearchLikeSportForm = styled.form`
    ${flexbox({ dir: 'column' })};
    margin-bottom: 1.75rem;
    text-align: center;
`;

export const ButtonWrapper = styled.div`
    ${flexbox({})};
    gap: 1rem;
    margin-top: auto;
`;

export const LikeSportModal = styled.div`
    ${flexbox({ dir: 'column', ai: 'center' })};
    height: 100%;
    padding: 2rem 1.75rem 1.25rem 1.75rem;
`;
