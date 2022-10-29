import App from '@/App';
import React from 'react';
import { createRoot } from 'react-dom/client';

if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
    const { worker } = require('./mocks/browsers');
    worker.start();
}

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);