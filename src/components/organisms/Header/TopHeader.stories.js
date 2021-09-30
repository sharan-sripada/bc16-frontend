import React from "react";
import TopHeader from './TopHeader';
import profileImg from '../../../assets/profileImg.png';
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

export default {
    title: "Organisms/Header",
    component: TopHeader,
  };

const Template = (args) => <TopHeader {...args} />;

export const Primary = Template.bind({});

Primary.args={
    locationLabel:"East Maredupally,Secunderabad",
    profileName:"Sara Joseph",
    icon:<LocationOnOutlinedIcon color="disabled" />,
    profile:profileImg
}