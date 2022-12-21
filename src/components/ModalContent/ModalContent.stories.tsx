import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ModalContent from '.';

export default {
    title: 'components/ModalContent',
    component: ModalContent,
} as ComponentMeta<typeof ModalContent>;

const Template: ComponentStory<typeof ModalContent> = (args) => (
    <ModalContent {...args} />
);
export const Default = Template.bind({});

Default.args = {
    title: "변경이 완료되었습니다.",
    description: "닉네임이 성공적으로 변경 되었습니다.",
    buttonText: "확인",
    handleButtonClick: action("clicked"),
}


