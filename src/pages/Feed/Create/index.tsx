import Form from '../Form';

import { CreateFeedPage } from "./Create.style";
import * as S from './Create.style';

import Header from "@/components/MyPage/Header";

const Create = () => (
    <S.CreateFeedPage>
        <Header title="새 글 작성" />
        <Form />
        <CreateFeedPage />
    </S.CreateFeedPage>
)

export default Create;