import { ComponentStory, ComponentMeta } from '@storybook/react';

import Signup from '.';

export default {
    title: 'pages/Signup',
    component: Signup,
} as ComponentMeta<typeof Signup>;

const Template: ComponentStory<typeof Signup> = () => <Signup />;

export const Default = Template.bind({});
