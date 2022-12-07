
import * as S from './Put.style';

import Form from '@/components/Feed/Form';
import Header from '@/components/MyPage/Header';

const PutFeedPage = () => (
    <S.PutFeedPage>
        <Header title="새 글 작성" />
        <Form />
    </S.PutFeedPage>
);

export default PutFeedPage;
