import { Feed } from '@/interfaces/feed';
import { calculateDate } from '@/utils/date'


const FeedComponent = ({ post }: { post: Feed }) => {
    const { author, comments, content, likes, title, updated_at, images } = post;

    return (
        <div className="max-w-xs flex justify-center items-center mb-2.5 rounded bg-white">
            {images && <img src={images[0]} className="w-36 h-full bg-lightGray" alt={`${title}'s feedImage`} />}
            <div className="p-4 flex-1">
                <p className="text-xs text-label mb-1.5">{calculateDate(updated_at)}</p>
                <h3 className="text-sm font-weight text-ellipsis">{title}</h3>
                <div className="my-4 text-xs text-label">{content}</div>
                <div className="flex justify-between text-xs text-label">
                    <span>{author.nickname}</span>
                    <ul className="flex gap-1">
                        <li>하트 {likes}</li>
                        <li>댓글 {comments}</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default FeedComponent;
