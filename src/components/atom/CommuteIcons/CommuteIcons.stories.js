import React from 'react';
import CommuteIcons from "./CommuteIcons"
import { action } from '@storybook/addon-actions';

export default {
    title: 'Atoms/CommuteIcons',
    component: CommuteIcons
}

const Template = (args) => <CommuteIcons {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    type : 'metro',
    selected: true,
    onClick: action("Metro icon clicked"),
};