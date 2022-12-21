import { ComponentStory, ComponentMeta } from '@storybook/react';

import Form from '.';

export default {
    title: 'components/Feed/Form',
    component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = () => <Form />;

export const Default = Template.bind({});
