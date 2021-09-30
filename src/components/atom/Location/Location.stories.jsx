import React from "react";
import Location from "./Location";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

export default {
  title: "Molecules/Location",
  component: Location,
};
const LocationTemplate = (args) => <Location {...args} />;

export const Primary = LocationTemplate.bind({});

Primary.args = {
  label: "East Maredupally, Hyderabad, Telangana",
  icon: <LocationOnOutlinedIcon color="disabled" />,
};
