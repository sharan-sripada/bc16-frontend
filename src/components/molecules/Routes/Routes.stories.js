import React from 'react';
import Routes from './Routes';

export default {
    title: 'Molecules/Routes',
    component: Routes
}

const Template = (args) =><Routes {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    from: "East Marredpally, E Marredpally",
    to: "Hitech City, Telangana, Secunderabad",
};
