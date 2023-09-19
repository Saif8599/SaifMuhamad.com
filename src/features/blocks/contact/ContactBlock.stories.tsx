import { StoryFn } from '@storybook/react';
import ContactBlock, { ContactBlockProps } from './ContactBlock';

export default {
  title: 'Blocks/Contact',
  component: ContactBlock,
};

const Template: StoryFn<ContactBlockProps> = (args) => <ContactBlock {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'Contact';
