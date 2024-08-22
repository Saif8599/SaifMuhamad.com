import React from "react";
import RichText from "../../ui/typography/rich-text/RichText";

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
      <div className="mx-auto">
        <section className="px-4 md:p-12 ml-0 md:ml-10" id="about">
          <h2 className="text-3xl font-bold mb-8">{title}</h2>
          <div
            className={`flex-col md:flex ${
              !imageUrl ? "" : "md:flex-row-reverse items-center"
            } `}
          >
            <div className="md:flex-1 max-w-xl mb-8 md:mb-0">
              <RichText className="text-lg mb-4" html={description} />
              <a
                href="https://docs.google.com/document/d/1h_xIuYQEtmoW-3Gcasjyj0Dl6H539N5yC7RLyg3_zFo/edit?usp=sharing"
                target="_blank"
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
    </div>
  );
};

export default AboutBlock;
