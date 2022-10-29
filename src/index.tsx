import App from '@/App';
import GlobalStyle from '@/styles/GlobalStyle';
import theme from '@/styles/theme';
import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';


if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
    const { worker } = require('./mocks/browsers');
    worker.start();
}

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <RecoilRoot>
                <GlobalStyle />
                <App />
            </RecoilRoot>
        </ThemeProvider>
    </React.StrictMode>
);