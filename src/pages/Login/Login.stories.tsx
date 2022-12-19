import { ComponentStory, ComponentMeta } from '@storybook/react';

import Login from '.';

export default {
    title: 'pages/Login',
    component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = () => <Login />;

export const Default = Template.bind({});
