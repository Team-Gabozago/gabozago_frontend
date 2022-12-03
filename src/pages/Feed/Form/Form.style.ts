import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';
import { fadeInDown } from '@/utils/animation';

export const SelectSportBox = styled.div`
    width: 20.375rem;
    height: 22.5rem;
    position: absolute;
    top: 10rem;
    padding: 1rem 1.5rem;
    background-color: ${theme.color.lightSilver};
    border-radius: 10px;
    z-index: 999;
    overflow-y: auto;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const LabelWrapper = styled.div`
    animation: ${fadeInDown} 1s;
`;

export const Label = styled.label`
    color: ${theme.color.label};
    font-size: ${theme.fontSize.xs};
    margin-right: 5px;
`;

export const SubText = styled.span`
    color: ${theme.color.lightGray};
    font-size: ${theme.fontSize.xs};
`;

export const Asterisk = styled.span`
    color: ${theme.color.blue};
    font-size: ${theme.fontSize.xs};
`;

export const ContentTextArea = styled.textarea`
    width: 20.375rem;
    height: 17.5rem;
    padding: 0.75rem 0.5rem;
    border: 1px solid ${theme.color.gray};
    border-radius: 5px;
    resize: none;
    animation: ${fadeInDown} 1s;
`;

export const FileLabel = styled.label`
    display: inline-block;
    width: 4.5rem;
    height: 4.5rem;
    background-color: ${theme.color.navy};
    border-radius: 5px;
    cursor: pointer;
`;

export const FileInput = styled.input`
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
`;

export const ImageContainer = styled.article`
    ${flexbox({})};
    flex-wrap: wrap;
    gap: 0.75rem;
`;

export const ImageBox = styled.img`
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 5px;
    cursor: pointer;
`;

export const ImageHeader = styled.header`
    ${flexbox({ jc: 'space-between' })};
    margin-bottom: 0.5rem;
`;

export const ImageWrapper = styled.div`
    margin-bottom: 4rem;
`;

export const ButtonWrapper = styled.div`
    margin-bottom: 4rem;
`;

export const ButtonText = styled.span<{ isDisabled: boolean }>`
    color: ${props =>
        props.isDisabled ? theme.color.black : theme.color.white};
`;

export const Form = styled.form`
    ${flexbox({ dir: 'column' })};
    gap: 1.5rem;
    padding: 1.5rem;
`;
