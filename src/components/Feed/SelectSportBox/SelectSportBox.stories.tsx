import { ComponentStory, ComponentMeta } from '@storybook/react';

import SelectSportBox from '.';

import { sportCategories } from '@/constants/dummyData';

export default {
    title: 'components/Feed/SelectSportBox',
    component: SelectSportBox,
} as ComponentMeta<typeof SelectSportBox>;

const Template: ComponentStory<typeof SelectSportBox> = args => (
    <SelectSportBox {...args} />
);

export const Default = Template.bind({});

Default.args = {
    sportCategories,
};
