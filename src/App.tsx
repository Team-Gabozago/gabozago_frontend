import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AfterLoginLayout from './components/AfterLoginLayout';
import BeforeLoginLayout from './components/BeforeLoginLayout';
import MypageLayout from './components/MypageLayout';

import Verification from '@/pages/Verification';

const StartPage = lazy(() => import('@/pages/Start'));
const HomePage = lazy(() => import('@/pages/Home'));
const IconPage = lazy(() => import('@/pages/Icons'));
const SignupPage = lazy(() => import('@/pages/Signup'));
const LoginPage = lazy(() => import('@/pages/Login'));
const MyPage = lazy(() => import('@/pages/MyPage'));
const MyEditProfilePage = lazy(() => import('@/pages/MyPage/MyEditProfile'));
const MyPasswordPage = lazy(() => import('@/pages/MyPage/MyPassword'));
const MySecessionPage = lazy(() => import('@/pages/MyPage/MySecession'));

const PostViewPage = lazy(() => import('@/pages/post/View'));
const PostEditPage = lazy(() => import('@/pages/post/Edit'));
const LogoutPage = lazy(() => import('@/pages/Logout'));

const MyLikePage = lazy(() => import('@/pages/MyPage/MyLike'));
const MyBoardPage = lazy(() => import('@/pages/MyPage/MyBoard'));
const MyCommentPage = lazy(() => import('@/pages/MyPage/MyComment'));

const LikePage = lazy(() => import('@/pages/InterestedPost'));

const CreateFeedPage = lazy(() => import('@/pages/Feed/Create'));
const FeedPage = lazy(() => import('@/pages/Feed'));
export default function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={null}>
                <Routes>
                    <Route element={<Verification />}>
                        <Route path="/" element={<BeforeLoginLayout />}>
                            <Route path="/" element={<StartPage />} />
                        </Route>

                        {/* 로그인이 필요한 페이지들 여기에 넣어주기 */}
                        <Route path="/" element={<AfterLoginLayout />}>
                            <Route path="/like" element={<LikePage />} />
                            <Route path="/home" element={<HomePage />} />
                            <Route path="/mypage/board" element={<MyBoardPage />} />
                            <Route
                                path="/mypage/comment"
                                element={<MyCommentPage />}
                            />
                            <Route path="/mypage/like" element={<MyLikePage />} />
                        </Route>

                        <Route path="/" element={<MypageLayout />}>
                            <Route path="/mypage" element={<MyPage />} />
                            <Route
                                path="/mypage/edit"
                                element={<MyEditProfilePage />}
                            />
                            <Route
                                path="/mypage/password"
                                element={<MyPasswordPage />}
                            />
                            <Route
                                path="/mypage/secession"
                                element={<MySecessionPage />}
                            />
                            <Route path="/feed/create" element={<CreateFeedPage />} />
                            <Route path="/feed/:id" element={<FeedPage />} />
                        </Route>
                    </Route>

                    <Route path="/" element={<BeforeLoginLayout />}>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/icons" element={<IconPage />} />
                        <Route
                            path="/post:postSeq"
                            element={<PostViewPage />}
                        />
                        <Route path="/edit" element={<PostEditPage />} />
                        <Route path="/logout" element={<LogoutPage />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}
