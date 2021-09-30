import React from 'react';
import TransportMode from "./TransportMode";

export default {
    title: 'Molecules/DetailedIconText',
    component: TransportMode
}

const Template = (args) => <TransportMode {...args} />;

export const Text1 = Template.bind({});
Text1.args = {
    type: 'bus',
    fare: '15$',
    time: '20 mins',
    description: "Catch a bus 38X at 3.42 PM to Secunderabad bus stand.",
    status: '2 mins',
    isLate: true
};

export const Text2 = Template.bind({});
Text2.args = {
    type: 'walk',
    time: '5 mins',
    description: "Head north on St. Johns road."
};

export const Text3 = Template.bind({});
Text3.args = {
    type: 'metro',
    fare: '56$',
    time: '38 mins',
    description: "Catch a blue line metro towards Raidurg.",
    isLate: false
};