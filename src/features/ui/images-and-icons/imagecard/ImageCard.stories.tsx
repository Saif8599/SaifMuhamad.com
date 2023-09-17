import { Story } from '@storybook/react';
import ImageCard, { ImageCardProps } from './ImageCard';

export default {
  title: 'Images and icons/Image card',
  component: ImageCard,
  argTypes: {
    color: {
      options: ['purple', 'green', 'yellow', 'blue', 'lime', 'amber'],
      control: { type: 'radio' },
    },
  },
  excludeStories: /.Mock$/,
};

const Template: Story<ImageCardProps> = (args) => (
  <ImageCard className="min-h-[365px]" {...args} />
);

export const Default = Template.bind({});
Default.args = {
  image: {
    id: 1,
    title: 'Background image alt text',
    url: 'https://picsum.photos/640/360',
  },
  title: 'Wat het knarrenthofje mij allemaal heeft gebracht en nog veel meer',
  color: 'yellow',
};
Default.storyName = 'Image card';

export const WithBrand = Template.bind({});
WithBrand.args = {
  image: {
    id: 1,
    title: 'Background image alt text',
    url: 'https://picsum.photos/640/360',
  },
  title: 'Wat het knarrenthofje mij allemaal heeft gebracht en nog veel meer',
  color: 'yellow',
  brand: 'centraal-beheer',
};
WithBrand.storyName = 'Image card (with brand)';
