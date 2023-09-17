import Quote from '../../ui/typography/Quote/Quote';
import React from 'react';



export declare interface QuoteBlockJson {
  quote: string;
  author?: string;
  authorSubscript?: string;
}

export interface QuoteBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  data: QuoteBlockJson;
}

const QuoteBlock = (props: QuoteBlockProps) => {
  const { data, className = '', children, ...restProps } = props;
  const { quote, author = '', authorSubscript = '' } = data;


  return (
    <div className={`w-full ${className}`} {...restProps}>
      <div className="max-w-4xl mx-auto px-4 py-11 md:py-32">
        <Quote
          quote={quote}
          author={author}
          authorSubscript={authorSubscript}
        />
      </div>
    </div>
  );
};

export default QuoteBlock;
