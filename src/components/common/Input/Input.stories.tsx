import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';

import Input from '.';

import theme from '@/styles/theme';

export default {
    title: 'Input',
    component: Input,
    disabled: false,
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: ['text', 'email', 'button', 'tel']
            },
            defaultValue: 'text'
        },
        name: {
            control: {
                type: 'text'
            },
            defaultValue: '별명'
        },
        width: {
            control: {
                type: 'number'
            },
            defaultValue: 18.5
        },
        height: {
            control: {
                type: 'number'
            },
            defaultValue: 3.25
        },
        placeholder: {
            control: {
                type: 'text'
            },
            defaultValue: '공백 포함 6자 이내의 한글, 영문, 숫자로 입력해주세요'
        },
        disabled: {
            control: {
                type: 'boolean',
            },
            defaultValue: false,
        },
        active: {
            control: {
                type: 'boolean',
            },
            defaultValue: true,
        }
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => {
    const [value, setValue] = useState<string>('');

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    return (<Input {...args} value={value} onChange={handleOnChange} />)
}

export const Default = Template.bind({});

export const SignupInput = () => (
    <Input as="text" name="별명" width={18.5} height={3.25} placeholder="공백 포함 6자 이내의 한글, 영문, 숫자로 입력해주세요" value="muffin" backgroundColor={theme.color.lime} />
);

SignupInput.parameters = {
    docs: {
        description: {
            story: '`SignupInput` 인풋 입니다.',
        },
    },
    controls: {
        disabled: true,
    },
}