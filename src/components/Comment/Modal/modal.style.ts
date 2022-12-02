import styled from '@emotion/styled';

export const Container = styled.div`
    position: fixed;
    width: 100%;
    max-width: 23.4375rem;
    height: 100%;
    opacity: 0.6;
    background: #000;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    z-index: 2;
    display: flex;
    align-items: end;
    overflow: hidden;
    > div {
        width: 100%;
    }
    > div > div {
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }
`;
