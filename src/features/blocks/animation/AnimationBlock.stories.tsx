import { StoryFn } from '@storybook/react';
import AnimationBlock, { AnimationBlockProps } from './AnimationBlock';

export default {
  title: 'Scrollytelling/Animation',
  component: AnimationBlock,
};

const Template: StoryFn<AnimationBlockProps> = (args) => <AnimationBlock {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'Animation';
