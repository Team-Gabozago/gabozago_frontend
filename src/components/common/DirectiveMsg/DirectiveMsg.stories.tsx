import { ComponentStory, ComponentMeta } from '@storybook/react';

import DirectiveMsg from '.';

export default {
    title: 'common/DirectiveMsg',
    component: DirectiveMsg,
} as ComponentMeta<typeof DirectiveMsg>;

const Template: ComponentStory<typeof DirectiveMsg> = args => (
    <DirectiveMsg {...args} />
);

export const Default = Template.bind({});

Default.args = {
    active: true,
    children: '6자 이내의 한글, 영문, 숫자로 입력해주세요',
};
