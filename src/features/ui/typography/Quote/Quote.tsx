import React from 'react';

export interface QuoteProps extends React.HTMLAttributes<HTMLElement> {
  quote: string;
  author?: string;
  authorSubscript?: string;
}

const Quote = (props: QuoteProps) => {
  const {
    quote,
    author,
    authorSubscript,
    className = '',
    children,
    ...restProps
  } = props;


  return (
    <blockquote
      className={`text-center md:text-left ${className}`}
      {...restProps}
    >
      <div className={`text-3xl md:text-5xl font-serif`}>
        &ldquo;{quote}&rdquo;
      </div>
      {author && (
        <div className="mt-8 md:mt-10 md:text-2xl font-bold text-gray-900">
          {author}
        </div>
      )}
      {authorSubscript && (
        <div className="text-gray-900">{authorSubscript}</div>
      )}
    </blockquote>
  );
};

export default Quote;
