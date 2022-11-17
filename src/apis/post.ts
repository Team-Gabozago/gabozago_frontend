import endpoint from './endpoint';

import { MyPageResponse } from '@/types/post';

const getMyPage = async (): Promise<MyPageResponse> => {
    const response = await endpoint.get('/mypage');
    const { data } = response;
    return data;
};
export { getMyPage };
