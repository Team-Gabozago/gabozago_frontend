import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LikeSportModal from '.';

import { meData } from '@/constants/dummyData';

export default {
    title: 'components/LikeSportModal',
    component: LikeSportModal,
} as ComponentMeta<typeof LikeSportModal>;

const Template: ComponentStory<typeof LikeSportModal> = args => (
    <LikeSportModal {...args} />
);

export const Default = Template.bind({});

Default.args = {
    likeSports: meData.categories,
    handleCancelModal: action('Button Clicked'),
};
