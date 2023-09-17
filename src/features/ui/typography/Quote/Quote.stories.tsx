import { Story } from '@storybook/react';
import Quote, { QuoteProps } from './Quote';

export default {
  title: 'Typography/Quote',
  component: Quote,
};

const Template: Story<QuoteProps> = (args) => <Quote {...args} />;

export const Default = Template.bind({});
Default.args = {
  quote: 'Hello there',
  author: 'Ewan McGreggor',
  authorSubscript: 'Actor in Star Wars',
};
Default.storyName = 'Quote';
