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
      title: "Linear",
      description:
        "A modern, project management tool for high-performing teams.",
      image: "./assets/linearAppLogo.png",
      link: "https://linear.app",
    },
    {
      id: "2",
      title: "Next.js",
      description:
        "A React framework for production with hybrid static & server rendering.",
      image: "./assets/nextJSLogo.png",
      link: "https://nextjs.org",
    },
    {
      id: "3",
      title: "React",
      description: "A JavaScript library for building user interfaces.",
      image: "./assets/reactLogo.png",
      link: "https://reactjs.org",
    },
    {
      id: "4",
      title: "Storybook",
      description:
        "An open-source tool for developing UI components in isolation for React.",
      image: "./assets/storybookLogo.png",
      link: "https://storybook.js.org",
    },
    {
      id: "5",
      title: "Framer Motion",
      description: "A production-ready motion library for React.",
      image: "./assets/framerMotionLogo.png",
      link: "https://www.framer.com/motion/",
    },
    {
      id: "6",
      title: "MySQL",
      description: "An open-source relational database management system.",
      image: "./assets/MySqlLogo.png",
      link: "https://www.mysql.com",
    },
  ],
};

Default.storyName = "TechStack";
