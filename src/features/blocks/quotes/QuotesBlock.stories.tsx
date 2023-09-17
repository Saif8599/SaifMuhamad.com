import { Story } from '@storybook/react';
import QuotesBlock, { QuotesBlockProps } from './QuotesBlock';

export default {
  title: 'Blocks/Quotes',
  component: QuotesBlock,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story<QuotesBlockProps> = (args) => <QuotesBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    quotes: [
      {
        id: 1,
        quote:
          'If you can’t fly then run, if you can’t run then walk, if you can’t walk then crawl, but whatever you do you have to keep moving forward.',
        author: {
          name: 'Martin Luther King',
          job_title: 'Civil right activist',
        },
        time: '30-40 jaar',
        image: {
          id: 1,
          title: 'Image alt text',
          url: 'https://picsum.photos/640/360',
        },
      },
      {
        id: 2,
        quote:
          'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        author: {
          name: 'Nelson Mandela',
          job_title: 'Former president of south africa',
        },
        time: '40-50 jaar',
        image: {
          id: 1,
          title: 'Image alt text',
          url: 'https://images.unsplash.com/photo-1482685945432-29a7abf2f466?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1778&q=80',
        },
      },
    ],
  },
};
Default.storyName = 'Quotes';
