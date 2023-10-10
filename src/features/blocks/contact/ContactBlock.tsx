import React from "react";
import RichText from "../../ui/typography/rich-text/RichText";

export declare interface ContactBlockJson {
  title: string;
  description: string;
  buttonText: string;
}

export interface ContactBlockProps
  extends React.HTMLAttributes<HTMLDivElement> {
  data: ContactBlockJson;
}

const ContactBlock = (props: ContactBlockProps) => {
  const { data, className = "", ...restProps } = props;
  const { title, description, buttonText } = data;

  return (
    <div className={`${className}`} {...restProps}>
      <section className=" px-4 md:p-12" id="contact">
        <div className="container md:ml-10 mx-auto">
          <h2 className="text-3xl font-bold mb-8">{title}</h2>
          <div className="max-w-2xl text-white-1">
          <RichText className="text-lg md:text-2xl mb-10" html={description} />
            {buttonText && (
              <a
                href="mailto:ninja_saif@hotmail.com"
                className="px-10 py-4 text-lg font-medium text-inherit border border-red-500 hover:bg-red-500 hover:text-white transition-all duration-500"
              >
                {buttonText}
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactBlock;
