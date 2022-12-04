import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const ProfileSubText = styled.span`
    color: ${theme.color.label};
    font-size: ${theme.fontSize.xs};
`;

export const ProfileContent = styled.div`
    ${flexbox({ dir: 'column' })};
    gap: 0.2rem;
`;

export const ProfileContainer = styled.div`
    ${flexbox({})};
    gap: 0.5rem;
`;

export const FeedHeader = styled.header`
    ${flexbox({ jc: 'space-between', ai: 'center' })};
    padding: 1.5rem;
    height: 4rem;
`;

export const FeedAddress = styled.span`
    color: ${theme.color.gray};
    font-size: ${theme.fontSize.xs};
`;

export const FeedContent = styled.div``;

export const FeedImageBox = styled.img`
    width: 11.25rem;
    height: 11.25rem;
    border-radius: 10px;
    cursor: pointer;
`;

export const FeedImages = styled.div`
    ${flexbox({})};
    overflow: hidden;
    gap: 0.75rem;
`;

export const FeedContainer = styled.div`
    ${flexbox({ dir: 'column' })};
    gap: 1.5rem;
    padding: 2rem 1.5rem 0 1.5rem;
`;

export const LikeButton = styled.button<{ liked: boolean }>`
    ${flexbox({ jc: 'center', ai: 'center' })};
    width: 20.375rem;
    height: 3.25rem;
    margin-top: 3rem;
    border-radius: 50px;
    border: 1px solid
        ${props => (props.liked ? theme.color.navy : theme.color.gray)};

    background-color: ${props =>
        props.liked ? theme.color.navy : theme.color.white};
    cursor: pointer;

    span {
        margin-left: 2px;
        color: ${props => (props.liked ? theme.color.white : theme.color.gray)};
    }
`;

export const FeedPage = styled.section``;
