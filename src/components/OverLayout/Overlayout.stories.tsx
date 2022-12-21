import { ComponentStory, ComponentMeta } from '@storybook/react';

import OverLayout from '.';

export default {
    title: 'components/OverLayout',
    component: OverLayout,
} as ComponentMeta<typeof OverLayout>;

const Template: ComponentStory<typeof OverLayout> = args => (
    <OverLayout {...args} />
);

export const Default = Template.bind({});
