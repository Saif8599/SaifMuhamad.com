import { StoryFn } from '@storybook/react';
import ScrollLinkedWordTyper, { ScrollLinkedWordTyperProps } from './ScrollLinkedWordTyper';

export default {
  title: 'Scrollytelling/ScrollLinkedWordTyper',
  component: ScrollLinkedWordTyper,
};

const Template: StoryFn<ScrollLinkedWordTyperProps> = (args) => <ScrollLinkedWordTyper {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'ScrollLinkedWordTyper';
