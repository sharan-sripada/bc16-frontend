import Button from './Button';

export default {
    title: 'atoms/Button',
    component: Button,
}

const Template = (args) => <Button {...args} />
 
export const Primary = Template.bind({});

Primary.args = {
    label: "Next",
    color: "primary",
    type: "medium",
    variant: "contained",
}