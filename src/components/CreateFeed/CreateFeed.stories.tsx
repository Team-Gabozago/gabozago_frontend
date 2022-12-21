import { ComponentStory, ComponentMeta } from '@storybook/react';

import CreateFeed from '.';

export default {
    title: 'components/CreateFeed',
    component: CreateFeed,
} as ComponentMeta<typeof CreateFeed>;

const Template: ComponentStory<typeof CreateFeed> = () => <CreateFeed />;

export const Default = Template.bind({});
