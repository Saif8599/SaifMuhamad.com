import { StoryFn } from '@storybook/react';
import AboutBlock, { AboutBlockProps } from './AboutBlock';

export default {
  title: 'Blocks/About',
  component: AboutBlock,
};

const Template: StoryFn<AboutBlockProps> = (args) => <AboutBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    title: "About Me",
    description: `
    <h2 class="text-3xl text-red-700 font-mono font-bold mb-2">Greetings!</h2>

    <p class="text-lg md:text-2xl mb-2">I'm a software developer passionate about building a better web,
    creating great experiences for end users, and trying to solve
    real-world problems with an eye for design.</p>

    <p class="text-lg md:text-2xl mb-10">As a person, I'm deeply committed to continuous self-improvement and acquiring new skills.
    In my world, code is the canvas, and creativity knows no bounds.</p>`,
    buttonText: "My Resume",
    imageUrl: "https://placebear.com/g/600/300",
  }
};
Default.storyName = 'About'
