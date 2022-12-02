import styled from '@emotion/styled';

export const CommentContainer = styled.li<{ isCocoment: boolean }>`
    position: relative;
    width: 100%;
    max-width: 23.4375rem;
    padding: 24px;
    border-top: 1px solid #ccc;
    background: ${props => (props.isCocoment ? '#ccc' : '#fff')};
`;

export const Content = styled.p`
    font-size: 16px;
    color: #222;
    margin: 12px 0;
`;

export const ReplyButton = styled.button`
    font-size: 12px;
    font-weight: 400;
    color: #666;
`;

export const Edit = styled.div`
    display: flex;
    position: absolute;
    top: 24px;
    right: 24px;
    button {
        color: #666;
        width: 35px;
        height: 30px;
    }
`;
