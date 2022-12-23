import { ComponentStory, ComponentMeta } from '@storybook/react';

import Blank from '.';

export default {
    title: 'components/Blank',
    component: Blank,
} as ComponentMeta<typeof Blank>;

const Template: ComponentStory<typeof Blank> = () => <Blank />;

export const Default = Template.bind({});
