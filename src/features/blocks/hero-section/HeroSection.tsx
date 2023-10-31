import React from "react";
import { TypeAnimation } from "react-type-animation";

export declare interface HeroSectionJson {
  title: string;
  description: string;
  buttonText?: string;
  subtext?: string;
  backgroundImageUrl?: string;
  imageUrl?: string;
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
      <div className="flex items-center">
        <section
          className="h-full md:h-screen w-full bg-cover bg-center pt-16 md:mt-0 md:py-32 md:pl-10 "
          style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
        >
          <div className="container mx-auto text-left text-white">
            <div className="flex items-center mt-20">
              {imageUrl && (
                <div className="mt-10 md:p-16">
                  <img
                    src={imageUrl}
                    className="h-full w-full object-cover"
                    alt="Layout Image"
                  />
                </div>
              )}
              <div className="md:w-1/2 ml-4 md:mt-4">
                {title && (
                  <h1 className="text-5xl inline md:block md:text-left md:text-8xl font-semibold my-10 md:mb-4">
                    <TypeAnimation
                      sequence={[
                        title, // Types the 'title' prop
                        5000, // Waits 5s
                        "", // Empty string to clear the text
                      ]}
                      speed={20}
                      cursor={true}
                      repeat={Infinity}
                    />
                  </h1>
                )}
                {description && (
                  <p className="text-lg md:text-left md:text-2xl">
                    {description}
                  </p>
                )}
                {buttonText && (
                  <div className="mt-10 mb-10 text-center md:text-left">
                    <a
                      href="#contact"
                      className="inline-block px-10 py-1 text-lg font-medium text-inherit border border-red-700 relative bg-red-500 hover:scale-105 transition-all duration-500"
                    >
                      {buttonText}
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
