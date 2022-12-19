import { ComponentStory, ComponentMeta } from '@storybook/react';

import AfterLoginLayout from '.';

export default {
    title: 'pages/AfterLoginLayout',
    component: AfterLoginLayout,
} as ComponentMeta<typeof AfterLoginLayout>;

const Template: ComponentStory<typeof AfterLoginLayout> = () => (
    <AfterLoginLayout />
);

export const Default = Template.bind({});
