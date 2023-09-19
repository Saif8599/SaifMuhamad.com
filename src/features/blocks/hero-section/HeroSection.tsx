import React from "react";

export declare interface HeroSectionJson {
  title: string;
  description: string;
  buttonText?: string;
  subtext?: string;
  backgroundImageUrl?: string;
  imageUrl: string;
}

export interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  data: HeroSectionJson;
}

const HeroSection = (props: HeroSectionProps) => {
  const { data, className = "", ...restProps } = props;
  const {
    title,
    description,
    buttonText,
    subtext,
    backgroundImageUrl,
    imageUrl,
  } = data;

  return (
    <div className={`w-full ${className}`} {...restProps}>
      <div className="h-full md:h-screen flex items-center">
        <section
          className="bg-cover bg-center py-0 md:py-32 w-full"
          style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
        >
          <div className="container mx-auto text-center text-black">
            <div className="flex flex-col-reverse md:flex-row-reverse items-center">
              <div className="mt-10 md:p-16">
                <img
                  src={imageUrl}
                  className="h-full w-full object-cover "
                  alt="Layout Image"
                />
              </div>
              <div className="md:w-1/2 mt-0 md:mt-4">
                {title && (
                  <h1 className="text-6xl md:text-left md:text-8xl font-semibold my-10 md:mb-4">
                    {title}
                  </h1>
                )}
                {description && (
                  <p className="text-lg md:text-left md:text-2xl">
                    {description}
                  </p>
                )}
                {buttonText && (
                  <div className="mt-10 text-center md:text-left">
                    <a
                      href="#"
                      className="inline-block px-10 py-1 text-lg font-medium text-inherit border border-blue-700 relative bg-blue-500 hover:bg-inherit"
                    >
                      {buttonText}
                      <span className=""></span>
                    </a>
                  </div>
                )}
                {subtext && (
                  <p className="text-sm mt-4 md:text-left">{subtext}</p>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
