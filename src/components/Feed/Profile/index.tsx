import { FeedProfileType } from '@/types/feed';
import { calculateDate } from '@/utils/date';

interface FeedProfileProps {
    author: FeedProfileType;
    updated_at: string;
}

const FeedProfile = ({ author, updated_at }: FeedProfileProps) =>
    author && (
        <div className="flex gap-2">
            <img
                className="w-8 h-8 rounded-full"
                src={author.profile_image_url}
                alt="프로필 이미지"
            />
            <div className="flex flex-col gap-1">
                <span>{author.nickname}</span>
                <span className="text-xs text-label">{calculateDate(updated_at)}</span>
            </div>
        </div>
    );

export default FeedProfile;
