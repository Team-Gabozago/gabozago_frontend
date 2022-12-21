import { ComponentStory, ComponentMeta } from '@storybook/react';

import Title from '.';

export default {
    title: 'common/Title',
    component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = () => (
    <Title>
        우리 동네의 <br />새 제안이에요.
    </Title>
);
export const Default = Template.bind({});
