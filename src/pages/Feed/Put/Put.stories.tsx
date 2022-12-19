import { ComponentStory, ComponentMeta } from '@storybook/react';

import PutFeed from '.';

export default {
    title: 'pages/PutFeed',
    component: PutFeed,
} as ComponentMeta<typeof PutFeed>;

const Template: ComponentStory<typeof PutFeed> = () => <PutFeed />;
export const Default = Template.bind({});
