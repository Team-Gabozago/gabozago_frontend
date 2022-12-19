import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icons from '.';

export default {
    title: 'pages/Icons',
    component: Icons,
} as ComponentMeta<typeof Icons>;

const Template: ComponentStory<typeof Icons> = () => <Icons />;

export const Default = Template.bind({});
