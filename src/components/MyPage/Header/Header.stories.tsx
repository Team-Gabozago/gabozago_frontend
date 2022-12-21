import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from '.';

export default {
    title: 'components/MyPage/Header',
    component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
    title: '마이페이지',
};
