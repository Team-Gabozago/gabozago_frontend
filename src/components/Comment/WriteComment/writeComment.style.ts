import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
    padding: 24px;
    display: flex;
`;

export const Profile = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 100%;
    margin-right: 10px;
    background: #999;
`;

export const InputContainer = styled.div`
    border-bottom: 1px solid #b2b2c8;
    flex: 1;
    display: flex;
    :focus-within {
        border-bottom: 1px solid #2e4fff;
        Button {
            color: #2e4fff;
        }
    }
`;

export const Input = styled.input`
    color: #b2b2c8;
    font-size: 12px;
    background: none;
    border: none;
    padding: 8px;
    flex: 1;
`;

export const Button = styled.button`
    width: 45px;
    font-size: 12px;
    padding: 8px;
    background: none;
    border: none;
    color: #b2b2c8;
`;
