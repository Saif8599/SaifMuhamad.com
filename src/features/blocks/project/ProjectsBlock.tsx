import React, { useState } from "react";
import RichText from "../../ui/typography/rich-text/RichText";

export interface ProjectsBlock {
  title: string;
  description: string;
  link: string;
  linkText: string;
  image?: string;
}

export interface ProjectsBlockProps
  extends React.HTMLAttributes<HTMLDivElement> {
  projects: ProjectsBlock[];
}

const ProjectsBlock = (props: ProjectsBlockProps) => {
  const { projects, className = "", ...restProps } = props;

  const [selectedProject, setSelectedProject] = useState<ProjectsBlock | null>(
    projects[0]
  );

  const handleProjectSelection = (project: ProjectsBlock) => {
    setSelectedProject(project);
  };

  return (
    <div className={`${className}`} {...restProps}>
      <div className="min-h-screen flex justify-center items-center">
        <section className="px-4 md:p-12 ml-0 md:ml-10" id="projects">
          <h2 className="text-3xl font-bold mb-8">My Projects</h2>
          <div className="mx-auto flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/2 flex flex-wrap">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="mb-4 w-full md:w-1/2 rounded-lg shadow-md p-4 cursor-pointer"
                  onClick={() => handleProjectSelection(project)}
                >
                  <div className="mb-2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-32 object-cover rounded"
                    />
                  </div>
                  <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                </div>
              ))}
            </div>
            <div className="w-full md:w-1/2">
              {selectedProject && (
                <div className=" rounded-lg shadow-md p-4">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full mb-4 h-40 object-cover rounded"
                  />
                  <h2 className="text-xl font-bold mb-2">
                    {selectedProject.title}
                  </h2>
                  <RichText
                    className="text-sm"
                    html={selectedProject.description}
                  />
                  {selectedProject.linkText && (
                    <a
                      href={selectedProject.link}
                      className="block mt-4 px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg text-center hover:bg-red-600 transition-all duration-300"
                    >
                      {selectedProject.linkText}
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectsBlock;
