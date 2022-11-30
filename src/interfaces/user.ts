import { LikeSportCategory } from './sport';

export interface MyProfile {
    id: number;
    email: string;
    nickname: string;
    profile_image: string;
    categories: LikeSportCategory[];
}
