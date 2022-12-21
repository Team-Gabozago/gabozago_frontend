import { ComponentStory, ComponentMeta } from '@storybook/react';

import Profile from '.';

import { meData } from '@/constants/dummyData';

export default {
    title: 'components/MyPage/Profile',
    component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = args => <Profile {...args} />;

export const Default = Template.bind({});

Default.args = {
    me: meData,
};
