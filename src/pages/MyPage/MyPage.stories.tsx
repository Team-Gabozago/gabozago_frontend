import { ComponentStory, ComponentMeta } from '@storybook/react';

import MyPage from '.';

export default {
    title: 'pages/MyPage',
    component: MyPage,
} as ComponentMeta<typeof MyPage>;

const Template: ComponentStory<typeof MyPage> = () => <MyPage />;
export const Default = Template.bind({});
