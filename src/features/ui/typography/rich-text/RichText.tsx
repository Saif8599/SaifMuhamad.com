import React from 'react';

export interface RichTextProps extends React.HTMLAttributes<HTMLDivElement> {
  html: string;
}

const RichText = (props: RichTextProps) => {
  const { html, className = '', ...restProps } = props;

  return (
    <div
      className={`prose prose-blue max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
      {...restProps}
    />
  );
};

export default RichText;
