import { ComponentStory, ComponentMeta } from '@storybook/react';

import Profile from '.';

export default {
    title: 'components/Feed/Profile',
    component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = args => <Profile {...args} />;

export const Default = Template.bind({});

Default.args = {
    author: {
        id: 7,
        nickname: "Muffin",
        profile_image_url: 'https://pbs.twimg.com/media/E5icr1KVoAIS1tI?format=jpg&name=medium'
    },
    updated_at: '2022-12-21T05:14:32.060605'
}