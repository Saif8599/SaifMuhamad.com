import { StoryFn } from '@storybook/react';
import TypeAnimationText, { TypeAnimationTextProps } from './TypeAnimation';

export default {
  title: 'Animations/TypeAnimationText',
  component: TypeAnimationText,
};

const Template: StoryFn<TypeAnimationTextProps> = (args) => <TypeAnimationText {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'TypeAnimationText';
