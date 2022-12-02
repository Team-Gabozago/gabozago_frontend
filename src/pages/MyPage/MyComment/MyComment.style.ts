import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const SubTitle = styled.div`
    ${flexbox({ jc: 'center', ai: 'center' })};
    padding: 1.75rem 0;
    color: ${theme.color.darkGray};
    font-size: ${theme.fontSize.xs};
`;

export const Time = styled.p`
    font-size: ${theme.fontSize.xs};
    color: ${theme.color.label};
    margin-bottom: 5px;
`;

export const Title = styled.h3`
    font-size: ${theme.fontSize.xs};
    color: ${theme.color.gray};
    font-weight: 600;
    text-overflow: ellipsis;
`;

export const Divider = styled.div`
    width: 18rem;
    height: 1px;
    margin: 0.75rem 0;
    background-color: ${theme.color.silver};
`;

export const Content = styled.div`
    font-size: ${theme.fontSize.xs};
    color: ${theme.color.label};
`;

export const PostContainer = styled.div`
    ${flexbox({ dir: 'column' })};
    padding: 1rem;
    list-style: none;
    margin-bottom: 10px;
    border-radius: 5px;
    background: ${theme.color.white};
`;

export const MyCommentContent = styled.div`
    padding: 0 1.75rem;
`;

export const EndPoint = styled.div`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${theme.color.gray};
`;

export const EndPointWrapper = styled.div`
    ${flexbox({ jc: 'center' })};
    width: 100%;
    margin-top: 3.75rem;
`;

export const MyCommentPage = styled.section``;
