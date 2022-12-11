import styled from '@emotion/styled';

import theme from '@/styles/theme';

export const PostContainer = styled.li`
    display: flex;
    list-style: none;
    margin-bottom: 10px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    background: ${theme.color.white};
`;

export const Post = styled.div`
    padding: 16px;
    flex: 1;
`;

export const Time = styled.p`
    font-size: ${theme.fontSize.xs};
    color: ${theme.color.label};
    margin-bottom: 5px;
`;
export const Title = styled.h3`
    font-size: ${theme.fontSize.sm};
    font-weight: 600;
    text-overflow: ellipsis;
`;
export const Content = styled.div`
    margin: 15px 0;
    font-size: ${theme.fontSize.xs};
    color: ${theme.color.label};
`;

export const WriterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 8px;
    color: ${theme.color.label};
`;

export const WriterUl = styled.ul`
    display: flex;
    gap: 5px;
    li {
        list-style: none;
    }
`;

export const ImageContainer = styled.img`
    height: 100%;
    max-height: 200px;
    min-height: 190px;
    max-width: 40%;
    width: 100%;
    background: #999;
`;
