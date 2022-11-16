import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';

const StartPage = lazy(() => import('@/pages/Start'));
const HomePage = lazy(() => import('@/pages/Home'));
const IconPage = lazy(() => import('@/pages/Icons'));
const SignupPage = lazy(() => import('@/pages/Signup'));
const LoginPage = lazy(() => import('@/pages/Login'));
export default function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={null}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/icons" element={<IconPage />} />
                        <Route path="/" element={<StartPage />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}