import { Story } from '@storybook/react';
import Card, { CardProps } from './Card';

export default {
  title: 'Surfaces and overlays/Card',
  component: Card,
};

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <div className="example-container h-40">Card content</div>,
};
Default.storyName = 'Card';
