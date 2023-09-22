import React from "react";

export interface ContactBlockProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const ContactBlock = (props: ContactBlockProps) => {
  const { className = "", ...restProps } = props;

  return (
<div className={`${className}`} {...restProps}>
  <section className=" text-black px-4 md:p-12" id="contact">
    <div className="container md:ml-10 mx-auto">
      <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
      <div className="max-w-2xl text-white-1">
        <p className="mb-10">
          Do you want to ask questions? or have some advice for me or just
          want to say "Hi" in any case feel free to get in touch with me, I
          am always open to discussing new projects, creative ideas or
          opportunities to be part of your visions. The quickest way to reach
          out to me is via my email.
        </p>
        <a
          href="mailto:ninja_saif@hotmail.com"
          className="px-10 py-4 text-lg font-medium text-inherit border border-red-500 hover:bg-red-500 hover:text-white transition-all duration-500"
        >
          ninja_saif@hotmail.com
        </a>
      </div>
    </div>
  </section>
</div>

  );
};

export default ContactBlock;
