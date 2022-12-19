import { ComponentStory, ComponentMeta } from '@storybook/react';
import { rest } from 'msw';

import Feed from '.';

import { feedData } from '@/constants/dummyData';

export default {
    title: 'pages/Feed',
    component: Feed,
} as ComponentMeta<typeof Feed>;

const Template: ComponentStory<typeof Feed> = () => <Feed />;
export const Default = Template.bind({});
Default.parameters = {
    msw: {
        handlers: [
            rest.get(`/api/feeds/1`, (req, res, ctx) =>
                res(
                    ctx.status(200),
                    ctx.delay(1000),
                    ctx.json({ feed: feedData })
                )
            ),
        ],
    },
};
