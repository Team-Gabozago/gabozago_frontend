import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    height: 38px;
    align-content: flex-start;
`;

export const Writer = styled.h3`
    color: #222;
    font-size: 16px;
    flex: 1;
`;
export const Time = styled.span`
    color: #666;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    flex: 1;
`;

export const Image = styled.div`
    display: inline-block;
    width: 36px;
    height: 36px;
    background: #d9d9d9;
    margin-right: 8px;
    border-radius: 100%;
`;
