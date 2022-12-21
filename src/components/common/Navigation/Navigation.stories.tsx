import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

import Navigation from '.';

export default {
    title: 'common/Navigation',
    component: Navigation,
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = () => {
    const [sortType, setSortType] = useState('NEWEST');

    const handleNaviLi = (value: string) => {
        setSortType(value);
    };
    return <Navigation sortType={sortType} handleNaviLi={handleNaviLi} />;
};
export const Default = Template.bind({});
