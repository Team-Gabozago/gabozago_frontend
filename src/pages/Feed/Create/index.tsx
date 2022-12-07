import * as S from './Create.style';

import Form from '@/components/Feed/Form';
import Header from '@/components/MyPage/Header';

const CreateFeedPage = () => (
    <S.CreateFeedPage>
        <Header title="새 글 작성" />
        <Form />
    </S.CreateFeedPage>
);

export default CreateFeedPage;
