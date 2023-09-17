import CoverImage, { CoverImageProps } from './CoverImage';
import { Story } from '@storybook/react';

export default {
  title: 'Images and icons/Cover image',
  component: CoverImage,
};

const Template: Story<CoverImageProps> = (args) => <CoverImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <h1>Title</h1>
      <h2>Subtitle</h2>
    </>
  ),
  className: 'flex flex-col justify-center items-center text-white text-center',
  image: {
    id: 1,
    title: 'Cover image alt text',
    url: 'https://images.unsplash.com/photo-1482685945432-29a7abf2f466?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1778&q=80',
  },
};
Default.storyName = 'Cover image';
