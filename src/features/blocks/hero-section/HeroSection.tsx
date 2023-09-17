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
      <div className="h-screen flex items-center">
        <section
          className="bg-cover bg-center py-32 w-full"
          style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
        >
          <div className="container mx-auto text-left text-black">
            <div className="flex items-center">
              <div className="w-1/2">
                {title && (
                  <h1 className="text-5xl font-medium mb-6">{title}</h1>
                )}
                {description && <p className="text-xl mb-40">{description}</p>}
                {buttonText && (
                  <a
                    href="#"
                    className="bg-blue-500 text-white py-4 px-12 rounded-full hover:bg-blue-600"
                  >
                    {buttonText}
                  </a>
                )}
                {subtext && <p className="text-sm mt-4">{subtext}</p>}
              </div>
              <div className="w-1/2 pl-16">
                <img
                  src={imageUrl}
                  className="h-64 w-full object-cover rounded-xl"
                  alt="Layout Image"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
