import React from "react";
import CompanyLogo from "./CompanyLogo";
import imageFile from "../../../assets/hp.png";
export default {
  title: "Atoms/Logo",
  component: CompanyLogo,
};
const CompanyLogoTemplate = (args) => <CompanyLogo {...args} />;

export const Primary = CompanyLogoTemplate.bind({});

Primary.args = {
  source: imageFile,
  alt: "test image",
};
