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
    title: "Lorem Ipsum",
    description: "Quote Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    buttonText: "Lorem Ipsum",
    subtext: "",
    backgroundImageUrl: "http://via.placeholder.com/640x360",
  },
};

Default.storyName = "HeroSection";
