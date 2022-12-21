import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '.';

import theme from '@/styles/theme';

export default {
    title: 'Button',
    component: Button,
    disabled: false,
    argTypes: {
        children: {
            defaultValue: 'Button',
        },
        size: {
            control: {
                type: 'select',
                options: ['sm', 'md', 'lg'],
            },
            defaultValue: 'md',
        },
        backgroundColor: {
            control: {
                type: 'select',
                options: [
                    `${theme.color.navy}`,
                    `${theme.color.white}`,
                    `${theme.color.navy}`,
                ],
            },
            defaultValue: `${theme.color.navy}`,
        },
        disabled: {
            control: {
                type: 'boolean',
            },
            defaultValue: false,
        },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Default = Template.bind({});

export const LargeButton = () => (
    <Button size="lg" backgroundColor={theme.color.navy}>
        Large
    </Button>
);

export const MediumButton = () => (
    <Button size="md" backgroundColor={theme.color.navy}>
        Medium
    </Button>
);

export const SmallButton = () => (
    <Button size="sm" backgroundColor={theme.color.navy}>
        Small
    </Button>
);

LargeButton.parameters = {
    docs: {
        description: {
            story: '`Large` 버튼 입니다.(상세 내용은 차후에 추가 예정)',
        },
    },
    controls: {
        disabled: true,
    },
};

MediumButton.parameters = {
    docs: {
        description: {
            story: '`Medium` 버튼 입니다.(상세 내용은 차후에 추가 예정)',
        },
    },
    controls: {
        disabled: true,
    },
};

SmallButton.parameters = {
    docs: {
        description: {
            story: '`Small` 버튼 입니다.(상세 내용은 차후에 추가 예정)',
        },
    },
    controls: {
        disabled: true,
    },
};
