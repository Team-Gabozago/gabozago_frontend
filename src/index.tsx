import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import App from '@/App';
import GlobalStyle from '@/styles/GlobalStyle';
import './assets/style.css';

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
            <RecoilRoot>
                <GlobalStyle />
                <App />
            </RecoilRoot>
        </QueryClientProvider>
    </React.StrictMode>
);
