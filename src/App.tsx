import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('@/pages/Home'));
const IconPage = lazy(() => import('@/pages/Icons'));
const SignupPage = lazy(() => import('@/pages/Signup'));
export default function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={null}>
                <Routes>
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/icons" element={<IconPage />} />
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}