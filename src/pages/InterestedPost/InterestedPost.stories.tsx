import { ComponentStory, ComponentMeta } from '@storybook/react';

import InterestedPost from '.';

export default {
    title: 'pages/InterestedPost',
    component: InterestedPost,
} as ComponentMeta<typeof InterestedPost>;

const Template: ComponentStory<typeof InterestedPost> = () => (
    <InterestedPost />
);

export const Default = Template.bind({});
