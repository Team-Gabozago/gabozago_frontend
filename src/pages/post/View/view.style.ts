import styled from '@emotion/styled';

export const ViewContainer = styled.div`
    width: 23.4375rem;
    background-color: #fff;
`;

export const Title = styled.h1`
    position: relative;
    color: #e1e1f4;
    font-size: 20px;
    text-align: center;
    padding: 20px 28px;
    border-bottom: 1px solid #5c5c6a;
    a {
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
`;

export const ProfileContainer = styled.div`
    position: relative;
    padding: 24px 20px;
    border-bottom: 1px solid #666;
`;

export const EditButton = styled.button`
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
`;

export const ContentContainer = styled.div`
    padding: 28px 24px;
`;

export const Content = styled.p`
    font-size: 16px;
    color: #2c2c3a;
    margin: 30px 0;
`;

export const InterestedButton = styled.button`
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #9f9f9f;
    text-align: center;
    color: #fff;
    font-size: 16px;
    border-radius: 50px;
`;

export const Location = styled.p``;

export const InputContainer = styled.div`
    padding: 20px 24px;
    border-top: 1px solid #666;
`;
