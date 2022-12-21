import { ComponentStory, ComponentMeta } from '@storybook/react';

import Feed from '.';

export default {
    title: 'common/Feed',
    component: Feed,
} as ComponentMeta<typeof Feed>;

const Template: ComponentStory<typeof Feed> = args => <Feed {...args} />;

export const Default = Template.bind({});

Default.args = {
    post: {
        author: {
            id: 1,
            nickname: 'Muffin',
            profile_image_url:
                'https://pbs.twimg.com/media/E5icr1KVoAIS1tI?format=jpg&name=medium',
        },
        comments: 0,
        content: '안녕하세요 1',
        id: 88,
        likes: 0,
        title: '여기 모여 1',
        updated_at: '2022-12-07T06:19:13.598437',
        images: [],
    },
};

export const ImageFeed = Template.bind({});

ImageFeed.args = {
    post: {
        author: {
            id: 1,
            nickname: 'Muffin',
            profile_image_url:
                'https://pbs.twimg.com/media/E5icr1KVoAIS1tI?format=jpg&name=medium',
        },
        comments: 0,
        content: '안녕하세요 1',
        id: 88,
        likes: 0,
        title: '여기 모여 1',
        updated_at: '2022-12-07T06:19:13.598437',
        images: [
            'https://pbs.twimg.com/media/E5icr1KVoAIS1tI?format=jpg&name=medium',
        ],
    },
};
