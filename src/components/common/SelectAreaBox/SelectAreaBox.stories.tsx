import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SelectAreaBox from '.';

import { areaInfos } from '@/constants/dummyData';

export default {
    title: 'common/SelectAreaBox',
    component: SelectAreaBox,
} as ComponentMeta<typeof SelectAreaBox>;

const Template: ComponentStory<typeof SelectAreaBox> = args => (
    <SelectAreaBox {...args} />
);

export const Default = Template.bind({});

Default.args = {
    areaInfos,
    handlePlaceArea: action('clicked'),
};
