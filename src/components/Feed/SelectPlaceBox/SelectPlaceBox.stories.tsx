import { ComponentStory, ComponentMeta } from '@storybook/react';

import SelectPlaceBox from '.';

export default {
    title: 'components/Feed/SelectPlaceBox',
    component: SelectPlaceBox,
} as ComponentMeta<typeof SelectPlaceBox>;

const Template: ComponentStory<typeof SelectPlaceBox> = args => (
    <SelectPlaceBox {...args} />
);

export const Default = Template.bind({});
