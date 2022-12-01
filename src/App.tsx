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
const MyProfilePage = lazy(() => import('@/pages/MyPage/MyProfile'));
const MyPasswordPage = lazy(() => import('@/pages/MyPage/MyPassword'));
const MySecessionPage = lazy(() => import('@/pages/MyPage/MySecession'));

const PostViewPage = lazy(() => import('@/pages/post/View'));
const PostEditPage = lazy(() => import('@/pages/post/Edit'));
const LogoutPage = lazy(() => import('@/pages/Logout'));

const MyLikePage = lazy(() => import('@/pages/MyPage/MyLike'));
const MyBoardPage = lazy(() => import('@/pages/MyPage/MyBoard'));
const MyCommentPage = lazy(() => import('@/pages/MyPage/MyComment'));

const LikePage = lazy(() => import('@/pages/InterestedPost'));
export default function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={null}>
                <Routes>
                    <Route element={<Verification />}>
                        <Route path="/like" element={<LikePage />} />
                        {/* 로그인이 필요한 페이지들 여기에 넣어주기 */}
                        <Route path="/mypage" element={<MyPage />} />
                        <Route
                            path="/mypage/edit"
                            element={<MyProfilePage />}
                        />
                        <Route
                            path="/mypage/password"
                            element={<MyPasswordPage />}
                        />
                        <Route
                            path="/mypage/secession"
                            element={<MySecessionPage />}
                        />
                        <Route path="/mypage/board" element={<MyBoardPage />} />
                        <Route
                            path="/mypage/comment"
                            element={<MyCommentPage />}
                        />
                        <Route path="/mypage/like" element={<MyLikePage />} />
                    </Route>
                    <Route path="/" element={<Layout />}>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/icons" element={<IconPage />} />
                        <Route path="/" element={<StartPage />} />
                        <Route
                            path="/post:postSeq"
                            element={<PostViewPage />}
                        />
                        <Route path="/edit" element={<PostEditPage />} />

                        <Route path="/home" element={<HomePage />} />
                        <Route path="/logout" element={<LogoutPage />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}
