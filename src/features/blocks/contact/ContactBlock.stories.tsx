import { StoryFn } from '@storybook/react';
import ContactBlock, { ContactBlockProps } from './ContactBlock';

export default {
  title: 'Blocks/Contact',
  component: ContactBlock,
};

const Template: StoryFn<ContactBlockProps> = (args) => <ContactBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    title: "About Me",
    description: `Do you want to ask questions? or have some advice for me or just want to say 'Hi'
     in any case feel free to get in touch with me, I am always open to discussing new projects,
     creative ideas or opportunities to be part of your visions. The quickest way to reach out to me is via my email.`,
    buttonText: "Email",
  }
};
Default.storyName = 'Contact';
