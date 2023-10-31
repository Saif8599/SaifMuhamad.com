import { StoryFn } from "@storybook/react";
import ProjectsBlock, { ProjectsBlockProps } from "./ProjectsBlock";

export default {
  title: "Blocks/Projects",
  component: ProjectsBlock,
};

const Template: StoryFn<ProjectsBlockProps> = (args) => (
  <ProjectsBlock {...args} />
);

export const Default = Template.bind({});
Default.args = { projects: getProjects() };

Default.storyName = "Projects";

function getProjects(): ProjectsBlockProps['projects'] {
  return [
    {
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget urna tortor. Duis at ex non nunc fringilla tempor.",
      link: "https://example.com/project-one",
      linkText: "View Project 1",
      image: "http://via.placeholder.com/640x361",
    },
    {
      title: "Project 2",
      description:
        "Sed euismod ultrices lacus, ut feugiat neque congue a. Mauris dapibus libero ac tristique rhoncus.",
      link: "https://example.com/project-two",
      linkText: "View Project 2",
      image: "http://via.placeholder.com/640x362",
    },
    {
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget urna tortor. Duis at ex non nunc fringilla tempor.",
      link: "https://example.com/project-one",
      linkText: "View Project 3",
      image: "http://via.placeholder.com/640x363",
    },
    {
      title: "Project 4",
      description:
        "Sed euismod ultrices lacus, ut feugiat neque congue a. Mauris dapibus libero ac tristique rhoncus.",
      link: "https://example.com/project-two",
      linkText: "View Project 4",
      image: "http://via.placeholder.com/640x364",
    },

  ];
}
