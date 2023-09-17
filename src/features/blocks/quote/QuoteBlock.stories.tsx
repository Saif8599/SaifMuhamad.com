import { StoryFn } from '@storybook/react';
import QuoteBlock, { QuoteBlockProps } from './QuoteBlock';

export default {
  title: 'Blocks/Quote',
  component: QuoteBlock,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: StoryFn<QuoteBlockProps> = (args) => <QuoteBlock {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: {
    quote:
      'Quote Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Willem van den Assum',
    authorSubscript: 'Titel van beroep',
  },
};

Default.storyName = 'Quote';
