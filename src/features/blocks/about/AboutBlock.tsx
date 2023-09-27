import React from "react";

export declare interface AboutBlockJson {
  imageUrl?: string;
  title: string;
  description: string;
  buttonText?: string;
}
export interface AboutBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  data: AboutBlockJson;
}

const AboutBlock = (props: AboutBlockProps) => {
  const { data, className = "", ...restProps } = props;
  const { title, description, buttonText, imageUrl } = data;

  return (
    <div className={`${className}`} {...restProps}>
      <section className="px-4 md:p-12 ml-0 md:ml-10" id="about">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <div
          className={`flex-col md:flex ${
            !imageUrl ? "" : "md:flex-row-reverse items-center"
          } `}
        >
          <div className="md:flex-1 max-w-xl mb-8 md:mb-0">
            <p className="text-lg mb-8">{description}</p>
            <a
              href="https://www.linkedin.com/in/saif-muhamad-b919371b5/"
              className="px-6 md:px-10 py-2 text-lg font-medium text-inherit border border-red-500 hover:bg-red-500 hover:text-white transition-all duration-500"
            >
              {buttonText}
            </a>
          </div>
          {imageUrl && (
            <div className="md:flex-1 pb-8 mr-0 md:mr-6">
              <img className="w-auto" src={imageUrl} alt="image" />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AboutBlock;
