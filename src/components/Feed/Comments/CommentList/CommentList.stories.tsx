import { ComponentStory, ComponentMeta } from '@storybook/react';

import CommentList from '.';

import { allComentData } from '@/constants/dummyData';

export default {
    title: 'components/Comments/CommentList',
    component: CommentList,
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = args => (
    <CommentList {...args} />
);

export const Default = Template.bind({});

Default.args = {
    allComments: allComentData,
};
