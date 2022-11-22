import styled from '@emotion/styled';

import theme from '@/styles/theme';

export const Footer = styled.footer`
    width: 100%;
    max-width: 375px;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #f0f0f0;
    padding: 13px;
    border-radius: 10px 10px 0 0;
    background-color: ${theme.color.darkGray};
`;

export const LinkUl = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    li {
        flex: 1;
        text-align: center;
        background: #d9d9d9;
    }
`;
