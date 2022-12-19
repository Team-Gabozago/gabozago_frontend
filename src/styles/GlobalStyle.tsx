import { Global, css } from '@emotion/react';

import { flexbox } from '@/styles/mixin';

import '../tailwind/index.css';
import './reset.css';
import './font.css';

const style = css`
    * {
        box-sizing: border-box;
    }
    html {
        font-size: 1rem;
    }
    body {
        ${flexbox({ jc: 'center' })};
        box-sizing: border-box;
        background-color: #fff;
        overflow-x: hidden;
        font-family: 'Pretendard-Regular';
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    select,
    input,
    button,
    textarea {
        border: 0;
        outline: 0 !important;
        padding: 0;
    }
    button {
        cursor: pointer;
        background-color: transparent;
    }
    input[type='number']::-webkit-outer-spin-button,
    input[type='number']::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

export default function GlobalStyle() {
    return <Global styles={style} />;
}
