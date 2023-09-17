import React from 'react';
import { useTheme } from '../../../theme/ThemeProvider';

export interface RichTextProps extends React.HTMLAttributes<HTMLDivElement> {
  html: string;
}

const getHeadingsColorClassName = (textColor: string) => {
  switch (textColor) {
    case 'text-green-500':
      return 'prose-headings:text-green-500';
    case 'text-blue-500':
      return 'prose-headings:text-blue-500';
    case 'text-yellow-500':
      return 'prose-headings:text-yellow-500';
    case 'text-lime-500':
      return 'prose-headings:text-lime-500';
    case 'text-amber-500':
      return 'prose-headings:text-amber-500';
    default:
      return 'prose-headings:text-purple-500';
  }
};

const RichText = (props: RichTextProps) => {
  const { html, className = '', ...restProps } = props;

  const { theme } = useTheme();

  const headingsColorClassName = getHeadingsColorClassName(theme.textDark);

  return (
    <div
      className={`max-w-none prose prose-base md:prose-lg
      prose-h2:text-2xl md:prose-h2:text-4xl prose-h3:text-xl md:prose-h3:text-3xl prose-h4:text-lg md:prose-h4:text-2xl
      ${headingsColorClassName} prose-h4:text-gray-700
      ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
      {...restProps}
    />
  );
};

export default RichText;
