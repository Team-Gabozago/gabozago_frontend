import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';

import Verification from '@/pages/Verification';

const StartPage = lazy(() => import('@/pages/Start'));
const HomePage = lazy(() => import('@/pages/Home'));
const IconPage = lazy(() => import('@/pages/Icons'));
const SignupPage = lazy(() => import('@/pages/Signup'));
const LoginPage = lazy(() => import('@/pages/Login'));
const MyPage = lazy(() => import('@/pages/MyPage'));
const MyProfilePage = lazy(() => import('@/pages/MyProfile'));

const PostViewPage = lazy(() => import('@/pages/PostView'));
export default function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={null}>
                <Routes>
                    {/* <Route element={<Verification />}> */}
                    {/* 로그인이 필요한 페이지들 여기에 넣어주기 */}
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/mypage/edit" element={<MyProfilePage />} />
                    {/* </Route> */}
                    <Route path="/" element={<Layout />}>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/icons" element={<IconPage />} />
                        <Route path="/" element={<StartPage />} />
                        <Route
                            path="/post:postSeq"
                            element={<PostViewPage />}
                        />
                        <Route path="/home" element={<HomePage />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}
