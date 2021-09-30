import React from "react";
import FilterGroup from "./FilterGroup";

export default {
  title: "organisms/FilterGroup",
  component: FilterGroup,
};

const Template = (args) => <FilterGroup {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  handleChange: { action: "Checked!" },
  checked: true,
  color: "primary",
};


