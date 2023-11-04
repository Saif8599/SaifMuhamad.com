import { StoryFn } from "@storybook/react";
import TechStackBlock, { TechStackBlockProps } from "./TechStackBlock";

export default {
  title: "Blocks/TechStack",
  component: TechStackBlock,
};

const Template: StoryFn<TechStackBlockProps> = (args) => (
  <TechStackBlock {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "My Tech Stack",
  description: "A collection of technologies I frequently use:",
  techStackItems: [
    {
      id: "1",
      title: "React",
      description: "A JavaScript library for building user interfaces.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: "2",
      title: "Node.js",
      description:
        "An open-source, cross-platform JavaScript run-time environment.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: "3",
      title: "React",
      description: "A JavaScript library for building user interfaces.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: "4",
      title: "Node.js",
      description:
        "An open-source, cross-platform JavaScript run-time environment.",
      image: "https://via.placeholder.com/150",
    },
  ],
};

Default.storyName = "TechStack";
