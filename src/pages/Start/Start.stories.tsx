import { ComponentStory, ComponentMeta } from '@storybook/react';

import Start from '.';

export default {
    title: 'pages/Start',
    component: Start,
} as ComponentMeta<typeof Start>;

const Template: ComponentStory<typeof Start> = () => <Start />;

export const Default = Template.bind({});
