import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CreateComment from '.';

export default {
    title: 'components/Comments/CreateComment',
    component: CreateComment,
} as ComponentMeta<typeof CreateComment>;

const Template: ComponentStory<typeof CreateComment> = args => (
    <CreateComment {...args} />
);

export const Default = Template.bind({});

Default.args = {
    handleCancelClick: action('clicked'),
};
