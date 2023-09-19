import { StoryFn } from '@storybook/react';
import FooterBlock, { FooterBlockProps } from './FooterBlock';

export default {
  title: 'Blocks/Footer',
  component: FooterBlock,
  parameters: {
    layout: "fullscreen",
  },
};

const Template: StoryFn<FooterBlockProps> = (args) => <FooterBlock {...args} />;

export const Default = Template.bind({});
Default.args = {

};
Default.storyName = 'Footer';
