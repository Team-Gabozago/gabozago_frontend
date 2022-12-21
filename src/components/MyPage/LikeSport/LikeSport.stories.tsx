import { ComponentStory, ComponentMeta } from '@storybook/react';

import LikeSport from '.';

import { meData } from '@/constants/dummyData';

export default {
    title: 'components/MyPage/LikeSport',
    component: LikeSport,
} as ComponentMeta<typeof LikeSport>;

const Template: ComponentStory<typeof LikeSport> = args => (
    <LikeSport {...args} />
);

export const Default = Template.bind({});

Default.args = {
    categories: meData.categories,
};
