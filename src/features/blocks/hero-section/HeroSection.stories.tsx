import { StoryFn } from "@storybook/react";
import HeroSection, { HeroSectionProps } from "./HeroSection";

export default {
  title: "Blocks/HeroSection",
  component: HeroSection,
  parameters: {
    layout: "fullscreen",
  },
};

const Template: StoryFn<HeroSectionProps> = (args) => <HeroSection {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: {
    title: "Welcome",
    description: "Quote Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    buttonText: "click me",
    subtext: "subtext",
    backgroundImageUrl: "https://picsum.photos/500/600",
    imageUrl: "https://picsum.photos/500/600",
  },
};

Default.storyName = "HeroSection";
