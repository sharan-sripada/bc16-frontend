import React from "react";
import ArrowBackComponent from './BackArrow';

export default {
        title: "Atoms/ArrowBack",
        component: ArrowBackComponent,
        argTypes: { onClick: { action: "clicked" } },
}

const Template = (args) => (
      <ArrowBackComponent {...args} />
  );
export const Primary = Template.bind({});
  Primary.args = {
    label: "Back",
  };
export const Secondary = Template.bind({});
  Secondary.args = {
    label: " ",
  };
  
  