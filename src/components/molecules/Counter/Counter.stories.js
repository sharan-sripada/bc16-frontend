import React from "react";
import Counter from "./Counter";

const CounterStory = {
  title: "Molecules/Counter",
  component: Counter,
};

const Template = (args) => <Counter {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  number: "953",
  city: "Hyderabad",
  showCity: true,
};

export default CounterStory;
