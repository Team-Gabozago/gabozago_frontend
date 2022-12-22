import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CreateInputView from '.';

export default {
    title: 'components/Comments/CreateInputView',
    component: CreateInputView,
} as ComponentMeta<typeof CreateInputView>;

const Template: ComponentStory<typeof CreateInputView> = args => (
    <CreateInputView {...args} />
);

export const Default = Template.bind({});

Default.args = {
    profile_image:
        'https://pbs.twimg.com/media/E5icr1KVoAIS1tI?format=jpg&name=medium',
    handleChangeComment: action('Change..'),
    handleAddComment: action('Submit'),
};
