import { StoryFn } from '@storybook/react';
import Footer, { FooterProps } from './Footer';

export default {
  title: 'Blocks/Footer',
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
};

const Template: StoryFn<FooterProps> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {

};
Default.storyName = 'Footer';
