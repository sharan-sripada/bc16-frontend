import React from 'react';
import CabList from './CabList';

export default {
    title: 'molecules/CabList',
    component: CabList,
};

const Template = ({...args}) => <div style={{width:"400px"}}><CabList {...args} /></div>

export const Primary = Template.bind({});
Primary.args = {
};
