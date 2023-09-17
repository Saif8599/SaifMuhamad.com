import { Story } from '@storybook/react';
import BrandLogo, { BrandLogoProps } from './BrandLogo';

export default {
  title: 'Images and icons/Brand logo',
  component: BrandLogo,
};

const Template: Story<BrandLogoProps> = (args: BrandLogoProps) => (
  <BrandLogo {...args} />
);

export const Default = Template.bind({});
Default.storyName = 'Brand logo';
Default.args = {
  brand: 'zilveren-kruis',
};
Default.argTypes = {
  brand: {
    options: [
      'zilveren-kruis',
      'interpolis-glashelder',
      'eurocross-assistance',
      'syntruss',
    ],
    controls: { type: 'radio' },
  },
};
