import App from '@/App';
import GlobalStyle from '@/styles/GlobalStyle';
import theme from '@/styles/theme';
import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';


if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
    const { worker } = require('./mocks/browsers');
    worker.start();
}

const root = createRoot(document.getElementById('root') as HTMLElement);

export const queryClient = new QueryClient();

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <RecoilRoot>
                    <GlobalStyle />
                    <App />
                </RecoilRoot>
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>
);