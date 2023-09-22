import { StoryFn } from '@storybook/react';
import AboutBlock, { AboutBlockProps } from './AboutBlock';

export default {
  title: 'Blocks/About',
  component: AboutBlock,
};

const Template: StoryFn<AboutBlockProps> = (args) => <AboutBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    title: "About Me",
    description: "I'm a Fullstack Webdeveloper student at ROC of Amsterdam. As a person, I'm eager to learn new skills to improve myself",
    buttonText: "My Resume",
    imageUrl: "https://picsum.photos/500/600",
  }
};
Default.storyName = 'About'
