import { Story } from '@storybook/react';
import Avatar, { AvatarProps } from './Avatar';

export default {
  title: 'Images and icons/Avatar',
  component: Avatar,
};

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: {
    id: 1,
    title: 'Placeholder image',
    url: 'https://picsum.photos/200/300',
  },
};
Default.storyName = 'Avatar';
