import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from '.';

const myArea = {
    address_name: '서울특별시 강동구 성내1동',
    code: 'AREA_FETCHED',
    message: '유저의 구역 조회가 완료됐습니다.',
    region1depth_name: '서울특별시',
    region2depth_name: '강동구',
    region3depth_name: '성내1동',
    region4depth_name: '',
    region_code: '1174064000',
    region_type: 'H',
    x: 127.12242177123132,
    y: 37.53047946477166,
};

export default {
    title: 'common/Header',
    component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => (
    <Header myArea={myArea} />
);

export const Default = Template.bind({});
