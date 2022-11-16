import * as S from './postView.style';

import Comment from '@/components/Comment';
import CommentProfile from '@/components/Comment/Profile';

const PostView = () => (
    <S.ViewContainer>
        <button type="button">홈버튼</button>
        <h2>매주 목 퇴근 후 배드민턴</h2>
        <CommentProfile />
        <button type="button">버튼</button>
        <div>content</div>
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
    </S.ViewContainer>
);

export default PostView;
