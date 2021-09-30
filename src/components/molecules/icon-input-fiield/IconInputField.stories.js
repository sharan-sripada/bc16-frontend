import IconInputField from './IconInputField';

export default {
    title: 'molecules/IconInputField',
    component: IconInputField
}

const Template = (args) => <IconInputField {...args} />

export const Primary = Template.bind({});

Primary.args = {
    variant: "secondary",
    placeholder: "Search Skills"
}