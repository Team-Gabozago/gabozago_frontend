import { ComponentStory, ComponentMeta } from '@storybook/react';

import Comments from '.';

export default {
    title: 'components/Comments',
    component: Comments,
} as ComponentMeta<typeof Comments>;

const Template: ComponentStory<typeof Comments> = () => {
    const allComments = [
        {
            author: {
                id: 7,
                nickname: 'muff13',
                profile_image_url:
                    'https://pbs.twimg.com/media/E5icr1KVoAIS1tI?format=jpg&name=medium',
            },
            content: 'test',
            feed_author: true,
            id: 185,
            replies: [],
            updated_at: '2022-12-11T11:35:22.288998',
        },
    ];

    return <Comments />;
};

export const Default = Template.bind({});
