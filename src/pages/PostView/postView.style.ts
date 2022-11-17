import styled from '@emotion/styled';

export const ViewContainer = styled.div`
    width: 375px;
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

export const Location = styled.p``;

export const InputContainer = styled.div`
    padding: 20px 24px;
    border-top: 1px solid #666;
`;
