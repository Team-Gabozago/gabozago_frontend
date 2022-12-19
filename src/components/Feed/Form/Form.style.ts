import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';
import { fadeInDown } from '@/utils/animation';

export const SelectSportWrapper = styled.div`
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

export const SelectSportUl = styled.ul``;

export const SelectSportLi = styled.li`
    ${flexbox({})};
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid ${theme.color.silver};
    cursor: pointer;
`;

export const CheckBox = styled.div<{ clickedSport: boolean }>`
    ${flexbox({ jc: 'center', ai: 'center' })};
    width: 1rem;
    height: 1rem;
    border: 1px solid ${theme.color.gray};
    border-radius: 50%;
    color: ${props =>
        props.clickedSport ? theme.color.white : theme.color.gray};
    background-color: ${props =>
        props.clickedSport ? theme.color.navy : theme.color.lightSilver};
`;

export const LabelWrapper = styled.div`
    width: 20.375rem;
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

export const FeedInput = styled.input`
    width: 20.375rem;
    padding: 0 0 0.5rem 0.5rem;
    border-bottom: 1px solid ${theme.color.gray};
    animation: ${fadeInDown} 1s;
    &:focus {
        border-bottom: 1px solid ${theme.color.blue};
    }
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
    ${flexbox({ jc: 'center', ai: 'center' })}
    width: 4.5rem;
    height: 4.5rem;
    background-color: ${theme.color.navy};
    color: ${theme.color.white};
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
    width: 20.375rem;
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

export const SearchModalContent = styled.div`
    ${flexbox({ dir: 'column' })};
    gap: 1rem;
    padding: 2rem;
`;

export const SearchHeader = styled.header`
    ${flexbox({})};
    gap: 1rem;
`;

export const SearchInput = styled.input`
    width: 20.375rem;
    padding: 0.5rem;
    border-bottom: 1px solid ${theme.color.gray};
`;

export const SearchButton = styled.button`
    width: 3rem;
    background-color: ${theme.color.navy};
    color: ${theme.color.white};
`;

export const PlaceInfo = styled.div<{ clickedPlace: boolean }>`
    padding: 1rem 0;
    cursor: pointer;
    background-color: ${props =>
        props.clickedPlace ? theme.color.silver : theme.color.white};
`;

export const SubmitButton = styled.button`
    width: 10rem;
    height: 2rem;
    margin: 0 auto;
    border-radius: 10px;
    color: ${theme.color.white};
    background-color: ${theme.color.navy};
`;

export const SearchContent = styled.div`
    height: 30rem;
    overflow-y: auto;
    -ms-overflow-style: none;
`;

export const Form = styled.form`
    ${flexbox({ dir: 'column', ai: 'center' })};
    gap: 1.5rem;
    padding: 1.5rem;
`;
