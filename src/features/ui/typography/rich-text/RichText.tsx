import React from 'react';

export interface RichTextProps extends React.HTMLAttributes<HTMLDivElement> {
  html: string;
}

const RichText = (props: RichTextProps) => {
  const { html, className = '', ...restProps } = props;


  return (
    <div
      className={`max-w-none prose prose-base md:prose-lg
      prose-h2:text-2xl md:prose-h2:text-4xl prose-h3:text-xl md:prose-h3:text-3xl prose-h4:text-lg md:prose-h4:text-2xl prose-h4:text-gray-700
      ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
      {...restProps}
    />
  );
};

export default RichText;
