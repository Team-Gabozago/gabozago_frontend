import React from 'react';

import Comment from '@/components/Comment';
import CommentProfile from '@/components/CommentProfile';

const PostView = () => (
    <section>
        <h2>매주 목 퇴근 후 배드민턴</h2>
        <CommentProfile />
        <button type="button">버튼</button>
        <div>게시글 내용</div>
        <button type="button">관심있어요</button>
        <div>
            {/* 댓글작성 */}
            <input type="text" placeholder="댓글을 입력해주세요." />
        </div>
        <div>
            {/* 댓글리스트 */}
            <ul>
                <Comment />
            </ul>
        </div>
    </section>
);

export default PostView;
