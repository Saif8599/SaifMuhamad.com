import { StoryFn } from '@storybook/react';
import NavbarBlock, { NavbarProps } from './NavbarBlock';

export default {
  title: 'Blocks/Navbar',
  component: NavbarBlock,
};

const Template: StoryFn<NavbarProps> = (args) => <NavbarBlock {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.storyName = "Navbar";

