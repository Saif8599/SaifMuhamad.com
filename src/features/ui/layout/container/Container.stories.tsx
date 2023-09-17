import { Story } from '@storybook/react';
import Container, { ContainerProps } from './Container';

export default {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story<ContainerProps> = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <div className="example-container h-screen">Container</div>,
};
Default.storyName = 'Container';
