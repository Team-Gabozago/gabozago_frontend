import { ComponentStory, ComponentMeta } from '@storybook/react';

import Comment from '.';

import { commentData } from '@/constants/dummyData';

export default {
    title: 'components/Comments/Comment',
    component: Comment,
} as ComponentMeta<typeof Comment>;

const Template: ComponentStory<typeof Comment> = args => <Comment {...args} />;

export const Default = Template.bind({});

Default.args = {
    comment: commentData,
};
